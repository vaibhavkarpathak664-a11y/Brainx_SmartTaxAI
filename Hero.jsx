import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center px-10 pt-20">
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Maximize Your Tax Benefits with AI
        </h1>
        <p className="text-slate-400 mt-4">
          Smart, Secure, Government-Aligned Financial Intelligence
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/20 backdrop-blur-lg">
            Learn More
          </button>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
      >
        <h3>AI Tax Savings</h3>
        <p className="text-emerald-400 text-3xl font-bold">₹1,85,000</p>
      </motion.div>
    </section>
  );
}