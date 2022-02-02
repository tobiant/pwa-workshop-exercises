# Advanced exercise
In this exercise you will follow the official UI5 async guideline and create a service worker with workbox using strategys and the background-sync api.

## Dependencies
For this exercise you will need a few dependencies to build the UI5 app. Run ``npm install`` to install them in your local repository.
Also you will need the workbox command line interface from exercise 2 again.
1. Install local dependencies``npm install``.
2. If you didn't install workbox in exercise 2 you can catch up with ``npm install -g workbox-cli``

## Tasks
1. Read and apply the guidelines to this UI5 app:
https://sapui5.hana.ondemand.com/sdk/#/topic/676b636446c94eada183b1218a824717.html
2. Build the app with ``npm run build``
3. Start the webserver with ``npx http-server ./dist/``
4. Make sure the app loads a maximum of one request synchronous by adding the url parameter ``sap-ui-xx-nosync=warn`` and watch out the console log of devtools.
5. Read the Workbox docs for precaching: https://developers.google.com/web/tools/workbox/modules/workbox-precaching
6. Build the service worker with ``npm run build-pwa``.
7. Test the application in offline mode and check for missing resources
8. Add the missing resources to the service worker
9. Be creative and connect the app with an API (e.g. https://www.odata.org/odata-services/) and implement some logic, functionalities to fetch and post data is enough.
10. Checkout Workbox strategies: https://developers.google.com/web/tools/workbox/modules/workbox-strategies
11. Implement a strategy to cache you oData requests.
12. Get familiar with the Workbox background-sync API: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-background-sync.Queue
13. Implement the queue to store requests.

Add odata service: https://sapui5.hana.ondemand.com/1.36.6/docs/guide/44062441f3bd4c67a4f665ae362d1109.html