'use client';

import React from 'react';
import { INSTITUTIONAL_CLIENTS } from '@/lib/mockData';
import {
  Building2,
  Mail,
  FileText,
  CheckCircle2,
  ChevronRight,
  Shield,
} from 'lucide-react';

export default function ClientsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Institutional Client Accounts & Mandates
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            Sovereign wealth entities, pension funds, endowments, multi-family offices, and bespoke fee agreements
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#33d19b]/15 text-[#33d19b] border border-[#33d19b]/30">
            Total Client AUM: $4.15B
          </span>
        </div>
      </div>

      {/* Clients Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INSTITUTIONAL_CLIENTS.map((client) => (
          <div
            key={client.id}
            className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] hover:border-[#2a3348] transition-all space-y-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#f0a63c] uppercase font-bold tracking-wider">
                  {client.id} · {client.entityType}
                </span>
                <h3 className="text-base font-bold text-[#f4f6fb] mt-0.5">
                  {client.name}
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold text-[#33d19b] bg-[#33d19b]/15">
                {client.status}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#6b7488]">Allocated Balance:</span>
                <span className="font-mono-num font-bold text-[#f4f6fb]">
                  {client.aumAllocated}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7488]">Investment Mandate:</span>
                <span className="text-[#aab2c5] font-semibold">{client.mandate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7488]">Inception Date:</span>
                <span className="text-[#6b7488] font-mono-num">{client.inception}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-[#1e2536]">
              <div className="flex items-center gap-2 text-[#aab2c5]">
                <Mail className="w-3.5 h-3.5 text-[#6b7488]" />
                <span className="truncate max-w-[200px]">{client.contactPerson}</span>
              </div>
              <button className="text-xs text-[#f0a63c] hover:underline flex items-center gap-1 font-semibold">
                Mandate Agreement <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
