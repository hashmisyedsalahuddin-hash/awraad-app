(function() {
  try {
    var root = document.documentElement;
    var head = document.head || root;

    // 0ms Full-Screen Splash Cover on Fresh App Launch (once per session)
    try {
      if (!sessionStorage.getItem('awraad_splash_shown')) {
        root.classList.add('awraad-splash-pending');
        if (head) {
          var sp = document.getElementById('awraad-splash-preload-style');
          if (!sp) {
            sp = document.createElement('style');
            sp.id = 'awraad-splash-preload-style';
            head.appendChild(sp);
          }
          sp.textContent = '@media screen{html.awraad-splash-pending::before{content:"";position:fixed;inset:0;background:#f6f8f4 !important;z-index:2147483646;pointer-events:auto;}}';
        }
        setTimeout(function() {
          root.classList.remove('awraad-splash-pending');
        }, 11000);
      }
    } catch (e) {}

    // 8 Coordinated Light (6 AM - 6 PM) & Glossy Dark (6 PM - 6 AM) Palettes
    // Inspired by Emerald Green (#0c3b2e) & Gold (#c59b27) Menu Bar
    var DAILY_PALETTES = [
      {
        name: 'Emerald Ivory',
        swatch: 'linear-gradient(135deg, #f6f0e1 50%, #0d3a2e 50%)',
        light: { bg: 'linear-gradient(160deg, #faf6ec 0%, #efe6d2 100%)', solid: '#f6f0e1', frame: 'rgba(255, 253, 248, 0.88)', card: 'rgba(255, 253, 248, 0.94)', text: '#0d2f25', heading: '#0c3b2e', sub: '#4d6159', border: '#c59b27', ruled: 'rgba(130, 152, 146, 0.45)', btnBg: 'linear-gradient(135deg, #0c3b2e 0%, #164f3f 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #051914 0%, #0d3a2e 46%, #071923 100%)', solid: '#092720', frame: 'linear-gradient(165deg, rgba(13, 47, 38, 0.88) 0%, rgba(7, 25, 22, 0.94) 100%)', card: 'rgba(15, 52, 43, 0.78)', text: '#f2f7f5', heading: '#f6e099', sub: '#bdd2ca', border: '#d4af37', ruled: 'rgba(212, 175, 55, 0.28)', btnBg: 'linear-gradient(135deg, #135a46 0%, #0d3c30 100%)', btnText: '#fff8e1' }
      },
      {
        name: 'Royal Teal Pearl',
        swatch: 'linear-gradient(135deg, #eaf3f4 50%, #0d3b4a 50%)',
        light: { bg: 'linear-gradient(160deg, #f1f7f7 0%, #dfecee 100%)', solid: '#eaf3f4', frame: 'rgba(250, 253, 253, 0.88)', card: 'rgba(255, 255, 255, 0.94)', text: '#0e2c36', heading: '#0f4c5c', sub: '#49636c', border: '#b88d22', ruled: 'rgba(114, 148, 158, 0.44)', btnBg: 'linear-gradient(135deg, #0f4c5c 0%, #0c3b2e 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #05161f 0%, #0d3b4a 48%, #081e22 100%)', solid: '#092530', frame: 'linear-gradient(165deg, rgba(12, 46, 58, 0.88) 0%, rgba(7, 23, 30, 0.94) 100%)', card: 'rgba(14, 52, 65, 0.78)', text: '#eff6f8', heading: '#f5dd8c', sub: '#b7cfd8', border: '#dab547', ruled: 'rgba(218, 181, 71, 0.28)', btnBg: 'linear-gradient(135deg, #135d72 0%, #0c3c4a 100%)', btnText: '#ffffff' }
      },
      {
        name: 'Olive Parchment',
        swatch: 'linear-gradient(135deg, #eff1e2 50%, #193b26 50%)',
        light: { bg: 'linear-gradient(160deg, #f5f6eb 0%, #e6ead6 100%)', solid: '#eff1e2', frame: 'rgba(253, 253, 248, 0.88)', card: 'rgba(255, 255, 251, 0.94)', text: '#192e1f', heading: '#1f492d', sub: '#526556', border: '#b58a1e', ruled: 'rgba(130, 149, 128, 0.45)', btnBg: 'linear-gradient(135deg, #1f4e30 0%, #0e3a28 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #09180f 0%, #193b26 48%, #091b19 100%)', solid: '#0f2719', frame: 'linear-gradient(165deg, rgba(22, 50, 33, 0.88) 0%, rgba(10, 25, 17, 0.94) 100%)', card: 'rgba(24, 56, 37, 0.78)', text: '#f2f7f1', heading: '#f3d982', sub: '#bfd1bf', border: '#d6b042', ruled: 'rgba(214, 176, 66, 0.28)', btnBg: 'linear-gradient(135deg, #255b39 0%, #153b24 100%)', btnText: '#fff9e6' }
      },
      {
        name: 'Jade Silk Linen',
        swatch: 'linear-gradient(135deg, #e7f2ec 50%, #0c4138 50%)',
        light: { bg: 'linear-gradient(160deg, #eff7f2 0%, #deede4 100%)', solid: '#e7f2ec', frame: 'rgba(249, 253, 250, 0.88)', card: 'rgba(255, 255, 255, 0.94)', text: '#0d2c26', heading: '#0d5044', sub: '#486660', border: '#bc9021', ruled: 'rgba(116, 152, 144, 0.44)', btnBg: 'linear-gradient(135deg, #0d5246 0%, #0b392d 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #041b18 0%, #0c4138 48%, #071a24 100%)', solid: '#082924', frame: 'linear-gradient(165deg, rgba(12, 53, 46, 0.88) 0%, rgba(6, 25, 23, 0.94) 100%)', card: 'rgba(13, 58, 51, 0.78)', text: '#eff7f5', heading: '#f7df8f', sub: '#b6d5ce', border: '#ddba50', ruled: 'rgba(221, 186, 80, 0.28)', btnBg: 'linear-gradient(135deg, #126658 0%, #0b4138 100%)', btnText: '#ffffff' }
      },
      {
        name: 'Sapphire Emerald',
        swatch: 'linear-gradient(135deg, #eaeff7 50%, #113554 50%)',
        light: { bg: 'linear-gradient(160deg, #f1f4fa 0%, #e1e8f3 100%)', solid: '#eaeff7', frame: 'rgba(251, 252, 255, 0.90)', card: 'rgba(255, 255, 255, 0.95)', text: '#13263d', heading: '#163e63', sub: '#4d5f75', border: '#b78920', ruled: 'rgba(126, 144, 168, 0.45)', btnBg: 'linear-gradient(135deg, #174066 0%, #0c3b2e 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #061322 0%, #113554 46%, #092521 100%)', solid: '#0b2136', frame: 'linear-gradient(165deg, rgba(16, 42, 68, 0.88) 0%, rgba(8, 21, 35, 0.94) 100%)', card: 'rgba(18, 46, 74, 0.80)', text: '#f1f5fb', heading: '#f5dc8b', sub: '#b8cae0', border: '#dcba55', ruled: 'rgba(220, 186, 85, 0.28)', btnBg: 'linear-gradient(135deg, #1b4f7d 0%, #113352 100%)', btnText: '#ffffff' }
      },
      {
        name: 'Warm Alabaster Gold',
        swatch: 'linear-gradient(135deg, #f5ebd6 50%, #232a1c 50%)',
        light: { bg: 'linear-gradient(160deg, #fbf4e6 0%, #eee0c6 100%)', solid: '#f5ebd6', frame: 'rgba(255, 252, 246, 0.90)', card: 'rgba(255, 253, 248, 0.95)', text: '#241e13', heading: '#0e4536', sub: '#645740', border: '#b38218', ruled: 'rgba(162, 138, 92, 0.44)', btnBg: 'linear-gradient(135deg, #0e4738 0%, #1a3d33 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #111611 0%, #232a1c 46%, #0b241e 100%)', solid: '#181e15', frame: 'linear-gradient(165deg, rgba(31, 38, 27, 0.88) 0%, rgba(14, 22, 18, 0.95) 100%)', card: 'rgba(36, 43, 31, 0.80)', text: '#f7f4ec', heading: '#f7df8d', sub: '#d1c8b4', border: '#e1be58', ruled: 'rgba(225, 190, 88, 0.30)', btnBg: 'linear-gradient(135deg, #155c48 0%, #0e3c2f 100%)', btnText: '#fffaf0' }
      },
      {
        name: 'Forest Velvet Cream',
        swatch: 'linear-gradient(135deg, #eaf2e9 50%, #103b2c 50%)',
        light: { bg: 'linear-gradient(160deg, #f2f7f1 0%, #e2ece1 100%)', solid: '#eaf2e9', frame: 'rgba(250, 253, 250, 0.88)', card: 'rgba(255, 255, 255, 0.94)', text: '#112b21', heading: '#124e39', sub: '#4b6359', border: '#b6891d', ruled: 'rgba(122, 150, 138, 0.44)', btnBg: 'linear-gradient(135deg, #12503a 0%, #0b3426 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #051711 0%, #103b2c 48%, #07191c 100%)', solid: '#09261c', frame: 'linear-gradient(165deg, rgba(15, 48, 37, 0.88) 0%, rgba(7, 23, 18, 0.94) 100%)', card: 'rgba(17, 54, 42, 0.78)', text: '#f0f7f3', heading: '#f5dc89', sub: '#b7d1c5', border: '#d9b549', ruled: 'rgba(217, 181, 73, 0.28)', btnBg: 'linear-gradient(135deg, #18644a 0%, #0e402f 100%)', btnText: '#ffffff' }
      },
      {
        name: 'Turquoise Noor Dew',
        swatch: 'linear-gradient(135deg, #e5f2f4 50%, #0b3f4a 50%)',
        light: { bg: 'linear-gradient(160deg, #eef7f8 0%, #dbedf0 100%)', solid: '#e5f2f4', frame: 'rgba(249, 253, 254, 0.88)', card: 'rgba(255, 255, 255, 0.94)', text: '#0d2930', heading: '#0e505f', sub: '#48646a', border: '#b98b1f', ruled: 'rgba(116, 150, 156, 0.44)', btnBg: 'linear-gradient(135deg, #0e5261 0%, #0b392e 100%)', btnText: '#f6e099' },
        dark:  { bg: 'linear-gradient(155deg, #04181d 0%, #0b3f4a 48%, #071f25 100%)', solid: '#08272e', frame: 'linear-gradient(165deg, rgba(12, 50, 59, 0.88) 0%, rgba(6, 24, 29, 0.94) 100%)', card: 'rgba(13, 55, 65, 0.78)', text: '#eef7f8', heading: '#f6df8f', sub: '#b4d2d8', border: '#debc54', ruled: 'rgba(222, 188, 84, 0.28)', btnBg: 'linear-gradient(135deg, #136475 0%, #0b3f4a 100%)', btnText: '#ffffff' }
      }
    ];

    window.AWRAAD_DAILY_PALETTES = DAILY_PALETTES;

    function getLocalDateKey(d) {
      var y = d.getFullYear();
      var m = String(d.getMonth() + 1);
      var day = String(d.getDate());
      if (m.length < 2) m = '0' + m;
      if (day.length < 2) day = '0' + day;
      return y + '-' + m + '-' + day;
    }

    function getOrPickDailyPaletteIndex(now) {
      var todayKey = getLocalDateKey(now);
      var saved = null;
      try { saved = JSON.parse(localStorage.getItem('app_daily_palette_state_v1') || 'null'); } catch (e) {}
      if (saved && saved.dateKey === todayKey && typeof saved.index === 'number' && saved.index >= 0 && saved.index < DAILY_PALETTES.length) {
        return saved.index;
      }
      var prev = (saved && typeof saved.index === 'number') ? saved.index : -1;
      var pool = [];
      for (var i = 0; i < DAILY_PALETTES.length; i++) {
        if (i !== prev) pool.push(i);
      }
      var picked = pool[Math.floor(Math.random() * pool.length)];
      try {
        localStorage.setItem('app_daily_palette_state_v1', JSON.stringify({ dateKey: todayKey, index: picked }));
      } catch (e) {}
      return picked;
    }

    function applyPaletteToRoot(pal, mode) {
      var tk = pal[mode];
      root.classList.add('daily-dynamic-active');
      root.classList.toggle('daily-dynamic-dark', mode === 'dark');
      root.classList.toggle('daily-dynamic-light', mode === 'light');
      root.classList.toggle('dark-mode', mode === 'dark');

      root.style.setProperty('--dt-bg-gradient', tk.bg);
      root.style.setProperty('--dt-bg-solid', tk.solid);
      root.style.setProperty('--dt-frame-bg', tk.frame);
      root.style.setProperty('--dt-card-bg', tk.card);
      root.style.setProperty('--dt-text', tk.text);
      root.style.setProperty('--dt-heading', tk.heading);
      root.style.setProperty('--dt-subtext', tk.sub);
      root.style.setProperty('--dt-border', tk.border);
      root.style.setProperty('--dt-ruled-border', tk.ruled);
      root.style.setProperty('--dt-btn-bg', tk.btnBg);
      root.style.setProperty('--dt-btn-text', tk.btnText);
      root.style.backgroundColor = tk.solid;

      return '@media screen{html.daily-dynamic-active,html.daily-dynamic-active body{background:' + tk.bg + ' !important;background-color:' + tk.solid + ' !important;background-attachment:fixed !important;color:' + tk.text + ' !important;}}';
    }

    var dynamicBgEnabled = localStorage.getItem('app_daily_dynamic_bg') !== 'false'; // Default ON
    var tajweedOff = localStorage.getItem('app_tajweed_colors') === 'false';
    if (tajweedOff) root.classList.add('tajweed-colors-off');

    var lockCss = '';
    var savedBg = localStorage.getItem('app_custom_bg');
    var manualPalRaw = localStorage.getItem('app_manual_palette_idx');
    var manualPalIdx = manualPalRaw !== null ? parseInt(manualPalRaw, 10) : -1;

    if (dynamicBgEnabled) {
      var now = new Date();
      var hr = now.getHours();
      var mode = (hr >= 6 && hr < 18) ? 'light' : 'dark';
      var pIdx = getOrPickDailyPaletteIndex(now);
      lockCss = applyPaletteToRoot(DAILY_PALETTES[pIdx], mode);
    } else if (!savedBg && !isNaN(manualPalIdx) && manualPalIdx >= 0 && manualPalIdx < DAILY_PALETTES.length) {
      var manualMode = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
      lockCss = applyPaletteToRoot(DAILY_PALETTES[manualPalIdx], manualMode);
    } else {
      var isDark = localStorage.getItem('theme') === 'dark';
      if (isDark) root.classList.add('dark-mode');

      if (savedBg && /^#[0-9a-fA-F]{6}$/.test(savedBg)) {
        var r = parseInt(savedBg.substring(1, 3), 16);
        var g = parseInt(savedBg.substring(3, 5), 16);
        var b = parseInt(savedBg.substring(5, 7), 16);
        var r1 = r / 255, g1 = g / 255, b1 = b / 255;
        var max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1);
        var h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          if (max === r1) h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
          else if (max === g1) h = (b1 - r1) / d + 2;
          else h = (r1 - g1) / d + 4;
          h *= 60;
        }
        h = Math.round(h); s = Math.round(s * 100); l = Math.round(l * 100);
        var toLin = function(c) { var v = c / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
        var lum = 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
        var isDarkBg = lum < 0.28;
        var isNeutral = s < 10;

        var t;
        if (!isDarkBg) {
          var cardL = l > 94 ? l - 4 : Math.min(l + 6, 98);
          var navL = Math.max(l - 5, 76);
          var borderL = Math.max(l - 34, 28);
          t = {
            text: isNeutral ? '#111111' : 'hsl(' + h + ',' + Math.min(s, 45) + '%,14%)',
            cardBg: isNeutral ? 'hsl(0,0%,' + cardL + '%)' : 'hsl(' + h + ',' + Math.min(s, 42) + '%,' + cardL + '%)',
            cardText: isNeutral ? '#1a365d' : 'hsl(' + h + ',' + Math.min(s, 65) + '%,18%)',
            cardSubtext: isNeutral ? '#555555' : 'hsl(' + h + ',' + Math.min(s, 38) + '%,34%)',
            cardHoverBg: isNeutral ? '#1a365d' : 'hsl(' + h + ',' + Math.min(s + 10, 68) + '%,30%)',
            cardHoverText: '#ffffff',
            border: isNeutral ? '#9a7b2c' : 'hsl(' + h + ',' + Math.min(s + 10, 65) + '%,' + borderL + '%)',
            ruledBorder: isNeutral ? 'rgba(120,130,145,0.45)' : 'hsla(' + h + ',' + Math.min(s, 45) + '%,' + borderL + '%,0.45)',
            navBg: isNeutral ? 'hsl(0,0%,' + navL + '%)' : 'hsl(' + h + ',' + Math.min(s, 35) + '%,' + navL + '%)',
            tableHeadBg: isNeutral ? '#1a365d' : 'hsl(' + h + ',' + Math.min(s + 5, 60) + '%,26%)',
            tableHeadText: '#ffffff'
          };
        } else {
          var cardL2 = Math.min(l + 9, 34);
          var navL2 = Math.max(l - 4, 8);
          var borderL2 = Math.min(l + 32, 74);
          t = {
            text: isNeutral ? '#f5f6fa' : 'hsl(' + h + ',' + Math.min(s, 25) + '%,95%)',
            cardBg: isNeutral ? 'hsl(0,0%,' + cardL2 + '%)' : 'hsl(' + h + ',' + Math.min(s, 38) + '%,' + cardL2 + '%)',
            cardText: isNeutral ? '#ffffff' : 'hsl(' + h + ',' + Math.min(s, 32) + '%,96%)',
            cardSubtext: isNeutral ? '#c8ccd4' : 'hsl(' + h + ',' + Math.min(s, 30) + '%,78%)',
            cardHoverBg: isNeutral ? '#c59b27' : 'hsl(' + h + ',' + Math.min(s + 12, 70) + '%,' + Math.min(l + 26, 68) + '%)',
            cardHoverText: '#111111',
            border: isNeutral ? '#c59b27' : 'hsl(' + h + ',' + Math.min(s + 15, 70) + '%,' + borderL2 + '%)',
            ruledBorder: isNeutral ? 'rgba(220,225,235,0.30)' : 'hsla(' + h + ',' + Math.min(s, 45) + '%,' + borderL2 + '%,0.38)',
            navBg: isNeutral ? 'hsl(0,0%,' + navL2 + '%)' : 'hsl(' + h + ',' + Math.min(s, 35) + '%,' + navL2 + '%)',
            tableHeadBg: isNeutral ? '#2d3748' : 'hsl(' + h + ',' + Math.min(s + 8, 55) + '%,' + Math.min(l + 16, 40) + '%)',
            tableHeadText: '#ffffff'
          };
        }

        root.style.backgroundColor = savedBg;
        root.style.setProperty('--user-bg-color', savedBg);
        root.style.setProperty('--auto-text', t.text);
        root.style.setProperty('--auto-card-bg', t.cardBg);
        root.style.setProperty('--auto-card-text', t.cardText);
        root.style.setProperty('--auto-card-subtext', t.cardSubtext);
        root.style.setProperty('--auto-card-hover-bg', t.cardHoverBg);
        root.style.setProperty('--auto-card-hover-text', t.cardHoverText);
        root.style.setProperty('--auto-border', t.border);
        root.style.setProperty('--auto-ruled-border', t.ruledBorder);
        root.style.setProperty('--auto-nav-bg', t.navBg);
        root.style.setProperty('--auto-table-head-bg', t.tableHeadBg);
        root.style.setProperty('--auto-table-head-text', t.tableHeadText);
        root.classList.add('custom-bg-active');
        if (isDarkBg) root.classList.add('custom-bg-dark');

        lockCss =
          '@media screen{' +
          'html,body,.continuous-frame,.continuous-inner{background:' + savedBg + ' !important;background-color:' + savedBg + ' !important;}' +
          '.nav-card,.sub-nav-card,.daily-malfooz-container,.malfooz-card,.shijra-table,.name-card,.timer-card{background-color:' + t.cardBg + ' !important;border-color:' + t.border + ' !important;}' +
          '}';
      } else if (isDark) {
        root.style.backgroundColor = '#121212';
        lockCss =
          '@media screen{' +
          'html,body{background:#121212 !important;background-color:#121212 !important;color:#f5f6fa !important;}' +
          '.continuous-frame,.continuous-inner{background:#1e1e1e !important;background-color:#1e1e1e !important;}' +
          '}';
      }
    }

    if (lockCss && head) {
      var st = document.getElementById('awraad-preload-lock');
      if (!st) {
        st = document.createElement('style');
        st.id = 'awraad-preload-lock';
        head.appendChild(st);
      }
      st.textContent = lockCss;
    }

    // Restore Text Color, Font Sizes, Line Height & Fonts
    var savedText = localStorage.getItem('app_custom_text');
    var savedArabicSize = localStorage.getItem('app_arabic_font_size') || localStorage.getItem('app_font_size');
    var savedUrduSize = localStorage.getItem('app_urdu_font_size');
    var savedLineHeight = localStorage.getItem('app_line_height');
    var savedArabicFont = localStorage.getItem('app_arabic_font') || localStorage.getItem('app_content_font');
    var rawUrduFont = localStorage.getItem('app_urdu_font');
    var savedUrduFont = rawUrduFont === "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif"
      ? "'Siasat Noori Nastaleeq', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif"
      : rawUrduFont;
    var rawAppFont = localStorage.getItem('app_ui_font');
    var savedAppFont = rawAppFont === "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif"
      ? "'Siasat Noori Nastaleeq', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif"
      : rawAppFont;

    if (savedText && !dynamicBgEnabled) {
      root.style.setProperty('--user-text-color', savedText);
      root.classList.add('custom-text-active');
    }
    if (savedArabicSize) {
      root.style.setProperty('--user-arabic-size', savedArabicSize + 'px');
      root.classList.add('custom-arabic-size-active');
    }
    if (savedUrduSize) {
      root.style.setProperty('--user-urdu-size', savedUrduSize + 'px');
      root.classList.add('custom-urdu-size-active');
    }
    if (savedLineHeight) {
      var lhNum = parseFloat(savedLineHeight);
      if (!isNaN(lhNum) && lhNum >= 1.6 && lhNum <= 4.5) {
        root.style.setProperty('--user-line-height', String(lhNum));
        root.style.setProperty('--user-urdu-line-height', String(Math.max(1.75, +(lhNum * 0.72).toFixed(2))));
        root.classList.add('custom-line-height-active');
      }
    }

    var notoNastaliq = "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap";
    var gulzarUrl = "https://fonts.googleapis.com/css2?family=Gulzar&display=swap";
    var notoNaskh = "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;700&display=swap";
    var fontUrls = {
      "'Amiri Quran', serif": "https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap",
      "'Scheherazade New', serif": "https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap",
      "'Lateef', serif": "https://fonts.googleapis.com/css2?family=Lateef:wght@400;700&display=swap",
      "'Noto Naskh Arabic', serif": notoNaskh,
      "'Siasat Noori Nastaleeq', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif": notoNastaliq,
      "'Munsif Noori Kasheeda', 'Jameel Noori Nastaleeq Kasheeda', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif": notoNastaliq,
      "'Faiz Lahori Nastaleeq', 'Jameel Noori Nastaleeq', 'Gulzar', 'Noto Nastaliq Urdu', serif": [gulzarUrl, notoNastaliq],
      "'Mehr Nastaliq Web', 'Noto Nastaliq Urdu', serif": notoNastaliq,
      "'AlQalam Taj Nastaleeq', 'Noto Nastaliq Urdu', serif": notoNastaliq,
      "'Alvi Nastaleeq', 'Noto Nastaliq Urdu', serif": notoNastaliq,
      "'Noto Nastaliq Urdu', serif": notoNastaliq,
      "'Gulzar', serif": gulzarUrl,
      "'Nafees Web Naskh', 'Noto Naskh Arabic', serif": notoNaskh
    };
    var loadedPreUrls = {};
    var loadPreFont = function(f) {
      if (!f || !head || !fontUrls[f]) return;
      var entry = fontUrls[f];
      var urls = Array.isArray(entry) ? entry : [entry];
      for (var i = 0; i < urls.length; i++) {
        if (loadedPreUrls[urls[i]]) continue;
        loadedPreUrls[urls[i]] = true;
        var fl2 = document.createElement('link');
        fl2.rel = 'stylesheet';
        fl2.href = urls[i];
        head.appendChild(fl2);
      }
    };

    if (savedArabicFont) {
      root.style.setProperty('--user-arabic-font', savedArabicFont);
      root.classList.add('custom-arabic-font-active');
      loadPreFont(savedArabicFont);
    }
    if (savedUrduFont) {
      root.style.setProperty('--user-urdu-font', savedUrduFont);
      root.classList.add('custom-urdu-font-active');
      if (savedUrduFont.indexOf('Nastaliq') !== -1 || savedUrduFont.indexOf('Nastaleeq') !== -1 || savedUrduFont.indexOf('Gulzar') !== -1) {
        root.classList.add('urdu-nastaliq-active');
      }
      if (savedUrduFont.indexOf('Siasat') !== -1) root.classList.add('urdu-style-siasat');
      else if (savedUrduFont.indexOf('Munsif') !== -1) root.classList.add('urdu-style-munsif');
      else if (savedUrduFont.indexOf('Faiz') !== -1) root.classList.add('urdu-style-faiz');
      else if (savedUrduFont.indexOf('Mehr') !== -1) root.classList.add('urdu-style-mehr');
      else if (savedUrduFont.indexOf('Nafees') !== -1) root.classList.add('urdu-style-nafees');
      loadPreFont(savedUrduFont);
    }
    if (savedAppFont) {
      root.style.setProperty('--user-app-font', savedAppFont);
      root.classList.add('custom-app-font-active');
      loadPreFont(savedAppFont);
    }

    if (head && !document.getElementById('awraad-amiri-font-link')) {
      var fl = document.createElement('link');
      fl.id = 'awraad-amiri-font-link';
      fl.rel = 'stylesheet';
      fl.href = 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,700;1,700&display=swap';
      head.appendChild(fl);
    }
  } catch (e) {}
})();
