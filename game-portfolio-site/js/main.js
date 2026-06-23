const projects = window.PORTFOLIO_PROJECTS || [];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const header = $('[data-header]');
const nav = $('[data-nav]');
const menuToggle = $('[data-menu-toggle]');
const projectSections = $('[data-project-sections]');
const modal = $('[data-modal]');
const modalProject = $('[data-modal-project]');
const modalTitle = $('[data-modal-title]');
const pdfViewer = $('[data-pdf-viewer]');
const pdfOpen = $('[data-pdf-open]');

init();

function init() {
  renderProjectSections();
  bindEvents();
  observeSections();
}

function bindEvents() {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  $$('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('is-open'));
  });

  $$('[data-modal-close]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function handleScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 20);
}

function renderProjectSections() {
  projectSections.innerHTML = projects.map((project) => `
    <section id="project-${project.id}" class="section project-detail" data-section>
      <div class="project-title-row">
        <div>
          <p class="eyebrow">${project.badge}</p>
          <h2>${project.title}</h2>
          <p class="project-genre">${project.genre}</p>
        </div>
      </div>

      <article class="project-concept">
        <div class="project-block-head compact-head">
          <h3>컨셉 아트</h3>
        </div>
        <div class="project-concept-image">
          <img src="${project.cover}" alt="${project.title} 컨셉 아트" loading="lazy" />
        </div>
      </article>

      <article class="project-description">
        <div class="project-block-head compact-head">
          <h3>설명</h3>
        </div>
        <div class="project-description-body">
          <p class="project-hero-line">${project.heroLine}</p>
          <p>${project.summary}</p>
        </div>
      </article>

      <div class="project-result-layout">
        <article class="project-video">
          <div class="project-block-head">
            <div>
              <h3>UE 프로토타입 영상</h3>
            </div>
          </div>
          <div class="video-frame">
            ${renderVideo(project)}
          </div>
        </article>

        <article class="project-docs project-docs-side">
          <div class="project-block-head docs-head">
            <div>
              <h3>기획서 PDF</h3>
            </div>
          </div>
          <div class="document-list">
            ${project.docs.map((doc, index) => `
              <button type="button" class="document-card document-list-item" data-project-id="${project.id}" data-document-index="${index}">
                <span>
                  <small>${String(index + 1).padStart(2, '0')}</small>
                  <strong>${doc.label}</strong>
                </span>
              </button>
            `).join('')}
          </div>
        </article>
      </div>
    </section>
  `).join('');

  $$('[data-project-id][data-document-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const project = projects.find(item => item.id === button.dataset.projectId);
      const doc = project?.docs[Number(button.dataset.documentIndex)];
      if (project && doc) openPdf(project, doc);
    });
  });
}

function renderVideo(project) {
  if (project.youtubeId && project.youtubeId.trim()) {
    const id = encodeURIComponent(project.youtubeId.trim());
    return `<iframe src="https://www.youtube.com/embed/${id}" title="${project.title} 게임플레이 영상" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }

  return `
    <div class="video-placeholder">
      <div>
        <strong>${project.title} 영상 슬롯</strong>
        <p>${project.videoNote}</p>
      </div>
    </div>
  `;
}

function observeSections() {
  const links = $$('.site-nav a');
  const targets = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  }, {
    rootMargin: '-35% 0px -55% 0px',
    threshold: [0.01, 0.25, 0.5]
  });

  targets.forEach(target => observer.observe(target));
}

function openPdf(project, doc) {
  modalProject.textContent = project.title;
  modalTitle.textContent = doc.label;
  pdfViewer.src = doc.path;
  pdfOpen.href = doc.path;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  if (!modal.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  pdfViewer.src = 'about:blank';
}
