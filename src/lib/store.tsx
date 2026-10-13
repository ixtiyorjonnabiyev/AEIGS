'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TickerData, PortfolioHolding, OrderItem, UserProfile } from './types';
import { INITIAL_TICKERS, INITIAL_HOLDINGS, INITIAL_ORDERS } from './mockData';

interface AegisContextType {
  tickers: TickerData[];
  holdings: PortfolioHolding[];
  orders: OrderItem[];
  profile: UserProfile;
  selectedTicker: TickerData | null;
  setSelectedTicker: (ticker: TickerData | null) => void;
  isCmdOpen: boolean;
  setIsCmdOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  submitOrder: (order: Omit<OrderItem, 'id' | 'timestamp' | 'status' | 'filledQuantity' | 'avgFillPrice'>) => void;
  rebalanceHolding: (symbol: string, newTarget: number) => void;
}

const defaultProfile: UserProfile = {
  name: 'M. Reyes',
  role: 'Portfolio Manager',
  email: 'm.reyes@northbridgecap.com',
  phone: '+1 (212) 555-0148',
  initials: 'MR',
  entity: 'Northbridge Capital Master Fund',
};

const AegisContext = createContext<AegisContextType | undefined>(undefined);

export function AegisProvider({ children }: { children: React.ReactNode }) {
  const [tickers, setTickers] = useState<TickerData[]>(INITIAL_TICKERS);
  const [holdings, setHoldings] = useState<PortfolioHolding[]>(INITIAL_HOLDINGS);
  const [orders, setOrders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [selectedTicker, setSelectedTicker] = useState<TickerData | null>(null);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load profile from localStorage if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem('aegis_profile');
      if (stored) {
        setProfile((prev) => ({ ...prev, ...JSON.parse(stored) }));
      }
    } catch {
      // ignore
    }
  }, []);

  // Update profile
  const updateProfile = (updated: Partial<UserProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      if (updated.name) {
        next.initials = updated.name
          .split(' ')
          .filter(Boolean)
          .map((n) => n[0])
          .join('')
          .slice(0, 2)
          .toUpperCase();
      }
      try {
        localStorage.setItem('aegis_profile', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Submit new simulated order to blotter
  const submitOrder = (newOrderData: Omit<OrderItem, 'id' | 'timestamp' | 'status' | 'filledQuantity' | 'avgFillPrice'>) => {
    const id = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: false }) + ' EST';

    const newOrder: OrderItem = {
      ...newOrderData,
      id,
      timestamp: timeStr,
      status: 'FILLED',
      filledQuantity: newOrderData.quantity,
      avgFillPrice: newOrderData.limitPrice || 100 + Math.random() * 50,
    };

    setOrders((prev) => [newOrder, ...prev]);

    // Update holdings weight if symbol exists
    setHoldings((prev) =>
      prev.map((h) => {
        if (h.symbol.toUpperCase() === newOrderData.symbol.toUpperCase()) {
          const deltaShares = newOrderData.side === 'BUY' ? newOrderData.quantity : -newOrderData.quantity;
          const newShares = Math.max(0, h.shares + deltaShares);
          const newMktVal = newShares * h.price;
          return {
            ...h,
            shares: newShares,
            marketValue: newMktVal,
          };
        }
        return h;
      })
    );
  };

  // Rebalance target weights
  const rebalanceHolding = (symbol: string, newTarget: number) => {
    setHoldings((prev) =>
      prev.map((h) => (h.symbol === symbol ? { ...h, targetWeight: newTarget } : h))
    );
  };

  // Keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsCmdOpen(false);
        setSelectedTicker(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AegisContext.Provider
      value={{
        tickers,
        holdings,
        orders,
        profile,
        selectedTicker,
        setSelectedTicker,
        isCmdOpen,
        setIsCmdOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        updateProfile,
        submitOrder,
        rebalanceHolding,
      }}
    >
      {children}
    </AegisContext.Provider>
  );
}

export function useAegis() {
  const context = useContext(AegisContext);
  if (!context) {
    throw new Error('useAegis must be used within an AegisProvider');
  }
  return context;
}
