const cacheName = 'raiffeisen-site';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
                '/manifest.json',
                '/src/css/main.css',
                '/src/js/main.js',
                // '/common/new/styles/build.css',
                // '/common/new/scripts/assets.js',
                // '/common/new/scripts/main.min.js',
                // '/manifest.json',
                // '/common/new/images-style/icons/close.svg',
                // '/common/new/fonts/icon-build/icons.ttf',
            ])
                .then(() => self.skipWaiting());
        }).catch(function() {
            console.error('worker reject promise');
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                return response || fetch(event.request);
            }).catch(function() {})
    );
});

// self.addEventListener('fetch', function(evt) {
//     // console.log('The service worker is serving the asset.');
//
//     evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
//         return fromCache(evt.request);
//     }));
// });
//
// function fromNetwork(request, timeout) {
//     return new Promise(function (fulfill, reject) {
//
//         let timeoutId = setTimeout(reject, timeout);
//
//         fetch(request).then(function (response) {
//             clearTimeout(timeoutId);
//             fulfill(response);
//         }, reject);
//     });
// }
//
// function fromCache(request) {
//     return caches.open(cacheName).then(function (cache) {
//         return cache.match(request).then(function (matching) {
//             return matching || Promise.reject('no-match');
//         });
//     });
// }