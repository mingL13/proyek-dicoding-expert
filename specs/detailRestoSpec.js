import detailResto from "../src/scripts/views/pages/detailResto";

describe("Detail Resto", () => {
  let favoriteButton;
  let unfavoriteButton;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="gambar-restoran">
        <img src="" alt="Foto Restoran" />
        <button class="favorite-button"></button>
        <button class="unfavorite-button"></button>
      </div>
    `;

    favoriteButton = document.querySelector(".favorite-button");
    unfavoriteButton = document.querySelector(".unfavorite-button");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render unfavorite button when favorite button is clicked", async () => {
    await detailResto.render();

    favoriteButton.click();
    const updatedFavoriteButton = document.querySelector(".favorite-button");
    const updatedUnfavoriteButton = document.querySelector(".unfavorite-button");

    expect(updatedFavoriteButton).toBeNull();
    expect(updatedUnfavoriteButton).not.toBeNull();
  });

  it("should render favorite button when unfavorite button is clicked", () => {
    detailResto.render();

    unfavoriteButton.click();

    const updatedFavoriteButton = document.querySelector(".favorite-button");
    const updatedUnfavoriteButton = document.querySelector(".unfavorite-button");

    expect(updatedFavoriteButton).not.toBeNull();
    expect(updatedUnfavoriteButton).toBeNull();
  });
});
