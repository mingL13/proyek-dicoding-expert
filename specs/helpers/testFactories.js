import favoriteRestaurant from "../../src/scripts/data/favoriteResto-idb";
import favButtonPresenter from "../../src/scripts/utils/likeButtonPresenter";

const createFavoriteButtonPresenter = async () => {
  const gambarRestoran = document.createElement("div");
  gambarRestoran.classList.add("gambar-restoran");

  const addFavoriteButton = document.createElement("button");
  addFavoriteButton.classList.add("favorite-button");
  addFavoriteButton.innerText = "Add Favorite";
  gambarRestoran.append(addFavoriteButton);

  await favButtonPresenter.init({
    favButtonContainer: document.querySelector(".favorite-button"),
    favoriteRestaurant: favoriteRestaurant.getAllFavoriteRestaurant(),
  });
};

export default { createFavoriteButtonPresenter };
