import { getGames } from "../services/gameService.js";
import { gameCard } from "../components/gameCard.js";
import { t } from "../i18n/translations.js";

export async function homePage() {
  const games = await getGames();
  const featured = games[0];

  return `
    <section class="hero">
      <div class="hero-content">
        <span class="eyebrow">${t("featured")}</span>
        <h1>${featured.title}</h1>
        <p>${featured.description}</p>

        <a class="btn btn-primary" href="#/game/${featured.id}">
          ${t("details")}
        </a>

        <a class="btn btn-outline"
           href="${featured.officialUrl}"
           target="_blank"
           rel="noopener noreferrer">
          ${t("official")}
        </a>
      </div>

      <img src="${featured.image}" alt="${featured.title}">
    </section>

    <section class="section">
      <div class="section-heading">
      
    <section class="category-section">
      <span class="eyebrow">EXPLORE BY GENRE</span>
      <h2>Тоглоомын ангилал</h2>

      <div class="category-list">
        <a href="#/games" class="category-chip">🎯 Shooter</a>
        <a href="#/games" class="category-chip">⚔️ Action</a>
        <a href="#/games" class="category-chip">🧙 RPG</a>
        <a href="#/games" class="category-chip">🧱 Sandbox</a>
      </div>
    </section>

        <div>
          <span class="eyebrow">GAME COLLECTION</span>
          <h2>${t("explore")}</h2>
        </div>
        <a href="#/games" class="text-link">${t("games")} →</a>
      </div>

      <div class="games-grid">
        ${games.map(gameCard).join("")}
      </div>
    </section>

    <section class="news-section">
      <span class="eyebrow">${t("news")}</span>
      <h2>Тоглоомын ертөнцийн шинэ мэдээлэл</h2>
      <p>Шинэ тоглоом, трейлер болон тоглоомын мэдээллийг нэг дороос.</p>
    </section>
  `;
}
