import { auth } from "./firebase.js";

// Хэрэглэгчийн role-ийг Firebase ID-аар хадгалах.
// Admin role-ийг зөвхөн итгэмжлэгдсэн тохиргоогоор олгоно.
const ADMIN_UIDS = [
  // Энд өөрийн Firebase User UID-г нэмнэ.
];

export function getUserRole(user) {
  if (!user) return null;

  return ADMIN_UIDS.includes(user.uid) ? "admin" : "user";
}

export function isAdmin(user) {
  return getUserRole(user) === "admin";
}

export function getCurrentUser() {
  return auth.currentUser;
}
