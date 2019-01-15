const cacheName = 'raiffeisen-site';

console.log(111);

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
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
            })
    );
});

// self.addEventListener('fetch', function(event) {
//     event.respondWith(caches.match(event.request).then(function(response) {
//         // caches.match() always resolves
//         // but in case of success response will have value
//         if (response !== undefined) {
//             return response;
//         } else {
//             return fetch(event.request).then(function (response) {
//                 // response may be used only once
//                 // we need to save clone to put one copy in cache
//                 // and serve second one
//                 let responseClone = response.clone();
//
//                 caches.open(cacheName).then(function (cache) {
//                     cache.put(event.request, responseClone);
//                 });
//                 return response;
//             })
//             //     .catch(function () {
//             //     return caches.match('/sw-test/gallery/myLittleVader.jpg');
//             // });
//         }
//     }));
// });