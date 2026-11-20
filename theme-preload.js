(function() {
  try {
    var root = document.documentElement;
    var isDark = localStorage.getItem('theme') === 'dark';
    var savedBg = localStorage.getItem('app_custom_bg');
    var savedText = localStorage.getItem('app_custom_text');
    var savedSize = localStorage.getItem('app_font_size');
    var tajweedOff = localStorage.getItem('app_tajweed_colors') === 'false';

    if (isDark) root.classList.add('dark-mode');
    if (tajweedOff) root.classList.add('tajweed-colors-off');

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
    } else if (isDark) {
      root.style.backgroundColor = '#121212';
    }

    if (savedText) {
      root.style.setProperty('--user-text-color', savedText);
      root.classList.add('custom-text-active');
    }
    if (savedSize) {
      root.style.setProperty('--user-font-size', savedSize + 'px');
      root.classList.add('custom-size-active');
    }
  } catch (e) {}
})();


