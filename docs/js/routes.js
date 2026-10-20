import { homePage } from "./pages/homePage.js";
import { gamesPage } from "./pages/gamesPage.js";
import { detailPage } from "./pages/detailPage.js";
import { aboutPage } from "./pages/aboutPage.js";

export const routes = {
  "/": homePage,
  "/games": gamesPage,
  "/about": aboutPage,
};

export async function resolveRoute(path) {
  if (path.startsWith("/game/")) {
    const id = decodeURIComponent(path.slice("/game/".length));
    return () => detailPage(id);
  }

  return routes[path] || homePage;
}
