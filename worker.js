const cacheName = 'raiffeisen-site';

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

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.open(cacheName)
//             .then(cache => cache.match(event.request, {ignoreSearch: true}))
//             .then(response => {
//                 return response || fetch(event.request);
//             })
//     );
// });



self.addEventListener('fetch', function(event) {
    event.respondWith(
        // Этот метод анализирует запрос и
        // ищет кэшированные результаты для этого запроса в любом из
        // созданных сервис-воркером кэшей.
        caches.match(event.request)
            .then(function(response) {
                // если в кэше найдено то, что нужно, мы можем тут же вернуть ответ.
                if (response) {
                    return response;
                }

                // Клонируем запрос. Так как объект запроса - это поток,
                // обратиться к нему можно лишь один раз.
                // При этом один раз мы обрабатываем его для нужд кэширования,
                // ещё один раз он обрабатывается браузером, для запроса ресурсов,
                // поэтому объект запроса нужно клонировать.
                let fetchRequest = event.request.clone();

                // В кэше ничего не нашлось, поэтому нужно выполнить загрузку материалов,
                // что заключается в выполнении сетевого запроса и в возврате данных, если
                // то, что нужно, может быть получено из сети.
                return fetch(fetchRequest).then(
                    function(response) {
                        // Проверка того, получили ли мы правильный ответ
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Клонирование объекта ответа, так как он тоже является потоком.
                        // Так как нам надо, чтобы ответ был обработан браузером,
                        // а так же кэшем, его нужно клонировать,
                        // поэтому в итоге у нас будет два потока.
                        let responseToCache = response.clone();

                        caches.open(cacheName)
                            .then(function(cache) {
                                // Добавляем ответ в кэш для последующего использования.
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
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