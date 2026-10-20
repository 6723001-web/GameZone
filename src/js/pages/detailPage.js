import { getGameById } from "../services/gameService.js";
import { t } from "../i18n/translations.js";

export async function detailPage(id) {
  const game = await getGameById(id);

  if (!game) {
    return `
      <section class="section page-section">
        <h1>Тоглоом олдсонгүй</h1>
        <a class="btn btn-primary" href="#/games">
          ${t("games")}
        </a>
      </section>
    `;
  }

  return `
    <section class="detail-hero">
      <img src="${game.image}" alt="${game.title}">

      <div class="detail-overlay">
        <span class="eyebrow">${game.category} · ${game.year}</span>
        <h1>${game.title}</h1>
        <p>${game.description}</p>

        <a class="btn btn-primary"
           href="${game.officialUrl}"
           target="_blank"
           rel="noopener noreferrer">
          ${t("official")}
        </a>

        <a class="btn btn-outline"
           href="${game.trailer}"
           target="_blank"
           rel="noopener noreferrer">
          ${t("trailer")}
        </a>
      </div>
    </section>

    <section class="section">
      <h2>Тоглоомын тухай</h2>
      <p>${game.description}</p>
      <p>Гарсан он: ${game.year}</p>
      <p>Ангилал: ${game.category}</p>
      <a href="#/games" class="text-link">← ${t("games")}</a>
    </section>
  `;
}
