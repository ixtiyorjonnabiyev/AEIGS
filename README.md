# AEGIS — Investment & Risk Operating System

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Deployment%20Ready-black?style=flat&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Proprietary-gold.svg)](#)

A high-performance, institutional quantitative asset management and risk operating system. Engineered with sub-millisecond execution routing, multivariate Value-at-Risk (VaR), stress testing, Brinson performance attribution, and statutory UCITS mandate compliance.

---

## Key Highlights

- **Vercel Edge-Ready**: Zero Python runtime dependencies. 100% native Next.js 15 App Router with Turbopack and React 19.
- **Mobile-First Responsive**: Custom drawer navigation, adaptive metric grids, swipeable data tables, and high-DPI sparklines designed for mobile, tablet, and ultra-wide trading desks.
- **Institutional Design System**: Deep obsidian palette (`#05070d`), quant amber accents, live continuous market ticker marquee, and keyboard shortcuts (`Cmd+K` command palette).
- **Interactive Landing Page**: Modern, high-converting product landing page at `/` explaining platform architecture, interactive live module switcher, and direct workspace launch CTA.
- **10 Core Operating Workspaces**:
  1. `/dashboard`: Executive Master Portfolio ($4.82B AUM, asset allocation, active mandates).
  2. `/dashboard/portfolio`: Positions, weights, and interactive target rebalancing simulator.
  3. `/dashboard/risk`: Parametric VaR, Historical VaR, Expected Shortfall (CVaR), and historical crisis stress tests.
  4. `/dashboard/trading`: Algorithmic OMS order ticket (TWAP/VWAP) and live execution blotter.
  5. `/dashboard/compliance`: Pre-trade checks, UCITS 5/10/40 rule verification, and immutable audit logs.
  6. `/dashboard/performance`: Time-weighted returns, benchmark alpha, and Brinson-Fachler attribution.
  7. `/dashboard/research`: Quantitative scorecards, earnings catalysts, and macro briefings.
  8. `/dashboard/clients`: Institutional CRM, fee schedules, and mandate agreements.
  9. `/dashboard/reports`: Printable executive tear-sheets and PDF export generator.
  10. `/dashboard/settings`: PM profile parameters, risk limits, and API feed connectivity.

---

## Quick Start

### 1. Run Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm start
```

### 3. Deploy to Vercel
Push to your GitHub repository and link directly in the [Vercel Dashboard](https://vercel.com/new). Zero additional configuration required.

---

## Project Structure

```
aegis-platform/
├── legacy_pr2/                  # Full historical backup of original pr2 code
└── aegis-app/                   # Modern Next.js 15 Web Application
    ├── public/                  # Static assets & ticker data
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx         # Modern Product Landing Page
    │   │   ├── layout.tsx       # Root Layout & Meta tags
    │   │   ├── globals.css      # Dark institutional theme tokens
    │   │   ├── api/tickers/     # Real-time ticker edge API
    │   │   └── dashboard/       # 10 Institutional Workspace Modules
    │   ├── components/shell/    # TickerBar, TickerModal, Sidebar, Topbar, CommandPalette
    │   └── lib/                 # Types, Mock Datasets, Utilities, and Reactive Store
```
