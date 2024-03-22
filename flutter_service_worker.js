'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "dec31476b66e546c9943a8417d749352",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dec31476b66e546c9943a8417d749352",
".git/objects/pack/pack-daab64b73c7e1c022fe6d790f9a639da9ab4835d.pack": "79ff2e66b6403b805a398c3e830ea2c0",
".git/objects/pack/pack-daab64b73c7e1c022fe6d790f9a639da9ab4835d.rev": "8113a7ca6a62f06de22c319fe0404ec3",
".git/objects/pack/pack-daab64b73c7e1c022fe6d790f9a639da9ab4835d.idx": "2c767b9208594a82cf58bb6a73aad900",
".git/objects/c8/028f5e21fc67d7854f0f1f2e68bbe15c8f8008": "6413ab39a1ed5ee5ad2336221b89493d",
".git/objects/6d/337547d379b21b5d69eadbd5cca634105fcccd": "778270e7b10169e3f45c2f0101c8fcfc",
".git/objects/d2/26bf9d8ff985be5d9356ed902d8881d6aa73e5": "2d0c15d80c7a794340f321fe1ed2bf7b",
".git/objects/a1/2f97b3c0084bad9d5fd1539fce8d254fcfa2de": "ff82d290a4c06711dfd81fcf6129b7b8",
".git/objects/36/f4bd804d973c43fd90f2a675284d174239ccb2": "a7cf1667df9eadeaded4f4bfa8dfe9ff",
".git/objects/61/e770e3ee10f041f26e183eb7245b1e3d116a99": "4bf49cfbe27d17b1663e09ce6f816f2b",
".git/objects/2d/7aac10d5c7321be5d23b4bbc6417aacba0c954": "91e269f2793a8534295e49ce75e7e40b",
".git/objects/63/77f6077fe9305fa713a6a20c4014240b21e498": "210f67bd4701179ec616431ff816b34b",
".git/objects/91/1447e4e0703278da0f0e6eb2dff33f1a5bd0a1": "9c898e53ae495d968af4d7c4aab4e6b6",
".git/objects/fd/2f0b6929cf22225d07f3c1ed52f826175fc6b7": "94c98a0ca8ff96a627f28b82525c8281",
".git/objects/49/91702e5dd1aeb05576e7121805f5da6bfc0fd0": "7288d4e417387c48616128f041fbf5e6",
".git/objects/68/90c57a8d2c0416eba94c8ca73467dd76842359": "bdd1fb4aec78868be0a9eb8c6f658d7a",
".git/objects/58/382a56296e9a632a38bb8dbc10d2a329cde62a": "4373876f32f47a4b20140a59c36b0d93",
".git/objects/58/d96619ac3faa70d9f47ba1febd547c213229c2": "cf458d3df363128845ca0a92e911aef2",
".git/objects/39/e042f9dc444733d27202ae36e15d97704506ac": "040a451a1e04e8904d110b25de7ac307",
".git/objects/fc/bf1dc1907843cf6c9f16cf9e190a9bc7dc1f3c": "0845d69a1a768accbf20b3dba99d9f3d",
".git/objects/af/b54d49d2c5ec2c6e4e8d827f4811b046155526": "15307164f2d47435c26cb236c9530226",
".git/objects/c1/79ed7dae280df3473f9693076c61bdc6f1be4e": "9988210cf69eca52f2855b3767f8bab1",
".git/objects/30/d80eb3e998e695a1fb3420b02cc6673abddd45": "040800f3b7fed019ed223875f14b4633",
".git/objects/85/d8e112430024c0f6c5c0f37f4b3764b4e76dd2": "4aa73c6d4cda35123db9918bdcf06189",
".git/objects/e8/1187e45c2f58145196548bb1dd2f3fd2f29915": "e3db4295515e822cc8057e3e3909a070",
".git/objects/e6/b2fee34b407d5a9690f915466e3cc284960554": "c3c01f061af99f4ce152b813fa006190",
".git/objects/c4/818aa9d616372f3ec6cf00c4ec243a6aa195f4": "b45edfd3a9653bd5251f584745165f3b",
".git/objects/a7/a6cec446cafc471b9098e4692f371af94d95fe": "c00280a034c33421916f67e40302776c",
".git/objects/fa/3addcf4e8b721d5bbd0d03838e16b0be34ee89": "69642d292cea9288e98b0bd819d389a4",
".git/objects/f3/1628a2a5aeee7bca35562ab86b70d4e1265001": "5fed70b9aff836f2fc95762e288fd4c3",
".git/objects/48/e580cec69c975bc14d4187efd0afc093750dc8": "28f057e9cd33874ce0b52b276ca8fa17",
".git/objects/28/acffe991f945f822bae47941d7904081c2685a": "1d476bcf785a20c5e1a2575e7ba28d93",
".git/objects/05/8d3bb1d0dd2026a353305b1660eb09c32b03d3": "c91e13543e4dcfeddf39811ae04af381",
".git/packed-refs": "ca817a81deb58b743d6135d877b4cba0",
".git/logs/refs/remotes/origin/HEAD": "f23b5cb2173cb76cce7ff7ddd78bebef",
".git/logs/refs/remotes/origin/main": "9a27f454e9585208ee4cee3bf66b1f9e",
".git/logs/refs/heads/main": "597a95b8512d90921e3a395c49f71993",
".git/logs/HEAD": "597a95b8512d90921e3a395c49f71993",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "e4755edf8010f611a828c12ac7f67508",
".git/COMMIT_EDITMSG": "c53540dbc47e9bf37e5661b5a9e12d8b",
".git/index": "f6e2f5236395ad1d49587c3301dd49ec",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"main.dart.js": "889f24ac60fe5f5fa6f180b116304f2d",
"version.json": "bd1ad01631464ba15a1bfe9c8a2dcf5e",
"assets/assets/images/splash.png": "ccc250408b10bd0fd8c14a26aadc45fb",
"assets/assets/fonts/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/assets/fonts/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/assets/fonts/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "1246a37e5c32e7af52b2fbabf3a45014",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.json": "cf65df213d1f943441cf448eb74b9644",
"assets/AssetManifest.bin.json": "fa955524b7296623ce1827505ec07608",
"assets/FontManifest.json": "2cf713505ad622f445f373dc84dd7e6b",
"assets/AssetManifest.bin": "8b543c7637505cb29eea084dc215930e",
"assets/NOTICES": "8640e31b117f114078e297b229f4ff93",
"manifest.json": "2972e4ff9ab99ab6eadaa51f2164c9a1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "73e6ce1f51448cbea2bb554372a41ab8",
"/": "73e6ce1f51448cbea2bb554372a41ab8",
"splash/img/light-1x.png": "2b802933fb91a7b29b19335f6ca6bd7a",
"splash/img/light-2x.png": "3ae4efde84a354b9b612d69114c27e8a",
"splash/img/light-3x.png": "9aa72b607fda360ab4186124c5f2f7cc",
"splash/img/light-4x.png": "b442f1aa35c3de3a998dac8c5b2f26d0",
"splash/img/dark-1x.png": "2b802933fb91a7b29b19335f6ca6bd7a",
"splash/img/dark-2x.png": "3ae4efde84a354b9b612d69114c27e8a",
"splash/img/dark-3x.png": "9aa72b607fda360ab4186124c5f2f7cc",
"splash/img/dark-4x.png": "b442f1aa35c3de3a998dac8c5b2f26d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
