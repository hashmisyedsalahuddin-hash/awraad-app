/* =========================================================================
   AWRAAD E ALAVIYA NOORIYA — DAILY DYNAMIC BACKGROUND & CATEGORIZED SETTINGS
   File: daily-theme-ui.js (Non-destructive integration with Tajweed_rules.js)
   ========================================================================= */
(function () {
  "use strict";

  if (window.__AWRAAD_DAILY_UI_INIT__) return;
  window.__AWRAAD_DAILY_UI_INIT__ = true;

  var KEY_DYNAMIC_ENABLED = "app_daily_dynamic_bg";
  var KEY_DAILY_STATE = "app_daily_palette_state_v1";
  var KEY_MANUAL_PALETTE = "app_manual_palette_idx";
  var KEY_SHOW_CONTINUE = "app_show_continue_reading";
  var KEY_SHOW_MAIN_BM = "app_show_main_bookmarks";
  var KEY_SHOW_SCROLL_BTN = "app_show_scroll_btn";
  var KEY_SCROLL_SPEED = "awraad_scroll_speed";
  var KEY_TASBEEH_AOT = "app_tasbeeh_aot";
  var KEY_TASBEEH_MODE = "app_tasbeeh_default_mode";
  var KEY_TASBEEH_SIZE = "app_tasbeeh_size_preset";

  var FALLBACK_PALETTES = [
    {
      name: "Emerald Ivory",
      swatch: "linear-gradient(135deg, #f6f0e1 50%, #0d3a2e 50%)",
      light: { bg: "linear-gradient(160deg, #faf6ec 0%, #efe6d2 100%)", solid: "#f6f0e1", frame: "rgba(255, 253, 248, 0.88)", card: "rgba(255, 253, 248, 0.94)", text: "#0d2f25", heading: "#0c3b2e", sub: "#4d6159", border: "#c59b27", ruled: "rgba(130, 152, 146, 0.45)", btnBg: "linear-gradient(135deg, #0c3b2e 0%, #164f3f 100%)", btnText: "#f6e099" },
      dark:  { bg: "linear-gradient(155deg, #051914 0%, #0d3a2e 46%, #071923 100%)", solid: "#092720", frame: "linear-gradient(165deg, rgba(13, 47, 38, 0.88) 0%, rgba(7, 25, 22, 0.94) 100%)", card: "rgba(15, 52, 43, 0.78)", text: "#f2f7f5", heading: "#f6e099", sub: "#bdd2ca", border: "#d4af37", ruled: "rgba(212, 175, 55, 0.28)", btnBg: "linear-gradient(135deg, #135a46 0%, #0d3c30 100%)", btnText: "#fff8e1" }
    }
  ];

  function getPalettes() {
    return Array.isArray(window.AWRAAD_DAILY_PALETTES) && window.AWRAAD_DAILY_PALETTES.length
      ? window.AWRAAD_DAILY_PALETTES
      : FALLBACK_PALETTES;
  }

  function isDynamicBgEnabled() {
    return localStorage.getItem(KEY_DYNAMIC_ENABLED) !== "false"; // Default ON
  }

  function getLocalDateKey(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function getTimeOfDayMode(d) {
    var hr = d.getHours();
    return hr >= 6 && hr < 18 ? "light" : "dark";
  }

  function getDailyPaletteIndex(now) {
    var palettes = getPalettes();
    var todayKey = getLocalDateKey(now);
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY_DAILY_STATE) || "null"); } catch (e) {}

    if (saved && saved.dateKey === todayKey && typeof saved.index === "number" && saved.index >= 0 && saved.index < palettes.length) {
      return saved.index;
    }

    var prev = saved && typeof saved.index === "number" ? saved.index : -1;
    var candidates = [];
    for (var i = 0; i < palettes.length; i++) {
      if (i !== prev) candidates.push(i);
    }
    var chosen = candidates.length ? candidates[Math.floor(Math.random() * candidates.length)] : 0;

    try {
      localStorage.setItem(KEY_DAILY_STATE, JSON.stringify({ dateKey: todayKey, index: chosen }));
    } catch (e) {}

    return chosen;
  }

  function showMiniToast(msg) {
    var toast = document.getElementById("awraadExitToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "awraadExitToast";
      toast.className = "exit-toast print-none";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
    clearTimeout(window.__dtuiToastTimer);
    window.__dtuiToastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  function applyPaletteVars(pal, mode) {
    var root = document.documentElement;
    var body = document.body;
    var tk = pal[mode];

    root.classList.add("daily-dynamic-active");
    root.classList.toggle("daily-dynamic-dark", mode === "dark");
    root.classList.toggle("daily-dynamic-light", mode === "light");
    root.classList.toggle("dark-mode", mode === "dark");
    root.classList.remove("custom-bg-active", "custom-bg-dark", "custom-text-active");

    if (body) {
      body.classList.add("daily-dynamic-active");
      body.classList.toggle("daily-dynamic-dark", mode === "dark");
      body.classList.toggle("daily-dynamic-light", mode === "light");
      body.classList.toggle("dark-mode", mode === "dark");
      body.classList.remove("custom-bg-active", "custom-bg-dark", "custom-text-active");
    }

    root.style.setProperty("--dt-bg-gradient", tk.bg);
    root.style.setProperty("--dt-bg-solid", tk.solid);
    root.style.setProperty("--dt-frame-bg", tk.frame);
    root.style.setProperty("--dt-card-bg", tk.card);
    root.style.setProperty("--dt-text", tk.text);
    root.style.setProperty("--dt-heading", tk.heading);
    root.style.setProperty("--dt-subtext", tk.sub);
    root.style.setProperty("--dt-border", tk.border);
    root.style.setProperty("--dt-ruled-border", tk.ruled);
    root.style.setProperty("--dt-btn-bg", tk.btnBg);
    root.style.setProperty("--dt-btn-text", tk.btnText);
    root.style.backgroundColor = tk.solid;

    var lock = document.getElementById("awraad-preload-lock");
    if (lock) {
      lock.textContent =
        "@media screen{html.daily-dynamic-active,html.daily-dynamic-active body{background:" +
        tk.bg + " !important;background-color:" + tk.solid +
        " !important;background-attachment:fixed !important;color:" + tk.text + " !important;}}";
    }

    if (typeof window.awraadSetDarkModeIcon === "function") {
      window.awraadSetDarkModeIcon(mode === "dark");
    }
  }

  var isApplyingTheme = false;

  function applyDailyDynamicTheme() {
    if (isApplyingTheme) return;
    isApplyingTheme = true;

    try {
      var root = document.documentElement;
      var body = document.body;
      var palettes = getPalettes();
      var enabled = isDynamicBgEnabled();

      if (enabled) {
        var now = new Date();
        var mode = getTimeOfDayMode(now);
        var idx = getDailyPaletteIndex(now);
        var pal = palettes[idx];

        applyPaletteVars(pal, mode);
        updateThemeStatusUI(pal.name, mode, true, idx);
      } else {
        var savedBg = localStorage.getItem("app_custom_bg");
        var manualDark = localStorage.getItem("theme") === "dark";
        var manualMode = manualDark ? "dark" : "light";
        var manualIdxRaw = localStorage.getItem(KEY_MANUAL_PALETTE);
        var manualIdx = manualIdxRaw !== null ? parseInt(manualIdxRaw, 10) : -1;

        if (!savedBg && !isNaN(manualIdx) && manualIdx >= 0 && manualIdx < palettes.length) {
          applyPaletteVars(palettes[manualIdx], manualMode);
          updateThemeStatusUI(palettes[manualIdx].name, manualMode, false, manualIdx);
        } else {
          root.classList.remove("daily-dynamic-active", "daily-dynamic-dark", "daily-dynamic-light");
          if (body) {
            body.classList.remove("daily-dynamic-active", "daily-dynamic-dark", "daily-dynamic-light");
          }

          root.classList.toggle("dark-mode", manualDark);
          if (body) body.classList.toggle("dark-mode", manualDark);

          var lockOff = document.getElementById("awraad-preload-lock");
          if (lockOff && !savedBg && !manualDark) {
            lockOff.remove();
          }
          if (!savedBg) {
            root.style.backgroundColor = manualDark ? "#121212" : "#faf5e8";
          }

          if (typeof window.awraadSetDarkModeIcon === "function") {
            window.awraadSetDarkModeIcon(manualDark);
          }

          updateThemeStatusUI(savedBg ? "Custom Color" : (manualDark ? "Default Dark" : "Default Light"), manualMode, false, -1);
        }
      }
    } finally {
      isApplyingTheme = false;
    }
  }

  function updateThemeStatusUI(labelName, mode, isAuto, activeIdx) {
    var statusLabel = document.getElementById("dtuiThemeStatusText");
    var statusPill = document.getElementById("dtuiThemeStatusPill");
    var manualBox = document.getElementById("dtuiManualBox");
    var dynamicChk = document.getElementById("dtuiDynamicBgChk");

    if (dynamicChk) dynamicChk.checked = isAuto;
    if (manualBox) manualBox.classList.toggle("is-muted", isAuto);

    if (statusLabel) {
      statusLabel.textContent = isAuto
        ? "Today's Palette: " + labelName
        : "Manual Theme: " + labelName;
    }
    if (statusPill) {
      statusPill.textContent = isAuto
        ? (mode === "light" ? "DAY • 6AM–6PM" : "NIGHT • GLOSSY")
        : (mode === "light" ? "MANUAL LIGHT" : "MANUAL DARK");
    }

    document.querySelectorAll("[data-dtui-manual-mode]").forEach(function (btn) {
      var m = btn.getAttribute("data-dtui-manual-mode");
      btn.classList.toggle("is-active", !isAuto && m === mode);
    });

    document.querySelectorAll("[data-dtui-swatch-idx]").forEach(function (sw) {
      var idx = parseInt(sw.getAttribute("data-dtui-swatch-idx"), 10);
      sw.classList.toggle("is-active", !isAuto && idx === activeIdx);
    });
  }

  function applyReadingAndOverlayPrefs() {
    var body = document.body;
    if (!body) return;

    var showContinue = localStorage.getItem(KEY_SHOW_CONTINUE) !== "false";
    var showMainBm = localStorage.getItem(KEY_SHOW_MAIN_BM) !== "false";
    var showScrollBtn = localStorage.getItem(KEY_SHOW_SCROLL_BTN) !== "false";
    var aotEnabled = localStorage.getItem(KEY_TASBEEH_AOT) === "true";

    body.classList.toggle("dtui-hide-continue", !showContinue);
    body.classList.toggle("dtui-hide-main-bm", !showMainBm);
    body.classList.toggle("dtui-hide-scroll-btn", !showScrollBtn);
    body.classList.toggle("awraad-aot-enabled", aotEnabled);

    var tModal = document.getElementById("tasbeehModal");
    if (tModal) tModal.classList.toggle("tasbeeh-aot-active", aotEnabled);
  }

  function applyTasbeehPreset(preset) {
    var scaleMap = { sm: 0.72, md: 0.94, lg: 1.08 };
    var scale = scaleMap[preset] || 0.94;
    localStorage.setItem(KEY_TASBEEH_SIZE, preset);
    localStorage.setItem("tasbeeh_scale", scale.toFixed(3));

    var box = document.getElementById("tasbeehContentBox");
    if (box) {
      box.style.transform = "scale(" + scale.toFixed(3) + ")";
    }
  }

  function applyTasbeehDefaultMode(mode) {
    localStorage.setItem(KEY_TASBEEH_MODE, mode);
    var sel = document.getElementById("tasbeehMode");
    if (sel && sel.value !== mode) {
      sel.value = mode;
      sel.dispatchEvent(new Event("change"));
    }
  }

  function createCatCard(title, svgPath) {
    var card = document.createElement("section");
    card.className = "dtui-cat-card";
    card.innerHTML =
      '<div class="dtui-cat-header">' +
        '<span class="dtui-cat-icon" aria-hidden="true"><svg viewBox="0 0 24 24">' + svgPath + "</svg></span>" +
        '<span class="dtui-cat-title">' + title + "</span>" +
      "</div>";
    return card;
  }

  function createSwitchRow(id, label, desc, checked, onChange) {
    var row = document.createElement("div");
    row.className = "dtui-row";
    row.innerHTML =
      '<div class="dtui-row-info">' +
        '<span class="dtui-row-label">' + label + "</span>" +
        '<span class="dtui-row-desc">' + desc + "</span>" +
      "</div>" +
      '<label class="dtui-switch">' +
        '<input type="checkbox" id="' + id + '"' + (checked ? " checked" : "") + ">" +
        '<span class="dtui-switch-slider"></span>' +
      "</label>";
    row.querySelector("input").addEventListener("change", function () {
      onChange(this.checked);
    });
    return row;
  }

  function categorizeSettingsModal(modal) {
    if (!modal || modal.dataset.dtuiCategorized === "1") return;
    var bodyEl = modal.querySelector(".settings-body");
    if (!bodyEl) return;
    modal.dataset.dtuiCategorized = "1";

    var toggleStack = bodyEl.querySelector(".settings-toggle-stack");
    var colorsRow = bodyEl.querySelector(".settings-colors-row");
    var resetColorsBtn = bodyEl.querySelector("#resetDefaultColorsBtn");
    var previewBox = bodyEl.querySelector("#settingsPreviewBox");
    var arabicSizeSlider = bodyEl.querySelector("#arabicFontSizeSlider");
    var urduSizeSlider = bodyEl.querySelector("#urduFontSizeSlider");
    var lineHeightSlider = bodyEl.querySelector("#lineHeightSlider");
    var brightnessRow = bodyEl.querySelector(".settings-brightness-row");
    var fontRows = Array.prototype.slice.call(bodyEl.querySelectorAll(".settings-font-row"));
    var hijriRow = bodyEl.querySelector("#openHijriCorrectionRow");
    var hijriMaghribChk = bodyEl.querySelector("#hijriMaghribCheckbox");
    var hijriMaghribRow = hijriMaghribChk ? hijriMaghribChk.closest(".settings-awake-row") : null;
    var resetAllWrap = bodyEl.querySelector(".settings-reset-all-wrap");

    var previewTitle = previewBox && previewBox.previousElementSibling && previewBox.previousElementSibling.classList.contains("settings-section-title") ? previewBox.previousElementSibling : null;
    var arabicSizeTitle = arabicSizeSlider && arabicSizeSlider.previousElementSibling && arabicSizeSlider.previousElementSibling.classList.contains("settings-section-title") ? arabicSizeSlider.previousElementSibling : null;
    var urduSizeTitle = urduSizeSlider && urduSizeSlider.previousElementSibling && urduSizeSlider.previousElementSibling.classList.contains("settings-section-title") ? urduSizeSlider.previousElementSibling : null;
    var lineHeightTitle = lineHeightSlider && lineHeightSlider.previousElementSibling && lineHeightSlider.previousElementSibling.classList.contains("settings-section-title") ? lineHeightSlider.previousElementSibling : null;
    var brightnessTitle = brightnessRow && brightnessRow.previousElementSibling && brightnessRow.previousElementSibling.classList.contains("settings-section-title") ? brightnessRow.previousElementSibling : null;

    bodyEl.querySelectorAll(".settings-divider").forEach(function (hr) { hr.remove(); });

    // CATEGORY 1: APPEARANCE & DISPLAY
    var catAppearance = createCatCard(
      "Appearance & Display",
      '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>'
    );

    var dynRow = createSwitchRow(
      "dtuiDynamicBgChk",
      "Daily Dynamic Background",
      "Auto Light (6 AM–6 PM) & Glossy Dark (6 PM–6 AM), new palette daily",
      isDynamicBgEnabled(),
      function (isOn) {
        if (!isOn) {
          var now = new Date();
          var currentlyDark = document.documentElement.classList.contains("dark-mode");
          localStorage.setItem("theme", currentlyDark ? "dark" : "light");
          if (!localStorage.getItem("app_custom_bg")) {
            localStorage.setItem(KEY_MANUAL_PALETTE, String(getDailyPaletteIndex(now)));
          }
          localStorage.setItem(KEY_DYNAMIC_ENABLED, "false");
          showMiniToast("Daily Dynamic Background OFF — Current theme preserved");
        } else {
          localStorage.setItem(KEY_DYNAMIC_ENABLED, "true");
          showMiniToast("Daily Dynamic Background ON");
        }
        applyDailyDynamicTheme();
      }
    );
    catAppearance.appendChild(dynRow);

    var statusBanner = document.createElement("div");
    statusBanner.className = "dtui-status-banner";
    statusBanner.innerHTML =
      '<span id="dtuiThemeStatusText">Daily Dynamic Background</span>' +
      '<span id="dtuiThemeStatusPill" class="dtui-status-pill">AUTO</span>';
    catAppearance.appendChild(statusBanner);

    var manualBox = document.createElement("div");
    manualBox.id = "dtuiManualBox";
    manualBox.className = "dtui-manual-box";

    var manualModeRow = document.createElement("div");
    manualModeRow.className = "dtui-row";
    manualModeRow.innerHTML =
      '<div class="dtui-row-info">' +
        '<span class="dtui-row-label">Light &amp; Dark Preference</span>' +
        '<span class="dtui-row-desc">Manual override (pauses automatic daily switching)</span>' +
      "</div>" +
      '<div class="dtui-segmented">' +
        '<button type="button" class="dtui-seg-btn" data-dtui-manual-mode="light">Light</button>' +
        '<button type="button" class="dtui-seg-btn" data-dtui-manual-mode="dark">Dark</button>' +
      "</div>";

    manualModeRow.querySelectorAll("[data-dtui-manual-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var chosenMode = this.getAttribute("data-dtui-manual-mode");
        localStorage.setItem(KEY_DYNAMIC_ENABLED, "false");
        localStorage.setItem("theme", chosenMode);
        localStorage.removeItem("app_custom_bg");
        localStorage.removeItem("app_custom_text");
        if (localStorage.getItem(KEY_MANUAL_PALETTE) === null) {
          localStorage.setItem(KEY_MANUAL_PALETTE, String(getDailyPaletteIndex(new Date())));
        }
        applyDailyDynamicTheme();
        showMiniToast(chosenMode === "dark" ? "Manual Glossy Dark Mode" : "Manual Light Mode");
      });
    });
    manualBox.appendChild(manualModeRow);

    // Manual Palette Swatches (8 coordinated palettes)
    var swatchRow = document.createElement("div");
    swatchRow.className = "dtui-row dtui-row-stack";
    swatchRow.innerHTML =
      '<div class="dtui-row-info">' +
        '<span class="dtui-row-label">Manual Theme Palette</span>' +
        '<span class="dtui-row-desc">Pick a fixed Emerald-coordinated theme</span>' +
      "</div>" +
      '<div class="dtui-swatch-grid" id="dtuiSwatchGrid"></div>';

    var swatchGrid = swatchRow.querySelector("#dtuiSwatchGrid");
    getPalettes().forEach(function (pal, idx) {
      var swBtn = document.createElement("button");
      swBtn.type = "button";
      swBtn.className = "dtui-swatch-btn";
      swBtn.setAttribute("data-dtui-swatch-idx", String(idx));
      swBtn.style.background = pal.swatch || pal.light.bg;
      swBtn.title = pal.name;
      swBtn.setAttribute("aria-label", pal.name);
      swBtn.addEventListener("click", function () {
        localStorage.setItem(KEY_DYNAMIC_ENABLED, "false");
        localStorage.removeItem("app_custom_bg");
        localStorage.removeItem("app_custom_text");
        localStorage.setItem(KEY_MANUAL_PALETTE, String(idx));
        applyDailyDynamicTheme();
        showMiniToast("Theme: " + pal.name);
      });
      swatchGrid.appendChild(swBtn);
    });
    manualBox.appendChild(swatchRow);

    if (colorsRow) manualBox.appendChild(colorsRow);
    if (resetColorsBtn) {
      resetColorsBtn.addEventListener("click", function () {
        localStorage.removeItem(KEY_MANUAL_PALETTE);
        setTimeout(applyDailyDynamicTheme, 30);
      });
      manualBox.appendChild(resetColorsBtn);
    }
    catAppearance.appendChild(manualBox);

    var paletteOk = document.getElementById("paletteOkBtn");
    if (paletteOk && !paletteOk.dataset.dtuiBound) {
      paletteOk.dataset.dtuiBound = "1";
      paletteOk.addEventListener("click", function () {
        localStorage.setItem(KEY_DYNAMIC_ENABLED, "false");
        localStorage.removeItem(KEY_MANUAL_PALETTE);
        setTimeout(applyDailyDynamicTheme, 30);
      });
    }

    if (previewTitle) catAppearance.appendChild(previewTitle);
    if (previewBox) catAppearance.appendChild(previewBox);
    if (toggleStack) catAppearance.appendChild(toggleStack);
    if (arabicSizeTitle) catAppearance.appendChild(arabicSizeTitle);
    if (arabicSizeSlider) catAppearance.appendChild(arabicSizeSlider);
    if (urduSizeTitle) catAppearance.appendChild(urduSizeTitle);
    if (urduSizeSlider) catAppearance.appendChild(urduSizeSlider);
    if (lineHeightTitle) catAppearance.appendChild(lineHeightTitle);
    if (lineHeightSlider) catAppearance.appendChild(lineHeightSlider);
    if (brightnessTitle) catAppearance.appendChild(brightnessTitle);
    if (brightnessRow) catAppearance.appendChild(brightnessRow);
    fontRows.forEach(function (fr) { catAppearance.appendChild(fr); });

    // CATEGORY 2: READING & NAVIGATION
    var catReading = createCatCard(
      "Reading & Navigation",
      '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
    );

    catReading.appendChild(
      createSwitchRow(
        "dtuiContinueChk",
        "Continue Reading Banner",
        "Show auto-resume card on Main Menu",
        localStorage.getItem(KEY_SHOW_CONTINUE) !== "false",
        function (on) {
          localStorage.setItem(KEY_SHOW_CONTINUE, on ? "true" : "false");
          applyReadingAndOverlayPrefs();
        }
      )
    );

    catReading.appendChild(
      createSwitchRow(
        "dtuiMainBmChk",
        "Bookmarks & Favorites on Home",
        "Display saved bookmarks panel on Main Menu",
        localStorage.getItem(KEY_SHOW_MAIN_BM) !== "false",
        function (on) {
          localStorage.setItem(KEY_SHOW_MAIN_BM, on ? "true" : "false");
          applyReadingAndOverlayPrefs();
        }
      )
    );

    catReading.appendChild(
      createSwitchRow(
        "dtuiScrollBtnChk",
        "Floating Scroll Button",
        "Show quick Auto-Scroll & Navigation dock",
        localStorage.getItem(KEY_SHOW_SCROLL_BTN) !== "false",
        function (on) {
          localStorage.setItem(KEY_SHOW_SCROLL_BTN, on ? "true" : "false");
          applyReadingAndOverlayPrefs();
        }
      )
    );

    var curSpeed = parseFloat(localStorage.getItem(KEY_SCROLL_SPEED) || "1.0");
    var speedRow = document.createElement("div");
    speedRow.className = "dtui-row";
    speedRow.innerHTML =
      '<div class="dtui-row-info">' +
        '<span class="dtui-row-label">Scroll Speed</span>' +
        '<span class="dtui-row-desc">Auto-scroll pace across all Awraad pages</span>' +
      "</div>" +
      '<select id="dtuiScrollSpeedSelect" class="dtui-select">' +
        '<option value="0.1">0.1x (Slowest)</option>' +
        '<option value="0.25">0.25x (Very Slow)</option>' +
        '<option value="0.5">0.5x (Slow)</option>' +
        '<option value="0.75">0.75x (Gentle)</option>' +
        '<option value="1">1.0x (Normal)</option>' +
        '<option value="1.5">1.5x (Steady)</option>' +
        '<option value="2">2.0x (Fast)</option>' +
        '<option value="2.5">2.5x (Faster)</option>' +
        '<option value="3">3.0x (Max)</option>' +
      "</select>";
    var speedSel = speedRow.querySelector("select");
    speedSel.value = String(curSpeed);
    if (!speedSel.value) speedSel.value = "1";
    speedSel.addEventListener("change", function () {
      var val = parseFloat(this.value);
      localStorage.setItem(KEY_SCROLL_SPEED, String(val));
      window.dispatchEvent(new CustomEvent("awraad:scrollSpeedUpdated", { detail: { speed: val } }));
    });
    catReading.appendChild(speedRow);

    var bmQuickWrap = document.createElement("div");
    bmQuickWrap.className = "dtui-action-grid";
    bmQuickWrap.innerHTML =
      '<button type="button" class="dtui-btn dtui-btn-soft" id="dtuiOpenBookmarksQuick">Manage Bookmarks</button>' +
      '<button type="button" class="dtui-btn dtui-btn-soft" id="dtuiOpenSearchQuick">Quick Search</button>';
    bmQuickWrap.querySelector("#dtuiOpenBookmarksQuick").addEventListener("click", function () {
      modal.classList.remove("show");
      var btn = document.getElementById("openBookmarksBtn");
      if (btn) btn.click();
    });
    bmQuickWrap.querySelector("#dtuiOpenSearchQuick").addEventListener("click", function () {
      modal.classList.remove("show");
      var btn = document.getElementById("navSearchBtn") || document.getElementById("openQuickSearchDrawerBtn");
      if (btn) btn.click();
    });
    catReading.appendChild(bmQuickWrap);

    // CATEGORY 3: TASBEEH & OVERLAY
    var catTasbeeh = createCatCard(
      "Tasbeeh & Overlay",
      '<circle cx="12" cy="5" r="2"/><circle cx="18" cy="8.5" r="2"/><circle cx="18" cy="15.5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="6" cy="15.5" r="2"/><circle cx="6" cy="8.5" r="2"/>'
    );

    var savedTSize = localStorage.getItem(KEY_TASBEEH_SIZE) || "md";
    var tSizeRow = document.createElement("div");
    tSizeRow.className = "dtui-row";
    tSizeRow.innerHTML =
      '<div class="dtui-row-info">' +
        '<span class="dtui-row-label">Tasbeeh Size</span>' +
        '<span class="dtui-row-desc">Floating counter scale preset</span>' +
      "</div>" +
      '<div class="dtui-segmented">' +
        '<button type="button" class="dtui-seg-btn' + (savedTSize === "sm" ? " is-active" : "") + '" data-tsize="sm">Small</button>' +
        '<button type="button" class="dtui-seg-btn' + (savedTSize === "md" ? " is-active" : "") + '" data-tsize="md">Med</button>' +
        '<button type="button" class="dtui-seg-btn' + (savedTSize === "lg" ? " is-active" : "") + '" data-tsize="lg">Large</button>' +
      "</div>";
    tSizeRow.querySelectorAll("[data-tsize]").forEach(function (b) {
      b.addEventListener("click", function () {
        var sz = this.getAttribute("data-tsize");
        tSizeRow.querySelectorAll("[data-tsize]").forEach(function (x) { x.classList.remove("is-active"); });
        this.classList.add("is-active");
        applyTasbeehPreset(sz);
      });
    });
    catTasbeeh.appendChild(tSizeRow);

    catTasbeeh.appendChild(
      createSwitchRow(
        "dtuiAotChk",
        "Always-on-Top Overlay",
        "Keep Tasbeeh floating above Awraad while scrolling",
        localStorage.getItem(KEY_TASBEEH_AOT) === "true",
        function (on) {
          localStorage.setItem(KEY_TASBEEH_AOT, on ? "true" : "false");
          applyReadingAndOverlayPrefs();
        }
      )
    );

    var savedTMode = localStorage.getItem(KEY_TASBEEH_MODE) || "manual";
    var tModeRow = document.createElement("div");
    tModeRow.className = "dtui-row";
    tModeRow.innerHTML =
      '<div class="dtui-row-info">' +
        '<span class="dtui-row-label">Counting Mode</span>' +
        '<span class="dtui-row-desc">Choose Auto Mode or Manual Mode</span>' +
      "</div>" +
      '<div class="dtui-segmented">' +
        '<button type="button" class="dtui-seg-btn' + (savedTMode === "manual" ? " is-active" : "") + '" data-tmode="manual">Manual</button>' +
        '<button type="button" class="dtui-seg-btn' + (savedTMode === "auto" ? " is-active" : "") + '" data-tmode="auto">Auto</button>' +
      "</div>";
    tModeRow.querySelectorAll("[data-tmode]").forEach(function (b) {
      b.addEventListener("click", function () {
        var md = this.getAttribute("data-tmode");
        tModeRow.querySelectorAll("[data-tmode]").forEach(function (x) { x.classList.remove("is-active"); });
        this.classList.add("is-active");
        applyTasbeehDefaultMode(md);
      });
    });
    catTasbeeh.appendChild(tModeRow);

    var openTasbeehQuick = document.createElement("button");
    openTasbeehQuick.type = "button";
    openTasbeehQuick.className = "dtui-btn";
    openTasbeehQuick.textContent = "Open Tasbeeh Counter";
    openTasbeehQuick.addEventListener("click", function () {
      modal.classList.remove("show");
      var btn = document.getElementById("openTasbeehBtn");
      if (btn) btn.click();
      setTimeout(function () {
        applyTasbeehDefaultMode(localStorage.getItem(KEY_TASBEEH_MODE) || "manual");
        applyReadingAndOverlayPrefs();
      }, 60);
    });
    catTasbeeh.appendChild(openTasbeehQuick);

    // CATEGORY 4: PRAYER & CALENDAR
    var catPrayer = createCatCard(
      "Prayer & Calendar",
      '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'
    );

    if (hijriRow) catPrayer.appendChild(hijriRow);
    if (hijriMaghribRow) catPrayer.appendChild(hijriMaghribRow);

    catPrayer.appendChild(
      createSwitchRow(
        "dtuiUrsAlertsChk",
        "Urs & Islamic Event Alerts",
        "Enable Mashaykheen Urs & Youm-e-Wisaal notifications",
        localStorage.getItem("app_urs_notif_enabled") !== "false",
        function (on) {
          localStorage.setItem("app_urs_notif_enabled", on ? "true" : "false");
          if (typeof window.rescheduleUrsNotifications === "function") {
            window.rescheduleUrsNotifications(on);
          }
        }
      )
    );

    var prayerQuickGrid = document.createElement("div");
    prayerQuickGrid.className = "dtui-action-grid";
    prayerQuickGrid.innerHTML =
      '<button type="button" class="dtui-btn" id="dtuiOpenPrayerQuick">Prayer Times</button>' +
      '<button type="button" class="dtui-btn" id="dtuiOpenCalendarQuick">Calendar &amp; Urs</button>';
    prayerQuickGrid.querySelector("#dtuiOpenPrayerQuick").addEventListener("click", function () {
      modal.classList.remove("show");
      var btn = document.getElementById("openPrayerTimesBtn");
      if (btn) btn.click();
    });
    prayerQuickGrid.querySelector("#dtuiOpenCalendarQuick").addEventListener("click", function () {
      modal.classList.remove("show");
      var btn = document.getElementById("openEventsCalendarBtn");
      if (btn) btn.click();
    });
    catPrayer.appendChild(prayerQuickGrid);

    var remainingNodes = Array.prototype.slice.call(bodyEl.children);
    remainingNodes.forEach(function (node) {
      if (node !== resetAllWrap) {
        if (node.classList.contains("settings-aot-hint") || (node.textContent || "").toLowerCase().indexOf("overlay") !== -1) {
          catTasbeeh.appendChild(node);
        } else {
          catAppearance.appendChild(node);
        }
      }
    });

    bodyEl.appendChild(catAppearance);
    bodyEl.appendChild(catReading);
    bodyEl.appendChild(catTasbeeh);
    bodyEl.appendChild(catPrayer);

    if (resetAllWrap) {
      var catReset = document.createElement("section");
      catReset.className = "dtui-cat-card";
      catReset.appendChild(resetAllWrap);
      bodyEl.appendChild(catReset);
    }

    bodyEl.addEventListener("input", function () {
      if (isDynamicBgEnabled()) setTimeout(applyDailyDynamicTheme, 20);
    });
    bodyEl.addEventListener("change", function () {
      if (isDynamicBgEnabled()) setTimeout(applyDailyDynamicTheme, 20);
    });

    var resetProceed = document.getElementById("resetConfirmProceedBtn");
    if (resetProceed && !resetProceed.dataset.dtuiBound) {
      resetProceed.dataset.dtuiBound = "1";
      resetProceed.addEventListener("click", function () {
        [
          KEY_DYNAMIC_ENABLED,
          KEY_MANUAL_PALETTE,
          KEY_SHOW_CONTINUE,
          KEY_SHOW_MAIN_BM,
          KEY_SHOW_SCROLL_BTN,
          KEY_TASBEEH_AOT,
          KEY_TASBEEH_MODE,
          KEY_TASBEEH_SIZE
        ].forEach(function (k) { localStorage.removeItem(k); });

        setTimeout(function () {
          applyDailyDynamicTheme();
          applyReadingAndOverlayPrefs();
        }, 40);
      });
    }

    applyDailyDynamicTheme();
  }

  function bindNavbarDarkToggle() {
    document.addEventListener("click", function (e) {
      var navDarkBtn = e.target.closest("#darkModeToggleNav");
      if (!navDarkBtn) return;

      if (isDynamicBgEnabled()) {
        localStorage.setItem(KEY_DYNAMIC_ENABLED, "false");
        localStorage.setItem(KEY_MANUAL_PALETTE, String(getDailyPaletteIndex(new Date())));
        setTimeout(function () {
          applyDailyDynamicTheme();
          var isNowDark = localStorage.getItem("theme") === "dark";
          showMiniToast(isNowDark ? "Manual Glossy Dark (Auto paused)" : "Manual Light (Auto paused)");
        }, 25);
      } else {
        setTimeout(applyDailyDynamicTheme, 25);
      }
    }, false);
  }

  function boot() {
    applyDailyDynamicTheme();
    applyReadingAndOverlayPrefs();
    bindNavbarDarkToggle();

    var observer = new MutationObserver(function () {
      var sm = document.getElementById("settingsModal");
      if (sm && sm.dataset.dtuiCategorized !== "1") {
        categorizeSettingsModal(sm);
      }
      var tm = document.getElementById("tasbeehModal");
      if (tm && !tm.dataset.dtuiModeSynced) {
        tm.dataset.dtuiModeSynced = "1";
        var defMode = localStorage.getItem(KEY_TASBEEH_MODE);
        if (defMode) applyTasbeehDefaultMode(defMode);
        applyReadingAndOverlayPrefs();
      }
    });
    observer.observe(document.body, { childList: true, subtree: false });

    var bodyClassObserver = new MutationObserver(function () {
      if (!isApplyingTheme && isDynamicBgEnabled()) {
        var expectedDark = getTimeOfDayMode(new Date()) === "dark";
        if (document.body.classList.contains("dark-mode") !== expectedDark || !document.body.classList.contains("daily-dynamic-active")) {
          applyDailyDynamicTheme();
        }
      }
    });
    bodyClassObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    setInterval(applyDailyDynamicTheme, 30000);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) applyDailyDynamicTheme();
    });
    window.addEventListener("pageshow", function () {
      applyDailyDynamicTheme();
      applyReadingAndOverlayPrefs();
    });
    window.addEventListener("storage", function () {
      applyDailyDynamicTheme();
      applyReadingAndOverlayPrefs();
    });
  }

  window.AwraadDailyTheme = {
    refresh: applyDailyDynamicTheme,
    isEnabled: isDynamicBgEnabled
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
