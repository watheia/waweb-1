if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[a]) return;
    let c = {};
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: c, require: r };
    s[a] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-1846d813'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/38-720d1598f04ed253.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/928.53862608eedbb62e.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/framework-c4190dd27fdc6a34.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/main-0fd6ef5a7107c94c.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/pages/_app-2ffd7fd94fa388a5.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/pages/_error-d20da8f9a50c916f.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/pages/index-4a99b58d53b5b3b0.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/pages/nx-85ebf0a7e8fc2fff.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/chunks/webpack-9fe5d95bcdc4ed42.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/css/2dd5b519a84a7488.css',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/css/ab9115ca5acdb53c.css',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/css/ef46db3751d8e999.css',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/vvCJrsDpEPlRQ2AfTnJ4F/_buildManifest.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/vvCJrsDpEPlRQ2AfTnJ4F/_middlewareManifest.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
        {
          url: '/_next/static/vvCJrsDpEPlRQ2AfTnJ4F/_ssgManifest.js',
          revision: 'vvCJrsDpEPlRQ2AfTnJ4F',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});