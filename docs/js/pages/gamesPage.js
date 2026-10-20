import { getGames } from "../services/gameService.js";
import { gameCard } from "../components/gameCard.js";
import { t } from "../i18n/translations.js";

export async function gamesPage() {
  const games = await getGames();
  const categories = [...new Set(games.map((game) => game.category))];

  return `
    <section class="section page-section">
      <span class="eyebrow">GAME LIBRARY</span>
      <h1>${t("games")}</h1>

      <div class="filters">
        <input
          id="game-search"
          type="search"
          placeholder="${t("search")}"
          aria-label="${t("search")}"
        >

        <select id="category-filter" aria-label="${t("categories")}">
          <option value="all">${t("all")}</option>
          ${categories.map((category) => `<option value="${category}">${category}</option>`).join("")}
        </select>
      </div>

      <div id="games-list" class="games-grid">
        ${games.map(gameCard).join("")}
      </div>

      <p id="empty-message" class="empty-message" hidden>
        Тохирох тоглоом олдсонгүй.
      </p>
    </section>
  `;
}

export async function setupGamesPage() {
  const games = await getGames();
  const searchInput = document.getElementById("game-search");
  const categoryFilter = document.getElementById("category-filter");
  const gamesList = document.getElementById("games-list");
  const emptyMessage = document.getElementById("empty-message");

  if (!searchInput || !categoryFilter || !gamesList) return;

  function filterGames() {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;

    const filtered = games.filter((game) => {
      const matchesText = game.title.toLowerCase().includes(keyword) || game.description.toLowerCase().includes(keyword);

      const matchesCategory = category === "all" || game.category === category;

      return matchesText && matchesCategory;
    });

    gamesList.innerHTML = filtered.map(gameCard).join("");
    emptyMessage.hidden = filtered.length > 0;
  }

  searchInput.addEventListener("input", filterGames);
  categoryFilter.addEventListener("change", filterGames);
}
