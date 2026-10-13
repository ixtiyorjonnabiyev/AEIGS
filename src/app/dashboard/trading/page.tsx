'use client';

import React, { useState } from 'react';
import { useAegis } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';
import {
  ArrowLeftRight,
  Send,
  CheckCircle2,
  Clock,
  Ban,
  Shield,
  Layers,
  Zap,
} from 'lucide-react';

export default function TradingOMSPage() {
  const { orders, submitOrder, holdings } = useAegis();

  // Order Ticket Form State
  const [symbol, setSymbol] = useState('NVDA');
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
  const [orderType, setOrderType] = useState<'MARKET' | 'LIMIT' | 'STOP' | 'TWAP' | 'VWAP'>('LIMIT');
  const [quantity, setQuantity] = useState<number>(1000);
  const [limitPrice, setLimitPrice] = useState<number>(885.0);
  const [destination, setDestination] = useState('NASDAQ DMA');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    submitOrder({
      symbol: symbol.toUpperCase(),
      side,
      orderType,
      quantity: Number(quantity),
      limitPrice: Number(limitPrice),
      destination,
    });
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1e2536]">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f6fb] flex items-center gap-2">
            Trading & Order Management System (OMS)
          </h1>
          <p className="text-xs text-[#6b7488] mt-1">
            Algorithmic execution tickets, dark pool routing, fix protocol connection, and live fill blotter
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#33d19b]/15 text-[#33d19b] border border-[#33d19b]/30">
            FIX 4.4 Online · Latency 0.42ms
          </span>
        </div>
      </div>

      {submittedMessage && (
        <div className="p-3 rounded-lg bg-[#33d19b]/15 border border-[#33d19b]/40 text-[#33d19b] text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>Order executed & confirmed on blotter! Position balances updated.</span>
        </div>
      )}

      {/* Main Grid: Order Ticket (Left) & Live Blotter (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Ticket Panel */}
        <div className="p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#f0a63c]" />
              Order Entry Ticket
            </h2>
            <span className="text-[10px] text-[#6b7488] font-mono">STP T+1</span>
          </div>

          <form onSubmit={handleSubmitOrder} className="space-y-4 text-xs">
            {/* BUY / SELL Switch */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSide('BUY')}
                className={`py-2 rounded-lg font-bold text-xs transition-all ${
                  side === 'BUY'
                    ? 'bg-[#33d19b] text-[#05070d] shadow-md'
                    : 'bg-[#111726] text-[#aab2c5] hover:text-[#f4f6fb]'
                }`}
              >
                BUY / LONG
              </button>
              <button
                type="button"
                onClick={() => setSide('SELL')}
                className={`py-2 rounded-lg font-bold text-xs transition-all ${
                  side === 'SELL'
                    ? 'bg-[#f0555f] text-[#ffffff] shadow-md'
                    : 'bg-[#111726] text-[#aab2c5] hover:text-[#f4f6fb]'
                }`}
              >
                SELL / SHORT
              </button>
            </div>

            {/* Symbol Input */}
            <div>
              <label className="block text-[#6b7488] font-semibold mb-1">Ticker Symbol</label>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                required
                className="w-full px-3 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] font-mono-num font-bold focus:border-[#f0a63c] focus:outline-none"
              />
            </div>

            {/* Order Type & Quantity */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#6b7488] font-semibold mb-1">Order Type</label>
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value as any)}
                  className="w-full px-2.5 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] focus:border-[#f0a63c] focus:outline-none"
                >
                  <option value="LIMIT">LIMIT</option>
                  <option value="MARKET">MARKET</option>
                  <option value="STOP">STOP</option>
                  <option value="TWAP">TWAP Algo</option>
                  <option value="VWAP">VWAP Algo</option>
                </select>
              </div>

              <div>
                <label className="block text-[#6b7488] font-semibold mb-1">Shares (Qty)</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] font-mono-num font-bold focus:border-[#f0a63c] focus:outline-none"
                />
              </div>
            </div>

            {/* Limit Price */}
            {orderType !== 'MARKET' && (
              <div>
                <label className="block text-[#6b7488] font-semibold mb-1">Limit Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(Number(e.target.value))}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] font-mono-num font-bold focus:border-[#f0a63c] focus:outline-none"
                />
              </div>
            )}

            {/* Routing Venue */}
            <div>
              <label className="block text-[#6b7488] font-semibold mb-1">Execution Routing</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-2.5 py-2 rounded-lg bg-[#070b13] border border-[#1e2536] text-[#f4f6fb] focus:border-[#f0a63c] focus:outline-none"
              >
                <option value="NASDAQ DMA">NASDAQ DMA (Direct Market Access)</option>
                <option value="NYSE Arca">NYSE Arca Liquidity Center</option>
                <option value="IEX / Dark Pool">IEX Dark Pool (Midpoint Match)</option>
                <option value="Citadel Algo">Citadel Securities Algo</option>
                <option value="Jane Street Algo">Jane Street Liquidity Router</option>
              </select>
            </div>

            {/* Estimated Value */}
            <div className="p-3 rounded-lg bg-[#070b13] border border-[#161e31] flex justify-between items-center text-xs">
              <span className="text-[#6b7488]">Estimated Value:</span>
              <span className="font-mono-num font-bold text-[#f4f6fb]">
                {formatCurrency(quantity * limitPrice)}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#f0a63c] text-[#05070d] font-bold text-xs hover:bg-[#ffbf5c] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Transmit Order to Market
            </button>
          </form>
        </div>

        {/* Live Execution Blotter */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-[#0b101c] border border-[#1e2536] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#f4f6fb] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#f0a63c]" />
              Real-Time Execution Blotter
            </h2>
            <span className="text-xs text-[#6b7488]">{orders.length} active sessions</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-num">
              <thead>
                <tr className="border-b border-[#1e2536] text-[#6b7488]">
                  <th className="pb-3 font-semibold">Order ID</th>
                  <th className="pb-3 font-semibold">Time</th>
                  <th className="pb-3 font-semibold">Side</th>
                  <th className="pb-3 font-semibold">Symbol</th>
                  <th className="pb-3 font-semibold">Type</th>
                  <th className="pb-3 font-semibold text-right">Shares</th>
                  <th className="pb-3 font-semibold text-right">Fill Price</th>
                  <th className="pb-3 font-semibold">Venue</th>
                  <th className="pb-3 font-semibold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#151c2a]">
                {orders.map((o) => (
                  <tr key={o.id} className="hover:bg-[#111726]/40 transition-colors">
                    <td className="py-3 text-[#aab2c5] font-bold">{o.id}</td>
                    <td className="py-3 text-[#6b7488] text-[11px]">{o.timestamp}</td>
                    <td className="py-3">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          o.side === 'BUY'
                            ? 'text-[#33d19b] bg-[#33d19b]/10'
                            : 'text-[#f0555f] bg-[#f0555f]/10'
                        }`}
                      >
                        {o.side}
                      </span>
                    </td>
                    <td className="py-3 font-bold text-[#f4f6fb]">{o.symbol}</td>
                    <td className="py-3 text-[#aab2c5]">{o.orderType}</td>
                    <td className="py-3 text-right font-bold text-[#f4f6fb]">
                      {o.quantity.toLocaleString()}
                    </td>
                    <td className="py-3 text-right text-[#aab2c5]">
                      ${o.avgFillPrice.toFixed(2)}
                    </td>
                    <td className="py-3 text-[#6b7488] text-[11px] truncate max-w-[120px]">
                      {o.destination}
                    </td>
                    <td className="py-3 text-center">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          o.status === 'FILLED'
                            ? 'text-[#33d19b] bg-[#33d19b]/15'
                            : o.status === 'WORKING'
                            ? 'text-[#5db3e8] bg-[#5db3e8]/15'
                            : 'text-[#f0a63c] bg-[#f0a63c]/15'
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
