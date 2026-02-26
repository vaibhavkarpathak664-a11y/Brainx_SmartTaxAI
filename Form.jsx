import { useState } from 'react'

export default function Form({ onCalculate }) {
  const [name, setName] = useState('')
  const [income, setIncome] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = parseFloat(income)
    if (isNaN(num)) return
    onCalculate(num)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl"
    >
      <h2 className="text-2xl mb-6">Check Eligibility</h2>

      <input
        className="w-full p-3 rounded-xl bg-transparent border border-white/20 mb-4"
        placeholder="Full Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        className="w-full p-3 rounded-xl bg-transparent border border-white/20 mb-4"
        placeholder="Annual Income"
        value={income}
        onChange={e => setIncome(e.target.value)}
      />

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500"
      >
        Next
      </button>
    </form>
  )
}