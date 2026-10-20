import { t } from "../i18n/translations.js";

export function aboutPage() {
  return `
    <section class="section page-section about-section">
      <span class="eyebrow">ABOUT GAMEZONE</span>
      <h1>${t("about")} GameZone</h1>

      <p>
        GameZone нь PC тоглоомуудын мэдээлэл, ангилал,
        танилцуулга болон трейлерийг нэг дороос үзэх
        зориулалттай веб сайт юм.
      </p>

      <div class="about-features">
        <article class="feature-card">
          <h3>Тоглоомын мэдээлэл</h3>
          <p>Тоглоомын төрөл, гарсан он, тайлбарыг харах.</p>
        </article>

        <article class="feature-card">
          <h3>Хайлт ба ангилал</h3>
          <p>Өөрт хэрэгтэй тоглоомоо хурдан олох.</p>
        </article>

        <article class="feature-card">
          <h3>Албан ёсны холбоос</h3>
          <p>Тоглоомын албан ёсны сайт руу шилжих.</p>
        </article>
      </div>
    </section>
  `;
}
