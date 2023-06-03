import "regenerator-runtime";
import "../styles/main.css";
// eslint-disable-next-line import/no-useless-path-segments
import routes from "./routes/routes";
import UrlParser from "./routes/url-parser";

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
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  await page.render();
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
  renderingPage();
});
