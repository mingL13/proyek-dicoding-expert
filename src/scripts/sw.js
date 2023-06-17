// eslint-disable-next-line import/no-extraneous-dependencies
import { precacheAndRoute } from "workbox-precaching";

// eslint-disable-next-line no-underscore-dangle, no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

window.addEventListener("install", () => {
  // eslint-disable-next-line no-console
  console.log("Service Worker: Installed");
  window.skipWaiting();
});

window.addEventListener("push", () => {
  // eslint-disable-next-line no-console
  console.log("Service Worker: Pushed");
});
