'use client';

import React from 'react';
import { useAegis } from '@/lib/store';
import { X, TrendingUp, TrendingDown, ExternalLink, Zap } from 'lucide-react';
import Link from 'next/link';

export function TickerModal() {
  const { selectedTicker, setSelectedTicker } = useAegis();

  if (!selectedTicker) return null;

  const isPos = selectedTicker.is_positive;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#0e1422] border border-[#2a3348] rounded-xl w-full max-w-xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e2536] bg-[#090d16]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#f0a63c]/10 text-[#f0a63c] border border-[#f0a63c]/30 font-mono-num font-bold text-sm">
              {selectedTicker.symbol}
            </span>
            <div>
              <h3 className="font-bold text-[#f4f6fb] text-base leading-tight">
                {selectedTicker.label}
              </h3>
              <p className="text-xs text-[#6b7488]">Institutional Asset Analytics</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedTicker(null)}
            className="p-1.5 rounded-lg text-[#6b7488] hover:text-[#f4f6fb] hover:bg-[#1a2234] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Main Price & Change Callout */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 p-4 rounded-lg bg-[#111726] border border-[#1e2536]">
            <div>
              <div className="text-xs text-[#aab2c5] uppercase tracking-wider font-semibold">Latest Mark</div>
              <div className="text-3xl font-extrabold text-[#f4f6fb] font-mono-num mt-1">
                {selectedTicker.price}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#aab2c5] uppercase tracking-wider font-semibold">Session Move</div>
              <div
                className={`inline-flex items-center gap-1 text-lg font-bold font-mono-num mt-1 px-2.5 py-0.5 rounded ${
                  isPos ? 'text-[#33d19b] bg-[#33d19b]/15' : 'text-[#f0555f] bg-[#f0555f]/15'
                }`}
              >
                {isPos ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {selectedTicker.change}
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-[#0a0e18] border border-[#1e2536]">
              <span className="text-[#6b7488]">52W High</span>
              <p className="font-mono-num font-bold text-[#f4f6fb] mt-0.5">{selectedTicker.high52 || '$5,189.26'}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0a0e18] border border-[#1e2536]">
              <span className="text-[#6b7488]">52W Low</span>
              <p className="font-mono-num font-bold text-[#f4f6fb] mt-0.5">{selectedTicker.low52 || '$4,103.78'}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0a0e18] border border-[#1e2536]">
              <span className="text-[#6b7488]">Volume</span>
              <p className="font-mono-num font-bold text-[#f4f6fb] mt-0.5">{selectedTicker.volume || '2.45B'}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0a0e18] border border-[#1e2536]">
              <span className="text-[#6b7488]">Portfolio Beta</span>
              <p className="font-mono-num font-bold text-[#f4f6fb] mt-0.5">{selectedTicker.beta || '1.00'}</p>
            </div>
          </div>

          {/* Synthetic Mini Price Trend Sparkline */}
          <div className="p-4 rounded-lg bg-[#0a0e18] border border-[#1e2536]">
            <div className="flex justify-between items-center text-xs mb-2 text-[#aab2c5]">
              <span>Intraday Liquidity Arc</span>
              <span className="text-[#33d19b] font-mono-num">Real-time Stream</span>
            </div>
            <div className="h-16 flex items-end gap-1.5 pt-2">
              {[45, 52, 48, 62, 58, 70, 65, 82, 78, 88, 92, 85].map((val, idx) => (
                <div
                  key={idx}
                  className={`flex-1 rounded-t transition-all duration-300 ${
                    isPos ? 'bg-[#33d19b]/40 hover:bg-[#33d19b]' : 'bg-[#f0555f]/40 hover:bg-[#f0555f]'
                  }`}
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#1e2536] bg-[#090d16]">
          <Link
            href="/dashboard/trading"
            onClick={() => setSelectedTicker(null)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f0a63c] text-[#05070d] font-bold text-xs hover:bg-[#ffbf5c] transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            Route Order in OMS
          </Link>
          <button
            onClick={() => setSelectedTicker(null)}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#aab2c5] hover:text-[#f4f6fb] hover:bg-[#1a2234] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
