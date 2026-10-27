export const translations = {
  mn: {
    // Navbar
    home: "Нүүр хуудас",
    games: "Тоглоомууд",
    about: "Бидний тухай",
    login: "Нэвтрэх",
    signup: "Бүртгүүлэх",
    logout: "Гарах",

    // Home page
    welcome: "GameZone-д тавтай морил",
    featured: "Онцлох тоглоом",
    explore: "Тоглоомын ертөнц",
    exploreGames: "Тоглоом үзэх",
    details: "Дэлгэрэнгүй",
    official: "Албан ёсны сайт",
    viewAll: "Бүгдийг үзэх",
    news: "Мэдээ мэдээлэл",
    latestNews: "Сүүлийн үеийн мэдээ",

    // Games page
    gamesTitle: "Тоглоомын цуглуулга",
    search: "Хайх",
    searchPlaceholder: "Тоглоомын нэрээр хайх...",
    allCategories: "Бүх ангилал",
    action: "Адал явдалт",
    shooter: "Буудлагын",
    adventure: "Адал явдал",
    survival: "Амьд үлдэх",
    rpg: "Дүрд тоглох",
    noGames: "Тоглоом олдсонгүй.",

    // Game details
    gameDetails: "Тоглоомын дэлгэрэнгүй",
    description: "Тайлбар",
    gallery: "Зургийн цомог",
    trailer: "Тоглоомын трейлер",
    trailerTitle: "Тоглоомын трейлер",
    releaseDate: "Гарсан огноо",
    developer: "Хөгжүүлэгч",
    publisher: "Эрхлэн гаргагч",
    platform: "Платформ",
    genre: "Төрөл",
    back: "Буцах",
    download: "Татаж авах",
    screenshots: "Тоглоомын зургууд",

    // Login
    loginTitle: "GameZone-д тавтай морил",
    loginDescription: "Өөрийн бүртгэлээр нэвтэрнэ үү.",
    username: "Хэрэглэгчийн нэр",
    email: "Имэйл хаяг",
    password: "Нууц үг",
    confirmPassword: "Нууц үг баталгаажуулах",
    loginButton: "Нэвтрэх",
    noAccount: "Бүртгэлгүй юу?",

    // Sign up
    signupTitle: "Шинэ бүртгэл үүсгэх",
    signupDescription: "GameZone-ийн гишүүн болоорой.",
    signupButton: "Бүртгэл үүсгэх",
    haveAccount: "Бүртгэлтэй юу?",

    // Validation and messages
    requiredField: "Энэ талбарыг бөглөнө үү.",
    passwordMismatch: "Нууц үг таарахгүй байна.",
    loading: "Уншиж байна...",
    success: "Амжилттай!",
    error: "Алдаа гарлаа.",
    tryAgain: "Дахин оролдоно уу.",

    // Footer
    footer: "Тоглоомын ертөнцөд тавтай морил.",
    footerDescription: "Тоглоомын ертөнцөд тавтай морил.",
    legal: "Эрх зүй",
    privacy: "Нууцлалын бодлого",
    terms: "Үйлчилгээний нөхцөл",
    cookies: "Cookie бодлого",
    support: "Тусламж",
    contact: "Холбоо барих",
    allRightsReserved: "Бүх эрх хуулиар хамгаалагдсан.",
  },

  en: {
    // Navbar
    home: "Home",
    games: "Games",
    about: "About Us",
    login: "Login",
    signup: "Sign Up",
    logout: "Log Out",

    // Home page
    welcome: "Welcome to GameZone",
    featured: "Featured Game",
    explore: "Explore the Gaming World",
    exploreGames: "Explore Games",
    details: "Details",
    official: "Official Website",
    viewAll: "View All",
    news: "News",
    latestNews: "Latest News",

    // Games page
    gamesTitle: "Game Collection",
    search: "Search",
    searchPlaceholder: "Search games by name...",
    allCategories: "All Categories",
    action: "Action",
    shooter: "Shooter",
    adventure: "Adventure",
    survival: "Survival",
    rpg: "Role-Playing Game",
    noGames: "No games found.",

    // Game details
    gameDetails: "Game Details",
    description: "Description",
    gallery: "Gallery",
    trailer: "Game Trailer",
    trailerTitle: "Game Trailer",
    releaseDate: "Release Date",
    developer: "Developer",
    publisher: "Publisher",
    platform: "Platform",
    genre: "Genre",
    back: "Back",
    download: "Download",
    screenshots: "Screenshots",

    // Login
    loginTitle: "Welcome to GameZone",
    loginDescription: "Sign in to your account.",
    username: "Username",
    email: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    loginButton: "Login",
    noAccount: "Don't have an account?",

    // Sign up
    signupTitle: "Create an Account",
    signupDescription: "Become a GameZone member.",
    signupButton: "Create Account",
    haveAccount: "Already have an account?",

    // Validation and messages
    requiredField: "This field is required.",
    passwordMismatch: "Passwords do not match.",
    loading: "Loading...",
    success: "Success!",
    error: "An error occurred.",
    tryAgain: "Please try again.",

    // Footer
    footer: "Welcome to the world of gaming.",
    footerDescription: "Welcome to the world of gaming.",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
    support: "Support",
    contact: "Contact Us",
    allRightsReserved: "All rights reserved.",
  },
};

// Одоогийн хэлийг авах
export function getLanguage() {
  return localStorage.getItem("gamezone-language") || "mn";
}

// Хэл солих
export function setLanguage(language) {
  if (!translations[language]) {
    return;
  }

  localStorage.setItem("gamezone-language", language);
}

// Орчуулсан текст авах
export function t(key) {
  const language = getLanguage();

  return translations[language]?.[key] || translations.mn[key] || key;
}
