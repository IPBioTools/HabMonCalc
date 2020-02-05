const cacheName = 'habmon-cache-v1';

const toCache = [
    '/',
    '/index.html',
    '/scripts.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(toCache))
            .catch(e => console.log("Failed to add files to cache: ", e))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(event.request)
                    .then(response => {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        const responseToCache = response.clone();

                        caches.open(cacheName)
                            .then(cache => cache.put(event.request, responseToCache));

                        return response;
                    }
                );
            })
    );
});
