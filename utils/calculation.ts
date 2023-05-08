// Function to calculate income tax for Malaysia
export function calculateMalaysiaIncomeTax(income: number) {
  // Example tax brackets for Malaysia (you should update them with actual rates)
  const taxBrackets = [
    { threshold: 5000, rate: 0 },
    { threshold: 20000, rate: 0.01 },
    { threshold: 35000, rate: 0.03 },
    { threshold: 50000, rate: 0.08 },
    { threshold: 70000, rate: 0.14 },
    { threshold: 100000, rate: 0.21 },
    // ... additional tax brackets
  ];

  let tax = 0;

  for (let i = taxBrackets.length - 1; i >= 0; i--) {
    if (income > taxBrackets[i].threshold) {
      tax += (income - taxBrackets[i].threshold) * taxBrackets[i].rate;
      income = taxBrackets[i].threshold;
    }
  }

  return tax;
}

// Function to calculate income tax for Singapore
export function calculateSingaporeIncomeTax(income: number) {
  // Example tax brackets for Singapore (you should update them with actual rates)
  const taxBrackets = [
    { threshold: 20000, rate: 0 },
    { threshold: 30000, rate: 0.02 },
    { threshold: 40000, rate: 0.035 },
    { threshold: 80000, rate: 0.07 },
    { threshold: 120000, rate: 0.115 },
    { threshold: 160000, rate: 0.15 },
    { threshold: 200000, rate: 0.18 },
    // ... additional tax brackets
  ];

  let tax = 0;

  for (let i = taxBrackets.length - 1; i >= 0; i--) {
    if (income > taxBrackets[i].threshold) {
      tax += (income - taxBrackets[i].threshold) * taxBrackets[i].rate;
      income = taxBrackets[i].threshold;
    }
  }

  return tax;
}
