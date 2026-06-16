export function initHeader() {
  const header = document.getElementById('header');
  const heroBg = document.getElementById('heroBg');
  if (!header) return;

  const SCROLL_THRESHOLD = 30;
  const PARALLAX_SPEED = 0.4;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > SCROLL_THRESHOLD);

    if (heroBg && y < window.innerHeight) {
      heroBg.style.transform = `translateY(${y * PARALLAX_SPEED}px)`;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
