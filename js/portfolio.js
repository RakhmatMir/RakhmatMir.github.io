const translations = {
  ru: {
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",
    "hero.label": "Frontend & Automation Developer",
    "hero.greeting": "Привет, я",
    "hero.text":
      "Создаю сайты, Telegram-ботов, Mini Apps (TMA), автоматизацию и решения с AI. Открыт к работе и новым проектам.",
    "hero.cta": "Смотреть проекты",
    "about.title": "Обо мне",
    "about.text":
      "Разрабатываю сайты и landing page (HTML, CSS, JavaScript), Telegram-ботов и Mini Apps (TMA), автоматизирую публикации в Telegram и на сайтах. Работаю с AI-агентами, AI-видео и контентом для соцсетей. Создаю системы учёта, расходов и отчётности. Умею работать в команде.",
    "skills.title": "Навыки",
    "skills.web.title": "Web-разработка",
    "skills.web.desc": "HTML5, CSS3, JavaScript, адаптивная вёрстка, GitHub Pages",
    "skills.telegram.title": "Telegram & TMA",
    "skills.telegram.desc": "Telegram-боты, Mini Apps, карточки для продаж, ведение каналов",
    "skills.automation.title": "Автоматизация",
    "skills.automation.desc": "Автопостинг в Telegram и на сайтах, рабочие процессы",
    "skills.ai.title": "AI & Контент",
    "skills.ai.desc": "AI-агенты, AI-видео, статьи и контент для соцсетей",
    "skills.business.title": "Бизнес-системы",
    "skills.business.desc": "Учёт и расходы, отчётность, программы для отчётов",
    "skills.team.title": "Работа в команде",
    "skills.team.desc": "Совместная разработка, коммуникация с заказчиком",
    "projects.title": "Проекты",
    "projects.subtitle": "Сайты, Telegram-боты и проекты на GitHub Pages",
    "projects.bots.title": "Telegram-боты",
    "projects.bots.active": "Активен",
    "projects.bots.dev": "В разработке",
    "projects.bots.lavh": "Бизнес-бот для фирмы — работает в продакшене.",
    "projects.bots.bozor": "Маркетплейс-бот — в активной разработке.",
    "projects.bots.oquv": "Образовательная платформа в Telegram — в разработке.",
    "projects.web.title": "Web-проекты",
    "projects.p1": "Адаптивный landing page с современной вёрсткой.",
    "projects.p2": "Многостраничная вёрстка с детальной проработкой UI.",
    "projects.p3": "Профиль GitHub RU/EN с навыками и контактами.",
    "projects.all": "Все репозитории —",
    "contact.title": "Контакты",
    "contact.text": "Открыт к работе, стажировке и freelance-проектам.",
    "contact.portfolio": "Портфолио",
    "contact.location": "Локация",
    "footer.role": "Frontend & Automation Developer",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.label": "Frontend & Automation Developer",
    "hero.greeting": "Hi, I'm",
    "hero.text":
      "I build websites, Telegram bots, Mini Apps (TMA), automation, and AI-powered solutions. Open to work and new projects.",
    "hero.cta": "View projects",
    "about.title": "About me",
    "about.text":
      "I develop websites and landing pages (HTML, CSS, JavaScript), Telegram bots and Mini Apps (TMA), and automate posts for Telegram and websites. I work with AI agents, AI video, and social media content. I build accounting, expense tracking, and reporting systems. Experienced in teamwork.",
    "skills.title": "Skills",
    "skills.web.title": "Web Development",
    "skills.web.desc": "HTML5, CSS3, JavaScript, responsive layout, GitHub Pages",
    "skills.telegram.title": "Telegram & TMA",
    "skills.telegram.desc": "Telegram bots, Mini Apps, sales cards, channel management",
    "skills.automation.title": "Automation",
    "skills.automation.desc": "Auto-posting for Telegram & websites, workflow automation",
    "skills.ai.title": "AI & Content",
    "skills.ai.desc": "AI agents, AI video, articles & social media content",
    "skills.business.title": "Business Systems",
    "skills.business.desc": "Accounting & expenses, reporting, custom report tools",
    "skills.team.title": "Teamwork",
    "skills.team.desc": "Collaborative development, client communication",
    "projects.title": "Projects",
    "projects.subtitle": "Websites, Telegram bots, and GitHub Pages projects",
    "projects.bots.title": "Telegram Bots",
    "projects.bots.active": "Active",
    "projects.bots.dev": "In development",
    "projects.bots.lavh": "Business bot for a firm — running in production.",
    "projects.bots.bozor": "Marketplace bot — actively in development.",
    "projects.bots.oquv": "Educational platform in Telegram — in development.",
    "projects.web.title": "Web Projects",
    "projects.p1": "Adaptive landing page with modern layout.",
    "projects.p2": "Multi-page layout with detailed UI.",
    "projects.p3": "GitHub profile RU/EN with skills and contacts.",
    "projects.all": "All repositories —",
    "contact.title": "Contact",
    "contact.text": "Open to work, internships, and freelance projects.",
    "contact.portfolio": "Portfolio",
    "contact.location": "Location",
    "footer.role": "Frontend & Automation Developer",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.body.classList.remove("lang-ru", "lang-en");
  document.body.classList.add(`lang-${lang}`);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("portfolio-lang", lang);
}

const savedLang = localStorage.getItem("portfolio-lang") || "ru";
setLanguage(savedLang);

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
