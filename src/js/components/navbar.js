import { getLanguage, setLanguage, t } from "../i18n/translations.js";

export function renderNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const language = getLanguage();

  navbar.innerHTML = `
    <nav class="navbar">
      <a class="logo" href="#/">GAME<span>ZONE</span></a>

      <div class="nav-links">
        <a href="#/">${t("home")}</a>
        <a href="#/games">${t("games")}</a>
        <a href="#/about">${t("about")}</a>
      </div>

      <button id="language-toggle" class="language-btn">
        ${language === "mn" ? "EN" : "MN"}
      </button>
    </nav>
  `;

  document.getElementById("language-toggle")?.addEventListener("click", () => {
    setLanguage(language === "mn" ? "en" : "mn");
    renderNavbar();
    window.dispatchEvent(new Event("languageChanged"));
  });
}
