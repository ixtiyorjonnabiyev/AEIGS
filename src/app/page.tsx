'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  ArrowRight,
  Zap,
  TrendingUp,
  PieChart,
  ShieldCheck,
  Layers,
  Activity,
  Server,
  Smartphone,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Sliders,
  Flame,
  ArrowUpRight,
} from 'lucide-react';

export default function LandingPage() {
  const [activeDemoTab, setActiveDemoTab] = useState<'risk' | 'trading' | 'rebalance'>('risk');

  return (
    <div className="min-h-screen bg-[#05070d] text-[#f4f6fb] selection:bg-[#f0a63c]/20 selection:text-[#ffbf5c] overflow-x-hidden">
      {/* Top Banner Ticker Simulation */}
      <div className="bg-[#030508] border-b border-[#1e2536] py-2 px-4 text-xs font-mono-num flex items-center justify-between text-[#aab2c5]">
        <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-none">
          <span className="text-[#f0a63c] font-bold">MARKETS LIVE:</span>
          <span>S&P 500 <b className="text-[#33d19b]">5,088.80 (+0.45%)</b></span>
          <span>10Y UST <b className="text-[#f0555f]">4.24% (-3.2 bps)</b></span>
          <span>NASDAQ <b className="text-[#33d19b]">16,002.55 (+0.82%)</b></span>
          <span>BTC <b className="text-[#33d19b]">$62,450 (+4.18%)</b></span>
          <span>GOLD <b className="text-[#33d19b]">$2,034.40 (+0.35%)</b></span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[11px] text-[#6b7488]">
          <span className="w-2 h-2 rounded-full bg-[#33d19b] animate-pulse" />
          <span>EDGE SERVERLESS LOW-LATENCY</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#070b13]/85 backdrop-blur-md border-b border-[#1e2536]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f0a63c] to-[#a86518] flex items-center justify-center font-serif text-xl font-black text-[#05070d] shadow-lg shadow-[#f0a63c]/20">
              Æ
            </div>
            <div>
              <span className="font-bold tracking-wider text-base text-[#f4f6fb]">AEGIS</span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-mono tracking-widest text-[#6b7488]">
                Investment OS
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#aab2c5]">
            <a href="#features" className="hover:text-[#f0a63c] transition-colors">
              Pillars
            </a>
            <a href="#demo" className="hover:text-[#f0a63c] transition-colors">
              Interactive Demo
            </a>
            <a href="#architecture" className="hover:text-[#f0a63c] transition-colors">
              Architecture
            </a>
            <a href="#modules" className="hover:text-[#f0a63c] transition-colors">
              10 Core Workspaces
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f0a63c] text-[#05070d] font-bold text-xs hover:bg-[#ffbf5c] transition-all shadow-md hover:shadow-[#f0a63c]/30"
            >
              <span>Launch Terminal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Glow ambient background circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#f0a63c]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#33d19b]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111726] border border-[#2a3348] text-xs font-medium text-[#f0a63c] mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#f0a63c] animate-pulse" />
          <span>Vercel Edge-Ready · Full Next.js 15 App Architecture</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f6fb] max-w-4xl mx-auto leading-tight sm:leading-none">
          Next-Generation Operating System for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf5c] via-[#f0a63c] to-[#e69122]">
            Institutional Asset Management
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#aab2c5] max-w-2xl mx-auto leading-relaxed">
          Unify multi-factor portfolio construction, parametric VaR stress-testing, algorithmic OMS execution blotters, and UCITS regulatory compliance in one mobile-first, zero-latency cloud workspace.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f0a63c] to-[#e69122] text-[#05070d] font-bold text-sm hover:from-[#ffbf5c] hover:to-[#f0a63c] transition-all shadow-lg shadow-[#f0a63c]/25 cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Live Workspace ($4.82B AUM)</span>
          </Link>
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0e1422] border border-[#2a3348] text-[#f4f6fb] font-semibold text-sm hover:bg-[#161e31] transition-all"
          >
            <span>Explore Interactive Preview</span>
            <ChevronRight className="w-4 h-4 text-[#6b7488]" />
          </a>
        </div>

        {/* Telemetry Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0b101c]/80 border border-[#1e2536] max-w-4xl mx-auto backdrop-blur-md">
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#f4f6fb]">$4.82B</div>
            <div className="text-xs text-[#6b7488] mt-1">Institutional AUM Under Oversight</div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#33d19b]">0.42ms</div>
            <div className="text-xs text-[#6b7488] mt-1">Smart Order Execution Latency</div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#ffbf5c]">50,000</div>
            <div className="text-xs text-[#6b7488] mt-1">Monte Carlo Simulation Paths</div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#5db3e8]">100%</div>
            <div className="text-xs text-[#6b7488] mt-1">Mobile & Touch Responsive</div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Showcase */}
      <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f6fb]">
            Interactive Terminal Showcase
          </h2>
          <p className="text-xs sm:text-sm text-[#6b7488] mt-2 max-w-xl mx-auto">
            Test real operational modules directly from this landing page before entering the full multi-account workspace.
          </p>

          {/* Switcher Buttons */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-[#0e1422] border border-[#1e2536] text-xs font-semibold">
            <button
              onClick={() => setActiveDemoTab('risk')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeDemoTab === 'risk'
                  ? 'bg-[#1a2336] text-[#ffbf5c] shadow'
                  : 'text-[#6b7488] hover:text-[#aab2c5]'
              }`}
            >
              Risk Engine (VaR & Scenarios)
            </button>
            <button
              onClick={() => setActiveDemoTab('trading')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeDemoTab === 'trading'
                  ? 'bg-[#1a2336] text-[#ffbf5c] shadow'
                  : 'text-[#6b7488] hover:text-[#aab2c5]'
              }`}
            >
              Order OMS Blotter
            </button>
            <button
              onClick={() => setActiveDemoTab('rebalance')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeDemoTab === 'rebalance'
                  ? 'bg-[#1a2336] text-[#ffbf5c] shadow'
                  : 'text-[#6b7488] hover:text-[#aab2c5]'
              }`}
            >
              Portfolio Drift Simulator
            </button>
          </div>
        </div>

        {/* Live Interactive Container */}
        <div className="rounded-2xl bg-[#0b101c] border border-[#2a3348] p-6 shadow-2xl relative overflow-hidden">
          {activeDemoTab === 'risk' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1e2536] pb-3">
                <div>
                  <h3 className="font-bold text-sm text-[#f4f6fb] flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#f0a63c]" />
                    Macro Tail Shock Simulation
                  </h3>
                  <span className="text-xs text-[#6b7488]">Simulating 2008 Lehman crisis replay on current master portfolio</span>
                </div>
                <span className="font-mono-num font-bold text-[#f0555f] text-sm bg-[#f0555f]/15 px-2.5 py-1 rounded">
                  Estimated Drawdown: -$94.2M (-19.5%)
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono-num">
                <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
                  <span className="text-[#6b7488]">Parametric VaR 95%</span>
                  <div className="text-lg font-bold text-[#f4f6fb] mt-1">$18,400,000</div>
                </div>
                <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
                  <span className="text-[#6b7488]">Expected Shortfall (CVaR)</span>
                  <div className="text-lg font-bold text-[#f0555f] mt-1">$36,200,000</div>
                </div>
                <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
                  <span className="text-[#6b7488]">Treasury Offset Hedge</span>
                  <div className="text-lg font-bold text-[#33d19b] mt-1">+$28,000,000 Alpha Cushion</div>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Link
                  href="/dashboard/risk"
                  className="text-xs font-bold text-[#f0a63c] hover:underline flex items-center gap-1"
                >
                  Open Full Risk Analytics Studio <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeDemoTab === 'trading' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1e2536] pb-3">
                <div>
                  <h3 className="font-bold text-sm text-[#f4f6fb] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#f0a63c]" />
                    Algorithmic OMS Execution Blotter
                  </h3>
                  <span className="text-xs text-[#6b7488]">Connected to Dark Pools, NYSE, and NASDAQ DMA</span>
                </div>
                <span className="font-mono-num font-bold text-[#33d19b] text-sm bg-[#33d19b]/15 px-2.5 py-1 rounded">
                  Status: All Algorithmic Slicers Working
                </span>
              </div>
              <div className="space-y-2 text-xs font-mono-num">
                <div className="p-2.5 rounded bg-[#070b13] border border-[#161e31] flex justify-between items-center">
                  <span>ORD-9042 · NVDA · LIMIT 5,000 shs @ $889.45</span>
                  <span className="text-[#33d19b] font-bold">FILLED</span>
                </div>
                <div className="p-2.5 rounded bg-[#070b13] border border-[#161e31] flex justify-between items-center">
                  <span>ORD-9043 · AAPL · VWAP 8,000 shs (4,200 filled)</span>
                  <span className="text-[#5db3e8] font-bold">WORKING (52%)</span>
                </div>
                <div className="p-2.5 rounded bg-[#070b13] border border-[#161e31] flex justify-between items-center">
                  <span>ORD-9044 · MSFT · LIMIT 2,500 shs @ $419.80</span>
                  <span className="text-[#5db3e8] font-bold">WORKING (48%)</span>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Link
                  href="/dashboard/trading"
                  className="text-xs font-bold text-[#f0a63c] hover:underline flex items-center gap-1"
                >
                  Launch Order Management System <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {activeDemoTab === 'rebalance' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1e2536] pb-3">
                <div>
                  <h3 className="font-bold text-sm text-[#f4f6fb] flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#f0a63c]" />
                    Target Weight Rebalance Simulator
                  </h3>
                  <span className="text-xs text-[#6b7488]">Automatic calculation of trade order slices based on model targets</span>
                </div>
                <span className="font-mono-num font-bold text-[#f0a63c] text-sm bg-[#f0a63c]/15 px-2.5 py-1 rounded">
                  Drift Threshold: &gt; 0.50%
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-[#070b13] border border-[#161e31] flex justify-between items-center">
                  <div>
                    <b className="text-[#f4f6fb]">NVIDIA Corp (NVDA):</b> Actual 18.4% vs Target 16.0%
                  </div>
                  <span className="text-[#f0555f] font-mono-num font-bold">Trim -2.4% ($115M)</span>
                </div>
                <div className="p-2.5 rounded bg-[#070b13] border border-[#161e31] flex justify-between items-center">
                  <div>
                    <b className="text-[#f4f6fb]">Apple Inc (AAPL):</b> Actual 11.5% vs Target 12.0%
                  </div>
                  <span className="text-[#33d19b] font-mono-num font-bold">Add +0.5% ($24M)</span>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Link
                  href="/dashboard/portfolio"
                  className="text-xs font-bold text-[#f0a63c] hover:underline flex items-center gap-1"
                >
                  Go to Portfolio Rebalancer <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pillars Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f6fb]">
            Built for Modern Quantitative Hedge Funds & Asset Managers
          </h2>
          <p className="text-xs sm:text-sm text-[#6b7488] mt-2 max-w-xl mx-auto">
            Engineered with deep capital markets fidelity and institutional compliance controls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-[#1e2536] hover:border-[#2a3348] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0a63c]/10 text-[#f0a63c] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#f4f6fb]">Multi-Horizon VaR</h3>
            <p className="text-xs text-[#aab2c5] leading-relaxed">
              Parametric, historical, and Monte Carlo Value-at-Risk combined with Expected Shortfall (CVaR) calculations across complex multi-asset portfolios.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-[#1e2536] hover:border-[#2a3348] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#33d19b]/10 text-[#33d19b] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#f4f6fb]">Sub-ms OMS Router</h3>
            <p className="text-xs text-[#aab2c5] leading-relaxed">
              Direct market access with algorithmic TWAP, VWAP, and dark pool execution algorithms to minimize market impact and slippage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-[#1e2536] hover:border-[#2a3348] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#5db3e8]/10 text-[#5db3e8] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#f4f6fb]">UCITS & Mandate Guard</h3>
            <p className="text-xs text-[#aab2c5] leading-relaxed">
              Automated pre-trade checks for UCITS 5/10/40 concentration limits, gross leverage caps, and ESG screening filters.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-[#1e2536] hover:border-[#2a3348] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#c58ce8]/10 text-[#c58ce8] flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#f4f6fb]">Brinson Attribution</h3>
            <p className="text-xs text-[#aab2c5] leading-relaxed">
              Decompose gross alpha into pure asset allocation, security selection, and interaction effects with GIPS verified accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture & Mobile Responsiveness */}
      <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1221] to-[#070b13] border border-[#2a3348] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-2xl">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33d19b]/15 text-[#33d19b] text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Next.js 15 · Edge Ready · 0-Python Runtime</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f6fb]">
              Engineered for Seamless Deployment on Vercel
            </h2>
            <p className="text-xs sm:text-sm text-[#aab2c5] leading-relaxed">
              Migrated from legacy Python/FastAPI into a high-performance Next.js App Router architecture. Static generation for rapid delivery, client-side reactive store for instantaneous local updates, and edge API routes for real-time market data streaming.
            </p>

            <div className="space-y-2 pt-2 text-xs font-medium text-[#f4f6fb]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#33d19b]" />
                <span>Zero server maintenance — 1-click Vercel git push deploy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#33d19b]" />
                <span>Mobile-first responsive drawer navigation & swipeable data tables</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#33d19b]" />
                <span>Offline local storage persistence for profiles, orders, and tickets</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#05070d] border border-[#1e2536] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#6b7488]">
              <span>deploy-target: vercel</span>
              <span className="text-[#33d19b]">STATUS: READY</span>
            </div>
            <div className="font-mono text-xs space-y-1.5 text-[#aab2c5] bg-[#020306] p-4 rounded-xl border border-[#141b2c]">
              <p><span className="text-[#f0a63c]">$</span> git add .</p>
              <p><span className="text-[#f0a63c]">$</span> git commit -m &quot;feat: AEGIS Next.js Migration&quot;</p>
              <p><span className="text-[#f0a63c]">$</span> git push origin master</p>
              <p className="text-[#33d19b] pt-1">✓ Build completed in 8.4s</p>
              <p className="text-[#33d19b]">✓ Edge Network deployed: https://aegis-platform.vercel.app</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#6b7488]">Framework: Next.js 15 (React 19)</span>
              <Link
                href="/dashboard"
                className="text-xs font-bold text-[#f0a63c] hover:underline"
              >
                Launch Live App →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="py-12 border-t border-[#1e2536] bg-[#030508] text-xs text-[#6b7488]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#f0a63c] flex items-center justify-center font-serif text-sm font-black text-[#05070d]">
              Æ
            </div>
            <span>AEGIS Investment & Risk Operating System · 2026 Edition</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-[#aab2c5] hover:text-[#f4f6fb]">
              Terminal Workspace
            </Link>
            <Link href="/dashboard/trading" className="text-[#aab2c5] hover:text-[#f4f6fb]">
              OMS Blotter
            </Link>
            <Link href="/dashboard/risk" className="text-[#aab2c5] hover:text-[#f4f6fb]">
              Risk Analytics
            </Link>
            <Link href="/dashboard/settings" className="text-[#aab2c5] hover:text-[#f4f6fb]">
              Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
