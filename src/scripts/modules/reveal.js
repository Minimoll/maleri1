const REVEAL_THRESHOLD = 0.12;
const COUNTER_DURATION = 1600;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';

  const target = parseInt(el.dataset.target, 10);
  if (Number.isNaN(target)) return;

  if (prefersReducedMotion()) {
    el.textContent = target;
    return;
  }

  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / COUNTER_DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    targets.forEach((el) => {
      el.classList.add('in');
      const counters = el.classList.contains('counter')
        ? [el]
        : el.querySelectorAll('.counter');
      counters.forEach(animateCounter);
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');

        const counters = entry.target.classList.contains('counter')
          ? [entry.target]
          : entry.target.querySelectorAll('.counter');
        counters.forEach(animateCounter);
      });
    },
    { threshold: REVEAL_THRESHOLD }
  );

  targets.forEach((el) => observer.observe(el));
}
