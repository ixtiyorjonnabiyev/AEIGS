'use client';

import React from 'react';
import { AegisProvider } from '@/lib/store';
import { TickerBar } from '@/components/shell/TickerBar';
import { Sidebar } from '@/components/shell/Sidebar';
import { Topbar } from '@/components/shell/Topbar';
import { TickerModal } from '@/components/shell/TickerModal';
import { CommandPalette } from '@/components/shell/CommandPalette';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AegisProvider>
      <div className="min-h-screen bg-[#05070d] text-[#f4f6fb] flex flex-col selection:bg-[#f0a63c]/20 selection:text-[#ffbf5c]">
        {/* Infinite Top Ticker Tape */}
        <TickerBar />

        <div className="flex flex-1 min-h-0">
          {/* Responsive Left Navigation */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            <Topbar />

            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>

        {/* Global Overlays */}
        <TickerModal />
        <CommandPalette />
      </div>
    </AegisProvider>
  );
}
