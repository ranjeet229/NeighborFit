import Neighborhood from '../models/Neighborhood.js'

export const matchNeighborhoodById = async (req, res) => {
  try {
    const preferences = req.body
    const { id } = req.params

    const neighborhood = await Neighborhood.findById(id)

    if (!neighborhood) {
      return res.status(404).json({ message: 'Neighborhood not found' })
    }

    // Basic matching: calculate average closeness score
    const matchScore = (
      1 - Math.abs(neighborhood.safety - preferences.safety)
      + 1 - Math.abs(neighborhood.affordability - preferences.affordability)
      + 1 - Math.abs(neighborhood.walkability - preferences.walkability)
      + 1 - Math.abs(neighborhood.nightlife - preferences.nightlife)
      + 1 - Math.abs(neighborhood.schools - preferences.schools)
    ) / 5

    res.status(200).json({
      message: 'Match Successful',
      neighborhood: neighborhood.name,
      matchScore: matchScore.toFixed(2)
    })
  } catch (error) {
    console.error('Match error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
