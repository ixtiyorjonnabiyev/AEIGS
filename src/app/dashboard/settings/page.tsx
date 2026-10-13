'use client';

import React, { useState } from 'react';
import { useAegis } from '@/lib/store';
import {
  Settings,
  User,
  Shield,
  Key,
  CheckCircle2,
  Save,
  Globe,
  Sliders,
} from 'lucide-react';

export default function SettingsPage() {
  const { profile, updateProfile } = useAegis();

  const [name, setName] = useState(profile.name);
  const [role, setRole] = useState(profile.role);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);

  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, role, email, phone });
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            System Preferences & Terminal Settings
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            User profile parameters, institutional risk thresholds, and API feed connectivity
          </p>
        </div>
      </div>

      {savedNotice && (
        <div className="p-3 rounded-lg bg-[#33d19b]/15 border border-[#33d19b]/40 text-[#33d19b] text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>Profile & system preferences saved to browser storage!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
          <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
            <User className="w-4 h-4 text-[#f0a63c]" />
            Trader & Portfolio Manager Profile
          </h2>

          <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
            <div>
              <label className="block text-[#6b7488] font-semibold mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] focus:border-[#f0a63c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#6b7488] font-semibold mb-1">Corporate Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] focus:border-[#f0a63c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#6b7488] font-semibold mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] focus:border-[#f0a63c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#6b7488] font-semibold mb-1">Secure Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] focus:border-[#f0a63c] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#f0a63c] text-[#05070d] font-bold text-xs hover:bg-[#ffbf5c] transition-colors shadow-sm cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              Save Profile Changes
            </button>
          </form>
        </div>

        {/* Risk Thresholds & Integrations */}
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
            <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#f0a63c]" />
              Mandate Threshold Configuration
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
                <div>
                  <span className="font-bold text-[#f4f6fb] block">Maximum Single Issuer Weight</span>
                  <span className="text-[#6b7488] text-[11px]">Hard breach trigger above limit</span>
                </div>
                <span className="font-mono-num font-bold text-[#f0a63c] text-sm">20.0%</span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
                <div>
                  <span className="font-bold text-[#f4f6fb] block">Maximum Gross Leverage</span>
                  <span className="text-[#6b7488] text-[11px]">Total assets over equity</span>
                </div>
                <span className="font-mono-num font-bold text-[#33d19b] text-sm">2.00x</span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-[#070b13] border border-[#161e31]">
                <div>
                  <span className="font-bold text-[#f4f6fb] block">Daily Parametric VaR Alert</span>
                  <span className="text-[#6b7488] text-[11px]">Flag risk officer on breach</span>
                </div>
                <span className="font-mono-num font-bold text-[#f4f6fb] text-sm">$25.0M</span>
              </div>
            </div>
          </div>

          {/* API Connectivity Status */}
          <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-3">
            <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#f0a63c]" />
              Institutional Feeds & Cloud Gateways
            </h2>

            <div className="space-y-2 text-xs">
              {[
                { feed: 'Bloomberg B-PIPE Feed', status: 'Connected (0.8ms)', color: 'text-[#33d19b]' },
                { feed: 'Refinitiv Tick History', status: 'Active (T+0)', color: 'text-[#33d19b]' },
                { feed: 'FIX Protocol 4.4 Engine', status: 'Authenticated', color: 'text-[#33d19b]' },
                { feed: 'Vercel Edge Serverless', status: 'Production Ready', color: 'text-[#33d19b]' },
              ].map((item) => (
                <div
                  key={item.feed}
                  className="p-2.5 rounded-lg bg-[#070b13] border border-[#161e31] flex justify-between items-center"
                >
                  <span className="text-[#aab2c5] font-semibold">{item.feed}</span>
                  <span className={`font-mono-num font-bold text-[11px] ${item.color}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
