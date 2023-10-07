# Changelog — Luminaries of Islam

All notable changes to this project will be documented in this file.

Format: `[vMAJOR.MINOR] — YYYY-MM-DD`

---

## [v1.3] — 2026-03-07

### ✨ New Features
- **Trilingual support** — full Arabic (عربي), English, French interface
- **Language switcher** in navigation bar (عر / EN / FR)
- **Full RTL layout** for Arabic mode — layout, cards, modal, quiz all flip correctly
- **Translated scientist content** — bios (3 levels), oneliners, contributions, fun facts, legacy for all 12 scientists
- **Translated quiz** — 12 questions with options and feedback in AR/EN/FR
- **Translated UI** — all labels, buttons, badges, section headers, filter bar, footer
- **Welcome TTS** adapts to selected language
- **Language preference** saved in localStorage

### 🎨 Design
- Language switcher styling (gold active state)
- RTL CSS rules for all components
- Arabic typography (Noto Naskh Arabic, Amiri)

### 📄 Documentation
- Complete rewrite of README.md — full howto, install, architecture, Git-ready
- New README.html — styled, browsable, with table of contents
- Updated CHANGES.md and CHANGES.html for v1.3
- Added .gitignore
- Added MIT LICENSE file

### 🏗️ Architecture
- New `js/i18n.js` module — centralized translation system
- Refactored `app.js` to use I18N module for all rendering
- Refactored quiz engine to use trilingual question data

---

## [v1.2] — 2026-03-07

### ✨ New Features
- Added **Text-to-Speech (TTS)** — read scientist bios, fun facts, and quiz questions aloud
- TTS floating control bar with play/pause/stop and speed control (🐢 Slow / 🚶 Normal / 🐇 Fast)
- TTS speaker buttons (🔊) on scientist cards, detail views, timeline items, and quiz
- Welcome narration message on home page
- Speed preference saved in localStorage

### 🎨 Design
- Speaker button styling with animated "speaking" state (pulsing ring)
- Floating TTS control bar with dark glass-morphism design

---

## [v1.1] — 2026-03-07

### ✨ New Features
- Added **Speech-to-Text (STT)** — voice search for scientists
- Voice answers in quiz mode
- Microphone button with pulsing "listening" animation
- Real-time transcript display while listening
- Graceful fallback for unsupported browsers (mic hidden)

### 🔒 Privacy
- STT uses browser-local API only — no data sent externally
- No voice recordings stored

---

## [v1.0] — 2026-03-07

### 🎉 Initial Release
- 12 Islamic Golden Age scientists with full profiles
- Three-level explanation system (🟢 Newb / 🔵 Explorer / 🟣 Developer)
- Scientists gallery with card layout and field filtering (8 categories)
- Interactive horizontal timeline (8th–14th century)
- Quiz system: 12 questions, 8 random per session, badge rewards
- Scientist detail modal: bio, contributions, fun fact, legacy
- Islamic geometric design with Bismillah header
- CSS-only geometric patterns and animations
- Responsive design (mobile, tablet, desktop)
- Privacy-first: no data collection, no cookies, localStorage only
- Help center, FAQ page
- README and Changelog documentation
