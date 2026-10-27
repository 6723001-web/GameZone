import { auth, db, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "./firebase.js";
import { isAdmin } from "./userRole.js";

const gamesCollection = collection(db, "games");

function checkAdmin() {
  if (!auth.currentUser || !isAdmin(auth.currentUser)) {
    throw new Error("Зөвхөн админ энэ үйлдлийг хийнэ.");
  }
}

export async function getAdminGames() {
  checkAdmin();

  const snapshot = await getDocs(gamesCollection);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function addGame(game) {
  checkAdmin();

  if (!game.title?.trim()) {
    throw new Error("Тоглоомын нэр оруулна уу.");
  }

  return addDoc(gamesCollection, {
    title: game.title.trim(),
    category: game.category?.trim() || "Game",
    year: Number(game.year) || new Date().getFullYear(),
    description: game.description?.trim() || "",
    image: game.image?.trim() || "",
    trailer: game.trailer?.trim() || "",
    officialUrl: game.officialUrl?.trim() || "",
  });
}

export async function editGame(id, game) {
  checkAdmin();

  await updateDoc(doc(db, "games", id), {
    title: game.title.trim(),
    category: game.category?.trim() || "Game",
    year: Number(game.year) || new Date().getFullYear(),
    description: game.description?.trim() || "",
    image: game.image?.trim() || "",
    trailer: game.trailer?.trim() || "",
    officialUrl: game.officialUrl?.trim() || "",
  });
}

export async function removeGame(id) {
  checkAdmin();
  await deleteDoc(doc(db, "games", id));
}
