'use client';

import React from 'react';
import { useAegis } from '@/lib/store';
import { formatCurrency, formatPercent } from '@/lib/utils';
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  PieChart as PieIcon,
  AlertTriangle,
  Layers,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

export default function OverviewPage() {
  const { holdings, orders, profile, setSelectedTicker, tickers } = useAegis();

  // Calculate AUM and totals
  const totalMarketValue = holdings.reduce((acc, h) => acc + h.marketValue, 0);
  const totalPnL = holdings.reduce((acc, h) => acc + h.unrealizedPnL, 0);

  // Asset class breakdown
  const assetClasses = ['Equities', 'Fixed Income', 'Commodities', 'FX', 'Cash'] as const;
  const allocation = assetClasses.map((cls) => {
    const val = holdings
      .filter((h) => h.assetClass === cls)
      .reduce((acc, h) => acc + h.marketValue, 0);
    const weight = totalMarketValue > 0 ? (val / totalMarketValue) * 100 : 0;
    return { name: cls, value: val, weight };
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Banner / Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Institutional Master Portfolio
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#33d19b]/15 text-[#33d19b] border border-[#33d19b]/30">
              LIVE T+0
            </span>
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            {profile.entity} · Managed by {profile.name} · Primary Base Currency: USD
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/trading"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0a63c] text-[#05070d] font-bold text-xs hover:bg-[#ffbf5c] transition-colors shadow-sm"
          >
            <Zap className="w-3.5 h-3.5" />
            Launch Order Ticket
          </Link>
          <Link
            href="/dashboard/reports"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111726] border border-[#1e2536] text-[#aab2c5] font-semibold text-xs hover:text-[#f4f6fb] hover:border-[#2a3348] transition-colors"
          >
            Factsheet PDF
          </Link>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total AUM */}
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-[#6b7488]">Assets Under Management</span>
            <span className="text-[11px] font-mono font-bold text-[#33d19b] bg-[#33d19b]/10 px-1.5 py-0.5 rounded">
              +14.2% YTD
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#f4f6fb] mt-2">
            $4.82B
          </div>
          <div className="text-xs text-[#aab2c5] mt-1 flex items-center gap-1">
            <span className="text-[#33d19b]">+$42.1M</span> today vs S&P 500 (+0.45%)
          </div>
        </div>

        {/* Metric 2: Sharpe Ratio */}
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-[#6b7488]">Sharpe Ratio (3Y Trailing)</span>
            <span className="text-[11px] font-mono font-bold text-[#33d19b] bg-[#33d19b]/10 px-1.5 py-0.5 rounded">
              Top 2%
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#f4f6fb] mt-2">
            1.51
          </div>
          <div className="text-xs text-[#aab2c5] mt-1">
            Sortino 2.14 · Information Ratio 1.08
          </div>
        </div>

        {/* Metric 3: Value-at-Risk */}
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-[#6b7488]">Parametric VaR (95%, 1-Day)</span>
            <span className="text-[11px] font-mono font-bold text-[#aab2c5] bg-[#1a2336] px-1.5 py-0.5 rounded">
              Normal
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#f0a63c] mt-2">
            $18.4M
          </div>
          <div className="text-xs text-[#aab2c5] mt-1">
            0.38% of total NAV · Expected Shortfall $24.1M
          </div>
        </div>

        {/* Metric 4: Active Mandates */}
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-[#6b7488]">Active Sub-Accounts</span>
            <span className="text-[11px] font-mono font-bold text-[#33d19b] bg-[#33d19b]/10 px-1.5 py-0.5 rounded">
              100% Compliant
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono-num text-[#f4f6fb] mt-2">
            14
          </div>
          <div className="text-xs text-[#aab2c5] mt-1">
            Zero regulatory breaches · T+1 Settlement ready
          </div>
        </div>
      </div>

      {/* Main Grid: Allocation + Performance + Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Asset Allocation & Holdings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Asset Allocation Bar */}
          <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
                <PieIcon className="w-4 h-4 text-[#f0a63c]" />
                Asset Allocation Breakdown
              </h2>
              <Link
                href="/dashboard/portfolio"
                className="text-xs text-[#f0a63c] hover:underline flex items-center gap-1"
              >
                Full Portfolio <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Segmented Bar */}
            <div className="h-3 w-full rounded-full bg-[#111726] flex overflow-hidden gap-0.5 mb-4">
              <div style={{ width: '48%' }} className="bg-[#5db3e8]" title="Equities 48%" />
              <div style={{ width: '28%' }} className="bg-[#33d19b]" title="Fixed Income 28%" />
              <div style={{ width: '12%' }} className="bg-[#f0a63c]" title="Commodities 12%" />
              <div style={{ width: '2%' }} className="bg-[#c58ce8]" title="FX 2%" />
              <div style={{ width: '10%' }} className="bg-[#6b7488]" title="Cash 10%" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
              {allocation.map((item) => (
                <div key={item.name} className="p-2.5 rounded-lg bg-[#070b13] border border-[#161e31]">
                  <span className="text-[#6b7488] block text-[11px]">{item.name}</span>
                  <span className="font-mono-num font-bold text-[#f4f6fb] text-sm">
                    {item.weight.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Holdings Table */}
          <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#f0a63c]" />
                Core Security Exposures
              </h2>
              <span className="text-xs text-[#6b7488]">Sorted by Risk Contribution</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#1e2536] text-[#6b7488]">
                    <th className="pb-3 font-semibold">Security</th>
                    <th className="pb-3 font-semibold">Class</th>
                    <th className="pb-3 font-semibold font-mono-num text-right">Portfolio Weight</th>
                    <th className="pb-3 font-semibold font-mono-num text-right">Target</th>
                    <th className="pb-3 font-semibold font-mono-num text-right">Drift</th>
                    <th className="pb-3 font-semibold font-mono-num text-right">Risk %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#151c2a]">
                  {holdings.slice(0, 6).map((item) => {
                    const drift = item.weight - item.targetWeight;
                    return (
                      <tr key={item.id} className="hover:bg-[#111726]/40 transition-colors">
                        <td className="py-3 pr-2">
                          <button
                            onClick={() => {
                              const found = tickers.find((t) => t.symbol === item.symbol);
                              if (found) setSelectedTicker(found);
                            }}
                            className="font-bold text-[#f4f6fb] hover:text-[#f0a63c] flex items-center gap-1 font-mono-num text-left"
                          >
                            {item.symbol}
                            <ArrowUpRight className="w-3 h-3 text-[#6b7488]" />
                          </button>
                          <span className="text-[11px] text-[#6b7488] block truncate max-w-[140px]">
                            {item.name}
                          </span>
                        </td>
                        <td className="py-3 text-[#aab2c5]">{item.assetClass}</td>
                        <td className="py-3 text-right font-mono-num font-bold text-[#f4f6fb]">
                          {item.weight.toFixed(1)}%
                        </td>
                        <td className="py-3 text-right font-mono-num text-[#6b7488]">
                          {item.targetWeight.toFixed(1)}%
                        </td>
                        <td
                          className={`py-3 text-right font-mono-num font-bold ${
                            drift > 0 ? 'text-[#f0a63c]' : 'text-[#5db3e8]'
                          }`}
                        >
                          {drift > 0 ? `+${drift.toFixed(1)}%` : `${drift.toFixed(1)}%`}
                        </td>
                        <td className="py-3 text-right font-mono-num text-[#f4f6fb]">
                          {item.riskContribution.toFixed(1)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Real-Time Alerts & Recent Orders */}
        <div className="space-y-6">
          {/* Executive Risk Briefing */}
          <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536]">
            <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-[#f0a63c]" />
              Telemetry & Mandate Signals
            </h2>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-[#111726] border-l-2 border-[#f0a63c] space-y-1">
                <div className="flex justify-between font-bold text-[#f4f6fb]">
                  <span>Tech Concentration Alert</span>
                  <span className="text-[#f0a63c]">Active</span>
                </div>
                <p className="text-[#aab2c5] text-[11px]">
                  NVDA + MSFT aggregate weight is 33.6%. Under UCITS 5/10/40 rule, watch 40% cap.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#111726] border-l-2 border-[#33d19b] space-y-1">
                <div className="flex justify-between font-bold text-[#f4f6fb]">
                  <span>Duration Hedge In Place</span>
                  <span className="text-[#33d19b]">Protected</span>
                </div>
                <p className="text-[#aab2c5] text-[11px]">
                  10Y Treasury + IG Corp overlay maintains portfolio effective duration at 4.2 years.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#111726] border-l-2 border-[#5db3e8] space-y-1">
                <div className="flex justify-between font-bold text-[#f4f6fb]">
                  <span>Algorithmic Execution</span>
                  <span className="text-[#5db3e8]">Online</span>
                </div>
                <p className="text-[#aab2c5] text-[11px]">
                  Smart order router connected to NYSE, NASDAQ, and dark pools with sub-ms routing.
                </p>
              </div>
            </div>
          </div>

          {/* Recent Orders Blotter Widget */}
          <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536]">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#f0a63c]" />
                Recent OMS Fills
              </h2>
              <Link href="/dashboard/trading" className="text-xs text-[#f0a63c] hover:underline">
                Blotter
              </Link>
            </div>

            <div className="space-y-2 text-xs">
              {orders.slice(0, 4).map((order) => (
                <div
                  key={order.id}
                  className="p-2.5 rounded-lg bg-[#070b13] border border-[#161e31] flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 font-mono-num">
                      <span
                        className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                          order.side === 'BUY'
                            ? 'text-[#33d19b] bg-[#33d19b]/10'
                            : 'text-[#f0555f] bg-[#f0555f]/10'
                        }`}
                      >
                        {order.side}
                      </span>
                      <span className="font-bold text-[#f4f6fb]">{order.symbol}</span>
                      <span className="text-[#6b7488]">{order.quantity} shs</span>
                    </div>
                    <span className="text-[10px] text-[#6b7488] mt-0.5 block">{order.timestamp}</span>
                  </div>
                  <span className="text-[11px] font-mono-num font-bold text-[#33d19b]">
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
