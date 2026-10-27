import { t } from "../i18n/translations.js";

export function signupPage() {
  return `
    <section class="auth-section">
      <form class="auth-card" id="signup-form">
        <span class="eyebrow">JOIN THE GAME</span>

        <h1>${t("signupTitle")}</h1>
        <p>${t("signupDescription")}</p>

        <label for="signup-name">${t("username")}</label>
        <input
          id="signup-name"
          type="text"
          placeholder="${t("username")}"
          required
        >

        <label for="signup-email">${t("email")}</label>
        <input
          id="signup-email"
          type="email"
          placeholder="${t("email")}"
          required
        >

        <label for="signup-password">${t("password")}</label>
        <input
          id="signup-password"
          type="password"
          minlength="8"
          placeholder="${t("password")}"
          required
        >

        <label for="signup-confirm-password">
          ${t("confirmPassword")}
        </label>
        <input
          id="signup-confirm-password"
          type="password"
          minlength="8"
          placeholder="${t("confirmPassword")}"
          required
        >

        <button class="btn btn-signup auth-submit" type="submit">
          ${t("signupButton")}
        </button>

        <div class="auth-divider"><span>эсвэл</span></div>

        <button type="button" class="google-btn" id="google-signup-btn">
          <span class="google-icon">G</span>
          Google-оор бүртгүүлэх
        </button>

        <p id="auth-message" role="status"></p>

        <p class="auth-switch">
          ${t("haveAccount")}
          <a href="#/login">${t("login")}</a>
        </p>
      </form>
    </section>
  `;
}
