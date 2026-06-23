
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const header = $('[data-header]');
const nav = $('[data-nav]');
const menuToggle = $('[data-menu-toggle]');
const modal = $('[data-modal]');
const modalProject = $('[data-modal-project]');
const modalTitle = $('[data-modal-title]');
const pdfViewer = $('[data-pdf-viewer]');
const pdfOpen = $('[data-pdf-open]');

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });
header?.classList.toggle('is-scrolled', window.scrollY > 20);

menuToggle?.addEventListener('click', () => {
  nav?.classList.toggle('is-open');
});

$$('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => nav?.classList.remove('is-open'));
});

$$('[data-pdf-path]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!modal || !pdfViewer || !pdfOpen) return;
    const path = button.dataset.pdfPath;
    modalProject.textContent = button.dataset.pdfProject || 'Project';
    modalTitle.textContent = button.dataset.pdfTitle || 'Document';
    pdfViewer.src = path;
    pdfOpen.href = path;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  });
});

function closeModal() {
  if (!modal?.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (pdfViewer) pdfViewer.src = 'about:blank';
}

$$('[data-modal-close]').forEach((button) => button.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});
