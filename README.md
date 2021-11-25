# Simple Service Worker with workbox
This is the simplest way to create a service worker to make your web app work offline. You just need three lines of console commands:
1. Install workbox cli globally with ``npm i -g workbox-cli``
2. Use the workout wizard in this directory with ``workbox wizard``
    - Answer the questions wisely
3. Create the service worker with the newly created workbox configuration ``workbox generateSW <path to workbox-config.js>``

Further informations in the official workbox getting started documentation: https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli