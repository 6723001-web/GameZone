import { getGameById } from "../services/gameService.js";
import { t } from "../i18n/translations.js";

export async function detailPage(id) {
  const game = await getGameById(id);

  if (!game) {
    return `
      <section class="section page-section">
        <h1>Тоглоом олдсонгүй</h1>
        <a class="btn btn-primary" href="#/games">
          ← ${t("games")}
        </a>
      </section>
    `;
  }

  const safeTitle = escapeHTML(game.title);
  const safeDescription = escapeHTML(game.description);
  const safeCategory = escapeHTML(game.category);
  const safeYear = escapeHTML(String(game.year));

  return `
    <section class="detail-hero">
      <img
        src="${escapeHTML(game.image)}"
        alt="${safeTitle}"
      >

      <div class="detail-overlay">
        <span class="eyebrow">${safeCategory} · ${safeYear}</span>
        <h1>${safeTitle}</h1>
        <p>${safeDescription}</p>

        <a class="btn btn-primary"
           href="${escapeHTML(game.officialUrl)}"
           target="_blank"
           rel="noopener noreferrer">
          ${t("official")}
        </a>

        <a class="btn btn-outline"
           href="${escapeHTML(game.trailer)}"
           target="_blank"
           rel="noopener noreferrer">
          ${t("trailer")}
        </a>
      </div>
    </section>

    <section class="section">
      <h2>Тоглоомын мэдээлэл</h2>

      <div class="feature-card">
        <p><strong>Нэр:</strong> ${safeTitle}</p>
        <p><strong>Ангилал:</strong> ${safeCategory}</p>
        <p><strong>Гарсан он:</strong> ${safeYear}</p>
        <p>${safeDescription}</p>
      </div>

      <a href="#/games" class="btn btn-outline">
        ← ${t("games")}
      </a>
    </section>
  `;
}

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}
