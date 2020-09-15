const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;
//INSTALL SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

//LISTEN FOR REQUEST
self.addEventListener("fetch", (event) => {});

//ACTIVATE THE SW
self.addEventListener("activate", (event) => {});
