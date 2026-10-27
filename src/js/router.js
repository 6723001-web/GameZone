import { resolveRoute } from "./routes.js";
import { setupGamesPage } from "./pages/gamesPage.js";
import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";
import { setupGallery } from "./pages/detailPage.js";
import { bindAuthForms } from "./services/authHandlers.js";
let renderId = 0;

export function initRouter() {
  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("languageChanged", renderRoute);

  renderRoute();
}

async function renderRoute() {
  const currentRender = ++renderId;
  const app = document.getElementById("app");

  if (!app) return;

  const path = window.location.hash.slice(1) || "/";

  app.innerHTML = `
    <p class="loading">GameZone ачаалж байна...</p>
  `;

  try {
    const page = await resolveRoute(path);
    const html = await page();

    if (currentRender !== renderId) return;

    app.innerHTML = html;

    // Login болон Sign Up товчнуудыг холбох
    if (path === "/login" || path === "/signup") {
      bindAuthForms();
    }

    if (path === "/games") {
      await setupGamesPage();
    }

    if (path.startsWith("/game/")) {
      setupGallery();
    }

    renderNavbar();
    renderFooter();
  } catch (error) {
    console.error("Хуудас ачаалахад алдаа гарлаа:", error);

    if (currentRender === renderId) {
      app.innerHTML = `
        <section class="section">
          <h2>Хуудас ачааллахад алдаа гарлаа.</h2>
          <p>Консолын алдааг шалгана уу.</p>
        </section>
      `;
    }
  }
}
