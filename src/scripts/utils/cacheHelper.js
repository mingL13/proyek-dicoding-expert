import CONFIG from "../global/config";

const cacheHelper = {
  async openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },
  async cachingApplicationShell(request) {
    const cache = await this.openCache();
    cache.addAll(request);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    // eslint-disable-next-line max-len
    cacheNames.filter((name) => name !== CONFIG.CACHE_NAME).map((filteredName) => caches.delete(filteredName));
  },
  async fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this.addNewCache(request);
    return response;
  },
  async addNewCache(request) {
    const cache = await this.openCache();
    cache.add(request);
  },
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this.fetchRequest(request);
      return response;
    }
    return this.fetchRequest(request);
  },
};

export default cacheHelper;
