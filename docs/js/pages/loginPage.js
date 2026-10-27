import { t } from "../i18n/translations.js";

export function loginPage() {
  return `
    <section class="auth-section">
      <form class="auth-card" id="login-form">
        <span class="eyebrow">GAMEZONE ACCESS</span>

        <h1>${t("loginTitle")}</h1>
        <p>${t("loginDescription")}</p>

        <label for="login-email">${t("email")}</label>
        <input
          id="login-email"
          type="email"
          placeholder="${t("email")}"
          required
        >

        <label for="login-password">${t("password")}</label>
        <input
          id="login-password"
          type="password"
          placeholder="${t("password")}"
          required
        >

        <button class="btn btn-primary auth-submit" type="submit">
          ${t("loginButton")}
        </button>

        <div class="auth-divider"><span>эсвэл</span></div>

        <button type="button" class="google-btn" id="google-login-btn">
          <span class="google-icon">G</span>
          Google-оор нэвтрэх
        </button>

        <p id="auth-message" role="status"></p>

        <p class="auth-switch">
          ${t("noAccount")}
          <a href="#/signup">${t("signup")}</a>
        </p>
      </form>
    </section>
  `;
}
