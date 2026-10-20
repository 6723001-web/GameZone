import { routes } from "./routes.js";

export function initRouter() {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}

function renderRoute() {
  const app = document.getElementById("app");
  const path = window.location.hash.slice(1) || "/";

  const page = routes[path] || routes["/"];

  if (page) {
    app.innerHTML = page();
  } else {
    app.innerHTML = "<h2>Хуудас олдсонгүй</h2>";
  }
}
