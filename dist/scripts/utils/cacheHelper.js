import CONFIG from"../global/config";const cacheHelper={openCache:async()=>caches.open(CONFIG.CACHE_NAME),async cachingApplicationShell(e){(await this.openCache()).addAll(e)},async deleteOldCache(){(await caches.keys()).filter((e=>e!==CONFIG.CACHE_NAME)).map((e=>caches.delete(e)))},async fetchRequest(e){const a=await fetch(e);return a&&200===a.status?(await this.addNewCache(e),a):a},async addNewCache(e){(await this.openCache()).add(e)},async revalidateCache(e){const a=await caches.match(e);return a?(this.fetchRequest(e),a):this.fetchRequest(e)}};export default cacheHelper;