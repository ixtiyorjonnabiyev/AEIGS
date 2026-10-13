'use client';

import React, { useState } from 'react';
import { RISK_SCENARIOS } from '@/lib/mockData';
import {
  ShieldAlert,
  Flame,
  Activity,
  GitCommit,
  TrendingDown,
  Info,
  CheckCircle,
} from 'lucide-react';

export default function RiskAnalyticsPage() {
  const [selectedScenario, setSelectedScenario] = useState(RISK_SCENARIOS[0]);

  // Asset correlation matrix data
  const assets = ['SPX', 'NDX', '10Y UST', 'GOLD', 'OIL', 'BTC'];
  const matrix = [
    [1.0, 0.88, -0.32, 0.12, 0.42, 0.58],
    [0.88, 1.0, -0.41, 0.08, 0.35, 0.64],
    [-0.32, -0.41, 1.0, 0.28, -0.15, -0.22],
    [0.12, 0.08, 0.28, 1.0, 0.22, 0.18],
    [0.42, 0.35, -0.15, 0.22, 1.0, 0.25],
    [0.58, 0.64, -0.22, 0.18, 0.25, 1.0],
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Risk Analytics & Stress Testing
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            Multivariate Value-at-Risk, historical tail shocks, factor covariances, and drawdown limits
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#33d19b]/15 text-[#33d19b] border border-[#33d19b]/30">
            Model: Monte Carlo 50,000 Paths
          </span>
        </div>
      </div>

      {/* VaR Metrics Deck */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536]">
          <span className="text-xs font-semibold text-[#6b7488]">Parametric VaR (95%)</span>
          <div className="text-2xl font-bold font-mono-num text-[#f4f6fb] mt-1">$18.4M</div>
          <span className="text-[11px] text-[#aab2c5]">1-Day Horizon · Gaussian</span>
        </div>
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536]">
          <span className="text-xs font-semibold text-[#6b7488]">Historical VaR (99%)</span>
          <div className="text-2xl font-bold font-mono-num text-[#f0a63c] mt-1">$29.8M</div>
          <span className="text-[11px] text-[#aab2c5]">10-Day Scaled Horizon</span>
        </div>
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536]">
          <span className="text-xs font-semibold text-[#6b7488]">Expected Shortfall (CVaR)</span>
          <div className="text-2xl font-bold font-mono-num text-[#f0555f] mt-1">$36.2M</div>
          <span className="text-[11px] text-[#aab2c5]">Tail Loss Average (99%)</span>
        </div>
        <div className="p-4 rounded-xl bg-[#0b101c] border border-[#1e2536]">
          <span className="text-xs font-semibold text-[#6b7488]">Max Historical Drawdown</span>
          <div className="text-2xl font-bold font-mono-num text-[#33d19b] mt-1">-8.4%</div>
          <span className="text-[11px] text-[#aab2c5]">Recovery Time: 42 Days</span>
        </div>
      </div>

      {/* Main Grid: Stress Testing Simulator & Correlation Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stress Testing Engine */}
        <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#f0a63c]" />
              Macro Tail Risk Scenarios
            </h2>
            <span className="text-xs text-[#6b7488]">Select to run shock simulation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {RISK_SCENARIOS.map((scen) => (
              <button
                key={scen.id}
                onClick={() => setSelectedScenario(scen)}
                className={`p-3 rounded-lg text-left transition-all border ${
                  selectedScenario.id === scen.id
                    ? 'bg-[#1a2336] border-[#f0a63c] shadow-sm'
                    : 'bg-[#070b13] border-[#161e31] hover:border-[#2a3348]'
                }`}
              >
                <div className="font-bold text-[#f4f6fb] text-xs leading-snug">{scen.name}</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-[#6b7488]">{scen.period}</span>
                  <span className="font-mono-num font-bold text-xs text-[#f0555f]">
                    {scen.lossPercent}%
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Scenario Detailed Readout */}
          <div className="p-4 rounded-lg bg-[#111726] border border-[#1e2536] space-y-3">
            <div className="flex items-center justify-between border-b border-[#1e2536] pb-2">
              <span className="text-xs font-bold text-[#f4f6fb]">{selectedScenario.name}</span>
              <span className="font-mono-num font-extrabold text-[#f0555f] text-sm">
                Projected Drawdown: {selectedScenario.projectedLoss}
              </span>
            </div>
            <div className="text-xs text-[#aab2c5] leading-relaxed">
              <span className="font-semibold text-[#f4f6fb]">Transmission Mechanism: </span>
              {selectedScenario.portfolioImpact}
            </div>
            <div className="p-2.5 rounded bg-[#070b13] border border-[#161e31] text-xs text-[#33d19b] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>{selectedScenario.hedgingStatus}</span>
            </div>
          </div>
        </div>

        {/* Cross-Asset Correlation Matrix */}
        <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#f0a63c]" />
              Cross-Asset Correlation Matrix
            </h2>
            <span className="text-xs text-[#6b7488]">3Y Rolling Daily Covariance</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs font-mono-num">
              <thead>
                <tr>
                  <th className="p-2 text-left text-[#6b7488]"></th>
                  {assets.map((a) => (
                    <th key={a} className="p-2 text-[#aab2c5] font-bold">
                      {a}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {assets.map((rowAsset, rIdx) => (
                  <tr key={rowAsset}>
                    <td className="p-2 text-left font-bold text-[#f4f6fb]">{rowAsset}</td>
                    {matrix[rIdx].map((val, cIdx) => {
                      let bgClass = 'bg-[#111726] text-[#aab2c5]';
                      if (val === 1.0) bgClass = 'bg-[#1a2336] text-[#ffbf5c] font-bold';
                      else if (val > 0.5) bgClass = 'bg-[#f0555f]/20 text-[#f0555f] font-semibold';
                      else if (val < 0) bgClass = 'bg-[#33d19b]/20 text-[#33d19b] font-semibold';

                      return (
                        <td key={cIdx} className="p-1">
                          <div className={`py-1.5 px-2 rounded ${bgClass}`}>
                            {val.toFixed(2)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#6b7488] pt-2 border-t border-[#1e2536]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-[#33d19b]/30 inline-block" /> Negative (Diversifier)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-[#f0555f]/30 inline-block" /> Positive (Co-movement)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-[#1a2336] inline-block" /> 1.0 Autocorrelation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
