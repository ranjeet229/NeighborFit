
import React from 'react'
import { Button } from './ui/button'

const CallToAction = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to find your match?</h2>
      <p className="text-gray-600 mb-6">Take the first step toward your ideal neighborhood today.</p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg">
        Get Started
      </Button>
    </section>
  )
}

export default CallToAction