'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "1f3b50c955bbd84673147d64e3c2c3a4",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/fonts/lato/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/assets/fonts/lato/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/assets/fonts/lato/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/AssetManifest.bin": "40cb346e41f8b66dfb3a6c62a3feb96d",
"assets/AssetManifest.bin.json": "9c5acc8a4c8529d0e6b812b16a51a233",
"assets/AssetManifest.json": "b876104bdefca22605e36963bc7a3439",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "9553b265d603919db493fb57c3a6eca1",
"assets/asset/images/apple.png": "8043fa84c8b9aaf42ed0f67c4fdf75be",
"assets/asset/images/google.png": "1d94cfe2ce6b5f05f74684ac04af8467",
"assets/asset/images/guest.png": "e1643eb72126edb03c5fb3f9ea45fdca",
"assets/asset/images/preview.png": "af2d8c63b15e9eb008c61e74f3222a5d",
"assets/asset/images/protein.png": "0d5c9bb760eba29a0c52928f671a831f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
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
".git/refs/heads/main": "bc143d78a40a72755f4157b52d0a527b",
".git/refs/heads/master": "bc143d78a40a72755f4157b52d0a527b",
".git/refs/remotes/origin/master": "97c93c89af57c0aaadbf2485c30ad82b",
".git/refs/remotes/origin/main": "bc143d78a40a72755f4157b52d0a527b",
".git/objects/pack/tmp_pack_85HXtH": "c219f7b09df0e7e1e529f8d67710d279",
".git/objects/pack/pack-5170d5985c322a3ea87060bea7c554ee34fa9e32.pack": "35ca82c34edecf5f090550b55946dfa2",
".git/objects/pack/pack-5170d5985c322a3ea87060bea7c554ee34fa9e32.rev": "85b5f5d3fed6d743eb28c5fd73c7f1f0",
".git/objects/pack/pack-5170d5985c322a3ea87060bea7c554ee34fa9e32.idx": "1e5d6b411e7d2ec3dcd9163865b63ee7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/d3/7caa6e645d230d3eb06c19741da5da278e2ac5": "67c5512937c624054e8c1e9d42a99e44",
".git/objects/d3/f84428a60c7cc945fe4e535f0eadd60a23b64f": "0fa54c8e6c7bed2bb160c5e698035ab5",
".git/objects/27/2462b86918eeb7d76daed3743785f87f1cdea0": "87944d8f05b61842ace6603b5c197a5c",
".git/objects/14/644615a628e1c7ae477c58c5961990cef93e51": "564f91c3a45eb1393d197c52917e118f",
".git/objects/14/b2386b76bc20cdcd679150f6ec7184db6d0dd0": "292583f48b6c3a6c43ef0f7206c046fd",
".git/objects/14/6b84de72d2163c145ed1c614b907239b537a3c": "6d496f267e00326bea657930f2a1e21e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/ad/62c1c0b683095c492b812d4afd9fd237bd36ae": "fe00544ff35cd58661dc2f33c8772f98",
".git/objects/17/64a11eb3826979e0f96b112a9e3cf6df5c2aac": "9d87914e01c600dd23b07a6d7ad54ef3",
".git/objects/7b/903159b0c47a6c56d9d23773fd2c7510282ebd": "e9bb5459d925f550c769634a3abe1765",
".git/objects/3f/cfd164d35cb1db03d69d02f5dc92b53d648daf": "735bca9592cd614793ca25badbfe3c39",
".git/objects/0f/7f2bb72f799838b4443515168ff525cc30ca23": "161873f6f3453049b61730f488cf67dd",
".git/objects/78/344fd9885b1951174670065b25c98ce6af5135": "d742e1050297bd9af0501728b7702346",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/5ebede94216d40e1529c43fa63d6fe5a18906f": "601dd93f5eb311d48ebed1af004d835c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/a738ab97e1fd0cccfcd9154ba461217d3bfca7": "dae7a4a5686c480330cdaebbd167a85a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/c0/a71ef034d6738a7bbaffdea40cfaf4783e5e0c": "8e640f6e27ce0e46fadfaef1a1bbb48d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/26bdf41fa710a0f94d07cbb0765ecc0407710a": "3414ed05b3d6b7d183f956b41f0ca479",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/02/63908ba23e0c171681d01fd6ae4833dbab7624": "c32845aece4f4adf93c33ed33be89c8d",
".git/objects/9c/eec460cbf15831c1734b206ca60f8ef0d52b43": "f047fd98a2907578f087f92fef221882",
".git/objects/bc/26e5d552764ae0873f6eb3d26614da21365ea2": "2013024d460cb4c0a930d87e021e6f95",
".git/objects/c9/9df8083ff8845b9b981f73369bbf85972ae906": "ef2c14b91fff2221dcd8c416ad704a79",
".git/objects/5b/d3e36dc0f60af7c5d3c8c90cc23896f0bf4b1b": "b83368104f37c0df0b67ef42fcce2c08",
".git/objects/af/9b67e1266dbb31c182aa332ff0f820cf2f25f5": "5b275ae2a8c29d4badca1fc7b72b9793",
".git/objects/bd/6bfe7316b671e9a0643e365032102f3fb211ea": "9cd6d4f25e7827b24e855a1bab2d1205",
".git/objects/42/00cd091005e03e36beb5a39113ab2e363e2c0f": "b667642d9e5ddebed971bfa4d1430aae",
".git/objects/fa/e8f405be939b93b7e8d0b24e3c8391fac9976f": "ec510c9fbdfa99730b717fe7d9225ece",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/fcc93ce190fc37a06c76f1c31f9519a5e584db": "14f03edc5a37de99bc523a0bff7d5295",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/50/1ed4f1df4a9ac801d95c9bde4e45dc6e07ce3b": "01a685ae7cd18ecfd374e6bf85db863f",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a3f95b948df4946a17924377dfe77c1ec611d0": "1b501544167a7efce5ab298fe4db1771",
".git/objects/e5/ba4101cd18b0edddc693b34636c16de06d0d94": "b8c0ae7d426e01232fa54f693bd53894",
".git/objects/c5/0ad9d2a1f352140ec14752aaec0d3b1412540d": "04bc4e89022f18190ba133ceb046226e",
".git/objects/fd/cc3a1aa7ef23ecb336fe597b2bd1e3eccdf1bf": "752cf77ffbabc759d8e955e0785299fb",
".git/objects/41/756acd3672ef4e2f77fc3e47d39397cb43b637": "d9cc1bf42d482117ff4f4f810f085633",
".git/objects/74/e752d907560d9e4b1534e6b1507521a5aec938": "627abfb1f86bcd95b6e64614cab25b79",
".git/objects/d4/691a5aa07622db558299ebd46865a1b4d71300": "1964865485f216128bb77e5af274fa3f",
".git/objects/5e/59de21d7262e8d7d5ee1eaa78fbc0db2745a27": "f7f7bc11185aff11d50ec00fcd4e8b98",
".git/objects/dd/b2015f1ed2d27bc0f20315b972be0c26b8a5ce": "70b1f42e89885ad533e8683672969a52",
".git/objects/f3/06f43497f33d6bef66c6f8c2d96bb21134b732": "f42563ee11cb9f97bd23d4f8c7225780",
".git/objects/01/c83627167a76dafb0430cdcf2b373c31a2acaf": "0e998da2e7a95bb29dc3a9f1b6406138",
".git/objects/59/1fc32575623a2253b4627ea496134867424719": "f60f4eee137cf43eb3d28a5d1c5be07e",
".git/objects/b3/2b13cd6102f3185c03f6b0f47f8fd6bf667aaa": "99bc413cf5f09d4e71bfc93b6a79daf5",
".git/COMMIT_EDITMSG": "cf5bd3c29c39b37d291ed128f7942ae9",
".git/logs/HEAD": "89a9b0fed5455ca178cf089eb432be5f",
".git/logs/refs/heads/master": "e134fd3b186b4dc9ae7003f9f6cf229f",
".git/logs/refs/heads/main": "c39a69a924db8ff0ca3759407eafe938",
".git/logs/refs/remotes/origin/master": "33a9515748fe9a300255b7cea8ec3fc6",
".git/logs/refs/remotes/origin/main": "26da901c1e4f9f0af4fedc47a7fa1579",
".git/FETCH_HEAD": "eadecb260dc3f5e6d03e13168d8899c2",
".git/config": "da316e10a069a1597459ddf167e4f22d",
".git/ORIG_HEAD": "97c93c89af57c0aaadbf2485c30ad82b",
".git/REBASE_HEAD": "97c93c89af57c0aaadbf2485c30ad82b",
".git/index": "8c1298f5310eda2312813d4f6b171374",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"index.html": "a954e455e526d6c39472ecd9b9de562b",
"/": "a954e455e526d6c39472ecd9b9de562b",
"main.dart.js": "51f22423846fbcf7d6b90319019741e1",
"manifest.json": "dae412191356a938d12aec62db4d6567",
"version.json": "b07421f69d245996e47fbe6d359625d1",
"splash/img/light-1x.png": "4c5ca4c386d685ff8721f2450a56e26e",
"splash/img/light-2x.png": "9e17cef1fc5e17643703f615f14ac65e",
"splash/img/light-3x.png": "b60f224793d4b961427ebce1a3a1c237",
"splash/img/light-4x.png": "c217c4219e369c5d851280e5dad8a7cf",
"splash/img/dark-1x.png": "4c5ca4c386d685ff8721f2450a56e26e",
"splash/img/dark-2x.png": "9e17cef1fc5e17643703f615f14ac65e",
"splash/img/dark-3x.png": "b60f224793d4b961427ebce1a3a1c237",
"splash/img/dark-4x.png": "c217c4219e369c5d851280e5dad8a7cf"};
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
