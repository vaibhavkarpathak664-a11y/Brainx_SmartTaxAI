const {
  calculateOldTax,
  calculateNewTax,
} = require("../utils/taxCalculator");

exports.calculateTax = (req, res) => {
  try {
    const { income, deductions } = req.body;

    if (!income) {
      return res.status(400).json({ message: "Income is required" });
    }

    const oldTax = calculateOldTax(income, deductions || 0);
    const newTax = calculateNewTax(income);

    const bestRegime =
      oldTax < newTax ? "Old Tax Regime" : "New Tax Regime";

    const savings = Math.abs(oldTax - newTax);

    res.json({
      income,
      deductions,
      oldTax,
      newTax,
      bestRegime,
      savings,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};