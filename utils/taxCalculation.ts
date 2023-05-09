import { taxData } from "../data/taxData";
import { isPositive } from "./math";

interface CalculateTax {
  tax: number;
  taxableAmount: number;
  taxRebate: number;
  taxPercentage: number;
  takeHomeSalary: number;
  currencyCode?: string;
}

function calculateTax(
  income: number,
  taxBrackets: { threshold: number; rate: number }[],
  taxRebates?: { [key: string]: number }
): CalculateTax {
  let tax = 0,
    taxableAmount = 0,
    totalTaxRebate = 0,
    taxPercentage = 0,
    takeHomeSalary = 0;

  if (taxRebates) {
    for (const key in taxRebates) {
      if (taxRebates.hasOwnProperty(key)) {
        income -= taxRebates[key];
        totalTaxRebate += taxRebates[key];
      }
    }
  }

  taxableAmount = isPositive(income) ? income : 0;

  for (let i = taxBrackets.length - 1; i >= 0; i--) {
    if (income > taxBrackets[i].threshold) {
      tax += (income - taxBrackets[i].threshold) * taxBrackets[i].rate;
      income = taxBrackets[i].threshold;
    }
  }

  taxPercentage = (tax / (taxableAmount + totalTaxRebate)) * 100;
  takeHomeSalary = taxableAmount + totalTaxRebate - tax;

  return {
    tax,
    taxableAmount,
    taxRebate: totalTaxRebate,
    takeHomeSalary,
    taxPercentage,
  };
}

export function calculateIncomeTaxes(
  income: number,
  countryCode: string
): CalculateTax {
  const countryTaxData = taxData[countryCode];

  if (!countryTaxData) {
    throw new Error(`Unsupported country code: ${countryCode}`);
  }

  const { taxBrackets, taxRebates, currencyCode } = countryTaxData;
  const resp = calculateTax(income, taxBrackets, taxRebates);

  return {
    tax: parseFloat(resp.tax.toFixed(2)),
    taxableAmount: resp.taxableAmount,
    taxRebate: resp.taxRebate,
    takeHomeSalary: resp.takeHomeSalary,
    taxPercentage: parseFloat(resp.taxPercentage.toFixed(2)),
    currencyCode: currencyCode ?? "LOCAL CURRENCY",
  };
}
