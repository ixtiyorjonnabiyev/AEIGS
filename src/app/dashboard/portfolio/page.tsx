'use client';

import React, { useState } from 'react';
import { useAegis } from '@/lib/store';
import { formatCurrency, formatPercent } from '@/lib/utils';
import {
  PieChart,
  ArrowUpDown,
  Download,
  RefreshCw,
  Plus,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Sliders,
} from 'lucide-react';

export default function PortfolioPage() {
  const { holdings, rebalanceHolding, submitOrder } = useAegis();
  const [filterClass, setFilterClass] = useState<string>('ALL');
  const [rebalanceSuccess, setRebalanceSuccess] = useState(false);

  const filteredHoldings =
    filterClass === 'ALL'
      ? holdings
      : holdings.filter((h) => h.assetClass === filterClass);

  const totalMarketVal = holdings.reduce((sum, h) => sum + h.marketValue, 0);

  // Auto-generate rebalancing orders to bring actual weight to target weight
  const handleExecuteRebalance = () => {
    holdings.forEach((h) => {
      const diffWeight = h.targetWeight - h.weight; // e.g. -2.4%
      if (Math.abs(diffWeight) > 0.5) {
        const dollarsToTrade = (Math.abs(diffWeight) / 100) * totalMarketVal;
        const sharesToTrade = Math.round(dollarsToTrade / h.price);
        if (sharesToTrade > 0) {
          submitOrder({
            symbol: h.symbol,
            side: diffWeight > 0 ? 'BUY' : 'SELL',
            orderType: 'LIMIT',
            quantity: sharesToTrade,
            limitPrice: h.price,
            destination: 'Auto Rebalance Algo',
          });
        }
      }
    });
    setRebalanceSuccess(true);
    setTimeout(() => setRebalanceSuccess(false), 4000);
  };

  const handleExportCSV = () => {
    const headers = 'Symbol,Name,AssetClass,Weight,TargetWeight,Shares,Price,MarketValue\n';
    const rows = holdings
      .map(
        (h) =>
          `"${h.symbol}","${h.name}","${h.assetClass}",${h.weight},${h.targetWeight},${h.shares},${h.price},${h.marketValue}`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AEGIS_Portfolio_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Portfolio Management & Rebalancer
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            Positions, target weights, sector drift, and simulated automated order dispatch
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111726] border border-[#1e2536] text-[#aab2c5] font-semibold text-xs hover:text-[#f4f6fb] hover:border-[#2a3348] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
          <button
            onClick={handleExecuteRebalance}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#f0a63c] text-[#05070d] font-bold text-xs hover:bg-[#ffbf5c] transition-colors shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Execute Auto-Rebalance
          </button>
        </div>
      </div>

      {rebalanceSuccess && (
        <div className="p-3 rounded-lg bg-[#33d19b]/15 border border-[#33d19b]/40 text-[#33d19b] text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>Automated rebalance orders submitted to OMS blotter! Check Trading tab.</span>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {['ALL', 'Equities', 'Fixed Income', 'Commodities', 'FX', 'Cash'].map((category) => (
          <button
            key={category}
            onClick={() => setFilterClass(category)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterClass === category
                ? 'bg-[#1a2336] text-[#ffbf5c] border border-[#f0a63c]/50'
                : 'text-[#6b7488] hover:text-[#aab2c5] hover:bg-[#0e1422] border border-transparent'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Table */}
      <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1e2536] text-[#6b7488]">
                <th className="pb-3 font-semibold">Asset / Security</th>
                <th className="pb-3 font-semibold">Category</th>
                <th className="pb-3 font-semibold font-mono-num text-right">Shares / Par</th>
                <th className="pb-3 font-semibold font-mono-num text-right">Mark Price</th>
                <th className="pb-3 font-semibold font-mono-num text-right">Market Value</th>
                <th className="pb-3 font-semibold font-mono-num text-right">Actual Wgt</th>
                <th className="pb-3 font-semibold font-mono-num text-right">Target Wgt</th>
                <th className="pb-3 font-semibold font-mono-num text-right">Drift</th>
                <th className="pb-3 font-semibold text-center">Interactive Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#151c2a]">
              {filteredHoldings.map((h) => {
                const drift = h.weight - h.targetWeight;
                return (
                  <tr key={h.id} className="hover:bg-[#111726]/40 transition-colors">
                    <td className="py-3 pr-2">
                      <span className="font-bold text-[#f4f6fb] font-mono-num">{h.symbol}</span>
                      <span className="text-[11px] text-[#6b7488] block truncate max-w-[170px]">
                        {h.name}
                      </span>
                    </td>
                    <td className="py-3 text-[#aab2c5]">{h.assetClass}</td>
                    <td className="py-3 text-right font-mono-num text-[#f4f6fb]">
                      {h.shares.toLocaleString()}
                    </td>
                    <td className="py-3 text-right font-mono-num text-[#aab2c5]">
                      ${h.price.toFixed(2)}
                    </td>
                    <td className="py-3 text-right font-mono-num font-bold text-[#f4f6fb]">
                      {formatCurrency(h.marketValue)}
                    </td>
                    <td className="py-3 text-right font-mono-num font-bold text-[#f4f6fb]">
                      {h.weight.toFixed(1)}%
                    </td>
                    <td className="py-3 text-right font-mono-num text-[#6b7488]">
                      {h.targetWeight.toFixed(1)}%
                    </td>
                    <td
                      className={`py-3 text-right font-mono-num font-bold ${
                        drift > 0 ? 'text-[#f0a63c]' : 'text-[#5db3e8]'
                      }`}
                    >
                      {drift > 0 ? `+${drift.toFixed(1)}%` : `${drift.toFixed(1)}%`}
                    </td>
                    <td className="py-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => rebalanceHolding(h.symbol, Math.max(1, h.targetWeight - 1))}
                          className="w-5 h-5 rounded bg-[#111726] border border-[#1e2536] text-[#aab2c5] hover:text-[#f4f6fb] flex items-center justify-center font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="font-mono-num text-[11px] w-8 text-center text-[#ffbf5c]">
                          {h.targetWeight}%
                        </span>
                        <button
                          onClick={() => rebalanceHolding(h.symbol, Math.min(30, h.targetWeight + 1))}
                          className="w-5 h-5 rounded bg-[#111726] border border-[#1e2536] text-[#aab2c5] hover:text-[#f4f6fb] flex items-center justify-center font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
