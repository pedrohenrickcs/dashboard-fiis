
export interface Fii {
  ticker: string;
  name: string;
  sector: string;
  price: number;
  dividendYield: number;
  pvp: number;
  marketCap: number;
  lastDividend: number;
  dividendDate: string;
  vacancy: number;
  netWorth: number;
  properties: number;
}

export const mockFiis: Fii[] = [
  {
    ticker: 'HGLG11',
    name: 'CSHG Logística',
    sector: 'Logística',
    price: 158.50,
    dividendYield: 8.2,
    pvp: 0.95,
    marketCap: 5200000000,
    lastDividend: 1.08,
    dividendDate: '2024-01-15',
    vacancy: 2.1,
    netWorth: 165.8,
    properties: 45
  },
  {
    ticker: 'VISC11',
    name: 'Vinci Shopping Centers',
    sector: 'Shopping',
    price: 95.20,
    dividendYield: 9.1,
    pvp: 0.88,
    marketCap: 3800000000,
    lastDividend: 0.72,
    dividendDate: '2024-01-12',
    vacancy: 5.8,
    netWorth: 108.2,
    properties: 12
  },
  {
    ticker: 'XPLG11',
    name: 'XP Log',
    sector: 'Logística',
    price: 112.80,
    dividendYield: 7.9,
    pvp: 1.02,
    marketCap: 4100000000,
    lastDividend: 0.74,
    dividendDate: '2024-01-10',
    vacancy: 1.2,
    netWorth: 110.5,
    properties: 38
  },
  {
    ticker: 'MXRF11',
    name: 'Maxi Renda',
    sector: 'Híbrido',
    price: 10.45,
    dividendYield: 8.8,
    pvp: 0.92,
    marketCap: 2800000000,
    lastDividend: 0.076,
    dividendDate: '2024-01-18',
    vacancy: 3.5,
    netWorth: 11.35,
    properties: 85
  },
  {
    ticker: 'BTLG11',
    name: 'BTG Pactual Logística',
    sector: 'Logística',
    price: 105.60,
    dividendYield: 8.5,
    pvp: 0.97,
    marketCap: 3600000000,
    lastDividend: 0.75,
    dividendDate: '2024-01-08',
    vacancy: 2.8,
    netWorth: 108.9,
    properties: 28
  },
  {
    ticker: 'KNRI11',
    name: 'Kinea Renda Imobiliária',
    sector: 'Corporativo',
    price: 89.30,
    dividendYield: 7.6,
    pvp: 0.85,
    marketCap: 2200000000,
    lastDividend: 0.56,
    dividendDate: '2024-01-20',
    vacancy: 8.2,
    netWorth: 105.1,
    properties: 15
  },
  {
    ticker: 'ALZR11',
    name: 'Alianza Trust Renda Imobiliária',
    sector: 'Corporativo',
    price: 112.40,
    dividendYield: 8.9,
    pvp: 0.91,
    marketCap: 1900000000,
    lastDividend: 0.83,
    dividendDate: '2024-01-25',
    vacancy: 4.5,
    netWorth: 123.5,
    properties: 22
  },
  {
    ticker: 'BRCO11',
    name: 'Banco do Brasil Corporativo',
    sector: 'Corporativo',
    price: 78.90,
    dividendYield: 9.3,
    pvp: 0.89,
    marketCap: 3200000000,
    lastDividend: 0.61,
    dividendDate: '2024-01-14',
    vacancy: 6.1,
    netWorth: 88.7,
    properties: 35
  },
  {
    ticker: 'VRTA11',
    name: 'Vectis Renda Residencial',
    sector: 'Residencial',
    price: 94.50,
    dividendYield: 6.8,
    pvp: 0.94,
    marketCap: 1500000000,
    lastDividend: 0.53,
    dividendDate: '2024-01-22',
    vacancy: 12.3,
    netWorth: 100.5,
    properties: 180
  },
  {
    ticker: 'HCTR11',
    name: 'Hospital Care',
    sector: 'Hospitalar',
    price: 118.60,
    dividendYield: 7.4,
    pvp: 1.05,
    marketCap: 1800000000,
    lastDividend: 0.73,
    dividendDate: '2024-01-16',
    vacancy: 0.8,
    netWorth: 113.0,
    properties: 8
  },
  {
    ticker: 'RBRR11',
    name: 'RBR Rendimento Residencial',
    sector: 'Residencial',
    price: 85.20,
    dividendYield: 8.1,
    pvp: 0.87,
    marketCap: 2100000000,
    lastDividend: 0.57,
    dividendDate: '2024-01-11',
    vacancy: 15.2,
    netWorth: 98.0,
    properties: 220
  },
  {
    ticker: 'URPR11',
    name: 'Urca Prime Renda',
    sector: 'Corporativo',
    price: 102.30,
    dividendYield: 8.7,
    pvp: 0.93,
    marketCap: 1600000000,
    lastDividend: 0.74,
    dividendDate: '2024-01-19',
    vacancy: 7.4,
    netWorth: 110.0,
    properties: 18
  }
];
