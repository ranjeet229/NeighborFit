
import React from 'react'

const TopNeighborhoods = () => {
  const neighborhoods = [
    {
      name: 'Greenwood',
      city: 'Seattle',
      safety: 'High',
      walkability: 'Excellent',
      schools: 'Great',
    },
    {
      name: 'Mission District',
      city: 'San Francisco',
      safety: 'Moderate',
      walkability: 'High',
      schools: 'Good',
    },
    {
      name: 'River North',
      city: 'Chicago',
      safety: 'Medium',
      walkability: 'Very Good',
      schools: 'Above Average',
    },
  ]

  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Top Neighborhoods</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {neighborhoods.map((n, index) => (
          <div key={index} className="bg-white p-6 shadow rounded-xl text-left">
            <h3 className="text-xl font-semibold text-gray-800">{n.name}</h3>
            <p className="text-gray-600">{n.city}</p>
            <p className="text-sm text-gray-500 mt-2">
              Safety: {n.safety} | Walkability: {n.walkability} | Schools: {n.schools}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopNeighborhoods