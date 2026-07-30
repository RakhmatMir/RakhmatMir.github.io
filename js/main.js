(function () {
  const STORAGE_KEY = "portfolio-lang";
  const DEFAULT_LANG = "ru";

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "ru" ? saved : DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateLangButton(lang);
    document.title = window.I18N[lang]["meta.title"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", window.I18N[lang]["meta.description"]);
  }

  function applyTranslations(lang) {
    const dict = window.I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  function updateLangButton(lang) {
    const btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = window.I18N[lang]["lang.switch"];
  }

  function initNav() {
    const header = document.getElementById("header");
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    });

    toggle?.addEventListener("click", () => {
      menu.classList.toggle("open");
      toggle.classList.toggle("active");
    });

    menu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle?.classList.remove("active");
      });
    });
  }

  function initLangToggle() {
    const btn = document.getElementById("lang-toggle");
    btn?.addEventListener("click", () => {
      const next = getLang() === "ru" ? "en" : "ru";
      setLang(next);
    });
  }

  function initScrollTop() {
    const btn = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
      btn?.classList.toggle("visible", window.scrollY > 500);
    });
    btn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLang(getLang());
    initNav();
    initLangToggle();
    initScrollTop();
  });
})();
