import { auth } from "./firebase.js";

const ADMIN_UIDS = ["Leqo1tdcr8Yl45sKDbZMjSoFXJF2"];

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
