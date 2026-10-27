import { homePage } from "./pages/homePage.js";
import { gamesPage } from "./pages/gamesPage.js";
import { detailPage } from "./pages/detailPage.js";
import { aboutPage } from "./pages/aboutPage.js";
import { loginPage } from "./pages/loginPage.js";
import { signupPage } from "./pages/signupPage.js";
import { adminPage } from "./pages/adminPage.js";

export const routes = {
  "/": homePage,
  "/games": gamesPage,
  "/about": aboutPage,
  "/login": loginPage,
  "/signup": signupPage,
  "/admin": adminPage,
};

export async function resolveRoute(path) {
  if (path.startsWith("/game/")) {
    const id = decodeURIComponent(path.slice("/game/".length));
    return () => detailPage(id);
  }

  return routes[path] || homePage;
}
