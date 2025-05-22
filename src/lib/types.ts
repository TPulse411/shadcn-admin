export interface Trade {
  id: string;
  symbol: string;
  entry: number;
  exit: number;
  size: number;
  side: 'long' | 'short';
  entryTime: Date;
  exitTime: Date;
  pnl: number;
  strategy: string;
  notes: string;
  tags: string[];
  screenshots: string[];
}

export interface DailyJournal {
  date: Date;
  notes: string;
  mood: 'good' | 'neutral' | 'bad';
  marketCondition: string;
  checklist: {
    id: string;
    text: string;
    checked: boolean;
  }[];
}

export interface Strategy {
  id: string;
  name: string;
  description: string;
  setup: string;
  entry: string;
  exit: string;
  timeframes: string[];
  symbols: string[];
  riskReward: number;
}

export interface TradingStats {
  totalTrades: number;
  winRate: number;
  profitFactor: number;
  averageWin: number;
  averageLoss: number;
  largestWin: number;
  largestLoss: number;
  netProfit: number;
  sharpeRatio: number;
}