var CACHE_NAME = 'simple-sw-cache-v1';
var urlsToCache = ['./'];

self.addEventListener('install', function(event) {
	// Perform install steps
	console.log('Installing resources...');
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				const requests = cache.addAll(urlsToCache);
				console.log('Added defined resources to cache');
				return requests;
			})
	);
});

// set event handler for any fetch events from window scope
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
					if (response) {
						return response;
					}
					return fetch(event.request);
				}
			)
	);
});
