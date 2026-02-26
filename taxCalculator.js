// OLD TAX REGIME
function calculateOldTax(income, deductions) {
  let taxableIncome = income - deductions;
  let tax = 0;

  if (taxableIncome <= 250000) tax = 0;

  else if (taxableIncome <= 500000)
    tax = (taxableIncome - 250000) * 0.05;

  else if (taxableIncome <= 1000000)
    tax = 12500 + (taxableIncome - 500000) * 0.2;

  else
    tax = 112500 + (taxableIncome - 1000000) * 0.3;

  return Math.max(tax, 0);
}

// NEW TAX REGIME
function calculateNewTax(income) {
  let tax = 0;

  if (income <= 300000) tax = 0;

  else if (income <= 600000)
    tax = (income - 300000) * 0.05;

  else if (income <= 900000)
    tax = 15000 + (income - 600000) * 0.1;

  else if (income <= 1200000)
    tax = 45000 + (income - 900000) * 0.15;

  else if (income <= 1500000)
    tax = 90000 + (income - 1200000) * 0.2;

  else
    tax = 150000 + (income - 1500000) * 0.3;

  return tax;
}

module.exports = {
  calculateOldTax,
  calculateNewTax,
};