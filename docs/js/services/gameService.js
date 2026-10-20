import { games as localGames } from "../data/games.js";

const API_KEY = "YOUR_RAWG_API_KEY";
const API_URL = "https://api.rawg.io/api";

export async function getGames() {
  try {
    if (!API_KEY || API_KEY === "YOUR_RAWG_API_KEY") {
      return localGames;
    }

    const response = await fetch(`${API_URL}/games?key=${API_KEY}&page_size=20`);

    if (!response.ok) {
      throw new Error("Тоглоомын API мэдээлэл авахад алдаа гарлаа.");
    }

    const data = await response.json();

    return data.results.map((game) => ({
      id: String(game.id),
      title: game.name,
      category: game.genres?.map((genre) => genre.name).join(", ") || "Game",
      year: game.released ? Number(game.released.slice(0, 4)) : "Тодорхойгүй",
      description: game.name,
      image: game.background_image || "https://placehold.co/900x500/171022/ffffff?text=GameZone",
      trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(game.name + " official trailer")}`,
      officialUrl: `https://rawg.io/games/${game.slug}`,
    }));
  } catch (error) {
    console.error("Тоглоомын мэдээлэл татахад алдаа:", error);
    return localGames;
  }
}

export async function getGameById(id) {
  const games = await getGames();
  return games.find((game) => String(game.id) === String(id));
}

export async function searchGames(keyword = "", category = "all") {
  const games = await getGames();
  const normalizedKeyword = keyword.trim().toLowerCase();

  return games.filter((game) => {
    const matchesKeyword =
      game.title.toLowerCase().includes(normalizedKeyword) || game.description.toLowerCase().includes(normalizedKeyword);

    const matchesCategory = category === "all" || game.category.split(", ").includes(category);

    return matchesKeyword && matchesCategory;
  });
}
