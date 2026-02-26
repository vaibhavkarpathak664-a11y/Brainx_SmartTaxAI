import { motion } from "framer-motion";

function Card({ title, amount }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 p-6 rounded-2xl border border-white/10"
    >
      <h3>{title}</h3>
      <p className="text-3xl text-emerald-400 font-bold">{amount}</p>
      <button className="mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
        Apply Now
      </button>
    </motion.div>
  );
}

export default function Dashboard({ income, tax }) {
  // if income/tax provided, show result; otherwise show default suggestions
  if (tax !== null) {
    return (
      <div className="px-10">
        <h2 className="text-2xl mb-4">Calculation Result</h2>
        <p>Income: ₹{income.toLocaleString()}</p>
        <p>Estimated Tax: ₹{tax.toLocaleString()}</p>
      </div>
    )
  }
  return (
    <div className="grid md:grid-cols-3 gap-6 px-10">
      <Card title="80C Investment" amount="₹46,800" />
      <Card title="Health Insurance" amount="₹25,000" />
      <Card title="Home Loan" amount="₹72,000" />
    </div>
  );
}