importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "c5a88e7bad76aa954534b227de31c9dc"
  },
  {
    "url": "inline.93dde7ec445810e6c03e.bundle.js",
    "revision": "302509d97da7a576f8f537a303dfe867"
  },
  {
    "url": "main.c3a79f57718107f14a89.bundle.js",
    "revision": "22099840da4defda861f37415586ec40"
  },
  {
    "url": "polyfills.ab8304790a25edec7f7d.bundle.js",
    "revision": "4d6e297c5c881a487e1e111ae4b363e3"
  },
  {
    "url": "vendor.1360dfb9d6b91f9550b3.bundle.js",
    "revision": "c27899dfd62101d6c9c4b1aaaffce430"
  },
  {
    "url": "styles.35bdec7d93e0f4a697b2.bundle.css",
    "revision": "35bdec7d93e0f4a697b2dcf1c9e81372"
  },
  {
    "url": "favicon.png",
    "revision": "1c250566b3f94c90bc8068cda6d7484d"
  },
  {
    "url": "favicon.ico",
    "revision": "ccb6eaafe0244ba2a080e29f51a38ef9"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
