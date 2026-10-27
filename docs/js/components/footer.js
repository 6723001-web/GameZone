import { t } from "../i18n/translations.js";

export function renderFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand">
          <a class="logo" href="#/">GAME<span>ZONE</span></a>
          <p>${t("footer")}</p>
        </div>

        <div class="footer-links">
          <h3>${t("explore")}</h3>
          <a href="#/games">${t("games")}</a>
          <a href="#/about">${t("about")}</a>
        </div>

        <div class="footer-links">
          <h3>${t("legal")}</h3>
          <a href="#/privacy">${t("privacy")}</a>
          <a href="#/terms">${t("terms")}</a>
          <a href="#/cookies">${t("cookies")}</a>
        </div>

        <div class="footer-links">
          <h3>${t("support")}</h3>
          <a href="#/contact">${t("contact")}</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          © ${new Date().getFullYear()} GameZone.
          ${t("allRightsReserved")}
        </p>
      </div>
    </footer>
  `;
}
