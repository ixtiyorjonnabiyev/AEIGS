'use client';

import React from 'react';
import { useAegis } from '@/lib/store';
import { Menu, Search, Bell, Shield, User } from 'lucide-react';
import Link from 'next/link';

export function Topbar() {
  const { profile, setIsCmdOpen, setIsMobileMenuOpen } = useAegis();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-14 px-4 sm:px-6 bg-[#070b13]/90 backdrop-blur-md border-b border-[#1e2536]">
      {/* Left: Mobile Drawer Trigger + Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden p-2 rounded-lg text-[#aab2c5] hover:text-[#f4f6fb] hover:bg-[#121927] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search / Command Bar Trigger */}
        <button
          onClick={() => setIsCmdOpen(true)}
          className="flex items-center justify-between w-full max-w-md px-3.5 py-1.5 rounded-lg bg-[#0e1422] border border-[#1e2536] text-xs text-[#6b7488] hover:border-[#2a3348] hover:text-[#aab2c5] transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#6b7488] group-hover:text-[#f0a63c]" />
            <span className="truncate">Search securities, mandates, rules...</span>
          </div>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#161e31] text-[#aab2c5] rounded border border-[#2a3348]">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right: Live Market Telemetry + Notifications + User Profile */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Market Status Ping */}
        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#111726] border border-[#1e2536] text-[11px] text-[#aab2c5]">
          <span className="w-2 h-2 rounded-full bg-[#33d19b] animate-pulse" />
          <span className="font-semibold text-[#f4f6fb]">MARKET OPEN</span>
          <span className="text-[#6b7488] font-mono-num">| B-PIPE LOW-LATENCY</span>
        </div>

        {/* User Pill / Profile */}
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2.5 p-1 sm:px-2.5 sm:py-1 rounded-lg hover:bg-[#121927] border border-transparent hover:border-[#1e2536] transition-all"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f0a63c] to-[#ffbf5c] text-[#05070d] font-bold text-xs flex items-center justify-center font-mono shadow">
            {profile.initials || 'MR'}
          </div>
          <div className="hidden md:block text-left">
            <div className="text-xs font-bold text-[#f4f6fb] leading-none">{profile.name}</div>
            <div className="text-[10px] text-[#6b7488] leading-none mt-1">{profile.role}</div>
          </div>
        </Link>
      </div>
    </header>
  );
}
