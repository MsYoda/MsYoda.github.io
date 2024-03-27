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
".git/refs/heads/main": "0502369a71a67668cb1b88d107e83c5a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0502369a71a67668cb1b88d107e83c5a",
".git/objects/pack/pack-cf4b914a4573f8209dd6ace501e28f74902c8583.pack": "bc154f62e29594bd40d814ef81ac3b1e",
".git/objects/pack/pack-cf4b914a4573f8209dd6ace501e28f74902c8583.rev": "8325a1ce732ff4cfa5bfb786662a0f86",
".git/objects/pack/pack-cf4b914a4573f8209dd6ace501e28f74902c8583.idx": "b67c5acf46d303896cfdc1e0ac4f57c6",
".git/objects/b0/9de64eea64370937ebdc6ef9d7410d72c8800b": "37734d9debf55de7432724d3f7fa2a34",
".git/objects/0d/1a684cc5a3f9adbc3ae4123953c789c55adf80": "495e0003bd2eb15c0a82d8ac5d3f6dc6",
".git/objects/fb/59ce7ca2599db3ba3450d267f30d3a70222819": "ae52c7c487b9127406dc72f86e62c078",
".git/objects/5a/b20b9ef63498f492b9e3ddf36cc470b5f97a71": "153ee097302d491a38abfb0020a02ccf",
".git/objects/10/7f5e57c11bd43f0e15e0e984e801e5816e7273": "3ef33c026651a1e9abf3cef7ec00617f",
".git/objects/78/2a75168869b1c44ccceea3fcc096b27484a2ac": "2f329fdeae004769585e5cc98eb037ce",
".git/objects/a8/b6bfd8b5e0c4f4c2c034872e1b63bd22664bd3": "a683c9880c029138ba77f3f28814f1a7",
".git/objects/32/83e8a66ee792eea08795082ff214c7cf2d6570": "e1ce9ceb0d64a329ba5ca372928cf199",
".git/objects/71/02e695ec3dba6dda4b9778574e3257fa3c8a90": "41cd08b55e6d2d256664d0cc0db75ed0",
".git/objects/d1/3d0e3252304d5295111769775455e7e0afc8e4": "7b3d3e98a334b8ab9a8c78b97608659d",
".git/objects/9e/eab6b70a3be32e901e531df656fb0b8584ee6e": "7a3d4fd981d2b0dbd1defc496375f57a",
".git/objects/4a/e4366645c8c0d072a6ad6e945ab048fbc75f06": "213f3c4cc7739d73681cda9b35eb8c34",
".git/objects/28/302b9b275479ccbb387f91ca4f8f6666c7375b": "7828869e82c23ddbc2b511219ccf756b",
".git/objects/5d/89ec5bd50b7a21f52fe563b9f1332cc0854b82": "1650b6647fa90f60d51022ac8e4ab8cf",
".git/objects/fc/309c11c12512841d57310dbee701c1308fd29e": "b7cb15159c2228eba614b331886090f5",
".git/packed-refs": "63fb86eade8cfc64cd873d09f3382d44",
".git/logs/refs/remotes/origin/HEAD": "d4dea6a5d013bd1b09509813605a2697",
".git/logs/refs/remotes/origin/main": "45e7f268636504024c6dd98914788574",
".git/logs/refs/heads/main": "2a1373749aa68f70f31d50c3a45a865c",
".git/logs/HEAD": "2a1373749aa68f70f31d50c3a45a865c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "e4755edf8010f611a828c12ac7f67508",
".git/COMMIT_EDITMSG": "6f39cfc33c17a3e4521d2328ed791e90",
".git/index": "357b0b0a65d09e10a8c42a3f4fb7efbf",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"main.dart.js": "1dfd7975ff1e7e3c637d4d83d2a1af79",
"version.json": "bd1ad01631464ba15a1bfe9c8a2dcf5e",
"assets/assets/images/splash.png": "ccc250408b10bd0fd8c14a26aadc45fb",
"assets/assets/fonts/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/assets/fonts/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/assets/fonts/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "1246a37e5c32e7af52b2fbabf3a45014",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.json": "cf65df213d1f943441cf448eb74b9644",
"assets/AssetManifest.bin": "8b543c7637505cb29eea084dc215930e",
"assets/FontManifest.json": "2cf713505ad622f445f373dc84dd7e6b",
"assets/NOTICES": "536598f1b7396920e5e0acdc82b56fdf",
"assets/AssetManifest.bin.json": "fa955524b7296623ce1827505ec07608",
"manifest.json": "2972e4ff9ab99ab6eadaa51f2164c9a1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "ca848e8a68199baa279504fa12de4c87",
"/": "ca848e8a68199baa279504fa12de4c87",
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
