export interface TickerData {
  symbol: string;
  label: string;
  price: string;
  change: string;
  is_positive: boolean;
  high52?: string;
  low52?: string;
  volume?: string;
  beta?: string;
  peRatio?: string;
  history?: number[];
}

export interface PortfolioHolding {
  id: string;
  symbol: string;
  name: string;
  assetClass: 'Equities' | 'Fixed Income' | 'Commodities' | 'FX' | 'Cash';
  weight: number; // percentage e.g. 15.0
  targetWeight: number; // target percentage e.g. 14.0
  shares: number;
  price: number;
  marketValue: number;
  unrealizedPnL: number;
  pnlPercent: number;
  riskContribution: number;
}

export interface OrderItem {
  id: string;
  timestamp: string;
  symbol: string;
  side: 'BUY' | 'SELL';
  orderType: 'MARKET' | 'LIMIT' | 'STOP' | 'TWAP' | 'VWAP';
  quantity: number;
  limitPrice?: number;
  status: 'FILLED' | 'WORKING' | 'PENDING' | 'CANCELLED';
  filledQuantity: number;
  avgFillPrice: number;
  destination: string;
}

export interface ComplianceRule {
  id: string;
  name: string;
  category: 'Mandate' | 'Regulatory' | 'Concentration' | 'ESG' | 'Leverage';
  limitThreshold: string;
  currentValue: string;
  status: 'PASSED' | 'WARNING' | 'BREACH';
  description: string;
  lastChecked: string;
}

export interface RiskScenario {
  id: string;
  name: string;
  period: string;
  projectedLoss: string;
  lossPercent: number;
  portfolioImpact: string;
  hedgingStatus: string;
}

export interface UserProfile {
  name: string;
  role: string;
  email: string;
  phone: string;
  initials: string;
  entity: string;
}
