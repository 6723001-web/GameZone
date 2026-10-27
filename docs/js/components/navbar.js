import { getLanguage, setLanguage, t } from "../i18n/translations.js";
import { auth, onAuthStateChanged, signOut } from "../services/firebase.js";

let currentUser = null;
let authListenerStarted = false;

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

      <div class="nav-actions">
        <button id="language-toggle" class="language-btn">
          ${language === "mn" ? "EN" : "MN"}
        </button>

        ${
          currentUser
            ? `
              <a href="#/profile" class="user-profile-link">
                <img
                  class="nav-avatar"
                  src="${currentUser.photoURL || "./images/default-avatar.png"}"
                  alt="Profile"
                  referrerpolicy="no-referrer"
                >
                <span class="nav-username">
                  ${escapeHTML(currentUser.displayName || currentUser.email || "Gamer")}
                </span>
              </a>

              <button id="logout-btn" class="logout-btn">
                ${t("logout")}
              </button>
            `
            : `
              <a href="#/login" class="login-btn">
                ${t("login")}
              </a>
              <a href="#/signup" class="signup-btn">
                ${t("signup")}
              </a>
            `
        }
      </div>
    </nav>
  `;

  document.getElementById("language-toggle")?.addEventListener("click", () => {
    setLanguage(getLanguage() === "mn" ? "en" : "mn");
    window.dispatchEvent(new Event("languageChanged"));
  });

  document.getElementById("logout-btn")?.addEventListener("click", async () => {
    try {
      await signOut(auth);
      window.location.hash = "#/";
    } catch (error) {
      console.error("Logout error:", error);
      alert("Системээс гарахад алдаа гарлаа.");
    }
  });

  // Firebase хэрэглэгчийн төлөвийг зөвхөн нэг удаа сонсоно.
  if (!authListenerStarted) {
    authListenerStarted = true;

    onAuthStateChanged(auth, (user) => {
      currentUser = user;
      renderNavbar();
    });
  }
}

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}
