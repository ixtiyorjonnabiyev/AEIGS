'use client';

import React from 'react';
import {
  Search,
  BookOpen,
  Sparkles,
  TrendingUp,
  LineChart,
  Lightbulb,
} from 'lucide-react';

export default function ResearchPage() {
  const watchlists = [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corp',
      quantScore: 94,
      signal: 'STRONG BUY',
      targetPrice: '$1,050.00',
      analysts: '52 Buys / 3 Holds',
      catalyst: 'B200 Blackwell Architecture Ramp',
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp',
      quantScore: 88,
      signal: 'BUY',
      targetPrice: '$480.00',
      analysts: '48 Buys / 4 Holds',
      catalyst: 'Azure AI Monetization & Copilot Acceleration',
    },
    {
      symbol: 'TSM',
      name: 'Taiwan Semiconductor',
      quantScore: 86,
      signal: 'BUY',
      targetPrice: '$165.00',
      analysts: '38 Buys / 2 Holds',
      catalyst: '3nm/2nm Leading Edge Wafer Utilization',
    },
    {
      symbol: 'JPM',
      name: 'JPMorgan Chase',
      quantScore: 79,
      signal: 'ACCUMULATE',
      targetPrice: '$210.00',
      analysts: '28 Buys / 12 Holds',
      catalyst: 'Net Interest Margin Resilience & Investment Banking Recovery',
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc',
      quantScore: 72,
      signal: 'NEUTRAL / HOLD',
      targetPrice: '$195.00',
      analysts: '31 Buys / 14 Holds',
      catalyst: 'Apple Intelligence Siri Integration & China Hardware Mix',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Quantitative Research & Intelligence
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            Algorithmic scorecards, analyst consensus, upcoming earnings catalysts, and macroeconomic insights
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#f0a63c]/15 text-[#f0a63c] border border-[#f0a63c]/30">
            Alpha Signal Engine v4.2
          </span>
        </div>
      </div>

      {/* Macro Briefing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#f4f6fb] flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#f0a63c]" />
              Macro Quant Strategy Memo
            </span>
            <span className="text-[10px] text-[#6b7488]">Published 08:30 EST</span>
          </div>
          <p className="text-xs text-[#aab2c5] leading-relaxed">
            US disinflation momentum continues to support soft-landing projections. Credit spreads remain near multi-year tights. Recommend maintaining overweight in enterprise AI infrastructure while holding short-duration US Treasuries as an asymmetric macro buffer.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#f4f6fb] flex items-center gap-2">
              <LineChart className="w-4 h-4 text-[#33d19b]" />
              Global Liquidity Monitor
            </span>
            <span className="text-[10px] text-[#33d19b] font-mono">NET POSITIVE</span>
          </div>
          <p className="text-xs text-[#aab2c5] leading-relaxed">
            Central bank aggregate balance sheet contraction has decelerated. Treasury General Account (TGA) cash buffer stabilization and reverse repo drain are providing net positive liquidity impulses to risk assets through end of quarter.
          </p>
        </div>
      </div>

      {/* Quantitative Screening Table */}
      <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
        <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#f0a63c]" />
          Institutional Watchlist & Signal Composite
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1e2536] text-[#6b7488]">
                <th className="pb-3 font-semibold">Security</th>
                <th className="pb-3 font-semibold text-center">Quant Score (100)</th>
                <th className="pb-3 font-semibold">Model Signal</th>
                <th className="pb-3 font-semibold font-mono-num text-right">Target Consensus</th>
                <th className="pb-3 font-semibold">Wall Street Ratio</th>
                <th className="pb-3 font-semibold">Key Catalyst</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#151c2a]">
              {watchlists.map((w) => (
                <tr key={w.symbol} className="hover:bg-[#111726]/40 transition-colors">
                  <td className="py-3 pr-2">
                    <span className="font-bold text-[#f4f6fb] font-mono-num">{w.symbol}</span>
                    <span className="text-[11px] text-[#6b7488] block">{w.name}</span>
                  </td>
                  <td className="py-3 text-center">
                    <span className="font-mono-num font-extrabold text-sm px-2 py-0.5 rounded bg-[#111726] text-[#ffbf5c] border border-[#1e2536]">
                      {w.quantScore}
                    </span>
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        w.signal.includes('BUY')
                          ? 'text-[#33d19b] bg-[#33d19b]/15'
                          : 'text-[#5db3e8] bg-[#5db3e8]/15'
                      }`}
                    >
                      {w.signal}
                    </span>
                  </td>
                  <td className="py-3 text-right font-mono-num font-bold text-[#f4f6fb]">
                    {w.targetPrice}
                  </td>
                  <td className="py-3 text-[#aab2c5]">{w.analysts}</td>
                  <td className="py-3 text-[#6b7488] text-[11px]">{w.catalyst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
