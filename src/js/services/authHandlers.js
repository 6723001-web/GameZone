import { loginWithGoogle, registerWithEmail, loginWithEmail } from "./authService.js";

export function bindAuthForms() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  const googleLogin = document.getElementById("google-login-btn");
  const googleSignup = document.getElementById("google-signup-btn");

  const message = document.getElementById("auth-message");

  function showMessage(text) {
    if (message) message.textContent = text;
  }

  async function runAuth(action) {
    showMessage("Боловсруулж байна...");

    try {
      await action();
      showMessage("Амжилттай! Нүүр хуудас руу шилжиж байна.");
      window.location.hash = "#/";
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        showMessage("Нэвтрэх цонх хаагдлаа. Дахин оролдоно уу.");
        return;
      }

      console.error("Authentication error:", error);

      const messages = {
        "auth/invalid-credential": "Имэйл эсвэл нууц үг буруу байна.",
        "auth/email-already-in-use": "Энэ имэйл бүртгэлтэй байна.",
        "auth/weak-password": "Илүү хүчтэй нууц үг оруулна уу.",
        "auth/popup-blocked": "Browser popup нээхийг хориглолоо.",
        "auth/unauthorized-domain": "Энэ домэйн Firebase-д зөвшөөрөгдөөгүй.",
        "auth/operation-not-allowed": "Firebase дээр энэ нэвтрэх арга идэвхгүй байна.",
        "auth/network-request-failed": "Интернет холболтоо шалгана уу.",
      };

      showMessage(messages[error.code] || `Алдаа гарлаа: ${error.code || error.message}`);
    }
  }

  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    await runAuth(() => loginWithEmail(email, password));
  });

  signupForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    if (password !== confirmPassword) {
      showMessage("Нууц үг хоорондоо таарахгүй байна.");
      return;
    }

    await runAuth(() => registerWithEmail(name, email, password));
  });

  googleLogin?.addEventListener("click", () => {
    runAuth(loginWithGoogle);
  });

  googleSignup?.addEventListener("click", () => {
    runAuth(loginWithGoogle);
  });
}
