import "regenerator-runtime";
import "../styles/main.css";
// eslint-disable-next-line import/no-useless-path-segments
import routes from "./routes/routes";
import UrlParser from "./routes/url-parser";
import loadingSpinner from "./utils/loadingSpinner";

const hamburgerMenu = document.getElementById("nav-bar-icon");
const exitHamburgerMenu = document.getElementById("exit-hamburger-menu");
const navbarMenu = document.querySelector(".navbar-menu");

const toggleHamburger = () => {
  navbarMenu.classList.toggle("active");
};

const toggleExitHamburger = () => {
  navbarMenu.classList.toggle("active");
};

const renderingPage = async () => {
  loadingSpinner.spinnerOn();
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];

  try {
    loadingSpinner.spinnerOff();
    await page.render();
    // eslint-disable-next-line no-console
    console.log("Halaman berhasil dimuat");
  } catch (error) {
    loadingSpinner.spinnerOff();
    // eslint-disable-next-line no-console
    console.log("Halaman gagal dimuat", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  hamburgerMenu.addEventListener("click", () => {
    toggleHamburger();
  });
  exitHamburgerMenu.addEventListener("click", () => {
    toggleExitHamburger();
  });
  await renderingPage();
});

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#main-content") {
    const mainContent = document.getElementById("main-content");
    mainContent.focus();
  } else if (window.location.hash === "#logo") {
    const mainContent = document.getElementById("logo");
    mainContent.focus();
  } else {
    renderingPage();
  }
});
