// Simple service worker for PWA offline support
const CACHE = "game-theory-helper-v1";
const FILES = [
  "./", "./index.html", "./manifest.json",
  "./icon-192.png", "./icon-512.png"
];
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});