export const translations = {
  mn: {
    home: "Нүүр хуудас",
    games: "Тоглоомууд",
    about: "Бидний тухай",
    search: "Тоглоом хайх...",
    featured: "Онцлох тоглоом",
    explore: "Тоглоомууд үзэх",
    details: "Дэлгэрэнгүй",
    official: "Албан ёсны сайт",
    trailer: "Трейлер үзэх",
    categories: "Ангилал",
    all: "Бүгд",
    news: "Мэдээ",
    footer: "GameZone — Тоглоомын ертөнцөд тавтай морил.",
  },
  en: {
    home: "Home",
    games: "Games",
    about: "About",
    search: "Search games...",
    featured: "Featured Game",
    explore: "Explore Games",
    details: "Details",
    official: "Official Website",
    trailer: "Watch Trailer",
    categories: "Categories",
    all: "All",
    news: "News",
    footer: "GameZone — Welcome to the world of gaming.",
  },
};

export function getLanguage() {
  return localStorage.getItem("gamezone-language") || "mn";
}

export function setLanguage(language) {
  localStorage.setItem("gamezone-language", language);
}

export function t(key) {
  const language = getLanguage();
  return translations[language]?.[key] || translations.mn[key] || key;
}
