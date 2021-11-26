var CACHE_NAME = 'simple-sw-cache-v1';
var urlsToCache = [];

// set event handler for install event, this will be called when the page loads the first time.
self.addEventListener('install', function(event) {
	// Perform install steps
	console.log('Installing resources...');
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Adding defined resources to cache');
				return cache.addAll(urlsToCache);
			})
	);
});

// set event handler for any fetch events from window scope and send the cached response
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
					// if there's nothing in cache fall back to network
					if (response) {
						return response;
					}
					// fetch the origin request from the network
					return fetch(event.request);
				}
			)
	);
});
