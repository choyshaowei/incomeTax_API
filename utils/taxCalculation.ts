interface CalculateTax {
  tax: number;
  taxableAmount: number;
  taxRebate: number;
  taxPercentage: number;
}

function calculateTax(
  income: number,
  taxBrackets: { threshold: number; rate: number }[],
  taxRebates?: { [key: string]: number }
): CalculateTax {
  let tax = 0;
  let taxableAmount = 0;
  let totalTaxRebate = 0;
  let taxPercentage = 0;

  if (taxRebates) {
    for (const key in taxRebates) {
      if (taxRebates.hasOwnProperty(key)) {
        income -= taxRebates[key];
        totalTaxRebate += taxRebates[key];
      }
    }
  }

  taxableAmount = income;

  for (let i = taxBrackets.length - 1; i >= 0; i--) {
    if (income > taxBrackets[i].threshold) {
      tax += (income - taxBrackets[i].threshold) * taxBrackets[i].rate;
      income = taxBrackets[i].threshold;
    }
  }

  taxPercentage = (tax / (taxableAmount + totalTaxRebate)) * 100;

  return { tax, taxableAmount, taxRebate: totalTaxRebate, taxPercentage };
}

export function calculateIncomeTaxes(
  income: number,
  countryCode: string
): CalculateTax {
  let tax = 0;

  let resp: CalculateTax;

  switch (countryCode) {
    case "MY":
      // Example tax brackets for Malaysia (you should update them with actual rates)
      const malaysiaTaxBrackets = [
        { threshold: 5000, rate: 0 },
        { threshold: 20000, rate: 0.01 },
        { threshold: 35000, rate: 0.03 },
        { threshold: 50000, rate: 0.08 },
        { threshold: 70000, rate: 0.14 },
        { threshold: 100000, rate: 0.21 },
        // ... additional tax brackets
      ];
      const malaysiaTaxRebates = { personal: 9000 };
      resp = calculateTax(income, malaysiaTaxBrackets, malaysiaTaxRebates);
      break;
    case "UK":
      // Example tax brackets for United Kingdom (you should update them with actual rates)
      const ukTaxBrackets = [
        { threshold: 12500, rate: 0 },
        { threshold: 50000, rate: 0.2 },
        { threshold: 150000, rate: 0.4 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, ukTaxBrackets);
      break;
    case "US":
      // Example tax brackets for United States (you should update them with actual rates)
      const usTaxBrackets = [
        { threshold: 9875, rate: 0.1 },
        { threshold: 40125, rate: 0.12 },
        { threshold: 85525, rate: 0.22 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, usTaxBrackets);
      break;
    case "CA":
      // Example tax brackets for Canada (you should update them with actual rates)
      const caTaxBrackets = [
        { threshold: 12809, rate: 0.15 },
        { threshold: 64046, rate: 0.205 },
        { threshold: 90563, rate: 0.26 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, caTaxBrackets);
      break;
    case "AU":
      // Example tax brackets for Australia (you should update them with actual rates)
      const auTaxBrackets = [
        { threshold: 18200, rate: 0 },
        { threshold: 45000, rate: 0.19 },
        { threshold: 120000, rate: 0.32 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, auTaxBrackets);
      break;
    case "NZ":
      // Example tax brackets for New Zealand (you should update them with actual rates)
      const nzTaxBrackets = [
        { threshold: 14000, rate: 0.105 },
        { threshold: 48000, rate: 0.175 },
        { threshold: 70000, rate: 0.3 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, nzTaxBrackets);
      break;
    case "JP":
      // Example tax brackets for Japan (you should update them with actual rates)
      const jpTaxBrackets = [
        { threshold: 1950000, rate: 0.23 },
        { threshold: 3300000, rate: 0.33 },
        { threshold: 6950000, rate: 0.43 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, jpTaxBrackets);
      break;
    case "KR":
      // Example tax brackets for South Korea (you should update them with actual rates)
      const krTaxBrackets = [
        { threshold: 12000000, rate: 0.06 },
        { threshold: 46000000, rate: 0.15 },
        { threshold: 88000000, rate: 0.24 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, krTaxBrackets);
      break;
    case "CN":
      // Example tax brackets for China (you should update them with actual rates)
      const cnTaxBrackets = [
        { threshold: 36000, rate: 0.03 },
        { threshold: 144000, rate: 0.1 },
        { threshold: 300000, rate: 0.2 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, cnTaxBrackets);
      break;
    case "HK":
      // Example tax brackets for Hong Kong (you should update them with actual rates)
      const hkTaxBrackets = [
        { threshold: 50000, rate: 0.02 },
        { threshold: 100000, rate: 0.06 },
        { threshold: 150000, rate: 0.1 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, hkTaxBrackets);
      break;
    case "TW":
      // Example tax brackets for Taiwan (you should update them with actual rates)
      const twTaxBrackets = [
        { threshold: 540000, rate: 0.06 },
        { threshold: 1210000, rate: 0.13 },
        { threshold: 2420000, rate: 0.21 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, twTaxBrackets);
      break;
    case "IN":
      // Example tax brackets for India (you should update them with actual rates)
      const inTaxBrackets = [
        { threshold: 250000, rate: 0 },
        { threshold: 500000, rate: 0.05 },
        { threshold: 1000000, rate: 0.2 },
        // ... additional tax brackets
      ];
      const inTaxRebates = { section80C: 150000 };
      resp = calculateTax(income, inTaxBrackets, inTaxRebates);
      break;
    case "ID":
      // Example tax brackets for Indonesia (you should update them with actual rates)
      const idTaxBrackets = [
        { threshold: 50000000, rate: 0.05 },
        { threshold: 250000000, rate: 0.15 },
        { threshold: 500000000, rate: 0.25 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, idTaxBrackets);
      break;
    case "TH":
      // Example tax brackets for Thailand (you should update them with actual rates)
      const thTaxBrackets = [
        { threshold: 150000, rate: 0.05 },
        { threshold: 300000, rate: 0.1 },
        { threshold: 500000, rate: 0.15 },
        // ... additional tax brackets
      ];
      const thTaxRebates = { personal: 60000 };
      resp = calculateTax(income, thTaxBrackets, thTaxRebates);
      break;
    case "VN":
      // Example tax brackets for Vietnam (you should update them with actual rates)
      const vnTaxBrackets = [
        { threshold: 5000000, rate: 0.05 },
        { threshold: 10000000, rate: 0.1 },
        { threshold: 18000000, rate: 0.15 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, vnTaxBrackets);
      break;
    case "PH":
      // Example tax brackets for Philippines (you should update them with actual rates)
      const phTaxBrackets = [
        { threshold: 250000, rate: 0 },
        { threshold: 400000, rate: 0.2 },
        { threshold: 800000, rate: 0.25 },
        // ... additional tax brackets
      ];
      const phTaxRebates = { personal: 50000 };
      resp = calculateTax(income, phTaxBrackets, phTaxRebates);
      break;
    case "FR":
      // Example tax brackets for France (you should update them with actual rates)
      const frTaxBrackets = [
        { threshold: 10064, rate: 0 },
        { threshold: 25710, rate: 0.11 },
        { threshold: 73516, rate: 0.3 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, frTaxBrackets);
      break;
    case "DE":
      // Example tax brackets for Germany (you should update them with actual rates)
      const deTaxBrackets = [
        { threshold: 9744, rate: 0 },
        { threshold: 14753, rate: 0.14 },
        { threshold: 57918, rate: 0.42 },
        // ... additional tax brackets
      ];
      const deTaxRebates = { advertisingCosts: 800 };
      resp = calculateTax(income, deTaxBrackets, deTaxRebates);
      break;
    case "IT":
      // Example tax brackets for Italy (you should update them with actual rates)
      const itTaxBrackets = [
        { threshold: 15000, rate: 0.23 },
        { threshold: 28000, rate: 0.27 },
        { threshold: 55000, rate: 0.38 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, itTaxBrackets);
      break;
    case "ES":
      // Example tax brackets for Spain (you should update them with actual rates)
      const esTaxBrackets = [
        { threshold: 12450, rate: 0.19 },
        { threshold: 20200, rate: 0.24 },
        { threshold: 35200, rate: 0.3 },
        // ... additional tax brackets
      ];
      const esTaxRebates = { personal: 2000 };
      resp = calculateTax(income, esTaxBrackets, esTaxRebates);
      break;
    case "PT":
      // Example tax brackets for Portugal (you should update them with actual rates)
      const ptTaxBrackets = [
        { threshold: 7112, rate: 0.14 },
        { threshold: 10732, rate: 0.23 },
        { threshold: 20322, rate: 0.28 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, ptTaxBrackets);
      break;
    case "NL":
      // Example tax brackets for Netherlands (you should update them with actual rates)
      const nlTaxBrackets = [
        { threshold: 35000, rate: 0.37 },
        { threshold: 70000, rate: 0.49 },
        // ... additional tax brackets
      ];
      const nlTaxRebates = { personal: 3000 };
      resp = calculateTax(income, nlTaxBrackets, nlTaxRebates);
      break;
    case "BE":
      // Example tax brackets for Belgium (you should update them with actual rates)
      const beTaxBrackets = [
        { threshold: 12710, rate: 0.25 },
        { threshold: 24390, rate: 0.4 },
        { threshold: 42790, rate: 0.45 },
        // ... additional tax brackets
      ];
      const beTaxRebates = { mortgageInterest: 1520 };
      resp = calculateTax(income, beTaxBrackets, beTaxRebates);
      break;
    case "CH":
      // Example tax brackets for Switzerland (you should update them with actual rates)
      const chTaxBrackets = [
        { threshold: 85528, rate: 0.01 },
        { threshold: 108064, rate: 0.02 },
        { threshold: 171064, rate: 0.04 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, chTaxBrackets);
      break;
    case "AT":
      // Example tax brackets for Austria (you should update them with actual rates)
      const atTaxBrackets = [
        { threshold: 12000, rate: 0.25 },
        { threshold: 18000, rate: 0.35 },
        { threshold: 31000, rate: 0.42 },
        // ... additional tax brackets
      ];
      const atTaxRebates = { advertisingCosts: 132 };
      resp = calculateTax(income, atTaxBrackets, atTaxRebates);
      break;
    case "DK":
      // Example tax brackets for Denmark (you should update them with actual rates)
      const dkTaxBrackets = [
        { threshold: 49800, rate: 0.06 },
        { threshold: 55400, rate: 0.22 },
        { threshold: 56300, rate: 0.28 },
        // ... additional tax brackets
      ];
      const dkTaxRebates = { transportDeduction: 32000 };
      resp = calculateTax(income, dkTaxBrackets, dkTaxRebates);
      break;
    case "SE":
      // Example tax brackets for Sweden (you should update them with actual rates)
      const seTaxBrackets = [
        { threshold: 468700, rate: 0.32 },
        { threshold: 675700, rate: 0.52 },
        // ... additional tax brackets
      ];
      const seTaxRebates = { studyDeduction: 40000 };
      resp = calculateTax(income, seTaxBrackets, seTaxRebates);
      break;
    case "NO":
      // Example tax brackets for Norway (you should update them with actual rates)
      const noTaxBrackets = [
        { threshold: 180800, rate: 0.22 },
        { threshold: 254500, rate: 0.28 },
        { threshold: 639750, rate: 0.375 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, noTaxBrackets);
      break;
    case "FI":
      // Example tax brackets for Finland (you should update them with actual rates)
      const fiTaxBrackets = [
        { threshold: 17800, rate: 0.058 },
        { threshold: 30000, rate: 0.17 },
        { threshold: 72000, rate: 0.31 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, fiTaxBrackets);
      break;
    case "RU":
      // Example tax brackets for Russia (you should update them with actual rates)
      const ruTaxBrackets = [
        { threshold: 0, rate: 0.13 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, ruTaxBrackets);
      break;
    case "UA":
      // Example tax brackets for Ukraine (you should update them with actual rates)
      const uaTaxBrackets = [
        { threshold: 0, rate: 0.05 },
        // ... additional tax brackets
      ];
      const uaTaxRebates = { personal: 1600 };
      resp = calculateTax(income, uaTaxBrackets, uaTaxRebates);
      break;
    case "PL":
      // Example tax brackets for Poland (you should update them with actual rates)
      const plTaxBrackets = [
        { threshold: 0, rate: 0.17 },
        // ... additional tax brackets
      ];
      const plTaxRebates = { personal: 1360 };
      resp = calculateTax(income, plTaxBrackets, plTaxRebates);
      break;
    case "CZ":
      // Example tax brackets for Czech Republic (you should update them with actual rates)
      const czTaxBrackets = [
        { threshold: 0, rate: 0.15 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, czTaxBrackets);
      break;
    case "SK":
      // Example tax brackets for Slovakia (you should update them with actual rates)
      const skTaxBrackets = [
        { threshold: 0, rate: 0.19 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, skTaxBrackets);
      break;
    case "HU":
      // Example tax brackets for Hungary (you should update them with actual rates)
      const huTaxBrackets = [
        { threshold: 0, rate: 0.15 },
        // ... additional tax brackets
      ];
      const huTaxRebates = { personal: 60000 };
      resp = calculateTax(income, huTaxBrackets, huTaxRebates);
      break;
    case "RO":
      // Example tax brackets for Romania (you should update them with actual rates)
      const roTaxBrackets = [
        { threshold: 0, rate: 0.1 },
        // ... additional tax brackets
      ];
      const roTaxRebates = { personal: 510 };
      resp = calculateTax(income, roTaxBrackets, roTaxRebates);
      break;
    case "BG":
      // Example tax brackets for Bulgaria (you should update them with actual rates)
      const bgTaxBrackets = [
        { threshold: 0, rate: 0.1 },
        // ... additional tax brackets
      ];
      const bgTaxRebates = { personal: 2270 };
      resp = calculateTax(income, bgTaxBrackets, bgTaxRebates);
      break;
    case "GR":
      // Example tax brackets for Greece (you should update them with actual rates)
      const grTaxBrackets = [
        { threshold: 10000, rate: 0.22 },
        { threshold: 30000, rate: 0.29 },
        { threshold: 45000, rate: 0.37 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, grTaxBrackets);
      break;
    case "TR":
      // Example tax brackets for Turkey (you should update them with actual rates)
      const trTaxBrackets = [
        { threshold: 0, rate: 0.15 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, trTaxBrackets);
      break;
    case "EG":
      // Example tax brackets for Egypt (you should update them with actual rates)
      const egTaxBrackets = [
        { threshold: 0, rate: 0.1 },
        // ... additional tax brackets
      ];
      const egTaxRebates = { personal: 7000 };
      resp = calculateTax(income, egTaxBrackets, egTaxRebates);
      break;
    case "ZA":
      // Example tax brackets for South Africa (you should update them with actual rates)
      const zaTaxBrackets = [
        { threshold: 205900, rate: 0.18 },
        { threshold: 321600, rate: 0.26 },
        { threshold: 445100, rate: 0.31 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, zaTaxBrackets);
      break;
    case "BR":
      // Example tax brackets for Brazil (you should update them with actual rates)
      const brTaxBrackets = [
        { threshold: 22847.76, rate: 0.075 },
        { threshold: 33919.8, rate: 0.15 },
        { threshold: 45012.6, rate: 0.225 },
        // ... additional tax brackets
      ];
      const brTaxRebates = { dependent: 229.47 };
      resp = calculateTax(income, brTaxBrackets, brTaxRebates);
      break;
    case "AR":
      // Example tax brackets for Argentina (you should update them with actual rates)
      const arTaxBrackets = [
        { threshold: 0, rate: 0.09 },
        // ... additional tax brackets
      ];
      const arTaxRebates = { personal: 27416 };
      resp = calculateTax(income, arTaxBrackets, arTaxRebates);
      break;
    case "MX":
      // Example tax brackets for Mexico (you should update them with actual rates)
      const mxTaxBrackets = [
        { threshold: 125900, rate: 0.01 },
        { threshold: 138400, rate: 0.02 },
        { threshold: 150800, rate: 0.03 },
        // ... additional tax brackets
      ];
      const mxTaxRebates = { personal: 125900 };
      resp = calculateTax(income, mxTaxBrackets, mxTaxRebates);
      break;
    case "CL":
      // Example tax brackets for Chile (you should update them with actual rates)
      const clTaxBrackets = [
        { threshold: 0, rate: 0.08 },
        // ... additional tax brackets
      ];
      resp = calculateTax(income, clTaxBrackets);
      break;
    case "CO":
      // Example tax brackets for Colombia (you should update them with actual rates)
      const coTaxBrackets = [
        { threshold: 0, rate: 0.19 },
        // ... additional tax brackets
      ];
      const coTaxRebates = { personal: 200000 };
      resp = calculateTax(income, coTaxBrackets, coTaxRebates);
      break;
    case "PE":
      // Example tax brackets for Peru (you should update them with actual rates)
      const peTaxBrackets = [
        { threshold: 0, rate: 0.08 },
        // ... additional tax brackets
      ];
      const peTaxRebates = { personal: 21600 };
      resp = calculateTax(income, peTaxBrackets, peTaxRebates);
      break;
    default:
      throw new Error(`Unsupported country code: ${countryCode}`);
  }

  return {
    tax: resp.tax,
    taxableAmount: resp.taxableAmount,
    taxRebate: resp.taxRebate,
    taxPercentage: resp.taxPercentage,
  };
}
