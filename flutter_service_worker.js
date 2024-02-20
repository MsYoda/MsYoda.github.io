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
"main.dart.js": "597780b22956e12745be73c3cd2daa04",
"version.json": "3ee8e76d50acd6b77334cae048ccc870",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "5188f97a4c1968489cde5ce57c28f274",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.json": "eb1f194e03168f83d0045a6824dff141",
"assets/AssetManifest.bin": "1be15b860e09b7980104583a2c49b126",
"assets/AssetManifest.bin.json": "15ab1032f29d4f03607cf0d55735d47c",
"assets/NOTICES": "7d7705fdbbbaa865cf045ac0d2e9efd1",
"assets/FontManifest.json": "388a633b1457d1729d6deed51502b22f",
"assets/assets/fonts/lato/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/assets/fonts/lato/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/assets/fonts/lato/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"manifest.json": "3e09df34d0e868fbaa7e063e402ba52e",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "3b4b577ad16c768c3aa6c1d4800592cf",
"/": "3b4b577ad16c768c3aa6c1d4800592cf",
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
".git/refs/heads/main": "f237e19c36b4758e0e33bc417e88706d",
".git/refs/remotes/origin/main": "f237e19c36b4758e0e33bc417e88706d",
".git/objects/d6/69a991ac2526002d54fc9631355c277e7d9521": "fec0d84145fcc779a3f5cd6e7a447220",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/267bdee892ba293ee3394a6be05d0c92e2418d": "3d36cd0989e42411de8c71508b7a7300",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/65/466de48292324eb668f32b5d0e106e88481a7b": "d0748d7cfd0eb27ad67fd766eec623e1",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/6a8bc2a12ec4e240c69fd5d20519839fbd621c": "d0b900958e6c90e33c50ef02098c4e51",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/94a1668fbbd1c5af4359a41bf790b324430940": "926acd4f9644aecc721270a51b248a07",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/6b88c0e667d20fdbd2227db7e5cf3eb533e6d5": "f9bbb5bfe89779fa176897a89239322b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/039ed4224caacef3c00f9dea938b1c8bb96c33": "4e5a4a991117a736750a7872d7f06fe8",
".git/objects/d8/dc5d0924b6cadabcea995dbccd3f85a07c863e": "c84b29b15592497be1a2d886def85db9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/3d/8f73e38e6e205e890aa3d243ea30dcf4a2be40": "5f34adf379924ace12ca0cdabef0bebb",
".git/objects/3d/cc390cb5fe6be9a5cd8f83f4d9a3dfe3115dde": "05b02664cece2cd0bc82a9b80fb288f1",
".git/objects/bc/26e5d552764ae0873f6eb3d26614da21365ea2": "2013024d460cb4c0a930d87e021e6f95",
".git/objects/98/1258f212602e619a7051495141bdb0a7290b40": "b7d3646326c1863065bd0939fa0d1ee9",
".git/objects/98/488e09c3559c389f0c6526f60f018fd084f4b7": "4d47b3185595c4f728122f4856b9858f",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/e8/d751abd640e7183729b628268365ed02e43b6d": "ed0c3e83f9c31a9f0fb62ef0a347d0e1",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/31/96429fb02ab770cf947c20065336b7ce244052": "cfcc080da4e7eb82932c385e4f4ff72d",
".git/objects/33/c1325bbe0d69dc151c7ce64fb821409d764615": "fbdf448d60b452a6f74200eb9b8f7194",
".git/objects/13/9d8f0cacbece0e1f82c87bb4622982fa45d6bc": "5039bdf628e74d1c40ef3c00308a661b",
".git/objects/8c/9f314d3df1912c47310b9aa5fdea96d8cb8af8": "c8a3d527771d68d4ff12e7e4bef60b18",
".git/objects/f2/e536b88f6fc191bc9e1f71c3310e078d699aee": "ffccc82e0803e85939d7994c5bec5e3b",
".git/objects/73/3a5b2a0b2d46f660cac9b8349e378e04721ed8": "704d134ff260507ccadd3b4558513df5",
".git/objects/d5/d00300372688be17de76658b231a7ab650988a": "2db6c8d2357bb67b35ff43463fc990d5",
".git/objects/99/f557f0a5d0b2c2561fcebf86c557c46173afd0": "635f7bb9ac25765296f606ee22154499",
".git/objects/99/36dd41c7a8f13ff4f9f01ac0f3ce1b19ff1a12": "5235994585c5bb4b1d68b56ab4cb9f88",
".git/objects/40/0c83bff8ea3e65e2a993edc8c11b0f59c59942": "53227126608eb9e049be3481c7c48e74",
".git/objects/49/0b371bfc29a8ad62f1554f51aa54e064c1f65a": "256a138f2f768e7717527187c7131bfd",
".git/objects/4a/4763f04f279adfa34b5c3b41c8eb5c89f03667": "e453c55dfee840e3cd376f08d00c8f08",
".git/objects/29/e6bc8c54dad0258b00d7acb5f8f5a4f02857c6": "67cddbcf818a31452e013cae854a1b2e",
".git/objects/a3/5b1a5c676406ab155d8387fdad91530b1ea4f8": "dd8d0104809d15e15959a6fd2f5318d9",
".git/objects/3b/8d1bfbdce6746387e28cbbb5f8c362b2befc8e": "da5f37cdd2eb6e2470fd9d5c88d6d7b7",
".git/objects/5d/214aea2a1ad65522c03ca0727bb95a1da6ee52": "ee6e296cbf8c71c423052b8bd809f434",
".git/objects/c8/e879d769e628010da7da46167c088fe8c1d28a": "92a48e56d128df318d8a0839179f6398",
".git/objects/d1/f084b90915081dca534966a12a3ed140f0c667": "81868f92405a5702e66b0d591aec0404",
".git/objects/8e/c3b8925d3b829f32ab3a71ce5137a6de8a80f5": "d987cefc709a8748147842091cad7166",
".git/objects/38/0f08a4e308da2d0646082a5a2a204eeb7d5a06": "0d9925e5488e9ce5344072c6e881f262",
".git/objects/c7/3f20d648e8bbe542e963f03a04e4d4e93a6f7d": "763147562a460ff4a048fb6e71026847",
".git/objects/95/e269c274a424627cbd37b8cb5ec8f5e3ce5ed0": "b83c449f08443d4bb68204be66d8aa63",
".git/objects/50/3678dcb31aea61f2739854806b65f1b74fa334": "4654ec85ff2f6b15d9d8921f266313a6",
".git/objects/62/b8296ba9f34c916b2f84664a34ea13108b64c3": "2d9508dbf67435799bdc23e4a703ed1e",
".git/objects/d0/ca4c0c8d885b283011cd602917c0321d0315b8": "87bad63da8667bbca66918812871f36b",
".git/objects/ef/5ae3b43e99637fe8c09fe8eafd2302df88759e": "f175f8d452c0833c0770c75f153f0404",
".git/objects/2c/612da2ae589dc264deb683f90baf75c8e18e03": "03a0c91f7a95581dd48bc3075b6203c6",
".git/objects/ad/bfc467d2d0dd5cdf2b942e5d0cf3aab2b73c3a": "0cd0e59044408cf3154c178da5da82cc",
".git/objects/02/9f70b1037fce6e7886aa30838c4619ac2d6214": "fe8261a4ead8c458ab692511c2cf841d",
".git/objects/35/6eac57165c76bbf5d25022b0fcf0fcd6b133f8": "308a54730074fae16871038438a95379",
".git/objects/3e/5b3c385eb7244d7e36a233ea10bf3ee5fd8154": "d33dd0da188cb6f274acb34a53ddb4e7",
".git/objects/7c/32179a4ba577ea56d5409e1eb2358552624195": "464404d6777713bb9cf7d822415f0734",
".git/objects/ec/824dc4f95d1c25d890ba95ed4182cc589d0676": "8681fa16e47617efb8efafcff3b1816c",
".git/objects/4e/52c5252e8c91bf55c6dffdf1ed169dc82f01c1": "bddc36b38da1b862ef0174594c237e68",
".git/objects/e0/d2f735a98b1fcc260d06c1eb517d40d52733f0": "dfba9d20643ff5721ae62ffa8f7cdee9",
".git/objects/37/9fa1fd9976a1e60cf1f3ba4f09174cb8652eb0": "431393e7c1acbb439aaf8285b168ab49",
".git/objects/59/10d5cae3b9da3ffc1b403c648f668f21515e04": "8f8bf381e7586d15aa1dbb90b2b24923",
".git/objects/9f/3a0935d4bce9362e7c4fdaa79bf66ce2d05f6d": "cca4d17e88666175e921252234b2d1b4",
".git/COMMIT_EDITMSG": "21aaa908bbf89079f21e2c3832ab0234",
".git/logs/HEAD": "cf33cb76d8b3d043ec355c52aaf50cc3",
".git/logs/refs/heads/main": "8ad2e7df80e45e5ddca7cd1b79004324",
".git/logs/refs/remotes/origin/main": "effee3b36527001977de5f589c6cba94",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "e4755edf8010f611a828c12ac7f67508",
".git/FETCH_HEAD": "ff732dd217f2c7c4975ed2e9a99deb65",
".git/ORIG_HEAD": "ac01e84a96449c1ff1217ee114ae1ad5",
".git/index": "f764364bde3ebb0884532fd16bfae885"};
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
