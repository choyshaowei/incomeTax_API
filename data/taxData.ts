import { CountryCodeKeys } from "./countryCodes";

type TaxData = {
  [key in CountryCodeKeys]: {
    taxBrackets: { threshold: number; rate: number }[];
    taxRebates?: { [key: string]: number };
    currency?: string;
  };
};

export const taxData: TaxData = {
  MY: {
    taxBrackets: [
      { threshold: 5000, rate: 0 },
      { threshold: 20000, rate: 0.01 },
      { threshold: 35000, rate: 0.03 },
      { threshold: 50000, rate: 0.08 },
      { threshold: 70000, rate: 0.14 },
      { threshold: 100000, rate: 0.21 },
    ],
    taxRebates: { personal: 9000 },
    currency: "MYR",
  },
  UK: {
    taxBrackets: [
      { threshold: 12500, rate: 0 },
      { threshold: 50000, rate: 0.2 },
      { threshold: 150000, rate: 0.4 },
    ],
    currency: "GBP",
  },
  US: {
    taxBrackets: [
      { threshold: 9875, rate: 0.1 },
      { threshold: 40125, rate: 0.12 },
      { threshold: 85525, rate: 0.22 },
    ],
    currency: "USD",
  },
  CA: {
    taxBrackets: [
      { threshold: 12809, rate: 0.15 },
      { threshold: 64046, rate: 0.205 },
      { threshold: 90563, rate: 0.26 },
    ],
    currency: "CAD",
  },
  AU: {
    taxBrackets: [
      { threshold: 18200, rate: 0 },
      { threshold: 45000, rate: 0.19 },
      { threshold: 120000, rate: 0.32 },
    ],
    currency: "AUD",
  },
  NZ: {
    taxBrackets: [
      { threshold: 14000, rate: 0.105 },
      { threshold: 48000, rate: 0.175 },
      { threshold: 70000, rate: 0.3 },
    ],
    currency: "NZD",
  },
  JP: {
    taxBrackets: [
      { threshold: 1950000, rate: 0.23 },
      { threshold: 3300000, rate: 0.33 },
      { threshold: 6950000, rate: 0.43 },
    ],
    currency: "JPY",
  },
  KR: {
    taxBrackets: [
      { threshold: 12000000, rate: 0.06 },
      { threshold: 46000000, rate: 0.15 },
      { threshold: 88000000, rate: 0.24 },
    ],
    currency: "KRW",
  },
  CN: {
    taxBrackets: [
      { threshold: 36000, rate: 0.03 },
      { threshold: 144000, rate: 0.1 },
      { threshold: 300000, rate: 0.2 },
    ],
    currency: "CNY",
  },
  HK: {
    taxBrackets: [
      { threshold: 50000, rate: 0.02 },
      { threshold: 100000, rate: 0.06 },
      { threshold: 150000, rate: 0.1 },
      { threshold: 200000, rate: 0.14 },
    ],
    currency: "HKD",
  },
  SG: {
    taxBrackets: [
      { threshold: 20000, rate: 0 },
      { threshold: 30000, rate: 0.02 },
      { threshold: 40000, rate: 0.035 },
      { threshold: 80000, rate: 0.07 },
      { threshold: 120000, rate: 0.115 },
    ],
    currency: "SGD",
  },
  TW: {
    taxBrackets: [
      { threshold: 540000, rate: 0.06 },
      { threshold: 1210000, rate: 0.13 },
      { threshold: 2420000, rate: 0.21 },
    ],
  },
  IN: {
    taxBrackets: [
      { threshold: 250000, rate: 0 },
      { threshold: 500000, rate: 0.05 },
      { threshold: 1000000, rate: 0.2 },
    ],
    taxRebates: { section80C: 150000 },
  },
  ID: {
    taxBrackets: [
      { threshold: 50000000, rate: 0.05 },
      { threshold: 250000000, rate: 0.15 },
      { threshold: 500000000, rate: 0.25 },
    ],
  },
  TH: {
    taxBrackets: [
      { threshold: 150000, rate: 0.05 },
      { threshold: 300000, rate: 0.1 },
      { threshold: 500000, rate: 0.15 },
    ],
    taxRebates: { personal: 60000 },
  },
  VN: {
    taxBrackets: [
      { threshold: 5000000, rate: 0.05 },
      { threshold: 10000000, rate: 0.1 },
      { threshold: 18000000, rate: 0.15 },
    ],
  },
  PH: {
    taxBrackets: [
      { threshold: 250000, rate: 0 },
      { threshold: 400000, rate: 0.2 },
      { threshold: 800000, rate: 0.25 },
    ],
    taxRebates: { personal: 50000 },
  },
  FR: {
    taxBrackets: [
      { threshold: 10064, rate: 0 },
      { threshold: 25710, rate: 0.11 },
      { threshold: 73516, rate: 0.3 },
    ],
  },

  DE: {
    taxBrackets: [
      { threshold: 9744, rate: 0 },
      { threshold: 14753, rate: 0.14 },
      { threshold: 57918, rate: 0.42 },
    ],
    taxRebates: { advertisingCosts: 800 },
  },
  IT: {
    taxBrackets: [
      { threshold: 15000, rate: 0.23 },
      { threshold: 28000, rate: 0.27 },
      { threshold: 55000, rate: 0.38 },
    ],
  },

  ES: {
    taxBrackets: [
      { threshold: 12450, rate: 0.19 },
      { threshold: 20200, rate: 0.24 },
      { threshold: 35200, rate: 0.3 },
    ],
    taxRebates: { personal: 2000 },
  },
  PT: {
    taxBrackets: [
      { threshold: 7112, rate: 0.14 },
      { threshold: 10732, rate: 0.23 },
      { threshold: 20322, rate: 0.28 },
    ],
  },
  NL: {
    taxBrackets: [
      { threshold: 35000, rate: 0.37 },
      { threshold: 70000, rate: 0.49 },
    ],
    taxRebates: { personal: 3000 },
  },
  BE: {
    taxBrackets: [
      { threshold: 12710, rate: 0.25 },
      { threshold: 24390, rate: 0.4 },
      { threshold: 42790, rate: 0.45 },
    ],
    taxRebates: { mortgageInterest: 1520 },
  },
  CH: {
    taxBrackets: [
      { threshold: 85528, rate: 0.01 },
      { threshold: 108064, rate: 0.02 },
      { threshold: 171064, rate: 0.04 },
    ],
  },
  AT: {
    taxBrackets: [
      { threshold: 12000, rate: 0.25 },
      { threshold: 18000, rate: 0.35 },
      { threshold: 31000, rate: 0.42 },
    ],
    taxRebates: { advertisingCosts: 132 },
  },
  DK: {
    taxBrackets: [
      { threshold: 49800, rate: 0.06 },
      { threshold: 55400, rate: 0.22 },
      { threshold: 56300, rate: 0.28 },
    ],
    taxRebates: { transportDeduction: 32000 },
  },
  SE: {
    taxBrackets: [
      { threshold: 468700, rate: 0.32 },
      { threshold: 675700, rate: 0.52 },
    ],
    taxRebates: { studyDeduction: 40000 },
  },
  NO: {
    taxBrackets: [
      { threshold: 180800, rate: 0.22 },
      { threshold: 254500, rate: 0.28 },
      { threshold: 639750, rate: 0.375 },
    ],
  },
  FI: {
    taxBrackets: [
      { threshold: 17800, rate: 0.058 },
      { threshold: 30000, rate: 0.17 },
      { threshold: 72000, rate: 0.31 },
    ],
  },
  RU: {
    taxBrackets: [{ threshold: 0, rate: 0.13 }],
  },
  UA: {
    taxBrackets: [{ threshold: 0, rate: 0.05 }],
    taxRebates: { personal: 1600 },
  },
  PL: {
    taxBrackets: [{ threshold: 0, rate: 0.17 }],
    taxRebates: { personal: 1360 },
  },
  CZ: {
    taxBrackets: [{ threshold: 0, rate: 0.15 }],
  },
  SK: {
    taxBrackets: [{ threshold: 0, rate: 0.19 }],
  },

  HU: {
    taxBrackets: [{ threshold: 0, rate: 0.15 }],
    taxRebates: { personal: 60000 },
  },
  RO: {
    taxBrackets: [{ threshold: 0, rate: 0.1 }],
    taxRebates: { personal: 510 },
  },
  BG: {
    taxBrackets: [{ threshold: 0, rate: 0.1 }],
    taxRebates: { personal: 2270 },
  },
  GR: {
    taxBrackets: [
      { threshold: 10000, rate: 0.22 },
      { threshold: 30000, rate: 0.29 },
      { threshold: 45000, rate: 0.37 },
    ],
  },
  TR: {
    taxBrackets: [{ threshold: 0, rate: 0.15 }],
  },
  EG: {
    taxBrackets: [{ threshold: 0, rate: 0.1 }],
    taxRebates: { personal: 7000 },
  },
  ZA: {
    taxBrackets: [
      { threshold: 205900, rate: 0.18 },
      { threshold: 321600, rate: 0.26 },
      { threshold: 445100, rate: 0.31 },
    ],
  },
  BR: {
    taxBrackets: [
      { threshold: 22847.76, rate: 0.075 },
      { threshold: 33919.8, rate: 0.15 },
      { threshold: 45012.6, rate: 0.225 },
    ],
    taxRebates: { dependent: 229.47 },
  },
  AR: {
    taxBrackets: [{ threshold: 0, rate: 0.09 }],
    taxRebates: { personal: 27416 },
  },
  MX: {
    taxBrackets: [
      { threshold: 125900, rate: 0.01 },
      { threshold: 138400, rate: 0.02 },
      { threshold: 150800, rate: 0.03 },
    ],
    taxRebates: { personal: 125900 },
  },
  CL: {
    taxBrackets: [{ threshold: 0, rate: 0.08 }],
  },
  CO: {
    taxBrackets: [{ threshold: 0, rate: 0.19 }],
    taxRebates: { personal: 200000 },
  },
  PE: {
    taxBrackets: [{ threshold: 0, rate: 0.08 }],
    taxRebates: { personal: 21600 },
  },
};
