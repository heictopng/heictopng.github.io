// toast.js — lightweight toast notifications

let container = null;

function ensureContainer() {
    if (container) return container;
    container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    return container;
}

/**
 * Show a toast notification.
 * @param {string} message  — text to display (may contain newlines)
 * @param {'error'|'warn'|'info'} [type='error']
 * @param {number} [duration=6000]  — ms before auto-dismiss (0 = sticky)
 */
export function showToast(message, type = 'error', duration = 6000) {
    const wrap = ensureContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;

    const msg = document.createElement('span');
    msg.className = 'toast__msg';
    msg.textContent = message;
    toast.appendChild(msg);

    const close = document.createElement('button');
    close.className = 'toast__close';
    close.textContent = '\u00d7';
    close.addEventListener('click', () => dismiss(toast));
    toast.appendChild(close);

    wrap.appendChild(toast);

    // Trigger enter animation on next frame
    requestAnimationFrame(() => toast.classList.add('toast--visible'));

    if (duration > 0) {
        setTimeout(() => dismiss(toast), duration);
    }
}

function dismiss(toast) {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    // Safety: remove after 400 ms even if transitionend doesn't fire
    setTimeout(() => toast.remove(), 400);
}
