/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { precacheAndRoute } from "workbox-precaching";
import { StaleWhileRevalidate } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { registerRoute } from "workbox-routing";

// eslint-disable-next-line no-underscore-dangle, no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.href.startsWith("https://restaurant-api.dicoding.dev"),
  new StaleWhileRevalidate({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
    // eslint-disable-next-line comma-dangle
  })
);

window.addEventListener("install", () => {
  // eslint-disable-next-line no-console
  console.log("Service Worker: Installed");
  window.skipWaiting();
});

window.addEventListener("push", () => {
  // eslint-disable-next-line no-console
  console.log("Service Worker: Pushed");
});
