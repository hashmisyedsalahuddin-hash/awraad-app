const CACHE_NAME = "awraad-live-v120";
const CORE_ASSETS = [
  "./",
  "./Asma_Un_Nabi.html",
  "./Asma_ul_Husna.html",
  "./Bashair_ul_Khairaat.html",
  "./Daily.html",
  "./Dua_Bada_Dalail-ul-Khairaat.html",
  "./Dua_Iftitah.html",
  "./Dua_Yuqrau_Aqeeb_Alaviyya.html",
  "./Friday_Hizb_Locked.html",
  "./Index.html",
  "./Malfoozaat_e_Bahrul_Irfan.html",
  "./Monday_Hizb1.html",
  "./Monday_Hizb8.html",
  "./Saturday_Hizb_Locked.html",
  "./Shajara_e_Alaviyya.html",
  "./Sunday_Hizb_Locked.html",
  "./Tajweed_Explanation.html",
  "./Tajweed_Style.css",
  "./Tajweed_rules.js",
  "./Tareeqa_Faatiha.html",
  "./Thursday_Hizb_Locked.html",
  "./Tuesday_Hizb_Locked.html",
  "./Usboo_e_Shareef.html",
  "./Wednesday_Hizb_Locked.html",
  "./allah.mp3",
  "./events-config.js",
  "./index.html",
  "./manifest.json",
  "./pwa-init.js",
  "./theme-preload.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(CORE_ASSETS.map((url) =>
        fetch(url, { cache: "reload" })
          .then((res) => (res && res.status === 200 ? cache.put(url, res) : null))
          .catch(() => {})
      ))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) return;
  if (/googletagmanager|google-analytics|analytics\.google/i.test(url.hostname + url.pathname)) return;

  if (url.pathname.endsWith("/version.json") || url.pathname.endsWith("version.json")) {
    event.respondWith(fetch(event.request, { cache: "no-store" }));
    return;
  }

  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
