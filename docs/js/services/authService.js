import {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "./firebase.js";

// Google-оор нэвтрэх эсвэл бүртгүүлэх
export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);

  return result.user;
}

// Имэйлээр бүртгүүлэх
export async function registerWithEmail(name, email, password) {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(result.user, {
    displayName: name,
  });

  return result.user;
}

// Имэйлээр нэвтрэх
export async function loginWithEmail(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);

  return result.user;
}
