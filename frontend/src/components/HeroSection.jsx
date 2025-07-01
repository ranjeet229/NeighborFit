import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Discover Your Ideal Neighborhood
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        NeighborFit helps match you with the perfect place to live based on your lifestyle, preferences, and priorities.
      </p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg">
        Start Matching
      </Button>
    </section>
  )
}

export default HeroSection