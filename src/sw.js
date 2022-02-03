var CACHE_NAME = 'simple-sw-cache-v1';
var urlsToCache = [];

// set event handler for install event, this will be called when the page loads the first time.
self.addEventListener('install', function(event) {
	// Perform install steps
	//siehe auch https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
	urlsToCache.push("/assets/icons/favicon.ico");
	// urlsToCache.push("/sw.js"); //muss nicht in den cache aufgenommen werden
	urlsToCache.push("/index.html");
	urlsToCache.push("/"); //base scope (localhost)
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Adding defined resources to cache');//hier müssen die ressoucen in den cach geladen werden
				return cache.addAll(urlsToCache);
			})
	);
});

// set event handler for any fetch events from window scope and send the cached response
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) { //hier den cache lesen
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
