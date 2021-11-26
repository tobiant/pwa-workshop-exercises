# Simple Service Worker
This is the basic way to create a service worker enabling your web app to work offline. You just need to make a few changes on this repo;
1. Think over the resources that the app needs to work offline and define the specific paths for each file in the prebuilt service worker (sw.js)
2. Use ``npx http-server ./src/`` to open a webserver in the /src directory
3. Put the app to the acid test with chrome devtools (devtools -> application tab)
4. Turn off the network to check the service workers functionality 

This could be useful: https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
