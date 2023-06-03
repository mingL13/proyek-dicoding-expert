import allResto from "../views/pages/allResto";
import detailResto from "../views/pages/detailResto";
import favoriteResto from "../views/pages/favoriteResto";

const routes = {
  "/": allResto,
  "/detail/:id": detailResto,
  "/favorite": favoriteResto,
};

export default routes;
