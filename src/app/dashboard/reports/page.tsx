'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  Printer,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';

export default function ReportsPage() {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Reporting Engine & Executive Factsheets
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            GIPS compliant performance tear-sheets, UCITS disclosure packets, and board presentation decks
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111726] border border-[#1e2536] text-[#aab2c5] font-semibold text-xs hover:text-[#f4f6fb] hover:border-[#2a3348] transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Factsheet
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#f0a63c] text-[#05070d] font-bold text-xs hover:bg-[#ffbf5c] transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF Packet
          </button>
        </div>
      </div>

      {downloadNotice && (
        <div className="p-3 rounded-lg bg-[#33d19b]/15 border border-[#33d19b]/40 text-[#33d19b] text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>AEGIS_Institutional_Factsheet_Q3.pdf generated successfully!</span>
        </div>
      )}

      {/* Institutional Factsheet Preview Card */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#0b101c] border border-[#1e2536] shadow-xl space-y-6">
        {/* Tear-Sheet Masthead */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#1e2536]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f0a63c] to-[#a86518] flex items-center justify-center font-serif text-xl font-black text-[#05070d]">
              Æ
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#f4f6fb]">AEGIS MASTER FUND LP</h2>
              <p className="text-xs text-[#6b7488]">Quarterly Institutional Tear-Sheet & Risk Report</p>
            </div>
          </div>
          <div className="text-right text-xs font-mono-num">
            <div className="text-[#aab2c5]">As of: October 2026</div>
            <div className="text-[#33d19b] font-bold">Audited & Verified</div>
          </div>
        </div>

        {/* Factsheet Executive Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono-num">
          <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
            <span className="text-[#6b7488] block text-[11px]">Net AUM</span>
            <span className="text-lg font-bold text-[#f4f6fb]">$4,820,000,000</span>
          </div>
          <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
            <span className="text-[#6b7488] block text-[11px]">YTD Net Return</span>
            <span className="text-lg font-bold text-[#33d19b]">+14.20%</span>
          </div>
          <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
            <span className="text-[#6b7488] block text-[11px]">Sharpe Ratio</span>
            <span className="text-lg font-bold text-[#f4f6fb]">1.51</span>
          </div>
          <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
            <span className="text-[#6b7488] block text-[11px]">Max Drawdown</span>
            <span className="text-lg font-bold text-[#5db3e8]">-8.40%</span>
          </div>
        </div>

        {/* Strategy Description */}
        <div className="space-y-2 text-xs leading-relaxed text-[#aab2c5]">
          <h3 className="font-bold text-[#f4f6fb] text-sm">Strategy Overview & Investment Mandate</h3>
          <p>
            The AEGIS Master Fund employs an algorithmic multi-factor quantitative approach designed to harvest equity risk premia, momentum, and cross-asset volatility mispricings while strictly capping drawdown via an active duration and volatility overlay. The fund targets an annualized net Sharpe ratio &gt; 1.30 with zero structural unhedged beta above 1.0.
          </p>
        </div>

        {/* Portfolio Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-[#070b13] border border-[#161e31] space-y-2">
            <h4 className="font-bold text-[#f4f6fb]">Top 5 Holdings by NAV Weight</h4>
            <ul className="space-y-1 text-[#aab2c5] font-mono-num">
              <li className="flex justify-between"><span>1. NVIDIA Corp (NVDA)</span> <b>18.4%</b></li>
              <li className="flex justify-between"><span>2. Microsoft Corp (MSFT)</span> <b>15.2%</b></li>
              <li className="flex justify-between"><span>3. US Treasury 10Y Note</span> <b>14.5%</b></li>
              <li className="flex justify-between"><span>4. Apple Inc (AAPL)</span> <b>11.5%</b></li>
              <li className="flex justify-between"><span>5. iShares IG Corp Bond</span> <b>11.0%</b></li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-[#070b13] border border-[#161e31] space-y-2">
            <h4 className="font-bold text-[#f4f6fb]">Regulatory & Counterparty Summary</h4>
            <ul className="space-y-1 text-[#aab2c5]">
              <li className="flex justify-between"><span>Prime Brokers:</span> <b>Morgan Stanley, Goldman Sachs</b></li>
              <li className="flex justify-between"><span>Fund Administrator:</span> <b>SS&C GlobeOp</b></li>
              <li className="flex justify-between"><span>Auditor:</span> <b>PricewaterhouseCoopers LLP</b></li>
              <li className="flex justify-between"><span>Legal Counsel:</span> <b>Sidley Austin LLP</b></li>
              <li className="flex justify-between"><span>Settlement Cycle:</span> <b>T+1 Continuous Net Settlement</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
