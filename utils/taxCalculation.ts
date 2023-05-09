import { taxData } from "../data/taxData";

interface CalculateTax {
  tax: number;
  taxableAmount: number;
  taxRebate: number;
  taxPercentage: number;
  currency?: string;
}

function calculateTax(
  income: number,
  taxBrackets: { threshold: number; rate: number }[],
  taxRebates?: { [key: string]: number }
): CalculateTax {
  let tax = 0,
    taxableAmount = 0,
    totalTaxRebate = 0,
    taxPercentage = 0;

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
  const countryTaxData = taxData[countryCode];

  if (!countryTaxData) {
    throw new Error(`Unsupported country code: ${countryCode}`);
  }

  const { taxBrackets, taxRebates, currency } = countryTaxData;
  const resp = calculateTax(income, taxBrackets, taxRebates);

  return {
    tax: parseFloat(resp.tax.toFixed(2)),
    taxableAmount: resp.taxableAmount,
    taxRebate: resp.taxRebate,
    taxPercentage: parseFloat(resp.taxPercentage.toFixed(2)),
    currency: currency ?? "NOT FOUND",
  };
}
