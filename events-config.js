// =========================================================================
// AWRAAD E ALAVIYA NOORIYA — LIVE SESSION (GOOGLE MEET), EVENTS & URS CONFIG
// =========================================================================
// Is file ko jab chahein edit karke naya Google Meet link, Calendar link,
// regular events, monthly Hijri reminders ya Urs dates add kar sakte hain.
// Shajara_e_Alaviyya.html ke tables se Mashaykheen ke Urs dates khud-ba-khud
// (automatically) Calendar aur Events list mein load ho jate hain!
// =========================================================================

window.AWRAAD_EVENTS_CONFIG = {
    autoLoadShajaraUrs: true,

    // 1. LIVE SESSION (PRIMARY)
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
        dayOfWeek: 2,         // Every Tuesday
        startHour: 11,        // 11:00 AM
        startMinute: 0,
        durationMinutes: 60,  // 11:00 AM to 12:00 PM IST (60 mins)
        showEndTime: true,
        timezoneLabel: "IST",
        location: "Online [Google Meet]",
        customStartISO: ""
    },

    // 1B. LIVE EVENTS LIST (Live Session tab mein sabhi recurring sessions show honge)
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
            dayOfWeek: 2,         // Every Tuesday
            startHour: 11,        // 11:00 AM
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
            dayOfWeek: 0,         // Every Sunday
            startHour: 16,        // 4:40 PM
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
            dayOfWeek: 6,         // Every Saturday
            startHour: 7,         // 7:00 AM
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
            intervalWeeks: 2,          // Every Alternate Saturday
            anchorDate: "2026-11-28",  // Agar agle Saturday se cycle ho to "2026-12-05" kar dein
            dayOfWeek: 6,              // Saturday
            startHour: 18,             // Maghrib approx (6:15 PM)
            startMinute: 15,
            durationMinutes: 60,
            showEndTime: false,
            customTimeLabel: "After Maghrib",
            timezoneLabel: "IST",
            location: "",
            customStartISO: ""
        }
    ],

    // 2. PUBLIC GOOGLE CALENDAR EMBED URL (Optional)
    googleCalendarEmbedUrl: "",

    // 3. REGULAR / GREGORIAN EVENTS LIST (Calendar & Upcoming tab)
    events: [
        {
            id: "weekly-tuesday-session",
            title: "Weekly Online Session - Tafseer Ul Quran [ONLY For Ladies]",
            titleUr: "",
            isRecurringWeekly: true,
            intervalWeeks: 1,
            dayOfWeek: 2,         // Every Tuesday
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
            dayOfWeek: 0,         // Every Sunday
            startHour: 16,        // 4:40 PM
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
            dayOfWeek: 6,         // Every Saturday
            startHour: 7,         // 7:00 AM
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
            intervalWeeks: 2,          // Every Alternate Saturday
            anchorDate: "2026-11-28",  // Agar agle Saturday se cycle ho to "2026-12-05" kar dein
            dayOfWeek: 6,              // Saturday
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
            dayOfWeek: 4,         // Every Thursday
            startHour: 21,        // 9:00 PM
            startMinute: 0,
            durationMinutes: 45,
            location: "Online / Home",
            description: "Shab-e-Jumu'ah mein Dalail-ul-Khairat aur khas Durood Shareef ka ihtimam.",
            meetUrl: ""
        }
    ],

    // 3B. MONTHLY HIJRI RECURRING REMINDERS (Har Islami Mahine ki muqarrar taareeq par)
    monthlyHijriEvents: [
        {
            id: "monthly-gyarhween-fatiha",
            title: "Har Chaand ki 11 Taareeq - Gyaarwii ki Faatiha Ka Ihtemaam Kare",
            titleUr: "ہر چاند کی ۱۱ تاریخ — گیارہویں کی فاتحہ کا اہتمام کریں",
            hijriDay: 11,
            description: "Har Chaand ki 11 Taareeq ko Gyaarwii ki Faatiha aur Isaal-e-Sawab ka ihtemaam karein."
        }
    ],

    // 4. EXTRA / CUSTOM HIJRI & URS EVENTS (Optional)
    hijriEvents: [
        {
            id: "urs-ghaus-e-azam",
            type: "urs",
            title: "Urs-e-Ghaus-e-Azam (R.A.) — Gyarhween Shareef",
            titleUr: "عرسِ غوثِ اعظم حضرت شیخ عبدالقادر جیلانی رضی اللہ عنہ",
            hijriDay: 11,
            hijriMonth: 4,      // 11 Rabi-us-Sani
            silsila: "Silsila e Qadriya",
            wisaalYear: "561ھ",
            location: "Baghdad Shareef",
            description: "Gyarhween Shareef — Fatiha, Khatm-e-Qadriya aur Isaal-e-Sawab.",
            shajaraHash: "#qadriya"
        },
        {
            id: "urs-khwaja-gharib-nawaz",
            type: "urs",
            title: "Urs-e-Khwaja Gharib Nawaz (R.A.) — Chhati Shareef",
            titleUr: "عرسِ حضرت خواجہ معین الدین چشتی اجمیری رحمۃ اللہ علیہ",
            hijriDay: 6,
            hijriMonth: 7,      // 6 Rajab
            silsila: "Silsila e Chishtiya",
            wisaalYear: "633ھ",
            location: "Ajmer Shareef",
            description: "Chhati Shareef — Khatm-e-Khwajgan aur Fatiha Khwani.",
            shajaraHash: "#chishtiyya"
        }
    ]
};
