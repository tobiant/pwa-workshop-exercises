importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');
workbox.setConfig({debug: true});
//wenn resourcen erst während der applaufzeit geladen werden, und diese beim start noch nicht bekannt isnd,
// werden diese rsourcen hier eingetragen
workbox.precaching.precacheAndRoute([
	{
		url: 'https://sapui5.hana.ondemand.com/1.96.0/resources/sap-ui-core.js', revision: null
		/*}, {
            url: 'and here...', revision: null
        }, {
            url: 'and here...', revision: null*/
	}, ...self.__WB_MANIFEST]);
