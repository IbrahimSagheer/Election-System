# 🗳️ Election Intel — 2016–2026

> Electoral data analysis for **The Bahamas** and **Slovenia** — covering every election from 2016 through 2026.

**Student ID:** S25BINCE1M04033

---

## 📌 Overview

This is an interactive Next.js web application that presents structured electoral research data through a step-by-step user flow. The user selects a country and election year, and the app displays full election details including seat distribution, voter turnout, party results, and government outcomes.

### Countries Covered
| Country | Elections | System | Total Seats |
|---|---|---|---|
| 🇧🇸 The Bahamas | 2017, 2021, 2026 | First-Past-the-Post (FPTP) | 39 |
| 🇸🇮 Slovenia | 2018, 2022, 2026 | Mixed Proportional Representation (PR) | 90 |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/election-intel.git
cd election-intel

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & dark theme variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main interactive flow (intro → country → year → result)
├── components/
│   └── ElectionView.tsx   # Full election result display component
└── data/
    └── elections.ts       # All election data (parties, turnout, outcomes)
```

---

## ✨ Features

- **3-step interactive flow** — Select country → Select year → View full results
- **Seat distribution bar chart** — Visual breakdown with majority line indicator
- **Turnout stats** — Registered voters, votes cast, turnout %, invalid ballots
- **Party tables** — All parties with leaders, orientations, seats, and vote share
- **Ruling party badges** — Highlights coalition/winning parties
- **Bold dark theme** — Bebas Neue display font, electric yellow accents, noise texture overlay
- **Fully responsive** — Works on desktop and mobile

---

## 🗳️ Election Data Summary

### 🇧🇸 The Bahamas

**Electoral System:** First-Past-the-Post (FPTP) — 39 single-member constituencies. Members of the House of Assembly serve 5-year terms. The Senate (16 seats) is appointed, not elected.

| Year | Winner | Seats | Turnout |
|---|---|---|---|
| 2017 | Free National Movement (FNM) | 35 / 39 | 88.3% |
| 2021 | Progressive Liberal Party (PLP) | 32 / 39 | 65.0% |
| 2026 | TBD (expected May 2026) | — | — |

---

### 🇸🇮 Slovenia

**Electoral System:** Mixed Proportional Representation — 90-seat National Assembly (Državni zbor). 88 seats via open-list PR across 8 constituencies. 2 seats reserved for Italian and Hungarian minorities. 4% electoral threshold applies.

| Year | Winner / Coalition | Seats | Turnout |
|---|---|---|---|
| 2018 | LMŠ-led minority coalition (→ SDS coalition 2020) | 13 / 90 | 52.63% |
| 2022 | Freedom Movement + SD + Levica | 41+7+5 = 53 / 90 | 70.97% |
| 2026 | Hung parliament — negotiations ongoing | 29 / 90 (GS) | 68.4% |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework / routing |
| [React 18](https://react.dev/) | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility styling |
| [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) | Display typography |
| [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Monospace / data labels |
| [Vercel](https://vercel.com/) | Deployment |

---

## 📦 Deployment (Vercel)

This project is pre-configured for Vercel via `vercel.json`.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for automatic deployments on push.

---

## 📚 Data Sources

- **Bahamas:** Parliamentary Registration Department (`elections.gov.bs`), IFES Election Guide, IPU Parline, The Nassau Guardian, BahamasLocal
- **Slovenia:** State Election Commission of Slovenia, IFES Election Guide, IPU Parline, PolitPro.eu, OSW Centre for Eastern Studies, PBS NewsHour / Xinhua (2026 results)

---

## 📄 License

This project was created for academic research purposes.
**Student Name:** Muhammad Ibrahim 
**Student ID:** S25BINCE1M04033
