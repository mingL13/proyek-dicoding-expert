const loadingSpinner = {
  spinnerOn() {
    const loaderContainer = document.querySelector(".loader-container");
    loaderContainer.style.display = "flex";
  },
  spinnerOff() {
    const loaderContainer = document.querySelector(".loader-container");
    loaderContainer.style.display = "none";
  },
};

export default loadingSpinner;
