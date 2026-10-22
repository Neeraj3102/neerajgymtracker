# 🏋️ FORGE — Private, Offline-First Gym & PR Tracker

<p align="center">
  <img src="https://img.shields.io/badge/Privacy-100%25_Offline--First-10B981?style=for-the-badge&logo=shield&logoColor=white" alt="Offline First" />
  <img src="https://img.shields.io/badge/Encryption-AES--GCM_Client--Side-8B5CF6?style=for-the-badge&logo=lock&logoColor=white" alt="AES-GCM" />
  <img src="https://img.shields.io/badge/PWA-Installable-3B82F6?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
  <img src="https://img.shields.io/badge/Theme-Dark_%230b0d0c-1E293B?style=for-the-badge" alt="Dark Theme" />
</p>

<p align="center">
  <b>Build strength. Keep proof. A distraction-free workout journal engineered for serious lifters.</b><br/>
  <i>Zero subscriptions. Zero ads. Zero data uploaded without client-side encryption.</i>
</p>

---

## 🎯 The Philosophy

Most modern fitness apps have evolved into social media networks cluttered with influencer feeds, premium paywalls, locked history, and background telemetry. 

**FORGE is built differently:**
- **Zero Friction In The Gym**: Log sets, reps, and RPE in under 2 seconds between sets.
- **Offline Reliability**: Works in underground basements and airplane mode without a cell signal.
- **Data Sovereignty**: Your training data is saved directly on your device. When synced, it is encrypted via AES-GCM *before* it leaves your browser.

---

## 🔥 Key Features

- **⚡ Customizable 7-Day PPL & Bro Splits**: Built-in Push, Pull, Legs, Upper, Lower routines with customizable exercise ordering and rest timers.
- **📈 Automatic PR & Overload Tracking**: Automatically flags personal bests (1RM estimation, volume records, and rep PRs) dynamically as you log.
- **🛡️ Client-Side AES-GCM Encryption**: Encrypts your entire training history using a private passphrase known only to you.
- **📦 Clean JSON Backup & Restore**: One-click full export and import with conflict protection so you never lose a workout.
- **📱 True Progressive Web App (PWA)**: Install directly to iOS Home Screen or Android without an app store middleman.
- **⚖️ Dual Unit Normalization**: Smoothly toggle between Kilograms (kg) and Pounds (lb) with underlying normalized storage.

---

## 🏗️ Architecture

```mermaid
flowchart LR
    UI["Lifter UI (Touch-Optimized)"]
    SW["Service Worker Cache (Offline Engine)"]
    Storage[("Local IndexedDB & Preferences")]
    Crypto["Client-Side AES-GCM Engine"]
    Export["Encrypted JSON Vault"]

    UI <-->|"Instant Read/Write"| Storage
    SW -->|"Offline Shell & Assets"| UI
    Storage -->|"Passphrase Protection"| Crypto
    Crypto -->|"Safe Portable Backup"| Export
```

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/Neeraj3102/neerajgymtracker.git
cd neerajgymtracker

# 2. Serve with any static web server (no compilation required)
python -m http.server 4173

# 3. Open in your browser
# http://localhost:4173
```

---

## 📄 License

Distributed under the **MIT License**. Crafted for lifters by [Neeraj](https://github.com/Neeraj3102).
