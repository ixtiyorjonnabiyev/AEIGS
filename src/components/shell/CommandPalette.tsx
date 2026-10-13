'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAegis } from '@/lib/store';
import {
  Search,
  X,
  LayoutDashboard,
  PieChart,
  ShieldAlert,
  ArrowLeftRight,
  ShieldCheck,
  TrendingUp,
  Building2,
  FileSpreadsheet,
  Settings,
  ArrowRight,
} from 'lucide-react';

export function CommandPalette() {
  const { isCmdOpen, setIsCmdOpen, holdings, setSelectedTicker, tickers } = useAegis();
  const [query, setQuery] = useState('');
  const router = useRouter();

  if (!isCmdOpen) return null;

  const quickNav = [
    { title: 'Overview Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Portfolio & Rebalancing', url: '/dashboard/portfolio', icon: PieChart },
    { title: 'Risk Analytics & Stress Tests', url: '/dashboard/risk', icon: ShieldAlert },
    { title: 'Trading OMS & Blotter', url: '/dashboard/trading', icon: ArrowLeftRight },
    { title: 'Mandate Compliance Rules', url: '/dashboard/compliance', icon: ShieldCheck },
    { title: 'Performance Attribution', url: '/dashboard/performance', icon: TrendingUp },
    { title: 'Institutional Clients Directory', url: '/dashboard/clients', icon: Building2 },
    { title: 'Tear-Sheet Reporting Engine', url: '/dashboard/reports', icon: FileSpreadsheet },
    { title: 'Settings & Risk Limits', url: '/dashboard/settings', icon: Settings },
  ];

  const filteredNav = quickNav.filter((n) =>
    n.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredHoldings = holdings.filter(
    (h) =>
      h.symbol.toLowerCase().includes(query.toLowerCase()) ||
      h.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectNav = (url: string) => {
    setIsCmdOpen(false);
    router.push(url);
  };

  const handleSelectHolding = (symbol: string) => {
    const matchedTicker = tickers.find((t) => t.symbol.toUpperCase().includes(symbol.toUpperCase()));
    setIsCmdOpen(false);
    if (matchedTicker) {
      setSelectedTicker(matchedTicker);
    } else {
      router.push('/dashboard/portfolio');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-100">
      <div className="bg-[#0b101c] border border-[#2a3348] rounded-xl w-full max-w-xl shadow-2xl overflow-hidden">
        {/* Input bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1e2536] bg-[#070b13]">
          <Search className="w-5 h-5 text-[#f0a63c]" />
          <input
            type="text"
            placeholder="Type command, ticker symbol, or workspace name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none text-[#f4f6fb] text-sm focus:outline-none placeholder-[#6b7488]"
          />
          <button
            onClick={() => setIsCmdOpen(false)}
            className="p-1 rounded text-[#6b7488] hover:text-[#f4f6fb]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4 text-xs">
          {/* Navigation group */}
          {filteredNav.length > 0 && (
            <div>
              <div className="px-2 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6b7488]">
                Workspaces
              </div>
              <div className="space-y-1">
                {filteredNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      onClick={() => handleSelectNav(item.url)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[#aab2c5] hover:text-[#f4f6fb] hover:bg-[#121927] transition-all text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#f0a63c]" />
                        <span>{item.title}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#6b7488]" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Holdings group */}
          {filteredHoldings.length > 0 && (
            <div>
              <div className="px-2 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6b7488]">
                Portfolio Securities
              </div>
              <div className="space-y-1">
                {filteredHoldings.slice(0, 5).map((holding) => (
                  <button
                    key={holding.id}
                    onClick={() => handleSelectHolding(holding.symbol)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[#aab2c5] hover:text-[#f4f6fb] hover:bg-[#121927] transition-all text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono-num font-bold text-[#f4f6fb]">
                        {holding.symbol}
                      </span>
                      <span className="text-[#6b7488] truncate">{holding.name}</span>
                    </div>
                    <span className="font-mono-num text-[#33d19b] font-semibold">
                      {holding.weight.toFixed(1)}% Weight
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[#1e2536] bg-[#070b13] text-[11px] text-[#6b7488]">
          <span>Use <b>ESC</b> to exit</span>
          <span>Press <b>ENTER</b> to select</span>
        </div>
      </div>
    </div>
  );
}
