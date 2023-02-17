'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "52c105549308b98a29461aa782b8ece8",
"assets/assets/fonts/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "0952866304f326356a552d9b60a8f06e",
"assets/assets/fonts/Poppins-Italic.ttf": "b7e7ed9f2fd6236ad791a8987d8f478f",
"assets/assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/assets/images/alfamart_logo.svg": "160ef9e7db352d52f6fe16f81f328a5e",
"assets/assets/images/bank_bni_logo.png": "c32ab322d44ec17cb30905143da925f0",
"assets/assets/images/bank_jatim_logo.png": "81445d4c0f893984bb2dd84f2df490d7",
"assets/assets/images/bank_mandiri_logo.png": "383b05861faded0121ab8b8e83f0f326",
"assets/assets/images/bank_mandiri_logo_big.png": "b88b9e2e822710974003c09c97873b93",
"assets/assets/images/bg.png": "063a62b02eb2188ce18fa8ea42991e0e",
"assets/assets/images/bphtb_tax_icon.png": "cec85adbc50e01b0c8b2916c08eeea24",
"assets/assets/images/bpkad-small-2.png": "51c81b4abaf0f1ee9a912a0c5b5df5a6",
"assets/assets/images/bpkad-small.png": "da8a880d4647b57a241a20df89db4d2c",
"assets/assets/images/bpkad-xl.png": "db06b934787ad2886b75f3d352219318",
"assets/assets/images/calculator.png": "50ac29fbcbe18fefb2d907f77ddfce48",
"assets/assets/images/checklist.png": "8d46153b8b013238af963c13e72416e4",
"assets/assets/images/folder.png": "2c40c2bb34574dd193e00403904fc5cc",
"assets/assets/images/gift.png": "1c074be631473edcc026a677f668fc9c",
"assets/assets/images/gopay_logo.png": "06e9ae9c686c17cacb0a649e6e651fb1",
"assets/assets/images/head_image.png": "d7296ca1a1716a42b327f69a09590371",
"assets/assets/images/house.png": "107ccd80d25559f4adeb82b823b17476",
"assets/assets/images/indomaret_logo.png": "29a073b7a1815ef0f6b9a38f480baf9c",
"assets/assets/images/kantor_pos_logo.png": "397201d02ad46e368f7b669dbe334be3",
"assets/assets/images/Lambang_Kota_Blitar.png": "253e6ce69983c948ce8af8edfffd5224",
"assets/assets/images/Lambang_Kota_Blitar_big.png": "b20ebad2435b13ae4e4baf92b7318490",
"assets/assets/images/Lambang_Kota_Blitar_big2.png": "60f9bf87b16376218d10844ad8644efe",
"assets/assets/images/logo.png": "2b61ad741bfe9d35df4a49bafdc20e11",
"assets/assets/images/no_image.png": "cb3580e6c8feeac56239c0b806600ac7",
"assets/assets/images/official-documents.png": "d7732320e4e674478e30db05e5d634d5",
"assets/assets/images/ovo_logo.png": "72989b07deea89155a77d8ce83a2b116",
"assets/assets/images/paid.png": "a77bf7c8b87d63bccf9741cc190c9a13",
"assets/assets/images/pbb_tax_icon.png": "d20c3eb6a50771890439adc87f5af1f5",
"assets/assets/images/property.png": "2b8cf7016fe4fb71b2f91382fdb1ae61",
"assets/assets/images/rocket.png": "aa0c7de1d0095461af399d7d1e57e217",
"assets/assets/images/signing.png": "f0f5f2b46ac3bf02f89d3a560db44d8c",
"assets/assets/images/tax-calculate.png": "9e21018dbaef3d48b80ef06f79c54ea1",
"assets/assets/images/tax.png": "b1b1cca70278b6c715d9abfaf2936033",
"assets/assets/images/taxes.png": "561b2a47366281248a2a8e58b488b66f",
"assets/assets/images/taxes2.png": "b7a5a32a5676641c6601f4ac373f36fa",
"assets/assets/images/taxes3.png": "0fc51a055ccc16a92f595910618e0ae9",
"assets/assets/images/tokopedia_logo.png": "9193d0adb2d27acf7b5787ba3abbb871",
"assets/assets/lotties/404_robot.json": "05aab1a381506b16058f27f9658d8da0",
"assets/assets/lotties/bouncing-box.json": "e728d8c7de78db90160ec9f56056496a",
"assets/assets/lotties/connect-globe.json": "760b3144a350a447cb13c747f7c95982",
"assets/assets/lotties/connecting.json": "1d77fec42ab1515880ea4cd98ba72bf5",
"assets/assets/lotties/mobile-rotate.json": "e224c7bf19f68635a8454b8bdd5bfd15",
"assets/assets/lotties/no-connection-2.json": "2aaee8a45f907fd609347193a5014f01",
"assets/assets/lotties/no-connection.json": "921418e78105fb2e44c83838cf1d1c68",
"assets/FontManifest.json": "7e96c48e90934507643f3e61fff7928c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4ee74d108f4ce62a0a4574980468385d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "405895ea2d6fcd4bf8eba93aefcf02a6",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "d945d2be197e60d78456a1e73b134c2b",
"icons/Icon-512.png": "002ea328a09ac7df29de6f696c623b18",
"icons/Icon-maskable-192.png": "d945d2be197e60d78456a1e73b134c2b",
"icons/Icon-maskable-512.png": "002ea328a09ac7df29de6f696c623b18",
"index.html": "94c25652665aad149a661fd69493934c",
"/": "94c25652665aad149a661fd69493934c",
"main.dart.js": "be6f3859ee7b3ff68bd4d1ae5a005271",
"manifest.json": "67671333545fa908b57c8b42c789a5b4",
"version.json": "c4bc4cdcdfdaa0a0f74663d42962c807"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
