
import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">1. Choose Preferences</h3>
          <p className="text-gray-600">Tell us what matters to you — like safety, schools, walkability, and cost of living.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">2. Analyze Match</h3>
          <p className="text-gray-600">We use real-world data and a smart algorithm to match your preferences with neighborhoods.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">3. Explore Results</h3>
          <p className="text-gray-600">Get a shortlist of neighborhoods and explore the ones that fit your lifestyle best.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks