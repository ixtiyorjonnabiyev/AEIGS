'use client';

import React from 'react';
import {
  TrendingUp,
  Award,
  Layers,
  ArrowUpRight,
  BarChart3,
  Calendar,
} from 'lucide-react';

export default function PerformancePage() {
  const periods = [
    { label: 'MTD', portfolio: '+2.14%', spx: '+1.62%', alpha: '+0.52%' },
    { label: 'QTD', portfolio: '+6.80%', spx: '+5.10%', alpha: '+1.70%' },
    { label: 'YTD', portfolio: '+14.20%', spx: '+10.78%', alpha: '+3.42%' },
    { label: '1-Year', portfolio: '+26.85%', spx: '+21.40%', alpha: '+5.45%' },
    { label: '3-Year (Ann.)', portfolio: '+18.40%', spx: '+12.90%', alpha: '+5.50%' },
    { label: '5-Year (Ann.)', portfolio: '+16.70%', spx: '+11.20%', alpha: '+5.50%' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Performance Attribution & Return Decomposition
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            Time-weighted returns, benchmark alpha, Brinson-Fachler attribution, and factor exposures
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#33d19b]/15 text-[#33d19b] border border-[#33d19b]/30">
            GIPS Verified Calculation Standard
          </span>
        </div>
      </div>

      {/* Trailing Returns Table */}
      <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
        <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#f0a63c]" />
          Trailing Cumulative & Annualized Return Matrix
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono-num">
            <thead>
              <tr className="border-b border-[#1e2536] text-[#6b7488]">
                <th className="pb-3 font-semibold">Horizon</th>
                <th className="pb-3 font-semibold text-right">AEGIS Master NAV</th>
                <th className="pb-3 font-semibold text-right">S&P 500 Index</th>
                <th className="pb-3 font-semibold text-right">Excess Return (Alpha)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#151c2a]">
              {periods.map((p) => (
                <tr key={p.label} className="hover:bg-[#111726]/40 transition-colors">
                  <td className="py-3 font-bold text-[#f4f6fb]">{p.label}</td>
                  <td className="py-3 text-right font-bold text-[#33d19b]">{p.portfolio}</td>
                  <td className="py-3 text-right text-[#aab2c5]">{p.spx}</td>
                  <td className="py-3 text-right font-bold text-[#ffbf5c]">{p.alpha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Brinson Attribution & Factor Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Brinson-Fachler Decomposition */}
        <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
          <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#f0a63c]" />
            Brinson-Fachler Attribution Breakdown
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31] flex justify-between items-center">
              <div>
                <span className="font-bold text-[#f4f6fb] block">Asset Allocation Effect</span>
                <span className="text-[#6b7488] text-[11px]">Overweight Technology & US Equities</span>
              </div>
              <span className="font-mono-num font-bold text-sm text-[#33d19b]">+1.84%</span>
            </div>

            <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31] flex justify-between items-center">
              <div>
                <span className="font-bold text-[#f4f6fb] block">Stock Selection Effect</span>
                <span className="text-[#6b7488] text-[11px]">Alpha from NVDA, MSFT, and Gold overlay</span>
              </div>
              <span className="font-mono-num font-bold text-sm text-[#33d19b]">+1.42%</span>
            </div>

            <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31] flex justify-between items-center">
              <div>
                <span className="font-bold text-[#f4f6fb] block">Interaction & Currency Effect</span>
                <span className="text-[#6b7488] text-[11px]">Cross-product hedging & FX overlay</span>
              </div>
              <span className="font-mono-num font-bold text-sm text-[#5db3e8]">+0.16%</span>
            </div>

            <div className="p-3 rounded-lg bg-[#111726] border border-[#1e2536] flex justify-between items-center">
              <span className="font-bold text-[#f4f6fb]">Total Net Excess Alpha</span>
              <span className="font-mono-num font-extrabold text-base text-[#ffbf5c]">+3.42%</span>
            </div>
          </div>
        </div>

        {/* Quant Factor Exposures */}
        <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
          <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#f0a63c]" />
            Active Quant Factor Loading
          </h2>

          <div className="space-y-3 text-xs">
            {[
              { factor: 'Momentum', score: '+1.42 Z-Score', bias: 'Strong Overweight', color: 'text-[#33d19b]' },
              { factor: 'Quality / ROIC', score: '+1.15 Z-Score', bias: 'Overweight', color: 'text-[#33d19b]' },
              { factor: 'Size (Large-Cap)', score: '+0.88 Z-Score', bias: 'Mega-Cap Tilt', color: 'text-[#5db3e8]' },
              { factor: 'Volatility (Low Vol)', score: '-0.42 Z-Score', bias: 'Underweight Beta', color: 'text-[#f0a63c]' },
              { factor: 'Value / PB Multiple', score: '-0.74 Z-Score', bias: 'Growth Orientation', color: 'text-[#6b7488]' },
            ].map((f) => (
              <div
                key={f.factor}
                className="p-3 rounded-lg bg-[#070b13] border border-[#161e31] flex justify-between items-center"
              >
                <div>
                  <span className="font-bold text-[#f4f6fb]">{f.factor}</span>
                  <span className="text-[11px] text-[#6b7488] block">{f.bias}</span>
                </div>
                <span className={`font-mono-num font-bold ${f.color}`}>{f.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
