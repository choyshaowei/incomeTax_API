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
  initialIncome: number,
  taxBrackets: { threshold: number; rate: number }[],
  taxRebates?: { [key: string]: number }
): CalculateTax {
  // If there are any tax rebates, sum them up
  const totalTaxRebate = taxRebates
    ? Object.values(taxRebates).reduce((a, b) => a + b, 0)
    : 0;

  // Subtract the tax rebate from the initial income
  const income = initialIncome - totalTaxRebate;

  // Make sure the taxable amount is not less than 0
  const taxableAmount = Math.max(income, 0);
  let remainingIncome = taxableAmount;

  // Calculate the tax based on the tax brackets
  const tax = taxBrackets.reduce((acc, curr, i, arr) => {
    if (remainingIncome <= 0) return acc;

    const prevThreshold = arr[i - 1]?.threshold ?? 0;
    const taxableAmountForBracket = Math.min(
      curr.threshold - prevThreshold,
      remainingIncome
    );

    remainingIncome -= taxableAmountForBracket;

    return acc + taxableAmountForBracket * curr.rate;
  }, 0);

  // If there's any remaining income, it belongs to the highest tax bracket
  const taxForHighestBracket =
    remainingIncome > 0
      ? remainingIncome * taxBrackets[taxBrackets.length - 1].rate
      : 0;

  const totalTax = tax + taxForHighestBracket;
  const taxPercentage = (totalTax / (taxableAmount + totalTaxRebate)) * 100;
  const takeHomeSalary = taxableAmount + totalTaxRebate - totalTax;

  return {
    tax: totalTax,
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
  const countryTaxData = taxData[countryCode] ?? {};

  if (Object.keys(countryTaxData).length === 0) {
    throw new Error(`Unsupported country code: ${countryCode}`);
  }

  const { taxBrackets, taxRebates, currencyCode } = countryTaxData;
  const taxCalculationResult = calculateTax(income, taxBrackets, taxRebates);
  const { tax, taxableAmount, taxRebate, takeHomeSalary, taxPercentage } =
    taxCalculationResult;

  return {
    tax: parseFloat(tax.toFixed(2)),
    taxableAmount,
    taxRebate,
    takeHomeSalary,
    taxPercentage: parseFloat(taxPercentage.toFixed(2)),
    currencyCode,
  };
}
