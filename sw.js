// FORGE Bulletproof Offline-First Service Worker (v42)
const CACHE_NAME = 'forge-pwa-v42';
const OFFLINE_URL = '/index.html';

const ASSETS_TO_PRECACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/assets/index-v40.js',
  '/assets/index-XoPE8YWT.css?v=stealth-v38',
  '/assets/routine-scroll.css?v=stealth-v38',
  '/assets/ppl-groups.css?v=stealth-v38',
  '/assets/mobile-enhancements.css?v=stealth-v38'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_PRECACHE).catch((err) => {
        console.warn('[FORGE SW] Precache warning:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Only handle GET requests
  if (req.method !== 'GET') return;
  
  let url;
  try {
    url = new URL(req.url);
  } catch (_) {
    return;
  }

  // Bypass cross-origin requests (Supabase, Google Fonts, etc.)
  if (url.origin !== self.location.origin) return;

  // 1. Navigation requests -> Network First with 3.5s timeout and Cache Fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      new Promise((resolve) => {
        let finished = false;
        
        // Timeout to prevent infinite spinner in poor network / basement gym conditions
        const timer = setTimeout(() => {
          if (!finished) {
            caches.match(req).then((cached) => {
              if (cached) {
                finished = true;
                resolve(cached);
              } else {
                caches.match(OFFLINE_URL).then((fallback) => {
                  if (fallback) {
                    finished = true;
                    resolve(fallback);
                  }
                });
              }
            });
          }
        }, 3500);

        fetch(req)
          .then((networkResponse) => {
            clearTimeout(timer);
            if (!finished) {
              finished = true;
              if (networkResponse && networkResponse.status === 200) {
                const copy = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
              }
              resolve(networkResponse);
            }
          })
          .catch(() => {
            clearTimeout(timer);
            if (!finished) {
              finished = true;
              caches.match(req).then((cached) => {
                resolve(cached || caches.match(OFFLINE_URL) || caches.match('/'));
              });
            }
          });
      })
    );
    return;
  }

  // 2. Local Static Assets -> Stale-While-Revalidate with auto-cache
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      const fetchPromise = fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
