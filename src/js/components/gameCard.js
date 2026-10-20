import { t } from "../i18n/translations.js";

export function gameCard(game) {
  return `
    <article class="game-card">
      <img
        class="game-image"
        src="${game.image}"
        alt="${game.title}"
        loading="lazy"
      />

      <div class="game-card-content">
        <span class="game-category">${game.category}</span>
        <h3>${game.title}</h3>
        <p>${game.description}</p>

        <a class="btn btn-primary" href="#/game/${game.id}">
          ${t("details")}
        </a>
      </div>
    </article>
  `;
}
