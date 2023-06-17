import favoriteRestaurant from "../src/scripts/data/favoriteResto-idb";
import detailResto from "../src/scripts/views/pages/detailResto";
import testFactories from "./helpers/testFactories";

describe("Favorite dan unfavorite restoran", async () => {
  //   beforeEach(async () => {
  //     await favoriteRestaurant.deleteFavoriteRestaurant();
  //   });
  // const restaurantData = {
  //   id: 1,
  //   pictureId: 123,
  //   address: "123",
  //   city: "Surabaya",
  //   name: "Melting Pot",
  //   rating: 3,
  //   description: "Test",
  //   category: "Fine Dining",
  //   review: "Test",
  // };

  const gambarRestoran = document.createElement("div");
  gambarRestoran.classList.add("gambar-restoran");

  const addFavoriteButton = document.createElement("button");
  addFavoriteButton.classList.add("favorite-button");
  addFavoriteButton.innerText = "Add Favorite";

  const createFavButton = () => {
    gambarRestoran.append(addFavoriteButton);
  };

  beforeEach(() => {
    createFavButton();
  });

  it("Seharusnya menampilkan tombol favorite", async () => {
    await testFactories.createFavoriteButtonPresenter();
    expect(document.querySelector("favorite-button")).toBeTruthy();
  });
});
