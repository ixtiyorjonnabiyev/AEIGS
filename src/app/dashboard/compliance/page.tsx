'use client';

import React from 'react';
import { COMPLIANCE_RULES } from '@/lib/mockData';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  Lock,
  Layers,
} from 'lucide-react';

export default function CompliancePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Mandate Compliance & Pre-Trade Screening
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            Statutory UCITS limits, leverage controls, ESG exclusionary guidelines, and real-time audit ledger
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#33d19b]/15 text-[#33d19b] border border-[#33d19b]/30">
            Audit Ledger Immutable (SEC / ESMA Compliant)
          </span>
        </div>
      </div>

      {/* Compliance Overview Deck */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#33d19b]/10 flex items-center justify-center text-[#33d19b]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-mono-num text-[#f4f6fb]">4 Passed</div>
            <div className="text-xs text-[#6b7488]">Zero hard breach violations</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#f0a63c]/10 flex items-center justify-center text-[#f0a63c]">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-mono-num text-[#ffbf5c]">1 Advisory Warning</div>
            <div className="text-xs text-[#6b7488]">UCITS 5/10/40 aggregate threshold</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536] flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#5db3e8]/10 flex items-center justify-center text-[#5db3e8]">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-mono-num text-[#f4f6fb]">T+0 Lock</div>
            <div className="text-xs text-[#6b7488]">Pre-trade automated gatekeeper active</div>
          </div>
        </div>
      </div>

      {/* Rules Evaluation Table */}
      <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#f0a63c]" />
            Active Mandate Constraint Matrix
          </h2>
          <span className="text-xs text-[#6b7488]">Continuous evaluation</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1e2536] text-[#6b7488]">
                <th className="pb-3 font-semibold">Rule Identifier</th>
                <th className="pb-3 font-semibold">Category</th>
                <th className="pb-3 font-semibold">Mandate Threshold</th>
                <th className="pb-3 font-semibold">Current Portfolio Mark</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold">Last Verified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#151c2a]">
              {COMPLIANCE_RULES.map((rule) => (
                <tr key={rule.id} className="hover:bg-[#111726]/40 transition-colors">
                  <td className="py-3 pr-2">
                    <span className="font-bold text-[#f4f6fb] block">{rule.name}</span>
                    <span className="text-[11px] text-[#6b7488] block">{rule.description}</span>
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#111726] text-[#aab2c5] border border-[#1e2536]">
                      {rule.category}
                    </span>
                  </td>
                  <td className="py-3 font-mono-num text-[#aab2c5]">{rule.limitThreshold}</td>
                  <td className="py-3 font-mono-num font-bold text-[#f4f6fb]">{rule.currentValue}</td>
                  <td className="py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                        rule.status === 'PASSED'
                          ? 'text-[#33d19b] bg-[#33d19b]/15'
                          : 'text-[#f0a63c] bg-[#f0a63c]/15'
                      }`}
                    >
                      {rule.status === 'PASSED' ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <AlertTriangle className="w-3 h-3" />
                      )}
                      {rule.status}
                    </span>
                  </td>
                  <td className="py-3 text-[#6b7488] font-mono-num text-[11px]">{rule.lastChecked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
