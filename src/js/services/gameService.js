import { games } from "../data/games.js";

export async function getGames() {
  return games;
}

export async function getGameById(id) {
  return games.find((game) => game.id === id);
}

export async function searchGames(keyword = "", category = "all") {
  const normalizedKeyword = keyword.trim().toLowerCase();

  return games.filter((game) => {
    const matchesKeyword =
      game.title.toLowerCase().includes(normalizedKeyword) || game.description.toLowerCase().includes(normalizedKeyword);

    const matchesCategory = category === "all" || game.category === category;

    return matchesKeyword && matchesCategory;
  });
}
