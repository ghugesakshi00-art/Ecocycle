# 🌿 EcoCycle - ग्रामीण ई-कचरा व्यवस्थापन (Rural E-Waste Management)

A modern, mobile-first, lightweight website designed specifically for **rural and village communities in India**, including users with low literacy and entry-level smartphones on slow 2G/3G internet.

Built using **pure HTML, CSS, and vanilla JavaScript** — **no frameworks, no npm, no backend, and no third-party JavaScript libraries**.

---

## 🚀 Key Features

### 1. 🌐 Trilingual Multilingual Support (मराठी, हिंदी, English)
- **Languages supported:**
  - **मराठी (Marathi)** — Default language tailored for rural Maharashtra (farmers, Gram Panchayats).
  - **हिंदी (Hindi)** — Standard simple Hindi for rural North and Central India.
  - **English** — Clear, accessible terminology.
- **Three large buttons at the top**: Click any button to instantly switch **every piece of text** on the page without reloading.
- Automatically stores the user's language choice in `localStorage`.
- High-legibility typography using Google Fonts **Noto Sans Devanagari**.

### 2. 🔊 Voice Output (Text-to-Speech)
- Every section and card features a **🔊 Listen** button.
- Reads aloud the section in the selected language using the browser's built-in `window.speechSynthesis` API (`mr-IN`, `hi-IN`, `en-IN`).
- **Stop button (⏹️)** and a floating audio indicator bar with wave animations.
- **Graceful Fallback**: If the user's smartphone or browser does not have a native Marathi voice pack installed, it automatically falls back to an Indian Hindi voice and displays a friendly notice banner.

### 3. 🎤 Voice Input (Speech-to-Text)
- Microphone buttons (**🎤**) beside form fields: **Full Name**, **Village**, and **Quantity**.
- Tapping the microphone activates Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`) in the selected language.
- Speak your name or village, and the field fills in automatically (zero typing required).
- If the browser does not support speech recognition, mic buttons are hidden gracefully.

### 4. 🚚 Pickup Request Form with WhatsApp Integration
- Fields: Name, Mobile number (10-digit validation), District, Taluka, Village, Device type, Quantity stepper (`[- 1 +]`), and Preferred Date.
- Submitting the form validates all fields and opens a formatted WhatsApp chat (`wa.me/91XXXXXXXXXX?text=...`) in the user's selected language.
- Configurable WhatsApp recipient number in a single variable at the top of `script.js`.

### 5. 💰 Scrap Value & EcoPoints Calculator
- Interactive scrap value estimator: choose device (Smartphone, Keypad Phone, Battery, TV, Laptop, Fridge, Charger, Mixer) and count.
- Instantly displays the estimated cash payout in **₹** and **EcoPoints** for village rewards.

### 6. 📍 Village Collection Centers Table
- Real-time search filter by Village, Taluka, or Center name.
- Displays contact persons, phone numbers, and operational timings.

### 7. ❓ Interactive FAQ Accordion & Do's/Don'ts
- Expandable question-and-answer cards explaining free pickup, immediate cash payouts, and data wiping safety.
- High-contrast Green (DO's) and Red (DON'Ts) safety guidelines for rural households.

### 8. 🌙 Dark Mode & Accessibility
- Clean high-contrast eco green theme (`#16a34a`, `#15803d`).
- Minimum 48px touch targets for easy tapping with fingers.
- Dark mode toggle with persistent state in `localStorage`.
- Floating **Call Helpline** (`1800-267-3262`) and **WhatsApp** buttons.

---

## 📂 File Structure

The project strictly consists of these clean, beginner-friendly files:

```
E waste management/
│
├── index.html        # Semantic HTML5 markup with data-i18n attributes
├── style.css         # Pure CSS styling, responsive layout, animations & dark mode
├── script.js         # Translations dictionary, Web Speech API, calculator, and WhatsApp link
└── README.md         # Documentation & guide
```

---

## 🖥️ How to Run the Website

### Option 1: Direct Double-Click (Simplest)
1. Navigate to the folder: `c:\Users\Sakshi\Downloads\E waste management`.
2. Double-click `index.html`.
3. It will open instantly in your default web browser (Google Chrome, Microsoft Edge, Firefox, Brave, Safari).

### Option 2: Using VS Code Live Server
1. Open the folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Using Python HTTP Server (Terminal)
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

---

## ⚙️ How to Customize

All settings are neatly organized and commented in `script.js`:

### 1. Changing the WhatsApp Number
Open `script.js` and edit the variable on line 14:
```javascript
const WHATSAPP_PHONE = "919876543210"; // Country code (91) + 10-digit number
```

### 2. Changing the Toll-Free Helpline
Open `script.js` and edit line 15:
```javascript
const HELPLINE_PHONE = "18002673262";
```

### 3. Adding New Collection Centers
In `script.js`, find the `COLLECTION_CENTERS` array (around line 340) and add your village:
```javascript
{
  village: "Shirur (शिरूर)",
  taluka: "Shirur (शिरूर)",
  center: "Shikrapur Gram Panchayat Center",
  contact: "Sachin Raut (9822112233)",
  timing: "Mon - Sat: 9:00 AM - 5:00 PM"
}
```

### 4. Updating Scrap Prices & Rates
In `script.js`, update the `DEVICE_RATES` object (around line 22):
```javascript
const DEVICE_RATES = {
  mobile: { cash: 400, points: 80, label: "Smartphone / Android" },
  // customize prices here...
};
```

---

## 📱 Mobile & Browser Compatibility
- Tested and works seamlessly on:
  - Google Chrome (Desktop & Android)
  - Microsoft Edge
  - Mozilla Firefox
  - Samsung Internet
  - Apple Safari (iOS & macOS)
- Works offline once loaded (all code is local; Google Font falls back to system sans-serif if offline).
