/* ============================================================
   SHARED DATA — used by script.js, portfolio.js, about.js
============================================================ */
const strapImages = [
  { label: 'Campaign 01', src: 'images/strap-left-1.jpg' },
  { label: 'Product Launch', src: 'images/strap-left-2.jpg' },
  { label: 'Vaccination Drive', src: 'images/strap-left-3.jpg' },
  { label: 'Fintech App', src: 'images/strap-left-4.jpg' },
  { label: 'NAVIS ARCA', src: 'images/strap-left-5.jpg' },
  { label: 'Trading Platform', src: 'images/strap-left-6.jpg' },
  { label: 'Oil & Gas', src: 'images/strap-left-7.jpg' },
  { label: 'Crypto Exchange', src: 'images/strap-left-8.jpg' },
];

const strapImagesRow2 = [
  { label: 'Ramadan Dates', src: 'images/strap-right-1.jpg' },
  { label: 'Mobile App UI', src: 'images/strap-right-2.jpg' },
  { label: 'Exhibition Stand', src: 'images/strap-right-3.jpg' },
  { label: 'Equine Brand', src: 'images/strap-right-4.jpg' },
  { label: 'Annual Report', src: 'images/strap-right-5.jpg' },
  { label: 'Healthcare', src: 'images/strap-right-6.jpg' },
  { label: 'E-commerce', src: 'images/strap-right-7.jpg' },
  { label: 'Brand Identity', src: 'images/strap-right-8.jpg' },
];

/* Tool badge(s) shown top-right on every project card — tells a visitor at a
   glance which app(s) were used to create that piece of work. Keyed by the
   project's `filter` value; each entry is an ARRAY so a category can show
   more than one badge (e.g. video projects show both Premiere Pro and
   After Effects). Add/adjust entries here whenever a new filter/category
   is introduced. */
const TOOL_BY_FILTER = {
  poster:   [{ abbr: 'Ps', name: 'Adobe Photoshop',   bg: '#001E36', fg: '#31A8FF' }],
  branding: [{ abbr: 'Ai', name: 'Adobe Illustrator',  bg: '#330000', fg: '#FF9A00' }],
  print:    [{ abbr: 'Id', name: 'Adobe InDesign',     bg: '#49021F', fg: '#FF3366' }],
  web:      [{ abbr: 'Fg', name: 'Figma',              bg: '#1E1E1E', fg: '#FFFFFF' }],
  website:  [{ abbr: 'Xd', name: 'Adobe XD',           bg: '#470137', fg: '#FF61F6' }],
  video:    [
    { abbr: 'Pr', name: 'Adobe Premiere Pro', bg: '#00005B', fg: '#9999FF' },
    { abbr: 'Ae', name: 'Adobe After Effects', bg: '#00005B', fg: '#9999FF' },
  ],
};

/* Each project can carry, depending on its filter/category:
   img   — thumbnail image shown on the card (from images/Works/<Category>/Thumb-...)
   full  — (poster only) full-size image opened in the lightbox on click
   pdf   — (branding / print / web only) PDF opened in a new browser tab on click
   videoUrl — (video only) external (e.g. YouTube) link opened in a new tab on click

   Web Design and Video items currently point at placeholder assets
   (Dummy-Placeholder.pdf / a placeholder YouTube link) until real
   project files are supplied — swap those two fields per item below. */
const projects = [
  // ---- Poster (click → view large in lightbox) ----
  { title: 'Poster 1', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-1.jpg', full: 'images/Works/Poster/Poster-1.jpg' },
  { title: 'Poster 2', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-2.jpg', full: 'images/Works/Poster/Poster-2.jpeg' },
  { title: 'Poster 3', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-3.jpg', full: 'images/Works/Poster/Poster-3.jpg' },
  { title: 'Poster 4', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-4.jpg', full: 'images/Works/Poster/Poster-4.jpg' },
  { title: 'Poster 5', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-5.jpg', full: 'images/Works/Poster/Poster-5.jpg' },
  { title: 'Poster 6', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-6.jpg', full: 'images/Works/Poster/Poster-6.jpg' },
  { title: 'Poster 7', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-7.jpg', full: 'images/Works/Poster/Poster-7.jpg' },
  { title: 'Poster 8', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-8.jpg', full: 'images/Works/Poster/Poster-8.jpg' },
  { title: 'Poster 9', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-9.jpg', full: 'images/Works/Poster/Poster-9.jpg' },
  { title: 'Poster 10', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-10.jpg', full: 'images/Works/Poster/Poster-10.jpg' },
  { title: 'Poster 11', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-11.jpg', full: 'images/Works/Poster/Poster-11.jpg' },
  { title: 'Poster 12', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-12.jpg', full: 'images/Works/Poster/Poster-12.jpg' },
  { title: 'Poster 13', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-13.jpg', full: 'images/Works/Poster/Poster-13.jpg' },
  { title: 'Poster 14', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-14.jpg', full: 'images/Works/Poster/Poster-14.jpg' },
  { title: 'Poster 15', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-15.jpg', full: 'images/Works/Poster/Poster-15.jpg' },
  { title: 'Poster 16', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-16.jpg', full: 'images/Works/Poster/Poster-16.jpg' },
  { title: 'Poster 17', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-17.jpg', full: 'images/Works/Poster/Poster-17.jpg' },
  { title: 'Poster 18', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-18.jpg', full: 'images/Works/Poster/Poster-18.jpg' },
  { title: 'Poster 19', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-19.jpg', full: 'images/Works/Poster/Poster-19.jpg' },
  { title: 'Poster 20', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-20.jpg', full: 'images/Works/Poster/Poster-20.png' },
  { title: 'Poster 21', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Poster-21.jpg', full: 'images/Works/Poster/Poster-21.jpg' },
  { title: 'Poster 22', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-22.jpg', full: 'images/Works/Poster/Poster-22.jpg' },
  { title: 'Poster 23', tag: 'Poster', filter: 'poster', img: 'images/Works/Poster/Thumb-Poster-23.jpg', full: 'images/Works/Poster/Poster-23.jpg' },

  // ---- Branding (click → open PDF in new tab) ----
  { title: 'Branding Project 1', tag: 'Branding', filter: 'branding', img: 'images/Works/Branding/Thumb-Brand-1.jpg', pdf: 'images/Works/Branding/Brand-1.pdf' },
  { title: 'Branding Project 2', tag: 'Branding', filter: 'branding', img: 'images/Works/Branding/Thumb-Brand-2.jpg', pdf: 'images/Works/Branding/Brand-2.pdf' },
  { title: 'Branding Project 3', tag: 'Branding', filter: 'branding', img: 'images/Works/Branding/Thumb-Brand-3.jpg', pdf: 'images/Works/Branding/Brand-3.pdf' },

  // ---- Print Design (click → open PDF in new tab) ----
  { title: 'Print Design 1', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-1.jpg', pdf: 'images/Works/Print%20Design/Print-aw-1.pdf' },
  { title: 'Print Design 2', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-2.jpg', pdf: 'images/Works/Print%20Design/Print-aw-2.pdf' },
  { title: 'Print Design 3', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-3.jpg', pdf: 'images/Works/Print%20Design/Print-aw-3.pdf' },
  { title: 'Print Design 4', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-4.jpg', pdf: 'images/Works/Print%20Design/Print-aw-4.pdf' },
  { title: 'Print Design 5', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-5.jpg', pdf: 'images/Works/Print%20Design/Print-aw-5.pdf' },
  { title: 'Print Design 6', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-6.jpg', pdf: 'images/Works/Print%20Design/Print-aw-6.pdf' },
  { title: 'Print Design 7', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-7.jpg', pdf: 'images/Works/Print%20Design/Print-aw-7.pdf' },
  { title: 'Print Design 8', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-8.jpg', pdf: 'images/Works/Print%20Design/Print-aw-8.pdf' },
  { title: 'Print Design 9', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-9.jpg', pdf: 'images/Works/Print%20Design/Print-aw-9.pdf' },
  { title: 'Print Design 10', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-10.jpg', pdf: 'images/Works/Print%20Design/Print-aw-10.pdf' },
  { title: 'Print Design 11', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-11.jpg', pdf: 'images/Works/Print%20Design/Print-aw-11.pdf' },
  { title: 'Print Design 12', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-12.jpg', pdf: 'images/Works/Print%20Design/Print-aw-12.pdf' },
  { title: 'Print Design 13', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-13.jpg', pdf: 'images/Works/Print%20Design/Print-aw-13.pdf' },
  { title: 'Print Design 14', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-14.jpg', pdf: 'images/Works/Print%20Design/Print-aw-14.pdf' },
  { title: 'Print Design 15', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-15.jpg', pdf: 'images/Works/Print%20Design/Print-aw-15.pdf' },
  { title: 'Print Design 16', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-16.jpg', pdf: 'images/Works/Print%20Design/Print-aw-16.pdf' },
  { title: 'Print Design 17', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-17.jpg', pdf: 'images/Works/Print%20Design/Print-aw-17.pdf' },
  { title: 'Print Design 18', tag: 'Print Design', filter: 'print', img: 'images/Works/Print%20Design/Thumb-Print-aw-18.jpg', pdf: 'images/Works/Print%20Design/Print-aw-18.pdf' },

  // ---- Mobile App (filter key stays 'web' so existing asset paths below
  // don't need to change — only the display label/tag was renamed) ----
  // Only one thumbnail was supplied — using a placeholder PDF until the
  // real project PDF is added at images/Works/Web Design/.
  { title: 'Mobile App 1', tag: 'Mobile App', filter: 'web', img: 'images/Works/Web%20Design/Thumb-Web-1.jpg', pdf: 'images/Works/Web Design/App1.pdf' },
  { title: 'Mobile App 2', tag: 'Mobile App', filter: 'web', img: 'images/Works/Web%20Design/Thumb-Web-2.jpg', pdf: 'images/Works/Web Design/App2.pdf' },
  { title: 'Mobile App 3', tag: 'Mobile App', filter: 'web', img: 'images/Works/Web%20Design/Thumb-Web-3.jpg', pdf: 'images/Works/Web Design/App3.pdf' },
  { title: 'Mobile App 4', tag: 'Mobile App', filter: 'web', img: 'images/Works/Web%20Design/Thumb-Web-4.jpg', pdf: 'images/Works/Web Design/App4.pdf' },
  // ---- Website (click → open PDF in new tab, unless `url` is set — then that external link opens instead) ----
  { title: 'Website Project 1', tag: 'Website', filter: 'website', img: 'images/Works/Website/Thumb-Website-1.jpg', pdf: 'images/Works/Website/NAVIS ARCA - HOME.pdf' },
  { title: 'Website Project 2', tag: 'Website', filter: 'website', img: 'images/Works/Website/Thumb-Website-2.jpg', pdf: 'images/Works/Website/necurity.pdf' },
  { title: 'Website Project 3', tag: 'Website', filter: 'website', img: 'images/Works/Website/Thumb-Website-3.jpg', url: 'https://xd.adobe.com/view/9018be66-e09d-4ee6-7638-703a1dcd0068-e629/' },
  { title: 'Website Project 4', tag: 'Website', filter: 'website', img: 'images/Works/Website/Thumb-Website-4.jpg', url: 'https://xd.adobe.com/view/8f666a56-0051-4240-4320-55665c68530e-f957/?fullscreen' },

  // ---- Videos (click → open video link in new tab) ----
  // Placeholder YouTube link — swap videoUrl for the real published video.
  { title: 'Video Project 1', tag: 'Videos', filter: 'video', img: 'images/Works/Video/Thumb-Vid-1.jpg', videoUrl: 'https://youtu.be/wcgyl4R_UAQ' },
  { title: 'Video Project 2', tag: 'Videos', filter: 'video', img: 'images/Works/Video/Thumb-Vid-2.jpg', videoUrl: 'https://youtu.be/YPDxchJPH9Y?si=QV-oNbPrm5_xNnuW' },
  { title: 'Video Project 3', tag: 'Videos', filter: 'video', img: 'images/Works/Video/Thumb-Vid-3.jpg', videoUrl: 'https://youtu.be/pNbHYDy_gsg' },
  { title: 'Video Project 4', tag: 'Videos', filter: 'video', img: 'images/Works/Video/Thumb-Vid-4.jpg', videoUrl: 'https://youtu.be/Qwqo-GRdw6g?si=A5nViXfzgw2uEEm_' },
  { title: 'Video Project 5', tag: 'Videos', filter: 'video', img: 'images/Works/Video/Thumb-Vid-5.jpg', videoUrl: 'https://youtu.be/AhjEGqAquJU' },
];

const testimonials = [
  {
    text: "Working with Sanketh was an outstanding experience. His ability to transform ideas into clean, professional, and user-focused designs is exceptional. Every deliverable was thoughtfully crafted, delivered on time, and exceeded our expectations.",
    name: 'Arjun Reddy',
    role: 'Senior Product Manager, FinTech Company',
  },
  {
    text: "Sanketh brought a rare mix of strategic thinking and hands-on craft to our rebrand. He led the team through a tight deadline without ever compromising on quality, and the final identity system still holds up two years later.",
    name: 'Priya Nair',
    role: 'Marketing Director, Aster Health',
  },
  {
    text: "The motion work Sanketh delivered for our product launch was the best piece of creative we shipped that year. Clear direction, fast turnarounds, and a genuine understanding of what would make viewers stop scrolling.",
    name: 'Karthik Iyer',
    role: 'Founder, Navis Arca',
  },
  {
    text: "What stood out was how easily Sanketh moved between big-picture brand thinking and small details like spacing and type pairing. Our retail identity finally feels consistent across packaging, store signage, and the app.",
    name: 'Meera Krishnan',
    role: 'Creative Lead, Bloom Retail',
  }
];

/* ============================================================
   IMAGE PLACEHOLDERS
   Generates a light, dashed "drop your image here" style box as
   an inline SVG data URI — no network request, easy to spot, and
   trivial to swap out later: just replace the <img src="..."> with
   your real image path.
============================================================ */
function imagePlaceholder(width, height, caption = '') {
  const iconW = Math.min(width, height) * 0.26;
  const iconX = (width - iconW) / 2;
  const iconY = caption ? (height - iconW) / 2 - height * 0.06 : (height - iconW) / 2;
  const fontSize = Math.max(11, Math.min(width, height) * 0.055);

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#EEEFF9"/>
  <rect x="3" y="3" width="${width - 6}" height="${height - 6}" fill="none" stroke="#C9CBE6" stroke-width="2" stroke-dasharray="7 7" rx="12"/>
  <g transform="translate(${iconX}, ${iconY})" fill="none" stroke="#A9ABCB" stroke-width="${Math.max(1.5, iconW * 0.045)}" stroke-linecap="round" stroke-linejoin="round">
    <rect x="0" y="0" width="${iconW}" height="${iconW * 0.78}" rx="${iconW * 0.08}"/>
    <circle cx="${iconW * 0.24}" cy="${iconW * 0.24}" r="${iconW * 0.1}"/>
    <path d="M0 ${iconW * 0.62} L${iconW * 0.32} ${iconW * 0.34} L${iconW * 0.55} ${iconW * 0.52} L${iconW * 0.74} ${iconW * 0.28} L${iconW} ${iconW * 0.62}"/>
  </g>
  ${caption ? `<text x="50%" y="${iconY + iconW + fontSize + 10}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${fontSize}" fill="#8385A6">${caption}</text>` : ''}
</svg>`.trim();

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function avatarPlaceholder(size = 120) {
  const iconW = size * 0.42;
  const iconPos = (size - iconW) / 2;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 1.5}" fill="#EEEFF9" stroke="#C9CBE6" stroke-width="2" stroke-dasharray="6 6"/>
  <g transform="translate(${iconPos}, ${iconPos})" fill="none" stroke="#A9ABCB" stroke-width="${Math.max(1.5, iconW * 0.07)}" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="${iconW / 2}" cy="${iconW * 0.32}" r="${iconW * 0.22}"/>
    <path d="M${iconW * 0.06} ${iconW * 0.98} C ${iconW * 0.06} ${iconW * 0.68}, ${iconW * 0.94} ${iconW * 0.68}, ${iconW * 0.94} ${iconW * 0.98}"/>
  </g>
</svg>`.trim();

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* ============================================================
   PROJECT CARDS + LIGHTBOX — shared across index.html and
   portfolio.html so both pages get identical card markup and
   the same "click to blow up" behaviour.
============================================================ */
function buildProjectCard(p) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.filter = p.filter;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View ${p.title}`);

  const thumbSrc = p.img || imagePlaceholder(480, 380, p.title);
  const isVideo = p.filter === 'video';
  const isDoc = p.filter === 'branding' || p.filter === 'print' || p.filter === 'web' || p.filter === 'website';

  const playIcon = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  const docIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 15h6M9 11h3"/></svg>`;

  const tools = TOOL_BY_FILTER[p.filter] || [];
  const toolBadges = tools.length
    ? `<div class="project-tool-badges">${tools.map(tool => `<span class="project-tool-badge" style="background:${tool.bg}; color:${tool.fg}" title="Made in ${tool.name}" aria-label="Made in ${tool.name}">${tool.abbr}</span>`).join('')}</div>`
    : '';

  card.innerHTML = `
    <div class="project-thumb-wrap">
      <img class="project-thumb" src="${thumbSrc}" alt="${p.img ? p.title : 'Placeholder — replace with ' + p.title + ' thumbnail'}" loading="lazy">
      ${isVideo ? `<span class="project-play" aria-hidden="true">${playIcon}</span>` : ''}
      ${isDoc ? `<span class="project-play" aria-hidden="true">${docIcon}</span>` : ''}
      ${toolBadges}
    </div>
    <div class="project-meta">
      <h3>${p.title}</h3>
      <p>${p.tag}</p>
    </div>
  `;

  const activate = () => handleProjectClick(p);
  card.addEventListener('click', activate);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
  });

  return card;
}

/* Routes a card click by category:
   - poster                      → big view in the in-page lightbox
   - branding/print/web/website  → `url` (external link) if set, otherwise the project PDF — either way, opened in a new tab
   - video                       → the external video link, opened in a new tab */
function handleProjectClick(p) {
  if (p.filter === 'branding' || p.filter === 'print' || p.filter === 'web' || p.filter === 'website') {
    const target = p.url || p.pdf;
    if (target) window.open(target, '_blank', 'noopener');
    return;
  }
  if (p.filter === 'video') {
    if (p.videoUrl) window.open(p.videoUrl, '_blank', 'noopener');
    return;
  }
  openLightbox(p);
}

function renderProjectGrid(container, list) {
  list.forEach(p => container.appendChild(buildProjectCard(p)));
}

function wireFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const match = filter === 'all' || card.dataset.filter === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
}

/* ---- Lightbox: injected once, reused for every card on the page ---- */
let lightboxEl = null;

function ensureLightbox() {
  if (lightboxEl) return lightboxEl;
  lightboxEl = document.createElement('div');
  lightboxEl.className = 'lightbox';
  lightboxEl.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-panel">
      <button class="lightbox-close" aria-label="Close">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="lightbox-media"></div>
      <div class="lightbox-caption">
        <h3 class="lightbox-title"></h3>
        <p class="lightbox-tag"></p>
      </div>
    </div>
  `;
  document.body.appendChild(lightboxEl);

  const close = () => closeLightbox();
  lightboxEl.querySelector('.lightbox-backdrop').addEventListener('click', close);
  lightboxEl.querySelector('.lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxEl.classList.contains('is-open')) close();
  });

  return lightboxEl;
}

function openLightbox(p) {
  const box = ensureLightbox();
  const media = box.querySelector('.lightbox-media');
  const src = p.full || p.img || imagePlaceholder(900, 700, p.title);
  media.innerHTML = `<img src="${src}" alt="${p.title}">`;

  box.querySelector('.lightbox-title').textContent = p.title;
  box.querySelector('.lightbox-tag').textContent = p.tag;

  box.classList.add('is-open');
  document.body.classList.add('lightbox-locked');
  requestAnimationFrame(() => box.classList.add('is-visible'));
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove('is-visible');
  document.body.classList.remove('lightbox-locked');
  const video = lightboxEl.querySelector('video');
  if (video) video.pause();
  setTimeout(() => {
    lightboxEl.classList.remove('is-open');
    lightboxEl.querySelector('.lightbox-media').innerHTML = '';
  }, 250);
}

/* ============================================================
   MOBILE NAV — shared across every page
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  menuToggle?.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
  document.getElementById('nav')?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') header.classList.remove('nav-open');
  });
});
