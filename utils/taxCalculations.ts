import { malaysia, singapore } from "./calculation";

interface TaxCalculations {
  [key: string]: (income: number) => number;
}

export const taxCalculations: TaxCalculations = {
  MY: malaysia,
  SG: singapore,
  // Add more country code-function mappings here as needed
};
