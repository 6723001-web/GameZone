import { auth } from "../services/firebase.js";
import { isAdmin } from "../services/userRole.js";

export function adminPage() {
  const user = auth.currentUser;

  if (!user) {
    window.location.hash = "#/login";
    return "<section class='section'>Нэвтэрч орно уу.</section>";
  }

  if (!isAdmin(user)) {
    return `
      <section class="section">
        <h2>Хандах эрхгүй</h2>
        <p>Энэ хэсэг зөвхөн админ хэрэглэгчид зориулагдсан.</p>
        <a href="#/">Нүүр хуудас руу буцах</a>
      </section>
    `;
  }

  return `
    <section class="section admin-page">
      <h1>ADMIN PANEL</h1>
      <p>Тавтай морил, ${user.displayName || user.email}!</p>

      <div class="admin-actions">
        <h2>Тоглоомын удирдлага</h2>
        <p>Дараагийн алхамд тоглоом нэмэх, засах, устгах боломж нэмнэ.</p>
      </div>
    </section>
  `;
}
