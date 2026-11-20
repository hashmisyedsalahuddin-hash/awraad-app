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
        var savedSize = localStorage.getItem('app_font_size');
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
        if (savedSize) {
            root.style.setProperty('--user-font-size', savedSize + 'px');
            root.classList.add('custom-size-active');
            if (body) body.classList.add('custom-size-active');
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

    // =========================================================
    // ORDERED PAGE SEQUENCE
    // =========================================================
    const pageSequence = [
        // "Faatihatul_Awraad.html",              // 1. Faatihatul Awraad (agar alag file banayein)
        "Dua_Iftitah.html",                    // 1. Dua-e-Iftitah
        "Dua_Bada_Dalail-ul-Khairaat.html",     // 2. Dua Bad e Dalail-ul-Khairat
        "Tareeqa_Faatiha.html",                // 3. Tareeqa Faatiha
        "Asma_ul_Husna.html",                  // 4. Asma-e-Husna
        "Asma_Un_Nabi.html",                   // 5. Asma-Un-Nabi
        "Monday_Hizb1.html",                   // 6. Al Hizb ul Awwal Fii Youm ul Isnain
        // "Hizb_Saani.html",                     // 7. Hizb Saani (file banate hi uncomment karein)
        // "Hizb_Salis.html",                     // 8. Hizb Salis (file banate hi uncomment karein)
        "Monday_Hizb8.html",                   // 7. Al Hizb Saminu Fii Youm ul Isnain
        "Dua_Yuqrau_Aqeeb_Alaviyya.html"       // 8. Dua Al Aqeeb Awraad Alawiyya
    ];

    function getCurrentPageIndex() {
        const path = window.location.pathname;
        const currentFile = decodeURIComponent(path.substring(path.lastIndexOf('/') + 1)).split('?')[0].split('#')[0].toLowerCase();
        return pageSequence.findIndex(f => f.toLowerCase() === currentFile);
    }

    function getTargetNavUrl(direction) {
        const index = getCurrentPageIndex();
        if (index === -1) return null;

        if (direction === 'next' && index < pageSequence.length - 1) {
            return pageSequence[index + 1];
        } else if (direction === 'back' && index > 0) {
            return pageSequence[index - 1];
        }
        return null;
    }

    function executeNav(direction) {
        const targetUrl = getTargetNavUrl(direction);
        if (targetUrl) {
            window.location.href = targetUrl;
        } else {
            if (direction === 'next') {
                history.forward();
            } else {
                history.back();
            }
        }
    }

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
                } else if (pendingNavAction === 'browser_back' || pendingNavAction === 'back') {
                    history.go(-(TRAP_DEPTH + 1));
                } else if (pendingNavAction === 'next') {
                    history.go(-TRAP_DEPTH);
                    setTimeout(() => { history.forward(); }, 150);
                } else if (pendingNavAction) {
                    history.go(-TRAP_DEPTH);
                    setTimeout(() => { executeNav(pendingNavAction); }, 150);
                }
            });
        }
    }

    function showNavWarning() {
        ensureNavWarningModal();
        const modal = document.getElementById('navWarningModal');
        if (modal) modal.classList.add('show');
    }

    window.navNext = function() {
        const targetUrl = getTargetNavUrl('next');
        if (window.tasbeehSessionActive) {
            pendingNavAction = 'next';
            pendingNavUrl = targetUrl;
            showNavWarning();
            return;
        }
        executeNav('next');
    };

    window.navBack = function() {
        const targetUrl = getTargetNavUrl('back');
        if (window.tasbeehSessionActive) {
            pendingNavAction = 'back';
            pendingNavUrl = targetUrl;
            showNavWarning();
            return;
        }
        executeNav('back');
    };

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
        let beepPlayed = false;
        let audioCtx = null;

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

        function incrementCount() {
            if (count < target) {
                count++;
                localStorage.setItem('tasbeeh_count', count);
                countDisplay.innerText = count;
                updateProgress();
                if (count === target) {
                    pauseAuto();
                    if (!beepPlayed) {
                        playBeep();
                        beepPlayed = true;
                    }
                }
            }
        }

        mainTapBtn.addEventListener('click', () => {
            if (isPinching || (Date.now() - lastPinchEndTime) < 260) return;
            unlockAudio();
            activateTasbeehGuard();
            if (count < target) incrementCount();
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
        document.querySelectorAll('.app-navbar').forEach(el => el.remove());

        const isIndex = window.location.pathname.toLowerCase().endsWith('index.html') || window.location.pathname.endsWith('/');
        const isShajara = window.location.pathname.toLowerCase().endsWith('Shajara_e_Alaviyya.html');
        const indexPath = isIndex ? '#main-menu' : './index.html#main-menu';
        const shajaraBase = isShajara ? '' : './Shajara_e_Alaviyya.html';

        const navbarHTML = `
        <div id="injected-app-navbar" class="app-navbar print-none" dir="ltr">
            <div class="nav-left">
                <div class="dropdown">
                    <button class="nav-btn kebab-btn" title="Menu">⋮</button>
                    <div class="dropdown-content">
                        <a href="${indexPath}" class="menu-item"><span>Main Menu</span> <span class="menu-icon">🏠</span></a>

                        <!-- Shajara e Shareef Submenu -->
                        <button type="button" class="submenu-toggle" data-target="submenu-shajara">
                            <span>Shajara e Shareef</span> <span class="submenu-arrow">▾</span>
                        </button>
                        <div id="submenu-shajara" class="dropdown-submenu">
                            <a href="${shajaraBase}#qadriya" class="menu-item"><span>Silsila e Qadriya</span></a>
                            <a href="${shajaraBase}#chishtiyya" class="menu-item"><span>Silsila e Chishtiya</span></a>
                            <a href="${shajaraBase}#akbariya" class="menu-item"><span>Silsila e Akbariya</span></a>
                            <a href="${shajaraBase}#asnaad" class="menu-item"><span>Asnad e Dalail-ul-Khairat</span></a>
                        </div>

                        <!-- Awraad o Wazaef Submenu -->
                        <button type="button" class="submenu-toggle" data-target="submenu-awraad">
                            <span>Awraad o Wazaef</span> <span class="submenu-arrow">▾</span>
                        </button>
                        <div id="submenu-awraad" class="dropdown-submenu">
                            <a href="${shajaraBase}#rozana" class="menu-item"><span>Rozana</span></a>
                            <a href="${shajaraBase}#fajr-maghrib" class="menu-item"><span>Fajr / Maghrib</span></a>
                            <a href="${shajaraBase}#har-namaz" class="menu-item"><span>Har Namaaz</span></a>
                            <a href="${shajaraBase}#haftawari" class="menu-item"><span>Haftwaar</span></a>
                        </div>

                        <a href="#" id="openTasbeehBtn" class="menu-item"><span>Tasbeeh Counter</span> <span class="menu-icon">📿</span></a>
                        <a href="#" id="openPrayerTimesBtn" class="menu-item"><span>Prayer Times</span> <span class="menu-icon">🕌</span></a>
                        <a href="#" id="openSettingsBtn" class="menu-item"><span>Settings</span> <span class="menu-icon">⚙️</span></a>
                    </div>
                </div>
                <button class="nav-btn" onclick="navBack()" title="Back">◀</button>
            </div>
            <div id="navHijriDate" class="nav-hijri-date" dir="rtl"></div>
            <div class="nav-right">
                <button class="nav-btn" onclick="navNext()" title="Next">▶</button>
                <button id="darkModeToggleNav" class="nav-btn" title="Toggle Dark/Light Mode">🌙</button>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', navbarHTML);

        const currentIdx = getCurrentPageIndex();
        if (currentIdx !== -1) {
            const backBtn = document.querySelector('#injected-app-navbar .nav-left button[onclick="navBack()"]');
            const nextBtn = document.querySelector('#injected-app-navbar .nav-right button[onclick="navNext()"]');
            if (backBtn && currentIdx === 0) {
                backBtn.style.opacity = "0.35";
            }
            if (nextBtn && currentIdx === pageSequence.length - 1) {
                nextBtn.style.opacity = "0.35";
            }
        }

        // UNIVERSAL GLOBAL LINK INTERCEPTOR
        document.body.addEventListener('click', function(e) {
            let link = e.target.closest('a');
            if (!link) return;

            let href = link.getAttribute('href');
            if (!href || href === '#' || href.startsWith('javascript:')) return;
            if (link.id === 'openTasbeehBtn' || link.id === 'openPrayerTimesBtn' || link.id === 'openSettingsBtn' || link.id === 'langToggleBtn') return;

            if (window.tasbeehSessionActive) {
                e.preventDefault();
                e.stopPropagation();
                pendingNavUrl = href;
                pendingNavAction = null;
                showNavWarning();
            }
        }, true);

        const kebabBtn = document.querySelector('.kebab-btn');
        const dropdownContent = document.querySelector('.dropdown-content');

        function closeAllSubmenus() {
            document.querySelectorAll('.dropdown-submenu.open').forEach(sub => sub.classList.remove('open'));
            document.querySelectorAll('.submenu-toggle.active').forEach(btn => btn.classList.remove('active'));
        }

        kebabBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = dropdownContent.classList.toggle('show');
            if (!isOpen) closeAllSubmenus();
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                dropdownContent.classList.remove('show');
                closeAllSubmenus();
            }
        });

        const submenuToggles = document.querySelectorAll('.dropdown-content .submenu-toggle');
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

        const menuItems = document.querySelectorAll('.dropdown-content .menu-item');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function() {
                dropdownContent.classList.remove('show');
                closeAllSubmenus();
            });
        });

        // Open Tasbeeh lazily on click
        const openTasbeehBtn = document.getElementById('openTasbeehBtn');
        if (openTasbeehBtn) {
            openTasbeehBtn.addEventListener('click', (e) => {
                e.preventDefault();
                ensureTasbeehModal();
                const modal = document.getElementById('tasbeehModal');
                const minBar = document.getElementById('tasbeehMinimized');
                if (minBar) minBar.style.display = 'none';
                if (modal) modal.classList.add('show');
                if (typeof refreshTasbeehLayoutRef === 'function') refreshTasbeehLayoutRef();
                dropdownContent.classList.remove('show');
            });
        }

        // Dark mode toggle
        const navDarkModeBtn = document.getElementById('darkModeToggleNav');
        const body = document.body;

        function updateDarkModeIcon() {
            if (navDarkModeBtn) {
                navDarkModeBtn.innerHTML = body.classList.contains('dark-mode') ? '☀️' : '🌙';
            }
        }

        if (localStorage.getItem('theme') === 'dark' || body.classList.contains('dark-mode')) {
            body.classList.add('dark-mode');
            document.documentElement.classList.add('dark-mode');
            updateDarkModeIcon();
        }

        if (navDarkModeBtn) {
            navDarkModeBtn.addEventListener('click', function() {
                body.classList.toggle('dark-mode');
                const isDarkNow = body.classList.contains('dark-mode');
                document.documentElement.classList.toggle('dark-mode', isDarkNow);
                localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
                updateDarkModeIcon();
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
// PART 7: GLOBAL ZIKR TIMER (RESTORED)
// ==========================================
(function() {
    function initTimer() {
        const startBtns = document.querySelectorAll('.zikr-startBtn');
        const resetBtns = document.querySelectorAll('.zikr-resetBtn');
        const displays = document.querySelectorAll('.zikr-display');

        if (startBtns.length === 0) return;

        let timerInterval;
        let totalSeconds = 0;

        function playBeepAlarm() {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            let startTime = audioCtx.currentTime;
            
            for (let i = 0; i < 16; i++) {
                const oscillator = audioCtx.createOscillator();
                oscillator.type = 'square';
                oscillator.frequency.value = 800;
                oscillator.connect(audioCtx.destination);
                oscillator.start(startTime + i * 0.5);
                oscillator.stop(startTime + i * 0.5 + 0.3); // 0.3s beep, 0.2s silence
            }
        }

        function updateAllDisplays() {
            let m = Math.floor(totalSeconds / 60);
            let s = totalSeconds % 60;
            let timeText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
            
            displays.forEach(display => {
                display.innerText = timeText;
            });
        }

        startBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                clearInterval(timerInterval);

                const card = btn.closest('.timer-card');
                const minInput = card.querySelector('.zikr-minutes');
                const secInput = card.querySelector('.zikr-seconds');

                let m = parseInt(minInput.value) || 0;
                let s = parseInt(secInput.value) || 0;
                
                if (m > 0 || s > 0) {
                    totalSeconds = (m * 60) + s;
                    document.querySelectorAll('.zikr-minutes').forEach(input => input.value = '');
                    document.querySelectorAll('.zikr-seconds').forEach(input => input.value = '');
                }

                if (totalSeconds <= 0) return;

                timerInterval = setInterval(() => {
                    totalSeconds--;
                    updateAllDisplays();

                    if (totalSeconds <= 0) {
                        clearInterval(timerInterval);
                        playBeepAlarm(); 
                    }
                }, 1000);
            });
        });

        resetBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                clearInterval(timerInterval);
                totalSeconds = 0;
                updateAllDisplays();
                
                document.querySelectorAll('.zikr-minutes').forEach(input => input.value = '');
                document.querySelectorAll('.zikr-seconds').forEach(input => input.value = '');
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

        window.scrollTo(0, 0);

        // Lazily apply Tajweed only to the newly opened section (after paint for instant switch!)
        if (activeSection && typeof window.applyTajweedToContainer === 'function') {
            requestAnimationFrame(function() {
                window.applyTajweedToContainer(activeSection, false);
            });
        }
    }

    window.showActiveSection = showActiveSection;

    document.addEventListener('click', function (e) {
        var anchor = e.target.closest('a');
        if (!anchor) return;

        var href = anchor.getAttribute('href');
        if (!href || href === '#' || href.startsWith('javascript:')) return;

        if (anchor.id === 'openTasbeehBtn' || anchor.id === 'openPrayerTimesBtn' || anchor.id === 'openSettingsBtn' || anchor.id === 'langToggleBtn') return;

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

    const FONT_STYLESHEETS = {
        "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif": "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap",
        "'Scheherazade New', serif": "https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap",
        "'Noto Naskh Arabic', serif": "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@500;700&display=swap",
        "'Lateef', serif": "https://fonts.googleapis.com/css2?family=Lateef:wght@400;700&display=swap",
        "'Gulzar', serif": "https://fonts.googleapis.com/css2?family=Gulzar&display=swap"
    };

    function ensureFontLoaded(fontFamily) {
        if (!fontFamily || loadedFonts[fontFamily]) return;
        const url = FONT_STYLESHEETS[fontFamily];
        if (!url) return;
        loadedFonts[fontFamily] = true;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
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
        const savedSize = localStorage.getItem('app_font_size');
        const savedContentFont = localStorage.getItem('app_content_font');
        const savedAppFont = localStorage.getItem('app_ui_font');
        const tajweedEnabled = localStorage.getItem('app_tajweed_colors') !== 'false';

        const isDarkTheme = localStorage.getItem('theme') === 'dark';
        body.classList.toggle('dark-mode', isDarkTheme);
        root.classList.toggle('dark-mode', isDarkTheme);

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

        if (savedSize) {
            root.style.setProperty('--user-font-size', savedSize + 'px');
            body.classList.add('custom-size-active');
            root.classList.add('custom-size-active');
        } else {
            root.style.removeProperty('--user-font-size');
            body.classList.remove('custom-size-active');
            root.classList.remove('custom-size-active');
        }

        if (savedContentFont) {
            ensureFontLoaded(savedContentFont);
            root.style.setProperty('--user-content-font', savedContentFont);
            body.classList.add('custom-content-font-active');
            root.classList.add('custom-content-font-active');
        } else {
            root.style.removeProperty('--user-content-font');
            body.classList.remove('custom-content-font-active');
            root.classList.remove('custom-content-font-active');
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

        const fontOptionsHTML = `
            <option value="'Amiri', serif">Amiri (Default)</option>
            <option value="'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif">Jameel Noori / Nastaleeq</option>
            <option value="'Scheherazade New', serif">Scheherazade New</option>
            <option value="'Noto Naskh Arabic', serif">Noto Naskh Arabic</option>
            <option value="'Lateef', serif">Lateef (Indo-Pak)</option>
            <option value="'Gulzar', serif">Gulzar Nastaleeq</option>
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
                        <div>بِسْمِ <span class="allah-name">اللّٰهِ</span> ال<span class="tajweed-ra-pur">رَّ</span>حْمٰنِ ال<span class="tajweed-ra-pur">رَّ</span>حِيْمِ</div>
                        <div>إِ<span class="tajweed-ghunnah">نَّ</span> <span class="allah-name">اللّٰهَ</span> وَمَ<span class="tajweed-madd">لٰٓئِ</span>كَتَهٗ يُ<span class="tajweed-mustaliyah">صَ</span>لُّوْنَ عَلَى <span class="tajweed-ghunnah">النَّ</span>بِيِّ</div>
                    </div>

                    <div class="settings-section-title">
                        <span>Font Size</span>
                        <span id="fontSizeValueLabel">26px</span>
                    </div>
                    <input type="range" id="fontSizeSlider" class="settings-range-slider" min="16" max="42" step="1" value="26">

                    <div class="settings-section-title" style="margin-top: 16px;">
                        <span>Brightness</span>
                        <span id="brightnessValueLabel">100%</span>
                    </div>
                    <div class="settings-brightness-row">
                        <span class="settings-brightness-icon">🔅</span>
                        <input type="range" id="brightnessSlider" class="settings-range-slider" min="0.4" max="1.5" step="0.05" value="1" title="Adjust Brightness">
                        <span class="settings-brightness-icon">☀️</span>
                    </div>

                    <hr class="settings-divider">

                    <div class="settings-font-row">
                        <span class="settings-label-lg" style="font-size:15px;">Content Font</span>
                        <select id="contentFontSelect" class="settings-font-select">${fontOptionsHTML}</select>
                    </div>
                    <div class="settings-font-row">
                        <span class="settings-label-lg" style="font-size:15px;">App Font</span>
                        <select id="appFontSelect" class="settings-font-select">${fontOptionsHTML}</select>
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
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        const fontSizeValueLabel = document.getElementById('fontSizeValueLabel');
        const brightnessSlider = document.getElementById('brightnessSlider');
        const brightnessValueLabel = document.getElementById('brightnessValueLabel');
        const contentFontSelect = document.getElementById('contentFontSelect');
        const appFontSelect = document.getElementById('appFontSelect');

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
            const size = localStorage.getItem('app_font_size') || '26';
            const contentFont = localStorage.getItem('app_content_font') || "'Amiri', serif";
            const appFont = localStorage.getItem('app_ui_font') || "'Amiri', serif";
            const awake = localStorage.getItem('app_keep_awake') === 'true';
            const tajweedOn = localStorage.getItem('app_tajweed_colors') !== 'false';

            fontSizeSlider.value = size;
            fontSizeValueLabel.textContent = size + 'px';

            const savedBrightness = localStorage.getItem('app_brightness') || '1';
            if (brightnessSlider) brightnessSlider.value = savedBrightness;
            if (brightnessValueLabel) {
                brightnessValueLabel.textContent = Math.round(parseFloat(savedBrightness) * 100) + '%';
            }
            contentFontSelect.value = contentFont;
            appFontSelect.value = appFont;

            keepAwakeCheckbox.checked = awake;
            keepAwakeLabel.textContent = awake ? 'ON' : 'OFF';

            tajweedToggleCheckbox.checked = tajweedOn;
            tajweedToggleLabel.textContent = tajweedOn ? 'ON' : 'OFF';

            previewBox.style.setProperty('--preview-bg', bg);
            previewBox.style.setProperty('--preview-text', text);
            previewBox.style.setProperty('--preview-border', border);
            previewBox.style.fontSize = size + 'px';
            previewBox.style.fontFamily = contentFont;

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

        fontSizeSlider.addEventListener('input', () => {
            localStorage.setItem('app_font_size', fontSizeSlider.value);
            applySavedDisplaySettings();
            syncSettingsUI();
        });

        if (brightnessSlider) {
            brightnessSlider.addEventListener('input', () => {
                localStorage.setItem('app_brightness', brightnessSlider.value);
                applyBrightness(brightnessSlider.value);
                if (brightnessValueLabel) {
                    brightnessValueLabel.textContent = Math.round(parseFloat(brightnessSlider.value) * 100) + '%';
                }
            });
        }

        contentFontSelect.addEventListener('change', () => {
            if (contentFontSelect.value === "'Amiri', serif") {
                localStorage.removeItem('app_content_font');
            } else {
                ensureFontLoaded(contentFontSelect.value);
                localStorage.setItem('app_content_font', contentFontSelect.value);
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
    }

    function bootSettingsSystem() {
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
            const dropdown = document.querySelector('.dropdown-content');
            if (dropdown) dropdown.classList.remove('show');
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
            if (text) el.textContent = text;
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
        });
    }

    function bootPrayerTimes() {
        // Lazy-build Prayer Times modal only when user clicks Prayer Times in 3-dots menu
        document.addEventListener('click', (e) => {
            const openBtn = e.target.closest('#openPrayerTimesBtn');
            if (!openBtn) return;
            e.preventDefault();
            buildPrayerModalOnce();
            if (renderPrayerTimesRef) renderPrayerTimesRef();
            const prayerModal = document.getElementById('prayerTimesModal');
            if (prayerModal) prayerModal.classList.add('show');
            const dropdown = document.querySelector('.dropdown-content');
            if (dropdown) dropdown.classList.remove('show');

            if (typeof window.awraadRequestLocationOnce === 'function') {
                window.awraadRequestLocationOnce(() => {
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
        const selectors = [
            '#navWarningModal.show',
            '.hijri-stepper-modal.show',
            '.pt-submodal.show',
            '.palette-modal.show',
            '.settings-modal.show',
            '.prayer-modal.show',
            '#tasbeehModal.show:not(.tasbeeh-compact)',
            '.dropdown-content.show'
        ];
        for (let i = 0; i < selectors.length; i++) {
            const el = document.querySelector(selectors[i]);
            if (el) {
                el.classList.remove('show');
                if (selectors[i].indexOf('tasbeehModal') !== -1 && typeof window.tasbeehPauseAuto === 'function') {
                    window.tasbeehPauseAuto();
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

/* === URS_NOTIFIER_START === */
(function initUrsNotifier() {
    const HIJRI_DAY_OFFSET = -1; // India / Hyderabad moon-sighting offset
    const NOTIFICATION_HOUR = 7; // Subah 7:00 AM
    const NOTIFICATION_MINUTE = 0;
    const SCHEDULE_DAYS_AHEAD = 60;
    const URS_ID_BASE = 78600;
    const CHANNEL_ID = "urs_fatiha_channel";

    const HIJRI_MONTHS_UR = [
        "", "محرم الحرام", "صفر المظفر", "ربیع الاول", "ربیع الثانی",
        "جمادی الاول", "جمادی الثانی", "رجب المرجب", "شعبان المعظم",
        "رمضان المبارک", "شوال المکرم", "ذیقعدہ", "ذی الحجہ"
    ];

    const URS_DATABASE = [
        { day: 5,  month: 1,  name: "حضرت خواجہ فرید الدین مسعود گنج شکر رحمۃ اللہ علیہ", year: "٦٦٢ھ", place: "پاکپتن شریف" },
        { day: 12, month: 1,  name: "حضرت شیخ معروف کرخی رحمۃ اللہ علیہ", year: "٢٠٠ھ", place: "بغداد شریف" },
        { day: 12, month: 1,  name: "حضرت خواجہ ممشاد علو دینوری رحمۃ اللہ علیہ", year: "٢٩٨ھ", place: "دینور" },
        { day: 14, month: 1,  name: "حضرت خواجہ حسن بصری رحمۃ اللہ علیہ", year: "١١٠ھ", place: "بصرہ" },
        { day: 15, month: 1,  name: "حضرت شیخ ابو الفرح یوسف طرطوسی رحمۃ اللہ علیہ", year: "٤٤٧ھ", place: "طرطوس" },
        { day: 27, month: 2,  name: "حضرت خواجہ عبد الواحد بن زید رحمۃ اللہ علیہ", year: "١٧٧ھ", place: "بصرہ" },
        { day: 3,  month: 3,  name: "حضرت شیخ فضیل بن عیاض رحمۃ اللہ علیہ", year: "١٨٧ھ", place: "مکہ معظمہ" },
        { day: 12, month: 3,  name: "سید الكونين حضرت سیدنا محمد رسول اللہ ﷺ", year: "١١ھ", place: "مدینہ منورہ", isProphet: true },
        { day: 14, month: 3,  name: "حضرت خواجہ قطب الدین بختیار کاکی رحمۃ اللہ علیہ", year: "٦٣٣ھ", place: "دہلی" },
        { day: 16, month: 3,  name: "مولانا سید محمد بن سلیمان جزولی حسنی رحمۃ اللہ علیہ (مؤلف دلائل الخیرات)", year: "٨٧٠ھ", place: "مراکش" },
        { day: 6,  month: 4,  name: "حضرت مولانا سید عبد العزیز التباع رحمۃ اللہ علیہ", year: "٩١٤ھ", place: "مراکش" },
        { day: 11, month: 4,  name: "قطب الاقطاب غوث الاعظم سیدنا عبد القادر جیلانی رحمۃ اللہ علیہ", year: "٥٦١ھ", place: "بغداد شریف" },
        { day: 12, month: 4,  name: "حضرت خواجہ خواجگاں ابو اسحاق شامی رحمۃ اللہ علیہ", year: "٣٢٩ھ", place: "شام" },
        { day: 12, month: 4,  name: "حضرت نور المشائخ سید نوری شاہ چشتی قادری رحمۃ اللہ علیہ", year: "١٤١١ھ", place: "بندلہ گوڑہ، حیدرآباد" },
        { day: 18, month: 4,  name: "سلطان المشائخ حضرت خواجہ نظام الدین اولیاء محبوب الٰہی رحمۃ اللہ علیہ", year: "٧٢٥ھ", place: "دہلی" },
        { day: 22, month: 4,  name: "امام الموحدین سیدنا محمد محی الدین ابن عربی شیخ اکبر رحمۃ اللہ علیہ", year: "٦٣٨ھ", place: "دمشق" },
        { day: 29, month: 4,  name: "حضرت محمد کمال اللہ شاہ مچھلی والے شاہ صاحب رحمۃ اللہ علیہ", year: "١٣٥١ھ", place: "حیدرآباد دکن" },
        { day: 28, month: 5,  name: "حضرت شیخ ابراہیم بن ادہم بلخی رحمۃ اللہ علیہ", year: "١٦١ھ", place: "شام" },
        { day: 1,  month: 6,  name: "حضرت شیخ سید ابی نصر رحمۃ اللہ علیہ", year: "٦١٨ھ", place: "دمشق" },
        { day: 1,  month: 6,  name: "حضرت قدوۃ الدین ابو احمد ابدال چشتی رحمۃ اللہ علیہ", year: "٣٥٥ھ", place: "چشت خراسان" },
        { day: 15, month: 6,  name: "حضرت خواجہ سید برہان الدین جانم بیجاپوری رحمۃ اللہ علیہ", year: "٩٩٠ھ", place: "شاہ پور، بیجاپور" },
        { day: 21, month: 6,  name: "حضرت شیخ عبد العزیز تمیمی رحمۃ اللہ علیہ", year: "٣٣٧ھ", place: "یمن" },
        { day: 22, month: 6,  name: "خلیفہ رسول اللہ سیدنا ابو بکر صدیق رضی اللہ عنہ", year: "١٣ھ", place: "مدینہ منورہ" },
        { day: 1,  month: 7,  name: "حضرت خواجہ ابو محمد چشتی رحمۃ اللہ علیہ", year: "٤١١ھ", place: "چشت" },
        { day: 1,  month: 7,  name: "حضرت قطب الدین مودود چشتی رحمۃ اللہ علیہ", year: "٥٢٧ھ", place: "چشت" },
        { day: 6,  month: 7,  name: "حضرت خواجہ سید معین الدین چشتی اجمیری سنجری رحمۃ اللہ علیہ", year: "٦٣٣ھ", place: "اجمیر شریف" },
        { day: 10, month: 7,  name: "حضرت حاجی شریف زندنی رحمۃ اللہ علیہ", year: "٦١٢ھ", place: "بخارا" },
        { day: 10, month: 7,  name: "حضرت سیدی جمال اللہ شاہ حسینی مغربی رحمۃ اللہ علیہ", year: "٨٢٠ھ", place: "شاہ پور، بیجاپور" },
        { day: 13, month: 7,  name: "حضرت ناصر الدین ابو یوسف چشتی رحمۃ اللہ علیہ", year: "٤٥٩ھ", place: "چشت" },
        { day: 27, month: 7,  name: "حضرت شیخ جنید بغدادی رحمۃ اللہ علیہ", year: "٢٩٧ھ", place: "بغداد شریف" },
        { day: 18, month: 8,  name: "حضرت شیخ ابو صالح نصر رحمۃ اللہ علیہ", year: "٦٩٩ھ", place: "مدینہ منورہ" },
        { day: 27, month: 8,  name: "حضرت شیخ ابو سعید مخزومی رحمۃ اللہ علیہ", year: "٥١٣ھ", place: "بغداد شریف" },
        { day: 8,  month: 9,  name: "حضرت مولانا سید عبد القادر الفاسی رحمۃ اللہ علیہ", year: "١٠٩١ھ", place: "فاس" },
        { day: 9,  month: 9,  name: "حضرت شیخ داؤد طائی رحمۃ اللہ علیہ", year: "١٦٢ھ", place: "بغداد شریف" },
        { day: 18, month: 9,  name: "حضرت خواجہ نصیر الدین محمود چراغ دہلوی رحمۃ اللہ علیہ", year: "٧٥٧ھ", place: "دہلی" },
        { day: 21, month: 9,  name: "امیر المومنین حضرت سیدنا علی مرتضیٰ رضی اللہ عنہ", year: "٤٠ھ", place: "نجف اشرف" },
        { day: 29, month: 9,  name: "حضرت خواجہ برہان الدین خدانما رحمۃ اللہ علیہ", year: "١٢٩٠ھ", place: "رائچوٹی" },
        { day: 30, month: 9,  name: "حضرت شیخ سری سقطی رحمۃ اللہ علیہ", year: "٢٥٠ھ", place: "بغداد شریف" },
        { day: 2,  month: 10, name: "حضرت کنز العرفان غوثی شاہ صاحب قبلہ رحمۃ اللہ علیہ", year: "١٣٧٣ھ", place: "بیگم بازار، حیدرآباد" },
        { day: 6,  month: 10, name: "حضرت شیخ سید عبد الرزاق بن غوث الاعظم رحمۃ اللہ علیہ", year: "٥٩٥ھ", place: "بغداد شریف" },
        { day: 15, month: 10, name: "حضرت خواجہ عثمان ہارونی رحمۃ اللہ علیہ", year: "٦١٧ھ", place: "مکہ معظمہ" },
        { day: 16, month: 10, name: "مولانا سید محمد بن احمد المغنی رحمۃ اللہ علیہ", year: "١١٣٦ھ", place: "فاس" },
        { day: 17, month: 10, name: "حضرت خواجہ امین الدین ہبیرہ بصری رحمۃ اللہ علیہ", year: "٢٨٧ھ", place: "بصرہ" },
        { day: 24, month: 10, name: "حضرت خواجہ سدید الدین حذیفہ مرعشی رحمۃ اللہ علیہ", year: "٢٤٦ھ", place: "شام" },
        { day: 25, month: 10, name: "حضرت سید خواجہ میراں جی شمس العشاق بیجاپوری رحمۃ اللہ علیہ", year: "٩٠٥ھ", place: "گلبرگہ شریف" },
        { day: 16, month: 11, name: "حضرت خواجہ سید محمد حسینی گیسو دراز بندہ نواز رحمۃ اللہ علیہ", year: "٨٢٥ھ", place: "گلبرگہ شریف" },
        { day: 1,  month: 12, name: "حضرت مولانا سید احمد بن موسیٰ السملالی رحمۃ اللہ علیہ", year: "٩٧١ھ", place: "مراکش" },
        { day: 6,  month: 12, name: "حضرت خواجہ سید سلطان محمود اللہ چشتی رحمۃ اللہ علیہ", year: "١٣١١ھ", place: "حیدرآباد دکن" },
        { day: 19, month: 12, name: "حضرت شیخ ابو الفضل عبد الواحد تمیمی رحمۃ اللہ علیہ", year: "٤٢٥ھ", place: "بغداد شریف" },
        { day: 27, month: 12, name: "حضرت شیخ ابو بکر عبد اللہ شبلی رحمۃ اللہ علیہ", year: "٣٣٤ھ", place: "بغداد شریف" }
    ];

    function toUrduDigits(num) {
        const urdu = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
        return String(num).replace(/\d/g, d => urdu[d]);
    }

    function getHijriForDate(baseDate) {
        const d = new Date(baseDate.getTime());
        d.setDate(d.getDate() + HIJRI_DAY_OFFSET);
        let parts;
        try {
            parts = new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura-nu-latn", {
                day: "numeric", month: "numeric", year: "numeric"
            }).formatToParts(d);
        } catch (e) {
            parts = new Intl.DateTimeFormat("en-US-u-ca-islamic-nu-latn", {
                day: "numeric", month: "numeric", year: "numeric"
            }).formatToParts(d);
        }
        return {
            day: parseInt(parts.find(p => p.type === "day").value, 10),
            month: parseInt(parts.find(p => p.type === "month").value, 10),
            year: parseInt(parts.find(p => p.type === "year").value, 10)
        };
    }

    function getMatchesForHijri(hijri) {
        return URS_DATABASE.filter(item => item.day === hijri.day && item.month === hijri.month);
    }

    function showUrsPopup(hijri, forceShow = false) {
        const todayKey = `${hijri.year}-${hijri.month}-${hijri.day}`;
        if (!forceShow && localStorage.getItem("urs_dismissed_date") === todayKey) return;

        const matches = getMatchesForHijri(hijri);
        if (matches.length === 0) return;

        const existing = document.getElementById("urs-modal-overlay");
        if (existing) existing.remove();

        const isProphetDay = matches.some(m => m.isProphet);
        const headerTitle = isProphetDay
            ? "🕌 یاددہانیِ ١٢ ربیع الاول و درود و سلام"
            : "🕌 یاددہانیِ یومِ وصال و فاتحہ خوانی";
        const messageText = isProphetDay
            ? "آج ١٢ ربیع الاول کا بابرکت دن ہے۔ کثرت سے درود و سلام کا نذرانہ بارگاہِ رسالت ﷺ میں پیش فرمائیں اور شجرہ شریف کی تلاوت کریں۔"
            : "آج کے بابرکت دن ان بزرگِ دین کا یومِ وصال (عرسِ پاک) ہے۔ براہِ کرم حسبِ توفیق شجرہ شریف، سورہ فاتحہ (١ مرتبہ)، سورہ اخلاص (٣ مرتبہ) اور درود شریف پڑھ کر ان کی روحِ پرفتوح کو ایصالِ ثواب فرمائیں۔";

        const saintsHtml = matches.map(m => `
            <div class="urs-saint-item">
                <div class="urs-saint-name">${m.name}</div>
                <div class="urs-saint-meta">وصال: ${m.year} &nbsp;|&nbsp; مدفن: ${m.place}</div>
            </div>
        `).join("");

        const hijriText = `${toUrduDigits(hijri.day)} ${HIJRI_MONTHS_UR[hijri.month]} ${toUrduDigits(hijri.year)}ھ`;

        const overlay = document.createElement("div");
        overlay.id = "urs-modal-overlay";
        overlay.className = "urs-modal-overlay";
        overlay.innerHTML = `
            <div class="urs-modal-card" role="dialog" aria-modal="true">
                <div class="urs-modal-header">
                    <div class="urs-modal-title">${headerTitle}</div>
                    <div class="urs-hijri-badge">${hijriText}</div>
                </div>
                <div class="urs-saint-list">${saintsHtml}</div>
                <div class="urs-modal-message">${messageText}</div>
                <div class="urs-modal-actions">
                    <a href="Shajara_e_Alaviyya.html#qadriya" class="urs-btn urs-btn-primary" id="urs-read-btn">فاتحہ و شجرہ پڑھیں</a>
                    <button type="button" class="urs-btn urs-btn-close" id="urs-close-btn">جزاک اللہ (بند کریں)</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        const dismiss = () => {
            if (!forceShow) localStorage.setItem("urs_dismissed_date", todayKey);
            overlay.remove();
        };
        overlay.querySelector("#urs-close-btn").addEventListener("click", dismiss);
        overlay.querySelector("#urs-read-btn").addEventListener("click", dismiss);
        overlay.addEventListener("click", (e) => { if (e.target === overlay) dismiss(); });
    }

    async function scheduleAndroidUrsNotifications() {
        const LocalNotifications = window.Capacitor?.Plugins?.LocalNotifications;
        if (!LocalNotifications) return;

        try {
            let perm = await LocalNotifications.checkPermissions();
            if (perm.display !== "granted") perm = await LocalNotifications.requestPermissions();
            if (perm.display !== "granted") return;

            if (typeof LocalNotifications.createChannel === "function") {
                await LocalNotifications.createChannel({
                    id: CHANNEL_ID,
                    name: "یاددہانیِ یومِ وصال و فاتحہ",
                    description: "مشائخ عظام کے یومِ وصال اور عرس کی یاددہانی",
                    importance: 4,
                    visibility: 1
                }).catch(() => {});
            }

            const pending = await LocalNotifications.getPending();
            const oldUrs = (pending.notifications || []).filter(n => n.id >= URS_ID_BASE && n.id < URS_ID_BASE + 100);
            if (oldUrs.length > 0) {
                await LocalNotifications.cancel({ notifications: oldUrs.map(n => ({ id: n.id })) });
            }

            const now = new Date();
            const notificationsToSchedule = [];

            for (let i = 0; i < SCHEDULE_DAYS_AHEAD; i++) {
                const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, NOTIFICATION_HOUR, NOTIFICATION_MINUTE, 0, 0);
                if (targetDate <= now) continue;

                const hijri = getHijriForDate(targetDate);
                const matches = getMatchesForHijri(hijri);
                if (matches.length === 0) continue;

                const isProphetDay = matches.some(m => m.isProphet);
                const hijriText = `${toUrduDigits(hijri.day)} ${HIJRI_MONTHS_UR[hijri.month]}`;
                const namesList = matches.map(m => m.name).join(" اور ");

                notificationsToSchedule.push({
                    id: URS_ID_BASE + i,
                    channelId: CHANNEL_ID,
                    title: isProphetDay
                        ? `🕌 ${hijriText} - یاددہانیِ درود و سلام`
                        : `🕌 یاددہانیِ یومِ وصال (${hijriText})`,
                    body: isProphetDay
                        ? `آج ١٢ ربیع الاول ہے۔ کثرت سے درود و سلام پیش فرمائیں۔`
                        : `آج ${namesList} کا عرسِ پاک ہے۔ فاتحہ خوانی اور ایصالِ ثواب فرمائیں۔`,
                    schedule: { at: targetDate, allowWhileIdle: true }
                });
            }

            if (notificationsToSchedule.length > 0) {
                await LocalNotifications.schedule({ notifications: notificationsToSchedule });
            }
        } catch (err) {
            console.warn("Urs LocalNotification error:", err);
        }
    }

    window.testUrsPopup = function (day, month) {
        const current = getHijriForDate(new Date());
        showUrsPopup({ day, month, year: current.year }, true);
    };

    document.addEventListener("DOMContentLoaded", () => {
        showUrsPopup(getHijriForDate(new Date()), false);
        scheduleAndroidUrsNotifications();
    });
})();
/* === URS_NOTIFIER_END === */
