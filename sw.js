const CACHE_NAME = "awraad-nooriya-v1";
const ASSETS = [
  "./",
  "./Asma_Un_Nabi.html",
  "./Asma_ul_Husna.html",
  "./Bashair_ul_Khairaat.html",
  "./Daily.html",
  "./Dua_Bada_Dalail-ul-Khairaat.html",
  "./Dua_Iftitah.html",
  "./Dua_Yuqrau_Aqeeb_Alaviyya.html",
  "./Friday_Hizb_Locked.html",
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
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon.png",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((k) => k !== CACHE_NAME ? caches.delete(k) : null)
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request))
  );
});
