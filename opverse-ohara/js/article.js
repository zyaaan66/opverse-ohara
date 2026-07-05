/**
 * OPVERSE OHARA — Article JS
 * Merender satu artikel berdasarkan ?id= di URL
 */

(function () {
  "use strict";

  function formatDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  }

  function getArticleById(id) {
    return ARTICLES.find((a) => a.id === id) || null;
  }

  function getAdjacentArticles(id) {
    const idx  = ARTICLES.findIndex((a) => a.id === id);
    const prev = idx > 0 ? ARTICLES[idx - 1] : null;
    const next = idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : null;
    return { prev, next };
  }

  function render404() {
    const main = document.getElementById("article-main");
    if (!main) return;
    main.innerHTML = `
      <div class="article-hero">
        <div class="article-hero-inner">
          <p class="article-breadcrumb"><a href="index.html">← Beranda</a></p>
          <h1 class="article-title" style="color:var(--red)">☠ Artikel Tidak Ditemukan</h1>
        </div>
      </div>
      <div class="single-wrapper">
        <div class="empty-state">
          <div class="empty-icon">🗺</div>
          <h3>Log Pose tidak menemukan artikel ini</h3>
          <p>Mungkin artikel sudah dipindahkan atau ID-nya salah. <a href="index.html">Kembali ke beranda</a>.</p>
        </div>
      </div>`;
  }

  function renderArticle(article) {
    const { prev, next } = getAdjacentArticles(article.id);
    const main = document.getElementById("article-main");
    if (!main) return;

    /* Update <title> dan meta */
    document.title = `${article.title} — Opverse Ohara`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", article.excerpt);

    /* Featured image */
    const imgHtml = article.image
      ? `<img class="article-content-featured-img" src="${article.image}" alt="${article.title}">`
      : "";

    /* Tags */
    const tagsHtml = article.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    /* Nav prev/next */
    const prevHtml = prev
      ? `<a href="article.html?id=${prev.id}">
           <span class="nav-label">← Sebelumnya</span>
           <span class="nav-title">${prev.title}</span>
         </a>`
      : `<div></div>`;
    const nextHtml = next
      ? `<a href="article.html?id=${next.id}" class="nav-next">
           <span class="nav-label">Berikutnya →</span>
           <span class="nav-title">${next.title}</span>
         </a>`
      : `<div></div>`;

    main.innerHTML = `
      <!-- Hero artikel -->
      <div class="article-hero">
        <div class="article-hero-inner">
          <p class="article-breadcrumb">
            <a href="index.html">Beranda</a> / 
            <span>${article.category}</span>
          </p>
          <span class="article-category-badge">${article.category}</span>
          <h1 class="article-title">${article.title}</h1>
          <div class="article-meta-bar">
            <span>📅 ${formatDate(article.date)}</span>
            <span>✍ ${article.author || "Tim Ohara"}</span>
            <span>🏷 ${article.tags.slice(0, 3).join(", ")}</span>
          </div>
        </div>
      </div>

      <!-- Konten -->
      <div class="single-wrapper">
        <div class="article-content">
          ${imgHtml}
          ${article.content}
          <div class="article-tags">
            <span class="article-tags-label">Tag:</span>
            ${tagsHtml}
          </div>
        </div>

        <div class="poneglyph-divider"><span>— Navigasi Artikel —</span></div>

        <nav class="article-nav" aria-label="Navigasi artikel">
          ${prevHtml}
          ${nextHtml}
        </nav>
      </div>`;
  }

  /* ── Sidebar: artikel terkait (kategori sama) ── */
  function renderRelatedSidebar(article) {
    const el = document.getElementById("sidebar-related");
    if (!el) return;
    const related = ARTICLES
      .filter((a) => a.id !== article.id && a.category === article.category)
      .slice(0, 4);
    if (related.length === 0) {
      el.innerHTML = "<p style='font-size:13px;color:var(--text-muted)'>Belum ada artikel terkait.</p>";
      return;
    }
    el.innerHTML = related
      .map(
        (a) => `<div class="widget-post-item">
          <a href="article.html?id=${a.id}">${a.title}</a>
          <div class="widget-post-meta">${a.date}</div>
        </div>`
      )
      .join("");
  }

  /* ── Scroll progress ── */
  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    window.addEventListener("scroll", () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
    }, { passive: true });
  }

  /* ── Back to top ── */
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ── Mobile nav ── */
  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav    = document.getElementById("primary-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  /* ── Init ── */
  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id     = params.get("id");

    if (!id) { render404(); return; }

    const article = getArticleById(id);
    if (!article) { render404(); return; }

    renderArticle(article);
    renderRelatedSidebar(article);
    initScrollProgress();
    initBackToTop();
    initMobileNav();
  });
})();
