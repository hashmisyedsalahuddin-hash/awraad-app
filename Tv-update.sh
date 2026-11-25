#!/usr/bin/env bash


AWRAAD_DIR="/storage/emulated/0/Awraad"
[ -d "$AWRAAD_DIR" ] || AWRAAD_DIR="/sdcard/Awraad"


if [ ! -d "$AWRAAD_DIR" ]; then
  echo "❌ Awraad folder nahi mila! Pehle 'termux-setup-storage' chalayein."
  exit 1
fi


echo "🚀 Smart TV Update (Windows Start Menu + Apple Page Mode + Auto Cache Clear) shuru..."


# ==========================================================
# 1. Tajweed_Style.css: TV-Only Styles (Zero Mobile Impact)
# ==========================================================
AWRAAD_DIR="$AWRAAD_DIR" node << 'TV_CSS_WIN_EOF'
const fs = require("fs");
const path = require("path");
const cssPath = path.join(process.env.AWRAAD_DIR, "Tajweed_Style.css");


if (!fs.existsSync(cssPath)) {
  console.error("❌ Tajweed_Style.css nahi mila");
  process.exit(1);
}


let css = fs.readFileSync(cssPath, "utf8");
css = css.replace(/\n*\/\* === AWRAAD TV SUPPORT === \*\/[\s\S]*?\/\* === END AWRAAD TV SUPPORT === \*\/\n*/g, "\n");
css = css.replace(/\n*\/\* === AWRAAD TV SETTINGS FIX === \*\/[\s\S]*?\/\* === END AWRAAD TV SETTINGS FIX === \*\/\n*/g, "\n");


let navbarIsFixed = false;
for (const m of css.matchAll(/([^{}\n]+)\{([^}]+)\}/g)) {
  if (/\.app-navbar\b/.test(m[1]) && /position\s*:\s*fixed/i.test(m[2])) {
    navbarIsFixed = true;
    break;
  }
}


const navbarRule = navbarIsFixed
  ? `
body.awraad-tv .app-navbar {
  left: 84px !important;
  width: calc(100% - 84px) !important;
  right: 0 !important;
}`
  : `
body.awraad-tv .app-navbar {
  width: 100% !important;
  max-width: 100% !important;
}`;


const tvCss = `
/* === AWRAAD TV SUPPORT === */
#tvCompactSidebar,
#tvStartMenuBackdrop,
#tvStartMenuWrap,
#tvPageBar {
  display: none;
}


/* Sabhi rules SIRF Smart TV (body.awraad-tv) par — Mobile 100% untouched */
body.awraad-tv {
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100dvh !important;
  margin: 0 !important;
  padding-left: 84px !important;
  padding-right: 0 !important;
  box-sizing: border-box !important;
  overflow-x: clip !important;
}


body.awraad-tv.tv-book-active {
  height: 100dvh !important;
  overflow: hidden !important;
}


body.awraad-tv a:focus,
body.awraad-tv a:focus-visible,
body.awraad-tv button:focus,
body.awraad-tv button:focus-visible,
body.awraad-tv [role="button"]:focus,
body.awraad-tv [tabindex="0"]:focus,
body.awraad-tv .tv-slider-wrap:focus,
body.awraad-tv .tv-focus-ctrl:focus,
body.awraad-tv input:focus,
body.awraad-tv select:focus {
  outline: 3px solid #d4af37 !important;
  outline-offset: 2px !important;
  box-shadow: 0 0 0 5px rgba(212, 175, 55, 0.30) !important;
  border-radius: 8px;
}


body.awraad-tv #tvBookViewport:focus {
  outline: none !important;
  box-shadow: none !important;
}


/* TV par full drawer, duplicate mobile rail, aur bulky Nav Cards hide */
body.awraad-tv #awraadSideDrawer,
body.awraad-tv #awraadDrawerBackdrop,
body.awraad-tv #openDrawerBtn,
body.awraad-tv .tv-hide-mobile-rail,
body.awraad-tv .tv-hide-nav-cards {
  display: none !important;
  pointer-events: none !important;
}
${navbarRule}


body.awraad-tv .tv-badge-left-shift {
  left: 92px !important;
  z-index: 9980 !important;
}


body.awraad-tv .tv-badge-below-modal {
  z-index: 9980 !important;
}


/* LEVEL 1: STICKY 84px COMPACT SIDEBAR */
body.awraad-tv #tvCompactSidebar {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  width: 84px !important;
  height: 100dvh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 2px !important;
  padding: 5px 4px !important;
  margin: 0 !important;
  box-sizing: border-box !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  z-index: 100075 !important;
  background: #fbf7ee !important;
  border-right: 2px solid rgba(197, 155, 39, 0.55) !important;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.25) !important;
}


body.awraad-tv.dark-mode #tvCompactSidebar {
  background: #14221d !important;
  border-right-color: rgba(212, 175, 55, 0.45) !important;
}


body.awraad-tv #tvCompactSidebar .tv-sb-btn {
  width: 74px !important;
  height: calc((100dvh - 20px) / 10) !important;
  min-height: 38px !important;
  max-height: 60px !important;
  padding: 2px 2px !important;
  margin: 0 !important;
  border: none !important;
  border-radius: 8px !important;
  background: transparent !important;
  color: #0c3b2e !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 2px !important;
  cursor: pointer !important;
  flex-shrink: 0 !important;
  font-family: system-ui, -apple-system, sans-serif !important;
}


body.awraad-tv.dark-mode #tvCompactSidebar .tv-sb-btn {
  color: #f0e6d2 !important;
}


body.awraad-tv #tvCompactSidebar .tv-sb-btn:hover,
body.awraad-tv #tvCompactSidebar .tv-sb-btn:focus,
body.awraad-tv #tvCompactSidebar .tv-sb-btn.tv-sb-active {
  background: rgba(212, 175, 55, 0.24) !important;
}


body.awraad-tv #tvCompactSidebar .tv-sb-btn svg {
  width: 18px !important;
  height: 18px !important;
  flex-shrink: 0 !important;
  stroke: currentColor !important;
  fill: none !important;
  stroke-width: 2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}


body.awraad-tv #tvCompactSidebar .tv-sb-lbl {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  font-size: 10.5px !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  color: #0c3b2e !important;
  white-space: nowrap !important;
  text-align: center !important;
}


body.awraad-tv.dark-mode #tvCompactSidebar .tv-sb-lbl {
  color: #f0e6d2 !important;
}


/* LEVEL 2 & 3: WINDOWS OS START MENU CASCADING FLYOUT */
body.awraad-tv #tvStartMenuBackdrop.open {
  display: block !important;
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 84px !important;
  background: rgba(0, 0, 0, 0.26) !important;
  z-index: 100060 !important;
}


body.awraad-tv #tvStartMenuWrap.open {
  display: flex !important;
  position: fixed !important;
  top: 0 !important;
  left: 84px !important;
  bottom: 36px !important;
  max-width: calc(100vw - 96px) !important;
  z-index: 100065 !important;
  align-items: flex-start !important;
  pointer-events: none !important;
  direction: ltr !important;
  padding-top: 8px !important;
  box-sizing: border-box !important;
}


body.awraad-tv .tv-sm-panel {
  pointer-events: auto !important;
  display: flex !important;
  flex-direction: column !important;
  max-height: calc(100dvh - 52px) !important;
  background: #fbf7ee !important;
  color: #0c3b2e !important;
  border-top: 2px solid #c59b27 !important;
  border-right: 2px solid #c59b27 !important;
  border-bottom: 2px solid #c59b27 !important;
  border-radius: 0 12px 12px 0 !important;
  box-shadow: 8px 6px 26px rgba(0, 0, 0, 0.34) !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
}


body.awraad-tv.dark-mode .tv-sm-panel {
  background: #162620 !important;
  color: #f4ebd9 !important;
  border-color: #b8860b !important;
}


body.awraad-tv #tvSmCol2 {
  width: 268px !important;
  min-width: 240px !important;
}


body.awraad-tv #tvSmCol3 {
  display: none !important;
  width: 340px !important;
  min-width: 280px !important;
  max-width: calc(100vw - 380px) !important;
  margin-left: -2px !important;
  border-left: 1.5px solid rgba(197, 155, 39, 0.50) !important;
}


body.awraad-tv #tvSmCol3.open {
  display: flex !important;
}


body.awraad-tv .tv-sm-head {
  background: #0c3b2e !important;
  color: #f5d87e !important;
  padding: 10px 14px !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  letter-spacing: 0.3px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-shrink: 0 !important;
  font-family: system-ui, -apple-system, sans-serif !important;
}


body.awraad-tv .tv-sm-hint {
  font-size: 11px !important;
  font-weight: 600 !important;
  color: rgba(244, 235, 217, 0.80) !important;
}


body.awraad-tv .tv-sm-list {
  display: flex !important;
  flex-direction: column !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  padding: 6px !important;
  gap: 4px !important;
}


body.awraad-tv .tv-sm-row {
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 10px !important;
  padding: 10px 12px !important;
  border: 1px solid transparent !important;
  border-left: 4px solid transparent !important;
  border-radius: 8px !important;
  background: transparent !important;
  color: #0c3b2e !important;
  cursor: pointer !important;
  text-align: left !important;
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
}


body.awraad-tv.dark-mode .tv-sm-row {
  color: #f4ebd9 !important;
}


body.awraad-tv .tv-sm-row:hover,
body.awraad-tv .tv-sm-row:focus,
body.awraad-tv .tv-sm-row.tv-sm-selected {
  background: rgba(212, 175, 55, 0.18) !important;
  border-color: rgba(197, 155, 39, 0.45) !important;
  border-left-color: #d4af37 !important;
}


body.awraad-tv .tv-sm-text {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 2px !important;
}


body.awraad-tv .tv-sm-title {
  display: block !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 1.35 !important;
  color: inherit !important;
  font-family: 'Amiri', system-ui, sans-serif !important;
}


body.awraad-tv .tv-sm-title.tv-sm-rtl {
  direction: rtl !important;
  text-align: right !important;
  font-size: 18px !important;
}


body.awraad-tv .tv-sm-sub {
  display: block !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.25 !important;
  color: #55645e !important;
  font-family: system-ui, -apple-system, sans-serif !important;
}


body.awraad-tv .tv-sm-sub.tv-sm-rtl {
  direction: rtl !important;
  text-align: right !important;
  font-family: 'Amiri', system-ui, sans-serif !important;
  font-size: 14px !important;
}


body.awraad-tv.dark-mode .tv-sm-sub {
  color: #c9bfa9 !important;
}


body.awraad-tv .tv-sm-arrow {
  flex-shrink: 0 !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  color: #c59b27 !important;
}


/* APPLE PAGE MODE (HORIZONTAL PAGINATION) */
body.awraad-tv .continuous-frame {
  max-width: none !important;
  width: calc(100% - 12px) !important;
  margin: 6px !important;
  box-sizing: border-box !important;
}


body.awraad-tv.tv-book-active .continuous-frame {
  height: var(--tv-frame-h, calc(100dvh - 104px)) !important;
  max-height: var(--tv-frame-h, calc(100dvh - 104px)) !important;
  min-height: 0 !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}


body.awraad-tv.tv-book-active #tvBookViewport {
  position: relative !important;
  width: 100% !important;
  height: 100% !important;
  flex: 1 1 auto !important;
  overflow: hidden !important;
  direction: ltr !important;
  box-sizing: border-box !important;
}


body.awraad-tv.tv-book-active #tvBookTrack {
  width: var(--tv-page-w, 100%) !important;
  height: var(--tv-page-h, 100%) !important;
  column-width: var(--tv-page-w, 100%) !important;
  column-gap: 32px !important;
  column-fill: auto !important;
  direction: rtl !important;
  box-sizing: border-box !important;
  will-change: transform;
  transition: transform 0.34s cubic-bezier(0.22, 1, 0.36, 1) !important;
}


body.awraad-tv.tv-book-active #tvBookTrack p,
body.awraad-tv.tv-book-active #tvBookTrack div {
  orphans: 2;
  widows: 2;
}


body.awraad-tv.tv-book-active #tvBookTrack h1,
body.awraad-tv.tv-book-active #tvBookTrack h2,
body.awraad-tv.tv-book-active #tvBookTrack h3,
body.awraad-tv.tv-book-active #tvBookTrack .section-heading,
body.awraad-tv.tv-book-active #tvBookTrack .title-box,
body.awraad-tv.tv-book-active #tvBookTrack .daily-malfooz-container {
  break-inside: avoid !important;
  page-break-inside: avoid !important;
}


body.awraad-tv.tv-book-active #tvBookTrack .section-heading,
body.awraad-tv.tv-book-active #tvBookTrack h1,
body.awraad-tv.tv-book-active #tvBookTrack h2,
body.awraad-tv.tv-book-active #tvBookTrack h3 {
  break-after: avoid !important;
}


body.awraad-tv.tv-book-active #tvBookEndSentinel {
  display: block !important;
  width: 100% !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 0 !important;
  break-before: avoid !important;
}


/* Bottom Slim Apple Page Bar */
body.awraad-tv.tv-book-active #tvPageBar {
  position: fixed !important;
  left: 84px !important;
  right: 0 !important;
  bottom: 0 !important;
  height: 36px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 14px !important;
  padding: 0 18px !important;
  background: rgba(12, 59, 46, 0.94) !important;
  color: #f4ebd9 !important;
  border-top: 1.5px solid rgba(212, 175, 55, 0.55) !important;
  z-index: 9995 !important;
  direction: ltr !important;
  font-family: system-ui, -apple-system, sans-serif !important;
  box-sizing: border-box !important;
}


body.awraad-tv.tv-book-active #tvPageBar .tv-pg-btn {
  background: rgba(255, 255, 255, 0.14) !important;
  color: #f4ebd9 !important;
  border: 1px solid rgba(212, 175, 55, 0.50) !important;
  border-radius: 6px !important;
  padding: 3px 12px !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  line-height: 1.2 !important;
}


body.awraad-tv.tv-book-active #tvPageBar .tv-pg-btn:disabled {
  opacity: 0.35 !important;
}


body.awraad-tv.tv-book-active #tvPageCounter {
  font-size: 13px !important;
  font-weight: 700 !important;
  min-width: 96px !important;
  text-align: center !important;
  color: #f5d87e !important;
}


body.awraad-tv.tv-book-active #tvPageHint {
  position: absolute !important;
  right: 16px !important;
  font-size: 11px !important;
  opacity: 0.85 !important;
  white-space: nowrap !important;
}


body.awraad-tv .daily-malfooz-container,
body.awraad-tv .malfoozat-container,
body.awraad-tv .index-container,
body.awraad-tv .index-section,
body.awraad-tv .hizb-section,
body.awraad-tv .shijra-section,
body.awraad-tv .day-section,
body.awraad-tv .usboo-section,
body.awraad-tv main,
body.awraad-tv .container,
body.awraad-tv .page-container,
body.awraad-tv .content-container {
  max-width: 100% !important;
  box-sizing: border-box !important;
}


/* Slider Wrapper (Sirf TV par) */
body.awraad-tv .tv-slider-wrap {
  display: flex !important;
  align-items: center !important;
  width: 100% !important;
  padding: 5px 6px !important;
  border-radius: 8px !important;
  box-sizing: border-box !important;
}


body.awraad-tv .tv-slider-wrap > input[type="range"] {
  width: 100% !important;
  margin: 0 !important;
}


body.awraad-tv .settings-brightness-row .tv-slider-wrap {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  width: auto !important;
}


/* Settings Modal — 2-Column Landscape */
body.awraad-tv #settingsModal {
  left: 84px !important;
  width: calc(100% - 84px) !important;
  padding: 14px 20px !important;
  box-sizing: border-box !important;
  align-items: center !important;
  justify-content: center !important;
}


body.awraad-tv #settingsModal .settings-card {
  width: min(94%, 960px) !important;
  max-width: 960px !important;
  max-height: 88dvh !important;
  margin: 0 auto !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
}


body.awraad-tv #settingsModal .settings-header {
  padding: 10px 18px !important;
  flex-shrink: 0 !important;
}


body.awraad-tv #settingsModal .settings-body {
  padding: 14px 20px !important;
  overflow-y: auto !important;
  flex: 1 1 auto !important;
  width: 100% !important;
  box-sizing: border-box !important;
}


body.awraad-tv #settingsModal .tv-settings-grid {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
  gap: 14px 26px !important;
  align-items: start !important;
  width: 100% !important;
}


body.awraad-tv #settingsModal .tv-settings-col {
  min-width: 0 !important;
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
}


body.awraad-tv #settingsModal .tv-settings-col > hr.settings-divider:first-child,
body.awraad-tv #settingsModal .tv-settings-col > hr.settings-divider:last-child {
  display: none !important;
}


body.awraad-tv #settingsModal .settings-section-title {
  margin-top: 8px !important;
  margin-bottom: 2px !important;
}


body.awraad-tv #settingsModal .tv-settings-col-right > .settings-section-title:first-child {
  margin-top: 0 !important;
}


body.awraad-tv #settingsModal .settings-divider {
  margin: 10px 0 !important;
}


body.awraad-tv #settingsModal .tv-slider-wrap:focus {
  background: rgba(212, 175, 55, 0.14) !important;
}


/* Tasbeeh Modal */
body.awraad-tv #tasbeehModal:not(.tasbeeh-compact) {
  left: 84px !important;
  width: calc(100% - 84px) !important;
  padding: 14px 20px !important;
  box-sizing: border-box !important;
  align-items: center !important;
  justify-content: center !important;
}


body.awraad-tv #tasbeehModal:not(.tasbeeh-compact) .tasbeeh-content {
  width: min(62vw, 480px) !important;
  max-width: 480px !important;
  max-height: 88dvh !important;
  overflow-y: auto !important;
  margin: 0 auto !important;
  padding: 18px 24px 20px !important;
  box-sizing: border-box !important;
}


body.awraad-tv #tasbeehModal:not(.tasbeeh-compact) .tasbeeh-count-display {
  font-size: 52px !important;
  margin: 6px 0 !important;
}


body.awraad-tv #tasbeehModal:not(.tasbeeh-compact) .tasbeeh-btn-large {
  width: 96px !important;
  height: 96px !important;
  font-size: 22px !important;
  margin: 8px auto !important;
}


/* Warning Dialog */
body.awraad-tv #navWarningModal {
  left: 84px !important;
  width: calc(100% - 84px) !important;
  padding: 14px 20px !important;
  box-sizing: border-box !important;
  align-items: center !important;
  justify-content: center !important;
}


body.awraad-tv #navWarningModal .tasbeeh-content {
  width: min(56vw, 440px) !important;
  max-width: 440px !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
}


/* Prayer Times, Calendar/Events, Bookmarks, Quick Search */
body.awraad-tv #prayerTimesModal,
body.awraad-tv #eventsModal,
body.awraad-tv #bookmarksModal,
body.awraad-tv #quickSearchModal {
  left: 84px !important;
  width: calc(100% - 84px) !important;
  padding: 14px 20px !important;
  box-sizing: border-box !important;
  align-items: center !important;
  justify-content: center !important;
}


body.awraad-tv #prayerTimesModal > div,
body.awraad-tv #eventsModal > div,
body.awraad-tv #bookmarksModal .ux-modal-card,
body.awraad-tv #quickSearchModal .ux-modal-card {
  width: min(92%, 860px) !important;
  max-width: 860px !important;
  max-height: 88dvh !important;
  overflow-y: auto !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
}


/* Sub-Modals */
body.awraad-tv #colorPaletteModal,
body.awraad-tv #hijriStepperModal,
body.awraad-tv #resetAllConfirmModal,
body.awraad-tv .pt-submodal {
  left: 84px !important;
  width: calc(100% - 84px) !important;
  padding: 14px 20px !important;
  box-sizing: border-box !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 100090 !important;
}


body.awraad-tv #colorPaletteModal > div,
body.awraad-tv #hijriStepperModal > div,
body.awraad-tv #resetAllConfirmModal > div,
body.awraad-tv .pt-submodal > div {
  width: min(64vw, 500px) !important;
  max-width: 500px !important;
  max-height: 84dvh !important;
  overflow-y: auto !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
}
/* === END AWRAAD TV SUPPORT === */
`;


fs.writeFileSync(cssPath, css.trimEnd() + "\n" + tvCss, "utf8");
console.log("✅ Tajweed_Style.css updated (TV-Only Windows Start Menu + Apple Page Mode)");
TV_CSS_WIN_EOF


# ==========================================================
# 2. Tajweed_rules.js: PART 20 Windows Start Menu + Apple Page Mode + Auto Cache Clear
# ==========================================================
AWRAAD_DIR="$AWRAAD_DIR" node << 'TV_JS_WIN_EOF'
const fs = require("fs");
const path = require("path");
const dir = process.env.AWRAAD_DIR;
const jsPath = path.join(dir, "Tajweed_rules.js");


if (!fs.existsSync(jsPath)) {
  console.error("❌ Tajweed_rules.js nahi mila");
  process.exit(1);
}


let src = fs.readFileSync(jsPath, "utf8");
src = src.replace(/\n*\/\/ =+\s*\n\/\/ PART 20:[\s\S]*$/, "");


const buildStamp = String(Date.now());


const part20 = `
// ==========================================
// PART 20: SMART TV WINDOWS START MENU + APPLE PAGE MODE + AUTO CLEAR CACHE (ZERO MOBILE IMPACT)
// ==========================================
(function() {
    function isSmartTvDevice() {
        var ua = navigator.userAgent || "";
        var isTvUA = /\\b(TV|Android TV|GoogleTV|SMART-TV|SmartTV|BRAVIA|AFT[A-Z0-9]+|MIBOX|SHIELD|Leanback|CrKey)\\b/i.test(ua);
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
        return p === "/" || p === "" || p.endsWith("index.html");
    }


    function hasArabicChars(str) {
        return /[\\u0600-\\u06FF]/.test(str || "");
    }


    // ------------------------------------------
    // 1. SMART TV AUTOMATIC CLEAR CACHE ENGINE
    // ------------------------------------------
    var TV_BUILD_STAMP = "${buildStamp}";
    var lastCacheCheckAt = 0;


    function runTvAutoCacheClear() {
        if (!navigator.onLine) return;
        var now = Date.now();
        if (now - lastCacheCheckAt < 60000) return;
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


        fetch("./sw.js?tv_chk=" + now, { cache: "no-store" })
            .then(function(res) { return res.ok ? res.text() : ""; })
            .then(function(txt) {
                if (!txt) return;
                var m = txt.match(/CACHE_NAME\\s*=\\s*["']([^"']+)["']/);
                var liveVer = m ? m[1] : ("len_" + txt.length);
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
            })
            .catch(function() {});
    }


    runTvAutoCacheClear();
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") runTvAutoCacheClear();
    });


    // ------------------------------------------
    // 2. APPLE PAGE MODE ENGINE (HORIZONTAL PAGINATION)
    // ------------------------------------------
    var bookState = {
        enabled: false,
        pausedForScroll: false,
        pageIndex: 0,
        totalPages: 1,
        pageWidth: 0,
        stride: 0,
        dirSign: 1,
        currentTx: 0,
        gap: 32
    };


    var MODAL_SELECTORS = [
        "#settingsModal",
        "#tasbeehModal",
        "#navWarningModal",
        "#prayerTimesModal",
        "#eventsModal",
        "#bookmarksModal",
        "#quickSearchModal",
        "#colorPaletteModal",
        "#hijriStepperModal",
        "#resetAllConfirmModal",
        ".pt-submodal"
    ];


    function isAnyModalOpen() {
        for (var i = 0; i < MODAL_SELECTORS.length; i++) {
            var els = document.querySelectorAll(MODAL_SELECTORS[i]);
            for (var j = 0; j < els.length; j++) {
                var el = els[j];
                if (el.id === "tasbeehModal" && el.classList.contains("tasbeeh-compact")) continue;
                var st = window.getComputedStyle(el);
                if (st.display !== "none" && st.visibility !== "hidden" && parseFloat(st.opacity || "1") > 0) {
                    return true;
                }
            }
        }
        return false;
    }


    function ensurePageBar() {
        var bar = document.getElementById("tvPageBar");
        if (bar) return bar;


        bar = document.createElement("div");
        bar.id = "tvPageBar";
        bar.className = "print-none";
        bar.innerHTML =
            '<button type="button" id="tvPgLeftBtn" class="tv-pg-btn" tabindex="-1">&#9664; Left</button>' +
            '<span id="tvPageCounter">Page 1 / 1</span>' +
            '<button type="button" id="tvPgRightBtn" class="tv-pg-btn" tabindex="-1">Right &#9654;</button>' +
            '<span id="tvPageHint">&#9664; &#9654; Page &nbsp;|&nbsp; &#9650; Start Menu</span>';
        document.body.appendChild(bar);


        document.getElementById("tvPgLeftBtn").addEventListener("click", function() {
            turnPageByDirection("left");
        });
        document.getElementById("tvPgRightBtn").addEventListener("click", function() {
            turnPageByDirection("right");
        });
        return bar;
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
        if (!bookState.enabled || bookState.pausedForScroll) return;
        var clamped = Math.max(0, Math.min(bookState.totalPages - 1, idx));
        bookState.pageIndex = clamped;
        applyPageTransform(!!instant);
    }


    function turnPageByDirection(side) {
        if (!bookState.enabled || bookState.pausedForScroll) return false;
        var target = side === "left"
            ? bookState.pageIndex + bookState.dirSign
            : bookState.pageIndex - bookState.dirSign;
        if (target < 0 || target >= bookState.totalPages) return false;
        goToPage(target, false);
        return true;
    }


    function getElementPageIndex(el) {
        var vp = document.getElementById("tvBookViewport");
        if (!vp || !el || !bookState.stride) return 0;
        var vpRect = vp.getBoundingClientRect();
        var r = el.getBoundingClientRect();
        if (r.width <= 0 && r.height <= 0) return 0;
        var vpCenter = (vpRect.left + vpRect.right) / 2;
        var rawCenter = (r.left + r.right) / 2 - bookState.currentTx;
        var col = Math.round(Math.abs(rawCenter - vpCenter) / bookState.stride);
        return Math.max(0, Math.min(bookState.totalPages - 1, col));
    }


    function jumpToHashIfPresent(instant) {
        if (!bookState.enabled || bookState.pausedForScroll) return;
        var rawHash = (window.location.hash || "").replace(/^#/, "");
        if (!rawHash) return;
        var target = document.getElementById(decodeURIComponent(rawHash));
        var track = document.getElementById("tvBookTrack");
        if (target && track && track.contains(target)) {
            goToPage(getElementPageIndex(target), !!instant);
        }
    }


    function recalcBookPages(instant) {
        if (!bookState.enabled || bookState.pausedForScroll) return;
        var frame = document.querySelector(".continuous-frame");
        var vp = document.getElementById("tvBookViewport");
        var track = document.getElementById("tvBookTrack");
        var sentinel = document.getElementById("tvBookEndSentinel");
        if (!frame || !vp || !track || !sentinel) return;


        var nav = document.querySelector(".app-navbar");
        var navH = nav ? Math.ceil(nav.getBoundingClientRect().height) : 54;
        var barH = 36;
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
            recalcBookPages(!!instant);
        }, 90);
    }


    function initApplePageMode() {
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


        ensurePageBar();
        bookState.enabled = true;
        if (!bookState.pausedForScroll) {
            document.body.classList.add("tv-book-active");
        }


        recalcBookPages(true);
        jumpToHashIfPresent(true);
        setTimeout(function() {
            recalcBookPages(true);
            jumpToHashIfPresent(true);
            if (!isIndexPage()) {
                var vpEl = document.getElementById("tvBookViewport");
                if (vpEl && (!document.activeElement || document.activeElement === document.body)) {
                    vpEl.focus({ preventScroll: true });
                }
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
        if (!bookState.enabled) return;
        bookState.pausedForScroll = !bookState.pausedForScroll;
        document.body.classList.toggle("tv-book-active", !bookState.pausedForScroll);
        var track = document.getElementById("tvBookTrack");
        if (bookState.pausedForScroll) {
            if (track) track.style.transform = "none";
        } else {
            scheduleBookRecalc(true);
        }
    }


    window.addEventListener("resize", function() { scheduleBookRecalc(true); });
    window.addEventListener("hashchange", function() {
        setTimeout(function() { jumpToHashIfPresent(false); }, 60);
    });


    // ------------------------------------------
    // 3. WINDOWS START MENU ENGINE (MENU -> SUB MENU -> ITEMS)
    // ------------------------------------------
    var startMenuState = {
        open: false,
        mode: "",
        triggerBtn: null,
        col2Items: [],
        col2ActiveIdx: 0,
        col3Items: []
    };


    function normalizeHrefForCache(rawHref) {
        var href = (rawHref || "").trim();
        if (!href || href === "#" || href.indexOf("javascript:") === 0) return "";
        if (href.indexOf("#") === 0) {
            var fname = (window.location.pathname || "").split("/").pop() || "index.html";
            return "./" + fname + href;
        }
        return href;
    }


    function navigateToHref(href) {
        if (!href) return;
        closeStartMenu(false);


        var curFile = ((window.location.pathname || "").split("/").pop() || "index.html").toLowerCase();
        var hashIdx = href.indexOf("#");
        var targetPath = (hashIdx === -1 ? href : href.slice(0, hashIdx)).replace(/^\\.\\//, "").toLowerCase();
        var targetHash = hashIdx === -1 ? "" : href.slice(hashIdx);


        if ((!targetPath || targetPath === curFile) && targetHash) {
            window.location.hash = targetHash;
            setTimeout(function() {
                jumpToHashIfPresent(false);
                var vp = document.getElementById("tvBookViewport");
                if (vp) vp.focus({ preventScroll: true });
            }, 50);
            return;
        }
        window.location.href = href;
    }


    function extractLinkInfo(a) {
        var parts = [];
        var children = Array.from(a.children || []);
        for (var i = 0; i < children.length; i++) {
            var ch = children[i];
            if (ch.tagName === "SVG" || (ch.querySelector && ch.querySelector("svg") && !(ch.textContent || "").trim())) continue;
            var t = (ch.textContent || "").replace(/\\s+/g, " ").trim();
            if (t && t !== "↑" && t !== "›" && t !== "→") parts.push(t);
        }
        if (parts.length === 0) {
            var full = (a.innerText || a.textContent || "").trim();
            parts = full.split(/\\n+/).map(function(s) { return s.replace(/\\s+/g, " ").trim(); }).filter(Boolean);
        }
        var unique = [];
        for (var j = 0; j < parts.length; j++) {
            if (unique.indexOf(parts[j]) === -1) unique.push(parts[j]);
        }
        return {
            title: unique[0] || "",
            sub: unique.slice(1).join(" — "),
            href: normalizeHrefForCache(a.getAttribute("href") || "")
        };
    }


    function findExactLink(patterns) {
        var scopes = [];
        var drawer = document.getElementById("awraadSideDrawer");
        var shijaraSec = document.getElementById("menu-shijara");
        if (drawer) scopes.push(drawer);
        if (shijaraSec) scopes.push(shijaraSec);
        scopes.push(document);


        for (var s = 0; s < scopes.length; s++) {
            var links = scopes[s].querySelectorAll("a[href]");
            for (var i = 0; i < links.length; i++) {
                var a = links[i];
                if (a.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvPageBar")) continue;
                var href = normalizeHrefForCache(a.getAttribute("href") || "");
                if (!href) continue;
                var txt = (a.textContent || "").replace(/\\s+/g, " ").trim();
                var hay = (txt + " " + href).toLowerCase();
                for (var p = 0; p < patterns.length; p++) {
                    if (patterns[p].test(hay)) {
                        return { title: txt, href: href };
                    }
                }
            }
        }
        return null;
    }


    var SHAJARA_DEFS = [
        { label: "Silsila e Qadria", urdu: "سلسلہ قادریہ", patterns: [/قادر|qadr|qadir/i] },
        { label: "Silsila e Chishtiya", urdu: "سلسلہ چشتیہ", patterns: [/چشت|chisht/i] },
        { label: "Silsila e Akbariya", urdu: "سلسلہ اکبریہ اویسیہ", patterns: [/اکبر|اویس|akbar|uwais|owais/i] }
    ];


    var AWRAAD_DEFS = [
        { label: "Rozana", urdu: "روزانہ کے معمولات", patterns: [/روزانہ|روزمرہ|rozana|daily/i] },
        { label: "Fajr / Maghrib", urdu: "فجر اور مغرب کے بعد کے اذکار", patterns: [/فجر.*مغرب|مغرب.*فجر|fajr.*maghrib|maghrib.*fajr/i] },
        { label: "Har Namaaz", urdu: "ہر نماز کے بعد کے معمولات", patterns: [/ہر\\s*نماز|پانچوں\\s*نماز|har\\s*nama?az/i] },
        { label: "Haftwari", urdu: "ہفت واری اعمال", patterns: [/ہفت(?:ہ)?\\s*واری|اعمال.*ہفت|hafta?wari/i] }
    ];


    function buildDefItems(defs) {
        return defs.map(function(def) {
            var match = findExactLink(def.patterns);
            return {
                title: (match && match.title) ? match.title : def.urdu,
                sub: def.label,
                href: (match && match.href) ? match.href : "./Shajara_e_Alaviyya.html"
            };
        });
    }


    function collectLinksFromEl(container) {
        if (!container) return [];
        var list = [];
        var seen = new Set();
        container.querySelectorAll("a[href]").forEach(function(a) {
            if (a.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvPageBar")) return;
            var info = extractLinkInfo(a);
            if (!info.href || !info.title) return;
            if (/الرجوع|فهرس|back\\s*to\\s*index/i.test(info.title + " " + info.sub)) return;
            if (/index\\.html(?:#main-menu)?$/i.test(info.href)) return;
            var key = info.href.toLowerCase();
            if (seen.has(key)) return;
            seen.add(key);
            list.push(info);
        });
        return list;
    }


    function buildFullStartMenuTree() {
        var subMenus = [
            { title: "Shajara", sub: "شجرہ علویہ", items: buildDefItems(SHAJARA_DEFS) },
            { title: "Awraad", sub: "معمولاتِ اوراد", items: buildDefItems(AWRAAD_DEFS) }
        ];


        var knownSections = [
            { id: "menu-intro", title: "Muqaddima e Awraad", sub: "مقدمۃ الاوراد", rx: /muqaddima|fatiha|ibtida|intro|مقدم|فاتح|ابتدائی/i },
            { id: "menu-dalail", title: "Dalail ul Khairat", sub: "دلائل الخیرات", rx: /dalail|hizb|asma|دلائل|حزب|اسماء/i },
            { id: "menu-bashair", title: "Bashair ul Khairat", sub: "بشائر الخیرات", rx: /bashair|بشائر/i }
        ];


        var drawer = document.getElementById("awraadSideDrawer");
        var capturedIds = { "menu-shijara": true };
        var capturedHrefs = new Set();


        subMenus.forEach(function(sm) {
            sm.items.forEach(function(it) { if (it.href) capturedHrefs.add(it.href.toLowerCase()); });
        });


        knownSections.forEach(function(sec) {
            capturedIds[sec.id] = true;
            var el = document.getElementById(sec.id);
            var items = collectLinksFromEl(el);
            if (items.length === 0 && drawer) {
                items = collectLinksFromEl(drawer).filter(function(it) {
                    return sec.rx.test(it.title + " " + it.sub + " " + it.href);
                });
            }
            if (items.length > 0) {
                items.forEach(function(it) { capturedHrefs.add(it.href.toLowerCase()); });
                subMenus.push({ title: sec.title, sub: sec.sub, items: items });
            }
        });


        document.querySelectorAll(".index-section").forEach(function(secEl) {
            if (secEl.id && capturedIds[secEl.id]) return;
            var items = collectLinksFromEl(secEl).filter(function(it) {
                return !capturedHrefs.has(it.href.toLowerCase());
            });
            if (items.length === 0) return;
            var head = secEl.querySelector(".section-heading, h2, h3, .title-main");
            var label = head ? (head.textContent || "").replace(/\\s+/g, " ").trim() : "More Awraad";
            items.forEach(function(it) { capturedHrefs.add(it.href.toLowerCase()); });
            subMenus.push({ title: label, sub: "", items: items });
        });


        if (drawer) {
            var extras = collectLinksFromEl(drawer).filter(function(it) {
                if (capturedHrefs.has(it.href.toLowerCase())) return false;
                if (/shajara|shijra|شجرہ/i.test(it.href + " " + it.title)) return false;
                return /\\.html/i.test(it.href);
            });
            if (extras.length > 0) {
                subMenus.push({ title: "More Awraad", sub: "مزید اوراد", items: extras });
            }
        }


        try {
            if (isIndexPage() && subMenus.length >= 3) {
                localStorage.setItem("awraad_tv_start_menu_v1", JSON.stringify(subMenus));
            } else if (subMenus.length <= 2) {
                var cached = JSON.parse(localStorage.getItem("awraad_tv_start_menu_v1") || "null");
                if (Array.isArray(cached) && cached.length > subMenus.length) {
                    return cached;
                }
            }
        } catch (e) {}


        return subMenus;
    }


    function hideHomeNavCardsOnTv() {
        if (!isIndexPage()) return;
        buildFullStartMenuTree();


        document.querySelectorAll("#menu-shijara, #menu-dalail, #menu-bashair, .index-nav-grid, .shijra-grid").forEach(function(el) {
            el.classList.add("tv-hide-nav-cards");
        });


        document.querySelectorAll(".index-section").forEach(function(sec) {
            if (sec.querySelector(".title-box, .daily-malfooz-container")) return;
            sec.classList.add("tv-hide-nav-cards");
        });


        var mainMenu = document.getElementById("main-menu");
        if (mainMenu) {
            Array.from(mainMenu.children).forEach(function(ch) {
                if (ch.querySelector(".title-box, .daily-malfooz-container")) return;
                if (ch.querySelector("a[href], [onclick], button")) {
                    ch.classList.add("tv-hide-nav-cards");
                }
            });
        }
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
                '<div class="tv-sm-head"><span id="tvSmCol2Title">Main Menu</span><span class="tv-sm-hint">&#9664; Close</span></div>' +
                '<div id="tvSmCol2List" class="tv-sm-list"></div>' +
            '</div>' +
            '<div id="tvSmCol3" class="tv-sm-panel" role="menu">' +
                '<div class="tv-sm-head"><span id="tvSmCol3Title">Items</span><span class="tv-sm-hint">OK Open</span></div>' +
                '<div id="tvSmCol3List" class="tv-sm-list"></div>' +
            '</div>';
        document.body.appendChild(wrap);
        return wrap;
    }


    function createMenuRow(item, hasChildren) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "tv-sm-row";


        var textWrap = document.createElement("span");
        textWrap.className = "tv-sm-text";


        var titleEl = document.createElement("span");
        titleEl.className = "tv-sm-title" + (hasArabicChars(item.title) ? " tv-sm-rtl" : "");
        titleEl.textContent = item.title;
        textWrap.appendChild(titleEl);


        if (item.sub) {
            var subEl = document.createElement("span");
            subEl.className = "tv-sm-sub" + (hasArabicChars(item.sub) ? " tv-sm-rtl" : "");
            subEl.textContent = item.sub;
            textWrap.appendChild(subEl);
        }


        btn.appendChild(textWrap);


        if (hasChildren) {
            var arr = document.createElement("span");
            arr.className = "tv-sm-arrow";
            arr.textContent = "▸";
            btn.appendChild(arr);
        }


        return btn;
    }


    function renderCol3ForSubMenu(subMenu, parentIdx) {
        var col3 = document.getElementById("tvSmCol3");
        var col3Title = document.getElementById("tvSmCol3Title");
        var col3List = document.getElementById("tvSmCol3List");
        var col2List = document.getElementById("tvSmCol2List");
        if (!col3 || !col3List) return;


        startMenuState.col2ActiveIdx = parentIdx;
        if (col2List) {
            Array.from(col2List.children).forEach(function(row, idx) {
                row.classList.toggle("tv-sm-selected", idx === parentIdx);
            });
        }


        var items = (subMenu && Array.isArray(subMenu.items)) ? subMenu.items : [];
        startMenuState.col3Items = items;


        if (items.length === 0) {
            col3.classList.remove("open");
            col3List.innerHTML = "";
            return;
        }


        col3Title.textContent = subMenu.title || "Items";
        col3List.innerHTML = "";


        items.forEach(function(it) {
            var row = createMenuRow(it, false);
            row.addEventListener("click", function() {
                navigateToHref(it.href);
            });
            col3List.appendChild(row);
        });


        col3.classList.add("open");
    }


    function openStartMenu(mode, triggerBtn, focusCol2) {
        ensureStartMenuDOM();
        var backdrop = document.getElementById("tvStartMenuBackdrop");
        var wrap = document.getElementById("tvStartMenuWrap");
        var col2Title = document.getElementById("tvSmCol2Title");
        var col2List = document.getElementById("tvSmCol2List");
        var col3 = document.getElementById("tvSmCol3");


        document.querySelectorAll("#tvCompactSidebar .tv-sb-btn").forEach(function(b) {
            b.classList.toggle("tv-sb-active", b === triggerBtn);
        });


        startMenuState.open = true;
        startMenuState.mode = mode;
        startMenuState.triggerBtn = triggerBtn || null;
        startMenuState.col2ActiveIdx = 0;
        startMenuState.col3Items = [];
        col2List.innerHTML = "";
        col3.classList.remove("open");


        if (mode === "shajara" || mode === "awraad") {
            col2Title.textContent = mode === "shajara" ? "Shajara" : "Awraad";
            var directItems = buildDefItems(mode === "shajara" ? SHAJARA_DEFS : AWRAAD_DEFS);
            startMenuState.col2Items = directItems;


            directItems.forEach(function(it, idx) {
                var row = createMenuRow(it, false);
                row.addEventListener("focus", function() {
                    startMenuState.col2ActiveIdx = idx;
                    Array.from(col2List.children).forEach(function(r, j) {
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
            startMenuState.col2Items = tree;


            tree.forEach(function(subMenu, idx) {
                var hasKids = Array.isArray(subMenu.items) && subMenu.items.length > 0;
                var row = createMenuRow(subMenu, hasKids);


                row.addEventListener("focus", function() {
                    renderCol3ForSubMenu(subMenu, idx);
                });
                row.addEventListener("mouseenter", function() {
                    renderCol3ForSubMenu(subMenu, idx);
                });
                row.addEventListener("click", function() {
                    renderCol3ForSubMenu(subMenu, idx);
                    var firstCol3 = document.querySelector("#tvSmCol3List .tv-sm-row");
                    if (firstCol3) firstCol3.focus();
                });


                col2List.appendChild(row);
            });


            if (tree.length > 0) {
                renderCol3ForSubMenu(tree[0], 0);
            }
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
        if (!startMenuState.open) return;
        startMenuState.open = false;
        var backdrop = document.getElementById("tvStartMenuBackdrop");
        var wrap = document.getElementById("tvStartMenuWrap");
        var col3 = document.getElementById("tvSmCol3");
        if (backdrop) backdrop.classList.remove("open");
        if (wrap) wrap.classList.remove("open");
        if (col3) col3.classList.remove("open");


        document.querySelectorAll("#tvCompactSidebar .tv-sb-btn.tv-sb-active").forEach(function(b) {
            b.classList.remove("tv-sb-active");
        });


        if (restoreFocus && startMenuState.triggerBtn) {
            startMenuState.triggerBtn.focus();
        }
    }


    // ------------------------------------------
    // 4. COMPACT SIDEBAR, FLOATING BADGES & MODALS
    // ------------------------------------------
    function fixFloatingBadges() {
        var nodes = document.querySelectorAll("div, span, a, button");
        for (var i = 0; i < nodes.length; i++) {
            var el = nodes[i];
            if (el.id === "tvCompactSidebar" || el.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvPageBar, .app-navbar, #awraadSideDrawer")) continue;
            var st = window.getComputedStyle(el);
            if (st.position !== "fixed") continue;
            var rect = el.getBoundingClientRect();
            if (rect.width <= 0 || rect.width > 280 || rect.height <= 0 || rect.height > 110 || rect.top > 130) continue;
            var txt = (el.textContent || "").trim();
            if (/to\\s+(fajr|dhuhr|zuhr|asr|maghrib|isha|sunrise)/i.test(txt) && rect.left < 88) {
                el.classList.add("tv-badge-left-shift");
            } else if (/adhan|fajr|dhuhr|zuhr|asr|maghrib|isha/i.test(txt)) {
                el.classList.add("tv-badge-below-modal");
            }
        }
    }


    function findTarget(patterns, preferDrawer) {
        var drawer = document.getElementById("awraadSideDrawer");
        var scopes = preferDrawer
            ? (drawer ? [drawer, document] : [document])
            : [document, drawer].filter(Boolean);


        for (var s = 0; s < scopes.length; s++) {
            var list = scopes[s].querySelectorAll("a, button, [onclick], [role='button']");
            for (var i = 0; i < list.length; i++) {
                var el = list[i];
                if (el.closest("#tvCompactSidebar, #tvStartMenuWrap, #tvPageBar")) continue;
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
            if (!el || el.id === "tvCompactSidebar" || el.id === "awraadSideDrawer" || el.id === "tvStartMenuWrap" || el.id === "tvStartMenuBackdrop" || el.id === "tvPageBar") return;
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
                svg: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>',
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
                    var el = findTarget([/search/i], false);
                    if (el) el.click();
                    setTimeout(prepareOpenModals, 120);
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
                    var el = findTarget([/\\burs\\b|calendar/i], true);
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
                    var el = findTarget([/prayer|namaz|namaaz|salat/i], true);
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
                        var isTitle = prev && (prev.classList.contains("settings-section-title") || /arabic\\s*font\\s*size/i.test(prev.textContent || ""));
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
        ["#tasbeehModal", "#prayerTimesModal", "#eventsModal", "#bookmarksModal", "#quickSearchModal", "#colorPaletteModal", "#hijriStepperModal"].forEach(function(sel) {
            var m = document.querySelector(sel);
            if (!m) return;
            m.querySelectorAll(".tasbeeh-close, .tasbeeh-minimize, [onclick]").forEach(function(el) {
                if (/^(BUTTON|A|INPUT|SELECT)$/.test(el.tagName)) return;
                el.classList.add("tv-focus-ctrl");
                el.setAttribute("tabindex", "0");
                el.setAttribute("role", "button");
            });
        });
    }


    function prepareOpenModals() {
        arrangeSettingsModal();
        enhanceOtherModals();
        fixFloatingBadges();
    }


    function moveFocusInScope(active, delta) {
        var scope = active.closest("#settingsModal, #tasbeehModal, #prayerTimesModal, #eventsModal, #bookmarksModal, #quickSearchModal, #colorPaletteModal, #hijriStepperModal") || document;
        var list = Array.from(scope.querySelectorAll(
            '.tv-slider-wrap[tabindex="0"], .tv-focus-ctrl[tabindex="0"], select:not([disabled]), button:not([disabled]), a[href], input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])'
        )).filter(function(node) {
            var st = window.getComputedStyle(node);
            return node.offsetParent !== null && st.visibility !== "hidden" && st.display !== "none" && node.getBoundingClientRect().height > 0;
        });


        var idx = list.indexOf(active);
        if (idx === -1) return;
        var nextIdx = idx + delta;
        if (nextIdx >= 0 && nextIdx < list.length) {
            list[nextIdx].focus();
            list[nextIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
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
    // 5. D-PAD REMOTE CONTROLLER
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


        // A. Level 3 (Items)
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


        // B. Level 2 (Sub Menu)
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
                var firstCol3 = document.querySelector("#tvSmCol3.open #tvSmCol3List .tv-sm-row");
                if (firstCol3) {
                    e.preventDefault();
                    e.stopPropagation();
                    firstCol3.focus();
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


        // C. Level 1 Compact Sidebar
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
                if (active.dataset && active.dataset.menuMode) {
                    e.preventDefault();
                    openStartMenu(active.dataset.menuMode, active, true);
                    return;
                }
                if (startMenuState.open) {
                    var first2 = document.querySelector("#tvSmCol2List .tv-sm-row");
                    if (first2) {
                        e.preventDefault();
                        first2.focus();
                        return;
                    }
                }
                if (bookState.enabled && !bookState.pausedForScroll && !isAnyModalOpen()) {
                    e.preventDefault();
                    var vp = document.getElementById("tvBookViewport");
                    if (vp) vp.focus({ preventScroll: true });
                    return;
                }
            }
            return;
        }


        // D. Wrapped Slider Controls (Settings)
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
                moveFocusInScope(active, isDown ? 1 : -1);
                return;
            }
        }


        // E. Custom Focusable Controls (OK Button)
        if (isOk && active && active.classList && active.classList.contains("tv-focus-ctrl")) {
            e.preventDefault();
            var inner = active.querySelector("input");
            if (inner) inner.click();
            else active.click();
            return;
        }


        // F. Apple Page Mode: Left/Right = Page Flip, Up = Start Menu Sidebar
        if (bookState.enabled && !bookState.pausedForScroll && !startMenuState.open && !isAnyModalOpen()) {
            var inNavbar = active && active.closest && active.closest(".app-navbar");
            var isInput = active && /^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName);


            if (!inNavbar && !isInput) {
                if (isLeft) {
                    e.preventDefault();
                    e.stopPropagation();
                    turnPageByDirection("left");
                    return;
                }
                if (isRight) {
                    e.preventDefault();
                    e.stopPropagation();
                    turnPageByDirection("right");
                    return;
                }
                if (isUp) {
                    var mainBtn = document.getElementById("tvSbMainMenu") || document.querySelector("#tvCompactSidebar .tv-sb-btn");
                    if (mainBtn) {
                        e.preventDefault();
                        mainBtn.focus();
                        return;
                    }
                }
            }
        }
    }, true);


    function initTv() {
        document.body.classList.add("awraad-tv");
        buildCompactSidebar();
        hideDuplicateMobileRail();
        hideHomeNavCardsOnTv();
        prepareOpenModals();
        initApplePageMode();


        if (isIndexPage()) {
            setTimeout(function() {
                var mainBtn = document.getElementById("tvSbMainMenu");
                if (mainBtn && !isAnyModalOpen()) {
                    openStartMenu("main", mainBtn, true);
                }
            }, 320);
        }


        var bodyObs = new MutationObserver(function() {
            hideDuplicateMobileRail();
            prepareOpenModals();
        });
        bodyObs.observe(document.body, { childList: true });
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
`;


fs.writeFileSync(jsPath, src.trimEnd() + "\n" + part20, "utf8");
console.log("✅ Tajweed_rules.js PART 20 updated!");
TV_JS_WIN_EOF


node --check "$AWRAAD_DIR/Tajweed_rules.js" || { echo "❌ JS Syntax Error!"; exit 1; }
echo "✅ JS syntax 100% OK"


if command -v update-context >/dev/null 2>&1; then
  update-context
fi


bash "$AWRAAD_DIR/termux-build.sh"