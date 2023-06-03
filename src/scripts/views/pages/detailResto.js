import dataRestoran from "../../data/data";
import UrlParser from "../../routes/url-parser";
import API_ENDPOINT from "../../global/api-endpoint";
import favoriteRestaurant from "../../data/favoriteResto-idb";

const detailResto = {
  async render() {
    const targetRender = document.querySelector(".daftar-restoran");

    const daftarKategori = ["Fine Dining", "Fast Food", "Healthy Restaurant", "Casual Dining", "Family Restaurant", "Seafood Restaurant", "Indonesian Cuisine", "Italian Restaurant"];
    const randomRestaurantCategory = () => {
      const resultRandom = Math.floor(Math.random() * 6 + 1);
      return resultRandom;
    };

    const templateItem = (restaurantData) => {
      const itemRestoran = document.createElement("div");

      itemRestoran.classList.add("item-restoran");
      itemRestoran.setAttribute("tabindex", 0);

      const gambarRestoran = document.createElement("div");
      gambarRestoran.classList.add("gambar-restoran");

      const headingRestoran = document.createElement("div");
      headingRestoran.classList.add("heading-restoran");

      const deskripsiRestoran = document.createElement("div");
      deskripsiRestoran.classList.add("deskripsi-restoran");

      const imageRestoran = document.createElement("img");
      imageRestoran.setAttribute("src", API_ENDPOINT.IMAGE(restaurantData.pictureId, "large"));
      imageRestoran.setAttribute("alt", "Foto Restoran");

      const addFavoriteButton = document.createElement("button");
      addFavoriteButton.classList.add("favorite-button");
      addFavoriteButton.innerText = "Add Favorite";

      const deleteFavoriteButton = document.createElement("button");
      deleteFavoriteButton.classList.add("unfavorite-button");
      deleteFavoriteButton.innerText = "Un-Favorite";

      gambarRestoran.append(imageRestoran, addFavoriteButton, deleteFavoriteButton);

      const namaRestoran = document.createElement("a");
      namaRestoran.classList.add("nama-restoran");
      namaRestoran.setAttribute("href", `/#/detail/${restaurantData.id}`);

      const teksNamaRestoran = document.createElement("p");
      teksNamaRestoran.innerText = restaurantData.name;
      namaRestoran.append(teksNamaRestoran);

      const kotaRestoran = document.createElement("div");
      kotaRestoran.classList.add("kota-restoran");

      const teksAlamatRestoran = document.createElement("p");
      teksAlamatRestoran.innerText = restaurantData.address;
      kotaRestoran.append(teksAlamatRestoran);

      const teksKotaRestoran = document.createElement("p");
      teksKotaRestoran.innerText = restaurantData.city;
      kotaRestoran.append(teksKotaRestoran);

      const ratingRestoran = document.createElement("div");
      ratingRestoran.classList.add("rating-restoran");

      const teksRatingRestoran = document.createElement("p");
      teksRatingRestoran.innerText = `Rating: ${restaurantData.rating}`;
      ratingRestoran.append(teksRatingRestoran);

      headingRestoran.append(namaRestoran, kotaRestoran, ratingRestoran);

      const teksDeskripsiRestoran = document.createElement("p");
      teksDeskripsiRestoran.innerText = restaurantData.description;
      deskripsiRestoran.append(teksDeskripsiRestoran);

      const kategoriRestoran = document.createElement("div");
      kategoriRestoran.classList.add("kategori-restoran");

      const teksKategoriRestoran = document.createElement("p");
      teksKategoriRestoran.innerText = daftarKategori[randomRestaurantCategory()];

      kategoriRestoran.append(teksKategoriRestoran);

      const menuRestoran = document.createElement("div");
      menuRestoran.classList.add("menu-restoran");

      const menuMakanan = document.createElement("div");
      menuMakanan.classList.add("menu-makanan");

      const headerMenuMakanan = document.createElement("p");
      headerMenuMakanan.innerText = "Menu Makanan:";

      const listMenuMakanan = document.createElement("div");
      listMenuMakanan.classList.add("list-menu-makanan");
      // eslint-disable-next-line no-unused-vars
      const daftarMenuMakanan = restaurantData.menus.foods.forEach((data) => {
        const barisMenuMakanan = document.createElement("p");
        barisMenuMakanan.innerText = `${data.name}`;
        listMenuMakanan.append(barisMenuMakanan);
      });
      menuMakanan.append(headerMenuMakanan, listMenuMakanan);

      const menuMinuman = document.createElement("div");
      menuMinuman.classList.add("menu-minuman");

      const headerMenuMinuman = document.createElement("p");
      headerMenuMinuman.innerText = "Menu Minuman:";

      const listMenuMinuman = document.createElement("div");
      listMenuMinuman.classList.add("list-menu-makanan");
      // eslint-disable-next-line no-unused-vars
      const daftarMenuMinuman = restaurantData.menus.drinks.forEach((data) => {
        const barisMenuMinuman = document.createElement("p");
        barisMenuMinuman.innerText = `${data.name}`;
        listMenuMinuman.append(barisMenuMinuman);
      });
      menuMinuman.append(headerMenuMinuman, listMenuMinuman);

      menuRestoran.append(menuMakanan, menuMinuman);

      const reviewPelanggan = document.createElement("div");
      reviewPelanggan.classList.add("review-pelanggan");

      const reviewPelangganHeader = document.createElement("p");
      reviewPelangganHeader.innerText = "Review Pelanggan:";

      const reviewDetail = document.createElement("div");
      reviewDetail.classList.add("review-detail");

      // eslint-disable-next-line no-unused-vars
      const reviewDetailContainer = restaurantData.customerReviews.forEach((data) => {
        const reviewDetailBlock = document.createElement("div");
        reviewDetailBlock.classList.add("review-detail-block");
        const namaReview = document.createElement("p");
        namaReview.classList.add("nama-review");
        namaReview.innerText = `${data.name} - ${data.date}`;
        const isiReview = document.createElement("p");
        isiReview.classList.add("isi-review");
        isiReview.innerText = `${data.review}`;
        reviewDetailBlock.append(namaReview, isiReview);
        reviewDetail.append(reviewDetailBlock);
      });

      reviewPelanggan.append(reviewPelangganHeader, reviewDetail);

      // eslint-disable-next-line max-len
      itemRestoran.append(gambarRestoran, headingRestoran, deskripsiRestoran, kategoriRestoran, menuRestoran, reviewPelanggan);

      const convertItem = itemRestoran.outerHTML;
      targetRender.innerHTML = convertItem;
    };

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataDetailResto = await dataRestoran.getDetail(url.id);
    templateItem(dataDetailResto.restaurant);

    const favActionButton = document.querySelector(".favorite-button");
    favActionButton.addEventListener("click", async () => {
      await favoriteRestaurant.putFavoriteRestaurant(dataDetailResto.restaurant);
    });

    const delFavActionButton = document.querySelector(".unfavorite-button");
    delFavActionButton.addEventListener("click", async () => {
      await favoriteRestaurant.deleteFavoriteRestaurant(dataDetailResto.restaurant.id);
    });
  },
};

export default detailResto;
