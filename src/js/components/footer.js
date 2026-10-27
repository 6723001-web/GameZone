import { t } from "../i18n/translations.js";

export function renderFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-main">

        <div class="footer-column footer-brand">
          <a class="logo" href="#/">GAME<span>ZONE</span></a>
          <p>${t("footer")}</p>
        </div>

        <div class="footer-column footer-links">
          <h3>${t("explore")}</h3>
          <a href="#/games">${t("games")}</a>
          <a href="#/about">${t("about")}</a>
          <a href="#/privacy">${t("privacy")}</a>
          <a href="#/terms">${t("terms")}</a>
        </div>

        <div class="footer-column footer-contact">
          <h3>${t("support")}</h3>
          <a href="#/contact">${t("contact")}</a>
          <a href="mailto:6723001@muls.edu.mn">
            ✉ 6723001@muls.edu.mn
          </a>
          <a href="tel:+97694605002">
            ☎ 94605002
          </a>
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
