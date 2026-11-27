(function () {
  "use strict";

  // Ensure Daily Dynamic Theme assets load on every HTML page
  (function ensureDailyThemeAssets() {
    var head = document.head || document.documentElement;
    if (head && !document.querySelector('link[href*="daily-theme-ui.css"]')) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "daily-theme-ui.css";
      head.appendChild(link);
    }
    if (!window.__AWRAAD_DAILY_UI_INIT__ && !document.querySelector('script[src*="daily-theme-ui.js"]')) {
      var sc = document.createElement("script");
      sc.src = "daily-theme-ui.js";
      sc.defer = true;
      (document.body || head).appendChild(sc);
    }
  })();

  if (window.__AWRAAD_UNAV_INIT__) return;
  window.__AWRAAD_UNAV_INIT__ = true;

  var SPEEDS = [0.1, 0.25, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0];
  var BASE_PX_PER_SEC = 55;
  var STORAGE_SPEED = "awraad_scroll_speed";
  var STORAGE_LAST = "awraad_continue_reading";

  var savedSpeed = parseFloat(localStorage.getItem(STORAGE_SPEED));
  var speedIndex = SPEEDS.indexOf(savedSpeed);
  if (speedIndex === -1) speedIndex = SPEEDS.indexOf(1.0);

  var isPlaying = false;
  var isTouchPaused = false;
  var rafId = null;
  var lastTime = 0;
  var pixelCarry = 0;
  var activeTab = "pages";
  var pagesCache = [];

  function currentFileName() {
    var parts = window.location.pathname.split("/");
    return parts[parts.length - 1] || "index.html";
  }

  function formatSpeed(val) {
    return val + "x";
  }

  function saveContinuePosition() {
    try {
      localStorage.setItem(
        STORAGE_LAST,
        JSON.stringify({
          file: currentFileName(),
          title: document.title || currentFileName(),
          y: Math.round(window.scrollY || 0)
        })
      );
    } catch (e) {}
  }

  function buildUI() {
    var dock = document.createElement("div");
    dock.className = "unav-dock";

    var scrollToggleBtn = document.createElement("button");
    scrollToggleBtn.type = "button";
    scrollToggleBtn.className = "unav-fab unav-fab-secondary";
    scrollToggleBtn.setAttribute("aria-label", "Scroll Speed Controls");
    scrollToggleBtn.textContent = formatSpeed(SPEEDS[speedIndex]);

    var menuBtn = document.createElement("button");
    menuBtn.type = "button";
    menuBtn.className = "unav-fab";
    menuBtn.setAttribute("aria-label", "Universal Navigation");
    menuBtn.textContent = "\u2630";

    dock.appendChild(scrollToggleBtn);
    dock.appendChild(menuBtn);

    var scrollBar = document.createElement("div");
    scrollBar.className = "unav-scroll-bar";

    var playBtn = document.createElement("button");
    playBtn.type = "button";
    playBtn.className = "unav-btn unav-btn-play";
    playBtn.textContent = "Play";

    var slowerBtn = document.createElement("button");
    slowerBtn.type = "button";
    slowerBtn.className = "unav-btn";
    slowerBtn.textContent = "-";

    var speedBadge = document.createElement("span");
    speedBadge.className = "unav-speed-badge";
    speedBadge.textContent = formatSpeed(SPEEDS[speedIndex]);

    var fasterBtn = document.createElement("button");
    fasterBtn.type = "button";
    fasterBtn.className = "unav-btn";
    fasterBtn.textContent = "+";

    scrollBar.appendChild(playBtn);
    scrollBar.appendChild(slowerBtn);
    scrollBar.appendChild(speedBadge);
    scrollBar.appendChild(fasterBtn);

    var backdrop = document.createElement("div");
    backdrop.className = "unav-backdrop";

    var sheet = document.createElement("div");
    sheet.className = "unav-sheet";

    var header = document.createElement("div");
    header.className = "unav-header";

    var title = document.createElement("h3");
    title.className = "unav-title";
    title.textContent = "Universal Navigation";

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "unav-close";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.textContent = "\u2715";

    header.appendChild(title);
    header.appendChild(closeBtn);

    var tools = document.createElement("div");
    tools.className = "unav-tools";

    var searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.className = "unav-search";
    searchInput.placeholder = "Search pages ya sections...";

    var tabs = document.createElement("div");
    tabs.className = "unav-tabs";

    var tabPages = document.createElement("button");
    tabPages.type = "button";
    tabPages.className = "unav-tab is-active";
    tabPages.textContent = "Pages";

    var tabSections = document.createElement("button");
    tabSections.type = "button";
    tabSections.className = "unav-tab";
    tabSections.textContent = "Is Page Ke Sections";

    tabs.appendChild(tabPages);
    tabs.appendChild(tabSections);
    tools.appendChild(searchInput);
    tools.appendChild(tabs);

    var presets = document.createElement("div");
    presets.className = "unav-presets";

    var presetsLabel = document.createElement("span");
    presetsLabel.className = "unav-presets-label";
    presetsLabel.textContent = "Scroll Speed:";
    presets.appendChild(presetsLabel);

    var presetButtons = [];
    [3.0, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1].forEach(function (val) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "unav-preset-btn";
      btn.textContent = formatSpeed(val);
      btn.dataset.speed = String(val);
      btn.addEventListener("click", function () {
        var idx = SPEEDS.indexOf(val);
        if (idx !== -1) {
          speedIndex = idx;
          syncSpeedUI();
        }
      });
      presets.appendChild(btn);
      presetButtons.push(btn);
    });

    var list = document.createElement("ul");
    list.className = "unav-list";

    sheet.appendChild(header);
    sheet.appendChild(tools);
    sheet.appendChild(presets);
    sheet.appendChild(list);
    backdrop.appendChild(sheet);

    document.body.appendChild(dock);
    document.body.appendChild(scrollBar);
    document.body.appendChild(backdrop);

    function syncSpeedUI() {
      var val = SPEEDS[speedIndex];
      localStorage.setItem(STORAGE_SPEED, String(val));
      speedBadge.textContent = formatSpeed(val);
      scrollToggleBtn.textContent = formatSpeed(val);
      presetButtons.forEach(function (b) {
        b.classList.toggle("is-active", parseFloat(b.dataset.speed) === val);
      });
      var settingsSpeedSel = document.getElementById("dtuiScrollSpeedSelect");
      if (settingsSpeedSel) settingsSpeedSel.value = String(val);
    }

    window.addEventListener("awraad:scrollSpeedUpdated", function (ev) {
      var newVal = ev && ev.detail ? parseFloat(ev.detail.speed) : NaN;
      var idx = SPEEDS.indexOf(newVal);
      if (idx !== -1) {
        speedIndex = idx;
        syncSpeedUI();
      }
    });

    function stopAutoScroll() {
      isPlaying = false;
      playBtn.classList.remove("is-playing");
      playBtn.textContent = "Play";
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      saveContinuePosition();
    }

    function stepScroll(ts) {
      if (!isPlaying) return;
      if (!lastTime) lastTime = ts;
      var dt = (ts - lastTime) / 1000;
      lastTime = ts;

      if (!isTouchPaused && dt > 0 && dt < 0.25) {
        pixelCarry += BASE_PX_PER_SEC * SPEEDS[speedIndex] * dt;
        var wholePx = Math.floor(pixelCarry);
        if (wholePx >= 1) {
          pixelCarry -= wholePx;
          window.scrollBy(0, wholePx);
          var atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2;
          if (atBottom) {
            stopAutoScroll();
            return;
          }
        }
      }
      rafId = requestAnimationFrame(stepScroll);
    }

    function startAutoScroll() {
      if (isPlaying) return;
      isPlaying = true;
      lastTime = 0;
      pixelCarry = 0;
      playBtn.classList.add("is-playing");
      playBtn.textContent = "Pause";
      rafId = requestAnimationFrame(stepScroll);
    }

    playBtn.addEventListener("click", function () {
      if (isPlaying) stopAutoScroll();
      else startAutoScroll();
    });

    slowerBtn.addEventListener("click", function () {
      if (speedIndex > 0) {
        speedIndex--;
        syncSpeedUI();
      }
    });

    fasterBtn.addEventListener("click", function () {
      if (speedIndex < SPEEDS.length - 1) {
        speedIndex++;
        syncSpeedUI();
      }
    });

    scrollToggleBtn.addEventListener("click", function () {
      scrollBar.classList.toggle("is-open");
    });

    window.addEventListener("touchstart", function () { isTouchPaused = true; }, { passive: true });
    window.addEventListener("touchend", function () { isTouchPaused = false; }, { passive: true });

    function renderList() {
      var q = (searchInput.value || "").trim().toLowerCase();
      list.innerHTML = "";

      if (activeTab === "pages") {
        var cur = currentFileName();
        var filtered = pagesCache.filter(function (p) {
          return (
            p.title.toLowerCase().indexOf(q) !== -1 ||
            p.file.toLowerCase().indexOf(q) !== -1
          );
        });

        if (!filtered.length) {
          var empty = document.createElement("li");
          empty.className = "unav-empty";
          empty.textContent = "Koi matching page nahi mila.";
          list.appendChild(empty);
          return;
        }

        filtered.forEach(function (p) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.className = "unav-item-link";
          if (p.file === cur) a.classList.add("is-current");
          a.href = p.file;
          a.textContent = p.title;
          a.addEventListener("click", saveContinuePosition);
          li.appendChild(a);
          list.appendChild(li);
        });
      } else {
        var headings = Array.prototype.slice.call(document.querySelectorAll("h1, h2, h3"));
        var matched = headings.filter(function (h) {
          if (h.closest(".unav-sheet")) return false;
          var txt = (h.textContent || "").trim();
          return txt && txt.toLowerCase().indexOf(q) !== -1;
        });

        if (!matched.length) {
          var emptySec = document.createElement("li");
          emptySec.className = "unav-empty";
          emptySec.textContent = "Is page par koi matching heading nahi mili.";
          list.appendChild(emptySec);
          return;
        }

        matched.forEach(function (h, i) {
          if (!h.id) h.id = "unav-sec-" + i;
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.className = "unav-item-link";
          a.href = "#" + h.id;
          a.textContent = (h.textContent || "").trim();
          a.addEventListener("click", function (ev) {
            ev.preventDefault();
            backdrop.classList.remove("is-open");
            h.scrollIntoView({ behavior: "smooth", block: "start" });
          });
          li.appendChild(a);
          list.appendChild(li);
        });
      }
    }

    function openModal() {
      backdrop.classList.add("is-open");
      renderList();
    }

    menuBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", function () { backdrop.classList.remove("is-open"); });
    backdrop.addEventListener("click", function (ev) {
      if (ev.target === backdrop) backdrop.classList.remove("is-open");
    });

    tabPages.addEventListener("click", function () {
      activeTab = "pages";
      tabPages.classList.add("is-active");
      tabSections.classList.remove("is-active");
      renderList();
    });

    tabSections.addEventListener("click", function () {
      activeTab = "sections";
      tabSections.classList.add("is-active");
      tabPages.classList.remove("is-active");
      renderList();
    });

    searchInput.addEventListener("input", renderList);
    syncSpeedUI();

    fetch("nav-manifest.json")
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) {
        if (Array.isArray(data) && data.length) {
          pagesCache = data;
        } else {
          pagesCache = [{ file: currentFileName(), title: document.title || "Home" }];
        }
      })
      .catch(function () {
        pagesCache = [{ file: currentFileName(), title: document.title || "Home" }];
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildUI);
  } else {
    buildUI();
  }

  window.addEventListener("pagehide", saveContinuePosition);
})();
