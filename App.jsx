import React from 'react'
import Hero from './components/Hero'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import Security from './components/Security'
import { useState } from 'react'

export default function App() {
  const [income, setIncome] = useState(0)
  const [tax, setTax] = useState(null)

  const handleCalculate = async (value) => {
    setIncome(value)
    try {
      const res = await fetch('http://localhost:5000/api/tax/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ income: value }),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      setTax(data.tax)
    } catch (err) {
      console.error('Error calculating tax', err)
      setTax(null)
    }
  }

  return (
    <div className="container">
      <Hero />
      <Form onCalculate={handleCalculate} />
      <Dashboard income={income} tax={tax} />
      <Security />
    </div>
  )
}
