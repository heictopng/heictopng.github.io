// ./workers/pool.js
export function createWorkerPool(workerUrl, opts = {}) {
    const pct = Number.isFinite(opts.concurrencyPct) ? opts.concurrencyPct : 100;
    const workers = Array.from({ length: computeConcurrencyFromPct(pct) }, () => new Worker(workerUrl, { type: 'module' }));
    const idle = [...workers];
    const queue = [];
    const inflight = new Map(); // id -> { resolve, reject, worker }

    function pump() {
        if (idle.length === 0 || queue.length === 0) return;

        const worker = idle.pop();
        const { id, payload, transfer, resolve, reject } = queue.shift();

        inflight.set(id, { resolve, reject, worker });

        try {
            worker.postMessage(payload, transfer || []);
        } catch (err) {
            inflight.delete(id);
            idle.push(worker);
            reject(err);
            pump();
        }
    }

    function run({ id, payload, transfer }) {
        return new Promise((resolve, reject) => {
            queue.push({ id, payload, transfer, resolve, reject });
            pump();
        });
    }

    for (const worker of workers) {
        worker.onmessage = (e) => {
            const msg = e.data;
            const entry = inflight.get(msg.id);
            if (!entry) return;

            inflight.delete(msg.id);
            idle.push(entry.worker);

            entry.resolve(msg);
            pump();
        };

        worker.onerror = (err) => {
            // Fail all inflight jobs owned by this worker
            for (const [id, entry] of inflight.entries()) {
                if (entry.worker === worker) {
                    inflight.delete(id);
                    entry.reject(err);
                }
            }

            // Put it back in rotation (or you could terminate and replace)
            idle.push(worker);
            pump();
        };
    }

    function terminate() {
        for (const w of workers) w.terminate();
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
        const p = Promise.resolve().then(() => fn(item));
        executing.add(p);

        const cleanup = () => executing.delete(p);
        p.then(cleanup, cleanup);

        if (executing.size >= limit) {
            await Promise.race(executing);
        }
    }

    await Promise.allSettled(Array.from(executing));
}

export const MAX_CONCURRENCY = navigator.hardwareConcurrency
    ? Math.max(1, navigator.hardwareConcurrency) : 2;

console.log(`Using concurrency limit: ${MAX_CONCURRENCY}`);