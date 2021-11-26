importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');
workbox.setConfig({debug: true});
workbox.precaching.precacheAndRoute([
	{
		url: 'urls go here...', revision: null
	}, {
		url: 'and here...', revision: null
	}, {
		url: 'and here...', revision: null
	}, ...self.__WB_MANIFEST]);
