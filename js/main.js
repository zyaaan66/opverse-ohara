/**
 * OPVERSE OHARA — Main JS (homepage)
 * Rendering artikel, filter kategori, search, pagination, UI interaktif
 */

(function () {
  "use strict";

  /* ── Konstanta ── */
  const PER_PAGE = 10;

  /* ── State ── */
  let currentCategory = "Semua";
  let currentSearch   = "";
  let currentPage     = 1;

  /* ── Helpers ── */
  function formatDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  }

  function slugify(str) {
    return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }

  /* ── Filter & Pagination ── */
  function getFiltered() {
    return ARTICLES.filter((a) => {
      const matchCat =
        currentCategory === "Semua" || a.category === currentCategory;
      const q = currentSearch.toLowerCase();
      const matchSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }

  /* ── Render satu kartu artikel ── */
  function renderCard(article) {
    const url = `article.html?id=${article.id}`;
    const imgHtml = article.image
      ? `<img class="card-image" src="${article.image}" alt="${article.title}" loading="lazy">`
      : `<div class="card-image-placeholder">☠</div>`;
    const tagsHtml = article.tags
      .slice(0, 4)
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    return `
      <article class="article-card" data-id="${article.id}">
        <a href="${url}" aria-label="${article.title}">${imgHtml}</a>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-category">${article.category}</span>
            <span class="card-date">${formatDate(article.date)}</span>
          </div>
          <h2 class="card-title"><a href="${url}">${article.title}</a></h2>
          <p class="card-excerpt">${article.excerpt}</p>
          <div class="card-tags">${tagsHtml}</div>
        </div>
        <div class="card-footer">
          <a href="${url}" class="read-more">Baca selengkapnya</a>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted)">${article.author || "Tim Ohara"}</span>
        </div>
      </article>`;
  }

  /* ── Render daftar artikel ── */
  function renderArticles() {
    const list    = document.getElementById("post-list");
    const status  = document.getElementById("search-status");
    const paginEl = document.getElementById("pagination");

    const filtered = getFiltered();
    const total    = filtered.length;
    const pages    = Math.max(1, Math.ceil(total / PER_PAGE));
    if (currentPage > pages) currentPage = 1;

    const slice = filtered.slice(
      (currentPage - 1) * PER_PAGE,
      currentPage * PER_PAGE
    );

    /* Search status */
    if (currentSearch && status) {
      status.style.display = "block";
      status.textContent   = `Menampilkan ${total} hasil untuk "${currentSearch}"`;
    } else if (status) {
      status.style.display = "none";
    }

    /* Kartu */
    if (!list) return;
    if (slice.length === 0) {
      list.innerHTML = `<div class="empty-state">
        <div class="empty-icon">📜</div>
        <h3>Tidak ada artikel ditemukan</h3>
        <p>Coba kata kunci atau kategori lain.</p>
      </div>`;
    } else {
      list.innerHTML = slice.map(renderCard).join("");
    }

    /* Pagination */
    if (!paginEl) return;
    if (pages <= 1) { paginEl.innerHTML = ""; return; }
    let btns = "";
    for (let i = 1; i <= pages; i++) {
      btns += `<button class="page-btn${i === currentPage ? " active" : ""}" data-page="${i}">${i}</button>`;
    }
    paginEl.innerHTML = btns;
    paginEl.querySelectorAll(".page-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentPage = Number(btn.dataset.page);
        renderArticles();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  /* ── Render filter kategori ── */
  function renderCategories() {
    const el = document.getElementById("category-filter");
    if (!el) return;
    el.innerHTML = CATEGORIES.map(
      (c) =>
        `<button class="filter-btn${c === currentCategory ? " active" : ""}" data-cat="${c}">${c}</button>`
    ).join("");
    el.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentCategory = btn.dataset.cat;
        currentPage     = 1;
        renderCategories();
        renderArticles();
      });
    });
  }

  /* ── Render sidebar: artikel terbaru ── */
  function renderSidebarRecent() {
    const el = document.getElementById("sidebar-recent");
    if (!el) return;
    el.innerHTML = ARTICLES.slice(0, 5)
      .map(
        (a) => `<div class="widget-post-item">
          <a href="article.html?id=${a.id}">${a.title}</a>
          <div class="widget-post-meta">${a.category} · ${formatDate(a.date)}</div>
        </div>`
      )
      .join("");
  }

  /* ── Render sidebar: kategori ── */
  function renderSidebarCategories() {
    const el = document.getElementById("sidebar-categories");
    if (!el) return;
    const counts = {};
    ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    el.innerHTML = Object.entries(counts)
      .map(
        ([cat, count]) => `<div class="widget-cat-item">
          <a href="#" data-filter-cat="${cat}">${cat}</a>
          <span class="widget-cat-count">${count}</span>
        </div>`
      )
      .join("");
    el.querySelectorAll("[data-filter-cat]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        currentCategory = link.dataset.filterCat;
        currentPage     = 1;
        renderCategories();
        renderArticles();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  /* ── Search ── */
  function initSearch() {
    const input = document.getElementById("search-input");
    if (!input) return;
    input.addEventListener("input", () => {
      currentSearch = input.value.trim();
      currentPage   = 1;
      renderArticles();
    });
  }

  /* ── Scroll progress bar ── */
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

  /* ── Mobile nav toggle ── */
  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav    = document.getElementById("primary-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  /* ── Hero counter (jumlah artikel) ── */
  function initHeroCount() {
    const el = document.getElementById("hero-article-count");
    if (el) el.textContent = ARTICLES.length;
  }

  /* ── Init ── */
  document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderArticles();
    renderSidebarRecent();
    renderSidebarCategories();
    initSearch();
    initScrollProgress();
    initBackToTop();
    initMobileNav();
    initHeroCount();
  });
})();
