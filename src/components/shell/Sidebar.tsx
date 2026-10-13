'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAegis } from '@/lib/store';
import {
  LayoutDashboard,
  PieChart,
  ShieldAlert,
  ArrowLeftRight,
  ShieldCheck,
  TrendingUp,
  Search,
  Building2,
  FileSpreadsheet,
  Settings,
  ChevronDown,
  X,
  Sparkles,
} from 'lucide-react';

const WORKSPACE_NAV = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Portfolio', href: '/dashboard/portfolio', icon: PieChart },
  { name: 'Risk Analytics', href: '/dashboard/risk', icon: ShieldAlert },
  { name: 'Trading (OMS)', href: '/dashboard/trading', icon: ArrowLeftRight },
  { name: 'Compliance', href: '/dashboard/compliance', icon: ShieldCheck },
  { name: 'Performance', href: '/dashboard/performance', icon: TrendingUp },
  { name: 'Research', href: '/dashboard/research', icon: Search },
];

const FIRM_NAV = [
  { name: 'Clients', href: '/dashboard/clients', icon: Building2 },
  { name: 'Reports', href: '/dashboard/reports', icon: FileSpreadsheet },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { profile, isMobileMenuOpen, setIsMobileMenuOpen } = useAegis();

  const renderNavLinks = () => (
    <div className="flex flex-col flex-1 overflow-y-auto px-3 py-4 space-y-6">
      {/* Workspace Section */}
      <div>
        <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-[#6b7488]">
          Workspace
        </div>
        <div className="space-y-1">
          {WORKSPACE_NAV.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#1a2336] text-[#ffbf5c] font-semibold border-l-2 border-[#f0a63c] shadow-sm'
                    : 'text-[#aab2c5] hover:text-[#f4f6fb] hover:bg-[#121927]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#f0a63c]' : 'text-[#6b7488]'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Firm Section */}
      <div>
        <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-[#6b7488]">
          Firm
        </div>
        <div className="space-y-1">
          {FIRM_NAV.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#1a2336] text-[#ffbf5c] font-semibold border-l-2 border-[#f0a63c] shadow-sm'
                    : 'text-[#aab2c5] hover:text-[#f4f6fb] hover:bg-[#121927]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#f0a63c]' : 'text-[#6b7488]'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Landing Link */}
      <div className="pt-2">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-[#f0a63c] bg-[#f0a63c]/10 hover:bg-[#f0a63c]/20 border border-[#f0a63c]/30 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Product Landing Page</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden lg:flex w-64 flex-col bg-[#070b13] border-r border-[#1e2536] sticky top-0 h-screen select-none z-20">
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1e2536]">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f0a63c] to-[#a86518] flex items-center justify-center font-serif text-lg font-black text-[#05070d] shadow-md">
            Æ
          </div>
          <div>
            <div className="font-bold tracking-wider text-sm text-[#f4f6fb]">AEGIS</div>
            <div className="text-[10px] text-[#6b7488] uppercase tracking-widest font-mono">Investment OS</div>
          </div>
        </div>

        {/* Navigation items */}
        {renderNavLinks()}

        {/* Account Master Switcher Pill */}
        <div className="p-3 border-t border-[#1e2536]">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e1422] border border-[#1e2536] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#33d19b] animate-pulse" />
              <div className="truncate max-w-[130px]">
                <div className="font-bold text-[#f4f6fb] truncate">Northbridge Cap</div>
                <div className="text-[10px] text-[#6b7488] truncate">Master Account</div>
              </div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[#6b7488]" />
          </div>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop and Slide-in Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex flex-col w-72 max-w-xs bg-[#070b13] border-r border-[#1e2536] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2536]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#f0a63c] flex items-center justify-center font-serif font-black text-[#05070d]">
                  Æ
                </div>
                <div className="font-bold text-sm text-[#f4f6fb]">AEGIS OS</div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md text-[#6b7488] hover:text-[#f4f6fb] hover:bg-[#121927]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {renderNavLinks()}
          </div>
        </div>
      )}
    </>
  );
}
