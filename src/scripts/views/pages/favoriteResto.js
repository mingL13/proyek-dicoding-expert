import favoriteRestaurant from "../../data/favoriteResto-idb";
import API_ENDPOINT from "../../global/api-endpoint";

const favoriteResto = {
  async render() {
    const targetRender = document.querySelector(".daftar-restoran");
    targetRender.innerHTML = "";

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
      imageRestoran.setAttribute("src", API_ENDPOINT.IMAGE(restaurantData.pictureId, "small"));
      imageRestoran.setAttribute("alt", `Foto ${restaurantData.name} Restaurant`);
      gambarRestoran.append(imageRestoran);

      const namaRestoran = document.createElement("a");
      namaRestoran.classList.add("nama-restoran");
      namaRestoran.setAttribute("href", `/#/detail/${restaurantData.id}`);

      const teksNamaRestoran = document.createElement("p");
      teksNamaRestoran.innerText = restaurantData.name;
      namaRestoran.append(teksNamaRestoran);

      const kotaRestoran = document.createElement("div");
      kotaRestoran.classList.add("kota-restoran");

      const teksKotaRestoran = document.createElement("p");
      teksKotaRestoran.innerText = restaurantData.city;
      kotaRestoran.append(teksKotaRestoran);

      const ratingRestoran = document.createElement("div");
      ratingRestoran.classList.add("rating-restoran");

      const teksRatingRestoran = document.createElement("p");
      teksRatingRestoran.innerText = restaurantData.rating;
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

      itemRestoran.append(gambarRestoran, headingRestoran, deskripsiRestoran, kategoriRestoran);

      const convertItem = itemRestoran.outerHTML;
      targetRender.innerHTML += convertItem;
    };
    const restaurantData = await favoriteRestaurant.getAllFavoriteRestaurant();
    restaurantData.forEach((data) => {
      templateItem(data);
    });
  },
};

export default favoriteResto;
