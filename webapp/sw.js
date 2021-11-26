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
