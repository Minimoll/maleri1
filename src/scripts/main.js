import { initIcons } from './modules/icons.js';
import { initHeader } from './modules/header.js';
import { initNav } from './modules/nav.js';
import { initReveal } from './modules/reveal.js';
import { initServiceAccordion } from './modules/services.js';
import { initLightbox } from './modules/lightbox.js';
import { initContactForm } from './modules/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initHeader();
  initNav();
  initReveal();
  initServiceAccordion();
  initLightbox();
  initContactForm();
});
