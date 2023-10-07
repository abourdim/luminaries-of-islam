# بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ

# ✨ Luminaries of Islam — Scientists of the Golden Age

> **أنوار الإسلام — علماء العصر الذهبي**
> **Lumières de l'Islam — Scientifiques de l'Âge d'Or**

**Version 1.3** · Interactive Trilingual Educational Web App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Trilingual](https://img.shields.io/badge/Languages-AR%20%7C%20EN%20%7C%20FR-0A6E6E?style=flat)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-C9A84C?style=flat)
![Privacy First](https://img.shields.io/badge/Privacy-First-3A7D44?style=flat)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

---

## 📖 About

**Luminaries of Islam** is a fully offline, privacy-first, interactive web app that teaches children and young learners about **12 groundbreaking Muslim scientists** from the Islamic Golden Age (8th–14th century CE).

The app is designed with:
- **Islamic geometric design** — non-figurative, calligraphy-inspired UI
- **Trilingual support** — Arabic (with RTL), English, French
- **Three knowledge levels** — Newb, Explorer, Developer
- **Voice interaction** — Speech-to-Text (search) + Text-to-Speech (read aloud)
- **Gamified quizzes** — badges, instant feedback, reflection prompts
- **Zero dependencies** — pure HTML, CSS, JavaScript. No frameworks. No build step.

---

## 📸 Screenshots

| Home (EN) | Scientists Grid | Arabic RTL | Quiz |
|-----------|----------------|------------|------|
| Bismillah header + hero | 12 filterable cards | Full RTL layout | Badges + voice answers |

---

## 🚀 Installation

### Option A: Direct Download (Simplest)

1. **Download** the ZIP file: `luminaries-of-islam-v1.3.zip`
2. **Extract** the ZIP to any folder on your computer
3. **Open** `index.html` in your web browser
4. **Done!** No server, no install, no terminal needed

### Option B: Clone from Git

```bash
# Step 1: Clone the repository
git clone https://github.com/YOUR-USERNAME/luminaries-of-islam.git

# Step 2: Enter the project folder
cd luminaries-of-islam

# Step 3: Open in your browser
# On macOS:
open index.html

# On Linux:
xdg-open index.html

# On Windows:
start index.html
```

### Option C: Serve with a Local Server (Optional)

If you want a proper local server (useful for development):

```bash
# Using Python 3:
cd luminaries-of-islam
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

```bash
# Using Node.js (npx):
cd luminaries-of-islam
npx serve .

# Then open the URL shown in the terminal
```

### Requirements

| Requirement | Details |
|-------------|---------|
| **Browser** | Chrome 80+, Edge 80+, Firefox 85+, or Safari 14+ |
| **Server** | ❌ Not required — works directly from filesystem |
| **Internet** | Only for Google Fonts on first load (graceful fallback offline) |
| **Node.js** | ❌ Not required |
| **Build step** | ❌ None — pure HTML/CSS/JS |

---

## 📁 Project Structure

```
luminaries-of-islam/
│
├── index.html              ← 🏠 Main app entry point
│
├── css/
│   └── style.css           ← 🎨 All styles, Islamic patterns, RTL support
│
├── js/
│   ├── i18n.js             ← 🌍 Translations (AR/EN/FR) + scientist i18n data
│   ├── app.js              ← ⚙️ Main app logic, scientist data, quiz engine
│   ├── tts.js              ← 🔊 Text-to-Speech module
│   └── stt.js              ← 🎙️ Speech-to-Text module
│
├── help.html               ← ❓ Help center — navigation, features, troubleshooting
├── faq.html                ← 💬 FAQ — accordion-style common questions
│
├── README.md               ← 📄 This file (Markdown)
├── README.html             ← 📄 README rendered as styled HTML page
├── CHANGES.md              ← 📋 Version history (Markdown)
├── CHANGES.html            ← 📋 Version history (styled HTML)
├── LICENSE                 ← ⚖️ MIT License
└── .gitignore              ← 🚫 Git ignore rules
```

---

## 🎯 Features — Detailed

### 👨‍🔬 Scientists Gallery

12 scholars with rich, trilingual profiles:

| # | Name | العربية | Field | Century | Era |
|---|------|---------|-------|---------|-----|
| 1 | Al-Khwarizmi | الخوارزمي | Mathematics & Algebra | 9th | 780–850 CE |
| 2 | Ibn al-Haytham | ابن الهيثم | Optics & Scientific Method | 10th–11th | 965–1040 CE |
| 3 | Ibn Sina (Avicenna) | ابن سينا | Medicine & Philosophy | 10th–11th | 980–1037 CE |
| 4 | Al-Razi (Rhazes) | الرازي | Medicine & Chemistry | 9th–10th | 854–925 CE |
| 5 | Al-Biruni | البيروني | Astronomy & Geography | 10th–11th | 973–1048 CE |
| 6 | Jabir ibn Hayyan | جابر بن حيان | Chemistry | 8th | 721–815 CE |
| 7 | Al-Zahrawi | الزهراوي | Surgery | 10th | 936–1013 CE |
| 8 | Al-Idrisi | الإدريسي | Geography & Cartography | 12th | 1100–1165 CE |
| 9 | Ibn Khaldun | ابن خلدون | Sociology & History | 14th | 1332–1406 CE |
| 10 | Al-Jazari | الجزري | Engineering & Robotics | 12th–13th | 1136–1206 CE |
| 11 | Omar Khayyam | عمر الخيام | Mathematics & Astronomy | 11th–12th | 1048–1131 CE |
| 12 | Fatima al-Fihri | فاطمة الفهرية | Education | 9th | 800–880 CE |

Each scientist card includes:
- Name in English + Arabic
- Field of expertise
- Era dates
- One-liner summary
- 🔊 Read-aloud button

Each detail modal includes:
- Bio at 3 levels (Newb / Explorer / Developer)
- Key contributions list
- "Did You Know?" fun fact
- Legacy in modern science section
- 🔊 TTS on all sections

### 🌍 Trilingual Interface (AR / EN / FR)

- **Language switcher** in the navigation bar: `عر` / `EN` / `FR`
- Instantly switches ALL content: UI labels, scientist bios, quiz questions, feedback, badges
- **Arabic mode** activates full RTL (right-to-left) layout
- Language preference is saved in `localStorage`
- Bismillah header remains in Arabic in all modes

### 🎓 Three-Level Explanation System

Every scientist bio is written at three levels:

| Level | Icon | Audience | Style |
|-------|------|----------|-------|
| **Newb** | 🟢 | Beginners, young kids | Fun analogies, simple language, relatable comparisons |
| **Explorer** | 🔵 | Curious students | Technical vocabulary, historical context, proper names |
| **Developer** | 🟣 | Advanced learners | Deep analysis, precise data, academic detail, legacy connections |

Switchable globally (nav bar) and per-scientist (modal tabs).

### 📅 Interactive Timeline

- Horizontal scrollable timeline from 8th to 14th century
- Each scientist represented as a dot on the timeline
- Hover reveals name, field, and century
- Click opens full detail modal
- Navigation arrows for scrolling
- 🔊 TTS on each timeline point

### 🏆 Challenge Zone (Quiz)

- 12 total questions, 8 randomly selected per session
- Multiple-choice with instant visual feedback (green/red)
- Trilingual questions, options, and feedback
- Badge progression system:
  - 🌱 **Young Scholar** (< 60%)
  - 📚 **Knowledge Seeker** (60–89%)
  - 🌟 **Golden Age Expert** (90%+)
- End-of-quiz reflection prompt
- Voice answers via STT microphone button
- 🔊 TTS reads questions and feedback aloud

### 🔊 Text-to-Speech (TTS)

- Speaker button (🔊) on: scientist cards, detail modals, timeline, quiz, welcome
- Floating control bar when playing: ▶️ Play/Pause · ⏹ Stop · Speed control
- Speed options: 🐢 Slow (0.7x) · 🚶 Normal (1x) · 🐇 Fast (1.4x)
- Speed preference saved in `localStorage`
- Uses browser-native `SpeechSynthesis` API — **no data sent externally**
- Graceful fallback: TTS buttons hidden if unsupported

### 🎙️ Speech-to-Text (STT)

- Microphone button on home search bar — say a scientist's name
- Microphone button in quiz — say your answer aloud
- Real-time transcript feedback ("Hearing: ...", "I heard: ...")
- Fuzzy matching for scientist names
- Uses browser-native `SpeechRecognition` API — **no voice data stored**
- Graceful fallback: mic buttons hidden if unsupported
- Listening state: animated pulsing ring

### 🎨 Islamic Geometric Design

- **Bismillah header**: always present, centered, elegant gold calligraphy on dark teal
- **Geometric patterns**: CSS-only repeating star/polygon backgrounds
- **Color palette**: Deep Teal (#0A6E6E), Gold (#C9A84C), Cream (#FDF6EC)
- **Typography**: Playfair Display (headings), Source Sans 3 (body), Amiri / Noto Naskh Arabic (Arabic text)
- **Ornaments**: Diamond-shaped section dividers, star motifs, arabesque card borders
- **Non-figurative**: No human/animal imagery — geometry and calligraphy only
- **Animations**: Floating circles, rotating star logo, card fade-in, scroll reveals

---

## 🔒 Privacy & Security

| Concern | Status |
|---------|--------|
| Data collection | ❌ None — zero telemetry |
| Cookies | ❌ None — only `localStorage` for user preferences |
| Analytics / tracking | ❌ None |
| External API calls | ❌ None (except Google Fonts CSS) |
| Voice recording | ❌ Never stored — browser-local only |
| TTS data | ❌ Never transmitted — browser-local only |
| Offline support | ✅ Full (fonts fallback gracefully) |
| Server required | ❌ Runs from filesystem |

**`localStorage` keys used:**
- `app_lang` — selected language (ar/en/fr)
- `learn_level` — selected knowledge level (newb/explorer/developer)
- `tts_speed` — TTS speed preference (0.7/1/1.4)

---

## 📋 Browser Compatibility

| Browser | Layout | TTS | STT | Notes |
|---------|--------|-----|-----|-------|
| Chrome 80+ | ✅ | ✅ | ✅ | Full support — recommended |
| Edge 80+ | ✅ | ✅ | ✅ | Full support |
| Safari 14+ | ✅ | ✅ | ⚠️ | STT limited on iOS |
| Firefox 85+ | ✅ | ✅ | ❌ | No STT (mic hidden automatically) |
| Mobile Chrome | ✅ | ✅ | ✅ | Touch-optimized responsive layout |
| Mobile Safari | ✅ | ✅ | ⚠️ | STT may require user gesture |

---

## 🛠️ How-To Guide

### How to Use the App

1. Open `index.html` in your browser
2. Choose your language: `عر` (Arabic), `EN` (English), or `FR` (French)
3. Choose your level: 🟢 Newb, 🔵 Explorer, or 🟣 Developer
4. Browse scientists by scrolling or using the filter bar
5. Click any card to read the full profile
6. Try the voice search: click 🎤 and say a scientist's name
7. Click 🔊 to hear any content read aloud
8. Scroll to the Timeline to see scientists across centuries
9. Take the Quiz in the Challenge Zone
10. Try to earn the 🌟 Golden Age Expert badge!

### How to Add a New Scientist

1. Open `js/app.js`
2. Add a new object to the `scientists` array:

```javascript
{
    id: 'your-scientist-id',
    name: 'Scientist Name',
    nameAr: 'الاسم بالعربية',
    field: 'field-key',           // must match a filter category
    fieldLabel: 'Display Field',
    century: '10th',
    centuryNum: 10,
    era: '900 – 970 CE',
    icon: '🔬',                   // emoji icon
    oneliner: 'Short description',
    bio: {
        newb: "Simple explanation...",
        explorer: "Technical explanation...",
        developer: "Advanced explanation..."
    },
    contributions: ['Contribution 1', 'Contribution 2'],
    funFact: "An interesting fun fact.",
    legacy: "Their lasting impact on modern science."
}
```

3. Open `js/i18n.js` and add translations to `scientistI18n`:

```javascript
'your-scientist-id': {
    fieldLabel: { ar: '...', en: '...', fr: '...' },
    oneliner: { ar: '...', en: '...', fr: '...' },
    bio: {
        newb: { ar: '...', en: '...', fr: '...' },
        explorer: { ar: '...', en: '...', fr: '...' },
        developer: { ar: '...', en: '...', fr: '...' }
    },
    contributions: { ar: [...], en: [...], fr: [...] },
    funFact: { ar: '...', en: '...', fr: '...' },
    legacy: { ar: '...', en: '...', fr: '...' }
}
```

4. Add quiz questions in `quizI18n` array inside `js/i18n.js`
5. Update the filter bar in `index.html` if it's a new field category
6. Increment version, update `CHANGES.md`

### How to Add a New Language

1. Open `js/i18n.js`
2. Add a new key to every translation object (e.g., `es` for Spanish):

```javascript
appTitle: { ar: '...', en: '...', fr: '...', es: 'Luminarias del Islam' },
```

3. Add a button to the language switcher in `index.html`:

```html
<button class="lang-btn" data-lang="es" title="Español">ES</button>
```

4. Add scientist translations for the new language
5. Add quiz translations for the new language
6. For RTL languages, add the lang code to the RTL check in `i18n.js`

### How to Change Colors

Edit CSS variables at the top of `css/style.css`:

```css
:root {
    --teal: #0A6E6E;         /* Primary color */
    --gold: #C9A84C;         /* Accent / Islamic calligraphy */
    --cream: #FDF6EC;        /* Background */
    --charcoal: #2C2C2C;     /* Text */
    --blue-deep: #1A3A5C;    /* Deep accent */
}
```

---

## 🏗️ Architecture

### Module Overview

```
┌─────────────────────────────────────────────┐
│                 index.html                   │
│  (structure, layout, semantic HTML)          │
├─────────────────────────────────────────────┤
│            css/style.css                     │
│  (design, animations, RTL, responsive)       │
├─────────────┬──────────┬──────────┬─────────┤
│  js/i18n.js │ js/app.js│ js/tts.js│js/stt.js│
│  (language) │ (logic)  │ (speech) │ (voice) │
└─────────────┴──────────┴──────────┴─────────┘
```

### Data Flow

```
User clicks language → I18N.setLang() → applyTranslations()
                                       → re-render scientists
                                       → re-render timeline
                                       → re-init quiz

User clicks card → openModal(scientist) → reads I18N for current lang
                                         → shows bio at current level

User clicks 🔊 → TTS.speak(text, btn) → SpeechSynthesis API → audio

User clicks 🎤 → STT.toggleListening() → SpeechRecognition API → text
                                        → fuzzy match → action
```

### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| No framework | Maximum simplicity, offline support, zero build step |
| Separate i18n module | Clean separation of content from logic |
| Browser Speech APIs | Privacy-first — no external service needed |
| CSS-only patterns | No image assets needed for Islamic geometric design |
| localStorage only | Minimal footprint, no cookies, no server |
| Emoji icons | Universal, no image assets, accessible |

---

## 📝 Versioning

Format: `vMAJOR.MINOR`

- **Major**: New sections, major redesigns, breaking changes
- **Minor**: New features, translations, bug fixes

After every change, increment version and update:
- Footer version in `index.html`
- `CHANGES.md` and `CHANGES.html`
- ZIP package name: `luminaries-of-islam-v{VERSION}.zip`

---

## 📄 Documentation Files

| File | Format | Description |
|------|--------|-------------|
| `README.md` | Markdown | Full documentation (this file) — Git-friendly |
| `README.html` | HTML | Same content, styled and browsable offline |
| `CHANGES.md` | Markdown | Version history — Git-friendly |
| `CHANGES.html` | HTML | Version history, styled and browsable offline |
| `help.html` | HTML | In-app help center with navigation guide |
| `faq.html` | HTML | In-app FAQ with accordion interface |

---

## 🤲 Cultural & Ethical Notes

- **Bismillah** header is always present — a traditional Islamic invocation before seeking knowledge
- **Non-figurative design** — respects Islamic artistic tradition (no human/animal imagery)
- **Clean humor** — geeky, intelligent, never vulgar or violent
- **Inclusive** — features both male and female scholars (Fatima al-Fihri)
- **No occult/magic themes** — all content is historically and scientifically grounded
- **Privacy-first** — no data leaves the user's device
- **Defensive security** — app teaches respect for ethical technology use

---

## ⚖️ License

MIT License — free for educational, personal, and commercial use.  
See [LICENSE](LICENSE) for full text.

---

## 🤝 Credits & Acknowledgments

Built with ❤️ and deep respect for the scholars who advanced human knowledge.

Inspired by the Islamic Golden Age's spirit of:
- **Curiosity** — asking questions the world hadn't thought to ask
- **Rigor** — testing ideas through observation and experiment
- **Service** — sharing knowledge for the benefit of all humanity

> *"اطلبوا العلم من المهد إلى اللحد"*
> *"Seek knowledge from the cradle to the grave."*
> *"Cherchez le savoir du berceau au tombeau."*

---

**Luminaries of Islam v1.3** · [Open App](index.html) · [Help](help.html) · [FAQ](faq.html) · [Changelog](CHANGES.html)
