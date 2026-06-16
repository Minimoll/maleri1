const RECIPIENT = 'info@maleri1.nu';
const SUCCESS_TIMEOUT = 6000;

export function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    const data = new FormData(form);
    const name = String(data.get('namn') || '').trim();
    const phone = String(data.get('telefon') || '').trim();
    const email = String(data.get('epost') || '').trim();
    const message = String(data.get('meddelande') || '').trim();

    if (!name || !phone || !email || !message) return;

    event.preventDefault();

    const subject = encodeURIComponent(`Förfrågan från hemsidan — ${name}`);
    const body = encodeURIComponent(
      `Namn: ${name}\n` +
      `Telefon: ${phone}\n` +
      `E-post: ${email}\n\n` +
      `Meddelande:\n${message}`
    );

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;

    if (success) {
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), SUCCESS_TIMEOUT);
    }
    form.reset();
  });
}
