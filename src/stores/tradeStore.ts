import { create } from 'zustand';
import { Trade } from '@/lib/types';

interface TradeStore {
  trades: Trade[];
  addTrade: (trade: Trade) => void;
  updateTrade: (id: string, trade: Partial<Trade>) => void;
  deleteTrade: (id: string) => void;
}

export const useTradeStore = create<TradeStore>((set) => ({
  trades: [],
  addTrade: (trade) =>
    set((state) => ({ trades: [...state.trades, trade] })),
  updateTrade: (id, updatedTrade) =>
    set((state) => ({
      trades: state.trades.map((trade) =>
        trade.id === id ? { ...trade, ...updatedTrade } : trade
      ),
    })),
  deleteTrade: (id) =>
    set((state) => ({
      trades: state.trades.filter((trade) => trade.id !== id),
    })),
}));