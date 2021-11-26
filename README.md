# Advanced exercise
In this exercise you will follow the official UI5 async guideline and create a service worker with workbox cli again.

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
5. Create your service worker with workbox as you did before in the second exercise.
6. 
