// =========================================================
// PART 0. CRISP INLINE SVG ICON LIBRARY (0 KB BINARY OVERHEAD)
// =========================================================
(function() {
    function svg(paths, cls) {
        return '<svg class="svg-ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + paths + '</svg>';
    }
    window.AWRAAD_SVG = {
        menu: svg('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'),
        search: svg('<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
        star: svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
        starSm: svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', 'svg-ic-sm'),
        moon: svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
        sun: svg('<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'),
        sunLow: svg('<circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="21"/><line x1="3" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="21" y2="12"/>', 'svg-ic-sm'),
        home: svg('<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/>'),
        scroll: svg('<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/>'),
        book: svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
        video: svg('<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>'),
        videoSm: svg('<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>', 'svg-ic-sm'),
        calendar: svg('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
        calendarSm: svg('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>', 'svg-ic-sm'),
        beads: svg('<circle cx="12" cy="5" r="2"/><circle cx="18" cy="8.5" r="2"/><circle cx="18" cy="15.5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="6" cy="15.5" r="2"/><circle cx="6" cy="8.5" r="2"/>'),
        mosque: svg('<path d="M12 3c2.5 2.2 4 4.2 4 6.5V21H8V9.5C8 7.2 9.5 5.2 12 3z"/><path d="M4 21v-8a2 2 0 0 1 4 0v8"/><path d="M16 21v-8a2 2 0 0 1 4 0v8"/><line x1="2" y1="21" x2="22" y2="21"/>'),
        settings: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
        autoscroll: svg('<polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/>'),
        close: svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
        chevronDown: svg('<polyline points="6 9 12 15 18 9"/>', 'svg-ic-sm'),
        play: svg('<polygon points="6 4 20 12 6 20 6 4"/>', 'svg-ic-fill'),
        pause: svg('<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>', 'svg-ic-fill'),
        up: svg('<polyline points="18 15 12 9 6 15"/>'),
        copySm: svg('<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>', 'svg-ic-sm'),
        bellSm: svg('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>', 'svg-ic-sm'),
        clockSm: svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', 'svg-ic-sm'),
        pinSm: svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', 'svg-ic-sm'),
        scrollSm: svg('<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/>', 'svg-ic-sm'),
        refreshSm: svg('<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>', 'svg-ic-sm'),
        trashSm: svg('<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>', 'svg-ic-sm')
    };
})();

// =========================================================
// PART 1. IMMEDIATE EARLY THEME SYNC (ZERO-FLASH FALLBACK)
// =========================================================
(function() {
    try {
        var root = document.documentElement;
        var body = document.body;
        var isDark = localStorage.getItem('theme') === 'dark';
        var savedBg = localStorage.getItem('app_custom_bg');
        var savedText = localStorage.getItem('app_custom_text');
        var savedArabicSize = localStorage.getItem('app_arabic_font_size') || localStorage.getItem('app_font_size');
        var savedUrduSize = localStorage.getItem('app_urdu_font_size');
        var savedLineHeight = localStorage.getItem('app_line_height');
        var tajweedOff = localStorage.getItem('app_tajweed_colors') === 'false';

        if (isDark) {
            root.classList.add('dark-mode');
            if (body) body.classList.add('dark-mode');
        }
        if (tajweedOff) {
            root.classList.add('tajweed-colors-off');
            if (body) body.classList.add('tajweed-colors-off');
        }

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
            root.classList.toggle('custom-bg-dark', isDarkBg);
            if (body) {
                body.classList.add('custom-bg-active');
                body.classList.toggle('custom-bg-dark', isDarkBg);
            }
        } else if (isDark) {
            root.style.backgroundColor = '#121212';
        }

        if (savedText) {
            root.style.setProperty('--user-text-color', savedText);
            root.classList.add('custom-text-active');
            if (body) body.classList.add('custom-text-active');
        }
        if (savedArabicSize) {
            root.style.setProperty('--user-arabic-size', savedArabicSize + 'px');
            root.classList.add('custom-arabic-size-active');
            if (body) body.classList.add('custom-arabic-size-active');
        }
        if (savedUrduSize) {
            root.style.setProperty('--user-urdu-size', savedUrduSize + 'px');
            root.classList.add('custom-urdu-size-active');
            if (body) body.classList.add('custom-urdu-size-active');
        }
        if (savedLineHeight) {
            var lhEarly = parseFloat(savedLineHeight);
            if (!isNaN(lhEarly) && lhEarly >= 1.6 && lhEarly <= 4.5) {
                root.style.setProperty('--user-line-height', String(lhEarly));
                root.style.setProperty('--user-urdu-line-height', String(Math.max(1.75, +(lhEarly * 0.72).toFixed(2))));
                root.classList.add('custom-line-height-active');
                if (body) body.classList.add('custom-line-height-active');
            }
        }

        if (document.head && !document.getElementById('awraad-amiri-font-link')) {
            var amiriLink = document.createElement('link');
            amiriLink.id = 'awraad-amiri-font-link';
            amiriLink.rel = 'stylesheet';
            amiriLink.href = 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,700;1,700&display=swap';
            document.head.appendChild(amiriLink);
        }
    } catch (e) {}
})();

// =========================================================
// PART 2. GLOBAL SCREEN HEADER (AUTO-INJECT AT VERY TOP)
// =========================================================
(function() {
    function injectScreenHeader() {
        if (document.querySelector('.screen-header')) return; 

        const headerDiv = document.createElement('div');
        headerDiv.className = 'screen-header';
        headerDiv.innerHTML = `
            <div class="screen-header-title">أَوْرَادُ الْعَلَوِيَّةِ</div>
            <div class="bismillah-header">بِسْمِ <span class="allah-name">اللّٰهِ</span> الرَّحْمٰنِ الرَّحِيْمِ</div>
        `;

        const continuousInner = document.querySelector('.continuous-inner');
        if (continuousInner) {
            continuousInner.insertAdjacentElement('afterbegin', headerDiv); 
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectScreenHeader);
    } else {
        injectScreenHeader();
    }
})();

// =========================================================
// PART 3. DAILY MALFOOZAT LOGIC
// =========================================================
(function() {
    // Yahan maine aapka naya malfooz sahi tags aur quotes ke sath add kar diya hai
    const malfoozatList = [
        {
            id: 1,
            text: "<span class=\"allah-name\">اللہ</span> کی مدد لینے والے کا <span class=\"allah-name\">اللہ</span> خاص طور پر مددگار بن جاتا ہے۔ <span class=\"malfooz-ayat\">﴿وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِيْنَ﴾</span> <span class=\"malfooz-note\">(الروم : 47)</span>"
        },
        {
            id: 2,
            text: "<span class=\"allah-name\">اللہ</span> کے سہارے رہنے والے پر <span class=\"allah-name\">اللہ</span> سہارا بن جاتا ہے۔"
        },
        {
            id: 3,
            text: "مومن اپنے تعلق کو <span class=\"allah-name\">اللہ</span> سے قوی کرتا ہے تو اس بندے کے ساتھ <span class=\"allah-name\">اللہ</span> کا فضل خصوصی ہو جاتا ہے۔"
        },
        {
            id: 4,
            text: "جو <span class=\"allah-name\">اللہ</span> سے ڈرتے ہیں پر ہیز گاری اختیار کرتے ہیں، انہی کے لئے قرآن ہدایت ہے <span class=\"malfooz-ayat\">﴿هُدًى لِّلْمُتَّقِيْنَ﴾</span> <span class=\"malfooz-note\">(البقرة:02)</span>"
        },
        {
            id: 6,
            text: "یہ قرآن انہی لوگوں کے لئے ہدایت ہے ، جو غیب پر ایمان رکھتے ہیں، <span class=\"allah-name\">اللہ</span> کی ذات پر یقین رکھتےہیں، بغیر دیکھے تب کے عذاب پر ایمان رکھتے ہیں، میدان حشر میں جمع ہونے پر یقین رکھتےہیں، <span class=\"allah-name\">اللہ</span> کے سامنے حساب دینے پر یقین رکھتے ہیں، جنت پر ، دوزخ پر، پل صراط پر یقین رکھتے ہیں۔"
        },
        {
            id: 7,
            text: "جو غیب پر ایمان رکھتے ہیں ، وہی لوگ قرآن سے فائدہ اٹھاتے ہیں، اور جن کو قرآن نے فائدہ دیا انہی کے لئے جنت ہے۔"
        },
        {
            id: 8,
            text: "للہیت ہمارے اندر ہونا چاہئے <span class=\"malfooz-ayat\">مُخْلِصِيْنَ لَهُ الدِّيْنَ</span>"
        },
        {
            id: 9,
            text: "دوسروں کو دکھانے کے لئے نیکیاں کرنا منافقین کی علامت ہے۔ جو ایسا کرتا ہے اس کی ساری نیکیاں برباد ہو جاتی ہیں۔"
        },
        {
            id: 10,
            text: "ہر مشکل میں پہلے <span class=\"allah-name\">اللہ</span> کو پکارنا چاہئے۔ غیر کی مدد کی طرف دیکھنا بھی نہیں چاہئے۔"
        },
        {
            id: 11,
            text: "کسی بندے کی مدد و نصرت اس کے ایمان کے حساب سے ہوتی ہے۔"
        },
        {
            id: 12,
            text: "ہر مشکل میں <span class=\"allah-name\">اللہ</span> کو پکارنا ، <span class=\"allah-name\">اللہ</span> سے مدد مانگنا، پھر <span class=\"allah-name\">اللہ</span> کی مدد کو محسوس کرنا چاہئے، اس سے <span class=\"allah-name\">اللہ</span> پر بھروسہ ہونے لگتا ہے۔"
        },
        {
            id: 13,
            text: "ہر نعمت <span class=\"allah-name\">اللہ</span> کی ہے ۔ اگر کوئی یہ احساس رکھے تو اس کو <span class=\"allah-name\">اللہ</span> سے بڑھ کر کوئی محبوب نہیں ہو سکتا ہے۔"
        },
        {
            id: 14,
            text: "جو <span class=\"allah-name\">اللہ</span> کا علم ہے وہی تمہارا نظریہ وہی تمہاری نظر بن جانا چاہئے۔ تمہیں زیادہ محنت نہیں کرنی ہے، بس تمہارے باطن کے احساس کو بدلنا ہے۔"
        },
        {
            id: 15,
            text: "علم کی نظر سے دیکھنے کو بصیرت کہتے ہیں۔ علم کی نظر سے دیکھنا گویا دل کی آنکھ ہے۔"
        },
        {
            id: 16,
            text: "قرآن میں ذکر علی الدوام کی اہمیت اتنی بیان کی گئی ہے تو اس کے حصول کا طریقہ بھی بتادیا گیا ہے۔ <span class=\"malfooz-ayat\">﴿الرَّحْمٰنُ فَاسْئَلْ بِهٖ خَبِيْرًا﴾</span> <span class=\"malfooz-note\">(الفرقان : ۵۹) (رحمن کے بارے میں کسی با خبر سے پوچھو )</span>"
        },
        {
            id: 17,
            text: "عارف جب قرآن پڑھتا ہے تو اس پر ایمانی خوشیاں طاری ہوتی ہیں، <span class=\"allah-name\">اللہ</span> کرے ہم سب کے دلوں پر بھی ان خوشیوں کا نزول ہو۔"
        },
        {
            id: 18,
            text: "کلمہ طیبہ پڑھنے سے دل میں سکون راحت اور ٹھنڈک طاری ہوتی ہے۔"
        },
        {
            id: 19,
            text: "<span class=\"allah-name\">اللہ</span> کے علم کا کمال ہے کہ چیز دیکھنے سے پہلے دیکھے بغیر، اس چیز کو جانتا ہے اور <span class=\"allah-name\">اللہ</span> ہی بالذات عالم ہے۔"
        },
        {
            id: 20,
            text: "<span class=\"allah-name\">اللہ</span> تعالیٰ کا شکر ہے کہ اس نے ہم کو علم صحیح کی دولت سے سرفراز فرمایا۔ اب اس علم صحیح کو عمل میں لاکر خوب باطن کو پاک کرو۔"
        },
        {
            id: 21,
            text: "<span class=\"allah-name\">اللہ</span> تعالیٰ سے دعا ہے کہ جو کچھ تو نے علم صحیح عطا کیا ہے ، اس علم کو محل یقین پر بٹھا ۔ واسطہ <span class=\"prophet-name\">محمد</span> ﷺ کا۔"
        },
        {
            id: 22,
            text: "حقدار کو حق دینا انصاف کہلاتا ہے۔"
        },
        {
            id: 23,
            text: "سالکین کا مقصد پہلے سے ہی متعین ہے کہ وہ <span class=\"allah-name\">اللہ</span> والے بننا ۔"
        },
        {
            id: 24,
            text: "ہم سالکین کا کام ہی یہی ہے کفر، شرک، نفاق، ارتداد سے ظاہر کے ساتھ باطن کو بھی پاک کرے۔"
        },
        {
            id: 25,
            text: "باطن سے شرک جتنا دور ہو گا اتنی ہی قربت حق ملے گی ۔"
        },
        {
            id: 26,
            text: "شرک گندگی ہے اور <span class=\"allah-name\">اللہ</span> گندگی کو پسند نہیں کرتا۔"
        },
        {
            id: 27,
            text: "گندے قلب میں <span class=\"allah-name\">اللہ</span> کی تجلی نہیں ہوتی ۔"
        },
        {
            id: 28,
            text: "مخلوق کی نفی کرنے والے ملحدین کہلاتے ہیں اور یہ کفر ہے۔"
        },
        {
            id: 29,
            text: "ہم کسی درجے میں بھی مخلوق کی نفی نہیں کر سکتے ۔"
        },
        {
            id: 30,
            text: "راہ توحید کے عمل میں ہمیشہ مصروف و مگن رہنا۔"
        },
        {
            id: 31,
            text: "شرک و نفاق کی گندگیوں کو دور کرنے کے لئے توحید پر عمل پیرا ہونا ضروری ہے۔"
        },
        {
            id: 32,
            text: "سلوک میں کاہلی و نادانی کی سزا درجات سے محرومی ہے۔"
        },
        {
            id: 28,
            text: "عزت کسے کہتے ہیں؟ مصداق کیا ہے۔۔؟ کچھ ہونے کا نام عزت ہے۔ نہ ہونے کا نام ذلت ہے۔ <span class=\"malfooz-ayat\">﴿يَآ أَيُّهَا الَّذِيْنَ اٰمَنُوْٓا أَنْتُمُ الْفُقَرَآءُ إِلَى اللّٰهِ﴾</span> <span class=\"malfooz-note\">(القرآن)</span>"
        },
        {
            id: 29,
            text: "ہمیشہ کے لئے کوئی چیز ہونا ہی حقیقی عزت ہے۔"
        },
        {
            id: 30,
            text: "مَالِكُ الْمُلْكِ اگر تم کو ائے میرے پیارے کہے تو یہ کتنی بڑی عزت ہے۔۔؟ مفت میں <span class=\"allah-name\">اللہ</span> تعالی یہ نعمتیں سرفراز کر رہا ہے اس کی قدر کرو۔"
        },
        {
            id: 31,
            text: "<span class=\"allah-name\">اللہ</span> ایسا داتا ایسا جواد ہے بن مانگے ، بے پوچھے ہی دیتا چلا جاتا ہے، نوازتا چلا جاتا ہے۔"
        },
        {
            id: 32,
            text: "بے قوتی ، بے ثبوتی، بے وجودی ذلت ہے اور اس کا احساس کرنا عبادت ہے۔"
        },
        {
            id: 33,
            text: "تڑپ کر جو دعا مانگی جاتی ہے فوراً قبول ہوتی ہے۔"
        },
        {
            id: 34,
            text: "دعا کی قبولیت کی کیا شرائط ہیں۔۔؟<br>۱. استحضار (یعنی جس سے مانگ رہے ہیں اس کو اپنے پاس، اپنے سامنے پانا)<br>۲. اضطرار (تڑپ)<br>۳. واسطہ (وسیلہ)"
        },
        {
            id: 35,
            text: "اشرف علی تھانوی کہتے ہیں ، اگر مرید دعا میں پیر کا واسطہ دیتا ہے تو اس نے حق میں کبریت احمر سے ( یعنی فوراً قبول ہوتی ہے )"
        },
        {
            id: 36,
            text: "جب تم <span class=\"allah-name\">اللہ</span> کی پسند کو اہمیت نہیں دو گے تو <span class=\"allah-name\">اللہ</span> تمہاری پسند اور دعا کو کیوں اہمیت دے گا ۔ ؟"
        },
        {
            id: 37,
            text: "<span class=\"allah-name\">اللہ</span> ہر آن ہم کو زندگی و حیات سے مالا مال کر رہا ہے۔ اس لئے حضور اکرم ﷺ ہم کو یہ دعا سکھائے: <span class=\"malfooz-ayat\">اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَآ أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ</span>"
        },
        {
            id: 38,
            text: "خود سے گذر و حق کو پاؤ۔"
        },
        {
            id: 39,
            text: "کمالات الہی کو پانے میں خود کو گم کرو۔"
        },
        {
            id: 40,
            text: "اپنے آپ کو خود کرنے والے کے احساس سے آزاد کرو کہ سب کچھ <span class=\"allah-name\">اللہ</span> سے ہے، تب قرب نصیب ہوگا ۔"
        },
        {
            id: 41,
            text: "جو ظاہر ہے اس کو پاؤ ۔ <span class=\"malfooz-ayat\">﴿هُوَ الظَّاهِرُ﴾</span>"
        },
        {
            id: 42,
            text: "ہر چیز <span class=\"allah-name\">اللہ</span> کی ہے ہماری نہیں ہے بولنے میں ہمارا کیا جاتا ہے۔<br><span class=\"poetry-lines\">میرا مجھ میں کچھ بھی ناہی ، جو کچھ ہے سو تیرا<br>تیرا تجھ کو سونپا تو کیا جاتا ہے میرا</span>"
        },
        {
            id: 43,
            text: "مخلوق میں جو بھی خوبی ہے وہ مخلوق کی اپنی نہیں بلکہ <span class=\"allah-name\">اللہ</span> عطا کرتا ہے۔"
        },
        {
            id: 44,
            text: "<span class=\"allah-name\">اللہ</span> جیسا ہے ویسا ہی پانا ، یہ طریقت میں <span class=\"allah-name\">اللہ</span> کا ہوتا ہے۔ <span class=\"malfooz-ayat\">اٰمَنْتُ بِاللّٰهِ كَمَا هُوَ بِأَسْمَآئِهٖ وَصِفَاتِهٖ</span>"
        },
        {
            id: 45,
            text: "<span class=\"allah-name\">اللہ</span> ہی کائنات میں نافع وضار ہے جتنا سمجھ پائیں گے، اتنا ہی ایمان مضبوط ہوگا۔"
        },
        {
            id: 46,
            text: "ہمارے ساتھ آگے کیا ہونے والا ہے ہم کیا کہہ سکتے ہیں ( یعنی <span class=\"allah-name\">اللہ</span> ہی کو غیب کا علم ہے )"
        },
        {
            id: 47,
            text: "<span class=\"allah-name\">اللہ</span> سے محبت و خوف کا دعوی کرنے والا، تنہائیوں میں اپنے اعمال کو اور قبر کو یاد کر کے روتا ہے۔"
        },
        {
            id: 48,
            text: "تقابل کر کے دیکھو وہ کون ہے جو تم کو <span class=\"allah-name\">اللہ</span> سے بڑھ کر محبت کرتا ہے؟"
        },
        {
            id: 49,
            text: "ایک ماں کو جیسا اپنی اولاد کے بارے میں احساس ہے اس سے ستر (70) گنا بڑھ کر <span class=\"allah-name\">اللہ</span> کو اپنے بندوں کا خیال ہے۔"
        },
        {
            id: 50,
            text: "حضور ﷺ بھی اپنی امت سے شدید محبت کرتے ہیں۔ ایک مرتبہ حضور جنگل میں جا کر پھوٹ پھوٹ کر رونے لگے، <span class=\"allah-name\">اللہ</span> تعالیٰ جبریل علیہ السلام کو بھیجے کہ پوچھو میرے حبیب کیوں رو رہے ہیں؟ حضور ﷺ جبریل کو فرمائے کہ میری امت۔"
        },
        {
            id: 51,
            text: "<span class=\"allah-name\">اللہ</span> تعالیٰ صاف سنا دیے <span class=\"malfooz-ayat\">﴿اَللّٰهُ وَلِيُّ الَّذِيْنَ اٰمَنُوْا﴾</span> (<span class=\"allah-name\">اللہ</span> ایمان والوں کا دوست ہے) اس کی علامت کیا ہے؟ <span class=\"malfooz-ayat\">﴿يُخْرِجُهُمْ مِّنَ الظُّلُمَاتِ إِلَى النُّوْرِ﴾</span> (وہ ان کو (مومنوں) کو اندھیروں سے نور کی طرف لاتا ہے) یعنی اگر برائی سے اچھائی کی طرف لوٹ رہے ہیں تو بڑی اچھی بات ہے۔"
        },
        {
            id: 52,
            text: "حضور ﷺ صاف انداز میں بتا دیے <span class=\"malfooz-ayat\">اَنْتَ مَعَ مَنْ أَحْبَبْتَ</span> (قیامت کے دن) تم ان ہی کے ساتھ ہو گے جس سے تم محبت کرتے ہو۔"
        },
        {
            id: 53,
            text: "تم سو جاتے ہو <span class=\"allah-name\">اللہ</span> تمہاری حفاظت کرتا ہے۔"
        },
        {
            id: 54,
            text: "<span class=\"allah-name\">اللہ</span> ایسے طریقے سے ہماری حفاظت کرتا ہے ہم کو احساس تک نہیں ہوتا ۔"
        },
        {
            id: 55,
            text: "<span class=\"allah-name\">اللہ</span> ہمیں چلا رہا ہے، کھلا رہا پلا رہا ہے، ہماری ہر حاجت پوری کر رہا ہے۔"
        },
        {
            id: 56,
            text: "<span class=\"allah-name\">اللہ</span> یہ جانتا ہے کہ میرے سوا اس بندے کا کوئی نہیں ہے کون ہے جو میرے سوا اس کی حاجات پوری کرے۔۔؟ تو یہ <span class=\"allah-name\">اللہ</span> کی محبت ہے۔"
        },
        {
            id: 57,
            text: "اپنے باطن کو خود سے خالی اتنا کرو کہ حق کے کمالات کا مکمل ظہور ہو جائے۔"
        },
        {
            id: 58,
            text: "تمام کمالات <span class=\"allah-name\">اللہ</span> کے ہیں مخلوق کا کچھ بھی نہیں۔ یہ جو ہم اپنے سمجھ رہے ہیں ، یہ جھوٹ ہے، تو جھوٹ سے توبہ کرو۔"
        },
        {
            id: 59,
            text: "یہ ہمارا جسم پنجرہ ہے اسے کبھی بھی خالی کرنا ہے۔ اب ہم اس پنجرے کو سنوارنے میں پوری توانائیاں صرف کر رہے ہیں۔ مگر باطن کے تعلق سے غافل ہیں۔"
        },
        {
            id: 60,
            text: "یہ ساری کائنات <span class=\"allah-name\">اللہ</span> کے اسماء وصفات کی آئینہ ہے۔"
        },
        {
            id: 61,
            text: "<span class=\"allah-name\">اللہ</span> نے ہمارے جسم میں روح پھونکا تو تمام اعضاء و جوارح کام کرنا شروع کر دیئے۔"
        },
        {
            id: 62,
            text: "روح نہیں تو بات کرنا ، چلنا ، دیکھنا وغیرہ کچھ بھی نہیں ہوتا تو اصلیت ہماری مردہ پن ہے۔"
        },
        {
            id: 63,
            text: "اپنے آپ کو مردہ بولنے سے یا سمجھنے سے کتراتے کیوں ہو۔۔؟"
        },
        {
            id: 64,
            text: "سرکار دو جہاں ﷺ ارذل العمری (بڑھاپے) سے <span class=\"allah-name\">اللہ</span> کی پناہ مانگتے تھے۔"
        },
        {
            id: 65,
            text: "<span class=\"allah-name\">اللہ</span> والے ہمیشہ موت کے لئے تیار رہتے ہیں، توبہ واستغفار کرتے ، <span class=\"allah-name\">اللہ</span> کی محبت میں غرق رہتے ہیں۔"
        },
        {
            id: 66,
            text: "عزت اچھائیوں کی ہوتی ہے ، کمالات کی ہوتی ہے، تو سارے کمالات رکھنے والا <span class=\"allah-name\">اللہ</span> ہے، اس لئے ساری تعریفیں اس کے لئے ہیں۔"
        },
        {
            id: 67,
            text: "اپنی ہر حاجت اور ہر معاملہ کو <span class=\"allah-name\">اللہ</span> کے سپرد کرنا چاہئے ۔ <span class=\"malfooz-ayat\">وَاعْتَصِمُوْا بِاللّٰهِ</span>"
        },
        {
            id: 68,
            text: "سرکار دو عالم ﷺ اپنے ہر امتی کو ہدایت پر دیکھنا پسند فرماتے ہیں۔"
        },
        {
            id: 69,
            text: "حشر میں ہر کوئی آپ ﷺ کی شان دیکھ کر رشک کرے گا ۔ واہ واہ کیا شان ہے !!"
        },
        {
            id: 70,
            text: "میدان حشر وہ۔۔ جہاں سرکار اپنی پوری شان کے ساتھ جلوہ گر ہوں گے۔"
        },
        {
            id: 71,
            text: "صحابہ کرام سرکار کی صحبت میں ایمان سیکھتے تھے۔"
        },
        {
            id: 72,
            text: "مومن کس کو کہتے ہیں؟ جس کا تعلق <span class=\"allah-name\">اللہ</span> سے درست ہو (وہ مومن ہے)۔"
        },
        {
            id: 73,
            text: "مومن <span class=\"allah-name\">اللہ</span> پر جیسا اعتماد کرتا ہے، <span class=\"allah-name\">اللہ</span> ویسی ہی شان کے ساتھ مدد کرتا ہے۔"
        },
        {
            id: 74,
            text: "ہم کو اپنے جیب پر جتنا بھروسہ ہے، <span class=\"allah-name\">اللہ</span> پر اتنا بھروسہ نہیں ہے، الا ماشاء <span class=\"allah-name\">اللہ</span>"
        },
        {
            id: 75,
            text: "یکسو ہو جاؤ ، <span class=\"allah-name\">اللہ</span> کے ساتھ حنیف ہو جاؤ۔"
        },
        {
            id: 76,
            text: "کوئی (شخص) صادقین کی صحبت میں بیٹھ کر ایمان سیکھتا ہے تو ایمان میں ترقی ہونے لگتی ہے۔"
        },
        {
            id: 77,
            text: "ایسے پر بھروسہ کرو جسے موت نہیں ۔ <span class=\"malfooz-ayat\">فَتَوَكَّلْ عَلَى الْحَيِّ الَّذِيْ لَا يَمُوْتُ</span>"
        },
        {
            id: 78,
            text: "ایمان کی نعمت (ثمرات) یہاں دنیا میں ہم کو ملے تو آخرت میں بھی یقیناً ملے گی۔"
        },
        {
            id: 79,
            text: "ہم کو ایمان سیکھنے کی ضرورت ہے (ایمان تحقیقی کی ضرورت ہے) کلمہ طیبہ سیکھنے کی ضرورت ہے۔"
        },
        {
            id: 80,
            text: "کلمہ لَآ إِلٰهَ إِلَّا <span class=\"allah-name\">اللّٰهُ</span> کے اندر علم ہے، جس کو <span class=\"allah-name\">اللہ</span> سکھنے کا حکم دیتا ہے، <span class=\"malfooz-ayat\">﴿فَاعْلَمْ أَنَّهٗ لَآ إِلٰهَ إِلَّا اللّٰهُ﴾</span> (القرآن)"
        },
        {
            id: 81,
            text: "مشرک مصیبت یا حاجت کے وقت مخلوق سے مدد مانگتا ہے، ظاہر نظر آنے والی طاقت کے سامنے جھک جاتا ہے اور مومن <span class=\"allah-name\">اللہ</span> کا دامن تھامتا ہے۔"
        },
        {
            id: 82,
            text: "<span class=\"allah-name\">اللہ</span> سے اپنے معاملات کو اتنا استوار کرو کہ چھوٹی چھوٹی ضرورتیں بھی تم کو <span class=\"allah-name\">اللہ</span> سے ملتی ہوئی محسوس کر سکو۔"
        },
        {
            id: 83,
            text: "<span class=\"allah-name\">اللہ</span> زمین و آسمان کا نور ہے۔ <span class=\"malfooz-ayat\">﴿اَللّٰهُ نُوْرُ السَّمٰوَاتِ وَالْأَرْضِ﴾</span> (القرآن) تو نور کیا ہے۔؟ سمجھو۔۔!!"
        },
        {
            id: 84,
            text: "خود کو چھپا کر سب کو ظاہر کرتا ہے۔ حق تعالیٰ اگر خود کو دکھانا ہوتا تو پھر کوئی دوسرا نہیں ہوتا۔"
        },
        {
            id: 85,
            text: "کسی بھی مخلوق کو ہم <span class=\"allah-name\">اللہ</span> نہیں کہہ سکتے مخلوق مخلوق ہے، <span class=\"allah-name\">اللہ</span> <span class=\"allah-name\">اللہ</span> ہے۔"
        },
        {
            id: 86,
            text: "<span class=\"allah-name\">اللہ</span> فرماتا ہے اے آدم کی اولاد میں نے ہر شئے تیرے لئے پیدا کی ہے اور مجھے پیدا کیا ہے میرے لئے ۔ <span class=\"malfooz-ayat\">يَابْنَ آدَمَ خَلَقْتُ كُلَّ أَشْيَاءَ لِأَجَلِكَ وَخَلَقْتُكَ لِأَجَلِيْ</span>"
        },
        {
            id: 87,
            text: "جہاں جہاں مخلوق ہے، وہاں وہاں حق تعالیٰ ہونے کا پتہ دے رہے ہیں، <span class=\"malfooz-ayat\">﴿هُوَ الْأَوَّلُ وَالْاٰخِرُ وَالظَّاهِرُ وَالْبَاطِنُ﴾</span> (القرآن) ترجمہ : وہی اول وہی آخر وہی ظاہر و ہی باطن ۔"
        },
        {
            id: 88,
            text: "حضور ﷺ بھی فرماتے ہیں: <span class=\"malfooz-ayat\">اَللّٰهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، اَللّٰهُمَّ أَنْتَ الْاٰخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ ، اَللّٰهُمَّ أَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ ، اَللّٰهُمَّ الْبَاطِنُ فَلَيْسَ دُوْنَكَ شَيْءٌ</span><br>ترجمہ : یا <span class=\"allah-name\">اللہ</span> تو ہی اول ہے پس تجھ سے پہلے کوئی نہیں، یا <span class=\"allah-name\">اللہ</span> تو ہی آخر ہے پس تیرے بعد کوئی نہیں، یا <span class=\"allah-name\">اللہ</span> تو ہی ظاہر ہے پس تیرے اوپر کوئی نہیں، یا <span class=\"allah-name\">اللہ</span> تو ہی آخر (باطن) ہے پس تیرے بعد (نیچے) کوئی نہیں۔"
        },
        {
            id: 89,
            text: "علم ایک سمندر ہے اور علم جب کھلے گا تو باتیں سمجھ میں آتی جائے گی۔"
        },
        {
            id: 90,
            text: "تم کو تمہاری اصلیت جاننے میں کیا برائی ہے۔۔؟ تمہاری اصلیت کیا ہے۔۔؟ تم خود سے کچھ نہیں ہو۔"
        },
        {
            id: 91,
            text: "ہرا رنگ نفسِ مطمئنہ کی علامت ہے یا اشارہ ہے۔"
        },
        {
            id: 92,
            text: "جو <span class=\"allah-name\">اللہ</span> سے مطمئن رہنے کا عادی ہو وہی ہرا رنگ والا ہے۔ وہی قادری ہوا۔ اب چاہے ہری ٹوپی ،شملا ، پہنو نہ پہنو۔۔۔ وہی قادری ہوا۔ <span class=\"malfooz-ayat\">﴿صِبْغَةَ اللّٰهِ وَمَنْ أَحْسَنُ مِنَ اللّٰهِ صِبْغَةً﴾</span> (ترجمہ: <span class=\"allah-name\">اللہ</span> کا رنگ اور <span class=\"allah-name\">اللہ</span> کے رنگ سے حسیں و بہتر کون ہے) (القرآن)"
        },
        {
            id: 93,
            text: "عارف جس کی نگاہوں سے شفا ملتی ہے، وہ جن نگاہوں سے حق تعالیٰ کو دیکھتا ہے۔"
        },
        {
            id: 94,
            text: "یا الہی میں مگن رہو، یہ کیفیت دادا سرکار حضور غوث اعظم کے باطن کی ہے۔"
        },
        {
            id: 95,
            text: "اولیاء <span class=\"allah-name\">اللہ</span> کے پاس فنا فی الشیخ اور تصور شیخ کی بڑی اہمیت ہے۔"
        },
        {
            id: 96,
            text: "نفس امارہ کی پسندیدہ غذا ذکر الہی نہیں ہے، ہاں نفس مطمئنہ کی ہے۔"
        },
        {
            id: 97,
            text: "یہ دنیا ہے یہاں اسباب سے سب ہوتا ہے۔"
        },
        {
            id: 98,
            text: "مجاہدہ کرے تو ہدایت ہے <span class=\"malfooz-ayat\">﴿وَالَّذِيْنَ جَاهَدُوْا فِيْنَا لَنَهْدِيَنَّهُمْ سُبُلَنَا﴾</span> (ترجمہ: اور وہ لوگ جو ہم میں مجاہدہ کرتے ہیں ہم ضرور بہ ضرور ہدایت کے راستے کھول دیتے ہیں ) ۔ مجاہدہ نہیں تو کچھ بھی نہیں۔"
        },
        {
            id: 99,
            text: "ہدایت کا مرکز <span class=\"prophet-name\">محمد</span> ﷺ ہیں۔"
        },
        {
            id: 100,
            text: "اپنے قلب کی حفاظت کرو。"
        },
        {
            id: 101,
            text: "کسی مومن کا دل مت دکھاؤ کیونکہ مومن کا قلب <span class=\"allah-name\">اللہ</span> کا عرش ہوتا ہے۔"
        },
        {
            id: 102,
            text: "ہم آپس میں گفتگو کرتے ہیں تو شیطان اور نفس تاک میں رہتے ہیں کہ کچھ نہ کچھ زبان سے ایسا لفظ نکلے کہ آپس میں اختلافات ہو جائیں۔"
        },
        {
            id: 103,
            text: "مردہ دلوں کو زندہ کرنا یہ حضور غوث اعظم رضی <span class=\"allah-name\">اللہ</span> عنہ کی کرامت ہے۔"
        },
        {
            id: 104,
            text: "حقیقی کرامت مردے زندہ ہونا نہیں ہے بلکہ دل زندہ ہونا ہے۔"
        },
        {
            id: 105,
            text: "ذکر دوام کی توفیق بھی <span class=\"allah-name\">اللہ</span> تعالی اس کو دیتا ہے جو اطاعت الہی میں ہمہ تن مصروف رہتا ہے، توبہ واستغفار اس کا شیوہ ہو جاتا ہے۔"
        },
        {
            id: 106,
            text: "ہر عمل میں اخلاص برقرار رکھو، بغیر اخلاص کے کوئی عمل قابل قبول نہیں۔"
        },
        {
            id: 107,
            text: "عذاب قبر برحق ہے جو قیامت تک جاری رہتا ہے۔"
        },
        {
            id: 108,
            text: "نیک اعمال والے بندے کی قبر میں جنت کی کھڑکی کھول دی جاتی ہے۔ بد اعمال والے بندے کی قبر میں دوزخ کی کھڑکی کھول دی جاتی ہے۔ یہ سب عالم برزخ میں ہوتا ہے۔"
        },
        {
            id: 109,
            text: "عرش کے اوپر سے تحت الثریٰ تک عوالم کو تین حصوں میں تقسیم کیا گیا ہے۔"
        },
        {
            id: 110,
            text: "عارف کا ایک مرتبہ کلمہ پڑھنا، زاہد عمر بھر کلمہ پڑھنے پر بھی برابری نہیں کر سکتا۔"
        },
        {
            id: 111,
            text: "کلمہ طیبہ کے ذکر میں مفہوم کو مد نظر رکھنا ضروری ہے۔ بغیر سمجھے بوجھے عمل کرنے سے صحیح فائدہ حاصل نہیں ہوتا ۔"
        },
        {
            id: 112,
            text: "گھٹلیوں کو کون پھاڑتا ہے۔؟ گھٹلیوں کو پھاڑ کر نرم کونپل باہر نکالنے والا مولا کیا تمہیں چھپر پھاڑ کر نہیں دے سکتا ۔ ۔ ؟ <span class=\"malfooz-ayat\">﴿فَالِقُ الْحَبِّ وَالنَّوٰى﴾</span> (القرآن)"
        },
        {
            id: 113,
            text: "تم کاروبار کرتے ہو کاروبار میں برکت دینے والا <span class=\"allah-name\">اللہ</span> ہے۔"
        },
        {
            id: 114,
            text: "ہم دکان کرتے ہیں ، خود سے کہاں سے کرتے ہیں۔۔؟ <span class=\"allah-name\">اللہ</span> کے کرانے سے کرتے ہیں۔"
        },
        {
            id: 115,
            text: "دھان ، پانی ، ہواؤں کی صورتوں میں <span class=\"allah-name\">اللہ</span> ہی فائدہ دیتا ہے۔"
        },
        {
            id: 116,
            text: "<span class=\"allah-name\">اللہ</span> کے طالب کو <span class=\"allah-name\">اللہ</span> ملنا چاہئے ۔"
        },
        {
            id: 117,
            text: "<span class=\"allah-name\">اللہ</span> جو دیتا ہے کون دے سکتا ہے۔"
        },
        {
            id: 118,
            text: "کرامتوں کے طلبگار نہیں رہنا بلکہ طلب حق میں رہنا چاہیئے۔"
        },
        {
            id: 119,
            text: "<span class=\"allah-name\">اللہ</span> کا رکھنے والا اگر غیر کا طالب ہو تو اس سے زیادہ ذلیل اور کون ہو سکتا ہے۔"
        },
        {
            id: 120,
            text: "کسی بھی ذریعے سے <span class=\"allah-name\">اللہ</span> جو دیتا ہے اس پر راضی رہنا چاہیئے ۔"
        },
        {
            id: 121,
            text: "تم ذکر کرتے ہو تو دیکھنے والوں کی نظر میں تم کاروبار کرنے والے ہو، نوکری کرنے والے ہو، اسباب کو استعمال کر رہے ہو لیکن تم اندر سے <span class=\"allah-name\">اللہ</span> والے ہو۔"
        },
        {
            id: 122,
            text: "سبب کے طور پر کسی مخلوق کو استعمال کر رہے ہو تو وہ برا نہیں ہے ، بلکہ عین شریعت ہے۔ اسباب چاہے کتنے بھی ہوں دینے والا صرف <span class=\"allah-name\">اللہ</span> ہے۔"
        },
        {
            id: 123,
            text: "انسان کے اندر زمین ، پہاڑ ، دریا ، جماد و نبات سب ہے گویا ایک عالم اصغر ہے۔ اس میں مکہ اور مدینہ بھی ہے۔"
        },
        {
            id: 124,
            text: "متبرک راتوں میں جاگنا اس لئے ہے کہ <span class=\"allah-name\">اللہ</span> کو راضی کیا جائے ۔"
        },
        {
            id: 125,
            text: "بندہ اگر چاہتا ہے تو اہل ایمان کی صحبت میں رہ کر ایمان کے ایک ایک درجے پر ترقی کر سکتا ہے۔"
        },
        {
            id: 126,
            text: "بندے کو کم از کم ایسا درجہ تو حاصل ہو کہ اسے یہ احساس ہو جائے کہ میرے لئے صرف اور صرف <span class=\"allah-name\">اللہ</span> کافی ہے، مجھے کسی کی ضرورت نہیں۔"
        },
        {
            id: 127,
            text: "اگر مگر ہمارے اندر سے ختم ہو کر یہ کیفیت حاصل ہو کہ <span class=\"allah-name\">اللہ</span> میرے لئے کافی ہے۔ <span class=\"malfooz-ayat\">حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيْلُ</span>"
        },
        {
            id: 128,
            text: "ہر دم آخرت کی فکر کرو。"
        },
        {
            id: 129,
            text: "جو لوگوں سے اچھے اخلاق سے پیش آتا ہے اسے اجر ملتا ہے۔ میٹھی گفتگو کرنے سے بھی اجر ملتا ہے۔"
        },
        {
            id: 130,
            text: "آخرت میں ایک ایک نیکی کو بندہ تڑپ جائے گا۔"
        },
        {
            id: 131,
            text: "یوں تو عام طور پر لوگ <span class=\"allah-name\">اللہ</span> سے اس لئے نہیں ڈرتے کہ <span class=\"allah-name\">اللہ</span> نظر نہیں آرہا ہے۔ <span class=\"allah-name\">اللہ</span> کی ذات سے ڈرنا مومن کی زندگی کا ایک حصہ ہونا چاہئے ۔"
        },
        {
            id: 132,
            text: "جو متقی نہیں اس کو سوائے نقصان کے کچھ بھی نہیں ۔"
        },
        {
            id: 133,
            text: "کائنات کی حرکت <span class=\"allah-name\">اللہ</span> کے حرکت دینے سے ہے۔"
        },
        {
            id: 134,
            text: "ہماری زندگی کا ہر ہر پہلو اسی کے کرم سے ہے۔"
        },
        {
            id: 135,
            text: "ہمارے گناہ اسقدر ہیں کہ ہم کو اٹھا کر اس کی رحمت سے دور پھینک دیں۔ <span class=\"malfooz-ayat\">أَسْتَغْفِرُ اللّٰهَ الْعَظِيْمَ</span>"
        },
        {
            id: 136,
            text: "<span class=\"allah-name\">اللہ</span> اگر ہم سے ناراض ہوگا تو کیا ہوگا۔۔؟ اس کے محبوبین کے گروہ سے ہم نکل جائیں گے۔"
        },
        {
            id: 137,
            text: "<span class=\"allah-name\">اللہ</span> کی حفاظت کے دائرے میں ہیں ہم، اس لئے کوئی چیز ہمیں نقصان نہیں پہنچارہی ہے۔"
        },
        {
            id: 138,
            text: "سچی توبہ اور گناہوں سے بخشے جانے کی یہ علامت ہے کہ اس (بندے) کے دل میں گناہوں سے نفرت پیدا ہوتی ہے۔"
        },
        {
            id: 139,
            text: "ہم لوگ غفلت میں ہیں ، سستی کر رہے ہیں، عذاب الہی اس کو کہتے ہیں۔"
        },
        {
            id: 140,
            text: "عذاب الہی سے بچنے کے لئے <span class=\"allah-name\">اللہ</span> کی خشیت، <span class=\"allah-name\">اللہ</span> کا ڈر ہونا چاہئے ۔"
        },
        {
            id: 141,
            text: "جو دنیا میں ڈر والی زندگی بسر کیا وہ آخرت میں سکون میں رہے گا اور جو دنیا میں بے ڈرے بسر کرے وہ آخرت میں خسارے میں رہے گا۔"
        },
        {
            id: 142,
            text: "<span class=\"allah-name\">اللہ</span> والوں کے حالات کو دیکھنا اور پھر اپنا محاسبہ کرنا۔"
        },
        {
            id: 143,
            text: "<span class=\"allah-name\">اللہ</span> تعالی امت <span class=\"prophet-name\">محمدیہ</span> ﷺ کو بخشنے کے جو انتظامات کئے ہیں ، ان میں شب برات ، شب قدر، جمعہ کی شب اور ہر شب کا آخری وقت وغیرہ ہیں۔ اس کی قدر کرنا چاہئے۔"
        },
        {
            id: 144,
            text: "لوگ جاگتے ہوئے ہوٹلوں میں وقت ضائع کرتے ہیں، اس سے کیا فائدہ ؟ اس سے بہتر ہے سوجائیں۔"
        },
        {
            id: 145,
            text: "جاگنے سے مراد جاگ کر عبادت کرنا ہے۔"
        },
        {
            id: 146,
            text: "بندے کے کسی کام کا <span class=\"allah-name\">اللہ</span> ذمہ دار نہیں <span class=\"malfooz-ayat\">﴿لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ﴾</span>"
        },
        {
            id: 147,
            text: "اس کم مدت چھوٹی دنیا کی چھوٹی خواہش کی خاطر آخرت کو برباد مت کرو۔"
        },
        {
            id: 148,
            text: "کوشش کرنا کہ ہم <span class=\"allah-name\">اللہ</span> کے ان پسندیدہ بندوں میں شامل رہیں جن کے اندر ہمیشہ ذکر وفکر جاری وساری رہتا ہے۔"
        },
        {
            id: 149,
            text: "<span class=\"allah-name\">اللہ</span> کی معیت کا احساس ملائکہ کو بھی نہیں ہے۔ یہ <span class=\"allah-name\">اللہ</span> کی مہربانی ہے کہ انسان میں یہ احساس کی کیفیت رکھی ہے۔"
        },
        {
            id: 150,
            text: "توحید ہمارا سلوک ہے، توحید بندے کا مقام ہے اور بندے کی شان ہے۔"
        },
        {
            id: 151,
            text: "توحید یعنی <span class=\"allah-name\">اللہ</span> کو ایک ماننا۔ وحدہ سے توحید ہے۔ ایک قرار دینا، ایک کے ساتھ رہو جانا، یہ بندے کی شان ہے۔"
        },
        {
            id: 152,
            text: "سب میں رہ کر سب سے الگ تھلگ رہنا، جب بھی بلاوا (موت) آئے لبیک کہنا۔ (یعنی اس طرح موت اور آخرت کے لئے تیار رہنا چاہئے)"
        },
        {
            id: 153,
            text: "ہم اہل طریق ہیں، پوری زندگی شریعت و طریقت پر چلنا چاہئے۔"
        },
        {
            id: 154,
            text: "<span class=\"allah-name\">اللہ</span> کسی کو دے کر سنبھالتا ہے کسی کو نہ دے کر سنبھالتا ہے، یہ <span class=\"allah-name\">اللہ</span> کی مشیتیں ہیں۔"
        },
        {
            id: 155,
            text: "ہم اہل باطن ہیں ، <span class=\"allah-name\">اللہ</span> والوں کے ساتھ ہیں۔ جس طرح اہل شرع کی ذمہ داریاں ہیں ہم پر اس کے علاوہ باطن کی بھی ذمہ داریاں ہیں۔"
        },
        {
            id: 156,
            text: "ہمیشہ اپنے باطن کو توحید ذکر وفکر میں مصروف رکھنا چاہئے ۔"
        },
        {
            id: 157,
            text: "جتنی شغل کی بساوٹ آئے گی اتنا ہی باطنی بیماریوں سے چھٹکارا ملے گا۔"
        },
        {
            id: 158,
            text: "<span class=\"allah-name\">اللہ</span> سے <span class=\"allah-name\">اللہ</span> کو مانگو، یہی سب سے بڑی دعا ہے۔"
        },
        {
            id: 159,
            text: "خدا کو پاؤ، اپنے میں (انفس میں) پا کر خدا کے بندے رہو، اس کے سچے بندے بنو، خدا تو وہ ہے جو ازل سے موجود ہے۔"
        },
        {
            id: 160,
            text: "مخلوق تو خود بھکاری (محتاج) ہے اس سے کیا مانگتے ہو۔ جو داتا ہے، کسی سے لیتا نہیں ہے، اس سے مانگو۔"
        },
        {
            id: 161,
            text: "جسم کا قبلہ کعبہ ہے اور قلب کا قبلہ <span class=\"allah-name\">اللہ</span> ہے، جسم کو کعبے کی طرف اور قلب کو حق تعالیٰ کی طرف کرنا چاہیئے ۔"
        },
        {
            id: 162,
            text: "جسم کعبے کی طرف اور قلب بازاروں میں، گھر میں کہیں اور ہے تو ایسی نماز پڑھنا مسخرہ پن ہے۔"
        },
        {
            id: 163,
            text: "تکبر انسان کو پورا ڈبو دیتا ہے۔"
        },
        {
            id: 164,
            text: "کسی بندے کے اس دنیا سے جانے سے کام نہیں رکتا، نظام <span class=\"allah-name\">اللہ</span> کا ہے۔"
        },
        {
            id: 165,
            text: "ربوبیت <span class=\"allah-name\">اللہ</span> کی ، فاعل وہ ، رازق وہ، اس لئے صرف <span class=\"allah-name\">اللہ</span> ہی پر بھروسہ کرو۔"
        },
        {
            id: 166,
            text: "<span class=\"allah-name\">اللہ</span> تعالی کی نشانیاں ہمارے ساتھ اس قدر موجود ہیں کہ <span class=\"allah-name\">اللہ</span> تعالیٰ کے ہمارے ساتھ موجود ہونے کا ہمیں یقین دلاتے ہیں۔"
        },
        {
            id: 167,
            text: "<span class=\"allah-name\">اللہ</span> تعالٰی ہماری ہر چھوٹی بڑی ضرورت کو پورا کرتے ہوئے ہمارے ساتھ ہے۔"
        },
        {
            id: 168,
            text: "ہر حرف کی شکل میں سیاہی ظاہر ہے ہم صرف حروف کی شکل میں سیاہی کو چھو سکتے ہیں، اسی طرح ہر صورت میں حق تعالی جلوہ گر ہیں۔"
        },
        {
            id: 169,
            text: "لوگ صورتوں میں اٹک کر رہ جاتے ہیں، اور جو صورت سے گذرا وہ حق کو پالیا۔"
        },
        {
            id: 170,
            text: "صورت کو قائم رکھنے والا کون ہے، یہ وجود کس کا ہے، یہ دیکھو غور کرو۔<br><span class=\"poetry-lines\">آئینہ خانہ بنا عالم صورت بیدم<br>لطف نظاره جاناناں مبارک باشد</span>"
        },
        {
            id: 171,
            text: "سچا مرید وہ ہے جو اپنے شیخ کی صورت میں بھی حق کو پائے۔"
        },
        {
            id: 172,
            text: "اہل <span class=\"allah-name\">اللہ</span> جو دیکھتے ہیں بصیرت سے دیکھتے ہیں، بصیرت سے حق کا مشاہدہ کرتے ہیں۔"
        },
        {
            id: 173,
            text: "<span class=\"malfooz-ayat\">أَنْ تَعْبُدَ اللّٰهَ كَأَنَّكَ تَرَاهُ</span> کے مصداق حق تعالیٰ کے جلوؤں کے شہود کے ساتھ عبادت کرتے ہیں۔"
        },
        {
            id: 174,
            text: "لوگ موت سے ڈرتے ہیں حالانکہ موت بہت پیاری چیز ہے، موت کے ساتھ حق تعالٰی کے وصال سے مالا مال ہونے کا موقع ملتا ہے۔ <span class=\"malfooz-ayat\">اَلْمَوْتُ جِسْرٌ يُوْصِلُ الْحَبِيْبَ إِلَى الْحَبِيْبِ</span> (موت ایک پل ہے جو ایک دوست کو دوسرے دوست سے ملاتا ہے)۔"
        },
        {
            id: 175,
            text: "ہماری اصلیت معدومیت ہے، ہم خود سے کچھ نہیں ۔ بلکہ حق تعالی کی عطا سے سب کچھ ہے۔"
        },
        {
            id: 176,
            text: "اگر ہم <span class=\"allah-name\">اللہ</span> کے ذکر و فکر سے غافل ہیں تو نفس کے ساتھ ہیں۔"
        },
        {
            id: 177,
            text: "اگر <span class=\"allah-name\">اللہ</span> کی مرضیات اور احکام سے غافل ہیں تو شیطان کے ساتھ ہیں۔"
        },
        {
            id: 178,
            text: "اگر گناہوں میں زندگی بسر ہو رہی ہے تو پکے شیطان کے دوست ہیں، سچی توبہ کرنا چاہیے۔"
        },
        {
            id: 179,
            text: "یہ <span class=\"prophet-name\">محمد</span> رسول <span class=\"allah-name\">اللہ</span> ﷺ کا احسان ہے کہ ہم کلمہ پڑھنے والے ہیں۔"
        },
        {
            id: 180,
            text: "کلمہ کا مطلب یہ ہے کہ جو کلمے کو پایا، سمجھا گویا وہ اپنے رب کو پایا، دنیا و آخرت کو پالیا۔"
        },
        {
            id: 181,
            text: "کلمے کے واسطے سے اس کا تعلق اپنے رب سے گہرا ہو جاتا ہے۔"
        },
        {
            id: 182,
            text: "کلمہ کی تعلیم صحیح معنوں میں جو حاصل کرتا ہے اسی آن وہ <span class=\"allah-name\">اللہ</span> والا بن جاتا ہے۔"
        },
        {
            id: 183,
            text: "<span class=\"allah-name\">اللہ</span> والا بنا یہ حضور اکرم ﷺ کا فیضان ہے۔"
        },
        {
            id: 184,
            text: "<span class=\"allah-name\">اللہ</span> تعالی امت کے اولیاء و علماء ربانیین کے ذریعے حضور اکرم ﷺ کے فیضان کو امت میں جاری کئے ہوئے ہیں۔"
        },
        {
            id: 185,
            text: "اولیاء کا فیضان جو ہم کو ملتا ہے دراصل وہ حضور ﷺ کا ہی فیضان ہے۔"
        },
        {
            id: 186,
            text: "پوری کائنات حضور ﷺ کے صدقے سے، حضور ﷺ کے نور سے تخلیق پائی ہے اور <span class=\"allah-name\">اللہ</span> تعالی اس تعلق سے قرآن مجید میں اشارہ فرمائے ہیں <span class=\"malfooz-ayat\">﴿وَمَآ أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِيْنَ﴾</span> (انبياء : 107)"
        },
        {
            id: 187,
            text: "آپ ﷺ <span class=\"allah-name\">اللہ</span> کی جانب سے، <span class=\"allah-name\">اللہ</span> کے بنانے سے کائنات کے لئے رحمت ہیں۔"
        },
        {
            id: 188,
            text: "آپ ﷺ کے ذریعے سے <span class=\"allah-name\">اللہ</span> نے کائنات کو قائم کیا، کائنات میں ہر ایک کو جو کچھ بھی ملتا ہے، تو آپ ﷺ کے وسیلے اور صدقے سے ملتا ہے۔"
        },
        {
            id: 189,
            text: "حضور ﷺ کائنات کی وہ واحد شخصیت ہیں کہ آپ کی حیات طیبہ کا ہر ہر پہلو احادیث و تاریخ میں درج و محفوظ ہیں۔"
        },
        {
            id: 190,
            text: "ہم کو یہ احساس رکھنا چاہئے کہ ہم <span class=\"prophet-name\">محمد</span> رسول <span class=\"allah-name\">اللہ</span> ﷺ کے نور سے ہیں۔ قرآن میں ارشاد ہے <span class=\"malfooz-ayat\">﴿وَاعْلَمُوْٓا أَنَّ فِيْكُمْ رَسُوْلَ اللّٰهِ﴾</span> (الحجرات: 07) (اور جان لو کہ تم میں <span class=\"allah-name\">اللہ</span> کے رسول ہیں)"
        },
        {
            id: 191,
            text: "<span class=\"allah-name\">اللہ</span> تعالیٰ نے آپ ﷺ کو اپنا ہی مظہر بنایا ہے۔ <span class=\"allah-name\">اللہ</span> ظاہر ہے اور حضور اکرم مظہر ہیں۔"
        },
        {
            id: 192,
            text: "جہاں جہاں <span class=\"allah-name\">اللہ</span> ظاہر ہے وہاں وہاں حضور اکرم ﷺ <span class=\"allah-name\">اللہ</span> کے مظہر ہیں جس کو فہم ملا ادراک کر سکتا ہے۔"
        },
        {
            id: 193,
            text: "ایمان سچا رہا، حضور ﷺ سے محبت اور پیروی سچی رہی تو ، قبر میں ہم حضور ﷺ کو پہچان لیں گے۔"
        },
        {
            id: 194,
            text: "اچھی طرح یاد رکھو! قبر برحق ہے، قبر کا عذاب برحق ہے، <span class=\"allah-name\">اللہ</span> کے نافرمان نہ بنو، تو عذاب سے محفوظ رہو گے۔"
        },
        {
            id: 195,
            text: "<span class=\"allah-name\">اللہ</span> کی نافرمانی اس کی بہت بڑی ناشکری ہے، <span class=\"allah-name\">اللہ</span> میٹھی نیند یا تو فجر کی نماز قضاء کر کے بہت بڑی ناشکری کرتے ہو۔"
        },
        {
            id: 196,
            text: "ناشکری والا جانور سانپ ہے، اس لئے ناشکری والا ہر عمل سانپ کی شکل میں قبر میں تم پر مسلط کر دیا جائے گا اسی لئے نمازیں قضاء مت کرو، حق تعالیٰ کی ناشکری مت کرو۔"
        },
        {
            id: 197,
            text: "جانے انجانے میں جو کچھ غلطیاں اور ناشکری ہوئی ہے اس سے سچے دل سے توبہ کرو۔"
        },
        {
            id: 198,
            text: "جھوٹ، غیبت نمیمت ، ماں باپ کی نافرمانی جیسے سارے گناہوں سے توبہ کرو۔"
        },
        {
            id: 199,
            text: "ہر چھوٹے ، بڑے گناہ سے بچو تو قبر جنت کا باغ بن جائے گا ورنہ دوزخ کا گڑھا ہو جائے گی۔"
        },
        {
            id: 200,
            text: "ایمان کو مضبوط اور پختہ بنانے کے لئے ، (<span class=\"allah-name\">اللہ</span> و رسول کی معرفت) پہچان والوں کے ساتھ رہنا چاہئے ۔"
        },
        {
            id: 201,
            text: "اپنے پیروں کی صحبت اختیار کرنی چاہئے تا کہ <span class=\"allah-name\">اللہ</span> رسول کی پہچان ملے ۔ اور <span class=\"allah-name\">اللہ</span> کے پسندیدہ بندے بن جائیں۔"
        },
        {
            id: 202,
            text: "<span class=\"allah-name\">اللہ</span> والوں کی صحبت سے یہی نعمت ملتی ہے کہ صحبت میں رہنے والا بھی <span class=\"allah-name\">اللہ</span> والا بن جاتا ہے۔"
        },
        {
            id: 203,
            text: "رسول <span class=\"allah-name\">اللہ</span> ﷺ تو ہر وقت ہمارے لئے مغفرت مانگ ہی رہے ہیں، کتنے پیارے رسول ہیں ، احساس کرو۔"
        },
        {
            id: 204,
            text: "ایمان اس وقت تک کامل نہیں ہوتا جب تک کہ <span class=\"allah-name\">اللہ</span> پر مکمل بھروسہ اور یقین حاصل نہ ہو جائے ۔"
        },
        {
            id: 205,
            text: "پروردگار عالم بندے کی جان سے بھی بڑھ کر اس کے قریب ہے، کبھی بندے سے دور نہیں ہوتا ۔ <span class=\"malfooz-ayat\">﴿نَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيْدِ﴾</span> (سورة ق : ١٦)"
        },
        {
            id: 206,
            text: "رب کے بندے کو رب پر اتنا اعتماد ہونا کہ جیسے صحابہ کرام رضی <span class=\"allah-name\">اللہ</span> تعالیٰ عنہم کہتے تھے <span class=\"malfooz-ayat\">حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيْلُ</span>"
        },
        {
            id: 207,
            text: "مومن کبھی پریشان نہیں ہوتا ، اسے فطری طور پر پریشانی آبھی گئی تو ایمان کو بحال کر کے پریشانی سے آزاد ہو جاتا ہے، اس لئے <span class=\"allah-name\">اللہ</span> کہتا ہے <span class=\"malfooz-ayat\">﴿أَلَيْسَ اللّٰهُ بِكَافٍ عَبْدَهٗ﴾</span> (الزمر: ۳۶)"
        },
        {
            id: 208,
            text: "حق تعالیٰ فرماتے ہیں <span class=\"malfooz-ayat\">﴿يَآ أَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ وَكُوْنُوْا مَعَ الصَّادِقِيْنَ﴾</span> (التوبة : ۱۱۹) (اے ایمان والو !! <span class=\"allah-name\">اللہ</span> سے ڈرو اور سچوں کے ساتھ ہو جاؤ) اس لئے کہ ایمان میں جو سچے ہیں ان کی صحبت سے آپ کے اندر بھی ایمان آجائے گا، <span class=\"allah-name\">اللہ</span> پر بھروسہ کیسا کرنا سمجھ میں آجائے گا۔"
        },
        {
            id: 209,
            text: "نمازیں اس وقت قبول ہوتی ہیں جب ہمارا یقین <span class=\"allah-name\">اللہ</span> تعالیٰ کے تعلق سے درست ہو جائے۔"
        },
        {
            id: 210,
            text: "ایمان (تحقیقی) کا حاصل کرنا ہر مسلمان کی اولین ذمہ داری ہے۔"
        },
        {
            id: 211,
            text: "موت کے وقت ایمان کے سوا کوئی کامیابی کا ذریعہ ہی نہیں۔"
        },
        {
            id: 212,
            text: "قبر کی زندگی میں بھی ایمان ہی کام آتا ہے۔"
        },
        {
            id: 213,
            text: "حشر میں حضور ﷺ جو شفاعت کرتے ہیں، جس کے دل میں ذرہ برابر بھی ایمان ہو، اس کی مغفرت کی التجاء کرتے ہیں۔"
        },
        {
            id: 214,
            text: "بہت سے لوگ مرتے وقت بے ایمان مرتے ہیں، <span class=\"allah-name\">اللہ</span> ہم سب کی حفاظت کرے۔"
        },
        {
            id: 215,
            text: "<span class=\"allah-name\">اللہ</span> کی ذات پر اتنا اعتماد ہونا کہ کوئی بھی مخلوق ہمارے دل میں <span class=\"allah-name\">اللہ</span> سے بڑھ کر نہیں ہونا چاہئے۔"
        },
        {
            id: 216,
            text: "شیطان یہ چاہتا ہے کہ تم <span class=\"allah-name\">اللہ</span> سے غافل رہو، <span class=\"allah-name\">اللہ</span> یہ چاہتا ہے کہ بندہ ہمیشہ میرے ساتھ رہے۔"
        },
        {
            id: 217,
            text: "<span class=\"allah-name\">اللہ</span> فرماتا ہے کہ جب بھی بندہ میرا ذکر کرتا ہے میں اس کے ساتھ ہو جاتا ہوں ، تو جب بندہ <span class=\"allah-name\">اللہ</span> کے ذکر میں رہتا ہے تو <span class=\"allah-name\">اللہ</span> کے ساتھ ہونے (<span class=\"allah-name\">اللہ</span> کی معیت) کی نعمت ملتی ہے۔"
        },
        {
            id: 218,
            text: "ہمارے سامنے دنیا سے بڑھ کر آخرت کی زندگی ہے، موت کبھی بھی آجائے گی مگر اہم بات یہ ہے کہ ہم موت کے لئے کتنے تیار ہیں۔"
        },
        {
            id: 219,
            text: "اگر تم کوئی گناہ نہیں کر رہے ہو، <span class=\"allah-name\">اللہ</span> کے ذکر میں لگے رہتے ہو، <span class=\"allah-name\">اللہ</span> کی معیت کے احساس میں رہتے ہو، تو سمجھ لو کہ تم <span class=\"allah-name\">اللہ</span> کی حفاظت میں ہو، اسی لئے <span class=\"allah-name\">اللہ</span> والے فرماتے ہیں، اہل <span class=\"allah-name\">اللہ</span> محفوظ ہوتے ہیں۔"
        },
        {
            id: 220,
            text: "مرید کو صحبت شیخ کی بے انتہا ضرورت ہوتی ہے۔"
        },
        {
            id: 221,
            text: "شیخ اور خلفاء سے جب بھی ، جہاں جہاں بھی تعلیم ملتی ہے، وہاں وہاں شریک ہو کر حاصل کرنا اور اپنے ایمان کو تازہ رکھنا چاہئے۔"
        },
        {
            id: 222,
            text: "اپنے ایمان کو تازہ کرتے رہنا چاہئے ، حضور ﷺ صحابہ سے فرماتے ہیں <span class=\"malfooz-ayat\">جَدِّدُوْا إِيْمَانَكُمْ</span> (تم اپنے ایمان کو تازہ کرو)۔"
        },
        {
            id: 223,
            text: "گھریلو ذمہ داریوں کی وجہ سے ہمیشہ، ہر کوئی پیر کی صحبت میں نہیں رہ سکتے اس لئے کم سے کم ہفتہ واری حلقوں میں پابندی سے شریک ہونا چاہئے ۔"
        },
        {
            id: 224,
            text: "حلقوں میں شریک ہونے سے بھی پیرانِ سلاسل کا فیض جاری ہوتا ہے۔"
        },
        {
            id: 225,
            text: "حلقوں میں جو بھی بیان کرنے والا بیان کرتا ہے اس سے اپنے ایمان میں کچھ نہ کچھ تازگی ملتی ہے۔"
        },
        {
            id: 226,
            text: "اہل طریق کو چاہئے کہ تہجد گزار بنیں، تمام اہل <span class=\"allah-name\">اللہ</span> تہجد کے پابند ہوتے ہیں۔"
        },
        {
            id: 227,
            text: "اسمارٹ فون کا صحیح استعمال کرو، بد نظری سے بچو، یہ حرام ہے، بد نظری نظر کا زنا ہے۔"
        },
        {
            id: 228,
            text: "جو <span class=\"allah-name\">اللہ</span> والوں کی عادتیں ہیں، ان عادتوں کی ہم پیروی کریں تو ہم بھی ان کے ساتھ ہو جائیں گے۔"
        },
        {
            id: 229,
            text: "ہمیشہ قلب میں <span class=\"allah-name\">اللہ</span> کی یاد کو قائم کرنے کی بھر پور کوشش کرو。"
        },
        {
            id: 230,
            text: "پاس انفاس کا ہمیشہ خیال رکھو، زندگی اگر ذکر پر گزرے گی تو موت بھی ذکر پر آئے گی۔"
        },
        {
            id: 231,
            text: "جیسی موت ہوتی ہے ویسے ہی قبر میں کیفیت و احوال ہوں گے۔"
        },
        {
            id: 232,
            text: "ذکر پاس انفاس، ذکر فعلی، ذکر وصفی، جو بھی ذکر ملا ہوا ہے وہ ذکر میں قائم رہنا اور آگے بڑھنے کے لئے مزید تعلیم حاصل کرنے کی کوشش کرنا، یہ سب سالکین کا کام ہے۔"
        },
        {
            id: 233,
            text: "آج کل کی جو پیری مریدی ہے، تعویذ ، فلیتوں کے کام ہیں، اس کے سوا کچھ بھی نہیں۔ ہمارا سلوک، ہماری طریقت ایسی نہیں ہے۔"
        },
        {
            id: 234,
            text: "ہمارا مقصود صرف <span class=\"allah-name\">اللہ</span> تعالیٰ ہے، حق کو پانا ، <span class=\"allah-name\">اللہ</span> صرف بولنا نہیں بلکہ <span class=\"allah-name\">اللہ</span> <span class=\"allah-name\">اللہ</span> یوں کرو کہ رب کو پانا چاہئے، خود کو کم کرنا چاہئے ۔<br><span class=\"poetry-lines\"><span class=\"allah-name\">اللہ</span> <span class=\"allah-name\">اللہ</span> بولنا آتا ہے<br><span class=\"allah-name\">اللہ</span> <span class=\"allah-name\">اللہ</span> بولنے سے رب ملے</span>"
        },
        {
            id: 235,
            text: "خود سے گزرنا <span class=\"malfooz-ayat\">﴿وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيْلًا﴾</span> (تم اپنے رب کا نام ایسا ذکر کرو کہ سب سے ٹوٹ کر، حتیٰ کہ خود سے بھی ٹوٹ کر، رب سے جڑ جاؤ) پوری کائنات سے ٹوٹ کر، رب سے جڑے رہنا یہ \"تبتولیت\" ہے۔"
        },
        {
            id: 236,
            text: "ذکر میں رہنا حضور ﷺ کا اسوہ حسنہ ہے، اہل <span class=\"allah-name\">اللہ</span> کا طریقہ ہے۔"
        },
        {
            id: 237,
            text: "حضور اکرم ﷺ کے تعلق سے ام المومنین عائشہ صدیقہ رضی <span class=\"allah-name\">اللہ</span> عنہا فرماتی ہیں حضور کا ایک ایک لمحہ <span class=\"allah-name\">اللہ</span> کے ذکر میں گذرتا تھا، ذکر الہی میں غرق رہتے تھے، ظاہر و باطن میں <span class=\"allah-name\">اللہ</span> ہی <span class=\"allah-name\">اللہ</span> کی کیفیت رہتی تھی۔ دادا سرکار فرماتے ہیں:<br><span class=\"poetry-lines\">اب تو ہم ہر آن غوثی رہتے ہیں دو شان میں<br>محوِ حق میں، صحو شکلِ احمدِ مختار میں</span>"
        },
        {
            id: 238,
            text: "باطن <span class=\"allah-name\">اللہ</span> میں گم رہے، خود سے گذر کر حق کو پانے میں رہے، اور ظاہر مصطفیٰ کی شریعت پر قائم ، سرکار دو عالم ﷺ کے احکامات کی پوری پوری پابندی، ہر سنت کی پیروی ہماری جان بننا چاہئے ۔"
        },
        {
            id: 239,
            text: "حضور اکرم ﷺ سے ہم کو محبت ہے، حضور ﷺ ہی سے ہم کو <span class=\"allah-name\">اللہ</span> ملا، قرآن ملا، سب کچھ ملا ہے تو حضور ﷺ کے وسیلے سے، بلکہ ہم ہیں تو حضور ﷺ ہی کے نور سے۔"
        },
        {
            id: 240,
            text: "حضور ﷺ کے نور سے کائنات بنی ہے، تو کائنات میں ہم بھی ایک فرد ہیں، حضور ﷺ کا نور ہم میں موجود ہے۔"
        },
        {
            id: 241,
            text: "ساری کائنات کا <span class=\"allah-name\">اللہ</span> رب ہے اور ساری کائنات کے لئے مصطفیٰ ﷺ رحمت ہیں ۔ <span class=\"malfooz-ayat\">﴿وَمَآ أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِيْنَ﴾</span>"
        },
        {
            id: 242,
            text: "یہ تصدق ہے مصطفیٰ ﷺ کا یہ کائنات قائم ہے، <span class=\"allah-name\">اللہ</span> تعالیٰ حضور ﷺ کے ذریعے کائنات کو قائم رکھا ہوا ہے۔"
        },
        {
            id: 243,
            text: "پوری کائنات میں سب سے پہلی مخلوق حضور ﷺ کا نور ہے، تو آپ ﷺ بشری صورت میں تشریف لا کر ہم سب پر بڑا احسان فرمائے ہیں کہ ہمارے رسول بنے۔"
        },
        {
            id: 244,
            text: "سارے رسول آئے مصطفیٰ ﷺ کی آمد کی خبر دینے کے لئے ، ہر نبی اپنی اپنی امتوں کو خوشخبری دئے کہ ایک نبی آخر الزماں آنے والے ہیں (اگر تم لوگ ان کو پاؤ تو) ان پر ایمان لانا۔"
        },
        {
            id: 245,
            text: "جو شخص بھی نور ہدایت پاتا ہے، وہ مصطفیٰ ﷺ کا نور ہے اس لئے امت کے علماء ربانیین اور اہل <span class=\"allah-name\">اللہ</span> بھی آپ کے نور کے مظاہر ہیں۔"
        },
        {
            id: 246,
            text: "جو مرشد ، جو شیخ اپنے مریدین کو <span class=\"allah-name\">اللہ</span> سے جوڑتا ہے، یہ جوڑنے کا کام مرشد کا اپنا ذاتی نہیں ہوتا ، وہ فیضانِ مصطفیٰ ﷺ ہے بندہ رب سے جڑتا ہے۔"
        },
        {
            id: 247,
            text: "جتنے بھی پیرانِ سلاسل ہیں، جو سچے ہیں، وہ بندوں کو رب سے جوڑتے ہیں اور بندوں کو خود (اپنی ذات) سے جوڑنے والے پیر نہیں ہوتے ۔"
        },
        {
            id: 248,
            text: "<span class=\"malfooz-ayat\">﴿وَاتَّبِعْ سَبِيْلَ مَنْ أَنَابَ إِلَيَّ﴾</span> <span class=\"malfooz-note\">(لقمان: ۱۵)</span> (ان لوگوں کے راستے کی پیروی کرو جو میری طرف پلٹے ہیں) یہ <span class=\"allah-name\">اللہ</span> کا ارشاد ہے، بزرگان دین کے ارشادات (جو تحت قرآن وسنت ہیں) کی پیروی کرنا گویا مصطفیٰ ﷺ کی پیروی کرنا ہے۔"
        },
        {
            id: 249,
            text: "پیر کی محبت، <span class=\"allah-name\">اللہ</span> والوں کی محبت ، دراصل رسول <span class=\"allah-name\">اللہ</span> کی محبت ہے، کیونکہ کہ فیضان رسول ﷺ ان سے جاری ہوتا ہے اور وہ <span class=\"allah-name\">اللہ</span> کی محبت ہے۔"
        },
        {
            id: 250,
            text: "جب سرکار دو جہاں ﷺ یہ ارشاد فرمائے <span class=\"malfooz-ayat\">أَنْتَ مَعَ مَنْ أَحْبَبْتَ</span> (قیامت کے دن تم جس سے محبت کرتے ہو ان کے ساتھ ہو گے)۔ حضرت انس رضی <span class=\"allah-name\">اللہ</span> عنہ فرماتے ہیں کہ میں نے رسول <span class=\"allah-name\">اللہ</span> ﷺ کا یہ ارشاد سنا تو مجھے بے انتہا خوشی ہوئی۔"
        },
        {
            id: 251,
            text: "<span class=\"allah-name\">اللہ</span> و رسول ﷺ کی محبت، <span class=\"allah-name\">اللہ</span> والوں کی محبت، یہ محبتیں کبھی رائیگاں نہیں جائیں گی اور ان محبتوں کے علاوہ جتنی محبتیں ہیں <span class=\"malfooz-ayat\">﴿الْأَخِلَّآءُ يَوْمَئِذٍ بَعْضُهُمْ لِبَعْضٍ عَدُوٌّ إِلَّا الْمُتَّقِيْنَ﴾</span> <span class=\"malfooz-note\">(زخرف: 67)</span> کے مصداق ہیں، یعنی دنیا کے لئے جتنی دوستیاں ہیں یہ سب قیامت کے دن دشمن بن جائیں گی، سوائے متقی لوگوں کے۔"
        },
        {
            id: 252,
            text: "تقوی کی بنیاد پر آپس میں جو دوستی قائم رہے گی ، قبر میں، حشر میں، ہر جگہ فائدہ دینے والی ہے۔"
        },
        {
            id: 253,
            text: "ہم کو <span class=\"allah-name\">اللہ</span> والوں سے دوستی رکھنی چاہئے ، شیطان اور نفس کی پیروی سے ہم کو ہمیشہ بچے رہنا چاہئے ، اس کے لئے میں جو طریقے بتایا ہوں، ہر سالک کا کام ہے کہ اس کی پیروی کرے، موت اور قبر کو کثرت سے یاد کرے۔"
        },
        {
            id: 254,
            text: "رب پر اعتماد کرنے والے بن جاؤ ، رب پر اعتماد قوی ہونے کے لئے جس قدر شیخ کی صحبت کی ضرورت ہے اس سے بڑھ کر اور کوئی چیز نہیں۔"
        },
        {
            id: 255,
            text: "<span class=\"allah-name\">اللہ</span> تعالیٰ ہم سب کو اپنے حبیب ﷺ کے صدقے میں سچے اور پکے مومنوں میں شامل کرے اور قیامت کے روز حشر میں ہر جگہ اپنے پیروں کے ساتھ جمع ہونے والوں میں ہم کو شامل کرے، شیطان اور نفس کے ہتھکنڈوں سے <span class=\"allah-name\">اللہ</span> ہم سب کی حفاظت کرے۔<br><span class=\"malfooz-ayat\">اٰمِيْنَ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ</span>"
        }
    ];
    window.AWRAAD_MALFOOZAT_LIST = malfoozatList;

    function toArabicNum(num) {
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return num.toString().split('').map(digit => arabicNumbers[digit]).join('');
    }

    function initDailyMalfooz() {
        if (!malfoozatList.length) return;

        const epochDays = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        const todaysIndex = epochDays % malfoozatList.length;
        
        const todaysMalfoozData = malfoozatList[todaysIndex];
        const todaysMalfoozText = todaysMalfoozData.text;
        const actualMalfoozNumber = todaysMalfoozData.id;

        const arabicMalfoozNumber = toArabicNum(actualMalfoozNumber);

        if (!document.getElementById('daily-malfooz-global-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'daily-malfooz-global-styles';
            styleEl.innerHTML = `
                .daily-malfooz-container {
                    background-color: var(--auto-card-bg, #fdf5e6);
                    border: 2px solid var(--auto-border, #c59b27);
                    border-radius: 8px;
                    padding: 15px 20px;
                    margin: 20px auto;
                    max-width: 800px;
                    text-align: center;
                    box-shadow: 0 3px 6px rgba(0,0,0,0.08);
                }
                .daily-malfooz-title {
                    font-family: 'Amiri', serif;
                    font-size: 24px;
                    font-weight: bold;
                    color: var(--auto-card-text, #8c6d23);
                    margin-bottom: 8px;
                }
                .daily-malfooz-text {
                    font-family: 'Amiri', serif;
                    font-size: 22px;
                    line-height: 1.8;
                    color: var(--user-text-color, var(--auto-text, #1a365d));
                }
            `;
            document.head.appendChild(styleEl);
        }

        function createDailyMalfoozCard() {
            const wrapper = document.createElement('div');
            wrapper.className = 'daily-malfooz-container print-none no-smart-break';
            wrapper.setAttribute('dir', 'rtl');
            wrapper.innerHTML = `
                <div class="daily-malfooz-title">
                    ✨ مَلْفُوْظَاتِ شَيْخ #${arabicMalfoozNumber} ✨
                </div>
                <div id="dailyMalfoozText" class="daily-malfooz-text">${todaysMalfoozText}</div>
                <button type="button" class="malfooz-bm-btn" data-malfooz-bm-id="${actualMalfoozNumber}" data-malfooz-bm-ar="${arabicMalfoozNumber}">
                    ${window.AWRAAD_SVG.starSm}<span>Bookmark</span>
                </button>
            `;
            return wrapper;
        }

        const existingElements = document.querySelectorAll('#dailyMalfoozText, .daily-malfooz-text');
        existingElements.forEach(function(el) {
            el.innerHTML = todaysMalfoozText;
        });

        if (existingElements.length === 0) {
            if (document.getElementById('injected-daily-malfooz')) return;

            const card = createDailyMalfoozCard();
            card.id = 'injected-daily-malfooz';

            const screenHeader = document.querySelector('.screen-header');
            const continuousInner = document.querySelector('.continuous-inner');
            const injectedNavbar = document.getElementById('injected-app-navbar');

            if (screenHeader && screenHeader.parentNode) {
                screenHeader.insertAdjacentElement('afterend', card);
            } else if (continuousInner) {
                continuousInner.insertAdjacentElement('afterbegin', card);
            } else if (injectedNavbar && injectedNavbar.parentNode) {
                injectedNavbar.insertAdjacentElement('afterend', card);
            } else {
                document.body.insertAdjacentElement('afterbegin', card);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDailyMalfooz);
    } else {
        initDailyMalfooz();
    }
})();

// =========================================================
// PART 4: CENTRALIZED NAVBAR & LAZY TASBEEH COUNTER
// =========================================================
(function() {
    window.tasbeehSessionActive = false;
    const TRAP_DEPTH = 7;
    let pendingNavAction = null;
    let pendingNavUrl = null;
    let tasbeehInitialized = false;
    let navWarningInitialized = false;



    function ensureNavWarningModal() {
        if (navWarningInitialized && document.getElementById('navWarningModal')) return;
        navWarningInitialized = true;

        const navWarningHTML = `
        <div id="navWarningModal" class="tasbeeh-modal print-none">
            <div class="tasbeeh-content" style="max-width: 350px; padding: 25px 20px;">
                <h3 style="margin-top:0; color:#c0392b;">⚠️ Warning</h3>
                <p style="font-size: 18px; margin-bottom: 20px; line-height: 1.6; font-family: 'Amiri', Arial, sans-serif; color: var(--text-color, #1a365d);">
                    Tasbeeh Counter <strong style="color:#1e7e34;">Active</strong> hai.<br>Page tabdeel karne se yeh <strong>stop</strong> ho jayega.<br><br>Kya aap waqai doosre page par jana chahte hain?
                </p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button id="navWarnCancelBtn" style="background: #1a365d; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 16px;">Cancel</button>
                    <button id="navWarnProceedBtn" style="background: #c0392b; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 16px;">Proceed</button>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navWarningHTML);

        const navWarningModal = document.getElementById('navWarningModal');
        const navWarnCancelBtn = document.getElementById('navWarnCancelBtn');
        const navWarnProceedBtn = document.getElementById('navWarnProceedBtn');

        if (navWarnCancelBtn) {
            navWarnCancelBtn.addEventListener('click', () => {
                navWarningModal.classList.remove('show');
                pendingNavAction = null;
                pendingNavUrl = null;
            });
        }

        if (navWarnProceedBtn) {
            navWarnProceedBtn.addEventListener('click', () => {
                navWarningModal.classList.remove('show');

                if (window.tasbeehPauseAuto) {
                    window.tasbeehPauseAuto();
                }
                window.tasbeehSessionActive = false;

                if (pendingNavUrl) {
                    history.go(-TRAP_DEPTH);

                    setTimeout(() => {
                        let currentPath = window.location.pathname.split('/').pop().toLowerCase();
                        if (currentPath === '' || currentPath === '/') currentPath = 'index.html';

                        let linkPathFull = pendingNavUrl.split('#')[0].toLowerCase();
                        let linkPath = linkPathFull.split('/').pop();
                        let isSamePage = (linkPath === '' || linkPath === currentPath);

                        if (isSamePage && pendingNavUrl.includes('#')) {
                            history.replaceState(null, null, '#' + pendingNavUrl.split('#')[1]);
                            if (typeof window.showActiveSection === 'function') window.showActiveSection();
                        } else {
                            window.location.href = pendingNavUrl;
                        }
                    }, 150);
                } else if (pendingNavAction === 'browser_back') {
                    history.go(-(TRAP_DEPTH + 1));
                }
            });
        }
    }

    function showNavWarning() {
        ensureNavWarningModal();
        const modal = document.getElementById('navWarningModal');
        if (modal) modal.classList.add('show');
    }

    let refreshTasbeehLayoutRef = null;

    function ensureTasbeehModal() {
        if (tasbeehInitialized && document.getElementById('tasbeehModal')) return;
        tasbeehInitialized = true;

        const tasbeehHTML = `
        <div id="tasbeehModal" class="tasbeeh-modal print-none">
            <div id="tasbeehContentBox" class="tasbeeh-content">
                <div id="tasbeehDragHandle" class="tasbeeh-drag-handle" title="Drag to move">
                    <span class="tasbeeh-drag-title">
                        <span class="tasbeeh-grip-icon">⋮⋮</span>
                        <span>Tasbeeh Counter</span>
                    </span>
                    <div class="tasbeeh-header-actions">
                        <button type="button" id="minimizeTasbeehBtn" class="tasbeeh-icon-btn" title="Minimize">_</button>
                        <button type="button" id="closeTasbeehBtn" class="tasbeeh-icon-btn close-btn" title="Close">&times;</button>
                    </div>
                </div>

                <div id="tasbeehZoomIndicator" class="tasbeeh-zoom-indicator">100%</div>

                <div class="tasbeeh-controls">
                    <select id="tasbeehTarget">
                        <option value="100">Target: 100</option>
                        <option value="custom">Custom</option>
                    </select>
                    <input type="number" id="tasbeehCustomTarget" placeholder="Target" min="1" style="display:none; width:80px;">
                </div>

                <div class="tasbeeh-controls">
                    <select id="tasbeehMode">
                        <option value="manual">Manual Mode</option>
                        <option value="auto">Auto Mode</option>
                    </select>

                    <select id="tasbeehInterval" style="display:none;">
                        <option value="custom" selected>Custom</option>
                    </select>
                    <input type="number" id="tasbeehCustomInterval" placeholder="Secs" min="1" style="display:none; width:70px;">
                </div>

                <div class="tasbeeh-count-display" id="tasbeehCount">0</div>

                <div class="tasbeeh-progress-bg">
                    <div id="tasbeehProgressBar" class="tasbeeh-progress-bar"></div>
                </div>

                <button id="tasbeehMainBtn" class="tasbeeh-btn-large">TAP</button>

                <div class="tasbeeh-controls">
                    <button id="tasbeehStartBtn" style="display:none; background-color:#1e7e34;">Start</button>
                    <button id="tasbeehPauseBtn" style="display:none; background-color:#c0392b;">Pause</button>
                    <button id="tasbeehResumeBtn" style="display:none; background-color:#f39c12;">Resume</button>
                    <button id="tasbeehResetBtn">Reset</button>
                    <button id="tasbeehSoundBtn">Sound: ON</button>
                    <button id="tasbeehVibrateBtn">Vibrate: ON</button>
                </div>
            </div>
        </div>
        <div id="tasbeehMinimized" class="tasbeeh-minimized print-none" style="display:none;" title="Drag ya Tap karke open karein">
            <span class="menu-icon" style="font-size:20px;">📿</span>
            <span id="minimizedCount">0 / 100</span>
            <button id="maximizeTasbeehBtn">⛶</button>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', tasbeehHTML);

        const tasbeehModal = document.getElementById('tasbeehModal');
        const tasbeehContent = document.getElementById('tasbeehContentBox');
        const dragHandle = document.getElementById('tasbeehDragHandle');
        const zoomIndicator = document.getElementById('tasbeehZoomIndicator');
        const closeTasbeehBtn = document.getElementById('closeTasbeehBtn');
        const targetSelect = document.getElementById('tasbeehTarget');
        const customTargetInput = document.getElementById('tasbeehCustomTarget');
        const modeSelect = document.getElementById('tasbeehMode');
        const intervalSelect = document.getElementById('tasbeehInterval');
        const customIntervalInput = document.getElementById('tasbeehCustomInterval');
        const countDisplay = document.getElementById('tasbeehCount');
        const progressBar = document.getElementById('tasbeehProgressBar');
        const mainTapBtn = document.getElementById('tasbeehMainBtn');
        const startBtn = document.getElementById('tasbeehStartBtn');
        const pauseBtn = document.getElementById('tasbeehPauseBtn');
        const resumeBtn = document.getElementById('tasbeehResumeBtn');
        const resetBtn = document.getElementById('tasbeehResetBtn');
        const soundBtn = document.getElementById('tasbeehSoundBtn');
        const vibrateBtn = document.getElementById('tasbeehVibrateBtn');
        const minimizeTasbeehBtn = document.getElementById('minimizeTasbeehBtn');
        const tasbeehMinimized = document.getElementById('tasbeehMinimized');

        const MIN_SCALE = 0.45;
        const MAX_SCALE = 1.15;

        let count = parseInt(localStorage.getItem('tasbeeh_count')) || 0;
        let target = parseInt(localStorage.getItem('tasbeeh_target')) || 100;
        let currentScale = parseFloat(localStorage.getItem('tasbeeh_scale'));
        if (isNaN(currentScale) || currentScale < MIN_SCALE || currentScale > MAX_SCALE) {
            currentScale = 1;
        }
        let currentLeft = 0;
        let currentTop = 0;
        let hasCustomPos = false;
        let isDragging = false;
        let isPinching = false;
        let lastPinchEndTime = 0;
        let zoomBadgeTimer = null;

        if (targetSelect) {
            targetSelect.value = target === 100 ? "100" : "custom";
            if (target !== 100) {
                customTargetInput.style.display = 'inline-block';
                customTargetInput.value = target;
            }
        }
        if (countDisplay) countDisplay.innerText = count;
        let autoTimer = null;
        let soundEnabled = true;
        let vibrateEnabled = localStorage.getItem('tasbeeh_vibrate') !== 'false';
        let beepPlayed = false;
        let audioCtx = null;
        if (vibrateBtn) vibrateBtn.innerHTML = vibrateEnabled ? 'Vibrate: ON' : 'Vibrate: OFF';

        function triggerHaptic(pattern) {
            if (!vibrateEnabled) return;
            try {
                if (navigator && typeof navigator.vibrate === 'function') {
                    navigator.vibrate(pattern);
                }
            } catch (e) {}
        }

        function unlockAudio() {
            if (!audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioCtx = new AudioContext();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        }

        function updateProgress() {
            let percentage = (count / target) * 100;
            if (percentage > 100) percentage = 100;
            progressBar.style.width = percentage + "%";
            const minimizedCount = document.getElementById('minimizedCount');
            if (minimizedCount) minimizedCount.innerText = count + " / " + target;
        }

        function showZoomBadge(scaleVal) {
            if (!zoomIndicator) return;
            zoomIndicator.textContent = Math.round(scaleVal * 100) + '%';
            zoomIndicator.classList.add('visible');
            if (zoomBadgeTimer) clearTimeout(zoomBadgeTimer);
            zoomBadgeTimer = setTimeout(() => {
                zoomIndicator.classList.remove('visible');
            }, 700);
        }

        function getMaxAllowedScale() {
            const baseW = tasbeehContent.offsetWidth || 320;
            return Math.min(MAX_SCALE, Math.max(MIN_SCALE, (window.innerWidth - 12) / baseW));
        }

        function clampScaledPosition(left, top, scale) {
            const baseW = tasbeehContent.offsetWidth || 320;
            const baseH = tasbeehContent.offsetHeight || 400;
            const visW = baseW * scale;
            const visH = baseH * scale;
            const maxLeft = Math.max(6, window.innerWidth - visW - 6);
            const maxTop = Math.max(6, window.innerHeight - visH - 6);
            return {
                left: Math.min(Math.max(6, left), maxLeft),
                top: Math.min(Math.max(6, top), maxTop)
            };
        }

        function clampPillPosition(pillEl, left, top) {
            const rect = pillEl.getBoundingClientRect();
            const w = rect.width || 160;
            const h = rect.height || 52;
            const maxLeft = Math.max(6, window.innerWidth - w - 6);
            const maxTop = Math.max(6, window.innerHeight - h - 6);
            return {
                left: Math.min(Math.max(6, left), maxLeft),
                top: Math.min(Math.max(6, top), maxTop)
            };
        }

        function updateBackdropMode() {
            // Chota zoom (< 95%) ya drag hone par transparent floating mode taake Awraad aaraam se padh aur scroll kar sakein
            const isFloating = currentScale < 0.95 || hasCustomPos;
            tasbeehModal.classList.toggle('tasbeeh-compact', isFloating);
        }

        function applyTasbeehTransform(left, top, scale) {
            const clampedScale = Math.min(getMaxAllowedScale(), Math.max(MIN_SCALE, scale));
            const pos = clampScaledPosition(left, top, clampedScale);
            currentScale = clampedScale;
            currentLeft = pos.left;
            currentTop = pos.top;

            tasbeehContent.style.left = currentLeft + 'px';
            tasbeehContent.style.top = currentTop + 'px';
            tasbeehContent.style.transform = `scale(${currentScale.toFixed(4)})`;
            updateBackdropMode();
        }

        function saveTasbeehGeometry() {
            localStorage.setItem('tasbeeh_scale', currentScale.toFixed(3));
            if (hasCustomPos || currentScale < 0.95) {
                localStorage.setItem('tasbeeh_pos', JSON.stringify({
                    left: Math.round(currentLeft),
                    top: Math.round(currentTop)
                }));
            }
        }

        function initTasbeehLayout() {
            requestAnimationFrame(() => {
                const maxAllowed = getMaxAllowedScale();
                if (currentScale > maxAllowed) currentScale = maxAllowed;

                let savedPos = null;
                try {
                    savedPos = JSON.parse(localStorage.getItem('tasbeeh_pos') || 'null');
                } catch (e) {}

                const baseW = tasbeehContent.offsetWidth || 320;
                const baseH = tasbeehContent.offsetHeight || 400;
                const defaultLeft = (window.innerWidth - baseW * currentScale) / 2;
                const defaultTop = (window.innerHeight - baseH * currentScale) / 2;

                if (savedPos && typeof savedPos.left === 'number' && typeof savedPos.top === 'number') {
                    hasCustomPos = true;
                    applyTasbeehTransform(savedPos.left, savedPos.top, currentScale);
                } else {
                    hasCustomPos = false;
                    applyTasbeehTransform(defaultLeft, defaultTop, currentScale);
                }
            });
        }

        refreshTasbeehLayoutRef = initTasbeehLayout;

        // 1. Two-Finger Pinch Zoom-In / Zoom-Out Resizing (anywhere on Tasbeeh Window)
        if (tasbeehContent) {
            let pinchStartDist = 0;
            let pinchStartScale = 1;
            let pinchLocalX = 0;
            let pinchLocalY = 0;

            function getTouchDistance(t1, t2) {
                return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
            }

            tasbeehContent.addEventListener('touchstart', (e) => {
                if (e.touches.length === 2) {
                    isPinching = true;
                    isDragging = false;
                    hasCustomPos = true;

                    const t1 = e.touches[0];
                    const t2 = e.touches[1];
                    pinchStartDist = Math.max(10, getTouchDistance(t1, t2));
                    pinchStartScale = currentScale;

                    const midX = (t1.clientX + t2.clientX) / 2;
                    const midY = (t1.clientY + t2.clientY) / 2;
                    pinchLocalX = (midX - currentLeft) / pinchStartScale;
                    pinchLocalY = (midY - currentTop) / pinchStartScale;

                    showZoomBadge(currentScale);
                    e.preventDefault();
                }
            }, { passive: false });

            tasbeehContent.addEventListener('touchmove', (e) => {
                if (!isPinching || e.touches.length < 2) return;
                e.preventDefault();

                const t1 = e.touches[0];
                const t2 = e.touches[1];
                const newDist = getTouchDistance(t1, t2);
                const ratio = newDist / pinchStartDist;
                const targetScale = Math.min(getMaxAllowedScale(), Math.max(MIN_SCALE, pinchStartScale * ratio));

                const midX = (t1.clientX + t2.clientX) / 2;
                const midY = (t1.clientY + t2.clientY) / 2;
                const newLeft = midX - pinchLocalX * targetScale;
                const newTop = midY - pinchLocalY * targetScale;

                applyTasbeehTransform(newLeft, newTop, targetScale);
                showZoomBadge(currentScale);
            }, { passive: false });

            function endPinch(e) {
                if (!isPinching) return;
                if (!e.touches || e.touches.length < 2) {
                    isPinching = false;
                    lastPinchEndTime = Date.now();
                    saveTasbeehGeometry();
                }
            }

            tasbeehContent.addEventListener('touchend', endPinch);
            tasbeehContent.addEventListener('touchcancel', endPinch);

            // Trackpad / Ctrl+Wheel zoom support on desktop
            tasbeehContent.addEventListener('wheel', (e) => {
                if (!e.ctrlKey) return;
                e.preventDefault();
                hasCustomPos = true;
                const delta = e.deltaY < 0 ? 0.06 : -0.06;
                const targetScale = Math.min(getMaxAllowedScale(), Math.max(MIN_SCALE, currentScale + delta));
                const localX = (e.clientX - currentLeft) / currentScale;
                const localY = (e.clientY - currentTop) / currentScale;
                applyTasbeehTransform(e.clientX - localX * targetScale, e.clientY - localY * targetScale, targetScale);
                showZoomBadge(currentScale);
                saveTasbeehGeometry();
            }, { passive: false });
        }

        // 2. Smooth 1-Finger Touch + Mouse Dragging for Tasbeeh Window (via Header Handle)
        if (dragHandle && tasbeehContent) {
            let dragOffsetX = 0;
            let dragOffsetY = 0;

            dragHandle.addEventListener('pointerdown', (e) => {
                if (isPinching || e.target.closest('button')) return;
                isDragging = true;
                dragOffsetX = e.clientX - currentLeft;
                dragOffsetY = e.clientY - currentTop;
                try { dragHandle.setPointerCapture(e.pointerId); } catch (err) {}
                e.preventDefault();
            });

            dragHandle.addEventListener('pointermove', (e) => {
                if (!isDragging || isPinching) return;
                hasCustomPos = true;
                applyTasbeehTransform(e.clientX - dragOffsetX, e.clientY - dragOffsetY, currentScale);
            });

            function finishDrag(e) {
                if (!isDragging) return;
                isDragging = false;
                try { dragHandle.releasePointerCapture(e.pointerId); } catch (err) {}
                saveTasbeehGeometry();
            }

            dragHandle.addEventListener('pointerup', finishDrag);
            dragHandle.addEventListener('pointercancel', finishDrag);
        }

        // 3. Smooth Touch + Mouse Dragging for Minimized Pill (Tap = Open, Drag = Move)
        if (tasbeehMinimized) {
            let pillDragging = false;
            let pillMoved = false;
            let pillStartX = 0;
            let pillStartY = 0;
            let pillOffsetX = 0;
            let pillOffsetY = 0;

            tasbeehMinimized.addEventListener('pointerdown', (e) => {
                pillDragging = true;
                pillMoved = false;
                pillStartX = e.clientX;
                pillStartY = e.clientY;
                const rect = tasbeehMinimized.getBoundingClientRect();
                pillOffsetX = e.clientX - rect.left;
                pillOffsetY = e.clientY - rect.top;
                try { tasbeehMinimized.setPointerCapture(e.pointerId); } catch (err) {}
            });

            tasbeehMinimized.addEventListener('pointermove', (e) => {
                if (!pillDragging) return;
                if (!pillMoved && (Math.abs(e.clientX - pillStartX) > 6 || Math.abs(e.clientY - pillStartY) > 6)) {
                    pillMoved = true;
                    tasbeehMinimized.style.right = 'auto';
                    tasbeehMinimized.style.bottom = 'auto';
                }
                if (pillMoved) {
                    const pos = clampPillPosition(tasbeehMinimized, e.clientX - pillOffsetX, e.clientY - pillOffsetY);
                    tasbeehMinimized.style.left = pos.left + 'px';
                    tasbeehMinimized.style.top = pos.top + 'px';
                }
            });

            function finishPillDrag(e) {
                if (!pillDragging) return;
                pillDragging = false;
                try { tasbeehMinimized.releasePointerCapture(e.pointerId); } catch (err) {}
                if (!pillMoved) {
                    tasbeehMinimized.style.display = 'none';
                    tasbeehModal.classList.add('show');
                    initTasbeehLayout();
                }
            }

            tasbeehMinimized.addEventListener('pointerup', finishPillDrag);
            tasbeehMinimized.addEventListener('pointercancel', finishPillDrag);
        }

        // Keep floating Tasbeeh inside screen on rotate / resize
        window.addEventListener('resize', () => {
            if (tasbeehModal.classList.contains('show')) {
                applyTasbeehTransform(currentLeft, currentTop, currentScale);
            }
        });

        function activateTasbeehGuard() {
            if (!window.tasbeehSessionActive) {
                window.tasbeehSessionActive = true;
                for (let i = 1; i <= TRAP_DEPTH; i++) {
                    try {
                        history.pushState({tasbeehTrap: i}, null, '#t-' + i);
                    } catch(e) {}
                }
            }
        }

        function resetCount() {
            pauseAuto();
            count = 0;
            localStorage.setItem('tasbeeh_count', count);
            beepPlayed = false;
            countDisplay.innerText = count;
            updateProgress();

            if (modeSelect.value === 'auto') {
                startBtn.style.display = 'inline-block';
                resumeBtn.style.display = 'none';
                pauseBtn.style.display = 'none';
            }
        }

        updateProgress();

        if (minimizeTasbeehBtn) {
            minimizeTasbeehBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                tasbeehModal.classList.remove('show');
                tasbeehMinimized.style.display = 'flex';
            });
        }

        closeTasbeehBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tasbeehModal.classList.remove('show');
            pauseAuto();
        });

        tasbeehModal.addEventListener('click', (e) => {
            if (!tasbeehModal.classList.contains('tasbeeh-compact') && e.target === tasbeehModal) {
                tasbeehModal.classList.remove('show');
                if (tasbeehMinimized) {
                    tasbeehMinimized.style.display = 'flex';
                }
            }
        });

        targetSelect.addEventListener('change', () => {
            if (targetSelect.value === 'custom') {
                customTargetInput.style.display = 'inline-block';
                target = parseInt(customTargetInput.value) || 1;
            } else {
                customTargetInput.style.display = 'none';
                target = parseInt(targetSelect.value);
            }
            localStorage.setItem('tasbeeh_target', target);
            updateProgress();
        });

        customTargetInput.addEventListener('input', () => {
            target = parseInt(customTargetInput.value) || 1;
            localStorage.setItem('tasbeeh_target', target);
            updateProgress();
        });

        modeSelect.addEventListener('change', () => {
            pauseAuto();
            if (modeSelect.value === 'auto') {
                intervalSelect.style.display = 'inline-block';
                if (intervalSelect.value === 'custom') customIntervalInput.style.display = 'inline-block';
                startBtn.style.display = 'inline-block';
                resumeBtn.style.display = 'none';
                pauseBtn.style.display = 'none';
                mainTapBtn.style.display = 'none';
            } else {
                intervalSelect.style.display = 'none';
                customIntervalInput.style.display = 'none';
                startBtn.style.display = 'none';
                resumeBtn.style.display = 'none';
                pauseBtn.style.display = 'none';
                mainTapBtn.style.display = 'block';
            }
        });

        intervalSelect.addEventListener('change', () => {
            if (intervalSelect.value === 'custom') {
                customIntervalInput.style.display = 'inline-block';
            } else {
                customIntervalInput.style.display = 'none';
            }
            if (autoTimer) {
                pauseAuto();
                startAuto();
            }
        });

        soundBtn.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            soundBtn.innerHTML = soundEnabled ? 'Sound: ON' : 'Sound: OFF';
        });

        if (vibrateBtn) {
            vibrateBtn.addEventListener('click', () => {
                vibrateEnabled = !vibrateEnabled;
                localStorage.setItem('tasbeeh_vibrate', vibrateEnabled ? 'true' : 'false');
                vibrateBtn.innerHTML = vibrateEnabled ? 'Vibrate: ON' : 'Vibrate: OFF';
                if (vibrateEnabled) triggerHaptic(22);
            });
        }

        function playBeep() {
            if (!soundEnabled) return;
            try {
                unlockAudio();
                const oscillator = audioCtx.createOscillator();
                oscillator.type = 'sine';
                oscillator.frequency.value = 800;
                oscillator.connect(audioCtx.destination);
                oscillator.start();
                setTimeout(() => oscillator.stop(), 800);
            } catch (error) {}
        }

        function incrementCount(isManualTap) {
            if (count < target) {
                count++;
                localStorage.setItem('tasbeeh_count', count);
                countDisplay.innerText = count;
                updateProgress();
                if (count === target) {
                    pauseAuto();
                    triggerHaptic([80, 60, 120, 60, 180]);
                    if (!beepPlayed) {
                        playBeep();
                        beepPlayed = true;
                    }
                } else if (isManualTap) {
                    if (count % 33 === 0) {
                        triggerHaptic([35, 35, 35]);
                    } else {
                        triggerHaptic(18);
                    }
                }
            }
        }

        mainTapBtn.addEventListener('click', () => {
            if (isPinching || (Date.now() - lastPinchEndTime) < 260) return;
            unlockAudio();
            activateTasbeehGuard();
            if (count < target) incrementCount(true);
        });

        function startAuto() {
            unlockAudio();
            if (count >= target) return;
            if (autoTimer) clearInterval(autoTimer);
            let interval = intervalSelect.value === 'custom' ? parseInt(customIntervalInput.value) * 1000 : parseInt(intervalSelect.value);
            if (!interval || interval < 1000) interval = 1000;

            activateTasbeehGuard();

            startBtn.style.display = 'none';
            resumeBtn.style.display = 'none';
            pauseBtn.style.display = 'inline-block';

            autoTimer = setInterval(incrementCount, interval);
        }

        function pauseAuto() {
            if (autoTimer) {
                clearInterval(autoTimer);
                autoTimer = null;
            }
            if (modeSelect.value === 'auto') {
                startBtn.style.display = 'none';
                resumeBtn.style.display = 'inline-block';
                pauseBtn.style.display = 'none';
            }
        }

        window.tasbeehPauseAuto = pauseAuto;

        startBtn.addEventListener('click', startAuto);
        resumeBtn.addEventListener('click', startAuto);
        pauseBtn.addEventListener('click', pauseAuto);
        resetBtn.addEventListener('click', resetCount);
    }

    function initNavbarSystem() {
        document.querySelectorAll('.app-navbar, #awraadDrawerBackdrop, #awraadSideDrawer').forEach(el => el.remove());

        const pathLower = window.location.pathname.toLowerCase();
        const isIndex = pathLower.endsWith('index.html') || pathLower.endsWith('/') || pathLower === '';
        const isShajara = pathLower.endsWith('shajara_e_alaviyya.html');
        const indexPath = isIndex ? '#main-menu' : './index.html#main-menu';
        const shajaraBase = isShajara ? '' : './Shajara_e_Alaviyya.html';
        const I = window.AWRAAD_SVG;

        const gregTodayStr = new Date().toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

        const navbarHTML = `
        <div id="injected-app-navbar" class="app-navbar print-none" dir="ltr">
            <div class="nav-left">
                <button type="button" id="openDrawerBtn" class="nav-btn" title="Open Menu" aria-label="Open Menu">${I.menu}</button>
            </div>
            <div id="navHijriDate" class="nav-hijri-date" dir="rtl"></div>
            <div class="nav-right">
                <button type="button" id="navSearchBtn" class="nav-btn" title="Quick Search" aria-label="Quick Search">${I.search}</button>
                ${isIndex ? '' : `<button type="button" id="navBookmarkBtn" class="nav-btn" title="Bookmark Page" aria-label="Bookmark Page">${I.star}</button>`}
                <button type="button" id="darkModeToggleNav" class="nav-btn" title="Toggle Dark/Light Mode" aria-label="Toggle Theme">${I.moon}</button>
            </div>
        </div>

        <div id="awraadDrawerBackdrop" class="drawer-backdrop print-none"></div>
        <aside id="awraadSideDrawer" class="side-drawer print-none" dir="ltr" aria-label="Navigation Menu">
            <div class="drawer-header">
                <div class="drawer-header-top">
                    <div class="drawer-logo-badge">
                        <img id="drawerBrandLogo" src="./icon-192.png" alt="Awraad">
                    </div>
                    <div class="drawer-brand-text">
                        <div class="drawer-brand-en">Awraad e Alaviya Nooriya</div>
                        <div class="drawer-brand-ar" dir="rtl">أَوْرَادُ الْعَلَوِيَّةِ النُّوْرِيَّةِ</div>
                    </div>
                    <button type="button" id="closeDrawerBtn" class="drawer-close-btn" title="Close Menu" aria-label="Close Menu">${I.close}</button>
                </div>
                <div class="drawer-date-strip">
                    <span class="drawer-greg-date">${gregTodayStr}</span>
                    <span id="drawerHijriDate" class="drawer-hijri-date" dir="rtl"></span>
                </div>
            </div>
            <div id="drawerPrayerDetailsLine" class="drawer-pt-sticky-bar" dir="ltr"></div>

            <div class="drawer-body">
                <div class="drawer-group-label">Navigation</div>
                <a href="${indexPath}" class="drawer-item drawer-close-on-click">
                    <span class="drawer-item-icon">${I.home}</span>
                    <span class="drawer-item-label">Main Menu</span>
                </a>
                <a href="#" id="openQuickSearchDrawerBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.search}</span>
                    <span class="drawer-item-label">Quick Search</span>
                </a>
                <a href="#" id="openBookmarksBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.star}</span>
                    <span class="drawer-item-label">Bookmarks &amp; Favorites</span>
                    <span id="drawerBookmarkCount" class="drawer-badge-pill">0</span>
                </a>

                <hr class="drawer-divider">
                <div class="drawer-group-label">Shajara &amp; Awraad</div>

                <button type="button" class="drawer-submenu-toggle" data-target="submenu-shajara">
                    <span class="drawer-item-icon">${I.scroll}</span>
                    <span class="drawer-item-label">Shajara e Shareef</span>
                    <span class="drawer-chevron">${I.chevronDown}</span>
                </button>
                <div id="submenu-shajara" class="drawer-submenu">
                    <a href="${shajaraBase}#qadriya" class="drawer-close-on-click">Silsila e Qadriya</a>
                    <a href="${shajaraBase}#chishtiyya" class="drawer-close-on-click">Silsila e Chishtiya</a>
                    <a href="${shajaraBase}#akbariya" class="drawer-close-on-click">Silsila e Akbariya</a>
                    <a href="${shajaraBase}#asnaad" class="drawer-close-on-click">Asnad e Dalail-ul-Khairat</a>
                </div>

                <button type="button" class="drawer-submenu-toggle" data-target="submenu-awraad">
                    <span class="drawer-item-icon">${I.book}</span>
                    <span class="drawer-item-label">Awraad o Wazaef</span>
                    <span class="drawer-chevron">${I.chevronDown}</span>
                </button>
                <div id="submenu-awraad" class="drawer-submenu">
                    <a href="${shajaraBase}#rozana" class="drawer-close-on-click">Rozana</a>
                    <a href="${shajaraBase}#fajr-maghrib" class="drawer-close-on-click">Fajr / Maghrib</a>
                    <a href="${shajaraBase}#har-namaz" class="drawer-close-on-click">Har Namaaz</a>
                    <a href="${shajaraBase}#haftawari" class="drawer-close-on-click">Haftwaar</a>
                </div>

                <hr class="drawer-divider">
                <div class="drawer-group-label">Majalis &amp; Tools</div>

                <a href="#" id="openLiveSessionBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.video}</span>
                    <span class="drawer-item-label">Live Session (Meet)</span>
                </a>
                <a href="#" id="openEventsCalendarBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.calendar}</span>
                    <span class="drawer-item-label">Calendar &amp; Urs Alerts</span>
                </a>
                <a href="#" id="openTasbeehBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.beads}</span>
                    <span class="drawer-item-label">Tasbeeh Counter</span>
                </a>
                <a href="#" id="openAutoScrollBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.autoscroll}</span>
                    <span class="drawer-item-label">Auto-Scroll Reading</span>
                </a>
                <a href="#" id="openPrayerTimesBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.mosque}</span>
                    <span class="drawer-item-label">Prayer Times</span>
                </a>

                <hr class="drawer-divider">
                <div class="drawer-group-label">Preferences</div>
                <a href="#" id="openSettingsBtn" class="drawer-item">
                    <span class="drawer-item-icon">${I.settings}</span>
                    <span class="drawer-item-label">Display &amp; Font Settings</span>
                </a>
            </div>
        </aside>
        `;

        if (!document.getElementById('awraad-navbar-top-fix')) {
            const topFixStyle = document.createElement('style');
            topFixStyle.id = 'awraad-navbar-top-fix';
            topFixStyle.textContent = `
                @media screen {
                    html, body {
                        margin-top: 0 !important;
                        padding-top: 0 !important;
                    }
                    #injected-app-navbar.app-navbar {
                        position: sticky !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        width: 100% !important;
                        margin-top: 0 !important;
                        box-sizing: border-box !important;
                    }
                    #readingProgressTrack.reading-progress-track {
                        position: fixed !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        width: 100% !important;
                        height: 3px !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        background: transparent !important;
                        pointer-events: none !important;
                        z-index: 9500 !important;
                    }
                }
            `;
            document.head.appendChild(topFixStyle);
        }

        document.body.insertAdjacentHTML('afterbegin', navbarHTML);

        // Logo fallback inside drawer header
        const drawerLogo = document.getElementById('drawerBrandLogo');
        if (drawerLogo) {
            const logoFb = ['./icon.png', './icon.jpg', './apple-touch-icon.png', '../icon-192.png'];
            let fbI = 0;
            drawerLogo.addEventListener('error', () => {
                if (fbI < logoFb.length) drawerLogo.src = logoFb[fbI++];
                else if (drawerLogo.parentElement) drawerLogo.parentElement.style.display = 'none';
            });
        }

        const openDrawerBtn = document.getElementById('openDrawerBtn');
        const closeDrawerBtn = document.getElementById('closeDrawerBtn');
        const drawerBackdrop = document.getElementById('awraadDrawerBackdrop');
        const sideDrawer = document.getElementById('awraadSideDrawer');

        function closeAllSubmenus() {
            document.querySelectorAll('.drawer-submenu.open').forEach(sub => sub.classList.remove('open'));
            document.querySelectorAll('.drawer-submenu-toggle.active').forEach(btn => btn.classList.remove('active'));
        }

        function openDrawer() {
            if (typeof window.awraadCloseShortcutRail === 'function') {
                window.awraadCloseShortcutRail();
            }
            if (!sideDrawer || !drawerBackdrop) return;
            const navEl = document.getElementById('injected-app-navbar');
            if (navEl) { navEl.classList.remove('navbar-hidden'); navEl.style.transform = 'none'; }
            const navHijri = document.getElementById('navHijriDate');
            const drHijri = document.getElementById('drawerHijriDate');
            if (navHijri && drHijri && navHijri.textContent) {
                drHijri.textContent = navHijri.textContent;
            }
            if (typeof window.awraadRefreshBookmarkBadge === 'function') {
                window.awraadRefreshBookmarkBadge();
            }
            drawerBackdrop.classList.add('open');
            sideDrawer.classList.add('open');
        }

        function closeDrawer() {
            if (drawerBackdrop) drawerBackdrop.classList.remove('open');
            if (sideDrawer) sideDrawer.classList.remove('open');
            closeAllSubmenus();
        }

        window.awraadOpenDrawer = openDrawer;
        window.awraadCloseDrawer = closeDrawer;

        if (openDrawerBtn) openDrawerBtn.addEventListener('click', (e) => { e.stopPropagation(); openDrawer(); });
        if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
        if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

        // Smooth swipe-left to close drawer
        if (sideDrawer) {
            let touchStartX = 0;
            let touchStartY = 0;
            sideDrawer.addEventListener('touchstart', (e) => {
                if (e.touches.length === 1) {
                    touchStartX = e.touches[0].clientX;
                    touchStartY = e.touches[0].clientY;
                }
            }, { passive: true });
            sideDrawer.addEventListener('touchend', (e) => {
                if (!e.changedTouches || !e.changedTouches.length) return;
                const dx = e.changedTouches[0].clientX - touchStartX;
                const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
                if (dx < -60 && dy < 70) closeDrawer();
            }, { passive: true });
        }

        const submenuToggles = document.querySelectorAll('#awraadSideDrawer .drawer-submenu-toggle');
        submenuToggles.forEach(function(toggleBtn) {
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const targetSubmenu = document.getElementById(toggleBtn.getAttribute('data-target'));
                if (!targetSubmenu) return;
                const isCurrentlyOpen = targetSubmenu.classList.contains('open');
                closeAllSubmenus();
                if (!isCurrentlyOpen) {
                    targetSubmenu.classList.add('open');
                    toggleBtn.classList.add('active');
                }
            });
        });

        document.querySelectorAll('#awraadSideDrawer .drawer-close-on-click').forEach(function(item) {
            item.addEventListener('click', closeDrawer);
        });

        // UNIVERSAL GLOBAL LINK INTERCEPTOR
        const ignoredLinkIds = new Set([
            'openTasbeehBtn', 'openPrayerTimesBtn', 'openSettingsBtn',
            'openLiveSessionBtn', 'openEventsCalendarBtn', 'openBookmarksBtn',
            'openQuickSearchDrawerBtn', 'openAutoScrollBtn', 'langToggleBtn'
        ]);
        document.body.addEventListener('click', function(e) {
            let link = e.target.closest('a');
            if (!link) return;

            let href = link.getAttribute('href');
            if (!href || href === '#' || href.startsWith('javascript:')) return;
            if (ignoredLinkIds.has(link.id)) return;

            if (window.tasbeehSessionActive) {
                e.preventDefault();
                e.stopPropagation();
                pendingNavUrl = href;
                pendingNavAction = null;
                showNavWarning();
            }
        }, true);

        // Open Tasbeeh lazily on click
        const openTasbeehBtn = document.getElementById('openTasbeehBtn');
        if (openTasbeehBtn) {
            openTasbeehBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeDrawer();
                ensureTasbeehModal();
                const modal = document.getElementById('tasbeehModal');
                const minBar = document.getElementById('tasbeehMinimized');
                if (minBar) minBar.style.display = 'none';
                if (modal) modal.classList.add('show');
                if (typeof refreshTasbeehLayoutRef === 'function') refreshTasbeehLayoutRef();
            });
        }

        // Dark mode toggle with crisp SVG Sun/Moon icons
        const navDarkModeBtn = document.getElementById('darkModeToggleNav');
        const body = document.body;

        function setDarkModeIcon(isDark) {
            const btn = document.getElementById('darkModeToggleNav');
            if (btn) btn.innerHTML = isDark ? I.sun : I.moon;
        }
        window.awraadSetDarkModeIcon = setDarkModeIcon;

        if (localStorage.getItem('theme') === 'dark' || body.classList.contains('dark-mode')) {
            body.classList.add('dark-mode');
            document.documentElement.classList.add('dark-mode');
            setDarkModeIcon(true);
        } else {
            setDarkModeIcon(false);
        }

        if (navDarkModeBtn) {
            navDarkModeBtn.addEventListener('click', function() {
                body.classList.toggle('dark-mode');
                const isDarkNow = body.classList.contains('dark-mode');
                document.documentElement.classList.toggle('dark-mode', isDarkNow);
                localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
                setDarkModeIcon(isDarkNow);
                if (typeof window.clearCustomColorsForDarkToggle === 'function') {
                    window.clearCustomColorsForDarkToggle();
                }
            });
        }

        // Popstate trap for active Tasbeeh session
        window.addEventListener('popstate', function(e) {
            if (window.tasbeehSessionActive) {
                let currentLevel = 0;
                if (e.state && e.state.tasbeehTrap) {
                    currentLevel = e.state.tasbeehTrap;
                }
                let needed = TRAP_DEPTH - currentLevel;
                for (let i = 1; i <= needed; i++) {
                    try {
                        history.pushState({tasbeehTrap: currentLevel + i}, null, '#t-' + (currentLevel + i));
                    } catch(err) {}
                }
                pendingNavAction = 'browser_back';
                pendingNavUrl = null;
                showNavWarning();
            }
        });

        window.addEventListener('beforeunload', function(e) {
            if (window.tasbeehSessionActive) {
                e.preventDefault();
                e.returnValue = 'Tasbeeh is active. Are you sure you want to exit?';
                return e.returnValue;
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbarSystem);
    } else {
        initNavbarSystem();
    }
})();

// ==========================================
// PART 5: FAST LAZY TAJWEED RULES PROCESSING (PER-SECTION + CHUNKED)
// ==========================================
(function() {
    try {
        // Pre-compile all regular expressions ONCE (huge speedup on mobile)
        var sepPlus = "((?:###PROTECT_\\d+###|<[^>]+>|\\s|\\*|۝|\\u200C|\\u200D)+)";
        var sepStar = "((?:###PROTECT_\\d+###|<[^>]+>|\\s|\\*|۝|\\u200C|\\u200D)*)";
        var tanweenNoonRegex = "([\\u0621-\\u064A](?:[\\u064B-\\u065F\\u0670]*[\\u0627\\u0649])?[\\u064B-\\u065F\\u0670]*(?:[\\u064B\\u064C\\u064D]|\\u0646\\u0652?)[\\u0627\\u0649]?)";

        var unwrapAllahRegex = /<span[^>]*class="allah-name"[^>]*>([\s\S]*?)<\/span>/g;
        var unwrapProphetRegex = /<span[^>]*class="prophet-name"[^>]*>([\s\S]*?)<\/span>/g;
        var allahRegex = /(اَللّٰهُمَّ|اللّٰهُمَّ|اَللَّهُمَّ|اللَّهُمَّ|لِلّٰهِ|لِلَّهِ|اَللّٰه[َُِ]?|اللّٰه[َُِ]?|اَللَّه[َُِ]?|اللَّه[َُِ]?)/g;
        var prophetRegex = /(مُحَمَّد[ًٌٍَُِ]?ا?)/g;

        var idghamGhunnahRegex = new RegExp(tanweenNoonRegex + sepPlus + "([ينمو])([\\u064B-\\u065F\\u0670]*)", "g");
        var idghamNoGhunnahRegex = new RegExp(tanweenNoonRegex + sepPlus + "([لر])([\\u064B-\\u065F\\u0670]*)", "g");
        var meemRegex = new RegExp("(\\u0645\\u0652?)" + sepPlus + "(\\u0645)([\\u064B-\\u065F\\u0670]*)", "g");
        var ikhfaShafawiRegex = new RegExp("(\\u0645\\u0652?)" + sepStar + "(ب)([\\u064B-\\u065F\\u0670]*)", "g");
        var ikhfaRegex = new RegExp(tanweenNoonRegex + sepStar + "([تثجدذزسشصضطظفقكک])([\\u064B-\\u065F\\u0670]*)", "g");
        var iqlaabRegex = new RegExp(tanweenNoonRegex + sepStar + "(ب)([\\u064B-\\u065F\\u0670]*)", "g");

        var maddCandidateRegex = /([\u0621-\u064A][\u064B-\u0652]*)((?:###PROTECT_\d+###|<[^>]+>|[\u200C\u200D])*)((?:[\u0627\u0648\u064A\u0649\u0622]\u0652?|\u0670[اى]?))([اى]?)((?:[\u0653\u06E4]?))((?:###PROTECT_\d+###|<[^>]+>|\s|\*|۝|[\u200C\u200D])*)((?:[ءأإئؤآ\u0674][\u064B-\u065F\u0670]*)|(?:ا[\u064B-\u065F\u0670]+))/g;
        var maddLazimRegex = /([\u0621-\u064A][\u064B-\u0652]*)((?:###PROTECT_\d+###|<[^>]+>|[\u200C\u200D])*)((?:[\u0627\u0648\u064A\u0649\u0622]\u0652?|\u0670[اى]?))([اى]?)((?:[\u0653\u06E4]?))((?:###PROTECT_\d+###|<[^>]+>|[\u200C\u200D])*)([\u0621-\u064A][\u064B-\u065F\u0670]*\u0651[\u064B-\u065F\u0670]*)/g;
        var silaTawilahRegex = /([\u0621-\u064A][\u064B-\u0652]*)((?:###PROTECT_\d+###|<[^>]+>|[\u200C\u200D])*)(\u0647[\u0656\u0657\u06E5\u06E6]+[\u0653\u06E4]?)((?:###PROTECT_\d+###|<[^>]+>|\s|\*|۝|[\u200C\u200D])+)((?:[ءأإئؤآ\u0674][\u064B-\u065F\u0670]*)|(?:ا[\u064B-\u065F\u0670]+))/g;

        var maddAlifRegex = /(\u0622[\u064B-\u065F\u0670]*)/g;
        var maddMarkRegex = /([\u0621-\u064A][\u064B-\u065F\u0670]*[\u0653\u06E4]+)/g;
        var maddSilaRegex = /(\u0647[\u0656\u0657\u06E5\u06E6]+[\u0653\u06E4]?)/g;
        var ghunnahMeemRegex = /(\u0645[\u064B-\u065F\u0670]*\u0651[\u064B-\u065F\u0670]*)/g;
        var ghunnahNoonRegex = /(\u0646[\u064B-\u065F\u0670]*\u0651[\u064B-\u065F\u0670]*)/g;

        var raRegex = /(?:([\u0621-\u064A])((?:<[^>]+>)*)([\u064B-\u065F\u0670]*))?((?:<[^>]+>|[\u200C\u200D]|\s)*)(\u0631)((?:<[^>]+>)*)([\u064B-\u065F\u0670]*)/g;
        var mustaliyahRegex = /([خصضغطظق])((?:<[^>]+>)*)([\u064B-\u065F\u0670]*)/g;
        var qalqalahSukoonRegex = /([قطبجد])((?:<[^>]+>|[\u200C\u200D])*)([\u0652\u06DF])/g;
        var qalqalahWaqfRegex = /([قطبجد])((?:<[^>]+>|[\u200C\u200D])*)([\u064B-\u065F\u0670]*)((?:<[^>]+>|\s|\*)*(?:۝|❀|<span[^>]*class="waqf-mark"[^>]*>))/g;

        var arabicCheckRegex = /[\u0621-\u064A]/;
        var stripTagsProtectRegex = /###PROTECT_\d+###|<[^>]+>/g;

        function checkValidMadd(p1, maddLetterStr) {
            var hasFatha = p1.indexOf('\u064E') !== -1;
            var hasDamma = p1.indexOf('\u064F') !== -1;
            var hasKasra = p1.indexOf('\u0650') !== -1;
            var hasSukoon = p1.indexOf('\u0652') !== -1 || p1.indexOf('\u06DF') !== -1;
            var hasTanween = /[\u064B\u064C\u064D]/.test(p1);

            if (maddLetterStr.indexOf('\u0670') !== -1 || maddLetterStr.indexOf('\u0622') !== -1) return true;
            if (hasTanween || hasSukoon) return false;

            if (maddLetterStr.indexOf('\u0627') !== -1) {
                return !(hasDamma || hasKasra);
            } else if (maddLetterStr.indexOf('\u0648') !== -1) {
                return !(hasFatha || hasKasra);
            } else if (maddLetterStr.indexOf('\u064A') !== -1 || maddLetterStr.indexOf('\u0649') !== -1) {
                return !(hasFatha || hasDamma);
            }
            return false;
        }

        function processSingleEntry(entry) {
            if (!entry || entry.dataset.tajweedDone === '1') return;
            entry.dataset.tajweedDone = '1';

            var htmlContent = entry.innerHTML;

            // Auto-Color sacred names
            htmlContent = htmlContent.replace(unwrapAllahRegex, '$1');
            htmlContent = htmlContent.replace(unwrapProphetRegex, '$1');
            htmlContent = htmlContent.replace(allahRegex, '<span class="allah-name">$1</span>');
            htmlContent = htmlContent.replace(prophetRegex, '<span class="prophet-name">$1</span>');

            entry.innerHTML = htmlContent;

            // Protect excluded nodes
            var protectedItems = [];
            var protectNodes = [];
            var nodeList = entry.querySelectorAll('.no-tajweed, .repeat-badge, .dua-note, .wasl-wrapper');

            for (var n = 0; n < nodeList.length; n++) { protectNodes.push(nodeList[n]); }
            if (protectNodes.length > 1) {
                protectNodes.sort(function(a, b) { return (b.compareDocumentPosition(a) & 16) ? -1 : 1; });
            }

            for (var pIdx = 0; pIdx < protectNodes.length; pIdx++) {
                var el = protectNodes[pIdx];
                if (!el.parentNode) continue;
                var marker = '###PROTECT_' + protectedItems.length + '###';
                protectedItems.push(el.outerHTML);
                el.parentNode.replaceChild(document.createTextNode(marker), el);
            }

            htmlContent = entry.innerHTML;

            // Fast path: if no unprotected Arabic letters remain (e.g. pure .no-tajweed Urdu entries), skip heavy Tajweed regexes!
            var unprotectedText = htmlContent.replace(stripTagsProtectRegex, '');
            if (arabicCheckRegex.test(unprotectedText)) {
                htmlContent = htmlContent.replace(idghamGhunnahRegex, function(match, p1, sep, p2, p3) {
                    var finalHarakaat = p3; if (finalHarakaat.indexOf('\u0651') === -1) { finalHarakaat = '\u0651' + finalHarakaat; }
                    return '<span class="tajweed-idgham tajweed-ghunnah">' + p1 + '</span>' + sep + '<span class="tajweed-idgham tajweed-ghunnah">' + p2 + finalHarakaat + '</span>';
                });

                htmlContent = htmlContent.replace(idghamNoGhunnahRegex, function(match, p1, sep, p2, p3) {
                    var finalHarakaat = p3; if (finalHarakaat.indexOf('\u0651') === -1) { finalHarakaat = '\u0651' + finalHarakaat; }
                    return '<span class="tajweed-idgham tajweed-idgham-no-ghunnah">' + p1 + '</span>' + sep + '<span class="tajweed-idgham tajweed-idgham-no-ghunnah">' + p2 + finalHarakaat + '</span>';
                });

                htmlContent = htmlContent.replace(meemRegex, function(match, p1, sep, p2, p3) {
                    var finalHarakaat = p3; if (finalHarakaat.indexOf('\u0651') === -1) { finalHarakaat = '\u0651' + finalHarakaat; }
                    return '<span class="tajweed-idgham tajweed-ghunnah">' + p1 + '</span>' + sep + '<span class="tajweed-idgham tajweed-ghunnah">' + p2 + finalHarakaat + '</span>';
                });

                htmlContent = htmlContent.replace(ikhfaShafawiRegex, function(match, p1, sep, p2, p3) {
                    return (sep === "") ? '<span class="tajweed-ikhfa tajweed-ghunnah">' + p1 + p2 + p3 + '</span>' : '<span class="tajweed-ikhfa tajweed-ghunnah">' + p1 + '</span>' + sep + '<span class="tajweed-ikhfa tajweed-ghunnah">' + p2 + p3 + '</span>';
                });

                htmlContent = htmlContent.replace(ikhfaRegex, function(match, p1, sep, p2, p3) {
                    return (sep === "") ? '<span class="tajweed-ikhfa tajweed-ghunnah">' + p1 + p2 + p3 + '</span>' : '<span class="tajweed-ikhfa tajweed-ghunnah">' + p1 + '</span>' + sep + '<span class="tajweed-ikhfa tajweed-ghunnah">' + p2 + p3 + '</span>';
                });

                htmlContent = htmlContent.replace(iqlaabRegex, function(match, p1, sep, p2, p3) {
                    var cleanP1 = p1.replace('\u06E2', '');
                    if (sep === "") {
                        var coloredMeem = '\u200D<span class="tajweed-iqlab-meem" style="display: inline-block; width: 0; line-height: 0; position: relative; top: -0.4em; font-weight: bold; overflow: visible; z-index: 10;">\u200D\u06E2</span>\u200D';
                        return '<span class="tajweed-iqlab tajweed-ghunnah">' + cleanP1 + coloredMeem + p2 + p3 + '</span>';
                    } else {
                        var coloredMeem = '<span class="tajweed-iqlab-meem" style="display: inline-block; width: 0; line-height: 0; position: relative; top: -0.4em; font-weight: bold; overflow: visible; z-index: 10;">\u200C\u06E2</span>';
                        return '<span class="tajweed-iqlab tajweed-ghunnah">' + cleanP1 + coloredMeem + '</span>' + sep + '<span class="tajweed-iqlab tajweed-ghunnah">' + p2 + p3 + '</span>';
                    }
                });

                htmlContent = htmlContent.replace(maddCandidateRegex, function(match, p1, tags1, maddChar, zaaedChar, existingMadd, sep, nextWord) {
                    var isHamzatulWasl = false;
                    if (maddChar.indexOf('\u0627') !== -1) {
                        var p1Clean = p1.replace(/[\u064B-\u065F\u0670\u0652\u06DF\u0653\u06E4]/g, '');
                        var isBaKasra = (p1Clean === 'ب' && p1.indexOf('\u0650') !== -1);
                        var isLamKasra = (p1Clean === 'ل' && p1.indexOf('\u0650') !== -1);
                        if ((p1Clean === 'و' || p1Clean === 'ف' || p1Clean === 'ك' || isBaKasra || isLamKasra || p1Clean === 'أ' || p1Clean === 'لّ') && nextWord.indexOf('\u0651') !== -1) { isHamzatulWasl = true; }
                        if (p1.indexOf('\u0653') !== -1 || p1.indexOf('\u06E4') !== -1) { isHamzatulWasl = true; }
                    }
                    if (checkValidMadd(p1, maddChar) && !isHamzatulWasl) {
                        var finalMaddMark = existingMadd ? existingMadd : (maddChar.indexOf('\u0622') === -1 ? '\u0653' : '');
                        if (tags1.indexOf('<') === -1) {
                            return '<span class="tajweed-madd">' + p1 + tags1 + maddChar + finalMaddMark + '</span>' + zaaedChar + sep + '<span class="tajweed-madd">' + nextWord + '</span>';
                        } else {
                            return p1 + tags1 + '<span class="tajweed-madd">' + maddChar + finalMaddMark + '</span>' + zaaedChar + sep + '<span class="tajweed-madd">' + nextWord + '</span>';
                        }
                    }
                    return match;
                });

                htmlContent = htmlContent.replace(maddLazimRegex, function(match, p1, tags1, maddChar, zaaedChar, existingMadd, sep, nextWord) {
                    var isHamzatulWasl = false;
                    if (maddChar.indexOf('\u0627') !== -1) {
                        var p1Clean = p1.replace(/[\u064B-\u065F\u0670\u0652\u06DF\u0653\u06E4]/g, '');
                        var isBaKasra = (p1Clean === 'ب' && p1.indexOf('\u0650') !== -1);
                        var isLamKasra = (p1Clean === 'ل' && p1.indexOf('\u0650') !== -1);
                        if ((p1Clean === 'و' || p1Clean === 'ف' || p1Clean === 'ك' || isBaKasra || isLamKasra || p1Clean === 'أ' || p1Clean === 'لّ') && nextWord.indexOf('\u0651') !== -1) { isHamzatulWasl = true; }
                        if (p1.indexOf('\u0653') !== -1 || p1.indexOf('\u06E4') !== -1) { isHamzatulWasl = true; }
                    }
                    if (checkValidMadd(p1, maddChar) && !isHamzatulWasl) {
                        var finalMaddMark = existingMadd ? existingMadd : (maddChar.indexOf('\u0622') === -1 ? '\u0653' : '');
                        if (tags1.indexOf('<') === -1) {
                            return '<span class="tajweed-madd">' + p1 + tags1 + maddChar + finalMaddMark + '</span>' + zaaedChar + sep + nextWord;
                        } else {
                            return p1 + tags1 + '<span class="tajweed-madd">' + maddChar + finalMaddMark + '</span>' + zaaedChar + sep + nextWord;
                        }
                    }
                    return match;
                });

                htmlContent = htmlContent.replace(silaTawilahRegex, function(match, p1, tags1, p2, p3, p4) {
                    var finalP2 = (p2.indexOf('\u0653') !== -1 || p2.indexOf('\u06E4') !== -1) ? p2 : p2 + '\u0653';
                    if (tags1.indexOf('<') === -1) { return '<span class="tajweed-madd">' + p1 + tags1 + finalP2 + '</span>' + p3 + '<span class="tajweed-madd">' + p4 + '</span>'; }
                    else { return p1 + tags1 + '<span class="tajweed-madd">' + finalP2 + '</span>' + p3 + '<span class="tajweed-madd">' + p4 + '</span>'; }
                });

                htmlContent = htmlContent.replace(maddAlifRegex, '<span class="tajweed-madd">$1</span>');
                htmlContent = htmlContent.replace(maddMarkRegex, '<span class="tajweed-madd">$1</span>');
                htmlContent = htmlContent.replace(maddSilaRegex, '<span class="tajweed-madd">$1</span>');
                htmlContent = htmlContent.replace(ghunnahMeemRegex, '<span class="tajweed-ghunnah">$1</span>');
                htmlContent = htmlContent.replace(ghunnahNoonRegex, '<span class="tajweed-ghunnah">$1</span>');

                htmlContent = htmlContent.replace(raRegex, function(match, p1, t1, h1, sep, ra, t2, h2) {
                    p1 = p1 || ''; t1 = t1 || ''; h1 = h1 || ''; sep = sep || ''; t2 = t2 || ''; h2 = h2 || '';
                    var isPur = false; var isBaareek = false;
                    var hasFathaDamma = /[\u064E\u064F\u064B\u064C]/.test(h2);
                    var hasKasra = /[\u0650\u064D]/.test(h2);
                    var isSakin = /[\u0652\u06DF]/.test(h2) || (!hasFathaDamma && !hasKasra && h2 !== "");

                    if (hasFathaDamma) { isPur = true; } else if (hasKasra) { isBaareek = true; } else if (isSakin || h2 === "") {
                        if (/[\u064E\u064F\u064B\u064C]/.test(h1)) { isPur = true; } else if (/[\u0650\u064D]/.test(h1)) { isBaareek = true; } else { isPur = true; }
                    }
                    if (isPur) { return p1 + t1 + h1 + sep + '<span class="tajweed-ra-pur" style="font-weight: bold;">' + ra + t2 + h2 + '</span>'; }
                    else if (isBaareek) { return p1 + t1 + h1 + sep + '<span class="tajweed-ra-baareek" style="font-weight: bold;">' + ra + t2 + h2 + '</span>'; }
                    return match;
                });

                htmlContent = htmlContent.replace(mustaliyahRegex, function(match, letter, tags, harakaat) {
                    return '<span class="tajweed-mustaliyah" style="font-weight: bold;">' + letter + tags + harakaat + '</span>';
                });

                htmlContent = htmlContent.replace(qalqalahSukoonRegex, function(match, letter, tags, sukoon) {
                    return '<span class="tajweed-qalqalah" style="font-weight: bold;">' + letter + tags + sukoon + '</span>';
                });

                htmlContent = htmlContent.replace(qalqalahWaqfRegex, function(match, letter, tags, harakaat, waqfMarker) {
                    return '<span class="tajweed-qalqalah" style="font-weight: bold;">' + letter + tags + harakaat + '</span>' + waqfMarker;
                });
            }

            // UNMASK
            for (var i = protectedItems.length - 1; i >= 0; i--) {
                htmlContent = htmlContent.replace('###PROTECT_' + i + '###', protectedItems[i]);
            }

            // IQLAAB & NOON-E-QUTNI WORD LOCK (only run split when actually needed!)
            if (htmlContent.indexOf('tajweed-iqlab-meem') !== -1 || htmlContent.indexOf('class="wasl-wrapper"') !== -1) {
                var tokens = htmlContent.split(/((?![^<]*>)\s+)/);
                for (var t = 0; t < tokens.length; t++) {
                    if (tokens[t].indexOf('tajweed-iqlab-meem') !== -1 || tokens[t].indexOf('class="wasl-wrapper"') !== -1) {
                        var startIdx = t; var endIdx = t;
                        var targetStr = tokens[t].indexOf('tajweed-iqlab-meem') !== -1 ? 'tajweed-iqlab-meem' : 'class="wasl-wrapper"';
                        var targetIndex = tokens[t].indexOf(targetStr);

                        var textBefore = tokens[t].substring(0, targetIndex).replace(/<[^>]+>/g, '');
                        if (!arabicCheckRegex.test(textBefore) && t >= 2) { startIdx = t - 2; }

                        var textAfter = tokens[t].substring(targetIndex).replace(/<[^>]+>/g, '');
                        if (!arabicCheckRegex.test(textAfter) && t + 2 < tokens.length) { endIdx = t + 2; }

                        var combined = "";
                        for (var j = startIdx; j <= endIdx; j++) {
                            if (tokens[j]) {
                                var safePart = tokens[j].replace(/(?![^<]*>)\s/g, '\u00A0');
                                combined += safePart;
                                tokens[j] = "";
                            }
                        }
                        tokens[t] = '<span class="word-lock tajweed-force-fix" style="white-space: nowrap !important; display: inline-block !important;">' + combined + '</span>';
                    }
                }
                htmlContent = tokens.join('');
            }

            entry.innerHTML = htmlContent;
        }

        function applyTajweedToContainer(rootNode, immediate) {
            var scope = rootNode || document;
            var pending = [];
            scope.querySelectorAll('.dua-entry').forEach(function(el) {
                if (el.dataset.tajweedDone === '1') return;
                if (el.classList.contains('repeat-heading') || el.classList.contains('fourteen-times-title') || el.classList.contains('asma-nabi-repeat-heading')) return;
                pending.push(el);
            });

            if (!pending.length) return;

            if (immediate || pending.length <= 6) {
                for (var i = 0; i < pending.length; i++) {
                    processSingleEntry(pending[i]);
                }
                return;
            }

            // Process first 5 visible entries immediately, then chunk remaining on animation frames so UI never freezes
            var idx = 0;
            var firstBatch = Math.min(5, pending.length);
            for (; idx < firstBatch; idx++) {
                processSingleEntry(pending[idx]);
            }

            function processNextChunk() {
                var end = Math.min(idx + 5, pending.length);
                for (; idx < end; idx++) {
                    processSingleEntry(pending[idx]);
                }
                if (idx < pending.length) {
                    requestAnimationFrame(processNextChunk);
                } else {
                    try { window.dispatchEvent(new CustomEvent('awraad:tajweeddone')); } catch (err) {}
                }
            }
            requestAnimationFrame(processNextChunk);
        }

        window.applyTajweedToContainer = applyTajweedToContainer;

        function applyTajweedOnBoot() {
            var sections = document.querySelectorAll('.hizb-section, .index-section, .shijra-section');
            if (sections.length > 0) {
                // Only process currently active section (hidden sections will be processed lazily when opened!)
                var activeSec = document.querySelector('.hizb-section.active, .index-section.active, .shijra-section.active');
                if (activeSec) {
                    applyTajweedToContainer(activeSec, false);
                }
                // Also process any standalone .dua-entry outside section wrappers
                document.querySelectorAll('.dua-entry').forEach(function(el) {
                    if (el.dataset.tajweedDone === '1') return;
                    if (!el.closest('.hizb-section, .index-section, .shijra-section')) {
                        processSingleEntry(el);
                    }
                });
            } else {
                applyTajweedToContainer(document, false);
            }
        }

        if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", applyTajweedOnBoot); }
        else { applyTajweedOnBoot(); }
    } catch (error) { console.error("Tajweed Execution Error: ", error); }
})();

// ==========================================
// PART 6: UI & DYNAMIC PRINT PAGINATION (PRINT-ONLY, ZERO SCREEN LAG)
// ==========================================
(function () {
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
  }

  function applySmartPrintPagination() {
      // Ensure all sections have Tajweed applied before printing
      if (typeof window.applyTajweedToContainer === 'function') {
          window.applyTajweedToContainer(document, true);
      }

      document.querySelectorAll('.smart-page-break').forEach(function(el) { el.remove(); });
      var pageHeight = 980;
      var thresholdSection = pageHeight * 0.50;
      var thresholdDurood = pageHeight * 0.85;

      function getDocOffsetTop(elem) {
          var box = elem.getBoundingClientRect();
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return box.top + scrollTop;
      }

      var container = document.querySelector('.continuous-inner');
      if (!container) return;
      var currentPageTop = getDocOffsetTop(container);
      var reachedFatiha = false;
      var elements = Array.from(document.querySelectorAll('.section-group, .fatiha-dua-wrapper, .dua-entry'));

      elements.forEach(function(el) {
          if (el.offsetHeight === 0 || el.closest('.no-smart-break')) return;

          if (!reachedFatiha) {
              if (el.classList.contains('fatiha-dua-wrapper') || el.textContent.indexOf('فَاتِحَةُ الْأَوْرَادِ') !== -1) {
                  reachedFatiha = true;
                  currentPageTop = getDocOffsetTop(el);
              }
              return;
          }

          var elTop = getDocOffsetTop(el);
          var posOnPage = elTop - currentPageTop;

          while (posOnPage >= pageHeight) {
              currentPageTop += pageHeight;
              posOnPage = elTop - currentPageTop;
          }

          if (posOnPage < 50) return;

          var elHeight = el.offsetHeight;
          var shouldBreak = false;
          var isSection = el.classList.contains('section-group') || el.classList.contains('section-heading');

          if (isSection && posOnPage > thresholdSection && posOnPage < (pageHeight - 20)) { shouldBreak = true; }
          var isDuroodSegment = el.classList.contains('dua-entry') && !isSection;
          if (isDuroodSegment && posOnPage > thresholdDurood && (posOnPage + elHeight) > pageHeight) { shouldBreak = true; }

          if (shouldBreak) {
              var breakDiv = document.createElement('div');
              breakDiv.className = 'smart-page-break';
              el.parentNode.insertBefore(breakDiv, el);
              currentPageTop = getDocOffsetTop(el);
          }
      });
  }

  // Only run heavy print pagination when actually printing (removed slow 800ms window.load reflow)
  window.addEventListener('beforeprint', applySmartPrintPagination);
})();

// ==========================================
// PART 7: GLOBAL ZIKR TIMER (MOBILE UPPER/LOWER BUTTONS + 3X ALLAH.MP3 WEB AUDIO ENGINE)
// ==========================================
(function() {
    const AUDIO_CANDIDATES = ['./allah.mp3', './timer-durood.mp3'];
    const REPEAT_TIMES = 3;
    let audioCtx = null;
    let decodedBuffer = null;
    let decodePromise = null;
    let activeSources = [];
    let htmlAudio = null;
    let htmlPlaysLeft = 0;

    function isTvDevice() {
        const ua = navigator.userAgent || '';
        if (/(Android TV|GoogleTV|SMART-TV|SmartTV|BRAVIA|MIBOX|SHIELD|Leanback|CrKey)/i.test(ua)) return true;
        return Boolean(document.body && document.body.classList.contains('awraad-tv'));
    }

    function ensureAudioContext() {
        try {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return null;
            if (!audioCtx) audioCtx = new AC();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume().catch(function() {});
            }
            return audioCtx;
        } catch (e) {
            return null;
        }
    }

    function preloadDecodedAudio() {
        if (decodedBuffer) return Promise.resolve(decodedBuffer);
        if (decodePromise) return decodePromise;
        const ctx = ensureAudioContext();
        if (!ctx || typeof fetch !== 'function') return Promise.resolve(null);

        function tryNext(idx) {
            if (idx >= AUDIO_CANDIDATES.length) return Promise.resolve(null);
            return fetch(AUDIO_CANDIDATES[idx])
                .then(function(res) {
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    return res.arrayBuffer();
                })
                .then(function(buf) {
                    return new Promise(function(resolve, reject) {
                        ctx.decodeAudioData(buf.slice(0), resolve, reject);
                    });
                })
                .then(function(audioBuf) {
                    decodedBuffer = audioBuf;
                    return audioBuf;
                })
                .catch(function() {
                    return tryNext(idx + 1);
                });
        }

        decodePromise = tryNext(0).then(function(b) {
            if (!b) decodePromise = null;
            return b;
        });
        return decodePromise;
    }

    function ensureHtmlAudio() {
        if (!htmlAudio) {
            htmlAudio = new Audio(AUDIO_CANDIDATES[0]);
            htmlAudio.preload = 'auto';
            htmlAudio.addEventListener('ended', function() {
                if (htmlPlaysLeft > 0) {
                    htmlPlaysLeft--;
                    htmlAudio.currentTime = 0;
                    const p = htmlAudio.play();
                    if (p && typeof p.catch === 'function') p.catch(function() {});
                }
            });
        }
        return htmlAudio;
    }

    function unlockAudioOnTap() {
        ensureAudioContext();
        preloadDecodedAudio();
        try {
            const a = ensureHtmlAudio();
            if (!a._awraadUnlocked) {
                const prevMuted = a.muted;
                a.muted = true;
                const p = a.play();
                if (p && typeof p.then === 'function') {
                    p.then(function() {
                        a.pause();
                        a.currentTime = 0;
                        a.muted = prevMuted;
                        a._awraadUnlocked = true;
                    }).catch(function() {
                        a.muted = prevMuted;
                    });
                }
            }
        } catch (e) {}
    }

    function stopDuroodAudio() {
        activeSources.forEach(function(src) {
            try { src.stop(0); } catch (e) {}
            try { src.disconnect(); } catch (e) {}
        });
        activeSources = [];
        htmlPlaysLeft = 0;
        if (htmlAudio) {
            try {
                htmlAudio.pause();
                htmlAudio.currentTime = 0;
            } catch (e) {}
        }
    }

    function playHtmlFallbackThreeTimes() {
        try {
            const a = ensureHtmlAudio();
            a.muted = false;
            a.currentTime = 0;
            htmlPlaysLeft = REPEAT_TIMES - 1;
            const p = a.play();
            if (p && typeof p.catch === 'function') {
                p.catch(function() { htmlPlaysLeft = 0; });
            }
        } catch (e) {}
    }

    function playDuroodThreeTimes() {
        stopDuroodAudio();
        const ctx = ensureAudioContext();
        if (ctx) {
            preloadDecodedAudio().then(function(buf) {
                if (!buf) {
                    playHtmlFallbackThreeTimes();
                    return;
                }
                const startPlay = function() {
                    const now = ctx.currentTime + 0.05;
                    const gap = 0.25;
                    const dur = buf.duration || 0;
                    for (let i = 0; i < REPEAT_TIMES; i++) {
                        const src = ctx.createBufferSource();
                        src.buffer = buf;
                        src.connect(ctx.destination);
                        src.start(now + i * (dur + gap));
                        activeSources.push(src);
                    }
                };
                if (ctx.state === 'suspended') {
                    ctx.resume().then(startPlay).catch(playHtmlFallbackThreeTimes);
                } else {
                    startPlay();
                }
            }).catch(playHtmlFallbackThreeTimes);
        } else {
            playHtmlFallbackThreeTimes();
        }
    }

    function initTimer() {
        const startBtns = document.querySelectorAll('.zikr-startBtn');
        const resetBtns = document.querySelectorAll('.zikr-resetBtn');
        const displays = document.querySelectorAll('.zikr-display');

        if (startBtns.length === 0) return;

        let timerInterval = null;
        let totalSeconds = 0;

        function updateAllDisplays() {
            const m = Math.floor(totalSeconds / 60);
            const s = totalSeconds % 60;
            const timeText = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
            displays.forEach(function(display) {
                display.innerText = timeText;
            });
        }

        function previewCardInputs(card) {
            if (!card || timerInterval) return;
            const minInput = card.querySelector('.zikr-minutes');
            const secInput = card.querySelector('.zikr-seconds');
            const m = Math.max(0, Math.min(999, parseInt(minInput && minInput.value, 10) || 0));
            const s = Math.max(0, Math.min(59, parseInt(secInput && secInput.value, 10) || 0));
            const disp = card.querySelector('.zikr-display');
            if (disp) {
                disp.innerText = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
            }
        }

        function attachMobileSteppers() {
            if (isTvDevice()) return;

            document.querySelectorAll('.timer-card').forEach(function(card) {
                const specs = [
                    { sel: '.zikr-minutes', min: 0, max: 999, wrap: false, label: 'Min' },
                    { sel: '.zikr-seconds', min: 0, max: 59, wrap: true, label: 'Sec' }
                ];

                specs.forEach(function(spec) {
                    const inp = card.querySelector(spec.sel);
                    if (!inp || inp.closest('.mobile-timer-stepper') || inp.closest('.tv-stepper-wrap')) return;

                    inp.setAttribute('min', String(spec.min));
                    inp.setAttribute('max', String(spec.max));
                    inp.setAttribute('inputmode', 'numeric');

                    const box = document.createElement('div');
                    box.className = 'mobile-timer-stepper';

                    const upBtn = document.createElement('button');
                    upBtn.type = 'button';
                    upBtn.className = 'mobile-timer-btn mobile-timer-up';
                    upBtn.setAttribute('aria-label', 'Increase ' + spec.label);
                    upBtn.innerHTML = '&#9650;';

                    const downBtn = document.createElement('button');
                    downBtn.type = 'button';
                    downBtn.className = 'mobile-timer-btn mobile-timer-down';
                    downBtn.setAttribute('aria-label', 'Decrease ' + spec.label);
                    downBtn.innerHTML = '&#9660;';

                    const unitLbl = document.createElement('span');
                    unitLbl.className = 'mobile-timer-unit';
                    unitLbl.textContent = spec.label;

                    function stepValue(delta) {
                        let cur = parseInt(inp.value, 10);
                        if (isNaN(cur)) cur = 0;
                        let next = cur + delta;
                        if (spec.wrap) {
                            if (next > spec.max) next = spec.min;
                            if (next < spec.min) next = spec.max;
                        } else {
                            next = Math.max(spec.min, Math.min(spec.max, next));
                        }
                        inp.value = String(next).padStart(2, '0');
                        previewCardInputs(card);
                    }

                    function bindHold(btn, delta) {
                        let holdDelay = null;
                        let holdRepeat = null;

                        function stopHold() {
                            if (holdDelay) { clearTimeout(holdDelay); holdDelay = null; }
                            if (holdRepeat) { clearInterval(holdRepeat); holdRepeat = null; }
                        }

                        btn.addEventListener('pointerdown', function(ev) {
                            ev.preventDefault();
                            stepValue(delta);
                            stopHold();
                            holdDelay = setTimeout(function() {
                                holdRepeat = setInterval(function() { stepValue(delta); }, 110);
                            }, 360);
                        });
                        btn.addEventListener('pointerup', stopHold);
                        btn.addEventListener('pointerleave', stopHold);
                        btn.addEventListener('pointercancel', stopHold);
                    }

                    bindHold(upBtn, 1);
                    bindHold(downBtn, -1);

                    inp.addEventListener('input', function() { previewCardInputs(card); });

                    inp.parentNode.insertBefore(box, inp);
                    box.appendChild(upBtn);
                    box.appendChild(inp);
                    box.appendChild(downBtn);
                    box.appendChild(unitLbl);
                });
            });
        }

        attachMobileSteppers();
        window.addEventListener('awraad:sectionchange', attachMobileSteppers);
        window.addEventListener('hashchange', attachMobileSteppers);

        startBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                clearInterval(timerInterval);
                timerInterval = null;
                stopDuroodAudio();
                unlockAudioOnTap();

                const card = btn.closest('.timer-card');
                const minInput = card ? card.querySelector('.zikr-minutes') : null;
                const secInput = card ? card.querySelector('.zikr-seconds') : null;

                const m = parseInt(minInput && minInput.value, 10) || 0;
                const s = parseInt(secInput && secInput.value, 10) || 0;

                if (m > 0 || s > 0) {
                    totalSeconds = (m * 60) + s;
                    updateAllDisplays();
                }

                if (totalSeconds <= 0) return;

                timerInterval = setInterval(function() {
                    totalSeconds--;
                    updateAllDisplays();

                    if (totalSeconds <= 0) {
                        clearInterval(timerInterval);
                        timerInterval = null;
                        playDuroodThreeTimes();
                    }
                }, 1000);
            });
        });

        resetBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                clearInterval(timerInterval);
                timerInterval = null;
                stopDuroodAudio();
                totalSeconds = 0;
                updateAllDisplays();

                document.querySelectorAll('.zikr-minutes').forEach(function(input) { input.value = ''; });
                document.querySelectorAll('.zikr-seconds').forEach(function(input) { input.value = ''; });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTimer);
    } else {
        initTimer();
    }
})();

// ==========================================
// PART 8: FAST HASH NAVIGATION (INSTANT SECTION TOGGLE + LAZY TAJWEED)
// ==========================================
(function() {
    function showActiveSection() {
        var hash = window.location.hash;
        if (hash.startsWith('#t-')) return;

        var sections = document.querySelectorAll('.hizb-section, .index-section, .shijra-section');
        if (!sections.length) return;

        var activeSection = null;
        if (hash && !hash.startsWith('#t-')) {
            try {
                activeSection = document.querySelector(hash);
            } catch (err) {}
        }

        if (!activeSection) {
            activeSection = document.getElementById('main-menu') ||
                            document.getElementById('index-menu') ||
                            document.getElementById('default-view') ||
                            sections[0];
        }

        sections.forEach(function(section) {
            if (section === activeSection) {
                section.classList.add('active');
            } else if (section.classList.contains('active')) {
                section.classList.remove('active');
            }
        });

        var hasPendingResume = false;
        try {
            var rawR = localStorage.getItem('awraad_pending_resume_v3') || sessionStorage.getItem('awraad_resume_scroll_target');
            if (rawR) {
                var parsedR = JSON.parse(rawR);
                if (parsedR && (!parsedR.expiresAt || Date.now() < parsedR.expiresAt)) {
                    hasPendingResume = true;
                }
            }
        } catch (err) {}
        if (!hasPendingResume) {
            window.scrollTo(0, 0);
        }

        // Lazily apply Tajweed only to the newly opened section (after paint for instant switch!)
        if (activeSection && typeof window.applyTajweedToContainer === 'function') {
            requestAnimationFrame(function() {
                window.applyTajweedToContainer(activeSection, false);
            });
        }

        try {
            window.dispatchEvent(new CustomEvent('awraad:sectionchange', {
                detail: { id: activeSection ? (activeSection.id || '') : '' }
            }));
        } catch (err) {}
    }

    window.showActiveSection = showActiveSection;

    document.addEventListener('click', function (e) {
        var anchor = e.target.closest('a');
        if (!anchor) return;

        var href = anchor.getAttribute('href');
        if (!href || href === '#' || href.startsWith('javascript:')) return;

        if (anchor.id === 'openTasbeehBtn' || anchor.id === 'openPrayerTimesBtn' || anchor.id === 'openSettingsBtn' || anchor.id === 'openLiveSessionBtn' || anchor.id === 'openEventsCalendarBtn' || anchor.id === 'openBookmarksBtn' || anchor.id === 'openQuickSearchDrawerBtn' || anchor.id === 'openAutoScrollBtn' || anchor.id === 'langToggleBtn') return;

        if (window.tasbeehSessionActive) {
            e.preventDefault();
            return;
        }

        let currentPath = window.location.pathname.split('/').pop().toLowerCase();
        if (currentPath === '' || currentPath === '/') currentPath = 'index.html';

        let linkPathFull = href.split('#')[0].toLowerCase();
        let linkPath = linkPathFull.split('/').pop();

        let isSamePage = (linkPath === '' || linkPath === currentPath);
        let hasHash = href.includes('#') && href.split('#')[1] !== '';

        if (isSamePage && hasHash) {
            e.preventDefault();
            try {
                if (typeof window.awraadFlushReadingProgress === 'function') {
                    window.awraadFlushReadingProgress();
                }
            } catch (err) {}
            var targetId = '#' + href.split('#')[1];
            if (window.location.hash !== targetId) {
                history.pushState(null, null, targetId);
            }
            showActiveSection();
        }
    });

    window.addEventListener('hashchange', function() {
        if (!window.location.hash.startsWith('#t-')) {
            showActiveSection();
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showActiveSection);
    } else {
        showActiveSection();
    }
})();

// ==========================================
// PART 9: LANGUAGE TOGGLE SYSTEM (URDU / ENGLISH)
// ==========================================
(function() {
    function initLangToggle() {
        const navbarRight = document.querySelector('.nav-right');
        
        // Bulletproof check for CX Explorer Android
        // Check if it's the Tajweed Explanation page via URL OR if language elements exist
        let currentUrl = window.location.href.toLowerCase();
        let isTajweedPage = currentUrl.indexOf('tajweed_coding_explanation') !== -1;
        let hasLangElements = document.querySelectorAll('.lang-ur, .lang-en').length > 0;
        
        if (!isTajweedPage && !hasLangElements) return; // Sirf Explanation page par chalay ga
        if (!navbarRight || document.getElementById('langToggleBtn')) return;

        const langBtn = document.createElement('button');
        langBtn.id = 'langToggleBtn';
        langBtn.className = 'nav-btn';
        langBtn.title = 'Switch Language (Urdu/English)';
        langBtn.innerText = 'EN / اردو';
        
        navbarRight.insertBefore(langBtn, navbarRight.firstChild);

        let currentLang = localStorage.getItem('guide_lang') || 'ur';
        setLanguage(currentLang);

        langBtn.addEventListener('click', function() {
            currentLang = currentLang === 'ur' ? 'en' : 'ur';
            localStorage.setItem('guide_lang', currentLang);
            setLanguage(currentLang);
        });

        function setLanguage(lang) {
            const urElements = document.querySelectorAll('.lang-ur');
            const enElements = document.querySelectorAll('.lang-en');
            
            if (lang === 'en') {
                urElements.forEach(el => el.style.display = 'none');
                enElements.forEach(el => el.style.display = 'block');
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', 'en');
                langBtn.innerText = 'اردو';
            } else {
                enElements.forEach(el => el.style.display = 'none');
                urElements.forEach(el => el.style.display = 'block');
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ur');
                langBtn.innerText = 'English';
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLangToggle);
    } else {
        initLangToggle();
    }
})();
// ==========================================
// PART 10: LAZY DISPLAY SETTINGS SYSTEM (ON-DEMAND FONTS, BRIGHTNESS, TAJWEED TOGGLE, ADAPTIVE THEME, PALETTE, HIJRI CORRECTION)
// ==========================================
(function() {
    let wakeLockSentinel = null;
    let settingsModalInitialized = false;
    const loadedFonts = { "'Amiri', serif": true };

    const NOTO_NASTALIQ_URL = "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap";
    const GULZAR_URL = "https://fonts.googleapis.com/css2?family=Gulzar&display=swap";
    const NOTO_NASKH_URL = "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;700&display=swap";

    const FONT_STYLESHEETS = {
        "'Amiri Quran', serif": "https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap",
        "'Scheherazade New', serif": "https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap",
        "'Lateef', serif": "https://fonts.googleapis.com/css2?family=Lateef:wght@400;700&display=swap",
        "'Noto Naskh Arabic', serif": NOTO_NASKH_URL,
        "'Aref Ruqaa', serif": "https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap",
        "'Harmattan', sans-serif": "https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&display=swap",
        "'Reem Kufi', sans-serif": "https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@500;700&display=swap",
        "'Mirza', serif": "https://fonts.googleapis.com/css2?family=Mirza:wght@400;700&display=swap",
        "'Siasat Noori Nastaleeq', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif": NOTO_NASTALIQ_URL,
        "'Munsif Noori Kasheeda', 'Jameel Noori Nastaleeq Kasheeda', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif": NOTO_NASTALIQ_URL,
        "'Faiz Lahori Nastaleeq', 'Jameel Noori Nastaleeq', 'Gulzar', 'Noto Nastaliq Urdu', serif": [GULZAR_URL, NOTO_NASTALIQ_URL],
        "'Mehr Nastaliq Web', 'Noto Nastaliq Urdu', serif": NOTO_NASTALIQ_URL,
        "'AlQalam Taj Nastaleeq', 'Noto Nastaliq Urdu', serif": NOTO_NASTALIQ_URL,
        "'Alvi Nastaleeq', 'Noto Nastaliq Urdu', serif": NOTO_NASTALIQ_URL,
        "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif": NOTO_NASTALIQ_URL,
        "'Noto Nastaliq Urdu', serif": NOTO_NASTALIQ_URL,
        "'Gulzar', serif": GULZAR_URL,
        "'Nafees Web Naskh', 'Noto Naskh Arabic', serif": NOTO_NASKH_URL
    };

    const URDU_STYLE_CLASSES = [
        'urdu-style-siasat',
        'urdu-style-munsif',
        'urdu-style-faiz',
        'urdu-style-mehr',
        'urdu-style-nafees'
    ];

    const ALLOWED_ARABIC_FONTS = new Set([
        "'Amiri', serif",
        "'Amiri Quran', serif",
        "'Scheherazade New', serif",
        "'Lateef', serif"
    ]);

    function normalizeArabicFontValue(fontVal) {
        if (!fontVal || !ALLOWED_ARABIC_FONTS.has(fontVal)) return null;
        return fontVal === "'Amiri', serif" ? null : fontVal;
    }

    function normalizeUrduFontValue(fontVal) {
        if (!fontVal) return null;
        if (fontVal === "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif") {
            return "'Siasat Noori Nastaleeq', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif";
        }
        return fontVal;
    }

    function getUrduStyleClass(fontVal) {
        if (!fontVal) return '';
        if (fontVal.includes('Siasat')) return 'urdu-style-siasat';
        if (fontVal.includes('Munsif')) return 'urdu-style-munsif';
        if (fontVal.includes('Faiz')) return 'urdu-style-faiz';
        if (fontVal.includes('Mehr')) return 'urdu-style-mehr';
        if (fontVal.includes('Nafees')) return 'urdu-style-nafees';
        return '';
    }

    function ensureFontLoaded(fontFamily) {
        if (!fontFamily || loadedFonts[fontFamily]) return;
        const entry = FONT_STYLESHEETS[fontFamily];
        if (!entry) return;
        loadedFonts[fontFamily] = true;
        const urls = Array.isArray(entry) ? entry : [entry];
        urls.forEach((url) => {
            if (loadedFonts[url]) return;
            loadedFonts[url] = true;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        });
    }
    window.awraadEnsureFontLoaded = ensureFontLoaded;

    const COLOR_PALETTES = [
        { primary: '#F44336', shades: ['#FFEBEE','#FFCDD2','#EF9A9A','#E57373','#EF5350','#F44336','#E53935','#D32F2F','#C62828','#B71C1C'] },
        { primary: '#E91E63', shades: ['#FCE4EC','#F8BBD0','#F48FB1','#F06292','#EC407A','#E91E63','#D81B60','#C2185B','#AD1457','#880E4F'] },
        { primary: '#9C27B0', shades: ['#F3E5F5','#E1BEE7','#CE93D8','#BA68C8','#AB47BC','#9C27B0','#8E24AA','#7B1FA2','#6A1B9A','#4A148C'] },
        { primary: '#673AB7', shades: ['#EDE7F6','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#5E35B1','#512DA8','#4527A0','#311B92'] },
        { primary: '#3F51B5', shades: ['#E8EAF6','#C5CAE9','#9FA8DA','#7986CB','#5C6BC0','#3F51B5','#3949AB','#303F9F','#283593','#1A237E'] },
        { primary: '#2196F3', shades: ['#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5','#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1'] },
        { primary: '#03A9F4', shades: ['#E1F5FE','#B3E5FC','#81D4FA','#4FC3F7','#29B6F6','#03A9F4','#039BE5','#0288D1','#0277BD','#01579B'] },
        { primary: '#00BCD4', shades: ['#E0F7FA','#B2EBF2','#80DEEA','#4DD0E1','#26C6DA','#00BCD4','#00ACC1','#0097A7','#00838F','#006064'] },
        { primary: '#009688', shades: ['#E0F2F1','#B2DFDB','#80CBC4','#4DB6AC','#26A69A','#009688','#00897B','#00796B','#00695C','#004D40'] },
        { primary: '#4CAF50', shades: ['#E8F5E9','#C8E6C9','#A5D6A7','#81C784','#66BB6A','#4CAF50','#43A047','#388E3C','#2E7D32','#1B5E20'] },
        { primary: '#8BC34A', shades: ['#F1F8E9','#DCEDC8','#C5E1A5','#AED581','#9CCC65','#8BC34A','#7CB342','#689F38','#558B2F','#33691E'] },
        { primary: '#CDDC39', shades: ['#F9FBE7','#F0F4C3','#E6EE9C','#DCE775','#D4E157','#CDDC39','#C0CA33','#AFB42B','#9E9D24','#827717'] },
        { primary: '#FFEB3B', shades: ['#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17'] },
        { primary: '#FFC107', shades: ['#FFF8E1','#FFECB3','#FFE082','#FFD54F','#FFCA28','#FFC107','#FFB300','#FFA000','#FF8F00','#FF6F00'] },
        { primary: '#FF9800', shades: ['#FFF3E0','#FFE0B2','#FFCC80','#FFB74D','#FFA726','#FF9800','#FB8C00','#F57C00','#EF6C00','#E65100'] },
        { primary: '#FF5722', shades: ['#FBE9E7','#FFCCBC','#FFAB91','#FF8A65','#FF7043','#FF5722','#F4511E','#E64A19','#D84315','#BF360C'] },
        { primary: '#795548', shades: ['#EFEBE9','#D7CCC8','#BCAAA4','#A1887F','#8D6E63','#795548','#6D4C41','#5D4037','#4E342E','#3E2723'] },
        { primary: '#9E9E9E', shades: ['#FFFFFF','#FAF4E5','#F5F5F5','#E0E0E0','#BDBDBD','#9E9E9E','#757575','#424242','#1E1E1E','#000000'] },
        { primary: '#607D8B', shades: ['#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238'] }
    ];

    function hexToRgb(hex) {
        const clean = hex.replace('#', '');
        return {
            r: parseInt(clean.substring(0, 2), 16),
            g: parseInt(clean.substring(2, 4), 16),
            b: parseInt(clean.substring(4, 6), 16)
        };
    }

    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h *= 60;
        }
        return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    function getRelativeLuminance(r, g, b) {
        const toLin = (c) => {
            const v = c / 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        };
        return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
    }

    function computeAdaptiveTheme(bgHex) {
        const { r, g, b } = hexToRgb(bgHex);
        const { h, s, l } = rgbToHsl(r, g, b);
        const lum = getRelativeLuminance(r, g, b);
        const isDarkBg = lum < 0.28;
        const isNeutral = s < 10;

        if (!isDarkBg) {
            const cardL = l > 94 ? l - 4 : Math.min(l + 6, 98);
            const navL = Math.max(l - 5, 76);
            const borderL = Math.max(l - 34, 28);
            return {
                isDarkBg: false,
                text: isNeutral ? '#111111' : `hsl(${h}, ${Math.min(s, 45)}%, 14%)`,
                cardBg: isNeutral ? `hsl(0, 0%, ${cardL}%)` : `hsl(${h}, ${Math.min(s, 42)}%, ${cardL}%)`,
                cardText: isNeutral ? '#1a365d' : `hsl(${h}, ${Math.min(s, 65)}%, 18%)`,
                cardSubtext: isNeutral ? '#555555' : `hsl(${h}, ${Math.min(s, 38)}%, 34%)`,
                cardHoverBg: isNeutral ? '#1a365d' : `hsl(${h}, ${Math.min(s + 10, 68)}%, 30%)`,
                cardHoverText: '#ffffff',
                border: isNeutral ? '#9a7b2c' : `hsl(${h}, ${Math.min(s + 10, 65)}%, ${borderL}%)`,
                ruledBorder: isNeutral ? 'rgba(120, 130, 145, 0.45)' : `hsla(${h}, ${Math.min(s, 45)}%, ${borderL}%, 0.45)`,
                navBg: isNeutral ? `hsl(0, 0%, ${navL}%)` : `hsl(${h}, ${Math.min(s, 35)}%, ${navL}%)`,
                tableHeadBg: isNeutral ? '#1a365d' : `hsl(${h}, ${Math.min(s + 5, 60)}%, 26%)`,
                tableHeadText: '#ffffff'
            };
        } else {
            const cardL = Math.min(l + 9, 34);
            const navL = Math.max(l - 4, 8);
            const borderL = Math.min(l + 32, 74);
            return {
                isDarkBg: true,
                text: isNeutral ? '#f5f6fa' : `hsl(${h}, ${Math.min(s, 25)}%, 95%)`,
                cardBg: isNeutral ? `hsl(0, 0%, ${cardL}%)` : `hsl(${h}, ${Math.min(s, 38)}%, ${cardL}%)`,
                cardText: isNeutral ? '#ffffff' : `hsl(${h}, ${Math.min(s, 32)}%, 96%)`,
                cardSubtext: isNeutral ? '#c8ccd4' : `hsl(${h}, ${Math.min(s, 30)}%, 78%)`,
                cardHoverBg: isNeutral ? '#c59b27' : `hsl(${h}, ${Math.min(s + 12, 70)}%, ${Math.min(l + 26, 68)}%)`,
                cardHoverText: '#111111',
                border: isNeutral ? '#c59b27' : `hsl(${h}, ${Math.min(s + 15, 70)}%, ${borderL}%)`,
                ruledBorder: isNeutral ? 'rgba(220, 225, 235, 0.30)' : `hsla(${h}, ${Math.min(s, 45)}%, ${borderL}%, 0.38)`,
                navBg: isNeutral ? `hsl(0, 0%, ${navL}%)` : `hsl(${h}, ${Math.min(s, 35)}%, ${navL}%)`,
                tableHeadBg: isNeutral ? '#2d3748' : `hsl(${h}, ${Math.min(s + 8, 55)}%, ${Math.min(l + 16, 40)}%)`,
                tableHeadText: '#ffffff'
            };
        }
    }

    function getContrastMarkColor(hex) {
        const { r, g, b } = hexToRgb(hex);
        return getRelativeLuminance(r, g, b) > 0.28 ? '#1a365d' : '#ffffff';
    }

    async function updateWakeLock(enabled) {
        if (!('wakeLock' in navigator)) return;
        try {
            if (enabled) {
                if (!wakeLockSentinel) {
                    wakeLockSentinel = await navigator.wakeLock.request('screen');
                    wakeLockSentinel.addEventListener('release', () => {
                        wakeLockSentinel = null;
                    });
                }
            } else if (wakeLockSentinel) {
                await wakeLockSentinel.release();
                wakeLockSentinel = null;
            }
        } catch (err) {}
    }

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && localStorage.getItem('app_keep_awake') === 'true') {
            updateWakeLock(true);
        }
    });

    function applyBrightness(val) {
        const bValue = parseFloat(val);
        let brightnessOverlay = document.getElementById('brightnessOverlay');
        if (isNaN(bValue) || bValue === 1) {
            if (brightnessOverlay) brightnessOverlay.style.backgroundColor = 'rgba(0,0,0,0)';
            return;
        }
        if (!brightnessOverlay) {
            brightnessOverlay = document.createElement('div');
            brightnessOverlay.id = 'brightnessOverlay';
            brightnessOverlay.style.cssText = 'position: fixed; inset: 0; pointer-events: none; z-index: 9999999; transition: background-color 0.1s;';
            document.body.appendChild(brightnessOverlay);
        }
        if (bValue < 1) {
            brightnessOverlay.style.backgroundColor = `rgba(0, 0, 0, ${1 - bValue})`;
        } else {
            brightnessOverlay.style.backgroundColor = `rgba(255, 255, 255, ${(bValue - 1) * 0.4})`;
        }
    }

    function applySavedDisplaySettings() {
        const root = document.documentElement;
        const body = document.body;
        if (!body) return;

        const savedBrightness = localStorage.getItem('app_brightness') || '1';
        applyBrightness(savedBrightness);

        const savedBg = localStorage.getItem('app_custom_bg');
        const savedText = localStorage.getItem('app_custom_text');
        const savedArabicSize = localStorage.getItem('app_arabic_font_size') || localStorage.getItem('app_font_size');
        const savedUrduSize = localStorage.getItem('app_urdu_font_size');
        const savedArabicFont = normalizeArabicFontValue(localStorage.getItem('app_arabic_font') || localStorage.getItem('app_content_font'));
        const savedUrduFont = normalizeUrduFontValue(localStorage.getItem('app_urdu_font'));
        const savedAppFont = normalizeUrduFontValue(localStorage.getItem('app_ui_font'));
        const tajweedEnabled = localStorage.getItem('app_tajweed_colors') !== 'false';

        const isDarkTheme = localStorage.getItem('theme') === 'dark';
        body.classList.toggle('dark-mode', isDarkTheme);
        root.classList.toggle('dark-mode', isDarkTheme);
        if (typeof window.awraadSetDarkModeIcon === 'function') {
            window.awraadSetDarkModeIcon(isDarkTheme);
        }

        body.classList.toggle('tajweed-colors-off', !tajweedEnabled);
        root.classList.toggle('tajweed-colors-off', !tajweedEnabled);

        const autoVars = [
            '--user-bg-color', '--auto-text', '--auto-card-bg', '--auto-card-text',
            '--auto-card-subtext', '--auto-card-hover-bg', '--auto-card-hover-text',
            '--auto-border', '--auto-ruled-border', '--auto-nav-bg',
            '--auto-table-head-bg', '--auto-table-head-text'
        ];

        if (savedBg) {
            const theme = computeAdaptiveTheme(savedBg);
            root.style.backgroundColor = savedBg;
            root.style.setProperty('--user-bg-color', savedBg);
            root.style.setProperty('--auto-text', theme.text);
            root.style.setProperty('--auto-card-bg', theme.cardBg);
            root.style.setProperty('--auto-card-text', theme.cardText);
            root.style.setProperty('--auto-card-subtext', theme.cardSubtext);
            root.style.setProperty('--auto-card-hover-bg', theme.cardHoverBg);
            root.style.setProperty('--auto-card-hover-text', theme.cardHoverText);
            root.style.setProperty('--auto-border', theme.border);
            root.style.setProperty('--auto-ruled-border', theme.ruledBorder);
            root.style.setProperty('--auto-nav-bg', theme.navBg);
            root.style.setProperty('--auto-table-head-bg', theme.tableHeadBg);
            root.style.setProperty('--auto-table-head-text', theme.tableHeadText);
            body.classList.add('custom-bg-active');
            body.classList.toggle('custom-bg-dark', theme.isDarkBg);
            root.classList.add('custom-bg-active');
            root.classList.toggle('custom-bg-dark', theme.isDarkBg);

            let preloadLock = document.getElementById('awraad-preload-lock');
            if (!preloadLock && document.head) {
                preloadLock = document.createElement('style');
                preloadLock.id = 'awraad-preload-lock';
                document.head.appendChild(preloadLock);
            }
            if (preloadLock) {
                preloadLock.textContent =
                    '@media screen{' +
                    'html,body,.continuous-frame,.continuous-inner{background:' + savedBg + ' !important;background-color:' + savedBg + ' !important;}' +
                    '.app-navbar{background-color:' + theme.navBg + ' !important;border-bottom-color:' + theme.border + ' !important;}' +
                    '.nav-card,.sub-nav-card,.daily-malfooz-container,.malfooz-card,.shijra-table,.name-card,.timer-card{background-color:' + theme.cardBg + ' !important;border-color:' + theme.border + ' !important;}' +
                    '}';
            }
        } else {
            autoVars.forEach(v => root.style.removeProperty(v));
            body.classList.remove('custom-bg-active', 'custom-bg-dark');
            root.classList.remove('custom-bg-active', 'custom-bg-dark');
            root.style.backgroundColor = isDarkTheme ? '#121212' : '#faf5e8';

            const preloadLock = document.getElementById('awraad-preload-lock');
            if (preloadLock) {
                if (isDarkTheme) {
                    preloadLock.textContent =
                        '@media screen{' +
                        'html,body{background:#121212 !important;background-color:#121212 !important;color:#f5f6fa !important;}' +
                        '.continuous-frame,.continuous-inner{background:#1e1e1e !important;background-color:#1e1e1e !important;}' +
                        '.app-navbar{background-color:#2a2a2a !important;}' +
                        '}';
                } else {
                    preloadLock.remove();
                }
            }
        }

        if (savedText) {
            root.style.setProperty('--user-text-color', savedText);
            body.classList.add('custom-text-active');
            root.classList.add('custom-text-active');
        } else {
            root.style.removeProperty('--user-text-color');
            body.classList.remove('custom-text-active');
            root.classList.remove('custom-text-active');
        }

        if (savedArabicSize) {
            root.style.setProperty('--user-arabic-size', savedArabicSize + 'px');
            body.classList.add('custom-arabic-size-active');
            root.classList.add('custom-arabic-size-active');
        } else {
            root.style.removeProperty('--user-arabic-size');
            body.classList.remove('custom-arabic-size-active');
            root.classList.remove('custom-arabic-size-active');
        }

        if (savedUrduSize) {
            root.style.setProperty('--user-urdu-size', savedUrduSize + 'px');
            body.classList.add('custom-urdu-size-active');
            root.classList.add('custom-urdu-size-active');
        } else {
            root.style.removeProperty('--user-urdu-size');
            body.classList.remove('custom-urdu-size-active');
            root.classList.remove('custom-urdu-size-active');
        }

        const savedLineHeight = localStorage.getItem('app_line_height');
        if (savedLineHeight) {
            const lhVal = parseFloat(savedLineHeight);
            if (!isNaN(lhVal) && lhVal >= 1.6 && lhVal <= 4.5) {
                root.style.setProperty('--user-line-height', String(lhVal));
                root.style.setProperty('--user-urdu-line-height', String(Math.max(1.75, +(lhVal * 0.72).toFixed(2))));
                body.classList.add('custom-line-height-active');
                root.classList.add('custom-line-height-active');
            }
        } else {
            root.style.removeProperty('--user-line-height');
            root.style.removeProperty('--user-urdu-line-height');
            body.classList.remove('custom-line-height-active');
            root.classList.remove('custom-line-height-active');
        }

        if (savedArabicFont) {
            ensureFontLoaded(savedArabicFont);
            root.style.setProperty('--user-arabic-font', savedArabicFont);
            body.classList.add('custom-arabic-font-active');
            root.classList.add('custom-arabic-font-active');
        } else {
            root.style.removeProperty('--user-arabic-font');
            body.classList.remove('custom-arabic-font-active');
            root.classList.remove('custom-arabic-font-active');
        }

        URDU_STYLE_CLASSES.forEach((cls) => {
            body.classList.remove(cls);
            root.classList.remove(cls);
        });

        if (savedUrduFont) {
            ensureFontLoaded(savedUrduFont);
            root.style.setProperty('--user-urdu-font', savedUrduFont);
            body.classList.add('custom-urdu-font-active');
            root.classList.add('custom-urdu-font-active');
            const isNastaliq = savedUrduFont.includes('Nastaliq') || savedUrduFont.includes('Nastaleeq') || savedUrduFont.includes('Gulzar');
            body.classList.toggle('urdu-nastaliq-active', isNastaliq);
            root.classList.toggle('urdu-nastaliq-active', isNastaliq);
            const styleCls = getUrduStyleClass(savedUrduFont);
            if (styleCls) {
                body.classList.add(styleCls);
                root.classList.add(styleCls);
            }
        } else {
            root.style.removeProperty('--user-urdu-font');
            body.classList.remove('custom-urdu-font-active', 'urdu-nastaliq-active');
            root.classList.remove('custom-urdu-font-active', 'urdu-nastaliq-active');
        }

        if (savedAppFont) {
            ensureFontLoaded(savedAppFont);
            root.style.setProperty('--user-app-font', savedAppFont);
            body.classList.add('custom-app-font-active');
            root.classList.add('custom-app-font-active');
        } else {
            root.style.removeProperty('--user-app-font');
            body.classList.remove('custom-app-font-active');
            root.classList.remove('custom-app-font-active');
        }
    }

    window.clearCustomColorsForDarkToggle = function() {
        localStorage.removeItem('app_custom_bg');
        localStorage.removeItem('app_custom_text');
        applySavedDisplaySettings();
    };

    let syncSettingsUIRef = null;

    function buildSettingsModalOnce() {
        if (settingsModalInitialized && document.getElementById('settingsModal')) return;
        settingsModalInitialized = true;

        const arabicFontOptionsHTML = `
            <option value="'Amiri', serif">Amiri (Default)</option>
            <option value="'Amiri Quran', serif">Amiri Quran</option>
            <option value="'Scheherazade New', serif">Scheherazade New</option>
            <option value="'Lateef', serif">Lateef (Indo-Pak)</option>
        `;

        const urduFontOptionsHTML = `
            <option value="'Amiri', serif">Amiri (Default)</option>
            <option value="'Siasat Noori Nastaleeq', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif">Siasat Daily (Noori Nastaleeq)</option>
            <option value="'Munsif Noori Kasheeda', 'Jameel Noori Nastaleeq Kasheeda', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif">Munsif Daily (Kasheeda Nastaleeq)</option>
            <option value="'Faiz Lahori Nastaleeq', 'Jameel Noori Nastaleeq', 'Gulzar', 'Noto Nastaliq Urdu', serif">Faiz Lahori Nastaleeq (Classic News)</option>
            <option value="'Mehr Nastaliq Web', 'Noto Nastaliq Urdu', serif">Mehr Nastaliq Web (Modern Daily)</option>
            <option value="'AlQalam Taj Nastaleeq', 'Noto Nastaliq Urdu', serif">AlQalam Taj Nastaleeq (Book Style)</option>
            <option value="'Alvi Nastaleeq', 'Noto Nastaliq Urdu', serif">Alvi Nastaleeq</option>
            <option value="'Gulzar', serif">Gulzar Nastaleeq (Headline / Epaper)</option>
        `;

        const appFontOptionsHTML = `
            <option value="'Amiri', serif">Amiri (Default)</option>
            <option value="'Siasat Noori Nastaleeq', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif">Siasat Daily (Noori Nastaleeq)</option>
            <option value="'Munsif Noori Kasheeda', 'Jameel Noori Nastaleeq Kasheeda', 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif">Munsif Daily (Kasheeda Nastaleeq)</option>
            <option value="'Mehr Nastaliq Web', 'Noto Nastaliq Urdu', serif">Mehr Nastaliq Web</option>
            <option value="'Gulzar', serif">Gulzar Nastaleeq</option>
            <option value="'Noto Nastaliq Urdu', serif">Noto Nastaliq Urdu</option>
            <option value="'Scheherazade New', serif">Scheherazade New</option>
            <option value="'Noto Naskh Arabic', serif">Noto Naskh Arabic</option>
            <option value="'Lateef', serif">Lateef (Indo-Pak)</option>
            <option value="Arial, sans-serif">System Simple</option>
        `;

        const settingsHTML = `
        <div id="settingsModal" class="settings-modal print-none">
            <div class="settings-card">
                <div class="settings-header">
                    <span>Settings</span>
                    <button type="button" id="closeSettingsBtn" class="settings-close-btn" title="Close">&times;</button>
                </div>
                <div class="settings-body">
                    <div class="settings-toggle-stack">
                        <div class="settings-awake-row">
                            <label class="awake-toggle">
                                <input type="checkbox" id="keepAwakeCheckbox">
                                <span class="awake-track" id="keepAwakeLabel">OFF</span>
                            </label>
                            <span class="settings-label-lg">Keep Awake</span>
                        </div>
                        <div class="settings-awake-row">
                            <label class="awake-toggle">
                                <input type="checkbox" id="tajweedToggleCheckbox" checked>
                                <span class="awake-track" id="tajweedToggleLabel">ON</span>
                            </label>
                            <span class="settings-label-lg">Tajweed Colors</span>
                        </div>
                    </div>

                    <hr class="settings-divider">

                    <div class="settings-colors-row">
                        <div class="color-picker-item" id="bgColorRow">
                            <span class="color-picker-label">Change<br>Background</span>
                            <button type="button" id="bgColorBtn" class="color-wheel-wrap" title="Pick Background Color"></button>
                        </div>
                        <div class="color-picker-item" id="textColorRow">
                            <span class="color-picker-label">Change Text<br>Color</span>
                            <button type="button" id="textColorBtn" class="color-wheel-wrap" title="Pick Text Color"></button>
                        </div>
                    </div>

                    <button type="button" id="resetDefaultColorsBtn" class="settings-default-btn">Set to Default Colors</button>

                    <hr class="settings-divider">

                    <div class="settings-section-title">
                        <span>Preview</span>
                    </div>
                    <div id="settingsPreviewBox" class="settings-preview-box">
                        <div class="preview-arabic-line">بِسْمِ <span class="allah-name">اللّٰهِ</span> ال<span class="tajweed-ra-pur">رَّ</span>حْمٰنِ ال<span class="tajweed-ra-pur">رَّ</span>حِيْمِ</div>
                        <div class="preview-arabic-line">إِ<span class="tajweed-ghunnah">نَّ</span> <span class="allah-name">اللّٰهَ</span> وَمَ<span class="tajweed-madd">لٰٓئِ</span>كَتَهٗ يُ<span class="tajweed-mustaliyah">صَ</span>لُّوْنَ عَلَى <span class="tajweed-ghunnah">النَّ</span>بِيِّ</div>
                        <div id="previewUrduLine" class="preview-urdu-line">اردو: <span class="allah-name">اللہ</span> کی مدد لینے والے کا <span class="allah-name">اللہ</span> خاص مددگار بن جاتا ہے</div>
                    </div>

                    <div class="settings-section-title">
                        <span>Arabic Font Size</span>
                        <span id="arabicFontSizeValueLabel">26px</span>
                    </div>
                    <input type="range" id="arabicFontSizeSlider" class="settings-range-slider" min="16" max="44" step="1" value="26">

                    <div class="settings-section-title" style="margin-top: 14px;">
                        <span>Urdu Font Size</span>
                        <span id="urduFontSizeValueLabel">22px</span>
                    </div>
                    <input type="range" id="urduFontSizeSlider" class="settings-range-slider" min="14" max="38" step="1" value="22">

                    <div class="settings-section-title" style="margin-top: 14px;">
                        <span>Line Spacing</span>
                        <span id="lineHeightValueLabel">Default</span>
                    </div>
                    <input type="range" id="lineHeightSlider" class="settings-range-slider" min="1.8" max="4.2" step="0.1" value="3.2">

                    <div class="settings-section-title" style="margin-top: 16px;">
                        <span>Brightness</span>
                        <span id="brightnessValueLabel">100%</span>
                    </div>
                    <div class="settings-brightness-row">
                        <span class="settings-brightness-icon">${window.AWRAAD_SVG.sunLow}</span>
                        <input type="range" id="brightnessSlider" class="settings-range-slider" min="0.4" max="1.5" step="0.05" value="1" title="Adjust Brightness">
                        <span class="settings-brightness-icon">${window.AWRAAD_SVG.sun}</span>
                    </div>

                    <hr class="settings-divider">

                    <div class="settings-font-row">
                        <span class="settings-label-lg" style="font-size:15px;">Arabic Font</span>
                        <select id="arabicFontSelect" class="settings-font-select">${arabicFontOptionsHTML}</select>
                    </div>
                    <div class="settings-font-row">
                        <span class="settings-label-lg" style="font-size:15px;">Urdu Font</span>
                        <select id="urduFontSelect" class="settings-font-select">${urduFontOptionsHTML}</select>
                    </div>
                    <div class="settings-font-row">
                        <span class="settings-label-lg" style="font-size:15px;">App Font</span>
                        <select id="appFontSelect" class="settings-font-select">${appFontOptionsHTML}</select>
                    </div>

                    <hr class="settings-divider">

                    <div id="openHijriCorrectionRow" class="settings-nav-row">
                        <span class="settings-label-lg" style="font-size:15px;">Hijri Calendar Correction</span>
                        <div class="settings-nav-right">
                            <span id="hijriCorrectionBadge" class="settings-nav-badge">-1</span>
                            <span class="settings-nav-arrow">›</span>
                        </div>
                    </div>

                    <div class="settings-awake-row" style="margin-top: 12px;">
                        <label class="awake-toggle">
                            <input type="checkbox" id="hijriMaghribCheckbox" checked>
                            <span class="awake-track" id="hijriMaghribLabel">ON</span>
                        </label>
                        <span class="settings-label-lg" style="font-size:15px;">Change hijri day after maghrib time</span>
                    </div>

                    <hr class="settings-divider">

                    <div class="settings-reset-all-wrap">
                        <button type="button" id="resetAllSettingsBtn" class="settings-reset-all-btn">
                            ${window.AWRAAD_SVG.refreshSm}<span>Default Settings (Reset All)</span>
                        </button>
                        <div class="settings-reset-all-hint">
                            Fonts, Font Size, Background, Text Color, Dark Mode, Brightness, Tajweed aur Hijri sab installation wale default look par wapas aa jayenge.
                        </div>
                        <div id="resetAllDoneMsg" class="settings-reset-done-msg"></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="colorPaletteModal" class="palette-modal print-none">
            <div class="palette-card">
                <div class="palette-main">
                    <div id="palettePrimaries" class="palette-primaries"></div>
                    <div id="paletteShades" class="palette-shades"></div>
                </div>
                <div class="palette-footer">
                    <button type="button" id="paletteCancelBtn" class="palette-action-btn">Cancel</button>
                    <button type="button" id="paletteOkBtn" class="palette-action-btn">OK</button>
                </div>
            </div>
        </div>

        <div id="hijriStepperModal" class="hijri-stepper-modal print-none">
            <div class="hijri-stepper-box">
                <button type="button" id="hijriMinusBtn" class="hijri-step-btn" title="Decrease Day">-</button>
                <span id="hijriStepperValue" class="hijri-step-value">-1</span>
                <button type="button" id="hijriPlusBtn" class="hijri-step-btn" title="Increase Day">+</button>
            </div>
        </div>

        <div id="resetAllConfirmModal" class="reset-confirm-modal print-none">
            <div class="reset-confirm-card">
                <div class="reset-confirm-title">🔄 Default Settings</div>
                <div class="reset-confirm-text">
                    Kya aap sabhi settings (Font Style, Font Size, Background, Text Color, Dark Mode, Brightness, Tajweed Colors aur Hijri Correction) ko bilkul installation wale default look par reset karna chahte hain?
                </div>
                <div class="reset-confirm-actions">
                    <button type="button" id="resetConfirmCancelBtn" class="reset-confirm-cancel">Cancel</button>
                    <button type="button" id="resetConfirmProceedBtn" class="reset-confirm-ok">Reset All</button>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', settingsHTML);

        const settingsModal = document.getElementById('settingsModal');
        const closeSettingsBtn = document.getElementById('closeSettingsBtn');
        const keepAwakeCheckbox = document.getElementById('keepAwakeCheckbox');
        const keepAwakeLabel = document.getElementById('keepAwakeLabel');
        const tajweedToggleCheckbox = document.getElementById('tajweedToggleCheckbox');
        const tajweedToggleLabel = document.getElementById('tajweedToggleLabel');
        const bgColorRow = document.getElementById('bgColorRow');
        const textColorRow = document.getElementById('textColorRow');
        const resetDefaultColorsBtn = document.getElementById('resetDefaultColorsBtn');
        const previewBox = document.getElementById('settingsPreviewBox');
        const arabicFontSizeSlider = document.getElementById('arabicFontSizeSlider');
        const arabicFontSizeValueLabel = document.getElementById('arabicFontSizeValueLabel');
        const urduFontSizeSlider = document.getElementById('urduFontSizeSlider');
        const urduFontSizeValueLabel = document.getElementById('urduFontSizeValueLabel');
        const lineHeightSlider = document.getElementById('lineHeightSlider');
        const lineHeightValueLabel = document.getElementById('lineHeightValueLabel');
        const brightnessSlider = document.getElementById('brightnessSlider');
        const brightnessValueLabel = document.getElementById('brightnessValueLabel');
        const arabicFontSelect = document.getElementById('arabicFontSelect');
        const urduFontSelect = document.getElementById('urduFontSelect');
        const appFontSelect = document.getElementById('appFontSelect');
        const previewUrduLine = document.getElementById('previewUrduLine');

        const paletteModal = document.getElementById('colorPaletteModal');
        const palettePrimaries = document.getElementById('palettePrimaries');
        const paletteShades = document.getElementById('paletteShades');
        const paletteCancelBtn = document.getElementById('paletteCancelBtn');
        const paletteOkBtn = document.getElementById('paletteOkBtn');

        const openHijriRow = document.getElementById('openHijriCorrectionRow');
        const hijriStepperModal = document.getElementById('hijriStepperModal');
        const hijriMinusBtn = document.getElementById('hijriMinusBtn');
        const hijriPlusBtn = document.getElementById('hijriPlusBtn');
        const hijriMaghribCheckbox = document.getElementById('hijriMaghribCheckbox');

        let activePaletteTarget = null;
        let activeFamilyIndex = 0;
        let pendingColorHex = null;

        function renderPrimaryDots() {
            palettePrimaries.innerHTML = '';
            COLOR_PALETTES.forEach((fam, idx) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'palette-primary-dot' + (idx === activeFamilyIndex ? ' active' : '');
                dot.style.backgroundColor = fam.primary;
                dot.addEventListener('click', () => {
                    activeFamilyIndex = idx;
                    renderPrimaryDots();
                    renderShades();
                    paletteShades.scrollTop = 0;
                });
                palettePrimaries.appendChild(dot);
            });
        }

        function renderShades() {
            paletteShades.innerHTML = '';
            const shades = COLOR_PALETTES[activeFamilyIndex].shades;
            shades.forEach((hex) => {
                const bar = document.createElement('button');
                bar.type = 'button';
                const isSelected = pendingColorHex && pendingColorHex.toUpperCase() === hex.toUpperCase();
                bar.className = 'palette-shade-bar' + (isSelected ? ' selected' : '');
                bar.style.backgroundColor = hex;
                if (isSelected) {
                    bar.innerHTML = `<span style="color:${getContrastMarkColor(hex)} !important;">✓</span>`;
                }
                bar.addEventListener('click', () => {
                    pendingColorHex = hex;
                    renderShades();
                });
                paletteShades.appendChild(bar);
            });
        }

        function openColorPalette(targetType) {
            activePaletteTarget = targetType;
            const isDark = document.body.classList.contains('dark-mode');
            const currentHex = targetType === 'bg'
                ? (localStorage.getItem('app_custom_bg') || (isDark ? '#1E1E1E' : '#FAF4E5'))
                : (localStorage.getItem('app_custom_text') || (isDark ? '#F5F6FA' : '#000000'));

            pendingColorHex = currentHex;
            activeFamilyIndex = 0;

            for (let i = 0; i < COLOR_PALETTES.length; i++) {
                const found = COLOR_PALETTES[i].shades.some(s => s.toUpperCase() === currentHex.toUpperCase());
                if (found) {
                    activeFamilyIndex = i;
                    break;
                }
            }

            renderPrimaryDots();
            renderShades();
            paletteModal.classList.add('show');
        }

        bgColorRow.addEventListener('click', () => openColorPalette('bg'));
        textColorRow.addEventListener('click', () => openColorPalette('text'));

        paletteCancelBtn.addEventListener('click', () => paletteModal.classList.remove('show'));
        paletteModal.addEventListener('click', (e) => {
            if (e.target === paletteModal) paletteModal.classList.remove('show');
        });

        paletteOkBtn.addEventListener('click', () => {
            if (pendingColorHex && activePaletteTarget) {
                if (activePaletteTarget === 'bg') {
                    localStorage.setItem('app_custom_bg', pendingColorHex);
                } else {
                    localStorage.setItem('app_custom_text', pendingColorHex);
                }
                applySavedDisplaySettings();
                syncSettingsUI();
            }
            paletteModal.classList.remove('show');
        });

        function syncSettingsUI() {
            const isDark = document.body.classList.contains('dark-mode');
            const savedBg = localStorage.getItem('app_custom_bg');
            const savedText = localStorage.getItem('app_custom_text');
            const bg = savedBg || (isDark ? '#1e1e1e' : '#faf4e5');
            const adaptive = savedBg ? computeAdaptiveTheme(savedBg) : null;
            const text = savedText || (adaptive ? adaptive.text : (isDark ? '#f5f6fa' : '#050505'));
            const border = adaptive ? adaptive.border : 'rgba(197, 155, 39, 0.55)';
            const arabicSize = localStorage.getItem('app_arabic_font_size') || localStorage.getItem('app_font_size') || '26';
            const urduSize = localStorage.getItem('app_urdu_font_size') || '22';
            const arabicFont = normalizeArabicFontValue(localStorage.getItem('app_arabic_font') || localStorage.getItem('app_content_font')) || "'Amiri', serif";
            const urduFont = normalizeUrduFontValue(localStorage.getItem('app_urdu_font')) || "'Amiri', serif";
            const appFont = normalizeUrduFontValue(localStorage.getItem('app_ui_font')) || "'Amiri', serif";
            const awake = localStorage.getItem('app_keep_awake') === 'true';
            const tajweedOn = localStorage.getItem('app_tajweed_colors') !== 'false';

            arabicFontSizeSlider.value = arabicSize;
            arabicFontSizeValueLabel.textContent = arabicSize + 'px';
            urduFontSizeSlider.value = urduSize;
            urduFontSizeValueLabel.textContent = urduSize + 'px';

            const savedLH = localStorage.getItem('app_line_height');
            if (lineHeightSlider) lineHeightSlider.value = savedLH || '3.2';
            if (lineHeightValueLabel) lineHeightValueLabel.textContent = savedLH ? (parseFloat(savedLH).toFixed(1) + 'x') : 'Default';

            const savedBrightness = localStorage.getItem('app_brightness') || '1';
            if (brightnessSlider) brightnessSlider.value = savedBrightness;
            if (brightnessValueLabel) {
                brightnessValueLabel.textContent = Math.round(parseFloat(savedBrightness) * 100) + '%';
            }
            arabicFontSelect.value = arabicFont;
            if (!arabicFontSelect.value) arabicFontSelect.value = "'Amiri', serif";
            urduFontSelect.value = urduFont;
            if (!urduFontSelect.value) urduFontSelect.value = "'Amiri', serif";
            appFontSelect.value = appFont;
            if (!appFontSelect.value) appFontSelect.value = "'Amiri', serif";

            keepAwakeCheckbox.checked = awake;
            keepAwakeLabel.textContent = awake ? 'ON' : 'OFF';

            tajweedToggleCheckbox.checked = tajweedOn;
            tajweedToggleLabel.textContent = tajweedOn ? 'ON' : 'OFF';

            previewBox.style.setProperty('--preview-bg', bg);
            previewBox.style.setProperty('--preview-text', text);
            previewBox.style.setProperty('--preview-border', border);
            previewBox.style.fontSize = arabicSize + 'px';
            previewBox.style.fontFamily = arabicFont;
            const lhPreview = localStorage.getItem('app_line_height');
            previewBox.querySelectorAll('.preview-arabic-line').forEach((ln) => {
                ln.style.lineHeight = lhPreview ? String(Math.min(3.4, parseFloat(lhPreview))) : '';
            });
            if (previewUrduLine) {
                previewUrduLine.style.fontFamily = urduFont;
                previewUrduLine.style.fontSize = urduSize + 'px';
                previewUrduLine.style.lineHeight = lhPreview ? String(Math.max(1.75, +(parseFloat(lhPreview) * 0.72).toFixed(2))) : '';
                URDU_STYLE_CLASSES.forEach((cls) => previewUrduLine.classList.remove(cls));
                const urduPresetCls = getUrduStyleClass(urduFont);
                if (urduPresetCls) previewUrduLine.classList.add(urduPresetCls);
            }

            const hijriOffset = localStorage.getItem('app_hijri_manual_offset') !== null
                ? parseInt(localStorage.getItem('app_hijri_manual_offset'), 10)
                : parseInt(localStorage.getItem('app_auto_hijri_offset') || '-1', 10);
            const hijriAfterMaghrib = localStorage.getItem('app_hijri_after_maghrib') !== 'false';

            const badgeEl = document.getElementById('hijriCorrectionBadge');
            const stepValEl = document.getElementById('hijriStepperValue');
            const maghribChk = document.getElementById('hijriMaghribCheckbox');
            const maghribLbl = document.getElementById('hijriMaghribLabel');

            const formattedOffset = hijriOffset > 0 ? `+${hijriOffset}` : `${hijriOffset}`;
            if (badgeEl) badgeEl.textContent = formattedOffset;
            if (stepValEl) stepValEl.textContent = formattedOffset;
            if (maghribChk) maghribChk.checked = hijriAfterMaghrib;
            if (maghribLbl) maghribLbl.textContent = hijriAfterMaghrib ? 'ON' : 'OFF';
        }

        syncSettingsUIRef = syncSettingsUI;

        closeSettingsBtn.addEventListener('click', () => settingsModal.classList.remove('show'));
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) settingsModal.classList.remove('show');
        });

        keepAwakeCheckbox.addEventListener('change', () => {
            const enabled = keepAwakeCheckbox.checked;
            keepAwakeLabel.textContent = enabled ? 'ON' : 'OFF';
            localStorage.setItem('app_keep_awake', enabled ? 'true' : 'false');
            updateWakeLock(enabled);
        });

        tajweedToggleCheckbox.addEventListener('change', () => {
            const enabled = tajweedToggleCheckbox.checked;
            tajweedToggleLabel.textContent = enabled ? 'ON' : 'OFF';
            localStorage.setItem('app_tajweed_colors', enabled ? 'true' : 'false');
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        resetDefaultColorsBtn.addEventListener('click', () => {
            localStorage.removeItem('app_custom_bg');
            localStorage.removeItem('app_custom_text');
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        arabicFontSizeSlider.addEventListener('input', () => {
            localStorage.removeItem('app_font_size');
            localStorage.setItem('app_arabic_font_size', arabicFontSizeSlider.value);
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        urduFontSizeSlider.addEventListener('input', () => {
            localStorage.setItem('app_urdu_font_size', urduFontSizeSlider.value);
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        if (lineHeightSlider) {
            lineHeightSlider.addEventListener('input', () => {
                localStorage.setItem('app_line_height', lineHeightSlider.value);
                applySavedDisplaySettings();
                syncSettingsUI();
            });
        }

        if (brightnessSlider) {
            brightnessSlider.addEventListener('input', () => {
                localStorage.setItem('app_brightness', brightnessSlider.value);
                applyBrightness(brightnessSlider.value);
                if (brightnessValueLabel) {
                    brightnessValueLabel.textContent = Math.round(parseFloat(brightnessSlider.value) * 100) + '%';
                }
            });
        }

        arabicFontSelect.addEventListener('change', () => {
            localStorage.removeItem('app_content_font');
            if (arabicFontSelect.value === "'Amiri', serif") {
                localStorage.removeItem('app_arabic_font');
            } else {
                ensureFontLoaded(arabicFontSelect.value);
                localStorage.setItem('app_arabic_font', arabicFontSelect.value);
            }
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        urduFontSelect.addEventListener('change', () => {
            if (urduFontSelect.value === "'Amiri', serif") {
                localStorage.removeItem('app_urdu_font');
            } else {
                ensureFontLoaded(urduFontSelect.value);
                localStorage.setItem('app_urdu_font', urduFontSelect.value);
            }
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        appFontSelect.addEventListener('change', () => {
            if (appFontSelect.value === "'Amiri', serif") {
                localStorage.removeItem('app_ui_font');
            } else {
                ensureFontLoaded(appFontSelect.value);
                localStorage.setItem('app_ui_font', appFontSelect.value);
            }
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        function changeHijriOffset(delta) {
            const current = localStorage.getItem('app_hijri_manual_offset') !== null
                ? parseInt(localStorage.getItem('app_hijri_manual_offset'), 10)
                : parseInt(localStorage.getItem('app_auto_hijri_offset') || '-1', 10);
            const next = Math.max(-5, Math.min(5, current + delta));
            localStorage.setItem('app_hijri_manual_offset', String(next));
            syncSettingsUI();
            if (typeof window.refreshNavbarHijriDate === 'function') {
                window.refreshNavbarHijriDate();
            }
        }

        if (openHijriRow && hijriStepperModal) {
            openHijriRow.addEventListener('click', () => {
                syncSettingsUI();
                hijriStepperModal.classList.add('show');
            });
            hijriStepperModal.addEventListener('click', (e) => {
                if (e.target === hijriStepperModal) hijriStepperModal.classList.remove('show');
            });
        }
        if (hijriMinusBtn) hijriMinusBtn.addEventListener('click', () => changeHijriOffset(-1));
        if (hijriPlusBtn) hijriPlusBtn.addEventListener('click', () => changeHijriOffset(1));

        if (hijriMaghribCheckbox) {
            hijriMaghribCheckbox.addEventListener('change', () => {
                const enabled = hijriMaghribCheckbox.checked;
                localStorage.setItem('app_hijri_after_maghrib', enabled ? 'true' : 'false');
                syncSettingsUI();
                if (typeof window.refreshNavbarHijriDate === 'function') {
                    window.refreshNavbarHijriDate();
                }
            });
        }

        const resetAllSettingsBtn = document.getElementById('resetAllSettingsBtn');
        const resetAllConfirmModal = document.getElementById('resetAllConfirmModal');
        const resetConfirmCancelBtn = document.getElementById('resetConfirmCancelBtn');
        const resetConfirmProceedBtn = document.getElementById('resetConfirmProceedBtn');
        const resetAllDoneMsg = document.getElementById('resetAllDoneMsg');
        let resetMsgTimer = null;

        function restoreAllDefaultSettings() {
            const keysToReset = [
                'theme',
                'app_custom_bg',
                'app_custom_text',
                'app_arabic_font',
                'app_content_font',
                'app_urdu_font',
                'app_ui_font',
                'app_arabic_font_size',
                'app_urdu_font_size',
                'app_font_size',
                'app_line_height',
                'app_brightness',
                'app_tajweed_colors',
                'app_keep_awake',
                'app_hijri_manual_offset',
                'app_hijri_after_maghrib',
                'tasbeeh_pos',
                'tasbeeh_scale',
                'app_urs_notif_enabled',
                'app_urs_notif_time'
            ];
            keysToReset.forEach((k) => localStorage.removeItem(k));

            updateWakeLock(false);
            applySavedDisplaySettings();
            syncSettingsUI();

            if (typeof window.refreshNavbarHijriDate === 'function') {
                window.refreshNavbarHijriDate();
            }
            if (typeof window.rescheduleUrsNotifications === 'function') {
                window.rescheduleUrsNotifications(false);
            }

            if (resetAllDoneMsg) {
                resetAllDoneMsg.textContent = '✅ Default Settings apply ho gayi hain!';
                if (resetMsgTimer) clearTimeout(resetMsgTimer);
                resetMsgTimer = setTimeout(() => {
                    resetAllDoneMsg.textContent = '';
                }, 3000);
            }
        }

        window.restoreAllDefaultSettings = restoreAllDefaultSettings;

        if (resetAllSettingsBtn && resetAllConfirmModal) {
            resetAllSettingsBtn.addEventListener('click', () => {
                resetAllConfirmModal.classList.add('show');
            });
            resetAllConfirmModal.addEventListener('click', (e) => {
                if (e.target === resetAllConfirmModal) resetAllConfirmModal.classList.remove('show');
            });
        }
        if (resetConfirmCancelBtn && resetAllConfirmModal) {
            resetConfirmCancelBtn.addEventListener('click', () => {
                resetAllConfirmModal.classList.remove('show');
            });
        }
        if (resetConfirmProceedBtn && resetAllConfirmModal) {
            resetConfirmProceedBtn.addEventListener('click', () => {
                resetAllConfirmModal.classList.remove('show');
                restoreAllDefaultSettings();
            });
        }
    }

    function tagUrduNoTajweedElements() {
        const urduCharRegex = /[\u0679\u067E\u0686\u0688\u0691\u0698\u06A9\u06AF\u06BA\u06BE\u06C1-\u06C3\u06CC\u06D2]/;
        document.querySelectorAll('.no-tajweed').forEach(function(el) {
            if (el.classList.contains('urdu-auto-text') || el.closest('.malfooz-ayat')) return;
            if (urduCharRegex.test(el.textContent || '')) {
                el.classList.add('urdu-auto-text');
            }
        });
    }

    function bootSettingsSystem() {
        tagUrduNoTajweedElements();
        applySavedDisplaySettings();
        if (localStorage.getItem('app_keep_awake') === 'true') {
            updateWakeLock(true);
        }

        // Re-sync instantly on Back/Forward navigation (bfcache) or cross-tab updates
        window.addEventListener('pageshow', applySavedDisplaySettings);
        window.addEventListener('storage', applySavedDisplaySettings);

        // Lazy-build Settings modal only when user taps Settings in 3-dots menu
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#openSettingsBtn');
            if (!btn) return;
            e.preventDefault();
            buildSettingsModalOnce();
            if (syncSettingsUIRef) syncSettingsUIRef();
            const modal = document.getElementById('settingsModal');
            if (modal) modal.classList.add('show');
            if (typeof window.awraadCloseDrawer === 'function') window.awraadCloseDrawer();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootSettingsSystem);
    } else {
        bootSettingsSystem();
    }
})();

// ==========================================
// PART 11: AUTO LOCATION-BASED HIJRI DATE (CACHED GPS + MAGHRIB ROLLOVER + MANUAL CORRECTION)
// ==========================================
(function() {
    const HIJRI_MONTHS_UR = [
        'محرم', 'صفر', 'ربیع الاول', 'ربیع الثانی',
        'جمادی الاول', 'جمادی الثانی', 'رجب', 'شعبان',
        'رمضان', 'شوال', 'ذوالقعدہ', 'ذوالحجہ'
    ];

    const DEG2RAD = Math.PI / 180;
    const RAD2DEG = 180 / Math.PI;
    const COORDS_TTL_MS = 24 * 60 * 60 * 1000;

    function getOffsetFromTimezone(tz) {
        if (!tz) return -1;
        const zone = tz.toLowerCase();
        const zeroOffsetZones = [
            'asia/riyadh', 'asia/jeddah', 'asia/mecca',
            'asia/dubai', 'asia/abu_dhabi', 'asia/qatar', 'asia/doha',
            'asia/kuwait', 'asia/bahrain', 'asia/muscat', 'asia/aden', 'asia/baghdad'
        ];
        if (zeroOffsetZones.some(z => zone.includes(z))) {
            return 0;
        }
        return -1;
    }

    function getOffsetFromCoords(lat, lon) {
        if (lat >= 15.5 && lat <= 32.5 && lon >= 34.5 && lon <= 56.5) {
            return 0;
        }
        return -1;
    }

    function getMaghribMinutesFromCoords(date, lat, lon) {
        const startOfYear = new Date(date.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((date - startOfYear) / 86400000);

        const gamma = (2 * Math.PI / 365) * (dayOfYear - 1);
        const eqTime = 229.18 * (
            0.000075 +
            0.001868 * Math.cos(gamma) -
            0.032077 * Math.sin(gamma) -
            0.014615 * Math.cos(2 * gamma) -
            0.040849 * Math.sin(2 * gamma)
        );

        const decl =
            0.006918 -
            0.399912 * Math.cos(gamma) +
            0.070257 * Math.sin(gamma) -
            0.006758 * Math.cos(2 * gamma) +
            0.000907 * Math.sin(2 * gamma) -
            0.002697 * Math.cos(3 * gamma) +
            0.00148 * Math.sin(3 * gamma);

        const zenithCos = Math.cos(90.833 * DEG2RAD);
        const latRad = lat * DEG2RAD;
        const cosHa = (zenithCos / (Math.cos(latRad) * Math.cos(decl))) - Math.tan(latRad) * Math.tan(decl);

        if (cosHa >= 1 || cosHa <= -1) {
            return 18 * 60;
        }

        const ha = Math.acos(cosHa) * RAD2DEG;
        const utcSunsetMinutes = 720 - 4 * (lon + ha) - eqTime;
        const tzOffsetMinutes = -date.getTimezoneOffset();
        const localSunsetMinutes = utcSunsetMinutes + tzOffsetMinutes;

        return Math.round(localSunsetMinutes + 3);
    }

    function getFallbackMaghribMinutes(date, tz) {
        const month = date.getMonth();
        const zone = (tz || '').toLowerCase();

        const seasonalMinutes = [17 * 60 + 45, 18 * 60 + 5, 18 * 60 + 25, 18 * 60 + 40, 18 * 60 + 55, 19 * 60 + 10, 19 * 60 + 5, 18 * 60 + 45, 18 * 60 + 15, 17 * 60 + 50, 17 * 60 + 30, 17 * 60 + 30];
        let baseMins = seasonalMinutes[month] || (18 * 60);

        if (zone.includes('kolkata') || zone.includes('calcutta') || zone.includes('india')) {
            const indiaMins = [17 * 60 + 55, 18 * 60 + 12, 18 * 60 + 25, 18 * 60 + 35, 18 * 60 + 48, 18 * 60 + 55, 18 * 60 + 50, 18 * 60 + 30, 18 * 60 + 5, 17 * 60 + 45, 17 * 60 + 35, 17 * 60 + 42];
            baseMins = indiaMins[month];
        }
        return baseMins;
    }

    function getEffectiveGregorianDate(regionOffset, coords, tz) {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        const maghribMinutes = coords
            ? getMaghribMinutesFromCoords(now, coords.lat, coords.lon)
            : getFallbackMaghribMinutes(now, tz);

        const afterMaghribOffset = currentMinutes >= maghribMinutes ? 1 : 0;
        const effective = new Date(now);
        effective.setDate(effective.getDate() + regionOffset + afterMaghribOffset);
        return effective;
    }

    function toArabicDigits(str) {
        const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(str).replace(/\d/g, (d) => digits[d]);
    }

    function formatHijriFromDate(targetDate) {
        try {
            const parts = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            }).formatToParts(targetDate);

            const day = parts.find(p => p.type === 'day')?.value || '';
            const monthNum = parseInt(parts.find(p => p.type === 'month')?.value, 10);
            const year = parts.find(p => p.type === 'year')?.value || '';
            const monthName = HIJRI_MONTHS_UR[monthNum - 1] || '';

            if (day && monthName && year) {
                return `${toArabicDigits(day)} ${monthName} ${toArabicDigits(year)}ھ`;
            }
        } catch (err) {}
        return '';
    }

    // Shared GPS helper: calls GPS at most once per 24 hours
    window.awraadRequestLocationOnce = function(callback) {
        try {
            const savedCoords = JSON.parse(localStorage.getItem('app_hijri_coords') || 'null');
            const savedTs = parseInt(localStorage.getItem('app_hijri_coords_ts') || '0', 10);
            if (savedCoords && typeof savedCoords.lat === 'number' && typeof savedCoords.lon === 'number' && (Date.now() - savedTs) < COORDS_TTL_MS) {
                if (callback) callback(savedCoords);
                return;
            }
        } catch (e) {}

        if (navigator.geolocation && typeof navigator.geolocation.getCurrentPosition === 'function') {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const coords = { lat: pos.coords.latitude, lon: pos.coords.longitude };
                    localStorage.setItem('app_hijri_coords', JSON.stringify(coords));
                    localStorage.setItem('app_hijri_coords_ts', String(Date.now()));
                    if (callback) callback(coords);
                },
                () => {
                    localStorage.setItem('app_hijri_coords_ts', String(Date.now()));
                },
                { timeout: 4000, maximumAge: COORDS_TTL_MS }
            );
        }
    };

    function initAutoLocationHijriDate() {
        const el = document.getElementById('navHijriDate');
        if (!el) return;

        const detectedTz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        let currentOffset = getOffsetFromTimezone(detectedTz);
        let currentCoords = null;

        const cachedOffset = localStorage.getItem('app_auto_hijri_offset');
        const cachedTz = localStorage.getItem('app_auto_hijri_tz');
        if (cachedOffset !== null && cachedTz === detectedTz) {
            currentOffset = parseInt(cachedOffset, 10);
        } else {
            localStorage.setItem('app_auto_hijri_offset', String(currentOffset));
            localStorage.setItem('app_auto_hijri_tz', detectedTz);
        }

        try {
            const savedCoords = JSON.parse(localStorage.getItem('app_hijri_coords') || 'null');
            if (savedCoords && typeof savedCoords.lat === 'number' && typeof savedCoords.lon === 'number') {
                currentCoords = savedCoords;
            }
        } catch (e) {}

        function renderDate() {
            const manualSaved = localStorage.getItem('app_hijri_manual_offset');
            const activeOffset = manualSaved !== null ? parseInt(manualSaved, 10) : currentOffset;
            const useMaghrib = localStorage.getItem('app_hijri_after_maghrib') !== 'false';

            let effDate;
            if (useMaghrib) {
                effDate = getEffectiveGregorianDate(activeOffset, currentCoords, detectedTz);
            } else {
                effDate = new Date();
                effDate.setDate(effDate.getDate() + activeOffset);
            }

            const text = formatHijriFromDate(effDate);
            if (text) {
                el.textContent = text;
                const drHijri = document.getElementById('drawerHijriDate');
                if (drHijri) drHijri.textContent = text;
            }
            if (typeof window.refreshEventsCalendarView === 'function') {
                window.refreshEventsCalendarView();
            }
        }

        window.refreshNavbarHijriDate = renderDate;

        renderDate();
        setInterval(renderDate, 60000);

        // Defer GPS check slightly so it never blocks first render
        setTimeout(() => {
            window.awraadRequestLocationOnce((coords) => {
                currentCoords = coords;
                const coordOffset = getOffsetFromCoords(coords.lat, coords.lon);
                if (coordOffset !== currentOffset) {
                    currentOffset = coordOffset;
                    localStorage.setItem('app_auto_hijri_offset', String(currentOffset));
                }
                renderDate();
            });
        }, 1200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAutoLocationHijriDate);
    } else {
        initAutoLocationHijriDate();
    }
})();

// ==========================================
// PART 12: LAZY PRAYER TIMES SYSTEM (METHODS, PRECAUTIONS, ASR & HIGH-LATITUDE)
// ==========================================
(function() {
    const D2R = Math.PI / 180;
    const R2D = 180 / Math.PI;
    let prayerModalInitialized = false;
    let renderPrayerTimesRef = null;

    const CALCULATION_METHODS = [
        { id: 'karachi', name: 'University of Islamic Sciences, Karachi', fajr: 18, isha: 18, maghribOffset: 0 },
        { id: 'turkey', name: 'Religious Turkey', fajr: 18, isha: 17, maghribOffset: 0 },
        { id: 'isna', name: 'Islamic Society of North America (ISNA)', fajr: 15, isha: 15, maghribOffset: 0 },
        { id: 'mwl', name: 'Muslim World League (MWL)', fajr: 18, isha: 17, maghribOffset: 0 },
        { id: 'egypt', name: 'Egyptian General Authority of Survey', fajr: 19.5, isha: 17.5, maghribOffset: 0 },
        { id: 'makkah', name: 'Umm al-Qura, Makkah', fajr: 18.5, isha: 90, ishaIsMinutes: true, maghribOffset: 0 },
        { id: 'tehran', name: 'Institute of Geophysics, University of Tehran', fajr: 17.7, isha: 14, maghribOffset: 0 },
        { id: 'jafari', name: 'ITNA to Ashari, Jafari', fajr: 16, isha: 14, maghribOffset: 0 },
        { id: 'uoif', name: 'Union of Islamic Organizations of France UOIF', fajr: 12, isha: 12, maghribOffset: 0 },
        { id: 'bis', name: 'Egypt (BIS)', fajr: 18.5, isha: 17, maghribOffset: 0 },
        { id: 'cautious', name: 'Cautious Calendar', fajr: 18, isha: 18, maghribOffset: 3 },
        { id: 'jakim', name: 'JAKIM (Malaysia Islamic Association)', fajr: 20, isha: 18, maghribOffset: 0 },
        { id: 'kemenag', name: 'SIHAT / Kemenag (Indonesian Religious Affairs)', fajr: 20, isha: 18, maghribOffset: 0 },
        { id: 'muis', name: 'MUIS (Singapore Muslim Union)', fajr: 20, isha: 18, maghribOffset: 0 },
        { id: 'fixed_isha', name: 'Fixed Isha', fajr: 18, isha: 90, ishaIsMinutes: true, maghribOffset: 0 },
        { id: 'personal', name: 'Personal', fajr: 18, isha: 18, maghribOffset: 0 }
    ];

    const HIGH_LAT_METHODS = [
        { id: 'angle', name: 'Angle Based Method' },
        { id: 'midnight', name: 'Midnight' },
        { id: 'one_seventh', name: '1/7 of Night' },
        { id: 'none', name: 'None' }
    ];

    function getDefaultCoordsByTimezone(tz) {
        const z = (tz || '').toLowerCase();
        if (z.includes('riyadh') || z.includes('jeddah') || z.includes('mecca')) {
            return { lat: 21.4225, lon: 39.8262, label: 'Makkah (Auto)' };
        }
        if (z.includes('dubai') || z.includes('abu_dhabi')) {
            return { lat: 25.2048, lon: 55.2708, label: 'Dubai (Auto)' };
        }
        if (z.includes('karachi') || z.includes('islamabad') || z.includes('lahore')) {
            return { lat: 24.8607, lon: 67.0011, label: 'Karachi (Auto)' };
        }
        if (z.includes('dhaka')) {
            return { lat: 23.8103, lon: 90.4125, label: 'Dhaka (Auto)' };
        }
        return { lat: 17.3850, lon: 78.4867, label: 'Hyderabad (Default)' };
    }

    function julianDay(date) {
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();
        let yr = y, mo = m;
        if (mo <= 2) { yr -= 1; mo += 12; }
        const A = Math.floor(yr / 100);
        const B = 2 - A + Math.floor(A / 4);
        return Math.floor(365.25 * (yr + 4716)) + Math.floor(30.6001 * (mo + 1)) + d + B - 1524.5;
    }

    function sunPosition(jd) {
        const D = jd - 2451545.0;
        const g = (357.529 + 0.98560028 * D) % 360;
        const q = (280.459 + 0.98564736 * D) % 360;
        const L = (q + 1.915 * Math.sin(g * D2R) + 0.020 * Math.sin(2 * g * D2R)) % 360;
        const e = 23.439 - 0.00000036 * D;
        const RA = Math.atan2(Math.cos(e * D2R) * Math.sin(L * D2R), Math.cos(L * D2R)) * R2D / 15;
        const decl = Math.asin(Math.sin(e * D2R) * Math.sin(L * D2R)) * R2D;
        const EqT = q / 15 - ((RA % 24) + 24) % 24;
        const eqNormalized = EqT > 12 ? EqT - 24 : (EqT < -12 ? EqT + 24 : EqT);
        return { decl, eqTime: eqNormalized };
    }

    function hourAngleForAngle(angleDeg, latDeg, declDeg) {
        const cosH = (Math.cos(angleDeg * D2R) - Math.sin(latDeg * D2R) * Math.sin(declDeg * D2R)) /
                     (Math.cos(latDeg * D2R) * Math.cos(declDeg * D2R));
        if (cosH < -1 || cosH > 1) return null;
        return Math.acos(cosH) * R2D / 15;
    }

    function asrHourAngle(shadowFactor, latDeg, declDeg) {
        const latR = latDeg * D2R;
        const declR = declDeg * D2R;
        const cotA = shadowFactor + Math.tan(Math.abs(latR - declR));
        const sunAltR = Math.atan(1 / cotA);
        const cosH = (Math.sin(sunAltR) - Math.sin(latR) * Math.sin(declR)) /
                     (Math.cos(latR) * Math.cos(declR));
        if (cosH < -1 || cosH > 1) return null;
        return Math.acos(cosH) * R2D / 15;
    }

    function formatUtcHoursTo12Hr(hoursFloat, tzOffsetHours, precautionMins) {
        if (typeof hoursFloat !== 'number' || isNaN(hoursFloat)) return '--:--';
        let localHrs = (hoursFloat + tzOffsetHours) % 24;
        if (localHrs < 0) localHrs += 24;

        let totalMins = Math.round(localHrs * 60 + (precautionMins || 0));
        totalMins = ((totalMins % 1440) + 1440) % 1440;

        const h24 = Math.floor(totalMins / 60);
        const mins = totalMins % 60;
        const period = h24 >= 12 ? 'PM' : 'AM';
        const h12 = h24 % 12 === 0 ? 12 : h24 % 12;

        return `${String(h12).padStart(2, '0')}:${String(mins).padStart(2, '0')} ${period}`;
    }

    function calculatePrayerTimes(date, lat, lon, cfg) {
        const jd = julianDay(date) - lon / 360;
        const { decl, eqTime } = sunPosition(jd);
        const dhuhrUtc = 12 - eqTime - lon / 15;

        const methodObj = CALCULATION_METHODS.find(m => m.id === cfg.methodId) || CALCULATION_METHODS[0];
        const sunriseHa = hourAngleForAngle(90.833, lat, decl);
        const sunsetHa = hourAngleForAngle(90.833, lat, decl);

        const fajrHa = hourAngleForAngle(90 + methodObj.fajr, lat, decl);
        let fajrUtc = fajrHa !== null ? dhuhrUtc - fajrHa : null;
        const sunriseUtc = sunriseHa !== null ? dhuhrUtc - sunriseHa : null;
        const maghribUtc = sunsetHa !== null ? dhuhrUtc + sunsetHa + ((methodObj.maghribOffset || 0) / 60) : null;

        let ishaUtc = null;
        if (methodObj.ishaIsMinutes) {
            ishaUtc = maghribUtc !== null ? maghribUtc + (methodObj.isha / 60) : null;
        } else {
            const ishaHa = hourAngleForAngle(90 + methodObj.isha, lat, decl);
            ishaUtc = ishaHa !== null ? dhuhrUtc + ishaHa : null;
        }

        if (sunriseUtc !== null && maghribUtc !== null && cfg.highLat !== 'none') {
            const nightDuration = ((sunriseUtc - maghribUtc) % 24 + 24) % 24;

            if (fajrUtc === null) {
                if (cfg.highLat === 'midnight') {
                    fajrUtc = sunriseUtc - nightDuration / 2;
                } else if (cfg.highLat === 'one_seventh') {
                    fajrUtc = sunriseUtc - nightDuration / 7;
                } else {
                    fajrUtc = sunriseUtc - (methodObj.fajr / 60) * nightDuration;
                }
            }
            if (ishaUtc === null) {
                if (cfg.highLat === 'midnight') {
                    ishaUtc = maghribUtc + nightDuration / 2;
                } else if (cfg.highLat === 'one_seventh') {
                    ishaUtc = maghribUtc + nightDuration / 7;
                } else {
                    const ishaAngleVal = methodObj.ishaIsMinutes ? 15 : methodObj.isha;
                    ishaUtc = maghribUtc + (ishaAngleVal / 60) * nightDuration;
                }
            }
        }

        const shadowFactor = cfg.asrMadhab === 'hanafi' ? 2 : 1;
        const asrHa = asrHourAngle(shadowFactor, lat, decl);
        const asrUtc = asrHa !== null ? dhuhrUtc + asrHa : null;

        const tzOffsetHours = -date.getTimezoneOffset() / 60;
        const p = cfg.precautions;

        return {
            fajr: formatUtcHoursTo12Hr(fajrUtc, tzOffsetHours, p.fajr),
            sunrise: formatUtcHoursTo12Hr(sunriseUtc, tzOffsetHours, p.sunrise),
            dhuhr: formatUtcHoursTo12Hr(dhuhrUtc + (2 / 60), tzOffsetHours, p.dhuhr),
            asr: formatUtcHoursTo12Hr(asrUtc, tzOffsetHours, p.asr),
            maghrib: formatUtcHoursTo12Hr(maghribUtc, tzOffsetHours, p.maghrib),
            isha: formatUtcHoursTo12Hr(ishaUtc, tzOffsetHours, p.isha)
        };
    }

    function loadPrayerConfig() {
        const defaultPrecautions = { fajr: 0, sunrise: 0, dhuhr: 0, asr: 0, maghrib: 7, isha: 0 };
        let precautions = { ...defaultPrecautions };
        try {
            const savedP = JSON.parse(localStorage.getItem('app_pt_precautions') || 'null');
            if (savedP && typeof savedP === 'object') {
                precautions = { ...defaultPrecautions, ...savedP };
            }
        } catch (e) {}

        const savedMadhab = localStorage.getItem('app_madhab');
        const asrMadhab = savedMadhab === 'shafi' ? 'shafi' : 'hanafi';

        return {
            methodId: localStorage.getItem('app_pt_method') || 'karachi',
            highLat: localStorage.getItem('app_pt_highlat') || 'angle',
            asrMadhab,
            precautions
        };
    }

    function buildPrayerModalOnce() {
        if (prayerModalInitialized && document.getElementById('prayerTimesModal')) return;
        prayerModalInitialized = true;

        const modalHTML = `
        <div id="prayerTimesModal" class="prayer-modal print-none">
            <div class="prayer-card">
                <div class="prayer-header">
                    <span>Prayer Times</span>
                    <button type="button" id="closePrayerTimesBtn" class="prayer-close-btn" title="Close">&times;</button>
                </div>
                <div class="prayer-body">
                    <div id="prayerLocationLabel" class="prayer-meta-info"></div>

                    <div class="prayer-times-list">
                        <div class="prayer-row"><span class="prayer-name">Fajr</span><span id="ptFajr" class="prayer-time-val">--:--</span></div>
                        <div class="prayer-row"><span class="prayer-name">Sunrise</span><span id="ptSunrise" class="prayer-time-val">--:--</span></div>
                        <div class="prayer-row"><span class="prayer-name">Dhuhr</span><span id="ptDhuhr" class="prayer-time-val">--:--</span></div>
                        <div class="prayer-row"><span class="prayer-name">Asr</span><span id="ptAsr" class="prayer-time-val">--:--</span></div>
                        <div class="prayer-row"><span class="prayer-name">Maghrib</span><span id="ptMaghrib" class="prayer-time-val">--:--</span></div>
                        <div class="prayer-row"><span class="prayer-name">Isha</span><span id="ptIsha" class="prayer-time-val">--:--</span></div>
                    </div>

                    <div class="pt-section-label">Calculation Method</div>
                    <div class="pt-settings-box">
                        <div id="openPtMethodRow" class="pt-option-row">
                            <div class="pt-option-text">
                                <span class="pt-option-title">Calculation Method</span>
                                <span id="ptMethodSub" class="pt-option-sub">University of Islamic Sciences, Karachi</span>
                            </div>
                            <span class="pt-option-chevron">›</span>
                        </div>
                        <div id="openPtPrecautionsRow" class="pt-option-row">
                            <div class="pt-option-text">
                                <span class="pt-option-title">Precautions</span>
                                <span id="ptPrecautionsSub" class="pt-option-sub">0,0,0,0,7,0</span>
                            </div>
                            <span class="pt-option-chevron">›</span>
                        </div>
                        <div id="openPtAsrRow" class="pt-option-row">
                            <div class="pt-option-text">
                                <span class="pt-option-title">Asr Calculation</span>
                                <span id="ptAsrSub" class="pt-option-sub">Hanafi</span>
                            </div>
                            <span class="pt-option-chevron">›</span>
                        </div>
                        <div id="openPtHighLatRow" class="pt-option-row">
                            <div class="pt-option-text">
                                <span class="pt-option-title">High-Latitude Calculation</span>
                                <span id="ptHighLatSub" class="pt-option-sub">Angle Based Method</span>
                            </div>
                            <span class="pt-option-chevron">›</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="ptMethodModal" class="pt-submodal print-none">
            <div class="pt-subcard">
                <div class="pt-subhead">Calculation Method</div>
                <div id="ptMethodList" class="pt-checklist"></div>
                <div class="pt-subfooter">
                    <button type="button" id="ptMethodCancel" class="pt-dialog-btn">CANCEL</button>
                    <button type="button" id="ptMethodOk" class="pt-dialog-btn">OK</button>
                </div>
            </div>
        </div>

        <div id="ptPrecautionsModal" class="pt-submodal print-none">
            <div class="pt-subcard" style="max-width: 340px;">
                <div class="pt-subhead">Precautions</div>
                <div class="precautions-grid">
                    <div class="precaution-cell">
                        <span class="precaution-label">Fajr</span>
                        <div class="precaution-step-controls">
                            <button type="button" class="precaution-mini-btn" data-p="fajr" data-d="-1">-</button>
                            <span id="pValFajr" class="precaution-val">0</span>
                            <button type="button" class="precaution-mini-btn" data-p="fajr" data-d="1">+</button>
                        </div>
                    </div>
                    <div class="precaution-cell">
                        <span class="precaution-label">Sunrise</span>
                        <div class="precaution-step-controls">
                            <button type="button" class="precaution-mini-btn" data-p="sunrise" data-d="-1">-</button>
                            <span id="pValSunrise" class="precaution-val">0</span>
                            <button type="button" class="precaution-mini-btn" data-p="sunrise" data-d="1">+</button>
                        </div>
                    </div>
                    <div class="precaution-cell">
                        <span class="precaution-label">Dhuhr</span>
                        <div class="precaution-step-controls">
                            <button type="button" class="precaution-mini-btn" data-p="dhuhr" data-d="-1">-</button>
                            <span id="pValDhuhr" class="precaution-val">0</span>
                            <button type="button" class="precaution-mini-btn" data-p="dhuhr" data-d="1">+</button>
                        </div>
                    </div>
                    <div class="precaution-cell">
                        <span class="precaution-label">Asr</span>
                        <div class="precaution-step-controls">
                            <button type="button" class="precaution-mini-btn" data-p="asr" data-d="-1">-</button>
                            <span id="pValAsr" class="precaution-val">0</span>
                            <button type="button" class="precaution-mini-btn" data-p="asr" data-d="1">+</button>
                        </div>
                    </div>
                    <div class="precaution-cell">
                        <span class="precaution-label">Maghrib</span>
                        <div class="precaution-step-controls">
                            <button type="button" class="precaution-mini-btn" data-p="maghrib" data-d="-1">-</button>
                            <span id="pValMaghrib" class="precaution-val">7</span>
                            <button type="button" class="precaution-mini-btn" data-p="maghrib" data-d="1">+</button>
                        </div>
                    </div>
                    <div class="precaution-cell">
                        <span class="precaution-label">Isha</span>
                        <div class="precaution-step-controls">
                            <button type="button" class="precaution-mini-btn" data-p="isha" data-d="-1">-</button>
                            <span id="pValIsha" class="precaution-val">0</span>
                            <button type="button" class="precaution-mini-btn" data-p="isha" data-d="1">+</button>
                        </div>
                    </div>
                </div>
                <div class="pt-subfooter">
                    <button type="button" id="ptPrecCancel" class="pt-dialog-btn">CANCEL</button>
                    <button type="button" id="ptPrecOk" class="pt-dialog-btn">OK</button>
                </div>
            </div>
        </div>

        <div id="ptAsrModal" class="pt-submodal print-none">
            <div class="pt-subcard" style="max-width: 320px;">
                <div class="pt-subhead">Asr Calculation</div>
                <div id="ptAsrList" class="pt-checklist"></div>
                <div class="pt-subfooter">
                    <button type="button" id="ptAsrCancel" class="pt-dialog-btn">CANCEL</button>
                    <button type="button" id="ptAsrOk" class="pt-dialog-btn">OK</button>
                </div>
            </div>
        </div>

        <div id="ptHighLatModal" class="pt-submodal print-none">
            <div class="pt-subcard" style="max-width: 330px;">
                <div class="pt-subhead">High-Latitude Calculation</div>
                <div id="ptHighLatList" class="pt-checklist"></div>
                <div class="pt-subfooter">
                    <button type="button" id="ptHighLatCancel" class="pt-dialog-btn">CANCEL</button>
                    <button type="button" id="ptHighLatOk" class="pt-dialog-btn">OK</button>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const prayerModal = document.getElementById('prayerTimesModal');
        const closeBtn = document.getElementById('closePrayerTimesBtn');
        const locLabel = document.getElementById('prayerLocationLabel');

        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        let coords = getDefaultCoordsByTimezone(tz);

        function loadLatestCoords() {
            try {
                const savedCoords = JSON.parse(localStorage.getItem('app_hijri_coords') || 'null');
                if (savedCoords && typeof savedCoords.lat === 'number' && typeof savedCoords.lon === 'number') {
                    coords = { lat: savedCoords.lat, lon: savedCoords.lon, label: 'Current Location (GPS)' };
                }
            } catch (e) {}
        }

        function renderPrayerTimes() {
            loadLatestCoords();
            const cfg = loadPrayerConfig();
            const methodObj = CALCULATION_METHODS.find(m => m.id === cfg.methodId) || CALCULATION_METHODS[0];
            const highLatObj = HIGH_LAT_METHODS.find(h => h.id === cfg.highLat) || HIGH_LAT_METHODS[0];
            const p = cfg.precautions;

            document.getElementById('ptMethodSub').textContent = methodObj.name;
            document.getElementById('ptPrecautionsSub').textContent =
                `${p.fajr},${p.sunrise},${p.dhuhr},${p.asr},${p.maghrib},${p.isha}`;
            document.getElementById('ptAsrSub').textContent = cfg.asrMadhab === 'hanafi' ? 'Hanafi' : 'Shafi';
            document.getElementById('ptHighLatSub').textContent = highLatObj.name;

            locLabel.textContent = `${coords.label} • ${cfg.asrMadhab === 'hanafi' ? 'Hanafi' : 'Shafi'}`;

            const t = calculatePrayerTimes(new Date(), coords.lat, coords.lon, cfg);
            document.getElementById('ptFajr').textContent = t.fajr;
            document.getElementById('ptSunrise').textContent = t.sunrise;
            document.getElementById('ptDhuhr').textContent = t.dhuhr;
            document.getElementById('ptAsr').textContent = t.asr;
            document.getElementById('ptMaghrib').textContent = t.maghrib;
            document.getElementById('ptIsha').textContent = t.isha;
        }

        renderPrayerTimesRef = renderPrayerTimes;

        closeBtn.addEventListener('click', () => prayerModal.classList.remove('show'));
        prayerModal.addEventListener('click', (e) => {
            if (e.target === prayerModal) prayerModal.classList.remove('show');
        });

        // 1. Calculation Method Picker
        const methodModal = document.getElementById('ptMethodModal');
        const methodListEl = document.getElementById('ptMethodList');
        let tempMethodId = 'karachi';

        function renderMethodList() {
            methodListEl.innerHTML = '';
            CALCULATION_METHODS.forEach((m) => {
                const checked = m.id === tempMethodId;
                const row = document.createElement('div');
                row.className = 'pt-check-item' + (checked ? ' checked' : '');
                row.innerHTML = `<span class="pt-check-box">${checked ? '✓' : ''}</span><span>${m.name}</span>`;
                row.addEventListener('click', () => {
                    tempMethodId = m.id;
                    renderMethodList();
                });
                methodListEl.appendChild(row);
            });
        }

        document.getElementById('openPtMethodRow').addEventListener('click', () => {
            tempMethodId = loadPrayerConfig().methodId;
            renderMethodList();
            methodModal.classList.add('show');
        });
        methodModal.addEventListener('click', (e) => {
            if (e.target === methodModal) methodModal.classList.remove('show');
        });
        document.getElementById('ptMethodCancel').addEventListener('click', () => methodModal.classList.remove('show'));
        document.getElementById('ptMethodOk').addEventListener('click', () => {
            localStorage.setItem('app_pt_method', tempMethodId);
            methodModal.classList.remove('show');
            renderPrayerTimes();
            renderDrawerPrayerDetailsLine();
        });

        // 2. Precautions Picker
        const precModal = document.getElementById('ptPrecautionsModal');
        let tempPrec = { fajr: 0, sunrise: 0, dhuhr: 0, asr: 0, maghrib: 7, isha: 0 };

        function syncPrecVals() {
            document.getElementById('pValFajr').textContent = tempPrec.fajr;
            document.getElementById('pValSunrise').textContent = tempPrec.sunrise;
            document.getElementById('pValDhuhr').textContent = tempPrec.dhuhr;
            document.getElementById('pValAsr').textContent = tempPrec.asr;
            document.getElementById('pValMaghrib').textContent = tempPrec.maghrib;
            document.getElementById('pValIsha').textContent = tempPrec.isha;
        }

        document.getElementById('openPtPrecautionsRow').addEventListener('click', () => {
            tempPrec = { ...loadPrayerConfig().precautions };
            syncPrecVals();
            precModal.classList.add('show');
        });
        precModal.addEventListener('click', (e) => {
            if (e.target === precModal) precModal.classList.remove('show');
        });
        precModal.querySelectorAll('.precaution-mini-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-p');
                const delta = parseInt(btn.getAttribute('data-d'), 10);
                tempPrec[key] = Math.max(-30, Math.min(30, (tempPrec[key] || 0) + delta));
                syncPrecVals();
            });
        });
        document.getElementById('ptPrecCancel').addEventListener('click', () => precModal.classList.remove('show'));
        document.getElementById('ptPrecOk').addEventListener('click', () => {
            localStorage.setItem('app_pt_precautions', JSON.stringify(tempPrec));
            precModal.classList.remove('show');
            renderPrayerTimes();
            renderDrawerPrayerDetailsLine();
        });

        // 3. Asr Calculation Picker
        const asrModal = document.getElementById('ptAsrModal');
        const asrListEl = document.getElementById('ptAsrList');
        let tempAsr = 'hanafi';
        const ASR_OPTIONS = [
            { id: 'hanafi', name: 'Hanafi' },
            { id: 'shafi', name: 'Shafi' }
        ];

        function renderAsrList() {
            asrListEl.innerHTML = '';
            ASR_OPTIONS.forEach((opt) => {
                const checked = opt.id === tempAsr;
                const row = document.createElement('div');
                row.className = 'pt-check-item' + (checked ? ' checked' : '');
                row.innerHTML = `<span class="pt-check-box">${checked ? '✓' : ''}</span><span>${opt.name}</span>`;
                row.addEventListener('click', () => {
                    tempAsr = opt.id;
                    renderAsrList();
                });
                asrListEl.appendChild(row);
            });
        }

        document.getElementById('openPtAsrRow').addEventListener('click', () => {
            tempAsr = loadPrayerConfig().asrMadhab;
            renderAsrList();
            asrModal.classList.add('show');
        });
        asrModal.addEventListener('click', (e) => {
            if (e.target === asrModal) asrModal.classList.remove('show');
        });
        document.getElementById('ptAsrCancel').addEventListener('click', () => asrModal.classList.remove('show'));
        document.getElementById('ptAsrOk').addEventListener('click', () => {
            localStorage.setItem('app_madhab', tempAsr);
            asrModal.classList.remove('show');
            renderPrayerTimes();
            renderDrawerPrayerDetailsLine();
        });

        // 4. High-Latitude Calculation Picker
        const highLatModal = document.getElementById('ptHighLatModal');
        const highLatListEl = document.getElementById('ptHighLatList');
        let tempHighLat = 'angle';

        function renderHighLatList() {
            highLatListEl.innerHTML = '';
            HIGH_LAT_METHODS.forEach((opt) => {
                const checked = opt.id === tempHighLat;
                const row = document.createElement('div');
                row.className = 'pt-check-item' + (checked ? ' checked' : '');
                row.innerHTML = `<span class="pt-check-box">${checked ? '✓' : ''}</span><span>${opt.name}</span>`;
                row.addEventListener('click', () => {
                    tempHighLat = opt.id;
                    renderHighLatList();
                });
                highLatListEl.appendChild(row);
            });
        }

        document.getElementById('openPtHighLatRow').addEventListener('click', () => {
            tempHighLat = loadPrayerConfig().highLat;
            renderHighLatList();
            highLatModal.classList.add('show');
        });
        highLatModal.addEventListener('click', (e) => {
            if (e.target === highLatModal) highLatModal.classList.remove('show');
        });
        document.getElementById('ptHighLatCancel').addEventListener('click', () => highLatModal.classList.remove('show'));
        document.getElementById('ptHighLatOk').addEventListener('click', () => {
            localStorage.setItem('app_pt_highlat', tempHighLat);
            highLatModal.classList.remove('show');
            renderPrayerTimes();
            renderDrawerPrayerDetailsLine();
        });
    }

    function parseTime12HrToDate(timeStr, baseDate) {
        const m = String(timeStr || '').trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
        if (!m) return null;
        let h = parseInt(m[1], 10);
        const min = parseInt(m[2], 10);
        const ap = m[3].toUpperCase();
        if (ap === 'AM' && h === 12) h = 0;
        else if (ap === 'PM' && h !== 12) h += 12;
        return new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), h, min, 0, 0);
    }

    function formatDurationHm(diffMs) {
        const totalMins = Math.max(0, Math.ceil(diffMs / 60000));
        const hrs = Math.floor(totalMins / 60);
        const mins = totalMins % 60;
        if (hrs > 0) return hrs + 'h ' + mins + 'm';
        return mins + 'm';
    }

    function renderDrawerPrayerDetailsLine() {
        const el = document.getElementById('drawerPrayerDetailsLine');
        if (!el) return;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        let coords = getDefaultCoordsByTimezone(tz);
        try {
            const savedCoords = JSON.parse(localStorage.getItem('app_hijri_coords') || 'null');
            if (savedCoords && typeof savedCoords.lat === 'number' && typeof savedCoords.lon === 'number') {
                coords = { lat: savedCoords.lat, lon: savedCoords.lon, label: 'GPS' };
            }
        } catch (e) {}
        const cfg = loadPrayerConfig();
        const now = new Date();
        const t = calculatePrayerTimes(now, coords.lat, coords.lon, cfg);

        const waqts = [
            { name: 'Fajr', timeStr: t.fajr, dt: parseTime12HrToDate(t.fajr, now) },
            { name: 'Sunrise', timeStr: t.sunrise, dt: parseTime12HrToDate(t.sunrise, now) },
            { name: 'Dhuhr', timeStr: t.dhuhr, dt: parseTime12HrToDate(t.dhuhr, now) },
            { name: 'Asr', timeStr: t.asr, dt: parseTime12HrToDate(t.asr, now) },
            { name: 'Maghrib', timeStr: t.maghrib, dt: parseTime12HrToDate(t.maghrib, now) },
            { name: 'Isha', timeStr: t.isha, dt: parseTime12HrToDate(t.isha, now) }
        ];

        let nextWaqt = null;
        for (let i = 0; i < waqts.length; i++) {
            if (waqts[i].dt && waqts[i].dt.getTime() > now.getTime()) {
                nextWaqt = waqts[i];
                break;
            }
        }
        if (!nextWaqt) {
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            const tTom = calculatePrayerTimes(tomorrow, coords.lat, coords.lon, cfg);
            nextWaqt = { name: 'Fajr', timeStr: tTom.fajr, dt: parseTime12HrToDate(tTom.fajr, tomorrow) };
        }

        const remText = nextWaqt && nextWaqt.dt ? formatDurationHm(nextWaqt.dt.getTime() - now.getTime()) : '--';

        el.innerHTML =
            '<strong>Prayer Times:</strong> ' +
            '<span class="drawer-pt-waqt-row">' +
                'Fajr ' + t.fajr + ' • ' +
                'Dhuhr ' + t.dhuhr + ' • ' +
                'Asr ' + t.asr + ' • ' +
                'Maghrib ' + t.maghrib + ' • ' +
                'Isha ' + t.isha +
            '</span>' +
            '<div class="drawer-pt-next-line">' +
                '<span>Next: <span class="drawer-pt-next-val">' + nextWaqt.name + ' (' + nextWaqt.timeStr + ')</span></span>' +
                '<span>Remaining: <span class="drawer-pt-rem-val">' + remText + '</span></span>' +
            '</div>';
    }

    window.awraadRenderDrawerPrayerDetails = renderDrawerPrayerDetailsLine;

    function bootPrayerTimes() {
        renderDrawerPrayerDetailsLine();
        setInterval(renderDrawerPrayerDetailsLine, 15000);

        document.addEventListener('click', (e) => {
            if (e.target.closest('#drawerPrayerDetailsLine')) {
                e.preventDefault();
                buildPrayerModalOnce();
                if (renderPrayerTimesRef) renderPrayerTimesRef();
                const prayerModal = document.getElementById('prayerTimesModal');
                if (prayerModal) prayerModal.classList.add('show');
                if (typeof window.awraadCloseDrawer === 'function') window.awraadCloseDrawer();
                return;
            }
            const openBtn = e.target.closest('#openPrayerTimesBtn');
            if (!openBtn) return;
            e.preventDefault();
            buildPrayerModalOnce();
            if (renderPrayerTimesRef) renderPrayerTimesRef();
            const prayerModal = document.getElementById('prayerTimesModal');
            if (prayerModal) prayerModal.classList.add('show');
            if (typeof window.awraadCloseDrawer === 'function') window.awraadCloseDrawer();

            if (typeof window.awraadRequestLocationOnce === 'function') {
                window.awraadRequestLocationOnce(() => {
                    renderDrawerPrayerDetailsLine();
                    if (prayerModal && prayerModal.classList.contains('show') && renderPrayerTimesRef) {
                        renderPrayerTimesRef();
                    }
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootPrayerTimes);
    } else {
        bootPrayerTimes();
    }
})();
// ==========================================
// PART 13: DOUBLE-TAP BACK TO EXIT & MODAL BACK HANDLER (PURE JS + CSS)
// ==========================================
(function() {
    const EXIT_WINDOW_MS = 2000;
    let exitResetTimer = null;
    let lastCapacitorBackTime = 0;

    function isMainMenuRoot() {
        const path = (window.location.pathname || '').toLowerCase();
        const isRootPage = path === '' || path === '/' || path.endsWith('/index.html') || path === 'index.html';
        const hash = (window.location.hash || '').toLowerCase();
        const isRootHash = hash === '' || hash === '#' || hash === '#main-menu';
        return isRootPage && isRootHash;
    }

    function showExitToast(message) {
        let toast = document.getElementById('awraadExitToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'awraadExitToast';
            toast.className = 'exit-toast print-none';
            document.body.appendChild(toast);
        }
        toast.textContent = message || 'App band karne ke liye dobara Back dabayein';
        // Restart animation cleanly
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');
    }

    function hideExitToast() {
        const toast = document.getElementById('awraadExitToast');
        if (toast) toast.classList.remove('show');
    }

    function closeTopOpenModal() {
        const shortcutRail = document.getElementById('awraadShortcutRail');
        if (shortcutRail && shortcutRail.classList.contains('open')) {
            if (typeof window.awraadCloseShortcutRail === 'function') window.awraadCloseShortcutRail();
            return true;
        }
        const sideDrawer = document.getElementById('awraadSideDrawer');
        if (sideDrawer && sideDrawer.classList.contains('open')) {
            if (typeof window.awraadCloseDrawer === 'function') window.awraadCloseDrawer();
            return true;
        }
        const selectors = [
            '#navWarningModal.show',
            '#resetAllConfirmModal.show',
            '.hijri-stepper-modal.show',
            '.pt-submodal.show',
            '.palette-modal.show',
            '#quickSearchModal.show',
            '#bookmarksModal.show',
            '.settings-modal.show',
            '.events-modal.show',
            '.prayer-modal.show',
            '#tasbeehModal.show:not(.tasbeeh-compact)',
            '#autoScrollBar.show'
        ];
        for (let i = 0; i < selectors.length; i++) {
            const el = document.querySelector(selectors[i]);
            if (el) {
                el.classList.remove('show');
                if (selectors[i].indexOf('tasbeehModal') !== -1 && typeof window.tasbeehPauseAuto === 'function') {
                    window.tasbeehPauseAuto();
                }
                if (selectors[i].indexOf('autoScrollBar') !== -1 && typeof window.awraadStopAutoScroll === 'function') {
                    window.awraadStopAutoScroll();
                }
                return true;
            }
        }
        return false;
    }

    function armExitGuard() {
        if (window.tasbeehSessionActive) return;
        if (!isMainMenuRoot()) return;

        try {
            if (history.state && history.state.awraadExitGuard) return;

            if (!history.state || !history.state.awraadExitBase) {
                history.replaceState({ awraadExitBase: true }, '', window.location.href);
            }
            history.pushState({ awraadExitGuard: true }, '', window.location.href);
        } catch (err) {}
    }

    // 1. Native Capacitor App Plugin listener (agar future mein @capacitor/app install ho to automatically use hoga)
    let usingCapacitorPlugin = false;
    function setupCapacitorBackListener() {
        try {
            const capApp = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
            if (capApp && typeof capApp.addListener === 'function') {
                usingCapacitorPlugin = true;
                capApp.addListener('backButton', function(data) {
                    if (window.tasbeehSessionActive) {
                        window.history.back();
                        return;
                    }
                    if (closeTopOpenModal()) return;

                    if (!isMainMenuRoot() && data && data.canGoBack) {
                        try {
                            if (typeof window.awraadFlushReadingProgress === 'function') {
                                window.awraadFlushReadingProgress();
                            }
                        } catch (err) {}
                        window.history.back();
                        return;
                    }

                    const now = Date.now();
                    if (now - lastCapacitorBackTime < EXIT_WINDOW_MS) {
                        hideExitToast();
                        if (typeof capApp.exitApp === 'function') {
                            capApp.exitApp();
                        }
                    } else {
                        lastCapacitorBackTime = now;
                        showExitToast('App band karne ke liye dobara Back dabayein');
                        if (exitResetTimer) clearTimeout(exitResetTimer);
                        exitResetTimer = setTimeout(hideExitToast, EXIT_WINDOW_MS);
                    }
                });
            }
        } catch (err) {}
    }

    // 2. Pure JavaScript History Guard (Capacitor WebView without plugins + Mobile Browser / PWA)
    function initBackGuardSystem() {
        setupCapacitorBackListener();
        if (usingCapacitorPlugin) return;

        armExitGuard();

        // First user tap/scroll par ensure karein ke guard armed ho (Chrome History Intervention safety)
        const onFirstGesture = () => {
            if (!exitResetTimer && isMainMenuRoot()) {
                armExitGuard();
            }
        };
        document.addEventListener('pointerdown', onFirstGesture, { once: true, passive: true });

        window.addEventListener('pageshow', () => {
            if (!exitResetTimer && isMainMenuRoot()) {
                armExitGuard();
            }
        });

        window.addEventListener('popstate', (e) => {
            // Tasbeeh active hone par Part 4 ka Tasbeeh Guard priority lega
            if (window.tasbeehSessionActive) return;

            // Agar koi popup/modal/menu khula ho to pehle usay band karein aur guard wapas lagayein
            if (closeTopOpenModal()) {
                if (exitResetTimer) {
                    clearTimeout(exitResetTimer);
                    exitResetTimer = null;
                }
                hideExitToast();
                if (isMainMenuRoot()) {
                    armExitGuard();
                }
                return;
            }

            // Agar user Main Menu ke guard state se peeche base state par aaya hai -> 1st Back tap!
            if (isMainMenuRoot() && e.state && e.state.awraadExitBase) {
                showExitToast('App band karne ke liye dobara Back dabayein');

                if (exitResetTimer) clearTimeout(exitResetTimer);
                // 2 second ke andar 2nd Back tap hoga to base state se seedha app close ho jayega.
                // Agar 2 second mein tap nahi kiya to toast hat kar guard dobara arm ho jayega.
                exitResetTimer = setTimeout(() => {
                    exitResetTimer = null;
                    hideExitToast();
                    if (!window.tasbeehSessionActive && isMainMenuRoot()) {
                        armExitGuard();
                    }
                }, EXIT_WINDOW_MS);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBackGuardSystem);
    } else {
        initBackGuardSystem();
    }
})();
// ==========================================
// PART 14: AUTO RESPONSIVE TABLE WRAPPER (ZERO PAGE OVERFLOW)
// ==========================================
(function() {
    function wrapResponsiveTables() {
        document.querySelectorAll('.shijra-table').forEach(function(tbl) {
            if (tbl.parentElement && tbl.parentElement.classList.contains('table-scroll-wrap')) return;
            var wrap = document.createElement('div');
            wrap.className = 'table-scroll-wrap';
            tbl.parentNode.insertBefore(wrap, tbl);
            wrap.appendChild(tbl);
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', wrapResponsiveTables);
    } else {
        wrapResponsiveTables();
    }
})();
// ==========================================
// PART 15: FULL-SCREEN 10-SECOND LAUNCH SPLASH SCREEN
// ==========================================
(function() {
    const SPLASH_DURATION_MS = 10000;
    const SPLASH_KEY = 'awraad_splash_shown';

    function removePendingCover() {
        document.documentElement.classList.remove('awraad-splash-pending');
        const st = document.getElementById('awraad-splash-preload-style');
        if (st) st.remove();
    }

    function showLaunchSplash() {
        try {
            if (sessionStorage.getItem(SPLASH_KEY)) {
                removePendingCover();
                return;
            }
            sessionStorage.setItem(SPLASH_KEY, '1');
        } catch (err) {}

        if (document.getElementById('awraadSplashScreen') || !document.body) {
            removePendingCover();
            return;
        }

        const splash = document.createElement('div');
        splash.id = 'awraadSplashScreen';
        splash.className = 'print-none';
        splash.setAttribute('role', 'presentation');
        splash.innerHTML = `
            <div class="splash-center">
                <div class="splash-logo-wrap">
                    <img id="awraadSplashLogo" class="splash-logo-img" src="./icon-512.png" alt="Awraad e Alaviya Nooriya">
                </div>
                <div class="splash-title-en">Awraad e Alaviya Nooriya</div>
                <div class="splash-title-ar" dir="rtl">أَوْرَادُ الْعَلَوِيَّةِ النُّوْرِيَّةِ</div>
            </div>
            <div class="splash-footer">
                <div class="splash-powered-label">Powered By</div>
                <div class="splash-powered-brand">Silsila e Alaviya Nooriya</div>
            </div>
        `;

        document.documentElement.classList.add('awraad-splash-open');
        document.body.classList.add('awraad-splash-open');
        document.body.appendChild(splash);

        // Icon path fallback chain (works in APK, GitHub Pages, subfolders, and local CX Explorer)
        const logoImg = document.getElementById('awraadSplashLogo');
        if (logoImg) {
            const fallbacks = ['./icon.png', './icon.jpg', './apple-touch-icon.png', '../icon-512.png', '../icon.jpg'];
            let fbIndex = 0;
            logoImg.addEventListener('error', function() {
                if (fbIndex < fallbacks.length) {
                    logoImg.src = fallbacks[fbIndex++];
                } else {
                    const wrap = logoImg.parentElement;
                    if (wrap) wrap.style.display = 'none';
                }
            });
        }

        // Remove preload cover after splash is painted so fade-out smoothly reveals the app
        requestAnimationFrame(() => {
            removePendingCover();
        });

        setTimeout(() => {
            splash.classList.add('splash-hide');
            document.documentElement.classList.remove('awraad-splash-open');
            document.body.classList.remove('awraad-splash-open');
            setTimeout(() => {
                if (splash.parentNode) splash.parentNode.removeChild(splash);
            }, 480);
        }, SPLASH_DURATION_MS);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showLaunchSplash);
    } else {
        showLaunchSplash();
    }
})();
// ==========================================
// PART 16: LIVE SESSION (GOOGLE MEET), DUAL HIJRI CALENDAR, SHAJARA MASHAYKHEEN URS & INDIVIDUAL URDU NOTIFICATIONS
// ==========================================
(function() {
    const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const RRULE_DAYS = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    const HIJRI_MONTHS_UR = [
        'محرم', 'صفر', 'ربیع الاول', 'ربیع الثانی',
        'جمادی الاول', 'جمادی الثانی', 'رجب', 'شعبان',
        'رمضان', 'شوال', 'ذوالقعدہ', 'ذوالحجہ'
    ];
    const HIJRI_MONTHS_EN = [
        'Muharram', 'Safar', 'Rabi-ul-Awwal', 'Rabi-us-Sani',
        'Jumada-ul-Awwal', 'Jumada-us-Sani', 'Rajab', 'Shaban',
        'Ramadan', 'Shawwal', 'Zil-Qadah', 'Zil-Hijjah'
    ];
    const URS_CACHE_KEY = 'awraad_shajara_urs_cache_v2';
    const URS_NOTIF_ENABLED_KEY = 'app_urs_notif_enabled';
    const URS_NOTIF_TIME_KEY = 'app_urs_notif_time'; // 'morning' | 'maghrib' | 'both'
    const URS_NOTIF_CHANNEL_ID = 'awraad_urs_channel';
    const URS_NOTIF_ID_MORNING_BASE = 50000;
    const URS_NOTIF_ID_MAGHRIB_BASE = 60000;
    const URS_NOTIF_ID_MAX = 69999;

    const FALLBACK_CONFIG = {
        autoLoadShajaraUrs: true,
        liveSession: {
            id: "weekly-tuesday-session",
            title: "Weekly Online Session - Tafseer Ul Quran [ONLY For Ladies]",
            titleUr: "",
            host: "Conducted by: Hazrath Qibla",
            sessionMode: "Session Mode: Online [Google Meet]",
            description: "",
            meetUrl: "",
            isRecurringWeekly: true,
            intervalWeeks: 1,
            dayOfWeek: 2,
            startHour: 11,
            startMinute: 0,
            durationMinutes: 60,
            showEndTime: true,
            timezoneLabel: "IST",
            location: "Online [Google Meet]",
            customStartISO: ""
        },
        liveSessions: [
            {
                id: "weekly-tuesday-session",
                title: "Weekly Online Session - Tafseer Ul Quran [ONLY For Ladies]",
                titleUr: "",
                host: "Conducted by: Hazrath Qibla",
                sessionMode: "Session Mode: Online [Google Meet]",
                description: "",
                meetUrl: "",
                isRecurringWeekly: true,
                intervalWeeks: 1,
                dayOfWeek: 2,
                startHour: 11,
                startMinute: 0,
                durationMinutes: 60,
                showEndTime: true,
                timezoneLabel: "IST",
                location: "Online [Google Meet]",
                customStartISO: ""
            },
            {
                id: "weekly-sunday-halqa",
                title: "Halqa e Zikr o Taalemaat",
                titleUr: "حلقۂ ذکر و تعلیمات",
                host: "",
                sessionMode: "",
                description: "",
                meetUrl: "",
                isRecurringWeekly: true,
                intervalWeeks: 1,
                dayOfWeek: 0,
                startHour: 16,
                startMinute: 40,
                durationMinutes: 60,
                showEndTime: false,
                timezoneLabel: "IST",
                location: "Khankhaa e Alaviya Nooriya, Saadaat Nagar",
                customStartISO: ""
            },
            {
                id: "weekly-saturday-taleemaat",
                title: "Khusoosi Taleemaat Session [For Ahle Silsila]",
                titleUr: "",
                host: "Conducted by: Sajjaad e Sahab",
                sessionMode: "",
                description: "",
                meetUrl: "",
                isRecurringWeekly: true,
                intervalWeeks: 1,
                dayOfWeek: 6,
                startHour: 7,
                startMinute: 0,
                durationMinutes: 60,
                showEndTime: false,
                timezoneLabel: "IST",
                location: "Khankha e Alaviya Nooriya",
                customStartISO: ""
            },
            {
                id: "biweekly-saturday-ladies",
                title: "Khusoosi Taaleemaat Session [ONLY For Ladies of Ahle Silsila]",
                titleUr: "",
                host: "Conducted by: Abid Mulsaab",
                sessionMode: "",
                description: "",
                meetUrl: "",
                isRecurringWeekly: true,
                intervalWeeks: 2,
                anchorDate: "2026-11-28",
                dayOfWeek: 6,
                startHour: 18,
                startMinute: 15,
                durationMinutes: 60,
                showEndTime: false,
                customTimeLabel: "After Maghrib",
                timezoneLabel: "IST",
                location: "",
                customStartISO: ""
            }
        ],
        googleCalendarEmbedUrl: "",
        events: [
            {
                id: "weekly-tuesday-session",
                title: "Weekly Online Session - Tafseer Ul Quran [ONLY For Ladies]",
                titleUr: "",
                isRecurringWeekly: true,
                intervalWeeks: 1,
                dayOfWeek: 2,
                startHour: 11,
                startMinute: 0,
                durationMinutes: 60,
                location: "Online [Google Meet]",
                description: "Conducted by: Hazrath Qibla • Session Mode: Online [Google Meet] • 11:00 AM to 12:00 PM IST (60 mins)",
                meetUrl: ""
            },
            {
                id: "weekly-sunday-halqa",
                title: "Halqa e Zikr o Taalemaat",
                titleUr: "حلقۂ ذکر و تعلیمات",
                isRecurringWeekly: true,
                intervalWeeks: 1,
                dayOfWeek: 0,
                startHour: 16,
                startMinute: 40,
                durationMinutes: 60,
                location: "Khankhaa e Alaviya Nooriya, Saadaat Nagar",
                description: "Every Sunday @ 4:40 PM — Halqa e Zikr o Taalemaat @ Khankhaa e Alaviya Nooriya, Saadaat Nagar.",
                meetUrl: ""
            },
            {
                id: "weekly-saturday-taleemaat",
                title: "Khusoosi Taleemaat Session [For Ahle Silsila]",
                titleUr: "",
                isRecurringWeekly: true,
                intervalWeeks: 1,
                dayOfWeek: 6,
                startHour: 7,
                startMinute: 0,
                durationMinutes: 60,
                location: "Khankha e Alaviya Nooriya",
                description: "Conducted by: Sajjaad e Sahab • Every Saturday @ 7:00 AM @ Khankha e Alaviya Nooriya.",
                meetUrl: ""
            },
            {
                id: "biweekly-saturday-ladies",
                title: "Khusoosi Taaleemaat Session [ONLY For Ladies of Ahle Silsila]",
                titleUr: "",
                isRecurringWeekly: true,
                intervalWeeks: 2,
                anchorDate: "2026-11-28",
                dayOfWeek: 6,
                startHour: 18,
                startMinute: 15,
                durationMinutes: 60,
                customTimeLabel: "After Maghrib",
                location: "",
                description: "Conducted by: Abid Mulsaab • Every Alternate Saturday — After Maghrib.",
                meetUrl: ""
            },
            {
                id: "thursday-khatm",
                title: "Shab-e-Jumu'ah Awraad & Durood Gathering",
                titleUr: "شبِ جمعہ محفلِ درود و اوراد",
                isRecurringWeekly: true,
                intervalWeeks: 1,
                dayOfWeek: 4,
                startHour: 21,
                startMinute: 0,
                durationMinutes: 45,
                location: "Online / Home",
                description: "Shab-e-Jumu'ah mein Dalail-ul-Khairat aur khas Durood Shareef ka ihtimam.",
                meetUrl: ""
            }
        ],
        monthlyHijriEvents: [
            {
                id: "monthly-gyarhween-fatiha",
                title: "Har Chaand ki 11 Taareeq - Gyaarwii ki Faatiha Ka Ihtemaam Kare",
                titleUr: "ہر چاند کی ۱۱ تاریخ — گیارہویں کی فاتحہ کا اہتمام کریں",
                hijriDay: 11,
                description: "Har Chaand ki 11 Taareeq ko Gyaarwii ki Faatiha aur Isaal-e-Sawab ka ihtemaam karein."
            }
        ],
        hijriEvents: [
            {
                id: "urs-ghaus-e-azam",
                type: "urs",
                title: "Urs-e-Ghaus-e-Azam (R.A.) — Gyarhween Shareef",
                titleUr: "عرسِ غوثِ اعظم حضرت شیخ عبدالقادر جیلانی رضی اللہ عنہ",
                hijriDay: 11,
                hijriMonth: 4,
                silsila: "Silsila e Qadriya",
                silsilaUr: "سلسلہ قادریہ",
                wisaalYear: "561ھ",
                location: "بغداد شریف",
                description: "Gyarhween Shareef — Fatiha, Khatm-e-Qadriya aur Isaal-e-Sawab.",
                shajaraHash: "#qadriya"
            },
            {
                id: "urs-khwaja-gharib-nawaz",
                type: "urs",
                title: "Urs-e-Khwaja Gharib Nawaz (R.A.) — Chhati Shareef",
                titleUr: "عرسِ حضرت خواجہ معین الدین چشتی اجمیری رحمۃ اللہ علیہ",
                hijriDay: 6,
                hijriMonth: 7,
                silsila: "Silsila e Chishtiya",
                silsilaUr: "سلسلہ چشتیہ",
                wisaalYear: "633ھ",
                location: "اجمیر شریف",
                description: "Chhati Shareef — Khatm-e-Khwajgan aur Fatiha Khwani.",
                shajaraHash: "#chishtiyya"
            }
        ]
    };

    let eventsModalBuilt = false;
    let configLoadAttempted = false;
    let shajaraFetchStarted = false;
    let shajaraUrsExtracted = [];
    let countdownTimer = null;
    let calViewYear = new Date().getFullYear();
    let calViewMonth = new Date().getMonth();
    let selectedCalDay = new Date().getDate();
    let currentCalSubtab = 'list';
    let useGoogleEmbedMode = false;
    let ursFilterMonth = 0;
    let ursSearchQuery = '';
    let cachedHijriLookup = null;
    let cachedHijriLookupKey = '';
    let notifListenerBound = false;
    let lastNotifStatusText = '';
    let lastNotifScheduleKey = '';

    let hijriFmt = null;
    try {
        hijriFmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        });
    } catch (e) {}

    function toArabicDigits(str) {
        const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(str === null || str === undefined ? '' : str).replace(/\d/g, (d) => digits[d]);
    }

    function toAsciiDigits(str) {
        return String(str || '')
            .replace(/[\u0660-\u0669]/g, (ch) => String(ch.charCodeAt(0) - 0x0660))
            .replace(/[\u06F0-\u06F9]/g, (ch) => String(ch.charCodeAt(0) - 0x06F0));
    }

    function normalizeArabicText(str) {
        return toAsciiDigits(str)
            .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
            .replace(/[أإآٱ]/g, 'ا')
            .replace(/[ىيی]/g, 'ی')
            .replace(/[كک]/g, 'ک')
            .replace(/[ةهہ]/g, 'ہ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // Strip leading "اِلٰہِيْ بحرمت" / "إِلٰهِيْ بِحُرْمَةِ" so notifications show pure Mashaykh name
    const LEADING_ILAHI_RE = /^\s*(?:(?:[اأإآ][\u064B-\u065F\u0670]*ل[\u064B-\u065F\u0670]*[ہهھ][\u064B-\u065F\u0670]*[یيے][\u064B-\u065F\u0670]*)\s+)?(?:ب[\u064B-\u065F\u0670]*ح[\u064B-\u065F\u0670]*ر[\u064B-\u065F\u0670]*م[\u064B-\u065F\u0670]*[تة][\u064B-\u065F\u0670]*\s+)/u;

    function cleanMashaykhNameForNotification(rawName) {
        if (!rawName) return '';
        let cleaned = String(rawName).replace(/\s+/g, ' ').trim();
        cleaned = cleaned.replace(LEADING_ILAHI_RE, '').trim();
        cleaned = cleaned.replace(/^عرسِ?\s*مبارک\s*[:\-—]?\s*/u, '').trim();
        return cleaned || String(rawName).trim();
    }

    function mapSilsilaToUrdu(labelEn) {
        const s = String(labelEn || '').toLowerCase();
        if (s.includes('qadriya') || s.includes('قادریہ')) return 'سلسلہ قادریہ';
        if (s.includes('chisht') || s.includes('چشتیہ')) return 'سلسلہ چشتیہ';
        if (s.includes('akbar') || s.includes('اکبریہ')) return 'سلسلہ اکبریہ';
        if (s.includes('asnaad') || s.includes('asnad') || s.includes('دلائل')) return 'اسنادِ دلائل الخیرات';
        return labelEn && /[\u0600-\u06FF]/.test(labelEn) ? labelEn : 'شجرہ علویہ';
    }

    function formatSilsilaRefsUrdu(u) {
        const refs = Array.isArray(u.silsilaRefs) && u.silsilaRefs.length
            ? u.silsilaRefs
            : [{
                labelUr: u.silsilaUr || mapSilsilaToUrdu(u.silsila),
                numberAr: u.silsilaNumber ? toArabicDigits(u.silsilaNumber) : ''
            }];

        if (refs.length === 1) {
            const r = refs[0];
            const urName = r.labelUr || mapSilsilaToUrdu(r.label || u.silsila);
            const numAr = r.numberAr || (r.number ? toArabicDigits(r.number) : '');
            return numAr ? `${urName} — نمبر: ${numAr}` : urName;
        }
        return refs.map((r) => {
            const urName = r.labelUr || mapSilsilaToUrdu(r.label || '');
            const numAr = r.numberAr || (r.number ? toArabicDigits(r.number) : '');
            return numAr ? `${urName} (نمبر: ${numAr})` : urName;
        }).join(' • ');
    }

    // Option 1: Mukammal Urdu Notification Payload (Arabic-Indic Figures)
    function buildUrsNotificationPayload(u) {
        const hijriDayAr = toArabicDigits(u.hijriDay);
        const hijriMonthUr = HIJRI_MONTHS_UR[u.hijriMonth - 1] || '';
        const cleanName = cleanMashaykhNameForNotification(u.titleUr || u.title || '');
        const silsilaPart = formatSilsilaRefsUrdu(u);
        const wisaalAr = u.wisaalYear ? toArabicDigits(u.wisaalYear) : '';

        const metaParts = [];
        if (silsilaPart) metaParts.push(`📜 ${silsilaPart}`);
        if (wisaalAr) metaParts.push(`وصال: ${wisaalAr}`);
        if (u.location) metaParts.push(`مزار: ${u.location}`);

        const title = `🌙 عرسِ مبارک و یومِ وصال — ${hijriDayAr} ${hijriMonthUr}`;
        const line1 = cleanName;
        const line2 = metaParts.join(' | ');
        const line3 = '🤲 فاتحہ خوانی اور ایصالِ ثواب کا اہتمام فرمائیں۔';
        const fullBody = [line1, line2, line3].filter(Boolean).join('\n');

        return {
            title,
            body: fullBody,
            largeBody: fullBody,
            summaryText: silsilaPart || 'عرسِ مبارک',
            line1,
            line2,
            line3
        };
    }

    function getActiveConfig() {
        const external = window.AWRAAD_EVENTS_CONFIG;
        if (external && typeof external === 'object') {
            return {
                autoLoadShajaraUrs: external.autoLoadShajaraUrs !== false,
                liveSession: Object.assign({}, FALLBACK_CONFIG.liveSession, external.liveSession || {}),
                liveSessions: Array.isArray(external.liveSessions) ? external.liveSessions : null,
                googleCalendarEmbedUrl: external.googleCalendarEmbedUrl || "",
                events: Array.isArray(external.events) ? external.events : FALLBACK_CONFIG.events,
                monthlyHijriEvents: Array.isArray(external.monthlyHijriEvents) ? external.monthlyHijriEvents : FALLBACK_CONFIG.monthlyHijriEvents,
                hijriEvents: Array.isArray(external.hijriEvents) ? external.hijriEvents : FALLBACK_CONFIG.hijriEvents
            };
        }
        return FALLBACK_CONFIG;
    }

    function getActiveHijriOffset() {
        const manual = localStorage.getItem('app_hijri_manual_offset');
        if (manual !== null && !isNaN(parseInt(manual, 10))) {
            return parseInt(manual, 10);
        }
        const auto = localStorage.getItem('app_auto_hijri_offset');
        if (auto !== null && !isNaN(parseInt(auto, 10))) {
            return parseInt(auto, 10);
        }
        return -1;
    }

    function getHijriPartsForGregorianDate(dateObj, applyOffset) {
        if (!hijriFmt) return null;
        try {
            const offset = applyOffset === false ? 0 : getActiveHijriOffset();
            const d = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 12, 0, 0);
            if (offset) d.setDate(d.getDate() + offset);
            const parts = hijriFmt.formatToParts(d);
            const day = parseInt(parts.find(p => p.type === 'day')?.value, 10);
            const month = parseInt(parts.find(p => p.type === 'month')?.value, 10);
            const year = parseInt(parts.find(p => p.type === 'year')?.value, 10);
            if (!day || !month || !year) return null;
            return {
                day,
                month,
                year,
                monthNameUr: HIJRI_MONTHS_UR[month - 1] || '',
                monthNameEn: HIJRI_MONTHS_EN[month - 1] || '',
                formattedUr: `${toArabicDigits(day)} ${HIJRI_MONTHS_UR[month - 1] || ''} ${toArabicDigits(year)}ھ`,
                shortUr: `${toArabicDigits(day)} ${HIJRI_MONTHS_UR[month - 1] || ''}`,
                shortEn: `${day} ${HIJRI_MONTHS_EN[month - 1] || ''}`
            };
        } catch (err) {
            return null;
        }
    }

    function getHijriYearLookup() {
        const today = new Date();
        const key = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}_${getActiveHijriOffset()}`;
        if (cachedHijriLookup && cachedHijriLookupKey === key) {
            return cachedHijriLookup;
        }
        const map = {};
        const monthMaxDay = {};
        const base = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0, 0);
        for (let i = 0; i < 366; i++) {
            const d = new Date(base.getTime());
            d.setDate(base.getDate() + i);
            const hp = getHijriPartsForGregorianDate(d, true);
            if (!hp) continue;
            const mk = `${hp.month}-${hp.day}`;
            if (!map[mk]) {
                map[mk] = { date: d, daysAway: i, hijri: hp };
            }
            if (!monthMaxDay[hp.month] || hp.day > monthMaxDay[hp.month].day) {
                monthMaxDay[hp.month] = { day: hp.day, date: d, daysAway: i, hijri: hp };
            }
        }
        cachedHijriLookup = { map, monthMaxDay };
        cachedHijriLookupKey = key;
        return cachedHijriLookup;
    }

    function findNextGregorianForHijri(hijriMonth, hijriDay) {
        const lookup = getHijriYearLookup();
        const exact = lookup.map[`${hijriMonth}-${hijriDay}`];
        if (exact) return exact;
        if (hijriDay >= 30 && lookup.map[`${hijriMonth}-29`]) {
            return lookup.map[`${hijriMonth}-29`];
        }
        if (lookup.monthMaxDay[hijriMonth]) {
            return lookup.monthMaxDay[hijriMonth];
        }
        return null;
    }

    // Smart Hijri Date Parser for Shajara Tables (Arabic, Urdu & English formats)
    const HIJRI_MONTH_PATTERNS = [
        { month: 4, re: /ربیع\s*(?:ال)?ثانی|ربیع\s*(?:ال)?اخر|rabi\s*[-]?\s*(?:us|al|ul)?\s*[-]?\s*(?:sani|thani|akhir|2)/i },
        { month: 3, re: /ربیع\s*(?:ال)?اول|rabi\s*[-]?\s*(?:ul|al)?\s*[-]?\s*(?:awwal|awal|1)/i },
        { month: 6, re: /جمادی\s*(?:ال)?ثانی|جمادی\s*(?:ال)?اخر|جماد\s*(?:ال)?ثانی|جماد\s*(?:ال)?اخر|jumada\s*[-]?\s*(?:us|al|ul)?\s*[-]?\s*(?:sani|thani|akhir|2)|jamadi\s*[-]?\s*(?:us|al|ul)?\s*[-]?\s*(?:sani|thani|akhir|2)/i },
        { month: 5, re: /جمادی\s*(?:ال)?اول|جماد\s*(?:ال)?اول|jumada\s*[-]?\s*(?:ul|al)?\s*[-]?\s*(?:awwal|awal|ula|1)|jamadi\s*[-]?\s*(?:ul|al)?\s*[-]?\s*(?:awwal|awal|ula|1)/i },
        { month: 12, re: /ذو\s*الحج|ذوالحج|ذی\s*الحج|ذیالحج|ذیحج|dhul\s*[-]?\s*hijj?a?h?|zil\s*[-]?\s*hijj?a?h?|zul\s*[-]?\s*hijj?a?h?|zilhaj/i },
        { month: 11, re: /ذو\s*القعد|ذوالقعد|ذی\s*القعد|ذیالقعد|ذیقعد|ذی\s*قعد|dhul\s*[-]?\s*qad?a?h?|zil\s*[-]?\s*qad?a?h?|zul\s*[-]?\s*qad?a?h?|zilqad/i },
        { month: 1, re: /محرم|muharram|moharram/i },
        { month: 2, re: /صفر|safar/i },
        { month: 7, re: /رجب|rajab/i },
        { month: 8, re: /شعبان|sha'?a?ban/i },
        { month: 9, re: /رمضان|ramad?z?an/i },
        { month: 10, re: /شوال|shaww?al/i }
    ];

    function parseHijriDateFromText(rawText, allowNumericSlash) {
        if (!rawText) return null;
        const norm = normalizeArabicText(rawText);
        if (!norm) return null;

        let matchedMonth = 0;
        let monthMatchIndex = -1;
        for (let i = 0; i < HIJRI_MONTH_PATTERNS.length; i++) {
            const m = norm.match(HIJRI_MONTH_PATTERNS[i].re);
            if (m) {
                matchedMonth = HIJRI_MONTH_PATTERNS[i].month;
                monthMatchIndex = m.index;
                break;
            }
        }

        let day = 0;
        let yearStr = '';

        if (matchedMonth) {
            const beforeMonth = norm.slice(0, monthMatchIndex);
            const afterMonth = norm.slice(monthMatchIndex);
            const numsBefore = (beforeMonth.match(/\d+/g) || []).map(Number);
            const numsAll = (norm.match(/\d+/g) || []).map(Number);

            for (let i = numsBefore.length - 1; i >= 0; i--) {
                if (numsBefore[i] >= 1 && numsBefore[i] <= 30) {
                    day = numsBefore[i];
                    break;
                }
            }
            if (!day) {
                for (let i = 0; i < numsAll.length; i++) {
                    if (numsAll[i] >= 1 && numsAll[i] <= 30) {
                        day = numsAll[i];
                        break;
                    }
                }
            }
            if (!day) {
                if (/یکم|پہلی|اول/.test(beforeMonth)) day = 1;
                else if (/اخر|سلخ/.test(beforeMonth)) day = 29;
            }

            const yearMatch = afterMonth.match(/\b(\d{2,4})\s*(?:ھ|ہ|ہجری|ah)?/i) || norm.match(/\b(\d{3,4})\b/);
            if (yearMatch) {
                const yrNum = parseInt(yearMatch[1], 10);
                if (yrNum >= 32 && yrNum <= 1600) {
                    yearStr = `${toArabicDigits(yrNum)}ھ`;
                }
            }
        } else if (allowNumericSlash) {
            const slash = norm.match(/\b(\d{1,2})\s*[\/\-]\s*(\d{1,2})(?:\s*[\/\-]\s*(\d{2,4}))?\b/);
            if (slash) {
                const dNum = parseInt(slash[1], 10);
                const mNum = parseInt(slash[2], 10);
                if (dNum >= 1 && dNum <= 30 && mNum >= 1 && mNum <= 12) {
                    day = dNum;
                    matchedMonth = mNum;
                    if (slash[3]) {
                        const yNum = parseInt(slash[3], 10);
                        if (yNum >= 32 && yNum <= 1600) yearStr = `${toArabicDigits(yNum)}ھ`;
                    }
                }
            }
        }

        if (matchedMonth >= 1 && matchedMonth <= 12 && day >= 1 && day <= 30) {
            return { hijriDay: day, hijriMonth: matchedMonth, wisaalYear: yearStr };
        }
        return null;
    }

    function detectSilsilaInfo(tableEl) {
        const sec = tableEl.closest('.shijra-section, section, [id]');
        const secId = sec ? (sec.id || '').toLowerCase() : '';
        if (secId.includes('qadriya')) return { label: 'Silsila e Qadriya', labelUr: 'سلسلہ قادریہ', hash: '#qadriya' };
        if (secId.includes('chisht')) return { label: 'Silsila e Chishtiya', labelUr: 'سلسلہ چشتیہ', hash: '#chishtiyya' };
        if (secId.includes('akbar')) return { label: 'Silsila e Akbariya', labelUr: 'سلسلہ اکبریہ', hash: '#akbariya' };
        if (secId.includes('asnaad') || secId.includes('asnad')) return { label: 'Asnad e Dalail-ul-Khairat', labelUr: 'اسنادِ دلائل الخیرات', hash: '#asnaad' };

        if (sec) {
            const heading = sec.querySelector('.section-heading, .title-main, h1, h2');
            if (heading) {
                const txt = (heading.textContent || '').replace(/\s+/g, ' ').trim();
                if (txt) {
                    return {
                        label: txt.slice(0, 42),
                        labelUr: mapSilsilaToUrdu(txt),
                        hash: secId ? ('#' + secId) : '#qadriya'
                    };
                }
            }
        }
        return { label: 'Shajara e Alaviyya', labelUr: 'شجرہ علویہ', hash: '#qadriya' };
    }

    function extractUrsFromDocument(doc) {
        if (!doc) return [];
        const tables = doc.querySelectorAll('.shijra-table');
        if (!tables.length) return [];

        const found = [];
        tables.forEach((tbl, tIdx) => {
            const silsilaInfo = detectSilsilaInfo(tbl);
            const rows = Array.from(tbl.querySelectorAll('tr'));
            if (rows.length < 2) return;

            let numIdx = 0;
            let nameIdx = 1;
            let dateIdx = 2;
            const headerCells = Array.from(rows[0].querySelectorAll('th'));
            if (headerCells.length >= 2) {
                headerCells.forEach((th, idx) => {
                    const hNorm = normalizeArabicText(th.textContent || '').toLowerCase();
                    if (/نمبر|شمار|عدد|^no\.?$|^sr\.?$|^#$|number/.test(hNorm)) numIdx = idx;
                    else if (/نام|بزرگ|مشائخ|اسم|name|shaykh/.test(hNorm)) nameIdx = idx;
                    else if (/عرس|وصال|تاریخ|وفات|urs|wisaal|date/.test(hNorm)) dateIdx = idx;
                });
            }

            let dataRowSeq = 0;
            rows.forEach((tr, rIdx) => {
                const tds = Array.from(tr.querySelectorAll('td'));
                if (tds.length < 2) return;
                dataRowSeq++;

                // Extract Silsila serial number from Column 1 (or detected numIdx)
                let serialNum = '';
                if (tds[numIdx]) {
                    const numAscii = toAsciiDigits(tds[numIdx].textContent || '').trim();
                    const mNum = numAscii.match(/\d+/);
                    if (mNum) serialNum = mNum[0];
                }
                if (!serialNum) serialNum = String(dataRowSeq);
                const serialNumAr = toArabicDigits(serialNum);

                let parsedDate = null;
                let detectedDateCol = -1;

                if (tds[dateIdx]) {
                    parsedDate = parseHijriDateFromText(tds[dateIdx].textContent || '', true);
                    if (parsedDate) detectedDateCol = dateIdx;
                }
                if (!parsedDate) {
                    for (let c = 0; c < tds.length; c++) {
                        const tryParsed = parseHijriDateFromText(tds[c].textContent || '', false);
                        if (tryParsed) {
                            parsedDate = tryParsed;
                            detectedDateCol = c;
                            break;
                        }
                    }
                }
                if (!parsedDate) return;

                let nameText = '';
                if (tds[nameIdx] && nameIdx !== detectedDateCol) {
                    nameText = (tds[nameIdx].textContent || '').replace(/\s+/g, ' ').trim();
                }
                if (!nameText) {
                    let best = '';
                    tds.forEach((td, c) => {
                        if (c === detectedDateCol || c === numIdx) return;
                        const txt = (td.textContent || '').replace(/\s+/g, ' ').trim();
                        if (txt.length > best.length) best = txt;
                    });
                    nameText = best;
                }
                if (!nameText || nameText.length < 2) return;

                let yearStr = parsedDate.wisaalYear || '';
                let locationStr = '';
                tds.forEach((td, c) => {
                    if (c === detectedDateCol || c === nameIdx || c === numIdx) return;
                    const txt = (td.textContent || '').replace(/\s+/g, ' ').trim();
                    if (!txt) return;
                    const ascii = toAsciiDigits(txt);
                    if (!yearStr && /^\d{2,4}\s*(?:ھ|ہ|ہجری|ah)?$/i.test(ascii)) {
                        const yNum = parseInt(ascii, 10);
                        if (yNum >= 32 && yNum <= 1600) yearStr = `${toArabicDigits(yNum)}ھ`;
                    } else if (!locationStr && txt.length >= 2) {
                        locationStr = txt;
                    }
                });

                found.push({
                    id: `shajara-urs-${tIdx}-${rIdx}`,
                    type: 'urs',
                    source: 'shajara',
                    title: `Urs: ${cleanMashaykhNameForNotification(nameText)}`,
                    titleUr: nameText,
                    hijriDay: parsedDate.hijriDay,
                    hijriMonth: parsedDate.hijriMonth,
                    silsila: silsilaInfo.label,
                    silsilaUr: silsilaInfo.labelUr,
                    silsilaNumber: serialNum,
                    silsilaNumberAr: serialNumAr,
                    silsilaRefs: [{
                        label: silsilaInfo.label,
                        labelUr: silsilaInfo.labelUr,
                        number: serialNum,
                        numberAr: serialNumAr,
                        hash: silsilaInfo.hash
                    }],
                    wisaalYear: yearStr,
                    location: locationStr,
                    description: `${silsilaInfo.labelUr} — نمبر: ${serialNumAr}`,
                    shajaraHash: silsilaInfo.hash
                });
            });
        });

        return found;
    }

    function loadCachedShajaraUrs() {
        try {
            const raw = localStorage.getItem(URS_CACHE_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return parsed;
        } catch (e) {}
        return [];
    }

    function saveCachedShajaraUrs(list) {
        try {
            if (Array.isArray(list) && list.length > 0) {
                localStorage.setItem(URS_CACHE_KEY, JSON.stringify(list));
            }
        } catch (e) {}
    }

    function ensureShajaraUrsLoaded(onUpdate) {
        const cfg = getActiveConfig();
        if (!cfg.autoLoadShajaraUrs) return;

        if (document.querySelectorAll('.shijra-table').length > 0) {
            const extracted = extractUrsFromDocument(document);
            if (extracted.length > 0) {
                shajaraUrsExtracted = extracted;
                saveCachedShajaraUrs(extracted);
            }
            if (typeof onUpdate === 'function') onUpdate();
            return;
        }

        if (!shajaraUrsExtracted.length) {
            shajaraUrsExtracted = loadCachedShajaraUrs();
        }

        if (shajaraFetchStarted) return;
        shajaraFetchStarted = true;

        const paths = ['./Shajara_e_Alaviyya.html', '../Shajara_e_Alaviyya.html'];
        function tryFetch(idx) {
            if (idx >= paths.length) return;
            fetch(paths[idx])
                .then((res) => {
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    return res.text();
                })
                .then((htmlText) => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlText, 'text/html');
                    const extracted = extractUrsFromDocument(doc);
                    if (extracted.length > 0) {
                        shajaraUrsExtracted = extracted;
                        saveCachedShajaraUrs(extracted);
                        if (typeof onUpdate === 'function') onUpdate();
                    }
                })
                .catch(() => tryFetch(idx + 1));
        }
        tryFetch(0);
    }

    function getAllHijriUrsEvents() {
        const cfg = getActiveConfig();
        const combined = [];
        const seenMap = {};

        function addItem(item) {
            if (!item || !item.hijriMonth || !item.hijriDay) return;
            const cleanedForKey = cleanMashaykhNameForNotification(item.titleUr || item.title || '');
            const normName = normalizeArabicText(cleanedForKey)
                .replace(/عرس|غوث اعظم|مبارک|حضرت|الشیخ|شیخ|خواجہ|سیدنا|سید|شاہ|مولانا|امام|خلیفہ رسول اللہ|رضی اللہ عنہ|رحمۃ اللہ علیہ|قدس سرہ/g, '')
                .replace(/\s+/g, '')
                .slice(0, 22);
            const dedupeKey = `${item.hijriMonth}-${item.hijriDay}-${normName || normalizeArabicText(item.title || '').slice(0, 22)}`;

            const itemSilsilaUr = item.silsilaUr || mapSilsilaToUrdu(item.silsila);
            const itemRefs = Array.isArray(item.silsilaRefs) && item.silsilaRefs.length
                ? item.silsilaRefs.map(r => Object.assign({}, r))
                : [{
                    label: item.silsila || 'Shajara e Alaviyya',
                    labelUr: itemSilsilaUr,
                    number: item.silsilaNumber ? String(item.silsilaNumber) : '',
                    numberAr: item.silsilaNumber ? toArabicDigits(item.silsilaNumber) : '',
                    hash: item.shajaraHash || '#qadriya'
                }];

            if (seenMap[dedupeKey]) {
                const existing = seenMap[dedupeKey];
                itemRefs.forEach((nr) => {
                    const alreadyHas = existing.silsilaRefs.some((er) => er.labelUr === nr.labelUr);
                    if (!alreadyHas) {
                        existing.silsilaRefs.push(nr);
                    } else if (nr.numberAr) {
                        const matchRef = existing.silsilaRefs.find((er) => er.labelUr === nr.labelUr);
                        if (matchRef && !matchRef.numberAr) {
                            matchRef.number = nr.number;
                            matchRef.numberAr = nr.numberAr;
                        }
                    }
                });
                if (item.silsila && existing.silsila && !existing.silsila.includes(item.silsila)) {
                    existing.silsila += ` • ${item.silsila}`;
                }
                if (!existing.wisaalYear && item.wisaalYear) existing.wisaalYear = item.wisaalYear;
                if (!existing.location && item.location) existing.location = item.location;
                return;
            }
            const clone = Object.assign({}, item, {
                silsilaUr: itemSilsilaUr,
                silsilaRefs: itemRefs
            });
            seenMap[dedupeKey] = clone;
            combined.push(clone);
        }

        if (cfg.autoLoadShajaraUrs && shajaraUrsExtracted.length) {
            shajaraUrsExtracted.forEach(addItem);
        }
        if (Array.isArray(cfg.hijriEvents)) {
            cfg.hijriEvents.forEach(addItem);
        }

        return combined;
    }

    // ==========================================
    // INDIVIDUAL URS & YOUM-E-WISAAL NOTIFICATION ENGINE (CAPACITOR NATIVE + WEB FALLBACK)
    // ==========================================
    function getLocalNotificationsPlugin() {
        try {
            return (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications) || null;
        } catch (e) {
            return null;
        }
    }

    function isUrsNotifEnabled() {
        return localStorage.getItem(URS_NOTIF_ENABLED_KEY) !== 'false';
    }

    function getUrsNotifTimeMode() {
        const val = localStorage.getItem(URS_NOTIF_TIME_KEY);
        if (val === 'maghrib' || val === 'both' || val === 'morning') return val;
        return 'morning';
    }

    function updateNotifStatusUI(msg) {
        lastNotifStatusText = msg || '';
        const el = document.getElementById('ursNotifStatusText');
        if (el) el.textContent = lastNotifStatusText;
    }

    function bindNotificationTapListener() {
        if (notifListenerBound) return;
        const LN = getLocalNotificationsPlugin();
        if (!LN || typeof LN.addListener !== 'function') return;
        notifListenerBound = true;

        try {
            LN.addListener('localNotificationActionPerformed', (action) => {
                const extra = action && action.notification && action.notification.extra;
                if (extra && extra.shajaraHash) {
                    const dest = getShajaraLink(extra.shajaraHash);
                    if (dest.startsWith('#')) {
                        if (window.location.hash !== dest) {
                            history.pushState(null, null, dest);
                        }
                        if (typeof window.showActiveSection === 'function') {
                            window.showActiveSection();
                        }
                    } else {
                        window.location.href = dest;
                    }
                }
            });
        } catch (e) {}
    }

    async function ensureNotificationChannel(LN) {
        if (!LN || typeof LN.createChannel !== 'function') return;
        try {
            await LN.createChannel({
                id: URS_NOTIF_CHANNEL_ID,
                name: 'Urs-e-Mubarak & Youm-e-Wisaal',
                description: 'Shajara Mashaykheen Urs aur Fatiha ki yaad-dihani',
                importance: 4,
                visibility: 1,
                vibration: true
            });
        } catch (e) {}
    }

    async function cancelExistingUrsNotifications(LN) {
        if (!LN || typeof LN.getPending !== 'function' || typeof LN.cancel !== 'function') return;
        try {
            const pending = await LN.getPending();
            const list = (pending && Array.isArray(pending.notifications)) ? pending.notifications : [];
            const toCancel = list
                .filter((n) => n && typeof n.id === 'number' && n.id >= URS_NOTIF_ID_MORNING_BASE && n.id <= URS_NOTIF_ID_MAX)
                .map((n) => ({ id: n.id }));
            if (toCancel.length) {
                await LN.cancel({ notifications: toCancel });
            }
        } catch (e) {}
    }

    function fireWebTodayUrsNotificationsIfNeeded(ursList) {
        if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
        const today = new Date();
        const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        if (localStorage.getItem('awraad_web_urs_notified_day') === todayKey) return;

        const todayHijri = getHijriPartsForGregorianDate(today, true);
        const todaysUrs = getUrsEventsForHijriDate(ursList, todayHijri);
        if (!todaysUrs.length) return;

        localStorage.setItem('awraad_web_urs_notified_day', todayKey);
        todaysUrs.forEach((u, idx) => {
            const payload = buildUrsNotificationPayload(u);
            setTimeout(() => {
                try {
                    const n = new Notification(payload.title, {
                        body: payload.body,
                        icon: './icon-192.png',
                        tag: `awraad-urs-${u.hijriMonth}-${u.hijriDay}-${idx}`
                    });
                    n.onclick = () => {
                        window.focus();
                        window.location.href = getShajaraLink(u.shajaraHash);
                    };
                } catch (e) {}
            }, idx * 800);
        });
    }

    async function scheduleAllUrsNotifications(interactive) {
        const enabled = isUrsNotifEnabled();
        const timeMode = getUrsNotifTimeMode();
        const LN = getLocalNotificationsPlugin();
        const ursList = getAllHijriUrsEvents();

        if (!enabled) {
            if (LN) await cancelExistingUrsNotifications(LN);
            lastNotifScheduleKey = '';
            updateNotifStatusUI('🔕 Urs Notifications OFF hain.');
            return;
        }

        if (!ursList.length) {
            updateNotifStatusUI('⏳ Shajara Urs data sync ho raha hai...');
            return;
        }

        // Native Android Capacitor LocalNotifications
        if (LN) {
            bindNotificationTapListener();
            try {
                let perm = await LN.checkPermissions();
                if (!perm || perm.display !== 'granted') {
                    if (interactive) {
                        perm = await LN.requestPermissions();
                    } else {
                        updateNotifStatusUI('🔔 Notifications chalu karne ke liye toggle ya Test par tap karein.');
                        return;
                    }
                }
                if (!perm || perm.display !== 'granted') {
                    updateNotifStatusUI('⚠️ Notification permission deny hai — Phone Settings se allow karein.');
                    return;
                }

                const now = new Date();
                const schedKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}_${getActiveHijriOffset()}_${timeMode}_${ursList.length}`;
                if (!interactive && lastNotifScheduleKey === schedKey) return;

                await ensureNotificationChannel(LN);
                await cancelExistingUrsNotifications(LN);

                // Collect upcoming Mashaykheen Urs within next 60 days (each Mashaykh gets separate individual notification!)
                const upcoming = [];
                ursList.forEach((u) => {
                    const match = findNextGregorianForHijri(u.hijriMonth, u.hijriDay);
                    if (match && match.daysAway <= 60) {
                        upcoming.push({ u, match });
                    }
                });
                upcoming.sort((a, b) => a.match.daysAway - b.match.daysAway);

                const notifications = [];
                const sameDayCounterMorning = {};
                const sameDayCounterMaghrib = {};
                let morningSeq = 0;
                let maghribSeq = 0;

                upcoming.forEach(({ u, match }) => {
                    if (notifications.length >= 60) return;
                    const payload = buildUrsNotificationPayload(u);
                    const gDate = match.date;
                    const dayKey = `${gDate.getFullYear()}-${gDate.getMonth()}-${gDate.getDate()}`;

                    // 1. Morning 7:00 AM notification on the Urs day
                    if (timeMode === 'morning' || timeMode === 'both') {
                        const offsetSec = (sameDayCounterMorning[dayKey] || 0) * 3;
                        sameDayCounterMorning[dayKey] = (sameDayCounterMorning[dayKey] || 0) + 1;
                        const fireAt = new Date(gDate.getFullYear(), gDate.getMonth(), gDate.getDate(), 7, 0, offsetSec);
                        if (fireAt.getTime() > Date.now() + 5000) {
                            notifications.push({
                                id: URS_NOTIF_ID_MORNING_BASE + (morningSeq++),
                                title: payload.title,
                                body: payload.body,
                                largeBody: payload.largeBody,
                                summaryText: payload.summaryText,
                                channelId: URS_NOTIF_CHANNEL_ID,
                                schedule: { at: fireAt, allowWhileIdle: true },
                                extra: { type: 'urs', shajaraHash: u.shajaraHash || '#qadriya' }
                            });
                        }
                    }

                    // 2. Maghrib (Shab-e-Urs 6:30 PM on previous Gregorian evening when new Hijri day begins)
                    if (timeMode === 'maghrib' || timeMode === 'both') {
                        const prevEve = new Date(gDate.getFullYear(), gDate.getMonth(), gDate.getDate() - 1, 18, 30, 0);
                        const offsetSec = (sameDayCounterMaghrib[dayKey] || 0) * 3;
                        sameDayCounterMaghrib[dayKey] = (sameDayCounterMaghrib[dayKey] || 0) + 1;
                        prevEve.setSeconds(offsetSec);
                        if (prevEve.getTime() > Date.now() + 5000) {
                            notifications.push({
                                id: URS_NOTIF_ID_MAGHRIB_BASE + (maghribSeq++),
                                title: payload.title,
                                body: payload.body,
                                largeBody: payload.largeBody,
                                summaryText: payload.summaryText,
                                channelId: URS_NOTIF_CHANNEL_ID,
                                schedule: { at: prevEve, allowWhileIdle: true },
                                extra: { type: 'urs', shajaraHash: u.shajaraHash || '#qadriya' }
                            });
                        }
                    }
                });

                if (notifications.length) {
                    try {
                        await LN.schedule({ notifications });
                    } catch (exactErr) {
                        // Android 14 fallback if exact alarm permission is not manually enabled
                        const fallbackList = notifications.map((n) => Object.assign({}, n, {
                            schedule: { at: n.schedule.at }
                        }));
                        await LN.schedule({ notifications: fallbackList });
                    }
                }

                lastNotifScheduleKey = schedKey;
                const timeText = timeMode === 'both' ? 'Maghrib & Subah 7 AM' : (timeMode === 'maghrib' ? 'Maghrib 6:30 PM' : 'Subah 7:00 AM');
                updateNotifStatusUI(`✅ ${notifications.length} alag-alag Mashaykh Urs alerts scheduled (${timeText})`);
            } catch (err) {
                updateNotifStatusUI('⚠️ Notification schedule error — app restart karke try karein.');
            }
            return;
        }

        // Web / PWA fallback
        if (typeof Notification !== 'undefined') {
            if (Notification.permission === 'default' && interactive) {
                try { await Notification.requestPermission(); } catch (e) {}
            }
            if (Notification.permission === 'granted') {
                fireWebTodayUrsNotificationsIfNeeded(ursList);
                updateNotifStatusUI('✅ Web/PWA Alerts ON (Full background alerts Android APK mein chalti hain)');
            } else if (Notification.permission === 'denied') {
                updateNotifStatusUI('⚠️ Browser notifications blocked hain. Test dabakar preview dekh sakte hain.');
            } else {
                updateNotifStatusUI('🔔 Alerts active karne ke liye Test ya Toggle par tap karein.');
            }
        } else {
            updateNotifStatusUI('ℹ️ Full background Urs alerts Android APK mein automatically chalte hain.');
        }
    }

    async function sendTestUrsNotification() {
        const ursList = getAllHijriUrsEvents();
        let sampleUrs = null;
        if (ursList.length) {
            const sorted = ursList
                .map((u) => ({ u, m: findNextGregorianForHijri(u.hijriMonth, u.hijriDay) }))
                .filter((x) => x.m)
                .sort((a, b) => a.m.daysAway - b.m.daysAway);
            sampleUrs = sorted.length ? sorted[0].u : ursList[0];
        } else {
            sampleUrs = FALLBACK_CONFIG.hijriEvents[0];
        }

        const payload = buildUrsNotificationPayload(sampleUrs);

        // Show visual Urdu preview box inside modal so user immediately sees exact Option 1 formatting
        const previewSlot = document.getElementById('ursNotifPreviewSlot');
        if (previewSlot) {
            previewSlot.innerHTML = `
                <div class="urs-notif-preview-toast">
                    <div class="urs-notif-preview-title">${escapeHtml(payload.title)}</div>
                    <div><strong>${escapeHtml(payload.line1)}</strong></div>
                    ${payload.line2 ? `<div>${escapeHtml(payload.line2)}</div>` : ''}
                    <div>${escapeHtml(payload.line3)}</div>
                </div>
            `;
        }

        const LN = getLocalNotificationsPlugin();
        if (LN) {
            try {
                let perm = await LN.checkPermissions();
                if (!perm || perm.display !== 'granted') {
                    perm = await LN.requestPermissions();
                }
                if (perm && perm.display === 'granted') {
                    await ensureNotificationChannel(LN);
                    const testObj = {
                        id: 69990,
                        title: payload.title,
                        body: payload.body,
                        largeBody: payload.largeBody,
                        summaryText: payload.summaryText,
                        channelId: URS_NOTIF_CHANNEL_ID,
                        schedule: { at: new Date(Date.now() + 2000), allowWhileIdle: true },
                        extra: { type: 'urs', shajaraHash: sampleUrs.shajaraHash || '#qadriya' }
                    };
                    try {
                        await LN.schedule({ notifications: [testObj] });
                    } catch (e2) {
                        testObj.schedule = { at: new Date(Date.now() + 2000) };
                        await LN.schedule({ notifications: [testObj] });
                    }
                    updateNotifStatusUI('🔔 Test notification 2 second mein notification bar par aayegi!');
                    scheduleAllUrsNotifications(true);
                    return;
                } else {
                    updateNotifStatusUI('⚠️ Phone notification permission allow karein.');
                    return;
                }
            } catch (err) {}
        }

        if (typeof Notification !== 'undefined') {
            try {
                let perm = Notification.permission;
                if (perm === 'default') perm = await Notification.requestPermission();
                if (perm === 'granted') {
                    new Notification(payload.title, {
                        body: payload.body,
                        icon: './icon-192.png'
                    });
                    updateNotifStatusUI('🔔 Test notification bhej di gayi hai!');
                    return;
                }
            } catch (e) {}
        }
        updateNotifStatusUI('📋 Upar exact Urdu notification preview show kar diya gaya hai.');
    }

    window.rescheduleUrsNotifications = scheduleAllUrsNotifications;

    function isPlaceholderMeetUrl(url) {
        if (!url || typeof url !== 'string') return true;
        const clean = url.trim().toLowerCase();
        return !clean || clean.includes('your-meeting-code') || !clean.startsWith('http');
    }

    function format12Hour(hour, minute) {
        const h24 = parseInt(hour, 10) || 0;
        const m = parseInt(minute, 10) || 0;
        const period = h24 >= 12 ? 'PM' : 'AM';
        const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
        return `${h12}:${String(m).padStart(2, '0')} ${period}`;
    }

    function formatGCalUtcDate(dateObj) {
        return dateObj.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    }

    function formatGCalAllDay(dateObj) {
        const y = dateObj.getFullYear();
        const m = String(dateObj.getMonth() + 1).padStart(2, '0');
        const d = String(dateObj.getDate()).padStart(2, '0');
        return `${y}${m}${d}`;
    }

    function parseAnchorNoon(ymd) {
        if (!ymd || !/^\d{4}-\d{2}-\d{2}$/.test(ymd)) return null;
        const p = ymd.split('-').map(Number);
        return new Date(p[0], p[1] - 1, p[2], 12, 0, 0, 0);
    }

    function getNextOccurrence(item, nowRef) {
        const now = nowRef || new Date();
        const durationMs = (parseInt(item.durationMinutes, 10) || 60) * 60000;

        if (item.isRecurringWeekly && typeof item.dayOfWeek === 'number') {
            const targetDay = ((item.dayOfWeek % 7) + 7) % 7;
            const startH = parseInt(item.startHour, 10) || 0;
            const startM = parseInt(item.startMinute, 10) || 0;
            const intervalWeeks = Math.max(1, parseInt(item.intervalWeeks, 10) || 1);

            const candidate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startH, startM, 0, 0);
            let diffDays = targetDay - candidate.getDay();
            if (diffDays < 0) diffDays += 7;
            candidate.setDate(candidate.getDate() + diffDays);

            if (now.getTime() > candidate.getTime() + durationMs) {
                candidate.setDate(candidate.getDate() + 7);
            }

            if (intervalWeeks > 1 && item.anchorDate) {
                const anchorNoon = parseAnchorNoon(item.anchorDate);
                if (anchorNoon) {
                    const candNoon = new Date(candidate.getFullYear(), candidate.getMonth(), candidate.getDate(), 12, 0, 0, 0);
                    let diffWeeks = Math.round((candNoon.getTime() - anchorNoon.getTime()) / (7 * 86400000));
                    let guard = 0;
                    while (((diffWeeks % intervalWeeks) + intervalWeeks) % intervalWeeks !== 0 && guard < 12) {
                        candidate.setDate(candidate.getDate() + 7);
                        diffWeeks += 1;
                        guard++;
                    }
                }
            }

            const end = new Date(candidate.getTime() + durationMs);
            const isLive = now.getTime() >= candidate.getTime() && now.getTime() <= end.getTime();
            return { start: candidate, end, isLive, isPast: false };
        }

        let start = null;
        if (item.customStartISO) {
            const parsed = new Date(item.customStartISO);
            if (!isNaN(parsed.getTime())) start = parsed;
        } else if (item.date && /^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
            const parts = item.date.split('-').map(Number);
            start = new Date(parts[0], parts[1] - 1, parts[2], parseInt(item.startHour, 10) || 0, parseInt(item.startMinute, 10) || 0, 0, 0);
        }

        if (!start) {
            start = new Date(now.getTime() + 3600000);
        }
        const end = new Date(start.getTime() + durationMs);
        const isLive = now.getTime() >= start.getTime() && now.getTime() <= end.getTime();
        const isPast = now.getTime() > end.getTime();
        return { start, end, isLive, isPast };
    }

    function buildGoogleCalendarUrl(item, fallbackMeetUrl) {
        const occ = getNextOccurrence(item, new Date());
        const meetLink = item.meetUrl || fallbackMeetUrl || '';
        const detailsParts = [];
        if (item.host) detailsParts.push(item.host);
        if (item.sessionMode) detailsParts.push(item.sessionMode);
        if (item.customTimeLabel) detailsParts.push('Time: ' + item.customTimeLabel);
        if (item.description) detailsParts.push(item.description);
        if (meetLink && !isPlaceholderMeetUrl(meetLink)) {
            detailsParts.push('Google Meet Link: ' + meetLink);
        }

        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: item.title || 'Awraad e Alaviya Nooriya Event',
            dates: `${formatGCalUtcDate(occ.start)}/${formatGCalUtcDate(occ.end)}`,
            details: detailsParts.join('\n\n'),
            location: item.location || (meetLink && !isPlaceholderMeetUrl(meetLink) ? meetLink : '')
        });

        if (item.isRecurringWeekly && typeof item.dayOfWeek === 'number') {
            const dowCode = RRULE_DAYS[((item.dayOfWeek % 7) + 7) % 7];
            const intervalWeeks = Math.max(1, parseInt(item.intervalWeeks, 10) || 1);
            params.set('recur', intervalWeeks > 1
                ? `RRULE:FREQ=WEEKLY;INTERVAL=${intervalWeeks};BYDAY=${dowCode}`
                : `RRULE:FREQ=WEEKLY;BYDAY=${dowCode}`);
        }

        return 'https://calendar.google.com/calendar/render?' + params.toString();
    }

    function buildUrsGoogleCalendarUrl(ursItem, gregDateObj) {
        const startDay = new Date(gregDateObj.getFullYear(), gregDateObj.getMonth(), gregDateObj.getDate());
        const nextDay = new Date(startDay.getTime());
        nextDay.setDate(startDay.getDate() + 1);

        const payload = buildUrsNotificationPayload(ursItem);
        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: payload.title,
            dates: `${formatGCalAllDay(startDay)}/${formatGCalAllDay(nextDay)}`,
            details: payload.body,
            location: ursItem.location || 'Awraad e Alaviya Nooriya'
        });

        return 'https://calendar.google.com/calendar/render?' + params.toString();
    }

    function getRegularEventsForDay(events, year, month, day) {
        const dObj = new Date(year, month, day, 12, 0, 0, 0);
        const dow = dObj.getDay();
        const ymd = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.filter((ev) => {
            if (ev.isRecurringWeekly && typeof ev.dayOfWeek === 'number') {
                if (((ev.dayOfWeek % 7) + 7) % 7 !== dow) return false;
                const intervalWeeks = Math.max(1, parseInt(ev.intervalWeeks, 10) || 1);
                if (intervalWeeks > 1 && ev.anchorDate) {
                    const anchorNoon = parseAnchorNoon(ev.anchorDate);
                    if (anchorNoon) {
                        const diffWeeks = Math.round((dObj.getTime() - anchorNoon.getTime()) / (7 * 86400000));
                        return ((diffWeeks % intervalWeeks) + intervalWeeks) % intervalWeeks === 0;
                    }
                }
                return true;
            }
            if (ev.date === ymd) return true;
            if (ev.customStartISO) {
                const parsed = new Date(ev.customStartISO);
                if (!isNaN(parsed.getTime())) {
                    return parsed.getFullYear() === year && parsed.getMonth() === month && parsed.getDate() === day;
                }
            }
            return false;
        });
    }

    function getMonthlyHijriEventsForDate(monthlyList, hijriParts) {
        if (!hijriParts || !Array.isArray(monthlyList) || !monthlyList.length) return [];
        return monthlyList.filter((m) => parseInt(m.hijriDay, 10) === hijriParts.day);
    }

    function findNextGregorianForMonthlyHijriDay(hijriDay) {
        const targetDay = parseInt(hijriDay, 10);
        if (!targetDay || targetDay < 1 || targetDay > 30) return null;
        const lookup = getHijriYearLookup();
        let best = null;
        Object.keys(lookup.map).forEach((k) => {
            const entry = lookup.map[k];
            if (entry && entry.hijri && entry.hijri.day === targetDay) {
                if (!best || entry.daysAway < best.daysAway) {
                    best = entry;
                }
            }
        });
        return best;
    }

    function buildMonthlyHijriGCalUrl(mItem, gregDateObj, hijriParts) {
        const startDay = new Date(gregDateObj.getFullYear(), gregDateObj.getMonth(), gregDateObj.getDate());
        const nextDay = new Date(startDay.getTime());
        nextDay.setDate(startDay.getDate() + 1);
        const detailsParts = [];
        if (mItem.titleUr) detailsParts.push(mItem.titleUr);
        if (mItem.description) detailsParts.push(mItem.description);
        if (hijriParts && hijriParts.formattedUr) detailsParts.push('Hijri Date: ' + hijriParts.formattedUr);
        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: mItem.title || 'Gyaarwii ki Faatiha',
            dates: `${formatGCalAllDay(startDay)}/${formatGCalAllDay(nextDay)}`,
            details: detailsParts.join('\n\n'),
            location: mItem.location || 'Awraad e Alaviya Nooriya'
        });
        return 'https://calendar.google.com/calendar/render?' + params.toString();
    }

    function getUrsEventsForHijriDate(ursList, hijriParts) {
        if (!hijriParts) return [];
        return ursList.filter((u) => u.hijriMonth === hijriParts.month && u.hijriDay === hijriParts.day);
    }

    function getShajaraLink(hash) {
        const isShajara = window.location.pathname.toLowerCase().endsWith('shajara_e_alaviyya.html');
        const targetHash = hash || '#qadriya';
        return isShajara ? targetHash : ('./Shajara_e_Alaviyya.html' + targetHash);
    }

    function loadExternalEventsConfigOnce(onReady) {
        if (window.AWRAAD_EVENTS_CONFIG || configLoadAttempted) {
            if (onReady) onReady();
            return;
        }
        configLoadAttempted = true;
        const script = document.createElement('script');
        script.src = './events-config.js';
        script.async = true;
        script.onload = () => { if (onReady) onReady(); };
        script.onerror = () => { if (onReady) onReady(); };
        (document.head || document.body).appendChild(script);
    }

    function getLiveSessionsList(cfg) {
        if (Array.isArray(cfg.liveSessions) && cfg.liveSessions.length) {
            return cfg.liveSessions;
        }
        return cfg.liveSession ? [cfg.liveSession] : [];
    }

    function renderLiveSessionPane() {
        const pane = document.getElementById('eventsPaneLive');
        if (!pane) return;

        const cfg = getActiveConfig();
        const sessions = getLiveSessionsList(cfg);
        const now = new Date();

        const cardsHtml = sessions.map((s, idx) => {
            const occ = getNextOccurrence(s, now);
            const hijriOcc = getHijriPartsForGregorianDate(occ.start, true);
            const meetUrl = (s.meetUrl || '').trim();
            const hasMeet = !isPlaceholderMeetUrl(meetUrl);
            const intervalWeeks = Math.max(1, parseInt(s.intervalWeeks, 10) || 1);
            const dayPrefix = intervalWeeks === 2 ? 'Every Alternate' : 'Every';
            const dayName = DAY_NAMES[((s.dayOfWeek % 7) + 7) % 7];

            let timeDisplay = '';
            if (s.customTimeLabel) {
                timeDisplay = s.customTimeLabel;
            } else {
                const startStr = format12Hour(s.startHour, s.startMinute);
                const endStr = format12Hour(occ.end.getHours(), occ.end.getMinutes());
                const timePart = s.showEndTime === false
                    ? `${startStr} ${s.timezoneLabel || ''}`.trim()
                    : `${startStr} to ${endStr} ${s.timezoneLabel || ''}`.trim();
                const durationPart = s.showEndTime === false
                    ? ''
                    : ` (${parseInt(s.durationMinutes, 10) || 60} mins)`;
                timeDisplay = `${timePart}${durationPart}`;
            }

            const scheduleText = s.isRecurringWeekly
                ? `${dayPrefix} ${dayName} • ${timeDisplay}`
                : `${occ.start.toLocaleDateString()} • ${timeDisplay}`;

            const calUrl = buildGoogleCalendarUrl(
                Object.assign({ location: s.location || '' }, s),
                hasMeet ? meetUrl : ''
            );

            return `
                <div class="live-session-box" data-live-card-idx="${idx}">
                    <div class="live-status-badge ${occ.isLive ? 'live-now' : 'upcoming'}" data-live-badge="${idx}">
                        ${occ.isLive ? '🔴 LIVE NOW' : '🟢 UPCOMING SESSION'}
                    </div>
                    <div class="live-title-en">${escapeHtml(s.title)}</div>
                    ${s.titleUr ? `<div class="live-title-ur" dir="rtl">${escapeHtml(s.titleUr)}</div>` : ''}
                    <div class="live-meta-line">
                        ${s.host ? `<strong>${escapeHtml(s.host)}</strong><br>` : ''}
                        ${s.sessionMode ? `${escapeHtml(s.sessionMode)}<br>` : ''}
                        ${s.location && (!s.sessionMode || !s.sessionMode.includes(s.location)) ? `📍 ${escapeHtml(s.location)}<br>` : ''}
                        🗓️ ${escapeHtml(scheduleText)}
                        ${hijriOcc ? `<br><span class="event-hijri-pill" style="margin-top:5px;">🌙 ${escapeHtml(hijriOcc.formattedUr)}</span>` : ''}
                    </div>

                    <div class="live-countdown-grid">
                        <div class="live-cd-box"><span class="live-cd-num" data-cd="d-${idx}">00</span><span class="live-cd-lbl">Days</span></div>
                        <div class="live-cd-box"><span class="live-cd-num" data-cd="h-${idx}">00</span><span class="live-cd-lbl">Hours</span></div>
                        <div class="live-cd-box"><span class="live-cd-num" data-cd="m-${idx}">00</span><span class="live-cd-lbl">Mins</span></div>
                        <div class="live-cd-box"><span class="live-cd-num" data-cd="s-${idx}">00</span><span class="live-cd-lbl">Secs</span></div>
                    </div>

                    <div class="live-action-stack">
                        ${hasMeet ? `
                            <a class="live-join-btn" href="${escapeHtml(meetUrl)}" target="_blank" rel="noopener noreferrer">
                                ${window.AWRAAD_SVG.video}<span>Join Google Meet</span>
                            </a>
                        ` : ''}
                        <div class="live-secondary-row">
                            ${hasMeet ? `<button type="button" class="live-sec-btn" data-copy-meet="${escapeHtml(meetUrl)}">${window.AWRAAD_SVG.copySm}<span>Copy Link</span></button>` : ''}
                            <a class="live-sec-btn" href="${escapeHtml(calUrl)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.calendarSm}<span>Add Reminder</span></a>
                        </div>
                    </div>

                    ${s.description ? `<div class="live-meta-line" style="margin-top:12px; margin-bottom:0;">${escapeHtml(s.description)}</div>` : ''}
                </div>
            `;
        }).join('');

        pane.innerHTML = `<div class="events-list-stack">${cardsHtml}</div>`;

        pane.querySelectorAll('[data-copy-meet]').forEach((copyBtn) => {
            copyBtn.addEventListener('click', () => {
                const urlToCopy = copyBtn.getAttribute('data-copy-meet') || '';
                if (!urlToCopy) return;
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(urlToCopy).then(() => {
                        copyBtn.innerHTML = '<span>✓ Link Copied!</span>';
                        setTimeout(() => { copyBtn.innerHTML = window.AWRAAD_SVG.copySm + '<span>Copy Link</span>'; }, 1800);
                    }).catch(() => {
                        prompt('Google Meet Link copy karein:', urlToCopy);
                    });
                } else {
                    prompt('Google Meet Link copy karein:', urlToCopy);
                }
            });
        });

        updateCountdownNumbers();
    }

    function updateCountdownNumbers() {
        const pane = document.getElementById('eventsPaneLive');
        if (!pane) return;

        const cfg = getActiveConfig();
        const sessions = getLiveSessionsList(cfg);
        const now = new Date();

        sessions.forEach((s, idx) => {
            const dEl = pane.querySelector(`[data-cd="d-${idx}"]`);
            const hEl = pane.querySelector(`[data-cd="h-${idx}"]`);
            const mEl = pane.querySelector(`[data-cd="m-${idx}"]`);
            const sEl = pane.querySelector(`[data-cd="s-${idx}"]`);
            const badgeEl = pane.querySelector(`[data-live-badge="${idx}"]`);
            if (!dEl || !hEl || !mEl || !sEl) return;

            const occ = getNextOccurrence(s, now);

            if (badgeEl) {
                badgeEl.className = 'live-status-badge ' + (occ.isLive ? 'live-now' : 'upcoming');
                badgeEl.textContent = occ.isLive ? '🔴 LIVE NOW' : '🟢 UPCOMING SESSION';
            }

            let diffMs = occ.start.getTime() - Date.now();
            if (occ.isLive || diffMs <= 0) {
                dEl.textContent = '00';
                hEl.textContent = '00';
                mEl.textContent = '00';
                sEl.textContent = '00';
                return;
            }

            const totalSecs = Math.floor(diffMs / 1000);
            const days = Math.floor(totalSecs / 86400);
            const hours = Math.floor((totalSecs % 86400) / 3600);
            const mins = Math.floor((totalSecs % 3600) / 60);
            const secs = totalSecs % 60;

            dEl.textContent = String(days).padStart(2, '0');
            hEl.textContent = String(hours).padStart(2, '0');
            mEl.textContent = String(mins).padStart(2, '0');
            sEl.textContent = String(secs).padStart(2, '0');
        });
    }

    function renderUrsNotificationBar() {
        const slot = document.getElementById('ursNotifBarSlot');
        if (!slot) return;

        const enabled = isUrsNotifEnabled();
        const timeMode = getUrsNotifTimeMode();

        slot.innerHTML = `
            <div class="urs-notif-bar">
                <div class="urs-notif-top">
                    <span class="urs-notif-title">${window.AWRAAD_SVG.bellSm}<span>Urs &amp; Youm-e-Wisaal Alerts</span></span>
                    <label class="urs-mini-switch" title="Enable / Disable Urs Notifications">
                        <input type="checkbox" id="ursNotifToggleChk" ${enabled ? 'checked' : ''}>
                        <span class="urs-mini-slider"></span>
                    </label>
                </div>
                <div class="urs-notif-controls" style="${enabled ? '' : 'opacity:0.5; pointer-events:none;'}">
                    <select id="ursNotifTimeSelect" class="urs-notif-time-select">
                        <option value="morning" ${timeMode === 'morning' ? 'selected' : ''}>⏰ Subah 7:00 AM</option>
                        <option value="maghrib" ${timeMode === 'maghrib' ? 'selected' : ''}>🌇 Maghrib 6:30 PM (Shab-e-Urs)</option>
                        <option value="both" ${timeMode === 'both' ? 'selected' : ''}>🔔 Dono (Maghrib & Subah 7 AM)</option>
                    </select>
                    <button type="button" id="ursNotifTestBtn" class="urs-notif-test-btn">${window.AWRAAD_SVG.bellSm} Test</button>
                </div>
                <div id="ursNotifStatusText" class="urs-notif-status">${escapeHtml(lastNotifStatusText || (enabled ? 'Har Mashaykh ka alag Urdu notification (Silsila + Arabic نمبر ke saath)' : '🔕 Urs Notifications OFF hain.'))}</div>
                <div id="ursNotifPreviewSlot"></div>
            </div>
        `;

        const chk = document.getElementById('ursNotifToggleChk');
        const sel = document.getElementById('ursNotifTimeSelect');
        const testBtn = document.getElementById('ursNotifTestBtn');

        if (chk) {
            chk.addEventListener('change', () => {
                localStorage.setItem(URS_NOTIF_ENABLED_KEY, chk.checked ? 'true' : 'false');
                lastNotifScheduleKey = '';
                renderUrsNotificationBar();
                scheduleAllUrsNotifications(true);
            });
        }
        if (sel) {
            sel.addEventListener('change', () => {
                localStorage.setItem(URS_NOTIF_TIME_KEY, sel.value);
                lastNotifScheduleKey = '';
                scheduleAllUrsNotifications(true);
            });
        }
        if (testBtn) {
            testBtn.addEventListener('click', () => {
                sendTestUrsNotification();
            });
        }
    }

    function renderTodayUrsBanner() {
        const bannerSlot = document.getElementById('todayUrsBannerSlot');
        if (!bannerSlot) return;

        const todayHijri = getHijriPartsForGregorianDate(new Date(), true);
        const ursList = getAllHijriUrsEvents();
        const todaysUrs = getUrsEventsForHijriDate(ursList, todayHijri);

        if (!todaysUrs.length) {
            bannerSlot.innerHTML = '';
            return;
        }

        const namesHtml = todaysUrs.map((u) => {
            const cleanName = cleanMashaykhNameForNotification(u.titleUr || u.title);
            const silsilaUr = formatSilsilaRefsUrdu(u);
            return `<div>🌟 ${escapeHtml(cleanName)}${silsilaUr ? ` <span style="font-size:13.5px; opacity:0.88;">(${escapeHtml(silsilaUr)})</span>` : ''}</div>`;
        }).join('');
        bannerSlot.innerHTML = `
            <div class="today-urs-banner">
                <div class="today-urs-head">✨ آج عرسِ مبارک و یومِ وصال (${escapeHtml(todayHijri.shortUr)}) ✨</div>
                <div class="today-urs-names">${namesHtml}</div>
            </div>
        `;
    }

    function renderUrsCardHtml(u, matchInfo) {
        const gregDate = matchInfo ? matchInfo.date : new Date();
        const daysAway = matchInfo ? matchInfo.daysAway : 0;
        const hijriUr = `${toArabicDigits(u.hijriDay)} ${HIJRI_MONTHS_UR[u.hijriMonth - 1] || ''}`;
        const hijriEn = `${u.hijriDay} ${HIJRI_MONTHS_EN[u.hijriMonth - 1] || ''}`;
        const gregText = gregDate.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
        const badgeClass = daysAway === 0 ? 'event-item-badge today-badge' : 'event-item-badge urs-badge';
        const badgeLabel = daysAway === 0 ? 'Today!' : (daysAway === 1 ? 'Tomorrow' : `In ${daysAway}d`);
        const gcalUrl = buildUrsGoogleCalendarUrl(u, gregDate);
        const shajaraHref = getShajaraLink(u.shajaraHash);
        const silsilaUrLine = formatSilsilaRefsUrdu(u);
        const wisaalAr = u.wisaalYear ? toArabicDigits(u.wisaalYear) : '';

        return `
            <div class="event-item-card urs-card">
                <div class="event-item-top">
                    <span class="event-hijri-pill"><span>🌙 ${escapeHtml(hijriUr)}</span><span class="hijri-en-sub">(${escapeHtml(hijriEn)})</span></span>
                    <span class="${badgeClass}">${escapeHtml(badgeLabel)}</span>
                </div>
                ${u.titleUr ? `<div class="event-item-ur" dir="rtl">${escapeHtml(u.titleUr)}</div>` : ''}
                ${silsilaUrLine ? `<div class="urs-silsila-line" dir="rtl">📜 ${escapeHtml(silsilaUrLine)}</div>` : ''}
                <div class="event-item-meta">
                    ${window.AWRAAD_SVG.calendarSm} ${escapeHtml(gregText)}${wisaalAr ? ` &nbsp;•&nbsp; ${window.AWRAAD_SVG.clockSm} ${escapeHtml(wisaalAr)}` : ''}${u.location ? ` &nbsp;•&nbsp; ${window.AWRAAD_SVG.pinSm} ${escapeHtml(u.location)}` : ''}
                </div>
                <div class="event-item-actions">
                    <a class="event-mini-btn" href="${escapeHtml(gcalUrl)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.calendarSm}<span>Add to Calendar</span></a>
                    <a class="event-mini-btn shajara-btn" href="${escapeHtml(shajaraHref)}">${window.AWRAAD_SVG.scrollSm}<span>Shajara</span></a>
                </div>
            </div>
        `;
    }

    function renderUpcomingEventsView() {
        const container = document.getElementById('calSubContent');
        if (!container) return;

        const cfg = getActiveConfig();
        const now = new Date();
        const timeline = [];

        cfg.events.forEach((ev) => {
            const occ = getNextOccurrence(ev, now);
            const hijri = getHijriPartsForGregorianDate(occ.start, true);
            const diffDays = Math.max(0, Math.floor((new Date(occ.start.getFullYear(), occ.start.getMonth(), occ.start.getDate()) - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000));
            timeline.push({
                kind: 'regular',
                sortTs: occ.start.getTime(),
                daysAway: diffDays,
                ev,
                occ,
                hijri
            });
        });

        if (Array.isArray(cfg.monthlyHijriEvents)) {
            cfg.monthlyHijriEvents.forEach((mItem) => {
                const match = findNextGregorianForMonthlyHijriDay(mItem.hijriDay);
                if (!match) return;
                timeline.push({
                    kind: 'monthlyHijri',
                    sortTs: match.date.getTime(),
                    daysAway: match.daysAway,
                    mItem,
                    match
                });
            });
        }

        const ursList = getAllHijriUrsEvents();
        ursList.forEach((u) => {
            const match = findNextGregorianForHijri(u.hijriMonth, u.hijriDay);
            if (!match) return;
            timeline.push({
                kind: 'urs',
                sortTs: match.date.getTime(),
                daysAway: match.daysAway,
                urs: u,
                match
            });
        });

        timeline.sort((a, b) => a.sortTs - b.sortTs);

        if (!timeline.length) {
            container.innerHTML = `<div class="live-setup-note">Abhi koi event list mein nahi hai. <code>events-config.js</code> mein events add karein.</div>`;
            return;
        }

        const visibleItems = timeline.slice(0, 28);
        const cardsHtml = visibleItems.map((item) => {
            if (item.kind === 'urs') {
                return renderUrsCardHtml(item.urs, item.match);
            }

            if (item.kind === 'monthlyHijri') {
                const { mItem, match } = item;
                const gregText = match.date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
                const badgeLabel = match.daysAway === 0 ? 'Today!' : `Every ${mItem.hijriDay}th (Hijri)`;
                const gcalUrl = buildMonthlyHijriGCalUrl(mItem, match.date, match.hijri);
                return `
                    <div class="event-item-card">
                        <div class="event-item-top">
                            <div class="event-item-title">${escapeHtml(mItem.title)}</div>
                            <span class="event-item-badge ${match.daysAway === 0 ? 'today-badge' : ''}">${escapeHtml(badgeLabel)}</span>
                        </div>
                        ${mItem.titleUr ? `<div class="event-item-ur" dir="rtl">${escapeHtml(mItem.titleUr)}</div>` : ''}
                        <span class="event-hijri-pill">🌙 ${escapeHtml(match.hijri.formattedUr)}</span>
                        <div class="event-item-meta">
                            ${window.AWRAAD_SVG.calendarSm} Next: ${escapeHtml(gregText)}
                        </div>
                        ${mItem.description ? `<div class="event-item-desc">${escapeHtml(mItem.description)}</div>` : ''}
                        <div class="event-item-actions">
                            <a class="event-mini-btn" href="${escapeHtml(gcalUrl)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.calendarSm}<span>Add to Calendar</span></a>
                        </div>
                    </div>
                `;
            }

            const { ev, occ, hijri } = item;
            const evMeet = (ev.meetUrl || (ev.id === 'weekly-tuesday-session' ? cfg.liveSession.meetUrl : '') || '').trim();
            const hasMeet = !isPlaceholderMeetUrl(evMeet);
            const gcalUrl = buildGoogleCalendarUrl(ev, evMeet);
            const intervalWeeks = Math.max(1, parseInt(ev.intervalWeeks, 10) || 1);
            const badgeText = ev.isRecurringWeekly
                ? `${intervalWeeks === 2 ? 'Alt' : 'Every'} ${DAY_NAMES[((ev.dayOfWeek % 7) + 7) % 7].slice(0, 3)}`
                : occ.start.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
            const timeLabel = ev.customTimeLabel || format12Hour(ev.startHour, ev.startMinute);
            const dateTimeLine = ev.isRecurringWeekly
                ? `Next: ${occ.start.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })} • ${timeLabel}`
                : `${occ.start.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} • ${timeLabel}`;

            return `
                <div class="event-item-card">
                    <div class="event-item-top">
                        <div class="event-item-title">${escapeHtml(ev.title)}</div>
                        <span class="event-item-badge">${escapeHtml(badgeText)}</span>
                    </div>
                    ${ev.titleUr ? `<div class="event-item-ur" dir="rtl">${escapeHtml(ev.titleUr)}</div>` : ''}
                    ${hijri ? `<span class="event-hijri-pill">🌙 ${escapeHtml(hijri.formattedUr)}</span>` : ''}
                    <div class="event-item-meta">
                        ${window.AWRAAD_SVG.clockSm} ${escapeHtml(dateTimeLine)}${ev.location ? ` &nbsp;•&nbsp; ${window.AWRAAD_SVG.pinSm} ${escapeHtml(ev.location)}` : ''}
                    </div>
                    ${ev.description ? `<div class="event-item-desc">${escapeHtml(ev.description)}</div>` : ''}
                    <div class="event-item-actions">
                        <a class="event-mini-btn" href="${escapeHtml(gcalUrl)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.calendarSm}<span>Add to Calendar</span></a>
                        ${hasMeet ? `<a class="event-mini-btn meet-btn" href="${escapeHtml(evMeet)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.videoSm}<span>Join Meet</span></a>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        const moreHtml = timeline.length > 28
            ? `<button type="button" id="jumpToAllUrsBtn" class="cal-mode-toggle-btn" style="margin-top:10px; margin-bottom:0;">📜 View All ${ursList.length} Shajara Mashaykheen Urs →</button>`
            : '';

        container.innerHTML = `<div class="events-list-stack">${cardsHtml}</div>${moreHtml}`;

        const jumpBtn = document.getElementById('jumpToAllUrsBtn');
        if (jumpBtn) {
            jumpBtn.addEventListener('click', () => {
                currentCalSubtab = 'urs';
                renderCalendarPane();
            });
        }
    }

    function renderMonthlyCalendarView() {
        const container = document.getElementById('calSubContent');
        if (!container) return;

        const cfg = getActiveConfig();
        const embedUrl = (cfg.googleCalendarEmbedUrl || '').trim();
        const hasEmbed = embedUrl && embedUrl.startsWith('https://calendar.google.com/');

        if (hasEmbed && useGoogleEmbedMode) {
            container.innerHTML = `
                <button type="button" id="toggleCalModeBtn" class="cal-mode-toggle-btn">🌙 Switch to Hijri & Shajara Urs Calendar</button>
                <iframe class="gcal-iframe-frame" src="${escapeHtml(embedUrl)}" frameborder="0" scrolling="no" loading="lazy"></iframe>
            `;
            const tBtn = document.getElementById('toggleCalModeBtn');
            if (tBtn) {
                tBtn.addEventListener('click', () => {
                    useGoogleEmbedMode = false;
                    renderMonthlyCalendarView();
                });
            }
            return;
        }

        const ursList = getAllHijriUrsEvents();
        const firstDayOfMonth = new Date(calViewYear, calViewMonth, 1).getDay();
        const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
        const today = new Date();
        const isCurrentMonth = today.getFullYear() === calViewYear && today.getMonth() === calViewMonth;

        const startHijri = getHijriPartsForGregorianDate(new Date(calViewYear, calViewMonth, 1), true);
        const endHijri = getHijriPartsForGregorianDate(new Date(calViewYear, calViewMonth, daysInMonth), true);
        let hijriHeaderStr = '';
        if (startHijri && endHijri) {
            if (startHijri.month === endHijri.month && startHijri.year === endHijri.year) {
                hijriHeaderStr = `${startHijri.monthNameUr} ${toArabicDigits(startHijri.year)}ھ`;
            } else if (startHijri.year === endHijri.year) {
                hijriHeaderStr = `${startHijri.monthNameUr} — ${endHijri.monthNameUr} ${toArabicDigits(startHijri.year)}ھ`;
            } else {
                hijriHeaderStr = `${startHijri.monthNameUr} ${toArabicDigits(startHijri.year)}ھ — ${endHijri.monthNameUr} ${toArabicDigits(endHijri.year)}ھ`;
            }
        }

        if (selectedCalDay > daysInMonth) selectedCalDay = daysInMonth;

        let cellsHtml = '';
        for (let b = 0; b < firstDayOfMonth; b++) {
            cellsHtml += `<div class="cal-day-cell" style="cursor:default;"></div>`;
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const gDate = new Date(calViewYear, calViewMonth, d);
            const hParts = getHijriPartsForGregorianDate(gDate, true);
            const dayRegEvents = getRegularEventsForDay(cfg.events, calViewYear, calViewMonth, d);
            const dayMonthlyHijri = getMonthlyHijriEventsForDate(cfg.monthlyHijriEvents, hParts);
            const dayUrsEvents = getUrsEventsForHijriDate(ursList, hParts);
            const hasAnyEv = dayRegEvents.length > 0 || dayMonthlyHijri.length > 0;

            const classes = ['cal-day-cell'];
            if (isCurrentMonth && today.getDate() === d) classes.push('today');
            if (hasAnyEv) classes.push('has-event');
            if (dayUrsEvents.length) classes.push('has-urs');
            if (selectedCalDay === d) classes.push('selected-day');

            cellsHtml += `
                <div class="${classes.join(' ')}" data-cal-day="${d}">
                    <span class="cal-greg-num">${d}</span>
                    <span class="cal-hijri-num">${hParts ? toArabicDigits(hParts.day) : ''}</span>
                    <span class="cal-dots-row">
                        ${hasAnyEv ? '<span class="cal-day-dot"></span>' : ''}
                        ${dayUrsEvents.length ? '<span class="cal-day-dot urs-dot"></span>' : ''}
                    </span>
                </div>
            `;
        }

        const selGregDate = new Date(calViewYear, calViewMonth, selectedCalDay);
        const selHijri = getHijriPartsForGregorianDate(selGregDate, true);
        const selReg = getRegularEventsForDay(cfg.events, calViewYear, calViewMonth, selectedCalDay);
        const selMonthlyHijri = getMonthlyHijriEventsForDate(cfg.monthlyHijriEvents, selHijri);
        const selUrs = getUrsEventsForHijriDate(ursList, selHijri);

        let detailItemsHtml = '';
        selMonthlyHijri.forEach((mItem) => {
            const gcalUrl = buildMonthlyHijriGCalUrl(mItem, selGregDate, selHijri);
            detailItemsHtml += `
                <div class="cal-detail-item">
                    <strong>🌙 ${escapeHtml(mItem.title)}</strong><br>
                    ${mItem.titleUr ? `<div class="cal-detail-ur" dir="rtl">${escapeHtml(mItem.titleUr)}</div>` : ''}
                    ${mItem.description ? `<span>${escapeHtml(mItem.description)}</span><br>` : ''}
                    <div class="event-item-actions" style="margin-top:6px;">
                        <a class="event-mini-btn" href="${escapeHtml(gcalUrl)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.calendarSm}<span>Add to Calendar</span></a>
                    </div>
                </div>
            `;
        });

        selUrs.forEach((u) => {
            const gcalUrl = buildUrsGoogleCalendarUrl(u, selGregDate);
            const shajaraHref = getShajaraLink(u.shajaraHash);
            const silsilaUrLine = formatSilsilaRefsUrdu(u);
            const wisaalAr = u.wisaalYear ? toArabicDigits(u.wisaalYear) : '';
            detailItemsHtml += `
                <div class="cal-detail-item urs-detail">
                    <div class="cal-detail-ur" dir="rtl">🌟 عرسِ مبارک: ${escapeHtml(cleanMashaykhNameForNotification(u.titleUr || u.title))}</div>
                    ${silsilaUrLine ? `<div class="urs-silsila-line" dir="rtl" style="font-size:14px;">📜 ${escapeHtml(silsilaUrLine)}</div>` : ''}
                    <div style="font-size:11.5px; margin-bottom:6px;">
                        ${wisaalAr ? `🕰️ ${escapeHtml(wisaalAr)}` : ''}
                        ${u.location ? `${wisaalAr ? ' • ' : ''}📍 ${escapeHtml(u.location)}` : ''}
                    </div>
                    <div class="event-item-actions">
                        <a class="event-mini-btn" href="${escapeHtml(gcalUrl)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.calendarSm}<span>Add to Calendar</span></a>
                        <a class="event-mini-btn shajara-btn" href="${escapeHtml(shajaraHref)}">${window.AWRAAD_SVG.scrollSm}<span>Shajara</span></a>
                    </div>
                </div>
            `;
        });

        selReg.forEach((ev) => {
            const evMeet = (ev.meetUrl || (ev.id === 'weekly-tuesday-session' ? cfg.liveSession.meetUrl : '') || '').trim();
            const gcalUrl = buildGoogleCalendarUrl(ev, evMeet);
            const timeLabel = ev.customTimeLabel || format12Hour(ev.startHour, ev.startMinute);
            detailItemsHtml += `
                <div class="cal-detail-item">
                    <strong>${escapeHtml(ev.title)}</strong> (${escapeHtml(timeLabel)})<br>
                    ${ev.description ? `<span>${escapeHtml(ev.description)}</span><br>` : ''}
                    <div class="event-item-actions" style="margin-top:6px;">
                        <a class="event-mini-btn" href="${escapeHtml(gcalUrl)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.calendarSm}<span>Add to Calendar</span></a>
                        ${!isPlaceholderMeetUrl(evMeet) ? `<a class="event-mini-btn meet-btn" href="${escapeHtml(evMeet)}" target="_blank" rel="noopener noreferrer">${window.AWRAAD_SVG.videoSm}<span>Join Meet</span></a>` : ''}
                    </div>
                </div>
            `;
        });

        if (!detailItemsHtml) {
            detailItemsHtml = `<div>Is tareekh ko koi event ya Urs darj nahi hai. Highlighted dates par tap karke tafseel dekhein.</div>`;
        }

        const embedToggleHtml = hasEmbed
            ? `<button type="button" id="toggleCalModeBtn" class="cal-mode-toggle-btn">🌐 Switch to Google Calendar Embed</button>`
            : '';

        container.innerHTML = `
            ${embedToggleHtml}
            <div class="cal-grid-wrap">
                <div class="cal-month-bar">
                    <button type="button" id="calPrevMonthBtn" class="cal-nav-arrow">◀</button>
                    <div class="cal-month-stack">
                        <div class="cal-month-title">${MONTH_NAMES[calViewMonth]} ${calViewYear}</div>
                        ${hijriHeaderStr ? `<div class="cal-hijri-month-sub" dir="rtl">${escapeHtml(hijriHeaderStr)}</div>` : ''}
                    </div>
                    <button type="button" id="calNextMonthBtn" class="cal-nav-arrow">▶</button>
                </div>
                <div class="cal-weekdays">
                    <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
                <div class="cal-days-grid">${cellsHtml}</div>
                <div class="cal-legend-row">
                    <span class="cal-legend-item"><span class="cal-legend-swatch ev"></span> Session / Event / 11th</span>
                    <span class="cal-legend-item"><span class="cal-legend-swatch urs"></span> Mashaykh Urs (Hijri)</span>
                </div>
                <div class="cal-day-detail">
                    <div class="cal-selected-date-head">
                        <span>${DAY_NAMES[selGregDate.getDay()]}, ${selectedCalDay} ${MONTH_NAMES[calViewMonth].slice(0, 3)} ${calViewYear}</span>
                        ${selHijri ? `<span class="cal-selected-hijri" dir="rtl">🌙 ${escapeHtml(selHijri.formattedUr)}</span>` : ''}
                    </div>
                    ${detailItemsHtml}
                </div>
            </div>
        `;

        const tBtn = document.getElementById('toggleCalModeBtn');
        if (tBtn) {
            tBtn.addEventListener('click', () => {
                useGoogleEmbedMode = true;
                renderMonthlyCalendarView();
            });
        }

        const prevBtn = document.getElementById('calPrevMonthBtn');
        const nextBtn = document.getElementById('calNextMonthBtn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                calViewMonth--;
                if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
                selectedCalDay = 1;
                renderMonthlyCalendarView();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                calViewMonth++;
                if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
                selectedCalDay = 1;
                renderMonthlyCalendarView();
            });
        }
        container.querySelectorAll('.cal-day-cell[data-cal-day]').forEach((cell) => {
            cell.addEventListener('click', () => {
                selectedCalDay = parseInt(cell.getAttribute('data-cal-day'), 10);
                renderMonthlyCalendarView();
            });
        });
    }

    function renderShajaraUrsDirectoryView() {
        const container = document.getElementById('calSubContent');
        if (!container) return;

        const allUrs = getAllHijriUrsEvents();
        const monthOpts = [`<option value="0">All Hijri Months (${allUrs.length})</option>`]
            .concat(HIJRI_MONTHS_EN.map((mEn, idx) => {
                const mNum = idx + 1;
                const cnt = allUrs.filter(u => u.hijriMonth === mNum).length;
                return `<option value="${mNum}">${mNum}. ${mEn} — ${HIJRI_MONTHS_UR[idx]} (${cnt})</option>`;
            })).join('');

        let filtered = allUrs.map((u) => ({
            u,
            match: findNextGregorianForHijri(u.hijriMonth, u.hijriDay)
        }));

        if (ursFilterMonth > 0) {
            filtered = filtered.filter(({ u }) => u.hijriMonth === ursFilterMonth);
            filtered.sort((a, b) => a.u.hijriDay - b.u.hijriDay);
        } else {
            filtered.sort((a, b) => (a.match ? a.match.daysAway : 999) - (b.match ? b.match.daysAway : 999));
        }

        if (ursSearchQuery.trim()) {
            const q = normalizeArabicText(ursSearchQuery).toLowerCase();
            filtered = filtered.filter(({ u }) => {
                const hay = normalizeArabicText(`${u.titleUr || ''} ${u.title || ''} ${u.silsila || ''} ${u.silsilaUr || ''} ${u.silsilaNumber || ''} ${u.location || ''}`).toLowerCase();
                return hay.includes(q);
            });
        }

        const cardsHtml = filtered.length
            ? filtered.map(({ u, match }) => renderUrsCardHtml(u, match)).join('')
            : `<div class="live-setup-note">Koi matching Urs nahi mila. Doosra Hijri mahina ya naam try karein.</div>`;

        const sourceNote = shajaraUrsExtracted.length > 0
            ? `Auto-synced ${shajaraUrsExtracted.length} dates from Shajara`
            : `Tip: Shajara_e_Alaviyya.html open karte hi sabhi Urs auto-sync ho jayenge`;

        container.innerHTML = `
            <div class="urs-filter-bar">
                <select id="ursMonthSelect" class="urs-month-select">${monthOpts}</select>
                <input type="text" id="ursSearchInput" class="urs-search-input" placeholder="Search Shaykh / No..." value="${escapeHtml(ursSearchQuery)}">
            </div>
            <div class="urs-count-bar">
                <span>Showing <strong>${filtered.length}</strong> Urs</span>
                <span>${escapeHtml(sourceNote)}</span>
            </div>
            <div class="events-list-stack">${cardsHtml}</div>
        `;

        const sel = document.getElementById('ursMonthSelect');
        const inp = document.getElementById('ursSearchInput');
        if (sel) {
            sel.value = String(ursFilterMonth);
            sel.addEventListener('change', () => {
                ursFilterMonth = parseInt(sel.value, 10) || 0;
                renderShajaraUrsDirectoryView();
            });
        }
        if (inp) {
            inp.addEventListener('input', () => {
                const pos = inp.selectionStart;
                ursSearchQuery = inp.value;
                renderShajaraUrsDirectoryView();
                const newInp = document.getElementById('ursSearchInput');
                if (newInp) {
                    newInp.focus();
                    try { newInp.setSelectionRange(pos, pos); } catch (e) {}
                }
            });
        }
    }

    function renderCalendarPane() {
        renderTodayUrsBanner();
        renderUrsNotificationBar();

        const listBtn = document.getElementById('calSubListBtn');
        const gridBtn = document.getElementById('calSubGridBtn');
        const ursBtn = document.getElementById('calSubUrsBtn');
        if (listBtn) listBtn.classList.toggle('active', currentCalSubtab === 'list');
        if (gridBtn) gridBtn.classList.toggle('active', currentCalSubtab === 'grid');
        if (ursBtn) ursBtn.classList.toggle('active', currentCalSubtab === 'urs');

        if (currentCalSubtab === 'grid') {
            renderMonthlyCalendarView();
        } else if (currentCalSubtab === 'urs') {
            renderShajaraUrsDirectoryView();
        } else {
            renderUpcomingEventsView();
        }
    }

    function switchEventsTab(tabName) {
        const liveTabBtn = document.getElementById('eventsTabLiveBtn');
        const calTabBtn = document.getElementById('eventsTabCalBtn');
        const livePane = document.getElementById('eventsPaneLive');
        const calPane = document.getElementById('eventsPaneCal');

        const isLiveTab = tabName === 'live';
        if (liveTabBtn) liveTabBtn.classList.toggle('active', isLiveTab);
        if (calTabBtn) calTabBtn.classList.toggle('active', !isLiveTab);
        if (livePane) livePane.classList.toggle('active', isLiveTab);
        if (calPane) calPane.classList.toggle('active', !isLiveTab);

        if (isLiveTab) {
            renderLiveSessionPane();
        } else {
            renderCalendarPane();
        }
    }

    function stopCountdown() {
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
    }

    function startCountdown() {
        stopCountdown();
        updateCountdownNumbers();
        countdownTimer = setInterval(updateCountdownNumbers, 1000);
    }

    function buildEventsModalOnce() {
        if (eventsModalBuilt && document.getElementById('eventsModal')) return;
        eventsModalBuilt = true;

        const html = `
        <div id="eventsModal" class="events-modal print-none">
            <div class="events-card">
                <div class="events-header">
                    <span>Live Session, Calendar & Urs</span>
                    <button type="button" id="closeEventsModalBtn" class="events-close-btn" title="Close">&times;</button>
                </div>
                <div class="events-tabs">
                    <button type="button" id="eventsTabLiveBtn" class="events-tab-btn active">${window.AWRAAD_SVG.videoSm} Live Session</button>
                    <button type="button" id="eventsTabCalBtn" class="events-tab-btn">${window.AWRAAD_SVG.calendarSm} Calendar &amp; Urs</button>
                </div>
                <div class="events-body">
                    <div id="eventsPaneLive" class="events-pane active"></div>
                    <div id="eventsPaneCal" class="events-pane">
                        <div id="todayUrsBannerSlot"></div>
                        <div id="ursNotifBarSlot"></div>
                        <div class="cal-subtabs">
                            <button type="button" id="calSubListBtn" class="cal-subtab-btn active">Upcoming</button>
                            <button type="button" id="calSubGridBtn" class="cal-subtab-btn">Hijri Calendar</button>
                            <button type="button" id="calSubUrsBtn" class="cal-subtab-btn">Shajara Urs</button>
                        </div>
                        <div id="calSubContent"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);

        const modal = document.getElementById('eventsModal');
        const closeBtn = document.getElementById('closeEventsModalBtn');
        const liveTabBtn = document.getElementById('eventsTabLiveBtn');
        const calTabBtn = document.getElementById('eventsTabCalBtn');
        const subListBtn = document.getElementById('calSubListBtn');
        const subGridBtn = document.getElementById('calSubGridBtn');
        const subUrsBtn = document.getElementById('calSubUrsBtn');

        function closeModal() {
            modal.classList.remove('show');
            stopCountdown();
        }

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        liveTabBtn.addEventListener('click', () => switchEventsTab('live'));
        calTabBtn.addEventListener('click', () => switchEventsTab('calendar'));

        subListBtn.addEventListener('click', () => {
            currentCalSubtab = 'list';
            renderCalendarPane();
        });
        subGridBtn.addEventListener('click', () => {
            currentCalSubtab = 'grid';
            renderCalendarPane();
        });
        subUrsBtn.addEventListener('click', () => {
            currentCalSubtab = 'urs';
            renderCalendarPane();
        });
    }

    function refreshIfModalOpen() {
        cachedHijriLookup = null;
        lastNotifScheduleKey = '';
        scheduleAllUrsNotifications(false);

        const modal = document.getElementById('eventsModal');
        if (!modal || !modal.classList.contains('show')) return;
        const calPane = document.getElementById('eventsPaneCal');
        if (calPane && calPane.classList.contains('active')) {
            renderCalendarPane();
        } else {
            renderLiveSessionPane();
        }
    }

    window.refreshEventsCalendarView = refreshIfModalOpen;
    window.awraadGetAllUrsEvents = getAllHijriUrsEvents;
    window.awraadEnsureUrsLoaded = ensureShajaraUrsLoaded;

    function openEventsModal(initialTab) {
        buildEventsModalOnce();
        const modal = document.getElementById('eventsModal');
        const dropdown = document.querySelector('.dropdown-content');
        if (dropdown) dropdown.classList.remove('show');

        loadExternalEventsConfigOnce(() => {
            ensureShajaraUrsLoaded(() => {
                refreshIfModalOpen();
            });
            switchEventsTab(initialTab);
            if (modal) modal.classList.add('show');
            startCountdown();
            if (initialTab === 'calendar') {
                scheduleAllUrsNotifications(false);
            }
        });
    }

    function bootEventsSystem() {
        bindNotificationTapListener();

        if (document.querySelectorAll('.shijra-table').length > 0) {
            const extracted = extractUrsFromDocument(document);
            if (extracted.length > 0) {
                shajaraUrsExtracted = extracted;
                saveCachedShajaraUrs(extracted);
            }
        }

        // Background sync Shajara Urs + schedule native Android individual Mashaykh notifications
        // Deferred past the launch splash screen so system permission/scheduling never interrupts splash
        setTimeout(() => {
            loadExternalEventsConfigOnce(() => {
                ensureShajaraUrsLoaded(() => {
                    scheduleAllUrsNotifications(false);
                });
                scheduleAllUrsNotifications(false);
            });
        }, 11500);

        document.addEventListener('click', (e) => {
            const liveBtn = e.target.closest('#openLiveSessionBtn');
            if (liveBtn) {
                e.preventDefault();
                openEventsModal('live');
                return;
            }
            const calBtn = e.target.closest('#openEventsCalendarBtn');
            if (calBtn) {
                e.preventDefault();
                openEventsModal('calendar');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootEventsSystem);
    } else {
        bootEventsSystem();
    }
})();
// ==========================================
// PART 17: ULTRA-FAST UNIVERSAL READING UX SUITE (SINGLE IMMEDIATE LAST VISITED + ZERO-LAG)
// ==========================================
(function() {
    const LAST_VISITED_KEY = 'app_last_visited_v4';
    const AUTO_SECTION_REGISTRY_KEY = 'app_auto_section_registry_v1';
    const PENDING_RESUME_KEY = 'awraad_pending_resume_v3';
    const LAST_TRIGGER_SESSION_KEY = 'awraad_last_sub_trigger_v4';
    const BOOKMARKS_KEY = 'app_bookmarks_v1';
    const PAGES_DIR_KEY = 'app_pages_directory_v1';
    const AUTOSCROLL_SPEED_KEY = 'app_autoscroll_speed';
    const END_THRESHOLD_PCT = 92;
    const RESUME_TTL_MS = 20000;

    // One-time cleanup of all legacy multi-record Continue Reading keys so zero old data lingers
    const LEGACY_KEYS_TO_PURGE = [
        'app_main_continue_section_v1',
        'app_main_continue_section_v2',
        'app_main_continue_section_v3',
        'app_subindex_continue_map_v1',
        'app_subindex_continue_map_v2',
        'app_subindex_continue_map_v3',
        'app_subsection_progress_map_v1',
        'app_subsection_progress_map_v2',
        'app_subsection_progress_map_v3',
        'app_last_read_v1',
        'app_last_read_position'
    ];

    function purgeLegacyContinueStorage() {
        try {
            for (let i = 0; i < LEGACY_KEYS_TO_PURGE.length; i++) {
                localStorage.removeItem(LEGACY_KEYS_TO_PURGE[i]);
            }
            sessionStorage.removeItem('awraad_last_sub_trigger_v2');
            sessionStorage.removeItem('awraad_last_sub_trigger_v3');
            sessionStorage.removeItem('awraad_resume_scroll_target');
        } catch (e) {}
    }

    // Lightweight built-in group hints only for multi-file books (all future sections auto-discovered from Main Menu!)
    const BUILTIN_GROUP_HINTS = [
        { key: 'shajara', label: 'Shajara e Shareef', labelUr: 'شجرہ شریف', href: './Shajara_e_Alaviyya.html#qadriya', patterns: ['shajara', 'shijra', 'silsila', 'asnaad', 'asnad', 'qadriya', 'chisht', 'akbar', 'rozana', 'fajr-maghrib', 'har-namaz', 'haftawari'] },
        { key: 'dalail', label: 'Dalail-ul-Khairat', labelUr: 'دلائل الخیرات', href: './Monday_Hizb1.html', patterns: ['dalail', 'monday_hizb', 'tuesday_hizb', 'wednesday_hizb', 'thursday_hizb', 'friday_hizb', 'saturday_hizb', 'sunday_hizb', 'hizb_', 'iftitah', 'bada_dalail', 'aqeeb', 'asma_ul_husna', 'asma_un_nabi'] },
        { key: 'bashair', label: 'Bashair-ul-Khairaat', labelUr: 'بشائر الخیرات', href: './Bashair_ul_Khairaat.html', patterns: ['bashair'] },
        { key: 'usboo', label: 'Usboo e Shareef', labelUr: 'اُسبوع شریف', href: './Usboo_e_Shareef.html', patterns: ['usboo', 'usbu'] }
    ];

    const DEFAULT_PAGES_DIRECTORY = [
        { title: 'Main Menu', titleUr: 'فہرستِ اورادِ علویہ نوریہ', href: './index.html#main-menu', tag: 'Menu' },
        { title: 'Shajara e Shareef', titleUr: 'شجرہ شریف و اوراد', href: './Shajara_e_Alaviyya.html#qadriya', tag: 'Shajara' },
        { title: 'Dalail-ul-Khairat — Hizb 1', titleUr: 'الحزب الاول فی یوم الاثنین', href: './Monday_Hizb1.html', tag: 'Dalail' },
        { title: 'Dalail-ul-Khairat — Hizb 8', titleUr: 'الحزب الثامن فی یوم الاثنین', href: './Monday_Hizb8.html', tag: 'Dalail' },
        { title: 'Bashair-ul-Khairaat', titleUr: 'بشائر الخیرات', href: './Bashair_ul_Khairaat.html', tag: 'Bashair' },
        { title: 'Usboo e Shareef', titleUr: 'اُسبوع شریف', href: './Usboo_e_Shareef.html', tag: 'Usboo' },
        { title: 'Dua-e-Iftitah', titleUr: 'دعائے افتتاح', href: './Dua_Iftitah.html', tag: 'Dua' },
        { title: 'Dua Bad e Dalail-ul-Khairat', titleUr: 'دعاء بعد دلائل الخیرات', href: './Dua_Bada_Dalail-ul-Khairaat.html', tag: 'Dua' },
        { title: 'Tareeqa Faatiha', titleUr: 'طریقۂ فاتحہ', href: './Tareeqa_Faatiha.html', tag: 'Fatiha' },
        { title: 'Asma-ul-Husna', titleUr: 'أسماءُ اللّٰہِ الْحُسْنٰی', href: './Asma_ul_Husna.html', tag: 'Asma' },
        { title: 'Asma-un-Nabi', titleUr: 'أسماءُ النَّبِیِّ ﷺ', href: './Asma_un_Nabi.html', tag: 'Asma' },
        { title: 'Dua Al Aqeeb Awraad Alaviyya', titleUr: 'دعاء عقیب اورادِ علویہ', href: './Dua_Yuqrau_Aqeeb_Alaviyya.html', tag: 'Dua' }
    ];

    function escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function safeDecode(str) {
        try { return decodeURIComponent(String(str || '')); } catch (e) { return String(str || ''); }
    }

    function normalizeFileName(rawPath) {
        const clean = safeDecode(rawPath || '').split('?')[0].split('#')[0];
        const base = clean.substring(clean.lastIndexOf('/') + 1).trim().toLowerCase();
        return base || 'index.html';
    }

    function normalizeSearchText(str) {
        return String(str || '')
            .replace(/[\u0660-\u0669]/g, (c) => String(c.charCodeAt(0) - 0x0660))
            .replace(/[\u06F0-\u06F9]/g, (c) => String(c.charCodeAt(0) - 0x06F0))
            .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
            .replace(/[أإآٱ]/g, 'ا')
            .replace(/[ىيی]/g, 'ی')
            .replace(/[كک]/g, 'ک')
            .replace(/[ةهہ]/g, 'ہ')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    // Fast visibility check (uses cheap offsetParent/offsetHeight before expensive getComputedStyle)
    function isElementVisible(el) {
        if (!el || el.nodeType !== 1) return false;
        if (el.offsetHeight === 0 && el.offsetWidth === 0) return false;
        if (el.offsetParent === null && el !== document.body && el !== document.documentElement) {
            const st = window.getComputedStyle(el);
            if (!st || st.display === 'none' || st.visibility === 'hidden') return false;
        }
        return true;
    }

    function getCurrentFileName() {
        const path = window.location.pathname || '';
        const file = safeDecode(path.substring(path.lastIndexOf('/') + 1)).split('?')[0].split('#')[0];
        return file || 'index.html';
    }

    function getCleanHash() {
        const h = window.location.hash || '';
        return h.startsWith('#t-') ? '' : h;
    }

    function isMenuElementId(idStr) {
        const id = String(idStr || '').toLowerCase();
        if (!id) return false;
        return id === 'main-menu' || id === 'index-menu' || id === 'sub-menu' || id === 'default-view' ||
            id.endsWith('-menu') || id.endsWith('_menu') || id.startsWith('menu-') || id.startsWith('menu_') ||
            id.includes('sub-index') || id.includes('sub_index');
    }

    function getNavbarHeight() {
        const nav = document.getElementById('injected-app-navbar');
        if (nav && nav.offsetHeight > 0) return nav.offsetHeight;
        return 52;
    }

    function isChromeOrExcludedNode(el) {
        if (!el) return true;
        return Boolean(el.closest(
            '#injected-app-navbar, #awraadSideDrawer, #awraadDrawerBackdrop, #awraadShortcutRail, #awraadShortcutBackdrop, #awraadShortcutFlyout, #injected-daily-malfooz, ' +
            '.daily-malfooz-container, #settingsModal, #prayerTimesModal, #eventsModal, #tasbeehModal, ' +
            '#bookmarksModal, #quickSearchModal, .ux-modal, .continue-reading-card, .floating-reading-fab-group, ' +
            '#autoScrollBar, #awraadSplashScreen, .screen-header, .print-none'
        ));
    }

    function hasVisibleMenuCards(root) {
        const scope = root || document;
        const grids = scope.querySelectorAll('.index-nav-grid, .shijra-grid, .menu-grid, .days-grid');
        for (let i = 0; i < grids.length; i++) {
            if (!isChromeOrExcludedNode(grids[i]) && isElementVisible(grids[i])) return true;
        }
        const cards = scope.querySelectorAll('.nav-card, .sub-nav-card');
        let visCards = 0;
        for (let i = 0; i < cards.length; i++) {
            if (!isChromeOrExcludedNode(cards[i]) && isElementVisible(cards[i])) {
                visCards++;
                if (visCards >= 2) return true;
            }
        }
        return false;
    }

    function hasVisibleReadingContent(root) {
        const scope = root || document;
        const knownNodes = scope.querySelectorAll('.dua-entry, .ruled-text, .urdu-text, .shijra-table, .malfooz-card, .note-card, .qaseeda-line, .verse');
        for (let i = 0; i < knownNodes.length; i++) {
            if (!isChromeOrExcludedNode(knownNodes[i]) && isElementVisible(knownNodes[i])) {
                return true;
            }
        }
        const textNodes = scope.querySelectorAll('.continuous-inner p, .continuous-inner li, .continuous-inner blockquote, main p, article p');
        let charCount = 0;
        for (let i = 0; i < textNodes.length; i++) {
            const el = textNodes[i];
            if (isChromeOrExcludedNode(el) || el.closest('.index-nav-grid, .shijra-grid, .nav-card, .sub-nav-card')) continue;
            if (!isElementVisible(el)) continue;
            charCount += (el.textContent || '').trim().length;
            if (charCount >= 80) return true;
        }
        return false;
    }

    // Cached DOM state — invalidated only on section change / hash change / resize (ZERO per-scroll DOM scanning!)
    let cachedBlocksScope = null;
    let cachedReadingBlocks = null;
    let cachedViewState = null; // { isMain, isSubIndex, activeSecEl }
    let cachedMaxScrollY = 0;
    let lastSavedSignature = '';

    function invalidateLayoutCaches() {
        cachedBlocksScope = null;
        cachedReadingBlocks = null;
        cachedViewState = null;
        cachedMaxScrollY = Math.max(0, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight);
    }

    function getActiveContentSectionEl() {
        const h = getCleanHash();
        if (h && h.length > 1) {
            try {
                const byHash = document.querySelector(h);
                if (byHash && !isMenuElementId(byHash.id) && isElementVisible(byHash) && !hasVisibleMenuCards(byHash)) {
                    return byHash;
                }
            } catch (err) {}
        }

        const known = document.querySelectorAll('.hizb-section.active, .shijra-section.active, .index-section.active, .day-section.active, .usboo-section.active, .content-section.active, .chapter-section.active, .note-section.active');
        for (let i = 0; i < known.length; i++) {
            const el = known[i];
            if (!isMenuElementId(el.id) && isElementVisible(el) && !hasVisibleMenuCards(el)) {
                return el;
            }
        }

        // Fallback for inline-JS switched sub-sections (display:block/none without hash or standard class)
        const nodes = document.querySelectorAll('.dua-entry, .ruled-text, .shijra-table, .malfooz-card, .note-card, .qaseeda-line, .verse, .continuous-inner p');
        let contentNode = null;
        for (let i = 0; i < nodes.length; i++) {
            if (!isChromeOrExcludedNode(nodes[i]) && !nodes[i].closest('.index-nav-grid, .shijra-grid, .nav-card, .sub-nav-card') && isElementVisible(nodes[i])) {
                contentNode = nodes[i];
                break;
            }
        }

        if (contentNode) {
            let cur = contentNode.parentElement;
            while (cur && cur !== document.body && cur !== document.documentElement) {
                if (cur.id && !isMenuElementId(cur.id) && !cur.classList.contains('continuous-inner') && !cur.classList.contains('continuous-frame')) {
                    const parent = cur.parentElement;
                    if (parent) {
                        const sibs = parent.children;
                        for (let s = 0; s < sibs.length; s++) {
                            const ch = sibs[s];
                            if (ch !== cur && ch.nodeType === 1 && !ch.classList.contains('print-none') && ch.offsetHeight === 0 && ch.offsetWidth === 0) {
                                return cur;
                            }
                        }
                    }
                }
                cur = cur.parentElement;
            }
        }

        return null;
    }

    function getVisibleReadingBlocks(forceRefresh) {
        const scope = getActiveContentSectionEl() || document.querySelector('.continuous-inner') || document.body;
        if (!scope) return [];

        if (!forceRefresh && cachedReadingBlocks && cachedBlocksScope === scope) {
            return cachedReadingBlocks;
        }

        // Fast O(N) primary selector for standard reading blocks (no O(N^2) nesting checks!)
        let list = Array.from(scope.querySelectorAll('.dua-entry, .shijra-table tr, .malfooz-card, .note-card, .qaseeda-line, .verse'));
        list = list.filter((el) => !isChromeOrExcludedNode(el) && isElementVisible(el));

        // Fallback for future plain HTML notes / articles / ruled-text pages
        if (!list.length) {
            list = Array.from(scope.querySelectorAll('.ruled-text, article, blockquote, p, li, h2, h3')).filter((el) => {
                if (isChromeOrExcludedNode(el)) return false;
                if (el.closest('.index-nav-grid, .shijra-grid, .menu-grid, .days-grid, .nav-card, .sub-nav-card')) return false;
                return isElementVisible(el);
            });
        }

        cachedBlocksScope = scope;
        cachedReadingBlocks = list;
        return list;
    }

    function getMenuCardsList() {
        const raw = document.querySelectorAll('.index-nav-grid a, .index-nav-grid button, .index-nav-grid .nav-card, .index-nav-grid .sub-nav-card, .shijra-grid a, .shijra-grid .nav-card, .menu-grid a, .menu-grid button, .nav-card, .sub-nav-card');
        const list = [];
        for (let i = 0; i < raw.length; i++) {
            const el = raw[i];
            if (!isChromeOrExcludedNode(el) && list.indexOf(el) === -1) list.push(el);
        }
        return list;
    }

    function extractCardTitle(cardEl) {
        if (!cardEl) return '';
        const txt = (cardEl.innerText || cardEl.textContent || '')
            .split(/\r?\n/)
            .map((s) => s.replace(/\s+/g, ' ').trim())
            .filter(Boolean)
            .slice(0, 2)
            .join(' — ');
        return txt.slice(0, 72);
    }

    // -----------------------------------------
    // AUTO-DISCOVERED SECTION REGISTRY (ZERO HARDCODING FOR FUTURE SECTIONS)
    // -----------------------------------------
    function loadSectionRegistry() {
        try {
            const parsed = JSON.parse(localStorage.getItem(AUTO_SECTION_REGISTRY_KEY) || '{}');
            return (parsed && typeof parsed === 'object') ? parsed : {};
        } catch (e) {
            return {};
        }
    }

    function saveSectionRegistry(reg) {
        try {
            localStorage.setItem(AUTO_SECTION_REGISTRY_KEY, JSON.stringify(reg));
        } catch (e) {}
    }

    function detectBuiltInGroupKey(hayLower) {
        for (let i = 0; i < BUILTIN_GROUP_HINTS.length; i++) {
            const cat = BUILTIN_GROUP_HINTS[i];
            if (cat.patterns.some((p) => hayLower.includes(p))) {
                return cat.key;
            }
        }
        return null;
    }

    function harvestSectionRegistryFromIndex() {
        const f = normalizeFileName(getCurrentFileName());
        if (f !== 'index.html' && f !== '') return;

        const mainMenu = document.getElementById('main-menu');
        if (!mainMenu) return;

        const reg = loadSectionRegistry();
        reg.sections = reg.sections || {};
        reg.fileToSection = reg.fileToSection || {};

        const mainCards = mainMenu.querySelectorAll('.nav-card[href], .sub-nav-card[href], a[href]');
        mainCards.forEach((a) => {
            if (isChromeOrExcludedNode(a)) return;
            const rawHref = (a.getAttribute('href') || '').trim();
            if (!rawHref || rawHref === '#' || rawHref.startsWith('javascript:')) return;

            const subEl = a.querySelector('.urdu-sub, .sub-title, small');
            const labelUr = subEl ? (subEl.textContent || '').replace(/\s+/g, ' ').trim() : '';
            const rawText = (a.textContent || '').replace(labelUr, '').replace(/\s+/g, ' ').trim();
            const label = rawText || labelUr || rawHref;

            let normHref = rawHref;
            if (normHref.startsWith('#')) normHref = './index.html' + normHref;
            else if (!normHref.startsWith('./') && !normHref.startsWith('http')) normHref = './' + normHref;

            let secKey = '';
            if (rawHref.startsWith('#')) {
                const hashId = rawHref.slice(1).toLowerCase();
                if (!hashId || hashId === 'main-menu') return;
                secKey = detectBuiltInGroupKey(hashId) || ('sec_' + hashId.replace(/[^a-z0-9]+/g, '_'));

                const subMenuEl = document.getElementById(rawHref.slice(1));
                if (subMenuEl) {
                    subMenuEl.querySelectorAll('a[href]').forEach((childA) => {
                        const chHref = (childA.getAttribute('href') || '').trim();
                        if (!chHref || chHref.startsWith('#') || chHref.startsWith('javascript:')) return;
                        const childFile = normalizeFileName(chHref);
                        if (childFile && childFile !== 'index.html') {
                            reg.fileToSection[childFile] = secKey;
                        }
                    });
                }
            } else {
                const targetFile = normalizeFileName(normHref);
                if (!targetFile || targetFile === 'index.html') return;
                secKey = detectBuiltInGroupKey(targetFile) || ('sec_' + targetFile.replace(/\.html$/i, '').replace(/[^a-z0-9]+/g, '_'));
                reg.fileToSection[targetFile] = secKey;
            }

            reg.sections[secKey] = {
                key: secKey,
                label: label.slice(0, 64),
                labelUr: (labelUr || label).slice(0, 64),
                href: normHref
            };
        });
        saveSectionRegistry(reg);
    }

    let lastSubTrigger = null;
    function saveLastSubTrigger(triggerObj) {
        lastSubTrigger = triggerObj;
        try {
            if (triggerObj) sessionStorage.setItem(LAST_TRIGGER_SESSION_KEY, JSON.stringify(triggerObj));
            else sessionStorage.removeItem(LAST_TRIGGER_SESSION_KEY);
        } catch (e) {}
    }

    function loadLastSubTriggerForCurrentFile() {
        const currFile = normalizeFileName(getCurrentFileName());
        if (lastSubTrigger && lastSubTrigger.file === currFile) return lastSubTrigger;
        try {
            const parsed = JSON.parse(sessionStorage.getItem(LAST_TRIGGER_SESSION_KEY) || 'null');
            if (parsed && parsed.file === currFile) {
                lastSubTrigger = parsed;
                return parsed;
            }
        } catch (e) {}
        return null;
    }

    function getCurrentPageHref() {
        let hash = getCleanHash();
        if (hash && isMenuElementId(hash.slice(1))) hash = '';
        if (!hash) {
            const activeSec = getActiveContentSectionEl();
            if (activeSec && activeSec.id) hash = '#' + activeSec.id;
        }
        return './' + getCurrentFileName() + hash;
    }

    function isMainIndexPage() {
        const f = normalizeFileName(getCurrentFileName());
        const h = (window.location.hash || '').toLowerCase();
        return (f === '' || f === 'index.html') && (h === '' || h === '#' || h === '#main-menu');
    }

    function computeIsSubIndexView() {
        if (isMainIndexPage()) return false;
        const f = normalizeFileName(getCurrentFileName());
        const h = (window.location.hash || '').toLowerCase();
        if (f === 'index.html' && h && h !== '#main-menu') return true;
        if (h && isMenuElementId(h.slice(1))) return true;

        const activeIdxSec = document.querySelector('.index-section.active:not(#main-menu), #index-menu.active, #sub-menu.active');
        if (activeIdxSec && isElementVisible(activeIdxSec)) {
            if (isMenuElementId(activeIdxSec.id) || (hasVisibleMenuCards(activeIdxSec) && !hasVisibleReadingContent(activeIdxSec))) {
                return true;
            }
        }

        if (hasVisibleMenuCards(document) && !hasVisibleReadingContent(document)) {
            return true;
        }
        return false;
    }

    function isSubIndexView(forceFresh) {
        if (!forceFresh && cachedViewState) return cachedViewState.isSubIndex;
        const sub = computeIsSubIndexView();
        cachedViewState = { isMain: isMainIndexPage(), isSubIndex: sub };
        return sub;
    }

    function detectParentSectionKey(hrefOrFile) {
        const raw = String(hrefOrFile || (getCurrentFileName() + getCleanHash()));
        const hay = safeDecode(raw).toLowerCase();
        if (hay === 'index.html' || hay === './index.html' || hay === 'index.html#main-menu' || hay === './index.html#main-menu' || hay === '#main-menu') {
            return null;
        }

        const fileOnly = normalizeFileName(hay);
        const reg = loadSectionRegistry();

        if (fileOnly && fileOnly !== 'index.html' && reg.fileToSection && reg.fileToSection[fileOnly]) {
            return reg.fileToSection[fileOnly];
        }

        const builtIn = detectBuiltInGroupKey(hay);
        if (builtIn) return builtIn;

        if (fileOnly && fileOnly !== 'index.html') {
            return 'sec_' + fileOnly.replace(/\.html$/i, '').replace(/[^a-z0-9]+/g, '_');
        }
        const hashOnly = hay.includes('#') ? hay.split('#')[1].replace(/[^a-z0-9]+/g, '_') : '';
        if (hashOnly && hashOnly !== 'main_menu') {
            return 'sec_' + hashOnly;
        }
        return null;
    }

    function getSectionCatalogEntry(key, fallbackHref, fallbackLabel) {
        if (!key) return null;
        const reg = loadSectionRegistry();
        if (reg.sections && reg.sections[key]) return reg.sections[key];
        const found = BUILTIN_GROUP_HINTS.find((c) => c.key === key);
        if (found) return found;

        const cleanName = fallbackLabel ||
            key.replace(/^sec_/, '').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return {
            key: key,
            label: cleanName,
            labelUr: cleanName,
            href: fallbackHref || getCurrentPageHref()
        };
    }

    function getCurrentSubSectionTitle() {
        const trig = loadLastSubTriggerForCurrentFile();
        const activeSec = getActiveContentSectionEl();
        if (activeSec) {
            const hEl = activeSec.querySelector('.title-main, .section-heading, .hizb-title, h1, h2');
            if (hEl && isElementVisible(hEl)) {
                const t = (hEl.textContent || '').replace(/\s+/g, ' ').trim();
                if (t && t.length > 1) return t.slice(0, 72);
            }
        }
        if (trig && trig.cardTitle) return trig.cardTitle;
        const docHeading = document.querySelector('.title-main, .section-heading, h1, h2');
        if (docHeading && !isChromeOrExcludedNode(docHeading) && isElementVisible(docHeading)) {
            const t = (docHeading.textContent || '').replace(/\s+/g, ' ').trim();
            if (t && t.length > 1) return t.slice(0, 72);
        }
        if (document.title && document.title.trim()) return document.title.trim();
        return getCurrentFileName().replace(/\.html$/i, '').replace(/[_-]+/g, ' ');
    }

    function getCurrentScrollY() {
        return Math.max(
            0,
            Math.round(
                window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            )
        );
    }

    function getMaxScrollableY() {
        const fresh = Math.max(0, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight);
        cachedMaxScrollY = fresh;
        return fresh;
    }

    function getScrollPercentageFloat() {
        const maxY = getMaxScrollableY();
        if (maxY <= 20) return 0;
        const y = getCurrentScrollY();
        return Math.min(100, Math.max(0, (y / maxY) * 100));
    }

    function getScrollPercentage() {
        return Math.round(getScrollPercentageFloat());
    }

    // O(log N) Binary Search Anchor Capture (takes < 0.2ms even on 500-block pages!)
    function captureReadingAnchor() {
        const blocks = getVisibleReadingBlocks(false);
        if (!blocks.length) return null;

        const readingLine = getNavbarHeight() + 20;
        let lo = 0;
        let hi = blocks.length - 1;
        let chosenIdx = blocks.length - 1;

        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            const rect = blocks[mid].getBoundingClientRect();
            if (rect.bottom > readingLine) {
                chosenIdx = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        const chosenEl = blocks[chosenIdx];
        const rect = chosenEl.getBoundingClientRect();
        const blockH = Math.max(1, rect.height);
        const offsetPx = Math.max(0, readingLine - rect.top);
        const offsetRatio = Math.min(0.95, Math.max(0, +(offsetPx / blockH).toFixed(4)));
        const snippet = normalizeSearchText(chosenEl.textContent || '').slice(0, 48);

        return {
            anchorIndex: chosenIdx,
            anchorId: chosenEl.id || '',
            anchorSnippet: snippet,
            anchorOffsetRatio: offsetRatio
        };
    }

    function resolveTargetScrollY(data) {
        const navH = getNavbarHeight();
        const blocks = getVisibleReadingBlocks(true);

        if (blocks.length && (typeof data.anchorIndex === 'number' || data.anchorId || data.anchorSnippet)) {
            let targetEl = null;

            if (data.anchorId) {
                const byId = document.getElementById(data.anchorId);
                if (byId && isElementVisible(byId)) targetEl = byId;
            }

            if (!targetEl && typeof data.anchorIndex === 'number' && data.anchorIndex >= 0 && data.anchorIndex < blocks.length) {
                const cand = blocks[data.anchorIndex];
                if (!data.anchorSnippet || normalizeSearchText(cand.textContent || '').slice(0, 48) === data.anchorSnippet) {
                    targetEl = cand;
                }
            }

            if (!targetEl && data.anchorSnippet && data.anchorSnippet.length >= 6) {
                for (let i = 0; i < blocks.length; i++) {
                    if (normalizeSearchText(blocks[i].textContent || '').slice(0, 48) === data.anchorSnippet) {
                        targetEl = blocks[i];
                        break;
                    }
                }
            }

            if (!targetEl && typeof data.anchorIndex === 'number' && data.anchorIndex >= 0 && data.anchorIndex < blocks.length) {
                targetEl = blocks[data.anchorIndex];
            }

            if (targetEl) {
                const rect = targetEl.getBoundingClientRect();
                const docTop = rect.top + getCurrentScrollY();
                const ratio = (typeof data.anchorOffsetRatio === 'number' && data.anchorOffsetRatio >= 0 && data.anchorOffsetRatio < 1)
                    ? data.anchorOffsetRatio
                    : 0;
                const extraOffset = Math.round(ratio * rect.height);
                const computed = Math.max(0, Math.round(docTop - navH - 16 + extraOffset));
                if (computed > 0) return computed;
            }
        }

        const pctVal = (typeof data.pctFloat === 'number' && data.pctFloat > 0)
            ? data.pctFloat
            : (parseFloat(data.pct) || 0);
        const maxY = getMaxScrollableY();
        if (pctVal > 0 && maxY > 40) {
            return Math.min(maxY, Math.max(0, Math.round((pctVal / 100) * maxY)));
        }
        return Math.max(0, parseInt(data.scrollY, 10) || 0);
    }

    function showQuickToast(msg) {
        let toast = document.getElementById('awraadExitToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'awraadExitToast';
            toast.className = 'exit-toast print-none';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');
        clearTimeout(toast._uxTimer);
        toast._uxTimer = setTimeout(() => toast.classList.remove('show'), 1900);
    }

    function clearPendingResume() {
        try { localStorage.removeItem(PENDING_RESUME_KEY); } catch (e) {}
    }

    function loadPendingResume() {
        try {
            const raw = localStorage.getItem(PENDING_RESUME_KEY);
            if (!raw) return null;
            const data = JSON.parse(raw);
            if (!data || !data.href) return null;
            if (data.expiresAt && Date.now() > data.expiresAt) {
                clearPendingResume();
                return null;
            }
            return data;
        } catch (e) {
            return null;
        }
    }

    function navigateWithScroll(href, scrollY, resumeMeta) {
        const targetScroll = (typeof scrollY === 'number' && scrollY > 0) ? Math.round(scrollY) : 0;
        const meta = resumeMeta || {};
        const shouldStore = targetScroll > 0 || (parseFloat(meta.pct) || 0) > 0 || meta.anchorSnippet || meta.sectionId ||
            (typeof meta.triggerCardIndex === 'number' && meta.triggerCardIndex >= 0);

        if (shouldStore) {
            const pendingObj = {
                href: String(href || ''),
                file: normalizeFileName(href),
                sectionId: meta.sectionId || '',
                triggerCardIndex: typeof meta.triggerCardIndex === 'number' ? meta.triggerCardIndex : -1,
                triggerCardText: meta.triggerCardText || '',
                triggerCardHref: meta.triggerCardHref || '',
                triggerCardOnclick: meta.triggerCardOnclick || '',
                anchorIndex: typeof meta.anchorIndex === 'number' ? meta.anchorIndex : -1,
                anchorId: meta.anchorId || '',
                anchorSnippet: meta.anchorSnippet || '',
                anchorOffsetRatio: typeof meta.anchorOffsetRatio === 'number' ? meta.anchorOffsetRatio : 0,
                scrollY: targetScroll,
                pct: parseInt(meta.pct, 10) || 0,
                pctFloat: typeof meta.pctFloat === 'number' ? meta.pctFloat : (parseFloat(meta.pct) || 0),
                ts: Date.now(),
                expiresAt: Date.now() + RESUME_TTL_MS
            };
            try { localStorage.setItem(PENDING_RESUME_KEY, JSON.stringify(pendingObj)); } catch (e) {}
        } else {
            clearPendingResume();
        }

        const currFile = normalizeFileName(getCurrentFileName());
        const parts = String(href || '').split('#');
        const targetFile = parts[0] ? normalizeFileName(parts[0]) : currFile;
        const targetHash = parts[1] ? ('#' + parts[1]) : '';

        if (targetFile === currFile) {
            if (targetHash && window.location.hash !== targetHash) {
                history.pushState(null, null, targetHash);
                if (typeof window.showActiveSection === 'function') window.showActiveSection();
            }
            tryRestorePendingScroll();
        } else {
            window.location.href = href;
        }
    }

    function findMatchingSubMenuCard(data) {
        const cards = getMenuCardsList();
        if (!cards.length) return null;

        if (data.triggerCardHref) {
            const wantHref = safeDecode(data.triggerCardHref).toLowerCase();
            const found = cards.find((c) => safeDecode(c.getAttribute('href') || '').toLowerCase() === wantHref);
            if (found) return found;
        }
        if (data.triggerCardOnclick) {
            const found = cards.find((c) => (c.getAttribute('onclick') || '') === data.triggerCardOnclick);
            if (found) return found;
        }
        if (data.sectionId) {
            const sidLower = data.sectionId.toLowerCase();
            const found = cards.find((c) => {
                const h = safeDecode(c.getAttribute('href') || '').toLowerCase();
                const oc = (c.getAttribute('onclick') || '').toLowerCase();
                return h.endsWith('#' + sidLower) || oc.includes("'" + sidLower + "'") || oc.includes('"' + sidLower + '"');
            });
            if (found) return found;
        }
        if (data.triggerCardText) {
            const wantTxt = normalizeSearchText(data.triggerCardText);
            const found = cards.find((c) => normalizeSearchText(extractCardTitle(c)) === wantTxt);
            if (found) return found;
        }
        if (typeof data.triggerCardIndex === 'number' && data.triggerCardIndex >= 0 && data.triggerCardIndex < cards.length) {
            return cards[data.triggerCardIndex];
        }
        return null;
    }

    function ensureTargetSubSectionOpened(data) {
        if (!data) return false;

        const hrefHash = (data.href && data.href.includes('#')) ? data.href.split('#')[1] : '';
        const targetId = data.sectionId || hrefHash || '';

        if (targetId && !isMenuElementId(targetId)) {
            const wantHash = '#' + targetId;
            if (window.location.hash.toLowerCase() !== wantHash.toLowerCase()) {
                try { history.replaceState(null, null, wantHash); } catch (e) {}
            }
            if (typeof window.showActiveSection === 'function') {
                window.showActiveSection();
            }
        }

        if (isSubIndexView(true)) {
            const cardEl = findMatchingSubMenuCard(data);
            if (cardEl) {
                saveLastSubTrigger({
                    file: normalizeFileName(getCurrentFileName()),
                    cardHref: cardEl.getAttribute('href') || '',
                    cardOnclick: cardEl.getAttribute('onclick') || '',
                    cardIndex: data.triggerCardIndex,
                    cardTitle: data.triggerCardText || extractCardTitle(cardEl),
                    sectionId: targetId
                });
                cardEl.click();
            }
        }

        if (targetId && !isMenuElementId(targetId)) {
            const targetEl = document.getElementById(targetId);
            if (targetEl && !isElementVisible(targetEl)) {
                document.querySelectorAll('.hizb-section, .shijra-section, .index-section, #index-menu, #sub-menu').forEach((m) => {
                    if (m !== targetEl && m.parentElement === targetEl.parentElement) {
                        m.classList.remove('active');
                        if (!hasVisibleMenuCards(m)) m.style.display = 'none';
                    }
                });
                const parent = targetEl.parentElement;
                if (parent) {
                    Array.from(parent.children).forEach((sib) => {
                        if (sib !== targetEl && sib.nodeType === 1 && (sib.classList.contains('hizb-section') || sib.classList.contains('shijra-section') || sib.classList.contains('index-section') || hasVisibleMenuCards(sib))) {
                            sib.classList.remove('active');
                            sib.style.display = 'none';
                        }
                    });
                }
                targetEl.style.display = 'block';
                targetEl.classList.add('active');
                if (typeof window.applyTajweedToContainer === 'function') {
                    window.applyTajweedToContainer(targetEl, false);
                }
            }
        }

        invalidateLayoutCaches();
        return !isSubIndexView(true);
    }

    let resumeRestoreActive = false;
    let userInteractedSinceLoad = false;
    let activeResumeData = null;
    let resumeTimers = [];

    function cancelActiveResumeTimers() {
        for (let i = 0; i < resumeTimers.length; i++) clearTimeout(resumeTimers[i]);
        resumeTimers = [];
        resumeRestoreActive = false;
        activeResumeData = null;
    }

    function markUserInteraction() {
        userInteractedSinceLoad = true;
        if (resumeRestoreActive) {
            cancelActiveResumeTimers();
            clearPendingResume();
        }
    }

    function applyPendingResumeNow() {
        if (!resumeRestoreActive || !activeResumeData || userInteractedSinceLoad) return;
        if (isSubIndexView(true)) {
            ensureTargetSubSectionOpened(activeResumeData);
            if (isSubIndexView(true)) return;
        }
        const targetY = resolveTargetScrollY(activeResumeData);
        if (targetY > 0 && Math.abs(getCurrentScrollY() - targetY) > 6) {
            window.scrollTo(0, targetY);
        }
    }

    function tryRestorePendingScroll() {
        const data = loadPendingResume();
        if (!data) {
            resumeRestoreActive = false;
            return;
        }

        const currFileOnly = normalizeFileName(getCurrentFileName());
        const targetFileOnly = data.file || normalizeFileName(data.href);
        if (targetFileOnly !== currFileOnly) return;

        try {
            if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        } catch (e) {}

        cancelActiveResumeTimers();
        userInteractedSinceLoad = false;
        resumeRestoreActive = true;
        activeResumeData = data;

        if (data.triggerCardText || data.triggerCardIndex >= 0 || data.sectionId) {
            saveLastSubTrigger({
                file: currFileOnly,
                cardHref: data.triggerCardHref || '',
                cardOnclick: data.triggerCardOnclick || '',
                cardIndex: typeof data.triggerCardIndex === 'number' ? data.triggerCardIndex : -1,
                cardTitle: data.triggerCardText || '',
                sectionId: data.sectionId || ''
            });
        }

        ensureTargetSubSectionOpened(data);
        applyPendingResumeNow();
        [70, 220, 480, 900, 1350].forEach((ms) => {
            resumeTimers.push(setTimeout(applyPendingResumeNow, ms));
        });

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                if (resumeRestoreActive && !userInteractedSinceLoad) applyPendingResumeNow();
            }).catch(() => {});
        }

        resumeTimers.push(setTimeout(() => {
            if (resumeRestoreActive && !userInteractedSinceLoad) applyPendingResumeNow();
            cancelActiveResumeTimers();
            clearPendingResume();
            refreshContinueViews();
        }, 1650));
    }

    // -----------------------------------------
    // A. SINGLE IMMEDIATE LAST VISITED STORAGE (ONLY 1 RECORD — OLD RECORDS OVERWRITTEN/DELETED!)
    // -----------------------------------------
    function loadLastVisited() {
        try {
            const raw = localStorage.getItem(LAST_VISITED_KEY);
            if (!raw) return null;
            const data = JSON.parse(raw);
            if (!data || !data.href) return null;
            return data;
        } catch (e) {
            return null;
        }
    }

    function saveLastVisited(entryObj) {
        try {
            if (!entryObj) {
                localStorage.removeItem(LAST_VISITED_KEY);
                lastSavedSignature = '';
                return;
            }
            const sig = `${entryObj.uniqueKey}|${entryObj.pct}|${entryObj.anchorIndex}|${Math.round((entryObj.scrollY || 0) / 10)}`;
            if (sig === lastSavedSignature) return;
            localStorage.setItem(LAST_VISITED_KEY, JSON.stringify(entryObj));
            lastSavedSignature = sig;
        } catch (e) {}
    }

    function clearLastVisited() {
        saveLastVisited(null);
    }

    function getNormalizedPageKey(href, extraId) {
        let base = safeDecode(href || getCurrentPageHref()).toLowerCase().replace(/^\.\//, '');
        if (!base.includes('#') && extraId) {
            base += '#' + String(extraId).toLowerCase();
        }
        return base;
    }

    function getActiveSubSectionDescriptor() {
        const activeSec = getActiveContentSectionEl();
        const trig = loadLastSubTriggerForCurrentFile();
        let sectionId = (activeSec && activeSec.id) ? activeSec.id : '';
        if (!sectionId) {
            const h = getCleanHash();
            if (h && h.length > 1 && !isMenuElementId(h.slice(1))) {
                sectionId = h.slice(1);
            } else if (trig && trig.sectionId) {
                sectionId = trig.sectionId;
            }
        }
        if (!sectionId) {
            const visIdx = document.querySelector('.index-section.active');
            if (visIdx && visIdx.id && !isMenuElementId(visIdx.id) && isElementVisible(visIdx) && !hasVisibleMenuCards(visIdx)) {
                sectionId = visIdx.id;
            }
        }
        const href = './' + getCurrentFileName() + (sectionId ? ('#' + sectionId) : '');
        const uniqueKey = sectionId
            ? getNormalizedPageKey(href)
            : getNormalizedPageKey(href, (trig && typeof trig.cardIndex === 'number' && trig.cardIndex >= 0) ? ('card_' + trig.cardIndex) : '');

        return {
            href,
            file: normalizeFileName(getCurrentFileName()),
            sectionId,
            uniqueKey,
            triggerCardIndex: (trig && typeof trig.cardIndex === 'number') ? trig.cardIndex : -1,
            triggerCardText: (trig && trig.cardTitle) ? trig.cardTitle : '',
            triggerCardHref: (trig && trig.cardHref) ? trig.cardHref : '',
            triggerCardOnclick: (trig && trig.cardOnclick) ? trig.cardOnclick : ''
        };
    }

    let progressTimer = null;
    function syncSubSectionReadingProgress(forceWrite) {
        if (isMainIndexPage() || isSubIndexView(Boolean(forceWrite))) return;
        if (resumeRestoreActive && !userInteractedSinceLoad) return;

        const secKey = detectParentSectionKey();
        if (!secKey) return;

        const desc = getActiveSubSectionDescriptor();
        const pctFloat = getScrollPercentageFloat();
        const pct = Math.round(pctFloat);
        const currY = getCurrentScrollY();
        const existing = loadLastVisited();
        const sameAsSaved = Boolean(existing && (
            existing.uniqueKey === desc.uniqueKey ||
            getNormalizedPageKey(existing.href) === getNormalizedPageKey(desc.href)
        ));

        // Reached the end of this sub-section -> clear Continue Reading record cleanly
        if (pct >= END_THRESHOLD_PCT) {
            if (sameAsSaved) clearLastVisited();
            return;
        }

        // If user re-opened the SAME sub-section at top (scrollY ~ 0) without scrolling yet, preserve its saved progress
        if (sameAsSaved && !userInteractedSinceLoad && currY <= 20 && ((existing.scrollY || 0) > 20 || (existing.pct || 0) > 0)) {
            return;
        }

        // Rule 3: If user opened a NEW/DIFFERENT sub-section, immediately replace previous Last Visited record (even at 0%)
        // If user is on the SAME sub-section and has scrolled, update its latest reading position
        if (!sameAsSaved || userInteractedSinceLoad || forceWrite || pct > 0 || currY > 15) {
            const cat = getSectionCatalogEntry(secKey, desc.href, getCurrentSubSectionTitle());
            const anchor = captureReadingAnchor() || {};
            const payload = {
                sectionKey: secKey,
                sectionLabel: cat ? cat.label : getCurrentSubSectionTitle(),
                sectionLabelUr: cat ? cat.labelUr : getCurrentSubSectionTitle(),
                uniqueKey: desc.uniqueKey,
                href: desc.href,
                file: desc.file,
                sectionId: desc.sectionId,
                triggerCardIndex: desc.triggerCardIndex,
                triggerCardText: desc.triggerCardText,
                triggerCardHref: desc.triggerCardHref,
                triggerCardOnclick: desc.triggerCardOnclick,
                anchorIndex: typeof anchor.anchorIndex === 'number' ? anchor.anchorIndex : -1,
                anchorId: anchor.anchorId || '',
                anchorSnippet: anchor.anchorSnippet || '',
                anchorOffsetRatio: typeof anchor.anchorOffsetRatio === 'number' ? anchor.anchorOffsetRatio : 0,
                subTitle: getCurrentSubSectionTitle(),
                scrollY: currY,
                pct: pct,
                pctFloat: +pctFloat.toFixed(2),
                ts: Date.now()
            };
            // Single record only: completely overwrites/deletes any previous Last Visited record
            saveLastVisited(payload);
        }
    }

    // Idle debounce (450ms after scroll stops) so ZERO heavy work happens while finger is scrolling!
    function scheduleSyncReadingProgress() {
        if (progressTimer) clearTimeout(progressTimer);
        progressTimer = setTimeout(() => syncSubSectionReadingProgress(false), 450);
    }

    // Centralized flush API called by ALL navigation methods (Navbar Back/Forward, Phone Back, Hash Switch, Sidebar)
    window.awraadFlushReadingProgress = function() {
        if (progressTimer) {
            clearTimeout(progressTimer);
            progressTimer = null;
        }
        lastSavedSignature = '';
        syncSubSectionReadingProgress(true);
    };

    function buildMainIndexContinueSectionCard() {
        const last = loadLastVisited();
        if (!last || !last.href) return null;

        const pct = Math.min(99, Math.max(0, parseInt(last.pct, 10) || 0));

        const cat = getSectionCatalogEntry(last.sectionKey, last.href, last.sectionLabel);
        const sectionTitle = (cat && cat.label) || last.sectionLabel || last.subTitle || 'Last Visited';
        const subTitle = last.subTitle || sectionTitle;
        const sameTitle = normalizeSearchText(subTitle) === normalizeSearchText(sectionTitle) ||
            (cat && normalizeSearchText(subTitle) === normalizeSearchText(cat.labelUr));
        const detailText = sameTitle
            ? `Continue from ${pct}%`
            : `Continue: ${subTitle} (${pct}%)`;

        const I = window.AWRAAD_SVG;
        const wrap = document.createElement('div');
        wrap.id = 'mainIndexContinueSection';
        wrap.className = 'continue-reading-card main-continue-section-card print-none no-smart-break';
        wrap.innerHTML = `
            <div class="continue-icon-circle">${I.play}</div>
            <div class="continue-meta">
                <div class="continue-kicker">Continue Reading • Last Visited</div>
                <div class="continue-page-title" dir="auto">${escapeHtml(sectionTitle)}</div>
                <div class="bookmark-item-meta" dir="auto" style="margin-top:2px;">${escapeHtml(detailText)}</div>
                <div class="continue-progress-row">
                    <div class="continue-progress-bar-bg">
                        <div class="continue-progress-bar-fill" style="width:${Math.max(4, pct)}%;"></div>
                    </div>
                    <span class="continue-pct-label">${pct}%</span>
                </div>
            </div>
            <button type="button" id="clearMainContinueBtn" class="continue-dismiss-btn" title="Clear" aria-label="Clear">&times;</button>
        `;

        wrap.addEventListener('click', (e) => {
            if (e.target.closest('#clearMainContinueBtn')) {
                e.stopPropagation();
                clearLastVisited();
                refreshContinueViews();
                showQuickToast('Continue Reading clear ho gayi');
                return;
            }
            navigateWithScroll(last.href, last.scrollY || 0, last);
        });

        return wrap;
    }

    function buildSubSectionPageContinueCard() {
        if (resumeRestoreActive) return null;

        const saved = loadLastVisited();
        if (!saved || !saved.href) return null;

        const desc = getActiveSubSectionDescriptor();
        const isSameSubSection = (saved.uniqueKey === desc.uniqueKey) ||
            (getNormalizedPageKey(saved.href) === getNormalizedPageKey(desc.href));
        if (!isSameSubSection) return null;

        const pct = Math.min(99, Math.max(0, parseInt(saved.pct, 10) || 0));
        const targetY = resolveTargetScrollY(saved);
        if (pct <= 0 || pct >= END_THRESHOLD_PCT || targetY <= 25) return null;
        if (getCurrentScrollY() >= targetY - 35) return null;

        const I = window.AWRAAD_SVG;
        const card = document.createElement('div');
        card.id = 'continueReadingCard';
        card.className = 'continue-reading-card subsection-continue-card print-none no-smart-break';
        card.innerHTML = `
            <div class="continue-icon-circle">${I.play}</div>
            <div class="continue-meta">
                <div class="continue-kicker">Continue Reading</div>
                <div class="continue-page-title" dir="auto">${escapeHtml(saved.subTitle || getCurrentSubSectionTitle())}</div>
                <div class="continue-progress-row">
                    <div class="continue-progress-bar-bg">
                        <div class="continue-progress-bar-fill" style="width:${Math.max(4, pct)}%;"></div>
                    </div>
                    <span class="continue-pct-label">${pct}%</span>
                </div>
            </div>
            <button type="button" class="continue-dismiss-btn subsection-continue-dismiss" title="Clear" aria-label="Clear">&times;</button>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.subsection-continue-dismiss')) {
                e.stopPropagation();
                clearLastVisited();
                card.remove();
                showQuickToast('Continue Reading clear ho gayi');
                return;
            }
            userInteractedSinceLoad = true;
            cancelActiveResumeTimers();
            card.remove();
            const freshY = resolveTargetScrollY(saved);
            window.scrollTo({ top: freshY, behavior: 'smooth' });
        });

        return card;
    }

    function refreshContinueViews() {
        document.querySelectorAll('#mainIndexContinueSection, #continueReadingCard, .section-resume-banner, .subindex-continue-card, .subsection-continue-card').forEach((el) => el.remove());

        if (isMainIndexPage()) {
            const mainCard = buildMainIndexContinueSectionCard();
            if (mainCard) {
                const navGrid = document.querySelector('#main-menu .index-nav-grid, .index-nav-grid');
                const dailyMalfooz = document.getElementById('injected-daily-malfooz') || document.querySelector('.daily-malfooz-container');
                if (navGrid && navGrid.parentNode) {
                    navGrid.parentNode.insertBefore(mainCard, navGrid);
                } else if (dailyMalfooz && dailyMalfooz.parentNode) {
                    dailyMalfooz.insertAdjacentElement('afterend', mainCard);
                }
            }
            return;
        }

        if (isSubIndexView(true)) return;

        const subCard = buildSubSectionPageContinueCard();
        if (!subCard) return;

        const activeSec = getActiveContentSectionEl();
        if (activeSec) {
            const secTitle = activeSec.querySelector('.title-box, .section-heading, .hizb-title, h1, h2');
            if (secTitle && secTitle.parentNode) {
                secTitle.insertAdjacentElement('afterend', subCard);
            } else {
                activeSec.insertAdjacentElement('afterbegin', subCard);
            }
            return;
        }

        const anchor = document.querySelector('.continuous-inner .title-box, .continuous-inner .screen-header, .screen-header');
        if (anchor && anchor.parentNode) {
            anchor.insertAdjacentElement('afterend', subCard);
        }
    }

    // -----------------------------------------
    // B. BOOKMARKS / FAVORITES
    // -----------------------------------------
    function loadBookmarks() {
        try {
            const arr = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]');
            return Array.isArray(arr) ? arr : [];
        } catch (e) {
            return [];
        }
    }

    function saveBookmarks(list) {
        try {
            localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
        } catch (e) {}
        refreshBookmarkIndicators();
    }

    function getCurrentPageBookmarkId() {
        return 'page:' + getCurrentPageHref().toLowerCase();
    }

    function refreshBookmarkIndicators() {
        const list = loadBookmarks();
        const badge = document.getElementById('drawerBookmarkCount');
        if (badge) badge.textContent = String(list.length);

        const navBmBtn = document.getElementById('navBookmarkBtn');
        if (navBmBtn) {
            const isSaved = list.some((b) => b.id === getCurrentPageBookmarkId());
            navBmBtn.classList.toggle('bookmarked', isSaved);
            navBmBtn.title = isSaved ? 'Remove Bookmark' : 'Bookmark Page';
        }

        document.querySelectorAll('.malfooz-bm-btn[data-malfooz-bm-id]').forEach((btn) => {
            const mid = 'malfooz:' + btn.getAttribute('data-malfooz-bm-id');
            const isSaved = list.some((b) => b.id === mid);
            btn.classList.toggle('saved', isSaved);
            const sp = btn.querySelector('span');
            if (sp) sp.textContent = isSaved ? 'Bookmarked' : 'Bookmark';
        });
    }
    window.awraadRefreshBookmarkBadge = refreshBookmarkIndicators;

    function toggleCurrentPageBookmark() {
        const id = getCurrentPageBookmarkId();
        const list = loadBookmarks();
        const idx = list.findIndex((b) => b.id === id);
        if (idx !== -1) {
            list.splice(idx, 1);
            saveBookmarks(list);
            showQuickToast('Bookmark hata diya gaya');
        } else {
            list.unshift({
                id,
                type: 'page',
                href: getCurrentPageHref(),
                title: getCurrentSubSectionTitle(),
                scrollY: Math.round(window.scrollY || 0),
                pct: getScrollPercentage(),
                ts: Date.now()
            });
            saveBookmarks(list);
            showQuickToast('★ Page Bookmark ho gaya!');
        }
    }

    function toggleMalfoozBookmark(malfoozId, arabicNum, plainText) {
        const id = 'malfooz:' + String(malfoozId);
        const list = loadBookmarks();
        const idx = list.findIndex((b) => b.id === id);
        if (idx !== -1) {
            list.splice(idx, 1);
            saveBookmarks(list);
            showQuickToast('Malfooz bookmark hata diya gaya');
        } else {
            list.unshift({
                id,
                type: 'malfooz',
                malfoozId: String(malfoozId),
                title: `مَلْفُوْظَاتِ شَيْخ #${arabicNum || malfoozId}`,
                snippet: String(plainText || '').replace(/\s+/g, ' ').trim().slice(0, 220),
                ts: Date.now()
            });
            saveBookmarks(list);
            showQuickToast('★ Malfooz Bookmark ho gaya!');
        }
    }

    let bookmarksModalBuilt = false;
    function openBookmarksModal() {
        if (typeof window.awraadCloseDrawer === 'function') window.awraadCloseDrawer();
        if (!bookmarksModalBuilt && !document.getElementById('bookmarksModal')) {
            bookmarksModalBuilt = true;
            const I = window.AWRAAD_SVG;
            document.body.insertAdjacentHTML('beforeend', `
                <div id="bookmarksModal" class="ux-modal print-none">
                    <div class="ux-modal-card">
                        <div class="ux-modal-header">
                            <span class="ux-modal-header-title">${I.star}<span>Bookmarks &amp; Favorites</span></span>
                            <button type="button" id="closeBookmarksBtn" class="ux-modal-close" title="Close">&times;</button>
                        </div>
                        <div id="bookmarksModalBody" class="ux-modal-body"></div>
                    </div>
                </div>
            `);
            const modal = document.getElementById('bookmarksModal');
            document.getElementById('closeBookmarksBtn').addEventListener('click', () => modal.classList.remove('show'));
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('show');
            });
        }
        renderBookmarksModalBody();
        const modal = document.getElementById('bookmarksModal');
        if (modal) modal.classList.add('show');
    }

    function renderBookmarksModalBody() {
        const body = document.getElementById('bookmarksModalBody');
        if (!body) return;
        const list = loadBookmarks();
        const I = window.AWRAAD_SVG;

        if (!list.length) {
            body.innerHTML = `
                <div class="bookmark-empty-state">
                    <div style="margin-bottom:8px; color:#c59b27;">${I.star}</div>
                    Abhi koi Bookmark save nahi hai.<br>
                    Kisi bhi Dua, Hizb ya Shajara page par upar <strong>★ Star</strong> icon tap karke save kar sakte hain.
                </div>
            `;
            return;
        }

        body.innerHTML = list.map((b, i) => `
            <div class="bookmark-item-card" data-bm-index="${i}">
                <div class="bookmark-item-main" data-bm-open="${i}">
                    <div class="bookmark-item-title" dir="auto">${escapeHtml(b.title)}</div>
                    ${b.snippet ? `<div class="bookmark-item-snippet" dir="rtl">${escapeHtml(b.snippet)}</div>` : ''}
                    <div class="bookmark-item-meta">
                        ${b.type === 'malfooz' ? 'Malfooz-e-Shaykh' : `Saved at ${b.pct || 0}% reading position`}
                    </div>
                </div>
                <button type="button" class="bookmark-delete-btn" data-bm-del="${i}" title="Remove">${I.trashSm}</button>
            </div>
        `).join('');

        body.querySelectorAll('[data-bm-open]').forEach((el) => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.getAttribute('data-bm-open'), 10);
                const item = loadBookmarks()[idx];
                if (!item) return;
                const modal = document.getElementById('bookmarksModal');
                if (modal) modal.classList.remove('show');
                if (item.type === 'page' && item.href) {
                    navigateWithScroll(item.href, item.scrollY || 0);
                }
            });
        });

        body.querySelectorAll('[data-bm-del]').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.getAttribute('data-bm-del'), 10);
                const cur = loadBookmarks();
                cur.splice(idx, 1);
                saveBookmarks(cur);
                renderBookmarksModalBody();
            });
        });
    }

    // -----------------------------------------
    // C. HANDS-FREE AUTO-SCROLL MODE
    // -----------------------------------------
    let autoScrollBarBuilt = false;
    let autoScrollRunning = false;
    let autoScrollRaf = null;
    let autoScrollLastTs = 0;
    let autoScrollCarry = 0;
    let autoScrollSpeed = Math.min(10, Math.max(1, parseInt(localStorage.getItem(AUTOSCROLL_SPEED_KEY) || '3', 10) || 3));

    function syncAutoScrollUI() {
        const playBtn = document.getElementById('autoScrollPlayPauseBtn');
        const speedLbl = document.getElementById('autoScrollSpeedLabel');
        const fabBtn = document.getElementById('fabAutoScrollBtn');
        const I = window.AWRAAD_SVG;
        if (playBtn) playBtn.innerHTML = autoScrollRunning ? I.pause : I.play;
        if (speedLbl) speedLbl.textContent = 'Speed ' + autoScrollSpeed + 'x';
        if (fabBtn) fabBtn.classList.toggle('fab-active', autoScrollRunning);
    }

    function stopAutoScroll() {
        autoScrollRunning = false;
        if (autoScrollRaf) {
            cancelAnimationFrame(autoScrollRaf);
            autoScrollRaf = null;
        }
        autoScrollLastTs = 0;
        autoScrollCarry = 0;
        syncAutoScrollUI();
    }
    window.awraadStopAutoScroll = stopAutoScroll;

    function autoScrollStep(ts) {
        if (!autoScrollRunning) return;
        if (!autoScrollLastTs) autoScrollLastTs = ts;
        const dtSec = Math.min(0.1, (ts - autoScrollLastTs) / 1000);
        autoScrollLastTs = ts;

        const pxPerSec = 14 + autoScrollSpeed * 9.5;
        autoScrollCarry += pxPerSec * dtSec;
        const stepPx = Math.floor(autoScrollCarry);
        if (stepPx >= 1) {
            autoScrollCarry -= stepPx;
            const maxScroll = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
            if (window.scrollY >= maxScroll - 2) {
                stopAutoScroll();
                showQuickToast('Page mukammal ho gaya');
                return;
            }
            window.scrollBy(0, stepPx);
        }
        autoScrollRaf = requestAnimationFrame(autoScrollStep);
    }

    function startAutoScroll() {
        if (autoScrollRunning) return;
        autoScrollRunning = true;
        autoScrollLastTs = 0;
        autoScrollCarry = 0;
        syncAutoScrollUI();
        autoScrollRaf = requestAnimationFrame(autoScrollStep);
    }

    function openAutoScrollBar(autoStart) {
        if (typeof window.awraadCloseDrawer === 'function') window.awraadCloseDrawer();
        if (!autoScrollBarBuilt && !document.getElementById('autoScrollBar')) {
            autoScrollBarBuilt = true;
            const I = window.AWRAAD_SVG;
            document.body.insertAdjacentHTML('beforeend', `
                <div id="autoScrollBar" class="autoscroll-bar print-none" role="region" aria-label="Auto Scroll Controls">
                    <button type="button" id="autoScrollPlayPauseBtn" class="autoscroll-btn play-primary" title="Play / Pause">${I.play}</button>
                    <button type="button" id="autoScrollSlowerBtn" class="autoscroll-btn" title="Slower">&minus;</button>
                    <span id="autoScrollSpeedLabel" class="autoscroll-speed-label">Speed 3x</span>
                    <button type="button" id="autoScrollFasterBtn" class="autoscroll-btn" title="Faster">+</button>
                    <button type="button" id="autoScrollCloseBtn" class="autoscroll-btn" title="Close">${I.close}</button>
                </div>
            `);

            document.getElementById('autoScrollPlayPauseBtn').addEventListener('click', () => {
                if (autoScrollRunning) stopAutoScroll();
                else startAutoScroll();
            });
            document.getElementById('autoScrollSlowerBtn').addEventListener('click', () => {
                autoScrollSpeed = Math.max(1, autoScrollSpeed - 1);
                localStorage.setItem(AUTOSCROLL_SPEED_KEY, String(autoScrollSpeed));
                syncAutoScrollUI();
            });
            document.getElementById('autoScrollFasterBtn').addEventListener('click', () => {
                autoScrollSpeed = Math.min(10, autoScrollSpeed + 1);
                localStorage.setItem(AUTOSCROLL_SPEED_KEY, String(autoScrollSpeed));
                syncAutoScrollUI();
            });
            document.getElementById('autoScrollCloseBtn').addEventListener('click', () => {
                stopAutoScroll();
                const bar = document.getElementById('autoScrollBar');
                if (bar) bar.classList.remove('show');
            });

            window.addEventListener('touchstart', (e) => {
                if (autoScrollRunning && !e.target.closest('#autoScrollBar')) {
                    stopAutoScroll();
                }
            }, { passive: true });
        }

        const bar = document.getElementById('autoScrollBar');
        if (bar) bar.classList.add('show');
        syncAutoScrollUI();
        if (autoStart) startAutoScroll();
    }

    // -----------------------------------------
    // D. QUICK SEARCH MODAL
    // -----------------------------------------
    let searchModalBuilt = false;
    let activeSearchFilter = 'all';

    function harvestIndexDirectoryIfOnIndex() {
        const cards = document.querySelectorAll('.nav-card[href], .sub-nav-card[href]');
        if (!cards.length) return;
        const map = {};
        DEFAULT_PAGES_DIRECTORY.forEach((p) => { map[p.href.toLowerCase()] = p; });
        cards.forEach((a) => {
            let href = a.getAttribute('href') || '';
            if (!href || href === '#' || href.startsWith('javascript:')) return;
            if (!href.startsWith('./') && !href.startsWith('#') && !href.startsWith('http')) {
                href = './' + href;
            }
            if (href.startsWith('#')) href = './' + getCurrentFileName() + href;
            const subEl = a.querySelector('.urdu-sub');
            const subTxt = subEl ? (subEl.textContent || '').trim() : '';
            const fullTxt = (a.textContent || '').replace(subTxt, '').replace(/\s+/g, ' ').trim();
            map[href.toLowerCase()] = {
                title: fullTxt || href,
                titleUr: subTxt,
                href: href,
                tag: 'Page'
            };
        });
        try {
            localStorage.setItem(PAGES_DIR_KEY, JSON.stringify(Object.values(map)));
        } catch (e) {}
    }

    function getSearchPagesDirectory() {
        try {
            const cached = JSON.parse(localStorage.getItem(PAGES_DIR_KEY) || 'null');
            if (Array.isArray(cached) && cached.length) return cached;
        } catch (e) {}
        return DEFAULT_PAGES_DIRECTORY;
    }

    function renderSearchResults(rawQuery) {
        const listEl = document.getElementById('quickSearchResults');
        if (!listEl) return;
        const q = normalizeSearchText(rawQuery);
        const results = [];

        if (activeSearchFilter === 'all' || activeSearchFilter === 'pages') {
            const pages = getSearchPagesDirectory();
            pages.forEach((p) => {
                const hay = normalizeSearchText(`${p.title} ${p.titleUr || ''} ${p.tag || ''} ${p.href}`);
                if (!q || hay.includes(q)) {
                    results.push({
                        kind: 'page',
                        title: p.title,
                        subUr: p.titleUr || '',
                        tag: p.tag || 'Page',
                        href: p.href
                    });
                }
            });
        }

        if (q.length >= 2 && (activeSearchFilter === 'all' || activeSearchFilter === 'thispage')) {
            const activeSec = document.querySelector('.hizb-section.active, .index-section.active, .shijra-section.active');
            const scope = activeSec || document;
            const nodes = scope.querySelectorAll('.section-heading, .dua-entry, .malfooz-card, .shijra-table tr');
            let pageHits = 0;
            for (let i = 0; i < nodes.length && pageHits < 10; i++) {
                const el = nodes[i];
                if (el.offsetParent === null) continue;
                const txt = (el.textContent || '').replace(/\s+/g, ' ').trim();
                if (!txt || txt.length < 3) continue;
                if (normalizeSearchText(txt).includes(q)) {
                    pageHits++;
                    results.push({
                        kind: 'dom',
                        title: 'Match on this page',
                        subUr: txt.slice(0, 140) + (txt.length > 140 ? '…' : ''),
                        tag: 'This Page',
                        domNode: el
                    });
                }
            }
        }

        if (q.length >= 1 && (activeSearchFilter === 'all' || activeSearchFilter === 'urs')) {
            const ursList = typeof window.awraadGetAllUrsEvents === 'function' ? window.awraadGetAllUrsEvents() : [];
            let ursHits = 0;
            for (let i = 0; i < ursList.length && ursHits < 15; i++) {
                const u = ursList[i];
                const hay = normalizeSearchText(`${u.titleUr || ''} ${u.title || ''} ${u.silsila || ''} ${u.silsilaUr || ''} ${u.silsilaNumber || ''} ${u.location || ''}`);
                if (hay.includes(q)) {
                    ursHits++;
                    const numBadge = u.silsilaNumberAr ? ` • نمبر: ${u.silsilaNumberAr}` : '';
                    results.push({
                        kind: 'urs',
                        title: `${u.silsilaUr || u.silsila || 'Shajara'}${numBadge}`,
                        subUr: u.titleUr || u.title,
                        tag: 'Urs',
                        href: './Shajara_e_Alaviyya.html' + (u.shajaraHash || '#qadriya')
                    });
                }
            }
        }

        if (q.length >= 1 && (activeSearchFilter === 'all' || activeSearchFilter === 'malfooz')) {
            const malfList = Array.isArray(window.AWRAAD_MALFOOZAT_LIST) ? window.AWRAAD_MALFOOZAT_LIST : [];
            const numQuery = q.replace(/^#/, '');
            const isNumOnly = /^\d+$/.test(numQuery);
            let mHits = 0;
            for (let i = 0; i < malfList.length && mHits < 15; i++) {
                const m = malfList[i];
                const plain = String(m.text || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                const matched = isNumOnly
                    ? String(m.id) === numQuery
                    : (normalizeSearchText(plain).includes(q) || String(m.id) === numQuery);
                if (matched) {
                    mHits++;
                    results.push({
                        kind: 'malfooz',
                        title: `Malfooz #${m.id}`,
                        subUr: plain.slice(0, 180) + (plain.length > 180 ? '…' : ''),
                        tag: 'Malfooz',
                        malfoozId: m.id,
                        plainText: plain
                    });
                }
            }
        }

        if (!results.length) {
            listEl.innerHTML = `<div class="bookmark-empty-state">Koi result nahi mila. Dua, Hizb, Shaykh ka naam ya Malfooz number (masalan <code>25</code>) type karein.</div>`;
            return;
        }

        listEl.innerHTML = results.slice(0, 35).map((r, idx) => `
            <div class="search-result-item" data-sr-idx="${idx}">
                <div class="search-result-head">
                    <span class="search-result-title">${escapeHtml(r.title)}</span>
                    <span class="search-result-tag">${escapeHtml(r.tag)}</span>
                </div>
                ${r.subUr ? `<div class="search-result-ur" dir="rtl">${escapeHtml(r.subUr)}</div>` : ''}
            </div>
        `).join('');

        const shown = results.slice(0, 35);
        listEl.querySelectorAll('.search-result-item').forEach((el) => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.getAttribute('data-sr-idx'), 10);
                const r = shown[idx];
                if (!r) return;
                const modal = document.getElementById('quickSearchModal');
                if (r.kind === 'dom' && r.domNode) {
                    if (modal) modal.classList.remove('show');
                    r.domNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    r.domNode.classList.remove('search-jump-highlight');
                    void r.domNode.offsetWidth;
                    r.domNode.classList.add('search-jump-highlight');
                } else if (r.kind === 'malfooz') {
                    toggleMalfoozBookmark(r.malfoozId, r.malfoozId, r.plainText);
                } else if (r.href) {
                    if (modal) modal.classList.remove('show');
                    navigateWithScroll(r.href, 0);
                }
            });
        });
    }

    function openQuickSearchModal() {
        if (typeof window.awraadCloseDrawer === 'function') window.awraadCloseDrawer();
        if (typeof window.awraadEnsureUrsLoaded === 'function') window.awraadEnsureUrsLoaded();

        if (!searchModalBuilt && !document.getElementById('quickSearchModal')) {
            searchModalBuilt = true;
            const I = window.AWRAAD_SVG;
            document.body.insertAdjacentHTML('beforeend', `
                <div id="quickSearchModal" class="ux-modal print-none">
                    <div class="ux-modal-card">
                        <div class="ux-modal-header">
                            <span class="ux-modal-header-title">${I.search}<span>Quick Search</span></span>
                            <button type="button" id="closeQuickSearchBtn" class="ux-modal-close" title="Close">&times;</button>
                        </div>
                        <div class="ux-modal-body">
                            <div class="search-input-wrap">
                                ${I.search}
                                <input type="text" id="quickSearchInput" class="search-input-field" placeholder="Search Dua, Hizb, Shaykh, Malfooz #...">
                                <button type="button" id="quickSearchClearBtn" class="search-clear-btn" title="Clear">&times;</button>
                            </div>
                            <div class="search-filter-chips">
                                <button type="button" class="search-chip active" data-sf="all">All</button>
                                <button type="button" class="search-chip" data-sf="pages">Pages &amp; Duas</button>
                                <button type="button" class="search-chip" data-sf="urs">Shajara Urs</button>
                                <button type="button" class="search-chip" data-sf="malfooz">Malfoozat</button>
                                <button type="button" class="search-chip" data-sf="thispage">This Page</button>
                            </div>
                            <div id="quickSearchResults"></div>
                        </div>
                    </div>
                </div>
            `);

            const modal = document.getElementById('quickSearchModal');
            const input = document.getElementById('quickSearchInput');
            const clearBtn = document.getElementById('quickSearchClearBtn');

            document.getElementById('closeQuickSearchBtn').addEventListener('click', () => modal.classList.remove('show'));
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('show');
            });
            input.addEventListener('input', () => renderSearchResults(input.value));
            clearBtn.addEventListener('click', () => {
                input.value = '';
                renderSearchResults('');
                input.focus();
            });
            modal.querySelectorAll('.search-chip').forEach((chip) => {
                chip.addEventListener('click', () => {
                    activeSearchFilter = chip.getAttribute('data-sf') || 'all';
                    modal.querySelectorAll('.search-chip').forEach((c) => c.classList.toggle('active', c === chip));
                    renderSearchResults(input.value);
                });
            });
        }

        const modal = document.getElementById('quickSearchModal');
        const input = document.getElementById('quickSearchInput');
        if (modal) modal.classList.add('show');
        renderSearchResults(input ? input.value : '');
        setTimeout(() => { if (input) input.focus(); }, 120);
    }

    // -----------------------------------------
    // E. PROGRESS BAR + FLOATING SCROLL-TO-TOP / AUTO-SCROLL FABS (ZERO-LAG SCROLL LOOP)
    // -----------------------------------------
    function initReadingChrome() {
        const I = window.AWRAAD_SVG;

        if (!document.getElementById('readingProgressTrack')) {
            document.body.insertAdjacentHTML('afterbegin', `
                <div id="readingProgressTrack" class="reading-progress-track print-none">
                    <div id="readingProgressFill" class="reading-progress-fill"></div>
                </div>
            `);
        }

        if (!document.getElementById('floatingReadingFabs')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div id="floatingReadingFabs" class="floating-reading-fab-group print-none">
                    ${isMainIndexPage() ? '' : `<button type="button" id="fabAutoScrollBtn" class="floating-fab-btn visible" title="Hands-Free Auto-Scroll" aria-label="Auto Scroll">${I.autoscroll}</button>`}
                    <button type="button" id="scrollToTopBtn" class="floating-fab-btn" title="Back to Top" aria-label="Back to Top">${I.up}</button>
                </div>
            `);
        }

        const progressFill = document.getElementById('readingProgressFill');
        const scrollTopBtn = document.getElementById('scrollToTopBtn');
        const fabAutoScroll = document.getElementById('fabAutoScrollBtn');
        const navbar = document.getElementById('injected-app-navbar');

        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                stopAutoScroll();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        if (fabAutoScroll) {
            fabAutoScroll.addEventListener('click', () => {
                const bar = document.getElementById('autoScrollBar');
                if (bar && bar.classList.contains('show')) {
                    if (autoScrollRunning) stopAutoScroll();
                    else startAutoScroll();
                } else {
                    openAutoScrollBar(true);
                }
            });
        }

        let rafTicking = false;
        let lastTopBtnVisible = false;

        function onScrollFrame() {
            rafTicking = false;
            const currY = getCurrentScrollY();
            if (cachedMaxScrollY <= 0) {
                cachedMaxScrollY = Math.max(0, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight);
            }
            const pct = cachedMaxScrollY > 20 ? Math.min(100, Math.max(0, (currY / cachedMaxScrollY) * 100)) : 0;

            if (progressFill) progressFill.style.width = pct.toFixed(1) + '%';
            const showTop = currY > 360;
            if (scrollTopBtn && showTop !== lastTopBtnVisible) {
                lastTopBtnVisible = showTop;
                scrollTopBtn.classList.toggle('visible', showTop);
            }
            if (navbar && navbar.classList.contains('navbar-hidden')) {
                navbar.classList.remove('navbar-hidden');
            }

            if (!resumeRestoreActive || userInteractedSinceLoad) {
                scheduleSyncReadingProgress();
            }
        }

        window.addEventListener('scroll', () => {
            if (!rafTicking) {
                rafTicking = true;
                requestAnimationFrame(onScrollFrame);
            }
        }, { passive: true });
    }

    // -----------------------------------------
    // F. BOOT PART 17 & WIRE ALL CLICK HANDLERS
    // -----------------------------------------
    function bootReadingUXSuite() {
        purgeLegacyContinueStorage();
        harvestSectionRegistryFromIndex();
        harvestIndexDirectoryIfOnIndex();
        invalidateLayoutCaches();

        initReadingChrome();
        tryRestorePendingScroll();
        if (!isMainIndexPage() && !isSubIndexView(true) && !resumeRestoreActive) {
            syncSubSectionReadingProgress(false);
        }
        refreshContinueViews();
        refreshBookmarkIndicators();

        document.querySelectorAll('.malfooz-card').forEach((card, i) => {
            if (card.querySelector('.malfooz-bm-btn')) return;
            const numEl = card.querySelector('.malfooz-num');
            const txtEl = card.querySelector('.malfooz-text');
            if (!txtEl) return;
            const numRaw = numEl ? (numEl.textContent || '').trim() : String(i + 1);
            const numAscii = normalizeSearchText(numRaw).replace(/[^\d]/g, '') || String(i + 1);
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'malfooz-bm-btn';
            btn.setAttribute('data-malfooz-bm-id', numAscii);
            btn.setAttribute('data-malfooz-bm-ar', numRaw);
            btn.innerHTML = `${window.AWRAAD_SVG.starSm}<span>Bookmark</span>`;
            txtEl.appendChild(btn);
        });
        refreshBookmarkIndicators();

        window.addEventListener('load', () => {
            invalidateLayoutCaches();
            if (resumeRestoreActive && !userInteractedSinceLoad) {
                applyPendingResumeNow();
            }
        });

        window.addEventListener('resize', () => {
            invalidateLayoutCaches();
        }, { passive: true });

        window.addEventListener('awraad:tajweeddone', () => {
            invalidateLayoutCaches();
            if (resumeRestoreActive && !userInteractedSinceLoad) {
                applyPendingResumeNow();
            }
        });

        // Capture clicks on any Sub-Index Menu card (works for href links and inline JS onclick switchers)
        document.addEventListener('click', (e) => {
            if (isMainIndexPage()) return;
            const cards = getMenuCardsList();
            if (!cards.length) return;
            const clickedCard = cards.find((c) => c === e.target || c.contains(e.target));
            if (clickedCard && isElementVisible(clickedCard)) {
                const idx = cards.indexOf(clickedCard);
                const cHref = clickedCard.getAttribute('href') || '';
                const cOnclick = clickedCard.getAttribute('onclick') || '';
                const cTitle = extractCardTitle(clickedCard);
                const fileNow = normalizeFileName(getCurrentFileName());
                saveLastSubTrigger({
                    file: fileNow,
                    cardHref: cHref,
                    cardOnclick: cOnclick,
                    cardIndex: idx,
                    cardTitle: cTitle,
                    sectionId: (cHref.includes('#') ? cHref.split('#')[1] : '')
                });
                setTimeout(() => {
                    invalidateLayoutCaches();
                    if (!isSubIndexView(true)) {
                        const activeSec = getActiveContentSectionEl();
                        const curTrig = loadLastSubTriggerForCurrentFile();
                        if (activeSec && activeSec.id && curTrig) {
                            curTrig.sectionId = activeSec.id;
                            saveLastSubTrigger(curTrig);
                        }
                        userInteractedSinceLoad = false;
                        refreshBookmarkIndicators();
                        refreshContinueViews();
                    }
                }, 140);
            }
        }, true);

        function onSectionSwitched() {
            setTimeout(() => {
                invalidateLayoutCaches();
                if (!isMainIndexPage() && !isSubIndexView(true) && !resumeRestoreActive) {
                    syncSubSectionReadingProgress(false);
                }
                refreshBookmarkIndicators();
                refreshContinueViews();
            }, 120);
        }

        window.addEventListener('awraad:sectionchange', onSectionSwitched);

        window.addEventListener('hashchange', () => {
            onSectionSwitched();
        });

        window.addEventListener('touchstart', markUserInteraction, { passive: true });
        window.addEventListener('pointerdown', (e) => {
            if (!e.target.closest('#awraadExitToast')) markUserInteraction();
        }, { passive: true });
        window.addEventListener('wheel', markUserInteraction, { passive: true });
        window.addEventListener('keydown', (e) => {
            if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End', ' '].includes(e.key)) {
                markUserInteraction();
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            if (userInteractedSinceLoad && !isMainIndexPage() && !isSubIndexView(false)) {
                syncSubSectionReadingProgress(true);
            }
        }, { passive: true });

        document.addEventListener('click', (e) => {
            if (e.target.closest('a[href], button, .nav-btn, .drawer-item')) {
                if (!isMainIndexPage() && !isSubIndexView(false) && (!resumeRestoreActive || userInteractedSinceLoad)) {
                    syncSubSectionReadingProgress(true);
                }
            }
        }, true);

        window.addEventListener('pageshow', (e) => {
            invalidateLayoutCaches();
            if (e.persisted || loadPendingResume()) {
                tryRestorePendingScroll();
            }
            refreshBookmarkIndicators();
            refreshContinueViews();
        });

        window.addEventListener('focus', () => {
            if (isMainIndexPage() || isSubIndexView(true)) {
                refreshContinueViews();
            }
        });

        window.addEventListener('pagehide', () => {
            if (!isMainIndexPage() && !isSubIndexView(false)) {
                syncSubSectionReadingProgress(true);
            }
        });

        window.addEventListener('beforeunload', () => {
            if (!isMainIndexPage() && !isSubIndexView(false)) {
                syncSubSectionReadingProgress(true);
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden' && !isMainIndexPage() && !isSubIndexView(false)) {
                syncSubSectionReadingProgress(true);
            } else if (document.visibilityState === 'visible') {
                refreshBookmarkIndicators();
                refreshContinueViews();
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('#navBookmarkBtn')) {
                e.preventDefault();
                toggleCurrentPageBookmark();
                return;
            }
            if (e.target.closest('#openBookmarksBtn')) {
                e.preventDefault();
                openBookmarksModal();
                return;
            }
            if (e.target.closest('#navSearchBtn') || e.target.closest('#openQuickSearchDrawerBtn')) {
                e.preventDefault();
                openQuickSearchModal();
                return;
            }
            if (e.target.closest('#openAutoScrollBtn')) {
                e.preventDefault();
                openAutoScrollBar(false);
                return;
            }
            const mBmBtn = e.target.closest('.malfooz-bm-btn[data-malfooz-bm-id]');
            if (mBmBtn) {
                e.preventDefault();
                const mid = mBmBtn.getAttribute('data-malfooz-bm-id');
                const mar = mBmBtn.getAttribute('data-malfooz-bm-ar') || mid;
                const container = mBmBtn.closest('.daily-malfooz-container, .malfooz-card');
                const txtNode = container ? container.querySelector('#dailyMalfoozText, .daily-malfooz-text, .malfooz-text') : null;
                let plain = txtNode ? txtNode.textContent : '';
                plain = plain.replace(/Bookmarked|Bookmark/g, '').trim();
                toggleMalfoozBookmark(mid, mar, plain);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootReadingUXSuite);
    } else {
        bootReadingUXSuite();
    }
})();

// ==========================================
// PART 18: LEFT-TO-RIGHT SWIPE SIDEBAR SHORTCUT ICON RAIL (LAZY + ZERO-LAG)
// ==========================================
(function() {
    let railBuilt = false;
    let railOpen = false;
    let activeFlyoutKey = null;

    function injectRailStylesOnce() {
        if (document.getElementById('awraad-shortcut-rail-styles')) return;
        const st = document.createElement('style');
        st.id = 'awraad-shortcut-rail-styles';
        st.textContent = `
            .shortcut-rail-backdrop {
                position: fixed;
                inset: 0;
                background: rgba(15, 23, 42, 0.22);
                z-index: 9990;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.2s ease;
            }
            .shortcut-rail-backdrop.open {
                opacity: 1;
                pointer-events: auto;
            }
            .shortcut-icon-rail {
                position: fixed;
                left: 0;
                top: 56px;
                max-height: calc(100vh - 70px);
                width: 64px;
                z-index: 9995;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                padding: 8px 5px;
                background: var(--auto-card-bg, #fdf5e6);
                border: 2px solid var(--auto-border, #c59b27);
                border-left: none;
                border-radius: 0 16px 16px 0;
                box-shadow: 4px 8px 24px rgba(0, 0, 0, 0.22);
                overflow-y: auto;
                overscroll-behavior: contain;
                scrollbar-width: none;
                transform: translateX(-115%);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
                box-sizing: border-box;
                direction: ltr;
            }
            .shortcut-icon-rail::-webkit-scrollbar { display: none; }
            .shortcut-icon-rail.open {
                transform: translateX(0);
            }
            .shortcut-rail-btn {
                position: relative;
                width: 52px;
                min-height: 46px;
                padding: 5px 2px 4px;
                margin: 0;
                border: 1px solid transparent;
                border-radius: 10px;
                background: transparent;
                color: var(--auto-card-text, #1a365d);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2px;
                text-decoration: none;
                cursor: pointer;
                flex-shrink: 0;
                box-sizing: border-box;
                transition: background-color 0.14s ease, color 0.14s ease, border-color 0.14s ease, transform 0.12s ease;
                -webkit-tap-highlight-color: transparent;
            }
            .shortcut-rail-btn .svg-ic {
                width: 20px;
                height: 20px;
                stroke: currentColor;
                fill: none;
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
            }
            .shortcut-rail-lbl {
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
                font-size: 9px;
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: 0.1px;
                max-width: 50px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: inherit;
            }
            .shortcut-rail-btn:active,
            .shortcut-rail-btn.active {
                background: #1a365d;
                color: #fdf5e6;
                border-color: #c59b27;
            }
            .shortcut-rail-sep {
                width: 34px;
                height: 1px;
                background: rgba(197, 155, 39, 0.45);
                margin: 2px 0;
                flex-shrink: 0;
            }
            .shortcut-rail-sub-dot {
                position: absolute;
                right: 4px;
                top: 5px;
                font-size: 8px;
                line-height: 1;
                color: #c59b27;
                font-weight: 900;
            }
            .shortcut-rail-btn.active .shortcut-rail-sub-dot {
                color: #ffd86b;
            }
            .shortcut-rail-badge {
                position: absolute;
                right: 3px;
                top: 2px;
                min-width: 15px;
                height: 15px;
                padding: 0 3px;
                border-radius: 999px;
                background: #c59b27;
                color: #111111;
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 9px;
                font-weight: 800;
                line-height: 15px;
                text-align: center;
                display: none;
                box-sizing: border-box;
            }
            .shortcut-rail-badge.has-count { display: inline-block; }

            .shortcut-flyout-card {
                position: fixed;
                left: 72px;
                top: 110px;
                z-index: 9998;
                width: fit-content;
                min-width: 185px;
                max-width: calc(100vw - 84px);
                background: var(--auto-card-bg, #fdf5e6);
                border: 2px solid var(--auto-border, #c59b27);
                border-radius: 12px;
                box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
                padding: 8px;
                display: none;
                flex-direction: column;
                gap: 4px;
                direction: ltr;
                box-sizing: border-box;
                animation: awraadFlyoutIn 0.16s ease-out;
            }
            .shortcut-flyout-card.open { display: flex; }
            @keyframes awraadFlyoutIn {
                from { opacity: 0; transform: translateX(-8px) scale(0.97); }
                to { opacity: 1; transform: translateX(0) scale(1); }
            }
            .shortcut-flyout-title {
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
                font-size: 11px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.45px;
                color: #8c6d23;
                padding: 4px 8px 6px;
                border-bottom: 1px solid rgba(197, 155, 39, 0.4);
                margin-bottom: 2px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }
            .shortcut-flyout-link {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                padding: 8px 10px;
                border-radius: 8px;
                text-decoration: none;
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
                font-size: 13px;
                font-weight: 600;
                color: var(--auto-card-text, #1a365d);
                background: rgba(197, 155, 39, 0.08);
                border: 1px solid transparent;
                transition: background-color 0.14s ease, color 0.14s ease;
            }
            .shortcut-flyout-link:active,
            .shortcut-flyout-link:hover {
                background: #1a365d;
                color: #ffffff;
                border-color: #c59b27;
            }

            /* Dark mode & Custom Dark Background overrides */
            body.dark-mode .shortcut-icon-rail,
            body.custom-bg-dark .shortcut-icon-rail,
            body.dark-mode .shortcut-flyout-card,
            body.custom-bg-dark .shortcut-flyout-card {
                background: var(--auto-card-bg, #1f242d);
                border-color: var(--auto-border, #c59b27);
                box-shadow: 4px 10px 28px rgba(0, 0, 0, 0.52);
            }
            body.dark-mode .shortcut-rail-btn,
            body.custom-bg-dark .shortcut-rail-btn {
                color: var(--auto-card-text, #f5f6fa);
            }
            body.dark-mode .shortcut-rail-btn:active,
            body.dark-mode .shortcut-rail-btn.active,
            body.custom-bg-dark .shortcut-rail-btn:active,
            body.custom-bg-dark .shortcut-rail-btn.active {
                background: #c59b27;
                color: #111111;
                border-color: #f3d273;
            }
            body.dark-mode .shortcut-flyout-title,
            body.custom-bg-dark .shortcut-flyout-title {
                color: #e6c667;
            }
            body.dark-mode .shortcut-flyout-link,
            body.custom-bg-dark .shortcut-flyout-link {
                color: var(--auto-card-text, #f5f6fa);
                background: rgba(255, 255, 255, 0.06);
            }
            body.dark-mode .shortcut-flyout-link:active,
            body.dark-mode .shortcut-flyout-link:hover,
            body.custom-bg-dark .shortcut-flyout-link:active,
            body.custom-bg-dark .shortcut-flyout-link:hover {
                background: #c59b27;
                color: #111111;
            }
            @media print {
                .shortcut-rail-backdrop,
                .shortcut-icon-rail,
                .shortcut-flyout-card {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(st);
    }

    function getSubmenuGroups() {
        const isShajara = window.location.pathname.toLowerCase().endsWith('shajara_e_alaviyya.html');
        const shajaraBase = isShajara ? '' : './Shajara_e_Alaviyya.html';
        return {
            shajara: {
                title: 'Shajara e Shareef',
                items: [
                    { label: 'Silsila e Qadriya', href: shajaraBase + '#qadriya' },
                    { label: 'Silsila e Chishtiya', href: shajaraBase + '#chishtiyya' },
                    { label: 'Silsila e Akbariya', href: shajaraBase + '#akbariya' },
                    { label: 'Asnad e Dalail-ul-Khairat', href: shajaraBase + '#asnaad' }
                ]
            },
            awraad: {
                title: 'Awraad o Wazaef',
                items: [
                    { label: 'Rozana', href: shajaraBase + '#rozana' },
                    { label: 'Fajr / Maghrib', href: shajaraBase + '#fajr-maghrib' },
                    { label: 'Har Namaaz', href: shajaraBase + '#har-namaz' },
                    { label: 'Haftwaar', href: shajaraBase + '#haftawari' }
                ]
            }
        };
    }

    function closeFlyout() {
        activeFlyoutKey = null;
        const flyout = document.getElementById('awraadShortcutFlyout');
        if (flyout) flyout.classList.remove('open');
        document.querySelectorAll('#awraadShortcutRail .shortcut-rail-btn.active').forEach((b) => b.classList.remove('active'));
    }

    function closeShortcutRail() {
        railOpen = false;
        closeFlyout();
        const rail = document.getElementById('awraadShortcutRail');
        const backdrop = document.getElementById('awraadShortcutBackdrop');
        if (rail) rail.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
    }

    function openFlyoutFor(groupKey, anchorBtn) {
        const groups = getSubmenuGroups();
        const grp = groups[groupKey];
        const flyout = document.getElementById('awraadShortcutFlyout');
        if (!grp || !flyout) return;

        if (activeFlyoutKey === groupKey && flyout.classList.contains('open')) {
            closeFlyout();
            return;
        }

        closeFlyout();
        activeFlyoutKey = groupKey;
        if (anchorBtn) anchorBtn.classList.add('active');

        flyout.innerHTML =
            `<div class="shortcut-flyout-title"><span>${grp.title}</span></div>` +
            grp.items.map((it) =>
                `<a href="${it.href}" class="shortcut-flyout-link"><span>${it.label}</span><span style="opacity:0.65;">›</span></a>`
            ).join('');

        flyout.classList.add('open');

        // Position flyout cleanly beside the selected icon button (clamped within viewport)
        requestAnimationFrame(() => {
            const btnRect = anchorBtn ? anchorBtn.getBoundingClientRect() : { top: 120 };
            const flyH = flyout.offsetHeight || 190;
            const minTop = 58;
            const maxTop = Math.max(minTop, window.innerHeight - flyH - 14);
            const targetTop = Math.min(maxTop, Math.max(minTop, btnRect.top - 8));
            flyout.style.top = targetTop + 'px';
        });
    }

    function triggerSidebarButton(btnId) {
        closeShortcutRail();
        const targetBtn = document.getElementById(btnId);
        if (targetBtn) {
            targetBtn.click();
        }
    }

    function syncRailBookmarkBadge() {
        if (typeof window.awraadRefreshBookmarkBadge === 'function') {
            window.awraadRefreshBookmarkBadge();
        }
        const srcBadge = document.getElementById('drawerBookmarkCount');
        const railBadge = document.getElementById('railBookmarkBadge');
        if (!railBadge) return;
        const countNum = srcBadge ? (parseInt(srcBadge.textContent, 10) || 0) : 0;
        if (countNum > 0) {
            railBadge.textContent = countNum > 99 ? '99+' : String(countNum);
            railBadge.classList.add('has-count');
        } else {
            railBadge.textContent = '';
            railBadge.classList.remove('has-count');
        }
    }

    function buildShortcutRailOnce() {
        if (railBuilt && document.getElementById('awraadShortcutRail')) return;
        railBuilt = true;
        injectRailStylesOnce();

        const pathLower = window.location.pathname.toLowerCase();
        const isIndex = pathLower.endsWith('index.html') || pathLower.endsWith('/') || pathLower === '';
        const indexPath = isIndex ? '#main-menu' : './index.html#main-menu';
        const I = window.AWRAAD_SVG;

        const html = `
            <div id="awraadShortcutBackdrop" class="shortcut-rail-backdrop print-none"></div>
            <nav id="awraadShortcutRail" class="shortcut-icon-rail print-none" dir="ltr" aria-label="Quick Sidebar Shortcuts">
                <a href="${indexPath}" class="shortcut-rail-btn" data-rail-nav="home" title="Main Menu" aria-label="Main Menu">
                    ${I.home}<span class="shortcut-rail-lbl">Home</span>
                </a>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openQuickSearchDrawerBtn" title="Quick Search" aria-label="Quick Search">
                    ${I.search}<span class="shortcut-rail-lbl">Search</span>
                </button>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openBookmarksBtn" title="Bookmarks & Favorites" aria-label="Bookmarks">
                    ${I.star}<span id="railBookmarkBadge" class="shortcut-rail-badge"></span><span class="shortcut-rail-lbl">Saved</span>
                </button>
                <div class="shortcut-rail-sep"></div>
                <button type="button" class="shortcut-rail-btn" data-rail-flyout="shajara" title="Shajara e Shareef" aria-label="Shajara e Shareef">
                    <span class="shortcut-rail-sub-dot">▸</span>${I.scroll}<span class="shortcut-rail-lbl">Shajara</span>
                </button>
                <button type="button" class="shortcut-rail-btn" data-rail-flyout="awraad" title="Awraad o Wazaef" aria-label="Awraad o Wazaef">
                    <span class="shortcut-rail-sub-dot">▸</span>${I.book}<span class="shortcut-rail-lbl">Awraad</span>
                </button>
                <div class="shortcut-rail-sep"></div>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openLiveSessionBtn" title="Live Session (Meet)" aria-label="Live Session">
                    ${I.video}<span class="shortcut-rail-lbl">Live</span>
                </button>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openEventsCalendarBtn" title="Calendar & Urs Alerts" aria-label="Calendar & Urs">
                    ${I.calendar}<span class="shortcut-rail-lbl">Urs</span>
                </button>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openTasbeehBtn" title="Tasbeeh Counter" aria-label="Tasbeeh Counter">
                    ${I.beads}<span class="shortcut-rail-lbl">Tasbeeh</span>
                </button>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openAutoScrollBtn" title="Auto-Scroll Reading" aria-label="Auto-Scroll">
                    ${I.autoscroll}<span class="shortcut-rail-lbl">Scroll</span>
                </button>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openPrayerTimesBtn" title="Prayer Times" aria-label="Prayer Times">
                    ${I.mosque}<span class="shortcut-rail-lbl">Namaz</span>
                </button>
                <div class="shortcut-rail-sep"></div>
                <button type="button" class="shortcut-rail-btn" data-rail-trigger="openSettingsBtn" title="Display & Font Settings" aria-label="Settings">
                    ${I.settings}<span class="shortcut-rail-lbl">Settings</span>
                </button>
                <button type="button" class="shortcut-rail-btn" data-rail-full-drawer="1" title="Full Sidebar Menu" aria-label="Full Menu">
                    ${I.menu}<span class="shortcut-rail-lbl">Full</span>
                </button>
            </nav>
            <div id="awraadShortcutFlyout" class="shortcut-flyout-card print-none" dir="ltr" role="menu"></div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);

        const backdrop = document.getElementById('awraadShortcutBackdrop');
        const rail = document.getElementById('awraadShortcutRail');
        const flyout = document.getElementById('awraadShortcutFlyout');

        if (backdrop) {
            backdrop.addEventListener('click', closeShortcutRail);
        }

        if (rail) {
            rail.addEventListener('click', (e) => {
                const fullBtn = e.target.closest('[data-rail-full-drawer]');
                if (fullBtn) {
                    e.preventDefault();
                    closeShortcutRail();
                    if (typeof window.awraadOpenDrawer === 'function') window.awraadOpenDrawer();
                    return;
                }

                const flyBtn = e.target.closest('[data-rail-flyout]');
                if (flyBtn) {
                    e.preventDefault();
                    openFlyoutFor(flyBtn.getAttribute('data-rail-flyout'), flyBtn);
                    return;
                }

                const trigBtn = e.target.closest('[data-rail-trigger]');
                if (trigBtn) {
                    e.preventDefault();
                    triggerSidebarButton(trigBtn.getAttribute('data-rail-trigger'));
                    return;
                }

                const navLink = e.target.closest('a[data-rail-nav]');
                if (navLink) {
                    try {
                        if (typeof window.awraadFlushReadingProgress === 'function') {
                            window.awraadFlushReadingProgress();
                        }
                    } catch (err) {}
                    closeShortcutRail();
                }
            });
        }

        if (flyout) {
            flyout.addEventListener('click', (e) => {
                const link = e.target.closest('a.shortcut-flyout-link');
                if (link) {
                    try {
                        if (typeof window.awraadFlushReadingProgress === 'function') {
                            window.awraadFlushReadingProgress();
                        }
                    } catch (err) {}
                    closeShortcutRail();
                }
            });
        }
    }

    function openShortcutRail() {
        buildShortcutRailOnce();
        syncRailBookmarkBadge();
        const rail = document.getElementById('awraadShortcutRail');
        const backdrop = document.getElementById('awraadShortcutBackdrop');
        if (!rail || !backdrop) return;
        const navEl = document.getElementById('injected-app-navbar');
        const navBottom = navEl ? Math.max(48, Math.round(navEl.getBoundingClientRect().bottom)) : 54;
        rail.style.top = (navBottom + 4) + 'px';
        rail.style.maxHeight = `calc(100vh - ${navBottom + 16}px)`;

        railOpen = true;
        backdrop.classList.add('open');
        // Force a frame so first-time lazy DOM creation animates smoothly from left
        requestAnimationFrame(() => {
            rail.classList.add('open');
        });
    }

    window.awraadOpenShortcutRail = openShortcutRail;
    window.awraadCloseShortcutRail = closeShortcutRail;

    function isAnyBlockingOverlayOpen() {
        if (document.getElementById('awraadSplashScreen')) return true;
        const sideDrawer = document.getElementById('awraadSideDrawer');
        if (sideDrawer && sideDrawer.classList.contains('open')) return true;
        return Boolean(document.querySelector(
            '#navWarningModal.show, #resetAllConfirmModal.show, .hijri-stepper-modal.show, ' +
            '.pt-submodal.show, .palette-modal.show, #quickSearchModal.show, #bookmarksModal.show, ' +
            '.settings-modal.show, .events-modal.show, .prayer-modal.show, #tasbeehModal.show:not(.tasbeeh-compact)'
        ));
    }

    function isExcludedSwipeStartTarget(target) {
        if (!target || target.nodeType !== 1) return false;
        if (target.closest('input, textarea, select, [contenteditable="true"], #tasbeehModal, #tasbeehMinimized, #autoScrollBar, #injected-app-navbar')) {
            return true;
        }
        const tblWrap = target.closest('.table-scroll-wrap');
        if (tblWrap && tblWrap.scrollWidth > tblWrap.clientWidth + 8) {
            return true;
        }
        return false;
    }

    function initLeftToRightSwipeListener() {
        let startX = 0;
        let startY = 0;
        let startTime = 0;
        let tracking = false;
        let multiTouch = false;

        window.addEventListener('touchstart', (e) => {
            if (!e.touches || e.touches.length !== 1) {
                multiTouch = true;
                tracking = false;
                return;
            }
            multiTouch = false;
            const t = e.touches[0];

            // When rail is already open, allow right-to-left swipe anywhere to dismiss it
            if (railOpen) {
                startX = t.clientX;
                startY = t.clientY;
                startTime = Date.now();
                tracking = true;
                return;
            }

            if (isAnyBlockingOverlayOpen() || isExcludedSwipeStartTarget(e.target)) {
                tracking = false;
                return;
            }

            startX = t.clientX;
            startY = t.clientY;
            startTime = Date.now();
            tracking = true;
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches.length > 1) {
                multiTouch = true;
                tracking = false;
            }
        }, { passive: true });

        window.addEventListener('touchend', (e) => {
            if (!tracking || multiTouch || !e.changedTouches || !e.changedTouches.length) {
                tracking = false;
                return;
            }
            tracking = false;

            const elapsed = Date.now() - startTime;
            if (elapsed > 650) return;

            const t = e.changedTouches[0];
            const dx = t.clientX - startX;
            const dy = Math.abs(t.clientY - startY);

            if (railOpen) {
                // Right-to-Left swipe closes the shortcut rail smoothly
                if (dx <= -42 && Math.abs(dx) > dy * 1.35) {
                    closeShortcutRail();
                }
                return;
            }

            // Left-to-Right horizontal swipe opens the Sidebar Shortcut Icon Rail
            if (dx >= 58 && dy < 56 && dx > dy * 1.45) {
                openShortcutRail();
            }
        }, { passive: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLeftToRightSwipeListener);
    } else {
        initLeftToRightSwipeListener();
    }
})();

// ==========================================
// PART 19: LIGHTWEIGHT GOOGLE ANALYTICS (ANDROID APK + iPHONE PWA)
// ==========================================
(function() {
    const GA_MEASUREMENT_ID = "G-D26FJ05YQZ";
    const IGNORE_KEY = "awraad_admin_ignore";
    if (!GA_MEASUREMENT_ID || !GA_MEASUREMENT_ID.startsWith("G-")) return;

    function isNativeCapacitorApp() {
        try {
            return Boolean(
                window.Capacitor &&
                typeof window.Capacitor.isNativePlatform === "function" &&
                window.Capacitor.isNativePlatform()
            );
        } catch (e) {
            return false;
        }
    }

    function checkAdminOptFlag() {
        try {
            const href = String(window.location && window.location.href || "");
            const explicitDisable = /[?#&]admin_optout=0(?:&|#|$)/i.test(href);
            const explicitEnable = /[?#&]admin_optout=1(?:&|#|$)/i.test(href);

            if (explicitDisable) {
                localStorage.removeItem(IGNORE_KEY);
                if (window.name === "AWR_ADMIN_IGNORE") window.name = "";
                return false;
            }

            if (explicitEnable || isNativeCapacitorApp()) {
                localStorage.setItem(IGNORE_KEY, "1");
                window.name = "AWR_ADMIN_IGNORE";
            }

            return localStorage.getItem(IGNORE_KEY) === "1" || window.name === "AWR_ADMIN_IGNORE";
        } catch (e) {
            return window.name === "AWR_ADMIN_IGNORE" || isNativeCapacitorApp();
        }
    }

    function initAwraadAnalytics() {
        try {
            if (checkAdminOptFlag()) return;
            if (typeof navigator !== "undefined" && navigator.onLine === false) return;
            if (window.__awraadGaLoaded) return;
            window.__awraadGaLoaded = true;

            const isStandalonePwa = Boolean((window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true);
            const appMode = isNativeCapacitorApp() ? "android_apk" : (isStandalonePwa ? "iphone_or_pwa" : "web_browser");

            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            window.gtag = gtag;

            gtag("js", new Date());
            gtag("config", GA_MEASUREMENT_ID, {
                app_mode: appMode,
                anonymize_ip: true
            });

            const s = document.createElement("script");
            s.async = true;
            s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
            (document.head || document.body).appendChild(s);
        } catch (e) {}
    }

    if (document.readyState === "complete") {
        setTimeout(initAwraadAnalytics, 1500);
    } else {
        window.addEventListener("load", function() {
            setTimeout(initAwraadAnalytics, 1500);
        });
    }
})();

// ==========================================
// PART 20: SMART TV UNIFIED REMOTE NAVIGATION SYSTEM (TIMER + PAGE SCROLL + MENU BAR + TOP-RIGHT CONTROLS + ALL EXISTING FIXES)
// ==========================================
(function() {
    function isSmartTvDevice() {
        var ua = navigator.userAgent || "";
        var isTvUA = /\b(TV|Android TV|GoogleTV|SMART-TV|SmartTV|BRAVIA|AFT[A-Z0-9]+|MIBOX|SHIELD|Leanback|CrKey)\b/i.test(ua);
        var w = window.innerWidth || 0;
        var h = window.innerHeight || 0;
        var shortSide = Math.min(w, h);
        var hasTouch = (navigator.maxTouchPoints || 0) > 0;

        if (hasTouch && shortSide < 460 && !isTvUA) return false;
        if (isTvUA) return true;
        return w > h && w >= 850 && h >= 460 && !hasTouch;
    }

    if (!isSmartTvDevice()) return;

    function isIndexPage() {
        var p = (window.location.pathname || "").toLowerCase();
        var clean = p.replace(/\/+$/, "");
        var lastSeg = clean.split("/").pop() || "";
        if (!lastSeg || lastSeg === "index.html") return true;
        if (lastSeg.indexOf(".html") === -1) return true;
        if (document.getElementById("main-menu") || document.getElementById("menu-shijara") || document.querySelector(".index-nav-grid")) {
            return true;
        }
        return false;
    }

    function isShajaraMultiSectionPage() {
        return !!document.querySelector(".shijra-section");
    }

    function updateNavbarHeightVar() {
        var nav = document.querySelector(".app-navbar");
        var navH = 54;
        if (nav) {
            var r = nav.getBoundingClientRect();
            navH = Math.max(44, Math.ceil(r.height > 0 ? r.height : 54));
        }
        document.documentElement.style.setProperty("--tv-nav-h", navH + "px");
    }

    // Persistent TV Navigation State (preserves active Shajara section, scroll position & page focus when entering/leaving Menu Bar or Top-Right Controls)
    var tvNavState = {
        lastPageFocusEl: null,
        savedScrollTop: 0,
        savedSectionId: "",
        savedSidebarBtn: null,
        wasModalOpen: false
    };

    // ------------------------------------------
    // 1. LIVE AUTO-REFRESH & CACHE CLEAR ENGINE (OPEN OR CLOSED)
    // ------------------------------------------
    var TV_BUILD_STAMP = "1795647787672";
    var lastCacheCheckAt = 0;

    function runTvAutoCacheClear(forceNow) {
        if (!navigator.onLine) return;
        var now = Date.now();
        if (!forceNow && now - lastCacheCheckAt < 25000) return;
        lastCacheCheckAt = now;

        try {
            var prevStamp = localStorage.getItem("awraad_tv_js_stamp");
            if (prevStamp && prevStamp !== TV_BUILD_STAMP && window.caches) {
                caches.keys().then(function(keys) {
                    return Promise.all(keys.map(function(k) { return caches.delete(k); }));
                }).catch(function() {});
            }
            localStorage.setItem("awraad_tv_js_stamp", TV_BUILD_STAMP);
        } catch (e) {}

        Promise.all([
            fetch("./sw.js?tv_chk=" + now, { cache: "no-store" })
                .then(function(res) {
                    if (!res.ok) return "";
                    var etag = res.headers.get("etag") || res.headers.get("last-modified") || "";
                    return res.text().then(function(txt) {
                        var m = txt.match(/CACHE_NAME\s*=\s*["']([^"']+)["']/);
                        return (m ? m[1] : ("len_" + txt.length)) + "|" + etag;
                    });
                })
                .catch(function() { return ""; }),
            fetch("./Tajweed_rules.js?tv_chk=" + now, { method: "HEAD", cache: "no-store" })
                .then(function(res) {
                    if (!res.ok) return "";
                    return (res.headers.get("etag") || "") + "|" + (res.headers.get("last-modified") || "") + "|" + (res.headers.get("content-length") || "");
                })
                .catch(function() { return ""; })
        ]).then(function(parts) {
            var liveVer = (parts[0] + "::" + parts[1]).replace(/^:+|:+$/g, "");
            if (!liveVer || liveVer === "|::||") return;

            var savedVer = "";
            var reloadedVer = "";
            try {
                savedVer = localStorage.getItem("awraad_tv_live_ver") || "";
                reloadedVer = sessionStorage.getItem("awraad_tv_reloaded_ver") || "";
            } catch (e) {}

            if (!savedVer) {
                try { localStorage.setItem("awraad_tv_live_ver", liveVer); } catch (e) {}
                return;
            }

            if (savedVer !== liveVer && reloadedVer !== liveVer) {
                try {
                    localStorage.setItem("awraad_tv_live_ver", liveVer);
                    sessionStorage.setItem("awraad_tv_reloaded_ver", liveVer);
                } catch (e) {}

                var toast = document.createElement("div");
                toast.textContent = "New update detected — Refreshing...";
                toast.style.cssText = "position:fixed;top:16px;right:18px;z-index:2147483600;background:#0c3b2e;color:#fbe59b;border:1.5px solid #e5c158;padding:8px 16px;border-radius:10px;font:700 13px system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,0.45);";
                if (document.body) document.body.appendChild(toast);

                var tasks = [];
                if (window.caches) {
                    tasks.push(
                        caches.keys().then(function(keys) {
                            return Promise.all(keys.map(function(k) { return caches.delete(k); }));
                        }).catch(function() {})
                    );
                }
                if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
                    tasks.push(
                        navigator.serviceWorker.getRegistrations().then(function(regs) {
                            return Promise.all(regs.map(function(r) { return r.unregister(); }));
                        }).catch(function() {})
                    );
                }

                Promise.all(tasks).then(function() {
                    return Promise.all([
                        fetch(window.location.href, { cache: "reload" }).catch(function() {}),
                        fetch("./Tajweed_Style.css", { cache: "reload" }).catch(function() {}),
                        fetch("./Tajweed_rules.js", { cache: "reload" }).catch(function() {})
                    ]);
                }).then(function() {
                    window.location.reload();
                }).catch(function() {
                    window.location.reload();
                });
            }
        }).catch(function() {});
    }

    runTvAutoCacheClear(true);
    setInterval(function() {
        if (document.visibilityState === "visible") runTvAutoCacheClear(false);
    }, 30000);
    window.addEventListener("online", function() { runTvAutoCacheClear(true); });
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") runTvAutoCacheClear(true);
    });

    // ------------------------------------------
    // 2. HOME GREEN SPLASH SCREEN (HIDES ALL NAV CARDS UNTIL SIDEBAR SELECTION)
    // ------------------------------------------
    function hideAllHomeNavCards() {
        if (!isIndexPage()) return;
        document.querySelectorAll("#menu-shijara, #menu-dalail, #menu-bashair, .index-nav-grid, .shijra-grid, .nav-card, .nav-cards, .card-grid").forEach(function(el) {
            el.classList.add("tv-hide-nav-cards");
        });
        document.querySelectorAll(".index-section").forEach(function(sec) {
            sec.classList.add("tv-hide-nav-cards");
        });
        var mainMenu = document.getElementById("main-menu");
        if (mainMenu) mainMenu.classList.add("tv-hide-nav-cards");
    }

    function ensureGreenSplashScreen() {
        if (!isIndexPage()) return;
        updateNavbarHeightVar();
        hideAllHomeNavCards();

        var splash = document.getElementById("tvHomeSplash");
        if (!splash) {
            splash = document.createElement("section");
            splash.id = "tvHomeSplash";
            splash.className = "print-none";
            splash.setAttribute("aria-label", "Awraad e Alaviya Splash Screen");
            splash.innerHTML =
                '<div class="tv-splash-inner">' +
                    '<div class="tv-splash-bismillah">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ</div>' +
                    '<div class="tv-splash-emblem">' +
                        '<img id="tvSplashLogoImg" src="./icon.png" alt="Awraad e Alaviya">' +
                    '</div>' +
                    '<h1 class="tv-splash-ar">أَوْرَادِ عَلَوِيَّه</h1>' +
                    '<div class="tv-splash-en">Awraad e Alaviya</div>' +
                    '<div class="tv-splash-divider"></div>' +
                    '<button type="button" id="tvSplashStartBtn" class="tv-splash-hint">' +
                        '<span class="tv-splash-hint-dot"></span>' +
                        '<span>Select an option from Main Menu to view content</span>' +
                    '</button>' +
                '</div>';
            document.body.appendChild(splash);

            var logoImg = document.getElementById("tvSplashLogoImg");
            if (logoImg) {
                logoImg.addEventListener("error", function() {
                    if (logoImg.dataset.fb !== "1") {
                        logoImg.dataset.fb = "1";
                        logoImg.src = "./apple-touch-icon.png";
                    } else {
                        logoImg.style.display = "none";
                    }
                });
            }

            var hintBtn = document.getElementById("tvSplashStartBtn");
            if (hintBtn) {
                hintBtn.addEventListener("click", function() {
                    var mainBtn = document.getElementById("tvSbMainMenu");
                    if (mainBtn) openStartMenu("main", mainBtn, true);
                });
            }
        }

        var rawHash = (window.location.hash || "").replace(/^#/, "").toLowerCase();
        var isHomeDefault = !rawHash || rawHash === "main-menu" || rawHash.indexOf("menu-") === 0;
        if (isHomeDefault) {
            document.body.classList.add("tv-home-splash");
            document.body.classList.remove("tv-book-active");
            document.body.classList.remove("tv-section-mode");
        } else {
            document.body.classList.remove("tv-home-splash");
        }
    }

    // ------------------------------------------
    // 3. SURGICAL OVERLAY QUARANTINE + BOTTOM NAMAAZ/FORBIDDEN BAR
    // ------------------------------------------
    var lastBadgeFallback = { isForbidden: false, prayer: "", remSecs: -1 };
    var cachedAstroKey = "";
    var cachedAstroSched = null;

    function ensureBottomBar() {
        var bar = document.getElementById("tvBottomBar");
        if (bar) return bar;

        bar = document.createElement("div");
        bar.id = "tvBottomBar";
        bar.className = "print-none";
        bar.innerHTML =
            '<div id="tvNamazStatus">' +
                '<span id="tvNextNamazLabel" class="tv-nmz-pill">Next Namaaz: --</span>' +
                '<span id="tvRemainingNamazLabel" class="tv-nmz-pill tv-nmz-rem">Remaining --</span>' +
            '</div>' +
            '<div id="tvPageControlsWrap">' +
                '<button type="button" id="tvPgLeftBtn" class="tv-pg-btn" tabindex="-1">&#9664; Left</button>' +
                '<span id="tvPageCounter">Page 1 / 1</span>' +
                '<button type="button" id="tvPgRightBtn" class="tv-pg-btn" tabindex="-1">Right &#9654;</button>' +
                '<span id="tvPageHint">&#9664; &#9654; Page &nbsp;|&nbsp; &#9650; Controls &nbsp;|&nbsp; Back Menu</span>' +
            '</div>' +
            '<div id="tvSectionHintWrap">' +
                '<span>&#9650;&#9660; Scroll &nbsp;|&nbsp; &#9664;&#9654; Reset / Start / Min / Sec &nbsp;|&nbsp; &#9664; Reset = Menu</span>' +
            '</div>';
        document.body.appendChild(bar);

        document.getElementById("tvPgLeftBtn").addEventListener("click", function() {
            turnPageByDirection("left");
        });
        document.getElementById("tvPgRightBtn").addEventListener("click", function() {
            turnPageByDirection("right");
        });
        return bar;
    }

    function todayDateKey() {
        var d = new Date();
        return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    }

    function normalizeFardName(raw) {
        var s = String(raw || "").toLowerCase().trim();
        if (/fajr/.test(s)) return "Fajr";
        if (/dhuhr|zuhr|zohr|duhr/.test(s)) return "Zuhr";
        if (/asr/.test(s)) return "Asr";
        if (/maghrib|magrib/.test(s)) return "Maghrib";
        if (/isha|esha/.test(s)) return "Isha";
        return "";
    }

    function parseClockToSecs(timeStr, hintKey) {
        if (typeof timeStr === "number" && isFinite(timeStr)) {
            if (timeStr >= 0 && timeStr < 86400) return Math.round(timeStr);
            return null;
        }
        var m = String(timeStr || "").match(/(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\s*([AP]M))?/i);
        if (!m) return null;
        var hh = parseInt(m[1], 10);
        var mm = parseInt(m[2], 10);
        var ss = m[3] ? parseInt(m[3], 10) : 0;
        var ap = (m[4] || "").toUpperCase();
        if (ap === "PM" && hh < 12) hh += 12;
        if (ap === "AM" && hh === 12) hh = 0;
        if (!ap && hintKey) {
            var hk = hintKey.toLowerCase();
            if ((hk === "asr" || hk === "sunset" || hk === "maghrib" || hk === "isha") && hh < 12) hh += 12;
            if ((hk === "zuhr" || hk === "zawal") && hh < 11) hh += 12;
        }
        if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
        return hh * 3600 + mm * 60 + ss;
    }

    function formatSecs12h(secs) {
        if (!isFinite(secs) || secs === null) return "";
        var totalMins = Math.floor(((secs % 86400) + 86400) % 86400 / 60);
        var h24 = Math.floor(totalMins / 60);
        var m = totalMins % 60;
        var ap = h24 >= 12 ? "PM" : "AM";
        var h12 = h24 % 12;
        if (h12 === 0) h12 = 12;
        return h12 + ":" + String(m).padStart(2, "0") + " " + ap;
    }

    function formatRemainingHuman(totalSecs) {
        if (!isFinite(totalSecs) || totalSecs < 0) return "--";
        if (totalSecs < 60) return "1 min";
        var totalMins = Math.ceil(totalSecs / 60);
        var hrs = Math.floor(totalMins / 60);
        var mins = totalMins % 60;
        if (hrs > 0 && mins > 0) return hrs + (hrs === 1 ? " hr, " : " hrs, ") + mins + " min";
        if (hrs > 0) return hrs + (hrs === 1 ? " hr" : " hrs");
        return mins + " min";
    }

    function parseDurationTextToSecs(str) {
        var s = String(str || "").trim();
        if (!s) return -1;
        var hms = s.match(/(\d{1,2}):(\d{2}):(\d{2})/);
        if (hms) return parseInt(hms[1], 10) * 3600 + parseInt(hms[2], 10) * 60 + parseInt(hms[3], 10);
        var hm = s.match(/(\d{1,2}):(\d{2})/);
        if (hm && !/am|pm/i.test(s)) return parseInt(hm[1], 10) * 3600 + parseInt(hm[2], 10) * 60;
        var hrsM = s.match(/(\d+)\s*(?:hrs?|hours?|h)\b/i);
        var minM = s.match(/(\d+)\s*(?:mins?|minutes?|m)\b/i);
        var secM = s.match(/(\d+)\s*(?:secs?|seconds?|s)\b/i);
        if (hrsM || minM || secM) {
            return (hrsM ? parseInt(hrsM[1], 10) * 3600 : 0) +
                   (minM ? parseInt(minM[1], 10) * 60 : 0) +
                   (secM ? parseInt(secM[1], 10) : 0);
        }
        return -1;
    }

    function extractScheduleDeep(obj, out, depth) {
        if (!obj || typeof obj !== "object" || depth > 4) return;
        var keyMap = [
            { target: "fajr", rx: /^fajr$/i },
            { target: "sunrise", rx: /^(sunrise|shuruq|shurooq|tulu)$/i },
            { target: "ishraq", rx: /^ishraq$/i },
            { target: "zawal", rx: /^(zawal|istiwa|midday)$/i },
            { target: "zuhr", rx: /^(dhuhr|zuhr|zohr|duhr)$/i },
            { target: "asr", rx: /^asr$/i },
            { target: "sunset", rx: /^(sunset|ghurub)$/i },
            { target: "maghrib", rx: /^(maghrib|magrib)$/i },
            { target: "isha", rx: /^(isha|esha)$/i }
        ];
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var v = obj[k];
            if (typeof v === "string" || typeof v === "number") {
                for (var j = 0; j < keyMap.length; j++) {
                    if (keyMap[j].rx.test(k) && out[keyMap[j].target] == null) {
                        var secs = parseClockToSecs(v, keyMap[j].target);
                        if (secs !== null) out[keyMap[j].target] = secs;
                    }
                }
            } else if (v && typeof v === "object" && !Array.isArray(v)) {
                extractScheduleDeep(v, out, depth + 1);
            }
        }
    }

    function extractCoordsDeep(obj, out, depth) {
        if (!obj || typeof obj !== "object" || depth > 3) return;
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var v = obj[k];
            var num = typeof v === "number" ? v : parseFloat(v);
            if (/^(lat|latitude)$/i.test(k) && isFinite(num) && Math.abs(num) <= 90 && out.lat === null) out.lat = num;
            else if (/^(lng|lon|long|longitude)$/i.test(k) && isFinite(num) && Math.abs(num) <= 180 && out.lng === null) out.lng = num;
            else if (v && typeof v === "object" && !Array.isArray(v)) extractCoordsDeep(v, out, depth + 1);
        }
    }

    function computeAstronomicalSchedule(lat, lng, dateObj) {
        var D2R = Math.PI / 180;
        var R2D = 180 / Math.PI;
        var y = dateObj.getFullYear();
        var m = dateObj.getMonth() + 1;
        var d = dateObj.getDate();
        if (m <= 2) { y -= 1; m += 12; }
        var A = Math.floor(y / 100);
        var B = 2 - A + Math.floor(A / 4);
        var jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5 - (lng / 360);

        var D = jd - 2451545.0;
        var g = (357.529 + 0.98560028 * D) % 360;
        if (g < 0) g += 360;
        var q = (280.459 + 0.98564736 * D) % 360;
        if (q < 0) q += 360;
        var L = (q + 1.915 * Math.sin(g * D2R) + 0.020 * Math.sin(2 * g * D2R)) % 360;
        if (L < 0) L += 360;
        var e = 23.439 - 0.00000036 * D;
        var RA = Math.atan2(Math.cos(e * D2R) * Math.sin(L * D2R), Math.cos(L * D2R)) * R2D / 15;
        RA = ((RA % 24) + 24) % 24;
        var decl = Math.asin(Math.sin(e * D2R) * Math.sin(L * D2R)) * R2D;
        var eqT = (q / 15) - RA;
        if (eqT > 12) eqT -= 24;
        if (eqT < -12) eqT += 24;

        var tz = -dateObj.getTimezoneOffset() / 60;
        var noon = 12 + tz - (lng / 15) - eqT;

        function hourAngle(altDeg) {
            var cosH = (Math.sin(altDeg * D2R) - Math.sin(lat * D2R) * Math.sin(decl * D2R)) /
                       (Math.cos(lat * D2R) * Math.cos(decl * D2R));
            if (cosH > 1) return 0;
            if (cosH < -1) return 12;
            return Math.acos(cosH) * R2D / 15;
        }

        var sunriseH = noon - hourAngle(-0.833);
        var sunsetH = noon + hourAngle(-0.833);
        var fajrH = noon - hourAngle(-18);
        var ishaH = noon + hourAngle(-18);
        var asrAlt = Math.atan(1 / (2 + Math.tan(Math.abs(lat - decl) * D2R))) * R2D;
        var asrH = noon + hourAngle(asrAlt);

        function hToSecs(h) {
            return Math.round((((h % 24) + 24) % 24) * 3600);
        }

        return {
            fajr: hToSecs(fajrH),
            sunrise: hToSecs(sunriseH),
            ishraq: hToSecs(sunriseH) + 15 * 60,
            zawal: hToSecs(noon) - 10 * 60,
            zuhr: hToSecs(noon) + 60,
            asr: hToSecs(asrH),
            sunset: hToSecs(sunsetH) - 15 * 60,
            maghrib: hToSecs(sunsetH),
            isha: hToSecs(ishaH)
        };
    }

    function readPrayerSchedule() {
        var sched = {};
        var coords = { lat: null, lng: null };

        var ptModal = document.getElementById("prayerTimesModal");
        if (ptModal) {
            var rows = ptModal.querySelectorAll("tr, .pt-row, .prayer-row, [data-prayer], li, div");
            var labelMap = [
                { key: "fajr", rx: /\bfajr\b/i },
                { key: "sunrise", rx: /\b(sunrise|shuruq|tulu)\b/i },
                { key: "ishraq", rx: /\bishraq\b/i },
                { key: "zawal", rx: /\b(zawal|istiwa)\b/i },
                { key: "zuhr", rx: /\b(dhuhr|zuhr|zohr)\b/i },
                { key: "asr", rx: /\basr\b/i },
                { key: "sunset", rx: /\b(sunset|ghurub)\b/i },
                { key: "maghrib", rx: /\b(maghrib|magrib)\b/i },
                { key: "isha", rx: /\b(isha|esha)\b/i }
            ];
            for (var r = 0; r < rows.length; r++) {
                var row = rows[r];
                if (row.children && row.children.length > 6) continue;
                var txt = (row.textContent || "").replace(/\s+/g, " ").trim();
                if (!txt || txt.length > 90) continue;
                var tMatch = txt.match(/(\d{1,2}:\d{2}(?:\s*[AP]M)?)/i);
                if (!tMatch) continue;
                for (var j = 0; j < labelMap.length; j++) {
                    if (labelMap[j].rx.test(txt) && sched[labelMap[j].key] == null) {
                        var secs = parseClockToSecs(tMatch[1], labelMap[j].key);
                        if (secs !== null) sched[labelMap[j].key] = secs;
                    }
                }
            }
        }

        try {
            var todayKey = todayDateKey();
            var ownCached = JSON.parse(localStorage.getItem("awraad_tv_prayer_sched_v1") || "null");
            if (ownCached && ownCached.date === todayKey && ownCached.sched) {
                Object.keys(ownCached.sched).forEach(function(k) {
                    if (sched[k] == null) sched[k] = ownCached.sched[k];
                });
            }
            for (var lsIdx = 0; lsIdx < localStorage.length; lsIdx++) {
                var lsKey = localStorage.key(lsIdx) || "";
                if (lsKey.indexOf("awraad_tv_start_menu") === 0) continue;
                var rawVal = localStorage.getItem(lsKey);
                if (!rawVal) continue;
                if (rawVal.charAt(0) === "{") {
                    try {
                        var parsed = JSON.parse(rawVal);
                        if (sched.fajr == null || sched.maghrib == null) extractScheduleDeep(parsed, sched, 0);
                        if (coords.lat === null || coords.lng === null) extractCoordsDeep(parsed, coords, 0);
                    } catch (e2) {}
                } else {
                    var nVal = parseFloat(rawVal);
                    if (/lat/i.test(lsKey) && isFinite(nVal) && Math.abs(nVal) <= 90 && coords.lat === null) coords.lat = nVal;
                    if (/(lng|lon)/i.test(lsKey) && isFinite(nVal) && Math.abs(nVal) <= 180 && coords.lng === null) coords.lng = nVal;
                }
            }
        } catch (e) {}

        if (sched.fajr != null && sched.zuhr != null && sched.asr != null && sched.maghrib != null && sched.isha != null) {
            try {
                localStorage.setItem("awraad_tv_prayer_sched_v1", JSON.stringify({ date: todayDateKey(), sched: sched }));
            } catch (e) {}
            return sched;
        }

        var useLat = coords.lat !== null ? coords.lat : 17.3850;
        var useLng = coords.lng !== null ? coords.lng : 78.4867;
        var aKey = todayDateKey() + "_" + useLat.toFixed(3) + "_" + useLng.toFixed(3);
        if (cachedAstroKey !== aKey || !cachedAstroSched) {
            cachedAstroKey = aKey;
            cachedAstroSched = computeAstronomicalSchedule(useLat, useLng, new Date());
        }
        return cachedAstroSched;
    }

    function computeNamazStatusFromSchedule(sched) {
        var now = new Date();
        var nowSecs = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

        if (sched.sunrise != null) {
            var sunriseEnd = (sched.ishraq != null && sched.ishraq > sched.sunrise && sched.ishraq - sched.sunrise <= 2400)
                ? sched.ishraq : (sched.sunrise + 15 * 60);
            if (nowSecs >= sched.sunrise && nowSecs < sunriseEnd) {
                return { isForbidden: true, remSecs: sunriseEnd - nowSecs };
            }
        }

        if (sched.zuhr != null) {
            var zawalStart = (sched.zawal != null && sched.zawal < sched.zuhr && sched.zuhr - sched.zawal <= 1800)
                ? sched.zawal : (sched.zuhr - 10 * 60);
            if (nowSecs >= zawalStart && nowSecs < sched.zuhr) {
                return { isForbidden: true, remSecs: sched.zuhr - nowSecs };
            }
        }

        if (sched.maghrib != null) {
            var sunsetStart = (sched.sunset != null && sched.sunset < sched.maghrib && sched.maghrib - sched.sunset <= 1800)
                ? sched.sunset : (sched.maghrib - 15 * 60);
            if (nowSecs >= sunsetStart && nowSecs < sched.maghrib) {
                return { isForbidden: true, remSecs: sched.maghrib - nowSecs };
            }
        }

        var fardList = [
            { name: "Fajr", secs: sched.fajr },
            { name: "Zuhr", secs: sched.zuhr },
            { name: "Asr", secs: sched.asr },
            { name: "Maghrib", secs: sched.maghrib },
            { name: "Isha", secs: sched.isha }
        ];

        for (var i = 0; i < fardList.length; i++) {
            if (fardList[i].secs > nowSecs) {
                return {
                    isForbidden: false,
                    prayer: fardList[i].name,
                    timeStr: formatSecs12h(fardList[i].secs),
                    remSecs: fardList[i].secs - nowSecs
                };
            }
        }

        return {
            isForbidden: false,
            prayer: "Fajr",
            timeStr: formatSecs12h(sched.fajr),
            remSecs: (sched.fajr + 86400) - nowSecs
        };
    }

    var WHITELIST_BODY_SEL = "#tvCompactSidebar, #tvHomeSplash, #tvStartMenuWrap, #tvStartMenuBackdrop, #tvBottomBar, .app-navbar, .continuous-frame, #awraadSideDrawer, #awraadDrawerBackdrop, #settingsModal, #tasbeehModal, #navWarningModal, #prayerTimesModal, #eventsModal, #bookmarksModal, #quickSearchModal, #colorPaletteModal, #hijriStepperModal, #resetAllConfirmModal, .pt-submodal, [role='dialog']";

    function suppressStrayOverlaysAndSyncNamaz() {
        var bodyKids = Array.from(document.body.children || []);
        for (var b = 0; b < bodyKids.length; b++) {
            var kid = bodyKids[b];
            if (!kid || kid.nodeType !== 1 || kid.classList.contains("tv-hide-overlay")) continue;
            if (kid.matches(WHITELIST_BODY_SEL)) continue;
            var kst = window.getComputedStyle(kid);
            if (kst.position === "fixed") {
                var kTxt = (kid.textContent || "").replace(/\s+/g, " ").trim();
                if (/makroo|makruh|forbidden|zawal|prohibited/i.test(kTxt) && kTxt.length < 120) {
                    lastBadgeFallback.isForbidden = true;
                    var ds = parseDurationTextToSecs(kTxt);
                    if (ds >= 0) lastBadgeFallback.remSecs = ds;
                } else {
                    var km = kTxt.match(/\bto\s+(fajr|dhuhr|zuhr|zohr|asr|maghrib|magrib|isha|esha)\b\s*(.*)/i);
                    if (km) {
                        var kn = normalizeFardName(km[1]);
                        if (kn) {
                            lastBadgeFallback.isForbidden = false;
                            lastBadgeFallback.prayer = kn;
                            var rs = parseDurationTextToSecs(km[2] || kTxt);
                            if (rs >= 0) lastBadgeFallback.remSecs = rs;
                        }
                    }
                }
                kid.classList.add("tv-hide-overlay");
            }
        }

        var navEl = document.querySelector(".app-navbar");
        if (navEl) {
            var navNodes = navEl.querySelectorAll("div, span, a, button, p");
            for (var n = 0; n < navNodes.length; n++) {
                var nel = navNodes[n];
                if (nel.classList.contains("tv-hide-overlay")) continue;
                var nTxt = (nel.textContent || "").replace(/\s+/g, " ").trim();
                if (!nTxt || nTxt.length > 90) continue;
                var isPrayerPill =
                    /\bto\s+(fajr|dhuhr|zuhr|zohr|asr|maghrib|magrib|isha|esha|sunrise|shuruq)\b/i.test(nTxt) ||
                    /(?:fajr|dhuhr|zuhr|asr|maghrib|magrib|isha|sunrise|shuruq)\s*adhan\s*time/i.test(nTxt) ||
                    /^to\s+\d+\s*(?:mins?|hrs?|m|h)/i.test(nTxt) ||
                    /makroo|makruh|forbidden\s*time/i.test(nTxt);
                if (isPrayerPill) {
                    var targetHide = nel;
                    while (targetHide.parentElement && targetHide.parentElement !== navEl) {
                        var pTxt = (targetHide.parentElement.textContent || "").replace(/\s+/g, " ").trim();
                        if (pTxt === nTxt) targetHide = targetHide.parentElement;
                        else break;
                    }
                    if (/makroo|makruh|forbidden/i.test(nTxt)) {
                        lastBadgeFallback.isForbidden = true;
                        var nd = parseDurationTextToSecs(nTxt);
                        if (nd >= 0) lastBadgeFallback.remSecs = nd;
                    }
                    targetHide.classList.add("tv-hide-overlay");
                }
            }
        }

        var drawerLine = document.getElementById("drawerPrayerDetailsLine");
        if (drawerLine) {
            var dlTxt = (drawerLine.textContent || "").replace(/\s+/g, " ").trim();
            if (/makroo|makruh|forbidden|prohibited/i.test(dlTxt)) {
                lastBadgeFallback.isForbidden = true;
                var dls = parseDurationTextToSecs(dlTxt);
                if (dls >= 0) lastBadgeFallback.remSecs = dls;
            }
        }

        var nextEl = document.getElementById("tvNextNamazLabel");
        var remEl = document.getElementById("tvRemainingNamazLabel");
        if (!nextEl || !remEl) return;

        var sched = readPrayerSchedule();
        var info = computeNamazStatusFromSchedule(sched);

        if (lastBadgeFallback.isForbidden && !info.isForbidden && lastBadgeFallback.remSecs >= 0) {
            info = { isForbidden: true, remSecs: lastBadgeFallback.remSecs };
        }

        if (info.isForbidden) {
            nextEl.classList.add("tv-nmz-forbidden");
            nextEl.textContent = "Forbidden Time";
            remEl.textContent = "Remaining " + formatRemainingHuman(info.remSecs);
        } else {
            nextEl.classList.remove("tv-nmz-forbidden");
            nextEl.textContent = "Next Namaaz: " + info.prayer + (info.timeStr ? (" (" + info.timeStr + ")") : "");
            remEl.textContent = "Remaining " + formatRemainingHuman(info.remSecs);
        }
    }

    // ------------------------------------------
    // 4. SHAJARA & AWRAAD SECTION MODE + APPLE PAGE MODE
    // ------------------------------------------
    var bookState = {
        enabled: false,
        sectionMode: false,
        pausedForScroll: false,
        pageIndex: 0,
        totalPages: 1,
        pageWidth: 0,
        stride: 0,
        dirSign: 1,
        currentTx: 0,
        gap: 32
    };

    var TOP_MODAL_SELECTORS = [
        "#colorPaletteModal",
        "#hijriStepperModal",
        "#resetAllConfirmModal",
        ".pt-submodal",
        "#navWarningModal",
        "#settingsModal",
        "#tasbeehModal",
        "#prayerTimesModal",
        "#eventsModal",
        "#bookmarksModal",
        "#quickSearchModal"
    ];

    function isModalVisible(el) {
        if (!el) return false;
        if (el.id === "tasbeehModal" && el.classList.contains("tasbeeh-compact")) return false;
        var st = window.getComputedStyle(el);
        return st.display !== "none" && st.visibility !== "hidden" && parseFloat(st.opacity || "1") > 0;
    }

    function isAnyModalOpen() {
        for (var i = 0; i < TOP_MODAL_SELECTORS.length; i++) {
            var els = document.querySelectorAll(TOP_MODAL_SELECTORS[i]);
            for (var j = 0; j < els.length; j++) {
                if (isModalVisible(els[j])) return true;
            }
        }
        return false;
    }

    function getOutermostModalScope(active) {
        if (active && active.closest) {
            for (var i = 0; i < TOP_MODAL_SELECTORS.length; i++) {
                var m = active.closest(TOP_MODAL_SELECTORS[i]);
                if (m && isModalVisible(m)) return m;
            }
            var dlg = active.closest("[role='dialog']");
            if (dlg && isModalVisible(dlg)) return dlg;
        }
        for (var k = 0; k < TOP_MODAL_SELECTORS.length; k++) {
            var openEl = document.querySelector(TOP_MODAL_SELECTORS[k]);
            if (openEl && isModalVisible(openEl)) return openEl;
        }
        return document;
    }

    function isVisibleFocusable(node) {
        if (!node || node.disabled || !node.isConnected) return false;
        if (node.closest && node.closest(".tv-hide-overlay, .tv-hide-nav-cards, #awraadSideDrawer")) return false;
        if (bookState.sectionMode && node.closest) {
            var sec = node.closest(".shijra-section");
            if (sec && !sec.classList.contains("tv-active-section")) return false;
        }
        var st = window.getComputedStyle(node);
        var r = node.getBoundingClientRect();
        return node.offsetParent !== null && st.visibility !== "hidden" && st.display !== "none" && r.width > 0 && r.height > 0 && r.left > -1000 && r.top > -1000;
    }

    // Top-Right Controls inside .app-navbar (Search, Dark Mode, Bookmark, etc.) ordered strictly Left -> Right visually
    function enhanceNavbarControls() {
        var nav = document.querySelector(".app-navbar");
        if (!nav) return [];
        var raw = Array.from(nav.querySelectorAll("button, a[href], [onclick], [role='button']"));
        var valid = [];
        for (var i = 0; i < raw.length; i++) {
            var el = raw[i];
            if (el.id === "openDrawerBtn" || el.closest(".tv-hide-overlay") || el.classList.contains("tv-hide-overlay")) continue;
            if (!isVisibleFocusable(el)) continue;
            el.classList.add("tv-nav-ctrl");
            if (!el.hasAttribute("tabindex") || el.getAttribute("tabindex") === "-1") {
                el.setAttribute("tabindex", "0");
            }
            valid.push(el);
        }
        valid.sort(function(a, b) {
            return a.getBoundingClientRect().left - b.getBoundingClientRect().left;
        });
        return valid;
    }

    function focusFirstNavbarControl() {
        var ctrls = enhanceNavbarControls();
        if (ctrls.length > 0) {
            ctrls[0].focus({ preventScroll: true });
            return true;
        }
        return false;
    }

    // Save current page state BEFORE moving focus to Menu Bar or Top-Right Controls
    function savePagePosition(currentFocusEl) {
        var frame = document.querySelector(".continuous-frame");
        if (frame && bookState.sectionMode) {
            tvNavState.savedScrollTop = frame.scrollTop;
        } else {
            tvNavState.savedScrollTop = window.scrollY || 0;
        }
        var activeSec = document.querySelector(".shijra-section.tv-active-section");
        if (activeSec && activeSec.id) {
            tvNavState.savedSectionId = activeSec.id;
        }
        if (currentFocusEl && !currentFocusEl.closest("#tvCompactSidebar, #tvStartMenuWrap, .app-navbar, #tvBottomBar")) {
            tvNavState.lastPageFocusEl = currentFocusEl;
        }
    }

    // Scroll current page vertically without moving focus off Timer or into Menu Bar
    function scrollCurrentPage(dir) {
        var delta = dir > 0 ? 220 : -220;
        var frame = document.querySelector(".continuous-frame");
        if (frame && (bookState.sectionMode || frame.scrollHeight > frame.clientHeight + 8)) {
            frame.scrollBy({ top: delta, behavior: "smooth" });
            setTimeout(function() { tvNavState.savedScrollTop = frame.scrollTop; }, 160);
        } else {
            window.scrollBy({ top: delta, behavior: "smooth" });
            setTimeout(function() { tvNavState.savedScrollTop = window.scrollY || 0; }, 160);
        }
    }

    // Return focus to Current Page WITHOUT resetting Shajara to start or changing active section!
    function returnFocusToCurrentPage() {
        closeStartMenu(false);

        if (document.body.classList.contains("tv-home-splash")) {
            var splashBtn = document.getElementById("tvSplashStartBtn");
            if (splashBtn && isVisibleFocusable(splashBtn)) {
                splashBtn.focus({ preventScroll: true });
                return true;
            }
            var mainBtn = document.getElementById("tvSbMainMenu");
            if (mainBtn) mainBtn.focus({ preventScroll: true });
            return false;
        }

        // 1. Restore active Shajara/Awraad section + exact previous scroll position (NEVER reset to top!)
        if (bookState.sectionMode) {
            var frame = document.querySelector(".continuous-frame");
            if (tvNavState.savedSectionId) {
                var savedSec = document.getElementById(tvNavState.savedSectionId);
                if (savedSec && savedSec.classList.contains("shijra-section") && !savedSec.classList.contains("tv-active-section")) {
                    document.querySelectorAll(".shijra-section").forEach(function(s) {
                        var match = (s === savedSec);
                        s.classList.toggle("tv-active-section", match);
                        s.classList.toggle("active", match);
                    });
                }
            }
            if (frame && typeof tvNavState.savedScrollTop === "number") {
                frame.scrollTop = tvNavState.savedScrollTop;
            }

            // Focus last page element (e.g. Timer Reset/Start/Min/Sec) WITHOUT scrolling it out of saved position
            if (tvNavState.lastPageFocusEl && isVisibleFocusable(tvNavState.lastPageFocusEl)) {
                tvNavState.lastPageFocusEl.focus({ preventScroll: true });
                return true;
            }

            // Otherwise focus first Timer Reset button in active section, or .continuous-frame itself
            var activeSec = document.querySelector(".shijra-section.tv-active-section");
            if (activeSec) {
                var card = activeSec.querySelector(".timer-card");
                if (card) {
                    var ordered = getOrderedTimerControls(card);
                    if (ordered.length > 0) {
                        ordered[0].focus({ preventScroll: true });
                        tvNavState.lastPageFocusEl = ordered[0];
                        return true;
                    }
                }
            }

            if (frame) {
                if (!frame.hasAttribute("tabindex")) frame.setAttribute("tabindex", "-1");
                frame.focus({ preventScroll: true });
                return true;
            }
        }

        // 2. Apple Page Mode (Dalail, Bashair, Usboo, Daily, Duas)
        if (bookState.enabled && !bookState.sectionMode) {
            var vp = document.getElementById("tvBookViewport");
            if (vp) {
                vp.focus({ preventScroll: true });
                return true;
            }
        }

        // 3. Fallback scrollable frame
        var fallbackFrame = document.querySelector(".continuous-frame") || document.body;
        if (fallbackFrame) {
            if (!fallbackFrame.hasAttribute("tabindex")) fallbackFrame.setAttribute("tabindex", "-1");
            fallbackFrame.focus({ preventScroll: true });
            return true;
        }
        return false;
    }

    function focusMenuBar(fromEl) {
        savePagePosition(fromEl || document.activeElement);
        var btn = (tvNavState.savedSidebarBtn && isVisibleFocusable(tvNavState.savedSidebarBtn))
            ? tvNavState.savedSidebarBtn
            : document.getElementById("tvSbMainMenu");
        if (btn) {
            btn.focus({ preventScroll: true });
            return true;
        }
        return false;
    }

    function activateShajaraOrAwraadSection(resetScroll) {
        if (!isShajaraMultiSectionPage()) return false;

        bookState.sectionMode = true;
        bookState.enabled = false;
        document.body.classList.add("tv-section-mode");
        document.body.classList.remove("tv-book-active");

        var rawHash = "";
        try { rawHash = decodeURIComponent((window.location.hash || "").replace(/^#/, "")); } catch (e) { rawHash = (window.location.hash || "").replace(/^#/, ""); }

        var targetSec = rawHash ? document.getElementById(rawHash) : null;
        if (targetSec && !targetSec.classList.contains("shijra-section")) {
            targetSec = targetSec.closest(".shijra-section") || targetSec;
        }

        if (!targetSec || targetSec.id === "index-menu" || targetSec.id === "top" || !targetSec.classList.contains("shijra-section")) {
            targetSec = document.getElementById("qadriya") || document.querySelector(".shijra-section:not(#index-menu)");
        }

        var prevSecId = tvNavState.savedSectionId;
        var changedSection = !!(targetSec && targetSec.id && targetSec.id !== prevSecId);

        if (targetSec) {
            document.querySelectorAll(".shijra-section").forEach(function(sec) {
                var isTarget = (sec === targetSec);
                sec.classList.toggle("tv-active-section", isTarget);
                sec.classList.toggle("active", isTarget);
            });
            tvNavState.savedSectionId = targetSec.id || "";
        }

        if (resetScroll || changedSection) {
            var frame = document.querySelector(".continuous-frame");
            if (frame) {
                frame.scrollTop = 0;
                if (!frame.hasAttribute("tabindex")) frame.setAttribute("tabindex", "-1");
            }
            window.scrollTo(0, 0);
            tvNavState.savedScrollTop = 0;
            tvNavState.lastPageFocusEl = null;
        }

        enhanceTimerAndNumericInputs(targetSec || document);
        enhanceTimerCardsOrder(targetSec || document);
        return true;
    }

    function updatePageBarUI() {
        var counter = document.getElementById("tvPageCounter");
        var leftBtn = document.getElementById("tvPgLeftBtn");
        var rightBtn = document.getElementById("tvPgRightBtn");
        if (!counter) return;

        counter.textContent = "Page " + (bookState.pageIndex + 1) + " / " + bookState.totalPages;
        var nextLeft = bookState.pageIndex + bookState.dirSign;
        var nextRight = bookState.pageIndex - bookState.dirSign;
        if (leftBtn) leftBtn.disabled = (nextLeft < 0 || nextLeft >= bookState.totalPages);
        if (rightBtn) rightBtn.disabled = (nextRight < 0 || nextRight >= bookState.totalPages);
    }

    function applyPageTransform(instant) {
        if (bookState.sectionMode) return;
        var track = document.getElementById("tvBookTrack");
        var vp = document.getElementById("tvBookViewport");
        if (!track || !vp) return;

        bookState.currentTx = bookState.pageIndex * bookState.stride * bookState.dirSign;
        if (instant) track.style.transition = "none";
        track.style.transform = "translateX(" + bookState.currentTx + "px)";
        if (instant) {
            track.offsetHeight;
            track.style.transition = "";
        }
        if (vp.scrollLeft !== 0) vp.scrollLeft = 0;
        if (vp.scrollTop !== 0) vp.scrollTop = 0;
        updatePageBarUI();
    }

    function goToPage(idx, instant) {
        if (!bookState.enabled || bookState.sectionMode || bookState.pausedForScroll || document.body.classList.contains("tv-home-splash")) return;
        var clamped = Math.max(0, Math.min(bookState.totalPages - 1, idx));
        bookState.pageIndex = clamped;
        applyPageTransform(!!instant);
    }

    function turnPageByDirection(side) {
        if (!bookState.enabled || bookState.sectionMode || bookState.pausedForScroll || document.body.classList.contains("tv-home-splash")) return false;
        var target = side === "left"
            ? bookState.pageIndex + bookState.dirSign
            : bookState.pageIndex - bookState.dirSign;
        if (target < 0 || target >= bookState.totalPages) return false;
        goToPage(target, false);
        return true;
    }

    function getElementStartPageIndex(el) {
        var vp = document.getElementById("tvBookViewport");
        if (!vp || !el || !bookState.stride) return 0;
        var vpRect = vp.getBoundingClientRect();
        var vpCenter = (vpRect.left + vpRect.right) / 2;

        var probe = el.querySelector("h1, h2, h3, .section-heading, .title-box, p") || el;
        var rects = probe.getClientRects ? Array.from(probe.getClientRects()) : [];
        var validRects = rects.filter(function(r) { return r.width > 0 && r.height > 0; });
        if (validRects.length === 0) {
            var br = probe.getBoundingClientRect();
            if (br.width > 0 || br.height > 0) validRects = [br];
        }
        if (validRects.length === 0) return 0;

        var minCol = Infinity;
        for (var i = 0; i < validRects.length; i++) {
            var r = validRects[i];
            var rawCenter = (r.left + r.right) / 2 - bookState.currentTx;
            var col = Math.round(Math.abs(rawCenter - vpCenter) / bookState.stride);
            if (col < minCol) minCol = col;
        }
        if (!isFinite(minCol)) return 0;
        return Math.max(0, Math.min(bookState.totalPages - 1, minCol));
    }

    function jumpToHashIfPresent(instant) {
        if (!bookState.enabled || bookState.sectionMode || bookState.pausedForScroll || document.body.classList.contains("tv-home-splash")) return;
        var rawHash = "";
        try { rawHash = decodeURIComponent((window.location.hash || "").replace(/^#/, "")); } catch (e) { rawHash = (window.location.hash || "").replace(/^#/, ""); }
        if (!rawHash) {
            goToPage(0, !!instant);
            return;
        }
        var target = document.getElementById(rawHash);
        var track = document.getElementById("tvBookTrack");
        if (target && track && track.contains(target)) {
            goToPage(getElementStartPageIndex(target), !!instant);
        } else {
            goToPage(0, !!instant);
        }
    }

    function recalcBookPages(instant) {
        if (!bookState.enabled || bookState.sectionMode || bookState.pausedForScroll || document.body.classList.contains("tv-home-splash")) return;
        var frame = document.querySelector(".continuous-frame");
        var vp = document.getElementById("tvBookViewport");
        var track = document.getElementById("tvBookTrack");
        var sentinel = document.getElementById("tvBookEndSentinel");
        if (!frame || !vp || !track || !sentinel) return;

        var nav = document.querySelector(".app-navbar");
        var navH = nav ? Math.ceil(nav.getBoundingClientRect().height) : 54;
        var barH = 42;
        var frameH = Math.max(260, window.innerHeight - navH - barH - 12);
        frame.style.setProperty("--tv-frame-h", frameH + "px");

        var vpW = Math.floor(vp.clientWidth);
        var vpH = Math.floor(vp.clientHeight);
        if (vpW < 100 || vpH < 100) return;

        bookState.pageWidth = vpW;
        bookState.stride = vpW + bookState.gap;
        track.style.setProperty("--tv-page-w", vpW + "px");
        track.style.setProperty("--tv-page-h", vpH + "px");

        var vpRect = vp.getBoundingClientRect();
        var vpCenter = (vpRect.left + vpRect.right) / 2;
        var maxCol = 0;
        var detectedSign = 0;

        function sampleElement(el) {
            if (!el || !el.getBoundingClientRect) return;
            var r = el.getBoundingClientRect();
            if (r.width <= 0 && r.height <= 0) return;
            var rawCenter = (r.left + r.right) / 2 - bookState.currentTx;
            var delta = rawCenter - vpCenter;
            if (Math.abs(delta) > bookState.stride * 0.35 && detectedSign === 0) {
                detectedSign = delta < 0 ? 1 : -1;
            }
            var col = Math.round(Math.abs(delta) / bookState.stride);
            if (col > maxCol) maxCol = col;
        }

        sampleElement(sentinel);
        var children = track.children;
        for (var i = Math.max(0, children.length - 8); i < children.length; i++) {
            sampleElement(children[i]);
        }

        if (detectedSign !== 0) bookState.dirSign = detectedSign;
        bookState.totalPages = Math.max(1, maxCol + 1);
        if (bookState.pageIndex >= bookState.totalPages) {
            bookState.pageIndex = bookState.totalPages - 1;
        }
        applyPageTransform(!!instant);
    }

    var recalcTimer = null;
    function scheduleBookRecalc(instant) {
        if (recalcTimer) clearTimeout(recalcTimer);
        recalcTimer = setTimeout(function() {
            updateNavbarHeightVar();
            recalcBookPages(!!instant);
        }, 90);
    }

    function initContentReaderMode() {
        if (document.body.classList.contains("tv-home-splash")) return;

        // A. Shajara_e_Alaviyya.html -> Section Reader Mode
        if (isShajaraMultiSectionPage()) {
            activateShajaraOrAwraadSection(true);
            setTimeout(function() {
                // Only keep scroll at top during initial boot load (never override user scrolling later)
                if (tvNavState.savedScrollTop === 0) {
                    activateShajaraOrAwraadSection(false);
                    var frameInit = document.querySelector(".continuous-frame");
                    if (frameInit) frameInit.scrollTop = 0;
                }
                var activeSec = document.querySelector(".shijra-section.tv-active-section");
                if (activeSec && (!document.activeElement || document.activeElement === document.body)) {
                    var card = activeSec.querySelector(".timer-card");
                    if (card) {
                        var ordered = getOrderedTimerControls(card);
                        if (ordered.length > 0) {
                            ordered[0].focus({ preventScroll: true });
                            tvNavState.lastPageFocusEl = ordered[0];
                            return;
                        }
                    }
                    var frameEl = document.querySelector(".continuous-frame");
                    if (frameEl) {
                        if (!frameEl.hasAttribute("tabindex")) frameEl.setAttribute("tabindex", "-1");
                        frameEl.focus({ preventScroll: true });
                    }
                }
            }, 340);
            return;
        }

        // B. All other reading pages -> Apple Page Mode
        var frame = document.querySelector(".continuous-frame");
        if (!frame) return;

        var vp = document.getElementById("tvBookViewport");
        if (!vp) {
            vp = document.createElement("div");
            vp.id = "tvBookViewport";
            vp.setAttribute("tabindex", "0");

            var track = document.createElement("div");
            track.id = "tvBookTrack";

            var existingChildren = Array.from(frame.childNodes);
            existingChildren.forEach(function(node) {
                if (node.nodeType === 1) {
                    var cls = (node.className || "").toString();
                    var st = window.getComputedStyle(node);
                    if (st.position === "fixed" || /modal|drawer|navbar/i.test(cls)) return;
                }
                track.appendChild(node);
            });

            var sentinel = document.createElement("div");
            sentinel.id = "tvBookEndSentinel";
            track.appendChild(sentinel);

            vp.appendChild(track);
            frame.appendChild(vp);

            vp.addEventListener("scroll", function() {
                if (vp.scrollLeft !== 0) vp.scrollLeft = 0;
                if (vp.scrollTop !== 0) vp.scrollTop = 0;
            });
        }

        ensureBottomBar();
        bookState.enabled = true;
        bookState.sectionMode = false;
        if (!bookState.pausedForScroll) {
            document.body.classList.add("tv-book-active");
            document.body.classList.remove("tv-scroll-unlocked");
        }

        recalcBookPages(true);
        jumpToHashIfPresent(true);
        setTimeout(function() {
            recalcBookPages(true);
            jumpToHashIfPresent(true);
            var vpEl = document.getElementById("tvBookViewport");
            if (vpEl && (!document.activeElement || document.activeElement === document.body)) {
                vpEl.focus({ preventScroll: true });
            }
        }, 420);

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function() {
                recalcBookPages(true);
                jumpToHashIfPresent(true);
            });
        }
    }

    function toggleBookModeForScroll() {
        if (!bookState.enabled || bookState.sectionMode || document.body.classList.contains("tv-home-splash")) return;
        bookState.pausedForScroll = !bookState.pausedForScroll;
        document.body.classList.toggle("tv-book-active", !bookState.pausedForScroll);
        document.body.classList.toggle("tv-scroll-unlocked", bookState.pausedForScroll);
        var track = document.getElementById("tvBookTrack");
        if (bookState.pausedForScroll) {
            if (track) track.style.transform = "none";
        } else {
            scheduleBookRecalc(true);
        }
    }

    window.addEventListener("resize", function() { scheduleBookRecalc(true); });
    window.addEventListener("hashchange", function() {
        setTimeout(function() {
            ensureGreenSplashScreen();
            if (!document.body.classList.contains("tv-home-splash")) {
                if (isShajaraMultiSectionPage()) {
                    activateShajaraOrAwraadSection(true);
                    var activeSec = document.querySelector(".shijra-section.tv-active-section");
                    var card = activeSec ? activeSec.querySelector(".timer-card") : null;
                    if (card) {
                        var ordered = getOrderedTimerControls(card);
                        if (ordered.length > 0) {
                            ordered[0].focus({ preventScroll: true });
                            tvNavState.lastPageFocusEl = ordered[0];
                        }
                    }
                } else {
                    initContentReaderMode();
                    jumpToHashIfPresent(false);
                }
            }
        }, 50);
    });

    // ------------------------------------------
    // 5. PURE ENGLISH NAMING + UNIFIED START MENU + ENGLISH SEARCH
    // ------------------------------------------
    var ENGLISH_LINK_RULES = [
        { rx: /#qadriya|qadr|qadir|قادري|قادری/i, title: "Silsila e Qadria", sub: "Qadiri Spiritual Lineage" },
        { rx: /#chishtiyya|chisht|چشت/i, title: "Silsila e Chishtiya", sub: "Chishti Spiritual Lineage" },
        { rx: /#akbariya|akbar|uwais|owais|اکبر|اویس/i, title: "Silsila e Akbariya", sub: "Akbari Uwaisi Lineage" },
        { rx: /#rozana|rozana|روزانہ|روزمرہ/i, title: "Rozana Awraad", sub: "Daily Litanies & Practices" },
        { rx: /#fajr-maghrib|fajr.*maghrib|maghrib.*fajr|فجر.*مغرب|مغرب.*فجر/i, title: "Fajr & Maghrib Adhkar", sub: "Post-Fajr & Maghrib Litanies" },
        { rx: /#har-namaz|har\s*nama?az|ہر\s*نماز|پانچوں\s*نماز/i, title: "Har Namaaz Adhkar", sub: "After Every Obligatory Prayer" },
        { rx: /#haftawari|hafta?wari|ہفت(?:ہ)?\s*واری|اعمال.*ہفت/i, title: "Haftwari Amaal", sub: "Weekly Litanies & Practices" },
        { rx: /#main-intro|ibtida|تعارف|ابتدائی/i, title: "Introduction (Taaruf)", sub: "Opening Words & Introduction" },
        { rx: /#fazeelat-tareeqa|شجرہ\s*پڑھنے\s*کا\s*طریقہ/i, title: "Method & Virtues of Shajara", sub: "How to Recite Shajara e Alaviyya" },
        { rx: /#asnaad|asnad|اسناد/i, title: "Asnad of Dalail ul Khairat", sub: "Chains of Transmission" },
        { rx: /#irshadaat|irshad|mureed|ارشادات|مرید/i, title: "Irshadaat for Mureed", sub: "Instructions for Disciples" },
        { rx: /#khidmat|hidayat|murshid|ہدایات|مرشد/i, title: "Hidayat e Murshid", sub: "Guidance on Service & Company" },
        { rx: /#salaam|سلام/i, title: "Salaam", sub: "Salutations upon the Master" },
        { rx: /daily\.html/i, title: "Daily Schedule & Malfooz", sub: "Daily Awraad Schedule" },
        { rx: /bada.?dalail|bad.?dalail|آغاز\s*دلائل|بدء\s*دلائل/i, title: "Dua Bada Dalail ul Khairat", sub: "Opening Supplication of Dalail" },
        { rx: /iftitah|افتتاح/i, title: "Dua e Iftitah", sub: "Opening Supplication" },
        { rx: /asma.*husna|أسماء\s*الله|اسماء\s*الحسنی/i, title: "Asma ul Husna", sub: "99 Beautiful Names of Allah" },
        { rx: /asma.*nabi|أسماء\s*النبي|اسماء\s*النبی/i, title: "Asma un Nabi", sub: "Blessed Names of the Prophet" },
        { rx: /hizb8|الثامن|ہشتم/i, title: "Hizb 8 — Monday (Final)", sub: "Dalail ul Khairat (Completion)" },
        { rx: /hizb1|monday|ithnain|الأول|پیر|اول/i, title: "Hizb 1 — Monday", sub: "Dalail ul Khairat (Monday)" },
        { rx: /tuesday|thalatha|الثاني|منگل|دوم/i, title: "Hizb 2 — Tuesday", sub: "Dalail ul Khairat (Tuesday)" },
        { rx: /wednesday|arbia|الثالث|بدھ|سوم/i, title: "Hizb 3 — Wednesday", sub: "Dalail ul Khairat (Wednesday)" },
        { rx: /thursday|khamees|الرابع|جمعرات|چہارم/i, title: "Hizb 4 — Thursday", sub: "Dalail ul Khairat (Thursday)" },
        { rx: /friday|jumuah|الخامس|جمعہ|پنجم/i, title: "Hizb 5 — Friday", sub: "Dalail ul Khairat (Friday)" },
        { rx: /saturday|sabt|السادس|ہفتہ|ششم/i, title: "Hizb 6 — Saturday", sub: "Dalail ul Khairat (Saturday)" },
        { rx: /sunday|ahad|السابع|اتوار|ہفتم/i, title: "Hizb 7 — Sunday", sub: "Dalail ul Khairat (Sunday)" },
        { rx: /khatam|khitam|الختام|اختتام/i, title: "Dua e Khatam", sub: "Closing Supplication" },
        { rx: /fatiha|faatiha|الفاتحة|فاتحہ/i, title: "Tareeqa e Fatiha", sub: "Method of Reciting Al-Fatihah" },
        { rx: /yuqrau|aqeeb|عقب|بعد\s*الاوراد/i, title: "Dua After Awraad", sub: "Closing Prayer After Litanies" },
        { rx: /bashair|بشائر/i, title: "Bashair ul Khairat", sub: "Glad Tidings of Salawat" },
        { rx: /usboo|أسبوع/i, title: "Usboo e Shareef", sub: "Weekly Salawat & Adhkar" },
        { rx: /malfooz|ملفوظات/i, title: "Malfoozat e Bahrul Irfan", sub: "Spiritual Discourses" },
        { rx: /tajweed|تجوید|تجويد/i, title: "Tajweed Guide", sub: "Rules of Quranic Pronunciation" },
        { rx: /eesal|sawab|ایصال/i, title: "Eesal e Sawab", sub: "Method of Conveying Reward" },
        { rx: /shajara|shijra|شجرہ|شجرة/i, title: "Shajara e Alaviyya", sub: "Spiritual Lineage & Awraad" },
        { rx: /muqaddima|مقدم/i, title: "Muqaddima e Awraad", sub: "Introduction to the Litanies" }
    ];

    function humanizeHrefToEnglish(href) {
        var hashPart = (href || "").split("#")[1] || "";
        var clean = hashPart || ((href || "").split("#")[0].split("/").pop() || "");
        clean = clean.replace(/\.html$/i, "").replace(/_Locked/ig, "").replace(/[_-]+/g, " ").trim();
        if (!clean) return "Section";
        return clean.replace(/\b\w/g, function(ch) { return ch.toUpperCase(); });
    }

    function stripNonEnglish(str) {
        return (str || "")
            .replace(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g, " ")
            .replace(/[()\[\]—–|·•-]+\s*$/g, "")
            .replace(/^\s*[()\[\]—–|·•-]+/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }

    function toEnglishMenuLabels(rawTitle, rawSub, href) {
        var combined = (rawTitle + " " + rawSub + " " + href).trim();
        for (var i = 0; i < ENGLISH_LINK_RULES.length; i++) {
            if (ENGLISH_LINK_RULES[i].rx.test(combined)) {
                return { title: ENGLISH_LINK_RULES[i].title, sub: ENGLISH_LINK_RULES[i].sub };
            }
        }
        var enTitle = stripNonEnglish(rawTitle);
        var enSub = stripNonEnglish(rawSub);
        if (!enTitle) enTitle = humanizeHrefToEnglish(href);
        if (enSub && enSub.toLowerCase() === enTitle.toLowerCase()) enSub = "";
        return { title: enTitle, sub: enSub };
    }

    function enhanceQuickSearchModal() {
        var modal = document.getElementById("quickSearchModal");
        if (!modal || !isModalVisible(modal)) return;

        modal.querySelectorAll("h1, h2, h3, .ux-modal-title, [class*='title' i]").forEach(function(h) {
            if (h.closest("#quickSearchResults")) return;
            var txt = (h.textContent || "").trim();
            if (/[\u0600-\u06FF]/.test(txt)) {
                h.textContent = stripNonEnglish(txt) || "Quick Search";
            }
        });

        var qInp = document.getElementById("quickSearchInput");
        if (qInp && /[\u0600-\u06FF]/.test(qInp.getAttribute("placeholder") || "")) {
            qInp.setAttribute("placeholder", "Search sections, Awraad, Shajara, Dalail...");
        }

        var resultsBox = document.getElementById("quickSearchResults");
        if (resultsBox) {
            var rows = resultsBox.querySelectorAll("a[href], button, [onclick], [data-href], .ux-search-item, .search-result-item, li");
            rows.forEach(function(item) {
                if (item.querySelector("a[href], button")) return;
                if (item.dataset.tvSearchClean === "1" && !/[\u0600-\u06FF]/.test(item.textContent || "")) return;

                var rawHref = item.getAttribute("href") || item.getAttribute("data-href") || item.getAttribute("onclick") || "";
                var rawText = (item.innerText || item.textContent || "").replace(/\s+/g, " ").trim();
                if (!rawText) return;

                var en = toEnglishMenuLabels(rawText, "", rawHref);
                item.classList.add("tv-search-row", "tv-focus-ctrl");
                item.setAttribute("tabindex", "0");
                item.dataset.tvSearchClean = "1";

                item.innerHTML =
                    '<span class="tv-sm-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></span>' +
                    '<span class="tv-sm-text">' +
                        '<span class="tv-sm-title"></span>' +
                        (en.sub ? '<span class="tv-sm-sub"></span>' : '') +
                    '</span>' +
                    '<span class="tv-sm-arrow">›</span>';

                var tNode = item.querySelector(".tv-sm-title");
                if (tNode) tNode.textContent = en.title;
                var sNode = item.querySelector(".tv-sm-sub");
                if (sNode && en.sub) sNode.textContent = en.sub;
            });

            resultsBox.querySelectorAll("h4, h5, .search-category, .ux-search-group, .ux-group-title").forEach(function(gh) {
                if (gh.closest(".tv-search-row")) return;
                var gt = (gh.textContent || "").trim();
                if (/[\u0600-\u06FF]/.test(gt)) {
                    var enG = toEnglishMenuLabels(gt, "", "");
                    gh.textContent = enG.title || stripNonEnglish(gt) || "Results";
                }
            });
        }

        if (modal.dataset.tvSearchObs !== "1") {
            modal.dataset.tvSearchObs = "1";
            var obsTarget = resultsBox || modal;
            var sObs = new MutationObserver(function() {
                setTimeout(enhanceQuickSearchModal, 30);
            });
            sObs.observe(obsTarget, { childList: true, subtree: true });
            modal.addEventListener("input", function() {
                setTimeout(enhanceQuickSearchModal, 45);
            }, true);
        }
    }

    var startMenuState = {
        open: false,
        mode: "",
        triggerBtn: null,
        col2Items: [],
        col2ActiveIdx: -1,
        col3Items: [],
        hoverTimer: null
    };

    var CATEGORY_ICONS = {
        shajara: '<path d="M12 3v18"/><path d="M12 8c-3 0-5-1.5-6-3.5"/><path d="M12 12c3 0 5-1.5 6-3.5"/><path d="M12 16c-3 0-5-1.5-6-3.5"/>',
        awraad: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13z"/><path d="M8 7h8M8 11h8M8 15h5"/>',
        intro: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l2.5 2.5"/>',
        dalail: '<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.7 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
        bashair: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
        guide: '<path d="M5 4h11a2 2 0 0 1 2 2v13H7a2 2 0 0 1-2-2V4z"/><path d="M9 9h6M9 13h4"/>',
        more: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
        home: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'
    };

    function normalizeHrefForCache(rawHref) {
        var href = (rawHref || "").trim();
        if (!href || href === "#" || href.indexOf("javascript:") === 0) return "";
        if (href.indexOf("#") === 0) {
            var fname = (window.location.pathname || "").split("/").pop() || "index.html";
            if (fname.indexOf(".html") === -1) fname = "index.html";
            return "./" + fname + href;
        }
        return href;
    }

    function navigateToHref(href) {
        if (!href) return;
        closeStartMenu(false);

        var curFile = ((window.location.pathname || "").split("/").pop() || "index.html").toLowerCase();
        if (curFile.indexOf(".html") === -1) curFile = "index.html";
        var hashIdx = href.indexOf("#");
        var targetPath = (hashIdx === -1 ? href : href.slice(0, hashIdx)).replace(/^\.\//, "").toLowerCase();
        var targetHash = hashIdx === -1 ? "" : href.slice(hashIdx);

        if ((!targetPath || targetPath === curFile) && targetHash) {
            if (isIndexPage() && targetHash.toLowerCase() !== "#main-menu") {
                document.body.classList.remove("tv-home-splash");
            }
            window.location.hash = targetHash;
            setTimeout(function() {
                if (isShajaraMultiSectionPage()) {
                    activateShajaraOrAwraadSection(true);
                    var activeSec = document.querySelector(".shijra-section.tv-active-section");
                    var card = activeSec ? activeSec.querySelector(".timer-card") : null;
                    if (card) {
                        var ordered = getOrderedTimerControls(card);
                        if (ordered.length > 0) {
                            ordered[0].focus({ preventScroll: true });
                            tvNavState.lastPageFocusEl = ordered[0];
                        }
                    }
                } else {
                    initContentReaderMode();
                    jumpToHashIfPresent(false);
                }
            }, 50);
            return;
        }
        window.location.href = href;
    }

    function extractLinkInfo(a) {
        var rawText = (a.innerText || a.textContent || "").replace(/\s+/g, " ").trim();
        var href = normalizeHrefForCache(a.getAttribute("href") || "");
        var en = toEnglishMenuLabels(rawText, "", href);
        return { title: en.title, sub: en.sub, href: href };
    }

    var SHAJARA_ITEMS = [
        { title: "Silsila e Qadria", sub: "Qadiri Spiritual Lineage", href: "./Shajara_e_Alaviyya.html#qadriya" },
        { title: "Silsila e Chishtiya", sub: "Chishti Spiritual Lineage", href: "./Shajara_e_Alaviyya.html#chishtiyya" },
        { title: "Silsila e Akbariya", sub: "Akbari Uwaisi Lineage", href: "./Shajara_e_Alaviyya.html#akbariya" }
    ];

    var AWRAAD_ITEMS = [
        { title: "Rozana", sub: "Daily Awraad & Litanies", href: "./Shajara_e_Alaviyya.html#rozana" },
        { title: "Fajr / Maghrib", sub: "Post-Fajr & Maghrib Adhkar", href: "./Shajara_e_Alaviyya.html#fajr-maghrib" },
        { title: "Har Namaaz", sub: "After Every Obligatory Prayer", href: "./Shajara_e_Alaviyya.html#har-namaz" },
        { title: "Haftwari", sub: "Weekly Litanies & Practices", href: "./Shajara_e_Alaviyya.html#haftawari" }
    ];

    function collectLinksFromEl(container) {
        if (!container) return [];
        var list = [];
        var seen = new Set();
        container.querySelectorAll("a[href]").forEach(function(a) {
            if (a.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvBottomBar, #tvHomeSplash")) return;
            var rawTxt = (a.textContent || "").trim();
            if (/الرجوع|فهرس|back\s*to\s*index/i.test(rawTxt)) return;
            var info = extractLinkInfo(a);
            if (!info.href || !info.title) return;
            if (/index\.html(?:#main-menu)?$/i.test(info.href)) return;
            var key = info.href.replace(/^\.\//, "").toLowerCase();
            if (seen.has(key)) return;
            seen.add(key);
            list.push(info);
        });
        return list;
    }

    function buildFullStartMenuTree() {
        var subMenus = [
            { icon: "shajara", title: "Shajara", sub: "Shajara e Alaviyya", items: SHAJARA_ITEMS },
            { icon: "awraad", title: "Awraad", sub: "Daily & Periodic Litanies", items: AWRAAD_ITEMS }
        ];

        var knownSections = [
            { id: "menu-intro", icon: "intro", title: "Muqaddima e Awraad", sub: "Introduction & Etiquette", rx: /muqaddima|fatiha|ibtida|tajweed|intro|مقدم|فاتح|ابتدائی|تجوید/i },
            { id: "menu-dalail", icon: "dalail", title: "Dalail ul Khairat", sub: "Salawat & Daily Hizb", rx: /dalail|hizb|asma|دلائل|حزب|اسماء/i },
            { id: "menu-bashair", icon: "bashair", title: "Bashair ul Khairat", sub: "Glad Tidings of Salawat", rx: /bashair|بشائر/i }
        ];

        var drawer = document.getElementById("awraadSideDrawer");
        var capturedIds = { "menu-shijara": true };
        var capturedHrefs = new Set();

        subMenus.forEach(function(sm) {
            sm.items.forEach(function(it) {
                if (it.href) capturedHrefs.add(it.href.replace(/^\.\//, "").toLowerCase());
            });
        });

        knownSections.forEach(function(sec) {
            capturedIds[sec.id] = true;
            var el = document.getElementById(sec.id);
            var items = collectLinksFromEl(el).filter(function(it) {
                return !capturedHrefs.has(it.href.replace(/^\.\//, "").toLowerCase());
            });
            if (items.length === 0 && drawer) {
                items = collectLinksFromEl(drawer).filter(function(it) {
                    return !capturedHrefs.has(it.href.replace(/^\.\//, "").toLowerCase()) && sec.rx.test(it.title + " " + it.sub + " " + it.href);
                });
            }
            if (items.length > 0) {
                items.forEach(function(it) { capturedHrefs.add(it.href.replace(/^\.\//, "").toLowerCase()); });
                subMenus.push({ icon: sec.icon, title: sec.title, sub: sec.sub, items: items });
            }
        });

        var shijaraSec = document.getElementById("menu-shijara");
        var extraShajara = collectLinksFromEl(shijaraSec).filter(function(it) {
            return !capturedHrefs.has(it.href.replace(/^\.\//, "").toLowerCase());
        });
        if (extraShajara.length > 0) {
            extraShajara.forEach(function(it) { capturedHrefs.add(it.href.replace(/^\.\//, "").toLowerCase()); });
            subMenus.push({ icon: "guide", title: "Irshadaat & Guide", sub: "Spiritual Guidance", items: extraShajara });
        }

        document.querySelectorAll(".index-section").forEach(function(secEl) {
            if (secEl.id && capturedIds[secEl.id]) return;
            var items = collectLinksFromEl(secEl).filter(function(it) {
                return !capturedHrefs.has(it.href.replace(/^\.\//, "").toLowerCase());
            });
            if (items.length === 0) return;
            var head = secEl.querySelector(".section-heading, h2, h3, .title-main");
            var rawLabel = head ? (head.textContent || "").replace(/\s+/g, " ").trim() : "";
            var enHead = toEnglishMenuLabels(rawLabel, "", items[0].href);
            items.forEach(function(it) { capturedHrefs.add(it.href.replace(/^\.\//, "").toLowerCase()); });
            subMenus.push({ icon: "more", title: enHead.title || "More Sections", sub: enHead.sub || "Additional Litanies", items: items });
        });

        if (drawer) {
            var extras = collectLinksFromEl(drawer).filter(function(it) {
                return !capturedHrefs.has(it.href.replace(/^\.\//, "").toLowerCase()) && /\.html/i.test(it.href);
            });
            if (extras.length > 0) {
                subMenus.push({ icon: "more", title: "More Pages", sub: "Additional Sections", items: extras });
            }
        }

        try {
            if (isIndexPage() && subMenus.length >= 3) {
                localStorage.setItem("awraad_tv_start_menu_en_v6", JSON.stringify(subMenus));
            } else if (subMenus.length <= 2) {
                var cached = JSON.parse(localStorage.getItem("awraad_tv_start_menu_en_v6") || "null");
                if (Array.isArray(cached) && cached.length > subMenus.length) {
                    subMenus = cached;
                }
            }
        } catch (e) {}

        if (!isIndexPage()) {
            subMenus = subMenus.concat([
                { icon: "home", title: "Home Screen", sub: "Return to Splash Screen", href: "./index.html", isDirect: true, sepBefore: true }
            ]);
        }

        return subMenus;
    }

    function ensureStartMenuDOM() {
        var wrap = document.getElementById("tvStartMenuWrap");
        if (wrap) return wrap;

        var backdrop = document.createElement("div");
        backdrop.id = "tvStartMenuBackdrop";
        backdrop.className = "print-none";
        backdrop.addEventListener("click", function() { closeStartMenu(true); });
        document.body.appendChild(backdrop);

        wrap = document.createElement("div");
        wrap.id = "tvStartMenuWrap";
        wrap.className = "print-none";
        wrap.innerHTML =
            '<div id="tvSmCol2" class="tv-sm-panel" role="menu">' +
                '<div class="tv-sm-head">' +
                    '<div class="tv-sm-head-left">' +
                        '<span class="tv-sm-head-dot"></span>' +
                        '<span id="tvSmCol2Title" class="tv-sm-head-title">Main Menu</span>' +
                    '</div>' +
                    '<span id="tvSmCol2Badge" class="tv-sm-head-badge">Menu</span>' +
                '</div>' +
                '<div id="tvSmCol2List" class="tv-sm-list"></div>' +
                '<div class="tv-sm-foot"><span>&#9650;&#9660; Select</span><span>&#9654; Next</span><span>&#9664; Back</span></div>' +
            '</div>' +
            '<div id="tvSmCol3" class="tv-sm-panel" role="menu">' +
                '<div class="tv-sm-head">' +
                    '<div class="tv-sm-head-left">' +
                        '<span class="tv-sm-head-dot"></span>' +
                        '<span id="tvSmCol3Title" class="tv-sm-head-title">Sub-Menu</span>' +
                    '</div>' +
                    '<span id="tvSmCol3Badge" class="tv-sm-head-badge">0</span>' +
                '</div>' +
                '<div id="tvSmCol3List" class="tv-sm-list"></div>' +
                '<div class="tv-sm-foot"><span>OK Open</span><span>&#9654; Page</span><span>&#9664; Back</span></div>' +
            '</div>';
        document.body.appendChild(wrap);
        return wrap;
    }

    function createMenuRow(item, opts) {
        opts = opts || {};
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "tv-sm-row";

        var ico = document.createElement("span");
        ico.className = "tv-sm-ico";
        ico.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (CATEGORY_ICONS[opts.iconKey] || CATEGORY_ICONS.awraad) + '</svg>';
        btn.appendChild(ico);

        var textWrap = document.createElement("span");
        textWrap.className = "tv-sm-text";

        var titleEl = document.createElement("span");
        titleEl.className = "tv-sm-title";
        titleEl.textContent = item.title;
        textWrap.appendChild(titleEl);

        if (item.sub) {
            var subEl = document.createElement("span");
            subEl.className = "tv-sm-sub";
            subEl.textContent = item.sub;
            textWrap.appendChild(subEl);
        }

        btn.appendChild(textWrap);

        if (opts.hasChildren) {
            var rightWrap = document.createElement("span");
            rightWrap.className = "tv-sm-right";

            if (opts.count > 0) {
                var cnt = document.createElement("span");
                cnt.className = "tv-sm-count";
                cnt.textContent = String(opts.count);
                rightWrap.appendChild(cnt);
            }

            var arr = document.createElement("span");
            arr.className = "tv-sm-arrow";
            arr.textContent = "›";
            rightWrap.appendChild(arr);

            btn.appendChild(rightWrap);
        }

        return btn;
    }

    function clearHoverTimer() {
        if (startMenuState.hoverTimer) {
            clearTimeout(startMenuState.hoverTimer);
            startMenuState.hoverTimer = null;
        }
    }

    function hideCol3() {
        var col3 = document.getElementById("tvSmCol3");
        var col3List = document.getElementById("tvSmCol3List");
        if (col3) col3.classList.remove("open");
        if (col3List) col3List.innerHTML = "";
        startMenuState.col3Items = [];
    }

    function positionCol3NearRow(rowEl) {
        var col3 = document.getElementById("tvSmCol3");
        if (!col3) return;

        var topPx = 8;
        if (rowEl && rowEl.getBoundingClientRect) {
            var r = rowEl.getBoundingClientRect();
            topPx = Math.max(8, Math.round(r.top - 10));
        }

        col3.style.marginTop = topPx + "px";
        requestAnimationFrame(function() {
            var cRect = col3.getBoundingClientRect();
            var maxBottom = window.innerHeight - 50;
            if (cRect.bottom > maxBottom) {
                var adjusted = Math.max(8, topPx - (cRect.bottom - maxBottom));
                col3.style.marginTop = Math.round(adjusted) + "px";
            }
        });
    }

    function renderCol3ForSubMenu(subMenu, parentIdx, rowEl, focusFirstItem) {
        clearHoverTimer();
        var col3 = document.getElementById("tvSmCol3");
        var col3Title = document.getElementById("tvSmCol3Title");
        var col3Badge = document.getElementById("tvSmCol3Badge");
        var col3List = document.getElementById("tvSmCol3List");
        var col2List = document.getElementById("tvSmCol2List");
        if (!col3 || !col3List) return;

        startMenuState.col2ActiveIdx = parentIdx;
        if (col2List) {
            Array.from(col2List.querySelectorAll(".tv-sm-row")).forEach(function(row, idx) {
                row.classList.toggle("tv-sm-selected", idx === parentIdx);
            });
        }

        var items = (subMenu && Array.isArray(subMenu.items)) ? subMenu.items : [];
        startMenuState.col3Items = items;

        if (items.length === 0) {
            hideCol3();
            return;
        }

        col3Title.textContent = subMenu.title || "Sub-Menu";
        if (col3Badge) col3Badge.textContent = items.length + (items.length === 1 ? " Item" : " Items");
        col3List.innerHTML = "";

        items.forEach(function(it) {
            var row = createMenuRow(it, { iconKey: subMenu.icon || "awraad", hasChildren: false });
            row.addEventListener("click", function() {
                navigateToHref(it.href);
            });
            col3List.appendChild(row);
        });

        col3.classList.add("open");
        positionCol3NearRow(rowEl);

        if (focusFirstItem) {
            setTimeout(function() {
                var first = col3List.querySelector(".tv-sm-row");
                if (first) first.focus();
            }, 25);
        }
    }

    function scheduleCol3Cascade(subMenu, parentIdx, rowEl) {
        clearHoverTimer();
        var col2List = document.getElementById("tvSmCol2List");
        startMenuState.col2ActiveIdx = parentIdx;
        if (col2List) {
            Array.from(col2List.querySelectorAll(".tv-sm-row")).forEach(function(r, j) {
                r.classList.toggle("tv-sm-selected", j === parentIdx);
            });
        }
        if (!subMenu || !Array.isArray(subMenu.items) || subMenu.items.length === 0) {
            hideCol3();
            return;
        }
        startMenuState.hoverTimer = setTimeout(function() {
            if (!startMenuState.open) return;
            renderCol3ForSubMenu(subMenu, parentIdx, rowEl, false);
        }, 120);
    }

    function openStartMenu(mode, triggerBtn, focusCol2) {
        clearHoverTimer();
        ensureStartMenuDOM();
        var backdrop = document.getElementById("tvStartMenuBackdrop");
        var wrap = document.getElementById("tvStartMenuWrap");
        var col2 = document.getElementById("tvSmCol2");
        var col2Title = document.getElementById("tvSmCol2Title");
        var col2Badge = document.getElementById("tvSmCol2Badge");
        var col2List = document.getElementById("tvSmCol2List");

        document.querySelectorAll("#tvCompactSidebar .tv-sb-btn").forEach(function(b) {
            b.classList.toggle("tv-sb-active", b === triggerBtn);
        });

        startMenuState.open = true;
        startMenuState.mode = mode;
        startMenuState.triggerBtn = triggerBtn || null;
        startMenuState.col2ActiveIdx = -1;
        col2List.innerHTML = "";
        hideCol3();

        var col2Top = 8;
        if (mode !== "main" && triggerBtn && triggerBtn.getBoundingClientRect) {
            col2Top = Math.max(8, Math.min(window.innerHeight - 360, Math.round(triggerBtn.getBoundingClientRect().top - 6)));
        }
        col2.style.marginTop = col2Top + "px";

        var skipFirstAutoFocusCascade = (mode === "main");

        if (mode === "shajara" || mode === "awraad") {
            col2Title.textContent = mode === "shajara" ? "Shajara" : "Awraad";
            var directItems = mode === "shajara" ? SHAJARA_ITEMS : AWRAAD_ITEMS;
            if (col2Badge) col2Badge.textContent = directItems.length + " Items";
            startMenuState.col2Items = directItems;

            directItems.forEach(function(it, idx) {
                var row = createMenuRow(it, { iconKey: mode, hasChildren: false });
                row.addEventListener("focus", function() {
                    startMenuState.col2ActiveIdx = idx;
                    Array.from(col2List.querySelectorAll(".tv-sm-row")).forEach(function(r, j) {
                        r.classList.toggle("tv-sm-selected", j === idx);
                    });
                });
                row.addEventListener("click", function() {
                    navigateToHref(it.href);
                });
                col2List.appendChild(row);
            });
        } else {
            col2Title.textContent = "Main Menu";
            var tree = buildFullStartMenuTree();
            if (col2Badge) col2Badge.textContent = tree.length + " Sections";
            startMenuState.col2Items = tree;

            tree.forEach(function(subMenu, idx) {
                if (subMenu.sepBefore) {
                    var sep = document.createElement("div");
                    sep.className = "tv-sm-sep";
                    col2List.appendChild(sep);
                }
                var hasKids = !subMenu.isDirect && Array.isArray(subMenu.items) && subMenu.items.length > 0;
                var row = createMenuRow(subMenu, {
                    iconKey: subMenu.icon || "more",
                    hasChildren: hasKids,
                    count: hasKids ? subMenu.items.length : 0
                });

                row.addEventListener("mouseenter", function() {
                    skipFirstAutoFocusCascade = false;
                    scheduleCol3Cascade(subMenu, idx, row);
                });
                row.addEventListener("focus", function() {
                    if (skipFirstAutoFocusCascade && idx === 0) {
                        skipFirstAutoFocusCascade = false;
                        startMenuState.col2ActiveIdx = 0;
                        row.classList.add("tv-sm-selected");
                        return;
                    }
                    skipFirstAutoFocusCascade = false;
                    scheduleCol3Cascade(subMenu, idx, row);
                });
                row.addEventListener("click", function() {
                    if (subMenu.isDirect && subMenu.href) {
                        navigateToHref(subMenu.href);
                    } else if (hasKids) {
                        renderCol3ForSubMenu(subMenu, idx, row, true);
                    }
                });

                col2List.appendChild(row);
            });
        }

        backdrop.classList.add("open");
        wrap.classList.add("open");

        if (focusCol2 !== false) {
            setTimeout(function() {
                var firstRow = col2List.querySelector(".tv-sm-row");
                if (firstRow) firstRow.focus();
            }, 30);
        }
    }

    function closeStartMenu(restoreFocus) {
        clearHoverTimer();
        if (!startMenuState.open) return;
        startMenuState.open = false;
        var backdrop = document.getElementById("tvStartMenuBackdrop");
        var wrap = document.getElementById("tvStartMenuWrap");
        if (backdrop) backdrop.classList.remove("open");
        if (wrap) wrap.classList.remove("open");
        hideCol3();

        document.querySelectorAll("#tvCompactSidebar .tv-sb-btn.tv-sb-active").forEach(function(b) {
            b.classList.remove("tv-sb-active");
        });

        if (restoreFocus && startMenuState.triggerBtn) {
            startMenuState.triggerBtn.focus({ preventScroll: true });
        }
    }

    // ------------------------------------------
    // 6. TIMER CONTROLS: EXACT SEQUENCE (Reset -> Start -> Minutes -> Seconds) + FOCUS LOCK
    // ------------------------------------------
    function stepNumericOrTimerInput(inp, dir) {
        if (!inp) return;
        var raw = String(inp.value || "").trim();

        if (/^\d{1,2}:\d{2}(?::\d{2})?$/.test(raw)) {
            var parts = raw.split(":").map(function(n) { return parseInt(n, 10) || 0; });
            var totalSecs = parts.length === 3
                ? parts[0] * 3600 + parts[1] * 60 + parts[2]
                : parts[0] * 60 + parts[1];
            var deltaSecs = parts.length === 3 ? 60 : (totalSecs >= 120 ? 60 : 15);
            totalSecs = Math.max(0, totalSecs + dir * deltaSecs);
            if (parts.length === 3) {
                var h = Math.floor(totalSecs / 3600);
                var m = Math.floor((totalSecs % 3600) / 60);
                var s = totalSecs % 60;
                inp.value = String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
            } else {
                var m2 = Math.floor(totalSecs / 60);
                var s2 = totalSecs % 60;
                inp.value = String(m2).padStart(2, "0") + ":" + String(s2).padStart(2, "0");
            }
        } else {
            var step = parseFloat(inp.step || "1") || 1;
            var min = inp.min !== "" ? parseFloat(inp.min) : 0;
            var max = inp.max !== "" ? parseFloat(inp.max) : 99999;
            var cur = parseFloat(raw);
            if (isNaN(cur)) cur = min;
            var next = Math.min(max, Math.max(min, cur + dir * step));
            inp.value = String(Math.round(next * 100) / 100);
        }

        inp.dispatchEvent(new Event("input", { bubbles: true }));
        inp.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function isTimerOrNumericInput(inp) {
        if (!inp || inp.tagName !== "INPUT") return false;
        if (inp.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvBottomBar, #tvHomeSplash, #quickSearchModal")) return false;
        if (inp.id === "ursSearchInput" || inp.id === "quickSearchInput") return false;

        var type = (inp.getAttribute("type") || "text").toLowerCase();
        if (type === "hidden" || type === "checkbox" || type === "radio" || type === "range" || type === "color" || type === "search" || type === "email" || type === "password") return false;

        if (inp.closest(".timer-card, .timer-inputs")) return true;

        var parentTxt = (inp.parentElement && inp.parentElement.textContent ? inp.parentElement.textContent : "").slice(0, 80);
        var meta = [
            inp.id || "",
            inp.name || "",
            inp.className || "",
            inp.getAttribute("placeholder") || "",
            inp.getAttribute("aria-label") || "",
            parentTxt
        ].join(" ").toLowerCase();

        if (/search|query|city|location|country|address|email/i.test(inp.id + " " + inp.name + " " + (inp.getAttribute("placeholder") || ""))) return false;

        var val = String(inp.value || "").trim();
        return type === "number" || type === "tel" || type === "time" ||
            /timer|time|min|sec|hour|hr|target|count|tasbeeh|delay|interval|duration|offset|hijri|adjust|custom|limit|goal|speed|countdown|alarm|repeat/i.test(meta) ||
            /^\d+(?::\d{2})*$/.test(val);
    }

    function wrapSingleTimerInput(inp) {
        if (!isTimerOrNumericInput(inp)) return null;

        if ((inp.getAttribute("type") || "").toLowerCase() === "time") {
            try { inp.setAttribute("type", "text"); } catch (e) {}
        }

        inp.setAttribute("readonly", "readonly");
        inp.setAttribute("inputmode", "none");
        inp.setAttribute("tabindex", "-1");

        var wrap = inp.parentElement;
        if (wrap && wrap.classList.contains("tv-stepper-wrap")) {
            wrap.setAttribute("tabindex", "-1");
            return wrap;
        }

        wrap = document.createElement("div");
        wrap.className = "tv-stepper-wrap";
        wrap.setAttribute("tabindex", "-1");

        var downBtn = document.createElement("button");
        downBtn.type = "button";
        downBtn.className = "tv-step-btn tv-step-down";
        downBtn.setAttribute("tabindex", "0");
        downBtn.setAttribute("aria-label", "Decrease");
        downBtn.innerHTML = "&#9660;";
        downBtn.addEventListener("click", function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            stepNumericOrTimerInput(inp, -1);
            downBtn.focus({ preventScroll: true });
            tvNavState.lastPageFocusEl = downBtn;
        });

        var upBtn = document.createElement("button");
        upBtn.type = "button";
        upBtn.className = "tv-step-btn tv-step-up";
        upBtn.setAttribute("tabindex", "0");
        upBtn.setAttribute("aria-label", "Increase");
        upBtn.innerHTML = "&#9650;";
        upBtn.addEventListener("click", function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            stepNumericOrTimerInput(inp, 1);
            upBtn.focus({ preventScroll: true });
            tvNavState.lastPageFocusEl = upBtn;
        });

        inp.parentNode.insertBefore(wrap, inp);
        wrap.appendChild(downBtn);
        wrap.appendChild(inp);
        wrap.appendChild(upBtn);
        return wrap;
    }

    function enhanceTimerAndNumericInputs(root) {
        var container = root || document;
        var inputs = container.querySelectorAll('input[type="number"], input[type="tel"], input[type="time"], input[type="text"], input:not([type])');
        inputs.forEach(function(inp) {
            wrapSingleTimerInput(inp);
        });
    }

    // Tag Reset, Start, Minutes, Seconds inside every .timer-card so visual & D-Pad order are ALWAYS: Reset -> Start -> Minutes -> Seconds
    function enhanceTimerCardsOrder(root) {
        var scope = root || document;
        var cards = scope.querySelectorAll(".timer-card");
        cards.forEach(function(card) {
            var btnBox = card.querySelector(".timer-buttons");
            if (btnBox) {
                btnBox.querySelectorAll("button").forEach(function(b) {
                    var hay = ((b.textContent || "") + " " + (b.id || "") + " " + (b.className || "") + " " + (b.getAttribute("onclick") || "")).toLowerCase();
                    if (/reset|ری\s*سیٹ|دوبارہ/i.test(hay)) {
                        b.classList.add("tv-timer-reset");
                        b.classList.remove("tv-timer-start");
                    } else if (/start|pause|resume|stop|شروع|روک/i.test(hay)) {
                        b.classList.add("tv-timer-start");
                        b.classList.remove("tv-timer-reset");
                    }
                });
            }

            var inpBox = card.querySelector(".timer-inputs");
            if (inpBox) {
                var wraps = Array.from(inpBox.querySelectorAll(".tv-stepper-wrap"));
                wraps.forEach(function(w, idx) {
                    var inp = w.querySelector("input");
                    var group = w;
                    while (group.parentElement && group.parentElement !== inpBox) {
                        group = group.parentElement;
                    }
                    var hay = [
                        inp ? (inp.id || "") : "",
                        inp ? (inp.name || "") : "",
                        inp ? (inp.placeholder || "") : "",
                        group.textContent || ""
                    ].join(" ").toLowerCase();

                    if (/sec|سیکنڈ/i.test(hay) && !/min|منٹ/i.test(hay)) {
                        group.classList.add("tv-timer-sec-group");
                        group.classList.remove("tv-timer-min-group");
                    } else if (/min|منٹ/i.test(hay) && !/sec|سیکنڈ/i.test(hay)) {
                        group.classList.add("tv-timer-min-group");
                        group.classList.remove("tv-timer-sec-group");
                    } else if (idx === 0) {
                        group.classList.add("tv-timer-min-group");
                        group.classList.remove("tv-timer-sec-group");
                    } else {
                        group.classList.add("tv-timer-sec-group");
                        group.classList.remove("tv-timer-min-group");
                    }
                });
            }
        });
    }

    // Returns exact ordered focusable controls for a .timer-card:
    // [ Reset, Start, (any extra button), Minutes ▼, Minutes ▲, Seconds ▼, Seconds ▲ ]
    function getOrderedTimerControls(card) {
        if (!card) return [];
        enhanceTimerAndNumericInputs(card);
        enhanceTimerCardsOrder(card);

        var out = [];
        function addIfValid(el) {
            if (el && isVisibleFocusable(el) && out.indexOf(el) === -1) out.push(el);
        }

        var btnBox = card.querySelector(".timer-buttons");
        if (btnBox) {
            var allBtns = Array.from(btnBox.querySelectorAll("button"));
            allBtns.filter(function(b) { return b.classList.contains("tv-timer-reset"); }).forEach(addIfValid);
            allBtns.filter(function(b) { return b.classList.contains("tv-timer-start"); }).forEach(addIfValid);
            allBtns.forEach(addIfValid);
        }

        var inpBox = card.querySelector(".timer-inputs");
        if (inpBox) {
            var minGroups = Array.from(inpBox.querySelectorAll(".tv-timer-min-group"));
            var secGroups = Array.from(inpBox.querySelectorAll(".tv-timer-sec-group"));
            var addGroupBtns = function(g) {
                addIfValid(g.querySelector(".tv-step-down"));
                addIfValid(g.querySelector(".tv-step-up"));
            };
            minGroups.forEach(addGroupBtns);
            secGroups.forEach(addGroupBtns);
            // Fallback for any untagged stepper inside timer-inputs
            inpBox.querySelectorAll(".tv-step-btn").forEach(addIfValid);
        }

        return out;
    }

    function isTimerControl(el) {
        if (!el || el.nodeType !== 1) return false;
        if (el.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvBottomBar, #tvHomeSplash")) return false;
        if (el.classList.contains("tv-step-btn") || el.closest(".tv-stepper-wrap, .timer-card, .timer-buttons, .timer-inputs")) return true;
        return false;
    }

    var timerFocusLockUntil = 0;

    function lockTimerFocus(clickedBtn) {
        if (!clickedBtn || !isTimerControl(clickedBtn)) return;
        var card = clickedBtn.closest(".timer-card") || clickedBtn.closest("#tasbeehModal") || clickedBtn.parentElement;
        var frame = document.querySelector(".continuous-frame");
        var savedScroll = frame ? frame.scrollTop : 0;
        var activeSec = document.querySelector(".shijra-section.tv-active-section");
        timerFocusLockUntil = Date.now() + 700;

        function keepFocusAndView() {
            if (activeSec && !activeSec.classList.contains("tv-active-section")) {
                activeSec.classList.add("tv-active-section", "active");
            }
            if (frame && Math.abs(frame.scrollTop - savedScroll) > 40) {
                frame.scrollTop = savedScroll;
            }

            var cur = document.activeElement;
            var escaped = !cur || cur === document.body || cur === document.documentElement ||
                (cur.closest && cur.closest("#tvCompactSidebar"));

            if (!escaped && card && card.contains(cur) && isVisibleFocusable(cur)) {
                tvNavState.lastPageFocusEl = cur;
                return;
            }

            if (isVisibleFocusable(clickedBtn)) {
                clickedBtn.focus({ preventScroll: true });
                tvNavState.lastPageFocusEl = clickedBtn;
                return;
            }
            if (card && card.classList.contains("timer-card")) {
                var ordered = getOrderedTimerControls(card);
                if (ordered.length > 0) {
                    ordered[0].focus({ preventScroll: true });
                    tvNavState.lastPageFocusEl = ordered[0];
                    return;
                }
            }
            if (card) {
                var fallback = Array.from(card.querySelectorAll("button:not([disabled]), .tv-step-btn")).filter(isVisibleFocusable);
                if (fallback.length > 0) {
                    fallback[0].focus({ preventScroll: true });
                    tvNavState.lastPageFocusEl = fallback[0];
                }
            }
        }

        setTimeout(keepFocusAndView, 0);
        setTimeout(keepFocusAndView, 40);
        setTimeout(keepFocusAndView, 140);
        setTimeout(keepFocusAndView, 320);
        setTimeout(keepFocusAndView, 550);
    }

    document.addEventListener("click", function(e) {
        var btn = e.target && e.target.closest ? e.target.closest("button, [role='button'], .tv-step-btn") : e.target;
        if (btn && isTimerControl(btn)) {
            lockTimerFocus(btn);
        }
    }, true);

    // Anti-Trap Focus Guard: blocks hidden/off-screen traps & saves page focus state cleanly
    document.addEventListener("focusin", function(e) {
        var el = e.target;
        if (!el || el === document || el === window) return;

        // 1. Block accidental sidebar jump during Timer Start/Reset lock
        if (Date.now() < timerFocusLockUntil && el.closest && el.closest("#tvCompactSidebar")) {
            el.blur();
            return;
        }

        // 2. Redirect plain Timer inputs directly to their ▲ stepper button
        if (el.tagName === "INPUT" && isTimerOrNumericInput(el)) {
            var wrap = wrapSingleTimerInput(el);
            if (wrap) {
                el.blur();
                var upBtn = wrap.querySelector(".tv-step-up") || wrap.querySelector(".tv-step-btn");
                if (upBtn) {
                    upBtn.focus({ preventScroll: true });
                    tvNavState.lastPageFocusEl = upBtn;
                }
            }
            return;
        }

        // 3. Never allow focus to remain trapped inside hidden / off-screen / quarantined elements
        if (el.closest && (el.closest(".tv-hide-overlay, .tv-hide-nav-cards, #awraadSideDrawer") || (bookState.sectionMode && el.closest(".shijra-section") && !el.closest(".shijra-section.tv-active-section")))) {
            el.blur();
            returnFocusToCurrentPage();
            return;
        }

        // 4. Remember last active sidebar button or last page element
        if (el.closest && el.closest("#tvCompactSidebar")) {
            tvNavState.savedSidebarBtn = el;
        } else if (el.closest && el.closest(".continuous-frame") && !isAnyModalOpen()) {
            tvNavState.lastPageFocusEl = el;
        }
    }, true);

    // ------------------------------------------
    // 7. COMPACT SIDEBAR, MODALS & FOCUS NAVIGATION
    // ------------------------------------------
    function findTarget(patterns, preferDrawer) {
        var drawer = document.getElementById("awraadSideDrawer");
        var scopes = preferDrawer
            ? (drawer ? [drawer, document] : [document])
            : [document, drawer].filter(Boolean);

        for (var s = 0; s < scopes.length; s++) {
            var list = scopes[s].querySelectorAll("a, button, [onclick], [role='button']");
            for (var i = 0; i < list.length; i++) {
                var el = list[i];
                if (el.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvBottomBar, #tvHomeSplash")) continue;
                if (!preferDrawer && s === 0 && drawer && drawer.contains(el)) continue;
                var hay = [
                    el.textContent || "",
                    el.id || "",
                    el.className || "",
                    el.getAttribute("title") || "",
                    el.getAttribute("aria-label") || "",
                    el.getAttribute("onclick") || "",
                    el.getAttribute("href") || ""
                ].join(" ").toLowerCase();
                for (var p = 0; p < patterns.length; p++) {
                    if (patterns[p].test(hay)) return el;
                }
            }
        }
        return null;
    }

    function hideDuplicateMobileRail() {
        var keywords = ["home", "shajara", "awraad", "tasbeeh", "namaz", "settings"];
        Array.from(document.body.children).forEach(function(el) {
            if (!el || el.id === "tvCompactSidebar" || el.id === "awraadSideDrawer" || el.id === "tvStartMenuWrap" || el.id === "tvStartMenuBackdrop" || el.id === "tvBottomBar" || el.id === "tvHomeSplash") return;
            var txt = (el.textContent || "").toLowerCase();
            if (txt.length < 25 || txt.length > 220) return;
            var hits = 0;
            for (var i = 0; i < keywords.length; i++) {
                if (txt.indexOf(keywords[i]) !== -1) hits++;
            }
            if (hits >= 4) el.classList.add("tv-hide-mobile-rail");
        });
    }

    function buildCompactSidebar() {
        if (document.getElementById("tvCompactSidebar")) return;

        var items = [
            {
                id: "tvSbMainMenu",
                menuMode: "main",
                label: "Main Menu",
                svg: '<rect x="3" y="3" width="7" height="7" rx="1.2"/><rect x="14" y="3" width="7" height="7" rx="1.2"/><rect x="3" y="14" width="7" height="7" rx="1.2"/><rect x="14" y="14" width="7" height="7" rx="1.2"/>',
                action: function(btn) {
                    if (startMenuState.open && startMenuState.mode === "main") closeStartMenu(true);
                    else openStartMenu("main", btn, true);
                }
            },
            {
                label: "Search",
                svg: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
                action: function() {
                    closeStartMenu(false);
                    var el = document.getElementById("navSearchBtn") || document.getElementById("openQuickSearchDrawerBtn") || findTarget([/search/i], false);
                    if (el) el.click();
                    setTimeout(function() {
                        prepareOpenModals();
                        enhanceQuickSearchModal();
                    }, 100);
                }
            },
            {
                menuMode: "shajara",
                label: "Shajara",
                svg: '<path d="M5 4h11a2 2 0 0 1 2 2v13H7a2 2 0 0 1-2-2V4z"/><path d="M9 8h6M9 12h6"/>',
                action: function(btn) {
                    if (startMenuState.open && startMenuState.mode === "shajara") closeStartMenu(true);
                    else openStartMenu("shajara", btn, true);
                }
            },
            {
                menuMode: "awraad",
                label: "Awraad",
                svg: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
                action: function(btn) {
                    if (startMenuState.open && startMenuState.mode === "awraad") closeStartMenu(true);
                    else openStartMenu("awraad", btn, true);
                }
            },
            {
                label: "Live Events",
                svg: '<rect x="2" y="6" width="14" height="12" rx="2"/><polygon points="22 8 16 12 22 16 22 8"/>',
                action: function() {
                    closeStartMenu(false);
                    var el = findTarget([/live|meet/i], true);
                    if (el) el.click();
                }
            },
            {
                label: "Calendar",
                svg: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>',
                action: function() {
                    closeStartMenu(false);
                    var el = findTarget([/\burs\b|calendar/i], true);
                    if (el) el.click();
                    setTimeout(prepareOpenModals, 120);
                }
            },
            {
                label: "Tasbeeh",
                svg: '<circle cx="12" cy="5" r="2"/><circle cx="18" cy="9" r="2"/><circle cx="17" cy="16" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="7" cy="16" r="2"/><circle cx="6" cy="9" r="2"/>',
                action: function() {
                    closeStartMenu(false);
                    var el = findTarget([/tasbeeh/i], true);
                    if (el) el.click();
                    setTimeout(prepareOpenModals, 120);
                }
            },
            {
                label: "Scroll",
                svg: '<path d="M7 7l5 5 5-5"/><path d="M7 13l5 5 5-5"/>',
                action: function() {
                    closeStartMenu(false);
                    toggleBookModeForScroll();
                    var el = findTarget([/auto-?scroll|scroll/i], true);
                    if (el) el.click();
                }
            },
            {
                label: "Namaaz",
                svg: '<path d="M12 3c-2.5 3-5 5-5 8v9h10v-9c0-3-2.5-5-5-8z"/><path d="M4 20h16"/>',
                action: function() {
                    closeStartMenu(false);
                    var el = document.getElementById("openPrayerTimesBtn") || findTarget([/prayer|namaz|namaaz|salat/i], true);
                    if (el) el.click();
                    setTimeout(prepareOpenModals, 120);
                }
            },
            {
                label: "Settings",
                svg: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
                action: function() {
                    closeStartMenu(false);
                    var el = findTarget([/setting|display.*font/i], true);
                    if (el) el.click();
                    setTimeout(prepareOpenModals, 120);
                }
            }
        ];

        var nav = document.createElement("nav");
        nav.id = "tvCompactSidebar";
        nav.setAttribute("aria-label", "TV Compact Sidebar");

        items.forEach(function(item) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "tv-sb-btn";
            if (item.id) btn.id = item.id;
            if (item.menuMode) btn.dataset.menuMode = item.menuMode;
            btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + item.svg + '</svg><span class="tv-sb-lbl">' + item.label + '</span>';
            btn.addEventListener("click", function() { item.action(btn); });
            nav.appendChild(btn);
        });

        document.body.appendChild(nav);
    }

    function arrangeSettingsModal() {
        var modal = document.getElementById("settingsModal");
        if (!modal) return;
        var bodyEl = modal.querySelector(".settings-body");
        if (!bodyEl) return;

        if (!bodyEl.querySelector(".tv-settings-grid")) {
            var children = Array.from(bodyEl.children);
            if (children.length >= 4) {
                var slider = document.getElementById("arabicFontSizeSlider");
                var splitIdx = -1;
                if (slider) {
                    var sliderIdx = children.findIndex(function(ch) {
                        return ch === slider || ch.contains(slider);
                    });
                    if (sliderIdx > 0) {
                        var prev = children[sliderIdx - 1];
                        var isTitle = prev && (prev.classList.contains("settings-section-title") || /arabic\s*font\s*size/i.test(prev.textContent || ""));
                        splitIdx = isTitle ? sliderIdx - 1 : sliderIdx;
                    }
                }
                if (splitIdx <= 0) splitIdx = Math.ceil(children.length / 2);

                var grid = document.createElement("div");
                grid.className = "tv-settings-grid";
                var colL = document.createElement("div");
                colL.className = "tv-settings-col tv-settings-col-left";
                var colR = document.createElement("div");
                colR.className = "tv-settings-col tv-settings-col-right";

                children.forEach(function(ch, i) {
                    if (i < splitIdx) colL.appendChild(ch);
                    else colR.appendChild(ch);
                });

                grid.appendChild(colL);
                grid.appendChild(colR);
                bodyEl.appendChild(grid);
            }
        }

        if (modal.dataset.tvBookHook !== "1") {
            modal.dataset.tvBookHook = "1";
            modal.addEventListener("input", function() { scheduleBookRecalc(true); }, true);
            modal.addEventListener("change", function() { scheduleBookRecalc(true); }, true);
        }

        modal.querySelectorAll('input[type="range"]').forEach(function(slider) {
            var wrap = slider.parentElement;
            if (!wrap || !wrap.classList.contains("tv-slider-wrap")) {
                wrap = document.createElement("div");
                wrap.className = "tv-slider-wrap";
                wrap.setAttribute("role", "slider");
                wrap.setAttribute("tabindex", "0");
                slider.parentNode.insertBefore(wrap, slider);
                wrap.appendChild(slider);
            }
            slider.setAttribute("tabindex", "-1");
        });

        modal.querySelectorAll('input[type="checkbox"], input[type="color"]').forEach(function(inp) {
            var lbl = inp.closest("label") || (inp.id ? modal.querySelector('label[for="' + inp.id + '"]') : null);
            if (lbl) {
                lbl.classList.add("tv-focus-ctrl");
                lbl.setAttribute("tabindex", "0");
                lbl.setAttribute("role", "button");
                inp.setAttribute("tabindex", "-1");
            }
        });

        modal.querySelectorAll("#openHijriCorrectionRow, .settings-nav-row, [class*='color-btn' i], [class*='swatch' i]").forEach(function(el) {
            if (/^(BUTTON|A|INPUT|SELECT)$/.test(el.tagName)) return;
            el.classList.add("tv-focus-ctrl");
            el.setAttribute("tabindex", "0");
            el.setAttribute("role", "button");
        });
    }

    function enhanceOtherModals() {
        TOP_MODAL_SELECTORS.forEach(function(sel) {
            var listM = document.querySelectorAll(sel);
            listM.forEach(function(m) {
                var isVisible = isModalVisible(m);
                m.querySelectorAll(".tasbeeh-close, .tasbeeh-minimize, [onclick], [role='button'], [class*='btn' i], [class*='preset' i], [class*='chip' i], [class*='tab' i]").forEach(function(el) {
                    if (/^(BUTTON|A|INPUT|SELECT)$/.test(el.tagName)) return;
                    if (el.classList.contains("tv-stepper-wrap") || el.classList.contains("tv-slider-wrap")) return;
                    if (el.querySelector("button, a, input, select, .tv-step-btn")) return;
                    el.classList.add("tv-focus-ctrl");
                    el.setAttribute("tabindex", "0");
                    if (!el.getAttribute("role")) el.setAttribute("role", "button");
                });
                if (isVisible) {
                    m.querySelectorAll("div, span, li, label").forEach(function(el) {
                        if (el.classList.contains("tv-focus-ctrl") || el.classList.contains("tv-stepper-wrap") || el.classList.contains("tv-slider-wrap")) return;
                        if (el.querySelector("button, a, input, select, .tv-step-btn, .tv-focus-ctrl")) return;
                        var r = el.getBoundingClientRect();
                        if (r.width <= 0 || r.height <= 0 || r.height > 120) return;
                        var cst = window.getComputedStyle(el);
                        if (cst.cursor === "pointer") {
                            el.classList.add("tv-focus-ctrl");
                            el.setAttribute("tabindex", "0");
                            if (!el.getAttribute("role")) el.setAttribute("role", "button");
                        }
                    });
                }
            });
        });
    }

    function checkModalCloseRecovery() {
        var nowOpen = isAnyModalOpen();
        if (tvNavState.wasModalOpen && !nowOpen) {
            var cur = document.activeElement;
            var lost = !cur || cur === document.body || cur === document.documentElement || !isVisibleFocusable(cur) ||
                (cur.closest && cur.closest("#tvCompactSidebar"));
            if (lost && !document.body.classList.contains("tv-home-splash")) {
                returnFocusToCurrentPage();
            }
        }
        tvNavState.wasModalOpen = nowOpen;
    }

    function prepareOpenModals() {
        arrangeSettingsModal();
        enhanceOtherModals();
        enhanceQuickSearchModal();
        enhanceNavbarControls();
        enhanceTimerAndNumericInputs(document);
        enhanceTimerCardsOrder(document);
        suppressStrayOverlaysAndSyncNamaz();
        checkModalCloseRecovery();
    }

    function getScopeFocusables(active) {
        var scope = isAnyModalOpen()
            ? getOutermostModalScope(active)
            : (document.querySelector(".shijra-section.tv-active-section") || document.querySelector(".continuous-frame") || document);
        return Array.from(scope.querySelectorAll(
            '.tv-slider-wrap[tabindex="0"], .tv-step-btn[tabindex="0"], .tv-focus-ctrl[tabindex="0"], select:not([disabled]), button:not([disabled]), a[href], input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])'
        )).filter(function(node) {
            if (node.closest("#tvCompactSidebar, #tvBottomBar") && scope !== document) return false;
            return isVisibleFocusable(node);
        });
    }

    function moveFocusInScope(active, delta) {
        var list = getScopeFocusables(active);
        var idx = list.indexOf(active);
        if (idx === -1) return false;
        var nextIdx = idx + delta;
        if (nextIdx >= 0 && nextIdx < list.length) {
            list[nextIdx].focus();
            list[nextIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
            return true;
        }
        return false;
    }

    function moveFocusVertical(active, dir) {
        var list = getScopeFocusables(active);
        if (list.length < 2) return false;

        var curWrap = active.closest(".tv-stepper-wrap") || active;
        var curRect = curWrap.getBoundingClientRect();
        var curCx = (curRect.left + curRect.right) / 2;

        var candidates = [];
        for (var i = 0; i < list.length; i++) {
            var node = list[i];
            if (node === active || curWrap.contains(node)) continue;
            var r = node.getBoundingClientRect();
            if (dir > 0) {
                if (r.top >= curRect.bottom - 4) {
                    var dy = r.top - curRect.bottom;
                    var dx = Math.abs(((r.left + r.right) / 2) - curCx);
                    candidates.push({ node: node, score: dy * 4 + dx });
                }
            } else {
                if (r.bottom <= curRect.top + 4) {
                    var dyUp = curRect.top - r.bottom;
                    var dxUp = Math.abs(((r.left + r.right) / 2) - curCx);
                    candidates.push({ node: node, score: dyUp * 4 + dxUp });
                }
            }
        }

        if (candidates.length > 0) {
            candidates.sort(function(a, b) { return a.score - b.score; });
            var best = candidates[0].node;
            best.focus();
            best.scrollIntoView({ block: "nearest", behavior: "smooth" });
            return true;
        }
        return false;
    }

    function adjustSlider(wrap, dir) {
        var slider = wrap.querySelector('input[type="range"]');
        if (!slider) return;
        var step = parseFloat(slider.step || "1");
        var min = parseFloat(slider.min !== "" ? slider.min : "0");
        var max = parseFloat(slider.max !== "" ? slider.max : "100");
        var cur = parseFloat(slider.value || "0");
        var dec = (slider.step && slider.step.indexOf(".") !== -1) ? slider.step.split(".")[1].length : 0;
        var next = Math.min(max, Math.max(min, cur + dir * step));
        slider.value = dec ? next.toFixed(dec) : String(Math.round(next));
        slider.dispatchEvent(new Event("input", { bubbles: true }));
        slider.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // ------------------------------------------
    // 8. UNIFIED TV REMOTE D-PAD NAVIGATION ENGINE (ENTIRE APP)
    //
    // Guaranteed Paths:
    //   Reset -> Right -> Start -> Right -> Minutes -> Right -> Seconds
    //   Seconds -> Left -> Minutes -> Left -> Start -> Left -> Reset -> Left -> Menu Bar
    //   Timer Controls -> Up / Down -> Current Page Vertical Scroll (NO focus jump)
    //   Menu Bar -> Up / Down -> Menu Options
    //   Menu Options -> Right -> Sub-Menu / Top-Right Controls -> Right -> Current Page (preserves section & scroll!)
    //   Top-Right Controls (Search / Dark Mode / Bookmark): Left/Right across controls, Left edge -> Menu Bar, Right edge / Down / Back -> Current Page
    // ------------------------------------------
    window.addEventListener("keydown", function(e) {
        var key = e.key;
        var code = e.keyCode || e.which;
        var isDown = key === "ArrowDown" || key === "Down" || code === 40 || code === 20;
        var isUp = key === "ArrowUp" || key === "Up" || code === 38 || code === 19;
        var isLeft = key === "ArrowLeft" || key === "Left" || code === 37 || code === 21;
        var isRight = key === "ArrowRight" || key === "Right" || code === 39 || code === 22;
        var isOk = key === "Enter" || key === " " || code === 13 || code === 23 || code === 66;
        var isBack = key === "Escape" || key === "GoBack" || key === "BrowserBack" || code === 27 || code === 4;

        var active = document.activeElement;

        // A. Start Menu Level 3 (Sub-Menu Items)
        var col3 = active && active.closest ? active.closest("#tvSmCol3") : null;
        if (col3 && startMenuState.open) {
            if (isDown || isUp) {
                var rows3 = Array.from(col3.querySelectorAll(".tv-sm-row"));
                var i3 = rows3.indexOf(active);
                if (i3 !== -1) {
                    var n3 = isDown ? i3 + 1 : i3 - 1;
                    if (n3 >= 0 && n3 < rows3.length) {
                        e.preventDefault();
                        e.stopPropagation();
                        rows3[n3].focus();
                        rows3[n3].scrollIntoView({ block: "nearest", behavior: "smooth" });
                    }
                }
                return;
            }
            if (isRight) {
                // Escape smoothly from Sub-Menu -> Top-Right Controls -> Current Page
                e.preventDefault();
                e.stopPropagation();
                closeStartMenu(false);
                if (!focusFirstNavbarControl()) returnFocusToCurrentPage();
                return;
            }
            if (isLeft || isBack) {
                e.preventDefault();
                e.stopPropagation();
                var rows2 = Array.from(document.querySelectorAll("#tvSmCol2List .tv-sm-row"));
                var parentRow = rows2[startMenuState.col2ActiveIdx] || rows2[0];
                if (parentRow) parentRow.focus();
                return;
            }
            return;
        }

        // B. Start Menu Level 2 (Menu Categories / Direct Options)
        var col2 = active && active.closest ? active.closest("#tvSmCol2") : null;
        if (col2 && startMenuState.open) {
            if (isDown || isUp) {
                var rows2 = Array.from(col2.querySelectorAll(".tv-sm-row"));
                var i2 = rows2.indexOf(active);
                if (i2 !== -1) {
                    var n2 = isDown ? i2 + 1 : i2 - 1;
                    if (n2 >= 0 && n2 < rows2.length) {
                        e.preventDefault();
                        e.stopPropagation();
                        rows2[n2].focus();
                        rows2[n2].scrollIntoView({ block: "nearest", behavior: "smooth" });
                    }
                }
                return;
            }
            if (isRight) {
                e.preventDefault();
                e.stopPropagation();
                var rows2All = Array.from(col2.querySelectorAll(".tv-sm-row"));
                var curIdx = rows2All.indexOf(active);
                var subMenu = startMenuState.col2Items[curIdx];
                if (subMenu && !subMenu.isDirect && Array.isArray(subMenu.items) && subMenu.items.length > 0) {
                    renderCol3ForSubMenu(subMenu, curIdx, active, true);
                } else {
                    // Leaf option (e.g., Shajara/Awraad flyout): Right -> Top-Right Controls -> Current Page
                    closeStartMenu(false);
                    if (!focusFirstNavbarControl()) returnFocusToCurrentPage();
                }
                return;
            }
            if (isLeft || isBack) {
                e.preventDefault();
                e.stopPropagation();
                closeStartMenu(true);
                return;
            }
            return;
        }

        if (isBack && startMenuState.open) {
            e.preventDefault();
            e.stopPropagation();
            closeStartMenu(true);
            return;
        }

        // C. Level 1 Menu Bar (#tvCompactSidebar)
        var sb = active && active.closest ? active.closest("#tvCompactSidebar") : null;
        if (sb) {
            if (isDown || isUp) {
                var btns = Array.from(sb.querySelectorAll(".tv-sb-btn"));
                var idx = btns.indexOf(active);
                if (idx !== -1) {
                    var nextIdx = isDown ? idx + 1 : idx - 1;
                    if (nextIdx >= 0 && nextIdx < btns.length) {
                        e.preventDefault();
                        btns[nextIdx].focus();
                        btns[nextIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
                    }
                }
                return;
            }
            if (isRight) {
                e.preventDefault();
                e.stopPropagation();
                if (active.dataset && active.dataset.menuMode) {
                    // Sub-menu buttons (Main Menu / Shajara / Awraad) open their sub-menu on Right
                    openStartMenu(active.dataset.menuMode, active, true);
                    return;
                }
                // All other Menu Bar options (Search, Live Events, Calendar, Tasbeeh, Scroll, Namaaz, Settings):
                // Right -> Top-Right Controls (Search / Dark Mode / Bookmark) -> Current Page!
                if (!focusFirstNavbarControl()) {
                    returnFocusToCurrentPage();
                }
                return;
            }
            if (isBack && !document.body.classList.contains("tv-home-splash")) {
                e.preventDefault();
                e.stopPropagation();
                returnFocusToCurrentPage();
                return;
            }
            return;
        }

        // D. Top-Right Controls in .app-navbar (Search, Dark Mode, Bookmark)
        var inNavbar = active && active.closest ? active.closest(".app-navbar") : null;
        if (inNavbar && !isAnyModalOpen()) {
            var navCtrls = enhanceNavbarControls();
            var nIdx = navCtrls.indexOf(active);

            if (isLeft) {
                e.preventDefault();
                e.stopPropagation();
                if (nIdx > 0) {
                    navCtrls[nIdx - 1].focus({ preventScroll: true });
                } else {
                    focusMenuBar(null);
                }
                return;
            }
            if (isRight) {
                e.preventDefault();
                e.stopPropagation();
                if (nIdx !== -1 && nIdx < navCtrls.length - 1) {
                    navCtrls[nIdx + 1].focus({ preventScroll: true });
                } else {
                    // Rightmost Top-Right Control -> Right -> Current Page (preserves Shajara section & scroll!)
                    returnFocusToCurrentPage();
                }
                return;
            }
            if (isDown || isBack) {
                e.preventDefault();
                e.stopPropagation();
                returnFocusToCurrentPage();
                return;
            }
            if (isUp) {
                e.preventDefault();
                return;
            }
            return;
        }

        // E. Timer Controls (.timer-card) — Exact Left/Right Sequence:
        //    Menu Bar <- Reset <-> Start <-> Minutes (▼ <-> ▲) <-> Seconds (▼ <-> ▲)
        //    Up / Down -> Vertical Page Scroll ONLY (never changes Timer focus or Menu!)
        var timerCard = active && active.closest ? active.closest(".timer-card") : null;
        if (timerCard && !isAnyModalOpen()) {
            if (isOk) {
                lockTimerFocus(active);
                return;
            }
            if (isUp || isDown) {
                e.preventDefault();
                e.stopPropagation();
                scrollCurrentPage(isDown ? 1 : -1);
                return;
            }
            if (isLeft || isRight) {
                e.preventDefault();
                e.stopPropagation();
                var ordered = getOrderedTimerControls(timerCard);
                var tIdx = ordered.indexOf(active);
                if (tIdx === -1 && ordered.length > 0) {
                    ordered[0].focus({ preventScroll: true });
                    tvNavState.lastPageFocusEl = ordered[0];
                    return;
                }
                if (isRight) {
                    if (tIdx < ordered.length - 1) {
                        ordered[tIdx + 1].focus({ preventScroll: true });
                        tvNavState.lastPageFocusEl = ordered[tIdx + 1];
                    }
                    return;
                }
                if (isLeft) {
                    if (tIdx > 0) {
                        ordered[tIdx - 1].focus({ preventScroll: true });
                        tvNavState.lastPageFocusEl = ordered[tIdx - 1];
                    } else {
                        // Reset button + Left Arrow -> Focus Menu Bar (keeping page state saved!)
                        focusMenuBar(active);
                    }
                    return;
                }
            }
            if (isBack) {
                e.preventDefault();
                e.stopPropagation();
                focusMenuBar(active);
                return;
            }
        }

        // F. Modal Stepper Controls (e.g. Tasbeeh modal target/timer)
        if (active && isTimerControl(active) && isAnyModalOpen()) {
            if (isOk) {
                lockTimerFocus(active);
                return;
            }
            if (isLeft || isRight) {
                e.preventDefault();
                e.stopPropagation();
                moveFocusInScope(active, isRight ? 1 : -1);
                return;
            }
            if (isDown || isUp) {
                e.preventDefault();
                e.stopPropagation();
                moveFocusVertical(active, isDown ? 1 : -1);
                return;
            }
        }

        // G. Plain inputs inside modals escape cleanly on Up/Down
        if (active && active.tagName === "INPUT" && isAnyModalOpen()) {
            var itype = (active.getAttribute("type") || "text").toLowerCase();
            if (itype !== "range" && (isDown || isUp)) {
                e.preventDefault();
                e.stopPropagation();
                moveFocusVertical(active, isDown ? 1 : -1);
                return;
            }
        }

        // H. Wrapped Slider Controls (Settings Modal)
        if (active && active.classList && active.classList.contains("tv-slider-wrap")) {
            if (isLeft || isRight) {
                e.preventDefault();
                e.stopPropagation();
                adjustSlider(active, isRight ? 1 : -1);
                return;
            }
            if (isDown || isUp) {
                e.preventDefault();
                e.stopPropagation();
                if (!moveFocusVertical(active, isDown ? 1 : -1)) {
                    moveFocusInScope(active, isDown ? 1 : -1);
                }
                return;
            }
        }

        // I. Custom Focusable Controls (OK Button)
        if (isOk && active && active.classList && active.classList.contains("tv-focus-ctrl")) {
            e.preventDefault();
            var inner = active.querySelector("input");
            if (inner) inner.click();
            else active.click();
            return;
        }

        // J. Shajara & Awraad Section Reader Mode (when focus is on page body/frame outside Timer)
        if (bookState.sectionMode && !startMenuState.open && !isAnyModalOpen()) {
            if (isUp || isDown) {
                e.preventDefault();
                e.stopPropagation();
                scrollCurrentPage(isDown ? 1 : -1);
                return;
            }
            if (isLeft || isBack) {
                e.preventDefault();
                e.stopPropagation();
                focusMenuBar(active);
                return;
            }
            if (isRight) {
                var activeSec = document.querySelector(".shijra-section.tv-active-section");
                var cardR = activeSec ? activeSec.querySelector(".timer-card") : null;
                if (cardR) {
                    var ordR = getOrderedTimerControls(cardR);
                    if (ordR.length > 0) {
                        e.preventDefault();
                        ordR[0].focus({ preventScroll: true });
                        tvNavState.lastPageFocusEl = ordR[0];
                        return;
                    }
                }
                if (focusFirstNavbarControl()) {
                    e.preventDefault();
                    return;
                }
            }
        }

        // K. Home Splash Screen
        if (document.body.classList.contains("tv-home-splash") && !startMenuState.open && !isAnyModalOpen()) {
            if (isLeft) {
                e.preventDefault();
                focusMenuBar(null);
                return;
            }
            if (isUp) {
                e.preventDefault();
                if (!focusFirstNavbarControl()) focusMenuBar(null);
                return;
            }
            if (isRight && active && active.id === "tvSplashStartBtn") {
                e.preventDefault();
                if (!focusFirstNavbarControl()) {
                    var mainBtnS = document.getElementById("tvSbMainMenu");
                    if (mainBtnS) openStartMenu("main", mainBtnS, true);
                }
                return;
            }
        }

        // L. Apple Page Mode (All other reading pages: Dalail Hizbs, Bashair, Usboo, Duas, Daily)
        if (bookState.enabled && !bookState.sectionMode && !bookState.pausedForScroll && !document.body.classList.contains("tv-home-splash") && !startMenuState.open && !isAnyModalOpen()) {
            var isInput = active && /^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName);
            var isBtn = active && (active.tagName === "BUTTON" || active.classList.contains("tv-step-btn"));

            if (!isInput && !isBtn) {
                if (isLeft) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!turnPageByDirection("left")) {
                        // At left page boundary -> optional clean exit to Menu Bar
                        focusMenuBar(active);
                    }
                    return;
                }
                if (isRight) {
                    e.preventDefault();
                    e.stopPropagation();
                    turnPageByDirection("right");
                    return;
                }
                if (isUp) {
                    e.preventDefault();
                    e.stopPropagation();
                    savePagePosition(active);
                    if (!focusFirstNavbarControl()) focusMenuBar(active);
                    return;
                }
                if (isBack) {
                    e.preventDefault();
                    e.stopPropagation();
                    focusMenuBar(active);
                    return;
                }
            }
        }
    }, true);

    var clickEnhTimer = null;
    document.addEventListener("click", function(e) {
        var btn = e.target && e.target.closest ? e.target.closest("button, .tv-step-btn") : null;
        if (btn && isTimerControl(btn)) return;
        if (clickEnhTimer) clearTimeout(clickEnhTimer);
        clickEnhTimer = setTimeout(prepareOpenModals, 120);
    }, true);

    function initTv() {
        document.body.classList.add("awraad-tv");
        updateNavbarHeightVar();
        buildCompactSidebar();
        ensureBottomBar();
        hideDuplicateMobileRail();
        enhanceNavbarControls();

        if (isIndexPage()) {
            buildFullStartMenuTree();
            ensureGreenSplashScreen();
        }

        prepareOpenModals();
        if (!document.body.classList.contains("tv-home-splash")) {
            initContentReaderMode();
        } else {
            setTimeout(function() {
                var mainBtn = document.getElementById("tvSbMainMenu");
                if (mainBtn && !isAnyModalOpen()) mainBtn.focus();
            }, 220);
        }

        setInterval(suppressStrayOverlaysAndSyncNamaz, 1000);

        var obsTimer = null;
        var bodyObs = new MutationObserver(function(mutations) {
            var hasRelevantChange = false;
            for (var i = 0; i < mutations.length; i++) {
                var m = mutations[i];
                if (m.target && m.target.closest && m.target.closest(".timer-card, .zikr-display")) continue;
                if (m.type === "childList" && (m.addedNodes.length > 0 || m.removedNodes.length > 0)) {
                    if (m.target === document.body || (m.target.id && /modal|search/i.test(m.target.id))) {
                        hasRelevantChange = true;
                        break;
                    }
                }
                if (m.type === "attributes" && m.target && m.target.id && /modal/i.test(m.target.id)) {
                    hasRelevantChange = true;
                    break;
                }
            }
            if (!hasRelevantChange) return;

            if (obsTimer) clearTimeout(obsTimer);
            obsTimer = setTimeout(function() {
                hideDuplicateMobileRail();
                if (isIndexPage()) {
                    hideAllHomeNavCards();
                    ensureGreenSplashScreen();
                }
                prepareOpenModals();
            }, 140);
        });
        bodyObs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "style"] });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function() {
            initTv();
            setTimeout(prepareOpenModals, 400);
        });
    } else {
        initTv();
        setTimeout(prepareOpenModals, 400);
    }
})();


// === AWRAAAD BATCH1 INTEGRATIONS START ===
(function () {
  if (window.__awraadBatch1Initialized) return;
  window.__awraadBatch1Initialized = true;

  const SPEEDS = [3, 2, 1, 0.75, 0.5, 0.1];
  let currentSpeed = 1;
  let tvAutoScrollTimer = null;
  let tvAutoScrollActive = false;
  let subFrac = 0;

  function playSharedAllahCompletionSound() {
    try {
      if (typeof htmlAudio !== 'undefined' && htmlAudio) {
        htmlAudio.pause();
        htmlAudio.currentTime = 0;
        const p = htmlAudio.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
        return;
      }
      const candidates = (typeof AUDIO_CANDIDATES !== 'undefined' && Array.isArray(AUDIO_CANDIDATES) && AUDIO_CANDIDATES.length)
        ? AUDIO_CANDIDATES
        : ['./allah.mp3', './timer-durood.mp3'];
      const audioEl = new Audio(candidates[0]);
      const p = audioEl.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch (_) {}
  }

  function hookTasbeehCompletion() {
    const tasbeehScope = document.querySelector('#tasbeehModal, #tasbeehMinimized, [data-tasbeeh], .tasbeeh-container') || document.body;
    if (!tasbeehScope || tasbeehScope.__allahHooked) return;
    tasbeehScope.__allahHooked = true;

    let lastTriggeredKey = '';
    const checkCompletion = () => {
      const countEl = tasbeehScope.querySelector('[id*="tasbeehCount"], [class*="tasbeeh-count"], .tasbeeh-current, #tasbeeh-count');
      const targetEl = tasbeehScope.querySelector('[id*="tasbeehTarget"], [class*="tasbeeh-target"], .tasbeeh-target, #tasbeeh-target');
      if (!countEl || !targetEl) return;
      const cur = parseInt((countEl.textContent || '').replace(/[^0-9]/g, ''), 10);
      const tgt = parseInt((targetEl.textContent || '').replace(/[^0-9]/g, ''), 10);
      if (!Number.isFinite(cur) || !Number.isFinite(tgt) || tgt <= 0) return;
      const key = tgt + ':' + cur;
      if (cur > 0 && cur % tgt === 0 && key !== lastTriggeredKey) {
        lastTriggeredKey = key;
        playSharedAllahCompletionSound();
      } else if (cur % tgt !== 0) {
        lastTriggeredKey = '';
      }
    };

    const obs = new MutationObserver(checkCompletion);
    obs.observe(tasbeehScope, { childList: true, characterData: true, subtree: true });
    tasbeehScope.addEventListener('click', () => setTimeout(checkCompletion, 20), true);
  }

  function formatRemaining(ms) {
    const totalMin = Math.max(1, Math.ceil(ms / 60000));
    const hrs = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    if (hrs > 0) return hrs + ' hr, ' + mins + ' min';
    return mins + ' min';
  }

  function parseMinutesToday(val, baseDate) {
    if (!val || typeof val !== 'string') return null;
    const m = val.trim().match(/^(d{1,2}):(d{2})(?:s*(AM|PM))?$/i);
    if (!m) return null;
    let h = parseInt(m[1], 10);
    const min = parseInt(m[2], 10);
    const mer = (m[3] || '').toUpperCase();
    if (mer === 'PM' && h < 12) h += 12;
    if (mer === 'AM' && h === 12) h = 0;
    const d = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), h, min, 0, 0);
    return d.getTime();
  }

  function getPrayerTimingsMs(now) {
    const src = window.prayerTimes || window.PRAYER_TIMES || window.dailyPrayerTimes || null;
    if (src && typeof src === 'object') {
      const fajr = parseMinutesToday(src.fajr || src.Fajr, now);
      const sunrise = parseMinutesToday(src.sunrise || src.Sunrise || src.shuruq, now);
      const zuhr = parseMinutesToday(src.zuhr || src.Zuhr || src.dhuhr || src.Dhuhr, now);
      const asr = parseMinutesToday(src.asr || src.Asr, now);
      const maghrib = parseMinutesToday(src.maghrib || src.Maghrib, now);
      const isha = parseMinutesToday(src.isha || src.Isha, now);
      if (fajr && sunrise && zuhr && asr && maghrib && isha) {
        return { fajr, sunrise, zuhr, asr, maghrib, isha };
      }
    }
    const y = now.getFullYear(), m = now.getMonth(), d = now.getDate();
    const at = (hh, mm) => new Date(y, m, d, hh, mm, 0, 0).getTime();
    return {
      fajr: at(5, 15),
      sunrise: at(6, 35),
      zuhr: at(12, 20),
      asr: at(16, 15),
      maghrib: at(17, 45),
      isha: at(19, 15)
    };
  }

  function computeNamaazPhase(now) {
    const t = now.getTime();
    const p = getPrayerTimingsMs(now);
    const dayMs = 86400000;
    const minMs = 60000;

    const fajr0 = p.fajr;
    const sun0 = p.sunrise;
    const sunForbEnd = sun0 + 20 * minMs;
    const zuhrForbStart = p.zuhr - 20 * minMs;
    const zuhr0 = p.zuhr;
    const asr0 = p.asr;
    const magForbStart = p.maghrib - 20 * minMs;
    const mag0 = p.maghrib;
    const isha0 = p.isha;
    const nextFajr = fajr0 + dayMs;
    const prevIsha = isha0 - dayMs;

    if (t >= fajr0 && t < sun0) {
      return { namaaz: 'Fajr', rem: formatRemaining(sun0 - t) };
    }
    if (t >= sun0 && t < sunForbEnd) {
      return { namaaz: 'Forbidden Time', rem: formatRemaining(sunForbEnd - t) };
    }
    if (t >= sunForbEnd && t < zuhrForbStart) {
      return { namaaz: 'Ishraq o Chasht', rem: formatRemaining(zuhrForbStart - t) };
    }
    if (t >= zuhrForbStart && t < zuhr0) {
      return { namaaz: 'Forbidden Time', rem: formatRemaining(zuhr0 - t) };
    }
    if (t >= zuhr0 && t < asr0) {
      return { namaaz: 'Zuhr', rem: formatRemaining(asr0 - t) };
    }
    if (t >= asr0 && t < magForbStart) {
      return { namaaz: 'Asr', rem: formatRemaining(magForbStart - t) };
    }
    if (t >= magForbStart && t < mag0) {
      return { namaaz: 'Forbidden Time', rem: formatRemaining(mag0 - t) };
    }
    if (t >= mag0 && t < isha0) {
      return { namaaz: 'Maghrib', rem: formatRemaining(isha0 - t) };
    }
    if (t >= isha0 && t < nextFajr) {
      return { namaaz: 'Isha', rem: formatRemaining(nextFajr - t) };
    }
    return { namaaz: 'Isha', rem: formatRemaining(fajr0 - t) };
  }

  function updateNextNamaazWidget() {
    const info = computeNamaazPhase(new Date());
    const candidates = document.querySelectorAll('[id*="nextNamaaz"], [id*="next-namaaz"], [class*="next-namaaz"], [data-next-namaaz]');
    candidates.forEach((el) => {
      if (!el) return;
      const line1 = 'Namaaz: ' + info.namaaz;
      const line2 = 'Remaining Time: ' + info.rem;
      if (el.children.length >= 2) {
        el.children[0].textContent = line1;
        el.children[1].textContent = line2;
      } else {
        el.innerHTML = '';
        const d1 = document.createElement('div');
        d1.textContent = line1;
        const d2 = document.createElement('div');
        d2.textContent = line2;
        el.appendChild(d1);
        el.appendChild(d2);
      }
    });
  }

  function getScrollTarget() {
    return document.querySelector('.shijra-section.tv-active-section')
      || document.querySelector('.continuous-frame')
      || document.scrollingElement
      || document.documentElement;
  }

  function stopTvScroll() {
    tvAutoScrollActive = false;
    if (tvAutoScrollTimer) {
      clearInterval(tvAutoScrollTimer);
      tvAutoScrollTimer = null;
    }
    syncTvScrollUi();
  }

  function startTvScroll() {
    stopTvScroll();
    tvAutoScrollActive = true;
    subFrac = 0;
    syncTvScrollUi();

    tvAutoScrollTimer = setInterval(() => {
      if (!tvAutoScrollActive) return;
      const target = getScrollTarget();
      if (!target) return;
      const pxPerTick = currentSpeed * 0.9 + subFrac;
      const step = Math.floor(pxPerTick);
      subFrac = pxPerTick - step;

      const maxScroll = Math.max(0, target.scrollHeight - target.clientHeight);
      if (maxScroll > 0 && target.scrollTop >= maxScroll - 1) {
        stopTvScroll();
        return;
      }
      if (step > 0) {
        if (target === document.documentElement || target === document.scrollingElement) {
          window.scrollBy(0, step);
        } else {
          target.scrollTop = Math.min(maxScroll, target.scrollTop + step);
        }
      }
    }, 30);
  }

  function syncTvScrollUi() {
    const dock = document.getElementById('awraadTvScrollDock');
    if (!dock) return;
    const playBtn = dock.querySelector('.awraad-tv-scroll-btn');
    if (playBtn) {
      playBtn.textContent = tvAutoScrollActive ? 'Pause' : 'Play';
      playBtn.classList.toggle('is-playing', tvAutoScrollActive);
      playBtn.setAttribute('aria-pressed', String(tvAutoScrollActive));
    }
    dock.querySelectorAll('.awraad-tv-speed-btn').forEach((btn) => {
      const val = parseFloat(btn.getAttribute('data-speed') || '1');
      const active = Math.abs(val - currentSpeed) < 0.001;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function ensureTvScrollDock() {
    if (!document.body || !document.body.classList.contains('awraad-tv')) return;
    if (document.getElementById('awraadTvScrollDock')) {
      syncTvScrollUi();
      return;
    }
    const dock = document.createElement('div');
    dock.id = 'awraadTvScrollDock';
    dock.className = 'awraad-tv-scroll-dock';
    dock.setAttribute('role', 'group');
    dock.setAttribute('aria-label', 'TV Scroll Controls');

    const playBtn = document.createElement('button');
    playBtn.type = 'button';
    playBtn.className = 'awraad-tv-scroll-btn';
    playBtn.textContent = 'Play';
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (tvAutoScrollActive) stopTvScroll();
      else startTvScroll();
      playBtn.focus({ preventScroll: true });
    });
    dock.appendChild(playBtn);

    SPEEDS.forEach((sp) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'awraad-tv-speed-btn';
      b.setAttribute('data-speed', String(sp));
      b.textContent = sp + 'x';
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSpeed = sp;
        syncTvScrollUi();
        b.focus({ preventScroll: true });
      });
      dock.appendChild(b);
    });

    document.body.appendChild(dock);
    syncTvScrollUi();
  }

  function bindTvDockArrowNav() {
    document.addEventListener('keydown', (e) => {
      if (!document.body || !document.body.classList.contains('awraad-tv')) return;
      const dock = document.getElementById('awraadTvScrollDock');
      if (!dock) return;
      const active = document.activeElement;
      if (!active || !dock.contains(active)) return;
      const items = Array.from(dock.querySelectorAll('button'));
      const idx = items.indexOf(active);
      if (idx === -1) return;
      if (e.key === 'ArrowRight' || e.keyCode === 39) {
        e.preventDefault();
        e.stopPropagation();
        const next = items[(idx + 1) % items.length];
        if (next) next.focus({ preventScroll: true });
      } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
        e.preventDefault();
        e.stopPropagation();
        const prev = items[(idx - 1 + items.length) % items.length];
        if (prev) prev.focus({ preventScroll: true });
      }
    }, true);
  }

  function initBatch1() {
    hookTasbeehCompletion();
    updateNextNamaazWidget();
    ensureTvScrollDock();
    bindTvDockArrowNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBatch1, { once: true });
  } else {
    initBatch1();
  }
  setInterval(updateNextNamaazWidget, 60000);
})();
// === AWRAAAD BATCH1 INTEGRATIONS END ===


// === AWRAAAD FINAL INTEGRATIONS START ===
(function () {
  if (window.__awraadFinalApplied) return;
  window.__awraadFinalApplied = true;

  const SPEED_OPTIONS = [3, 2, 1, 0.75, 0.5, 0.1];
  const OVERLAY_MODE_KEY = 'awraad_overlay_preference';
  let tvSpeed = 1;
  let tvScrollTimer = null;
  let tvScrollPlaying = false;
  let tvScrollCarry = 0;

  // 1. Tasbeeh - Allah.mp3 Completion Sound
  function playTimerAllahAudio() {
    try {
      if (typeof htmlAudio !== 'undefined' && htmlAudio) {
        htmlAudio.pause();
        htmlAudio.currentTime = 0;
        const p = htmlAudio.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
        return;
      }
      const candidates = (typeof AUDIO_CANDIDATES !== 'undefined' && Array.isArray(AUDIO_CANDIDATES) && AUDIO_CANDIDATES.length)
        ? AUDIO_CANDIDATES
        : ['./allah.mp3', './timer-durood.mp3'];
      const audio = new Audio(candidates[0]);
      const p = audio.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch (_) {}
  }

  function wireTasbeehCompletionSound() {
    const countEl = document.getElementById('tasbeehCount');
    const targetEl = document.getElementById('tasbeehTarget');
    if (!countEl || !targetEl) return;

    let lastCompleteKey = '';
    const checkCount = () => {
      const cur = parseInt((countEl.textContent || countEl.value || '').replace(/[^0-9]/g, ''), 10);
      const tgt = parseInt((targetEl.textContent || targetEl.value || '').replace(/[^0-9]/g, ''), 10);
      if (!Number.isFinite(cur) || !Number.isFinite(tgt) || tgt <= 0) return;
      const key = tgt + ':' + cur;
      if (cur > 0 && cur % tgt === 0 && lastCompleteKey !== key) {
        lastCompleteKey = key;
        playTimerAllahAudio();
      } else if (cur % tgt !== 0) {
        lastCompleteKey = '';
      }
    };

    const observer = new MutationObserver(checkCount);
    observer.observe(countEl, { childList: true, characterData: true, subtree: true });
    observer.observe(targetEl, { childList: true, characterData: true, subtree: true });
    countEl.addEventListener('change', checkCount);
    targetEl.addEventListener('change', checkCount);
  }

  // 2. Next Namaaz Section - Current Namaaz / Forbidden Time + Remaining Time
  function formatRemainingDuration(ms) {
    const totalMinutes = Math.max(1, Math.ceil(ms / 60000));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours > 0) return hours + ' hr, ' + minutes + ' min';
    return minutes + ' min';
  }

  function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000);
    return Math.floor(diff / 86400000);
  }

  function degToRad(deg) { return (deg * Math.PI) / 180; }
  function radToDeg(rad) { return (rad * 180) / Math.PI; }

  function calcSolarMinutes(date, lat, lng, tzHours, isSunrise, zenithDeg) {
    const n = getDayOfYear(date);
    const lngHour = lng / 15;
    const t = n + ((isSunrise ? 6 : 18) - lngHour) / 24;
    const M = (0.9856 * t) - 3.289;
    let L = M + (1.916 * Math.sin(degToRad(M))) + (0.020 * Math.sin(degToRad(2 * M))) + 282.634;
    L = ((L % 360) + 360) % 360;
    let RA = radToDeg(Math.atan(0.91764 * Math.tan(degToRad(L))));
    RA = ((RA % 360) + 360) % 360;
    const Lquad = Math.floor(L / 90) * 90;
    const RAquad = Math.floor(RA / 90) * 90;
    RA = (RA + (Lquad - RAquad)) / 15;
    const sinDec = 0.39782 * Math.sin(degToRad(L));
    const cosDec = Math.cos(Math.asin(sinDec));
    const cosH = (Math.cos(degToRad(zenithDeg)) - (sinDec * Math.sin(degToRad(lat)))) / (cosDec * Math.cos(degToRad(lat)));
    if (cosH > 1 || cosH < -1) return null;
    const H = (isSunrise ? (360 - radToDeg(Math.acos(cosH))) : radToDeg(Math.acos(cosH))) / 15;
    const T = H + RA - (0.06571 * t) - 6.622;
    let UT = ((T - lngHour) % 24 + 24) % 24;
    return ((UT + tzHours + 24) % 24) * 60;
  }

  function resolveCoordinates() {
    let lat = 17.3850;
    let lng = 78.4867;
    try {
      const sLat = parseFloat(localStorage.getItem('app_lat') || localStorage.getItem('awraad_lat') || '');
      const sLng = parseFloat(localStorage.getItem('app_lng') || localStorage.getItem('awraad_lng') || '');
      if (Number.isFinite(sLat) && Number.isFinite(sLng)) {
        lat = sLat;
        lng = sLng;
      }
    } catch (_) {}
    const tzHours = -(new Date().getTimezoneOffset()) / 60;
    return { lat, lng, tzHours };
  }

  function minsToMs(baseDate, mins) {
    const whole = Math.round(mins);
    const h = Math.floor((((whole % 1440) + 1440) % 1440) / 60);
    const m = ((whole % 60) + 60) % 60;
    return new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), h, m, 0, 0).getTime();
  }

  function buildDayTimings(date, coords) {
    const sunMin = calcSolarMinutes(date, coords.lat, coords.lng, coords.tzHours, true, 90.833) ?? (6 * 60 + 25);
    const magMin = (typeof getMaghribMinutesFromCoords === 'function')
      ? getMaghribMinutesFromCoords(date, coords.lat, coords.lng)
      : (calcSolarMinutes(date, coords.lat, coords.lng, coords.tzHours, false, 90.833) ?? (17 * 60 + 45));

    const fajrMin = Math.max(240, sunMin - 80);
    const zuhrMin = 12 * 60 + 20;
    const asrMin = Math.max(zuhrMin + 150, magMin - 90);
    const ishaMin = Math.min(23 * 60 + 45, magMin + 85);

    return {
      fajr: minsToMs(date, fajrMin),
      sunrise: minsToMs(date, sunMin),
      zuhr: minsToMs(date, zuhrMin),
      asr: minsToMs(date, asrMin),
      maghrib: minsToMs(date, magMin),
      isha: minsToMs(date, ishaMin)
    };
  }

  function getCurrentNamaazPhase(now) {
    const coords = resolveCoordinates();
    const today = buildDayTimings(now, coords);
    const tomorrow = buildDayTimings(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1), coords);

    const t = now.getTime();
    const minMs = 60000;

    if (t < today.fajr) return { namaaz: 'Isha', rem: formatRemainingDuration(today.fajr - t) };
    if (t >= today.fajr && t < today.sunrise) return { namaaz: 'Fajr', rem: formatRemainingDuration(today.sunrise - t) };
    const sunForbiddenEnd = today.sunrise + 20 * minMs;
    if (t >= today.sunrise && t < sunForbiddenEnd) return { namaaz: 'Forbidden Time', rem: formatRemainingDuration(sunForbiddenEnd - t) };
    const zuhrForbiddenStart = today.zuhr - 20 * minMs;
    if (t >= sunForbiddenEnd && t < zuhrForbiddenStart) return { namaaz: 'Ishraq o Chasht', rem: formatRemainingDuration(zuhrForbiddenStart - t) };
    if (t >= zuhrForbiddenStart && t < today.zuhr) return { namaaz: 'Forbidden Time', rem: formatRemainingDuration(today.zuhr - t) };
    if (t >= today.zuhr && t < today.asr) return { namaaz: 'Zuhr', rem: formatRemainingDuration(today.asr - t) };
    const magForbiddenStart = today.maghrib - 20 * minMs;
    if (t >= today.asr && t < magForbiddenStart) return { namaaz: 'Asr', rem: formatRemainingDuration(magForbiddenStart - t) };
    if (t >= magForbiddenStart && t < today.maghrib) return { namaaz: 'Forbidden Time', rem: formatRemainingDuration(today.maghrib - t) };
    if (t >= today.maghrib && t < today.isha) return { namaaz: 'Maghrib', rem: formatRemainingDuration(today.isha - t) };
    return { namaaz: 'Isha', rem: formatRemainingDuration(tomorrow.fajr - t) };
  }

  function updateNamaazDisplay() {
    const phase = getCurrentNamaazPhase(new Date());
    const line1 = 'Namaaz: ' + phase.namaaz;
    const line2 = 'Remaining Time: ' + phase.rem;

    document.querySelectorAll('[id], [class], [data-label], [aria-label]').forEach((el) => {
      const sig = ((el.id || '') + ' ' + (typeof el.className === 'string' ? el.className : '')).toLowerCase();
      if (sig.includes('next-namaaz') || sig.includes('nextnamaaz') || sig.includes('next-namaz') || sig.includes('nextnamaz')) {
        if (el.children && el.children.length >= 2) {
          el.children[0].textContent = line1;
          el.children[1].textContent = line2;
        } else {
          el.textContent = line1 + ' | ' + line2;
        }
      }
    });
  }

  // 3. TV Scroll Controls
  function stopTvScroll() {
    tvScrollPlaying = false;
    if (tvScrollTimer) {
      clearInterval(tvScrollTimer);
      tvScrollTimer = null;
    }
    if (typeof window.awraadStopAutoScroll === 'function') {
      try { window.awraadStopAutoScroll(); } catch (_) {}
    }
    syncTvScrollBar();
  }

  function startTvScroll() {
    stopTvScroll();
    tvScrollPlaying = true;
    tvScrollCarry = 0;
    syncTvScrollBar();

    tvScrollTimer = setInterval(() => {
      if (!tvScrollPlaying) return;
      const scroller = document.querySelector('.shijra-section.tv-active-section')
        || document.querySelector('.continuous-frame')
        || document.scrollingElement
        || document.documentElement;
      if (!scroller) return;

      const delta = (tvSpeed * 1.1) + tvScrollCarry;
      const step = Math.floor(delta);
      tvScrollCarry = delta - step;

      const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
      if (maxScroll > 0 && scroller.scrollTop >= maxScroll - 1) {
        stopTvScroll();
        return;
      }
      if (step > 0) {
        if (scroller === document.documentElement || scroller === document.scrollingElement) {
          window.scrollBy(0, step);
        } else {
          scroller.scrollTop = Math.min(maxScroll, scroller.scrollTop + step);
        }
      }
    }, 30);
  }

  function syncTvScrollBar() {
    const bar = document.getElementById('awraadTvScrollBar');
    if (!bar) return;
    const playBtn = bar.querySelector('.awraad-tv-scroll-btn');
    if (playBtn) {
      playBtn.textContent = tvScrollPlaying ? 'Pause' : 'Play';
      playBtn.classList.toggle('playing', tvScrollPlaying);
    }
    bar.querySelectorAll('.awraad-tv-speed-chip').forEach((chip) => {
      const v = parseFloat(chip.getAttribute('data-speed') || '1');
      chip.classList.toggle('active', Math.abs(v - tvSpeed) < 0.001);
    });
    const lbl = document.getElementById('autoScrollSpeedLabel');
    if (lbl) lbl.textContent = 'Speed ' + tvSpeed + 'x';
  }

  function mountTvScrollBar() {
    if (!document.body || !document.body.classList.contains('awraad-tv')) return;
    const host = document.getElementById('autoScrollBar') || document.body;
    if (document.getElementById('awraadTvScrollBar')) {
      syncTvScrollBar();
      return;
    }

    const bar = document.createElement('div');
    bar.id = 'awraadTvScrollBar';
    bar.className = 'awraad-tv-scroll-bar';

    const playBtn = document.createElement('button');
    playBtn.type = 'button';
    playBtn.className = 'awraad-tv-scroll-btn';
    playBtn.textContent = 'Play';
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (tvScrollPlaying) stopTvScroll();
      else startTvScroll();
      playBtn.focus({ preventScroll: true });
    });
    bar.appendChild(playBtn);

    SPEED_OPTIONS.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'awraad-tv-speed-chip';
      btn.setAttribute('data-speed', String(opt));
      btn.textContent = opt + 'x';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tvSpeed = opt;
        syncTvScrollBar();
        btn.focus({ preventScroll: true });
      });
      bar.appendChild(btn);
    });

    if (host === document.body) {
      bar.style.position = 'fixed';
      bar.style.right = '20px';
      bar.style.bottom = '20px';
      bar.style.zIndex = '99950';
      document.body.appendChild(bar);
    } else {
      host.prepend(bar);
    }
    syncTvScrollBar();
  }

  function bindTvScrollBarKeys() {
    document.addEventListener('keydown', (e) => {
      if (!document.body || !document.body.classList.contains('awraad-tv')) return;
      const bar = document.getElementById('awraadTvScrollBar');
      if (!bar) return;
      const cur = document.activeElement;
      if (!cur || !bar.contains(cur)) return;
      const btns = Array.from(bar.querySelectorAll('button'));
      const i = btns.indexOf(cur);
      if (i === -1) return;
      if (e.key === 'ArrowRight' || e.keyCode === 39) {
        e.preventDefault();
        e.stopPropagation();
        const next = btns[(i + 1) % btns.length];
        if (next) next.focus({ preventScroll: true });
      } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
        e.preventDefault();
        e.stopPropagation();
        const prev = btns[(i - 1 + btns.length) % btns.length];
        if (prev) prev.focus({ preventScroll: true });
      }
    }, true);
  }

  // 4. App Always-on-Top / Overlay Permission Helper
  function getOverlayPlugin() {
    const cap = window.Capacitor;
    if (cap && cap.Plugins) {
      return cap.Plugins.OverlayPermission || cap.Plugins.SystemAlertWindow || cap.Plugins.AppOverlay || null;
    }
    return window.AwraadOverlay || null;
  }

  async function readOverlayPermissionState() {
    const plugin = getOverlayPlugin();
    if (plugin && typeof plugin.canDrawOverlays === 'function') {
      try {
        const res = await plugin.canDrawOverlays();
        return Boolean(res && (res.granted === true || res.allowed === true || res.value === true));
      } catch (_) {}
    }
    try {
      return localStorage.getItem(OVERLAY_MODE_KEY) === 'enabled';
    } catch (_) {
      return false;
    }
  }

  async function openAndroidOverlaySettings() {
    const plugin = getOverlayPlugin();
    if (plugin && typeof plugin.requestOverlayPermission === 'function') {
      try { await plugin.requestOverlayPermission(); } catch (_) {}
    }
    if (plugin && typeof plugin.openOverlaySettings === 'function') {
      try { await plugin.openOverlaySettings(); } catch (_) {}
    }
    try {
      const cap = window.Capacitor;
      if (cap && cap.Plugins && cap.Plugins.AppLauncher && typeof cap.Plugins.AppLauncher.openUrl === 'function') {
        await cap.Plugins.AppLauncher.openUrl({ url: 'android.settings.action.MANAGE_OVERLAY_PERMISSION' });
      }
    } catch (_) {}
  }

  async function syncKeepOnTopAndOverlayHelper() {
    if (!document.body) return;
    document.body.classList.add('awraad-keep-top');
    const isNative = (typeof isNativeCapacitorApp === 'function') ? isNativeCapacitorApp() : false;
    const overlayEnabled = await readOverlayPermissionState();

    const settingsBtn = document.getElementById('openSettingsBtn');
    const host = settingsBtn ? settingsBtn.parentElement : null;
    if (host && !document.getElementById('awraadOverlayHelperBox')) {
      const box = document.createElement('div');
      box.id = 'awraadOverlayHelperBox';
      box.className = 'awraad-overlay-helper';

      const info = document.createElement('span');
      info.id = 'awraadOverlayInfoText';
      info.textContent = overlayEnabled
        ? 'Overlay Mode: Enabled (Full-Screen Active)'
        : (isNative
            ? 'Overlay Mode: Standard Full-Screen (Optional Android Overlay Permission)'
            : 'Overlay Mode: Standard Full-Screen');

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'awraad-overlay-action-btn';
      btn.textContent = overlayEnabled ? 'Disable Overlay Mode' : 'Manage Overlay Permission';
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (!overlayEnabled) {
          try { localStorage.setItem(OVERLAY_MODE_KEY, 'enabled'); } catch (_) {}
          await openAndroidOverlaySettings();
        } else {
          try { localStorage.setItem(OVERLAY_MODE_KEY, 'disabled'); } catch (_) {}
        }
        setTimeout(syncKeepOnTopAndOverlayHelper, 400);
      });

      box.appendChild(info);
      box.appendChild(btn);
      host.appendChild(box);
    } else {
      const info = document.getElementById('awraadOverlayInfoText');
      const btn = document.querySelector('#awraadOverlayHelperBox .awraad-overlay-action-btn');
      if (info) {
        info.textContent = overlayEnabled
          ? 'Overlay Mode: Enabled (Full-Screen Active)'
          : (isNative
              ? 'Overlay Mode: Standard Full-Screen (Optional Android Overlay Permission)'
              : 'Overlay Mode: Standard Full-Screen');
      }
      if (btn) {
        btn.textContent = overlayEnabled ? 'Disable Overlay Mode' : 'Manage Overlay Permission';
      }
    }
  }

  function bootFinal() {
    wireTasbeehCompletionSound();
    updateNamaazDisplay();
    mountTvScrollBar();
    bindTvScrollBarKeys();
    syncKeepOnTopAndOverlayHelper();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootFinal, { once: true });
  } else {
    bootFinal();
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      updateNamaazDisplay();
      syncKeepOnTopAndOverlayHelper();
    }
  });
  setInterval(updateNamaazDisplay, 60000);
})();
// === AWRAAAD FINAL INTEGRATIONS END ===
