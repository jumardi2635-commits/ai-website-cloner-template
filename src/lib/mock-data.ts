// Demo-only data for the Genius fx clone. Nothing here is real financial data.

export type Tier = "Konservatif" | "Seimbang" | "Agresif";
export type AssetClass = "Forex" | "Emas" | "Kripto";

export type EaProduct = {
  id: string;
  name: string;
  asset: AssetClass;
  tier: Tier;
  price: number; // modal investasi (IDR)
  returnPct: number; // return harian dalam persen dari modal
  durationDays: number;
  popular?: boolean;
  spark: number[];
};

export const account = {
  name: "User",
  phone: "089530052136",
  id: "089530052136",
  referralCode: "ZXOS2N6V",
  joined: "12 Agu 2026",
  verified: true,
  totalBalance: 0,
  mainBalance: 0,
  eaProfit: 0,
  withdrawn: 0,
  totalInvestment: 0,
  activePackages: 0,
  totalReturn: 0,
  referrals: 0,
  referralBonus: 0,
};

// Deterministic sparkline so server and client render identically.
function makeSpark(seed: number, up: boolean): number[] {
  const out: number[] = [];
  let v = 100;
  for (let i = 0; i < 24; i++) {
    const wobble = Math.sin((seed + i) * 1.3) * 4;
    const drift = (up ? 1 : -1) * i * (up ? 1.6 : 0.9);
    v = 100 + drift + wobble;
    out.push(Math.round(v * 100) / 100);
  }
  return out;
}

const rawProducts: Array<Omit<EaProduct, "id" | "spark">> = [
  { name: "Genius Far", asset: "Forex", tier: "Konservatif", price: 50_000, returnPct: 38, durationDays: 40, popular: true },
  { name: "Genius Aer", asset: "Emas", tier: "Konservatif", price: 100_000, returnPct: 38, durationDays: 40 },
  { name: "Genius Bit", asset: "Kripto", tier: "Seimbang", price: 150_000, returnPct: 56.99, durationDays: 3 },
  { name: "Genius Per", asset: "Kripto", tier: "Konservatif", price: 250_000, returnPct: 50, durationDays: 40, popular: true },
  { name: "Genius Nova", asset: "Forex", tier: "Seimbang", price: 300_000, returnPct: 55.54, durationDays: 3 },
  { name: "Genius Eig", asset: "Forex", tier: "Konservatif", price: 500_000, returnPct: 50, durationDays: 40 },
  { name: "Genius Lux", asset: "Emas", tier: "Seimbang", price: 500_000, returnPct: 57.12, durationDays: 3 },
  { name: "Genius Volt", asset: "Kripto", tier: "Seimbang", price: 750_000, returnPct: 55.72, durationDays: 3 },
  { name: "Genius Quant", asset: "Forex", tier: "Konservatif", price: 800_000, returnPct: 43.75, durationDays: 40 },
  { name: "Genius Apex", asset: "Emas", tier: "Konservatif", price: 1_000_000, returnPct: 62.83, durationDays: 40 },
  { name: "Genius Flux", asset: "Kripto", tier: "Seimbang", price: 1_000_000, returnPct: 64.61, durationDays: 3 },
  { name: "Genius Orbit", asset: "Forex", tier: "Konservatif", price: 1_250_000, returnPct: 66.67, durationDays: 40 },
  { name: "Genius Prime", asset: "Emas", tier: "Konservatif", price: 1_500_000, returnPct: 62.75, durationDays: 40 },
  { name: "Genius Titan", asset: "Kripto", tier: "Seimbang", price: 2_000_000, returnPct: 73.96, durationDays: 3 },
  { name: "Genius Delta", asset: "Forex", tier: "Konservatif", price: 2_000_000, returnPct: 49.91, durationDays: 40 },
  { name: "Genius Sigma", asset: "Emas", tier: "Seimbang", price: 3_000_000, returnPct: 64.39, durationDays: 3 },
  { name: "Genius Halo", asset: "Kripto", tier: "Konservatif", price: 3_000_000, returnPct: 48.08, durationDays: 40 },
  { name: "Genius Zenith", asset: "Forex", tier: "Konservatif", price: 5_000_000, returnPct: 62.65, durationDays: 40 },
  { name: "Genius Aura", asset: "Emas", tier: "Seimbang", price: 5_000_000, returnPct: 58.18, durationDays: 3 },
  { name: "Genius Pulse", asset: "Kripto", tier: "Konservatif", price: 7_500_000, returnPct: 52.77, durationDays: 40 },
  { name: "Genius Vertex", asset: "Forex", tier: "Konservatif", price: 10_000_000, returnPct: 63.76, durationDays: 40 },
  { name: "Genius Onyx", asset: "Emas", tier: "Seimbang", price: 10_000_000, returnPct: 54.76, durationDays: 3 },
  { name: "Genius Helix", asset: "Kripto", tier: "Konservatif", price: 15_000_000, returnPct: 48.38, durationDays: 40 },
  { name: "Genius Infinity", asset: "Forex", tier: "Agresif", price: 25_000_000, returnPct: 71.4, durationDays: 3, popular: true },
];

export const products: EaProduct[] = rawProducts.map((p, i) => ({
  ...p,
  id: `gfx-${String(i + 1).padStart(3, "0")}`,
  spark: makeSpark(i + 1, p.returnPct >= 55),
}));

export function productById(id: string): EaProduct | undefined {
  return products.find((p) => p.id === id);
}

export function dailyReturn(p: EaProduct): number {
  return Math.round(p.price * (p.returnPct / 100));
}

export function totalReturn(p: EaProduct): number {
  return dailyReturn(p) * p.durationDays;
}

export const homeStats = [
  { label: "Investor Aktif", value: "10.248+" },
  { label: "Total Cair Hari Ini", value: "Rp 892jt" },
  { label: "Paket EA Tersedia", value: "24 Paket" },
  { label: "Respon CS", value: "< 5 Menit" },
];

export type LiveActivity = {
  id: string;
  masked: string;
  action: string;
  amount: number;
  ago: string;
};

export const liveActivities: LiveActivity[] = [
  { id: "a1", masked: "User ****2847", action: "baru investasi", amount: 500_000, ago: "2 mnt lalu" },
  { id: "a2", masked: "User ****9103", action: "tarik dana", amount: 1_200_000, ago: "5 mnt lalu" },
  { id: "a3", masked: "User ****5521", action: "baru investasi", amount: 250_000, ago: "8 mnt lalu" },
  { id: "a4", masked: "User ****7734", action: "cair profit", amount: 45_000, ago: "12 mnt lalu" },
  { id: "a5", masked: "User ****3389", action: "baru investasi", amount: 1_000_000, ago: "15 mnt lalu" },
  { id: "a6", masked: "User ****1102", action: "cair profit", amount: 92_000, ago: "19 mnt lalu" },
];

export const marketTicker = [
  "Paket EA Agresif profit hingga 3% per hari",
  "Bonus referral aktif — ajak teman dapat komisi",
  "Penarikan diproses 24 jam setiap hari",
  "Pasar emas XAU/USD sedang bullish hari ini",
];

export function formatIdr(value: number): string {
  return "Rp " + new Intl.NumberFormat("id-ID").format(Math.round(value));
}

export function formatIdrCompact(value: number): string {
  if (value >= 1_000_000) return "Rp " + (value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1) + "jt";
  if (value >= 1_000) return "Rp " + (value / 1_000).toFixed(0) + "rb";
  return "Rp " + value;
}
