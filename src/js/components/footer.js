import { t } from "../i18n/translations.js";

export function renderFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-content">
      <a class="logo" href="#/">GAME<span>ZONE</span></a>
      <p>${t("footer")}</p>
      <p class="copyright">
        © ${new Date().getFullYear()} GameZone
      </p>
    </div>
  `;
}
