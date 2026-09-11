export type Instrument = {
  symbol: string;
  name: string;
  price: number;
  change: number; // percent
  category: "Forex" | "Kripto" | "Saham" | "Komoditas";
};

export type Position = {
  id: string;
  symbol: string;
  side: "BUY" | "SELL";
  lots: number;
  entry: number;
  current: number;
  pnl: number;
};

export type Transaction = {
  id: string;
  type: "Deposit" | "Penarikan" | "Bonus";
  amount: number;
  status: "Selesai" | "Diproses" | "Ditolak";
  date: string;
};

export const account = {
  name: "Andi Wijaya",
  id: "GFX-284591",
  tier: "Gold",
  email: "andi.wijaya@example.com",
  phone: "+62 812-3456-7890",
  joined: "12 Feb 2024",
  verified: true,
  balance: 48250.72,
  equity: 51930.16,
  margin: 6420.5,
  freeMargin: 45509.66,
  todayPnl: 1284.35,
  todayPnlPct: 2.61,
};

export const equitySeries = [
  { day: "Sen", equity: 46200 },
  { day: "Sel", equity: 47100 },
  { day: "Rab", equity: 46850 },
  { day: "Kam", equity: 48400 },
  { day: "Jum", equity: 49950 },
  { day: "Sab", equity: 50620 },
  { day: "Min", equity: 51930 },
];

export const allocation = [
  { name: "Forex", value: 42, color: "var(--chart-1)" },
  { name: "Kripto", value: 28, color: "var(--chart-2)" },
  { name: "Saham", value: 18, color: "var(--primary-strong)" },
  { name: "Komoditas", value: 12, color: "var(--muted-foreground)" },
];

export const instruments: Instrument[] = [
  { symbol: "EUR/USD", name: "Euro / US Dollar", price: 1.0872, change: 0.32, category: "Forex" },
  { symbol: "GBP/USD", name: "Pound / US Dollar", price: 1.2715, change: -0.18, category: "Forex" },
  { symbol: "USD/JPY", name: "US Dollar / Yen", price: 156.42, change: 0.44, category: "Forex" },
  { symbol: "BTC/USD", name: "Bitcoin", price: 67420.5, change: 3.12, category: "Kripto" },
  { symbol: "ETH/USD", name: "Ethereum", price: 3512.8, change: 1.87, category: "Kripto" },
  { symbol: "SOL/USD", name: "Solana", price: 172.34, change: -2.05, category: "Kripto" },
  { symbol: "XAU/USD", name: "Emas", price: 2342.1, change: 0.68, category: "Komoditas" },
  { symbol: "WTI", name: "Minyak Mentah", price: 78.9, change: -0.92, category: "Komoditas" },
  { symbol: "AAPL", name: "Apple Inc.", price: 214.29, change: 1.14, category: "Saham" },
  { symbol: "TSLA", name: "Tesla Inc.", price: 182.47, change: -1.42, category: "Saham" },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 124.72, change: 2.76, category: "Saham" },
  { symbol: "BBCA", name: "Bank Central Asia", price: 9825, change: 0.51, category: "Saham" },
];

export const positions: Position[] = [
  { id: "P-1", symbol: "BTC/USD", side: "BUY", lots: 0.15, entry: 65120, current: 67420.5, pnl: 345.08 },
  { id: "P-2", symbol: "EUR/USD", side: "BUY", lots: 1.0, entry: 1.084, current: 1.0872, pnl: 320.0 },
  { id: "P-3", symbol: "XAU/USD", side: "SELL", lots: 0.5, entry: 2358.4, current: 2342.1, pnl: 815.0 },
  { id: "P-4", symbol: "TSLA", side: "BUY", lots: 10, entry: 188.2, current: 182.47, pnl: -57.3 },
];

export const transactions: Transaction[] = [
  { id: "TX-9051", type: "Deposit", amount: 5000, status: "Selesai", date: "08 Sep 2026" },
  { id: "TX-9042", type: "Penarikan", amount: 1200, status: "Diproses", date: "05 Sep 2026" },
  { id: "TX-9033", type: "Bonus", amount: 250, status: "Selesai", date: "01 Sep 2026" },
  { id: "TX-9018", type: "Deposit", amount: 10000, status: "Selesai", date: "24 Agu 2026" },
  { id: "TX-9004", type: "Penarikan", amount: 800, status: "Ditolak", date: "18 Agu 2026" },
];

export function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}
