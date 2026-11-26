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

    var isDark = localStorage.getItem('theme') === 'dark';
    var savedBg = localStorage.getItem('app_custom_bg');
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
    var tajweedOff = localStorage.getItem('app_tajweed_colors') === 'false';

    if (isDark) root.classList.add('dark-mode');
    if (tajweedOff) root.classList.add('tajweed-colors-off');

    var lockCss = '';

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
        '.app-navbar{background-color:' + t.navBg + ' !important;border-bottom-color:' + t.border + ' !important;}' +
        '.nav-card,.sub-nav-card,.daily-malfooz-container,.malfooz-card,.shijra-table,.name-card,.timer-card{background-color:' + t.cardBg + ' !important;border-color:' + t.border + ' !important;}' +
        '}';
    } else if (isDark) {
      root.style.backgroundColor = '#121212';
      lockCss =
        '@media screen{' +
        'html,body{background:#121212 !important;background-color:#121212 !important;color:#f5f6fa !important;}' +
        '.continuous-frame,.continuous-inner{background:#1e1e1e !important;background-color:#1e1e1e !important;}' +
        '.app-navbar{background-color:#2a2a2a !important;}' +
        '}';
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

    if (savedText) {
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
      "'Aref Ruqaa', serif": "https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap",
      "'Harmattan', sans-serif": "https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&display=swap",
      "'Reem Kufi', sans-serif": "https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@500;700&display=swap",
      "'Mirza', serif": "https://fonts.googleapis.com/css2?family=Mirza:wght@400;700&display=swap",
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

    // Load Amiri Google Font non-blockingly so CSS never stalls on network
    if (head && !document.getElementById('awraad-amiri-font-link')) {
      var fl = document.createElement('link');
      fl.id = 'awraad-amiri-font-link';
      fl.rel = 'stylesheet';
      fl.href = 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,700;1,700&display=swap';
      head.appendChild(fl);
    }
  } catch (e) {}
})();
