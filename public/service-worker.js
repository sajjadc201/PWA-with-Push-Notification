const CACHE_NAME = "Expense App";
const urlsToCache = [
  "/",
  "index.html",
  "favicon.ico",
  "expense.png",
  "/manifest.json",
  "/static/css/main.4d9e36de.chunk.css",
  "/static/js/2.1c6109b4.chunk.js",
  "/static/js/main.1437e105.chunk.js",
];
const self = this;
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker Activated");
});
