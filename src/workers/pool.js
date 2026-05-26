// ./workers/pool.js
export function createWorkerPool(workerUrl, opts = {}) {
    const pct = Number.isFinite(opts.concurrencyPct) ? opts.concurrencyPct : 100;
    const count = computeConcurrencyFromPct(pct);
    const workers = [];
    const idle = [];
    const queue = [];
    const inflight = new Map(); // id -> { resolve, reject, worker, timer, startedAt }
    const JOB_TIMEOUT_MS = 60_000; // 60 s – generous for large HEIF files

    /* ---- worker lifecycle ---- */

    function spawnWorker() {
        const w = new Worker(workerUrl, { type: 'module' });
        wireWorker(w);
        workers.push(w);
        return w;
    }

    function replaceWorker(broken) {
        try { broken.terminate(); } catch (_) { /* already dead */ }
        const wi = workers.indexOf(broken);
        if (wi >= 0) workers.splice(wi, 1);
        const ii = idle.indexOf(broken);
        if (ii >= 0) idle.splice(ii, 1);
        return spawnWorker();
    }

    function wireWorker(w) {
        w.onmessage = (e) => {
            const msg = e.data;
            const entry = inflight.get(msg.id);
            if (!entry) return;
            clearTimeout(entry.timer);
            inflight.delete(msg.id);
            idle.push(entry.worker);
            entry.resolve(msg);
            pump();
        };

        w.onerror = (err) => {
            for (const [id, entry] of inflight.entries()) {
                if (entry.worker === w) {
                    clearTimeout(entry.timer);
                    inflight.delete(id);
                    entry.reject(err);
                }
            }
            // Terminate and replace the broken worker
            const fresh = replaceWorker(w);
            idle.push(fresh);
            pump();
        };
    }

    // Initialise pool
    for (let i = 0; i < count; i++) {
        const w = spawnWorker();
        idle.push(w);
    }

    /* ---- dispatch ---- */

    function pump() {
        while (idle.length > 0 && queue.length > 0) {
            const worker = idle.pop();
            const { id, payload, transfer, resolve, reject } = queue.shift();

            const timer = setTimeout(() => {
                const entry = inflight.get(id);
                if (!entry) return;
                inflight.delete(id);
                const fresh = replaceWorker(entry.worker);
                idle.push(fresh);
                entry.reject(new Error('Worker timed out \u2014 possible system sleep/lock'));
                pump();
            }, JOB_TIMEOUT_MS);

            inflight.set(id, { resolve, reject, worker, timer, startedAt: Date.now() });

            try {
                worker.postMessage(payload, transfer || []);
            } catch (err) {
                clearTimeout(timer);
                inflight.delete(id);
                const fresh = replaceWorker(worker);
                idle.push(fresh);
                reject(err);
                // loop continues \u2014 fresh worker is now idle
            }
        }
    }

    /* ---- visibility recovery ----
       When the page resumes after Win+L / OS sleep, setTimeout timers
       that were frozen won't have fired yet.  Force-expire any job
       that has exceeded its deadline using wall-clock time. */

    if (typeof document !== 'undefined') {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState !== 'visible') return;
            const now = Date.now();
            for (const [id, entry] of inflight.entries()) {
                if (now - entry.startedAt > JOB_TIMEOUT_MS) {
                    clearTimeout(entry.timer);
                    inflight.delete(id);
                    const fresh = replaceWorker(entry.worker);
                    idle.push(fresh);
                    entry.reject(new Error('Worker timed out during system sleep/lock'));
                }
            }
            pump();
        });
    }

    function run({ id, payload, transfer }) {
        return new Promise((resolve, reject) => {
            queue.push({ id, payload, transfer, resolve, reject });
            pump();
        });
    }

    function terminate() {
        for (const [, entry] of inflight) clearTimeout(entry.timer);
        for (const w of workers) w.terminate();
        workers.length = 0;
        idle.length = 0;
        queue.length = 0;
        inflight.clear();
    }

    return { run, terminate };
}

export function computeConcurrencyFromPct(concurrencyPct) {
    const base = MAX_CONCURRENCY;
    const p = Math.max(1, Math.min(100, Math.round(concurrencyPct)));
    const computed = Math.max(1, Math.min(base, Math.round((base * p) / 100)));
    console.log(`Computed concurrency from pct ${concurrencyPct}%: ${computed} (base: ${base})`);
    return computed;
}

export async function runWithLimit(items, limit, fn) {
    const executing = new Set();

    for (const item of items) {
        // .catch() ensures a single rejection can never abort the batch
        // via Promise.race.  Individual errors are handled by fn().
        const p = Promise.resolve().then(() => fn(item)).catch(() => {});
        executing.add(p);
        p.then(() => executing.delete(p));

        if (executing.size >= limit) {
            await Promise.race(executing);
        }
    }

    await Promise.allSettled(Array.from(executing));
}

export const MAX_CONCURRENCY = navigator.hardwareConcurrency
    ? Math.max(1, navigator.hardwareConcurrency) : 2;

console.log(`Using concurrency limit: ${MAX_CONCURRENCY}`);