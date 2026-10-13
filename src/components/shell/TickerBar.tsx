'use client';

import React from 'react';
import { useAegis } from '@/lib/store';
import { TickerData } from '@/lib/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function TickerBar() {
  const { tickers, setSelectedTicker } = useAegis();

  // Duplicate tickers array to provide an uninterrupted seamless marquee scroll
  const marqueeItems = [...tickers, ...tickers];

  return (
    <div className="w-full bg-[#030508] border-b border-[#1e2536] overflow-hidden select-none z-30">
      <div className="animate-ticker py-2 flex items-center">
        {marqueeItems.map((ticker: TickerData, idx: number) => {
          const isPos = ticker.is_positive;
          return (
            <button
              key={`${ticker.symbol}-${idx}`}
              onClick={() => setSelectedTicker(ticker)}
              className="inline-flex items-center gap-2 px-4 py-0.5 border-r border-[#151c2a] text-xs font-mono-num hover:bg-[#111726]/60 transition-colors cursor-pointer group"
              title={`View ${ticker.label} (${ticker.symbol}) details`}
            >
              <span className="text-[#6b7488] group-hover:text-[#aab2c5] font-semibold">{ticker.symbol}</span>
              <span className="text-[#aab2c5] hidden sm:inline">{ticker.label}</span>
              <span className="text-[#f4f6fb] font-bold">{ticker.price}</span>
              <span
                className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                  isPos
                    ? 'text-[#33d19b] bg-[#33d19b]/10'
                    : 'text-[#f0555f] bg-[#f0555f]/10'
                }`}
              >
                {isPos ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {ticker.change}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
