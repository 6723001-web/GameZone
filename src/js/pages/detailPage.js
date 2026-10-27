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

  const gallery = Array.isArray(game.gallery) ? game.gallery : [];

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

        
<div class="trailer-section">
  <h2> ${t("trailer")}</h2>

  <video
    class="game-trailer"
    controls
    preload="metadata"
    playsinline
  >
    <source
      src="${escapeHTML(game.trailer)}"
      type="video/mp4"
    >
    Таны хөтөч видео тоглуулах боломжгүй байна.
  </video>
</div>

      </div>
    </section>

    <section class="section">
      <h2>Тоглоомын нэмэлт зургууд</h2>

      ${
        gallery.length
          ? `
            <div class="game-gallery">
              ${gallery
                .map(
                  (image, index) => `
                <button
                  class="gallery-item"
                  type="button"
                  data-image="${escapeHTML(image)}"
                  aria-label="Зураг ${index + 1}-ийг томоор харах"
                >
                  <img
                    src="${escapeHTML(image)}"
                    alt="${safeTitle} зураг ${index + 1}"
                    loading="lazy"
                  >
                </button>
              `,
                )
                .join("")}
            </div>
          `
          : `<p>Нэмэлт зураг одоогоор алга байна.</p>`
      }

      <div id="image-modal" class="image-modal" hidden>
        <button
          id="close-image-modal"
          class="modal-close"
          type="button"
          aria-label="Хаах"
        >✕</button>

        <img id="modal-image" src="" alt="Томруулсан тоглоомын зураг">
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

export function setupGallery() {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeButton = document.getElementById("close-image-modal");

  if (!modal || !modalImage || !closeButton) return;

  document.querySelectorAll(".gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      modalImage.src = button.dataset.image;
      modal.hidden = false;
    });
  });

  closeButton.addEventListener("click", () => {
    modal.hidden = true;
    modalImage.src = "";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.hidden = true;
      modalImage.src = "";
    }
  });
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
