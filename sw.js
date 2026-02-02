const CACHE_NAME = 'debt-admin-v10-fix'; // تم تحديث الإصدار لإجبار التحديث
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './config.js',
    './pwa.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
];

self.addEventListener('install', (e) => {
    self.skipWaiting(); // تفعيل التحديث فوراً
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) return caches.delete(key);
        }));
    }));
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    if ((e.request.url.includes('firestore') && !e.request.url.endsWith('.js')) || e.request.url.includes('googleapis')) return;
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
