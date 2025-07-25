const CACHE_NAME = 'ravencore-cache-v1';
const urlsToCache = [
  '/ravencore/',
  '/ravencore/index.html',
  '/ravencore/style.css',
  '/ravencore/app.js',
  '/ravencore/manifest.json',
  '/ravencore/icon-512.png'
];

// Install event – Cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate event – Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// Fetch event – Serve cached files if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
