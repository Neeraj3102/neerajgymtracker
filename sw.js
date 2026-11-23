// FORGE Bulletproof Offline-First Service Worker (v38)
const CACHE_NAME = 'forge-pwa-v38';
const OFFLINE_URL = '/index.html';

const ASSETS_TO_PRECACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/assets/index-CiCrIMMp.js?v=stealth-v37',
  '/assets/index-XoPE8YWT.css?v=stealth-v37',
  '/assets/routine-scroll.css?v=stealth-v37',
  '/assets/ppl-groups.css?v=stealth-v37',
  '/assets/mobile-enhancements.css?v=stealth-v37'
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

  // 1. Navigation requests -> Network First with Offline Cache Fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(req).then((cached) => {
            return cached || caches.match(OFFLINE_URL) || caches.match('/');
          });
        })
    );
    return;
  }

  // 2. Local Static Assets -> Stale-While-Revalidate
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
