/* eslint-disable no-restricted-globals */

const CACHE_NAME = "time-app-cache-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json"];

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate SW
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.forEach((name) => {
          if (name !== CACHE_NAME) {
            caches.delete(name);
          }
        })
      )
    )
  );
});

// Fetch (offline support)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
