import cacheHelper from "./utils/cacheHelper";

const assetsToCache = ["./", "./index.html", "./app.webmanifest", "./images/logo/logo.png"];

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (e) => {
  e.waitUntil(cacheHelper.cachingApplicationShell([...assetsToCache]));
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (e) => {
  e.waitUntil(cacheHelper.deleteOldCache());
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (e) => {
  e.respondWith(cacheHelper.revalidateCache(e.request));
});
