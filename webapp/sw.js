importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

workbox.setConfig({debug: true});
workbox.precaching.precacheAndRoute([
	{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap-ui-core.js', revision: null
	}, {
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/core/library-preload.js', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/m/library-preload.js', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/layout/library-preload.js', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/core/date/Gregorian.js', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/m/themes/sap_fiori_3/library.css', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/core/themes/sap_fiori_3/library.css', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/layout/themes/sap_fiori_3/library.css', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/layout/themes/sap_fiori_3/library-parameters.json', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/m/messagebundle.properties', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/unified/library-preload-lazy.js', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/core/messagebundle.properties', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/layout/messagebundle.properties', revision: null
	},{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Regular.woff2', revision: null
	}, ...self.__WB_MANIFEST]);


// create the backgroundsync queue to save post requests in indexedDB API
const { Queue } = workbox.backgroundSync;
const queue = new Queue(`backgroundsync-queue`);

// plugin for handling requests that could be changed due to a post request already send into the queue and return
// the merged values of all requests in the queue and the cached response of the odata request
const checkQueue = {
	// this method gets called when the handler found a request in the cache, means for the networkFirst strategy
	// which handles the odata requests the client is currently offline
	cachedResponseWillBeUsed: async ({ cacheName, request, matchOptions, cachedResponse, event, state }) => {
		// fetch all entries of the queues
		const queueEntries = await queue.getAll()
		if (queueEntries.length >= 1) {
			// filter the entries by matching the request's url and sort them by the queue's timestamp
			let foundEntries = queueEntries.filter(entry => entry.request.url === request.url)
				.sort(function (x, y) {
					return x.timestamp - y.timestamp;
				});
			if (foundEntries.length >= 1) {
				// extract and clone the body from original response of the cache
				let requestJson = await cachedResponse.clone().json()
				let mergedRequests = {};
				// loop through the entries to merge them
				for (const entry of foundEntries) {
					const entryJson = await entry.request.clone().json();
					// merge entryJson into mergedRequests
					mergedRequests = { ...mergedRequests, ...entryJson }
				}
				// format the response request and add queue informations
				const mergedRequest = {
					d: {
						...requestJson.d, ...mergedRequests,
						QueuedRequest: true,
						QueueEntries: foundEntries
					}
				};
				//await informClient("QUEUED_REQUESTS", JSON.stringify(foundEntries));
				// create the merged response and clone the headers from cached response
				const response = new Response(JSON.stringify(mergedRequest), {
					"status": cachedResponse.clone().status,
					"statusText": cachedResponse.clone().statusText,
					"headers": cachedResponse.clone().headers
				})
				return response;
			} else {
				// look into the queue if there are some remainging requests
				const methods = ['POST', 'DELETE']
				let remainingEntries = queueEntries.filter(entry => !methods.includes(entry.request.method))
					.sort(function (x, y) {
						return x.timestamp - y.timestamp;
					});
				if (remainingEntries.length >= 1) {
					
				}
			}
		}
		// in case the queue is empty or there where no entries matching the requested url
		return cachedResponse;
	},
};


//register odata store
workbox.routing.registerRoute(
	new RegExp('^http://localhost:3000/https://services.odata.org/V2/'),
	// Fetch from the network, but fall back to cache
	new workbox.strategies.NetworkFirst({
		cacheName: 'oData-store',
		plugins: [
			checkQueue,
			new workbox.cacheableResponse.CacheableResponsePlugin({
				statuses: [0, 200]
			})
		]
	}),
);

// set event listener for all post and delete requests to pass them in background sync queue to resend when the client is back online
self.addEventListener('fetch', (event) => {
	const methods = ['POST', 'DELETE']
	if (!methods.includes(event.request.method)) {
		return;
	}
	const bgSyncLogic = async () => {
		try {
			// try network fetch first
			const response = await fetch(event.request.clone());
			return response;
		} catch (error) {
			// when client is offline add the request to the offline queue
			await queue.pushRequest({ request: event.request.clone() });
			//await informClient("QUEUE_PUSHED", JSON.stringify(event.request.clone()));
			// simulate the original response and return it to the client
			const response = new Response(null, {
				status: 204,
				statusText: "No Content"
			})
			return response;
		}
	};
	event.respondWith(bgSyncLogic());
});