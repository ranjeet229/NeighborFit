
const matchAlgorithm = (preferences, neighborhoods) => {
  const weights = {
    safety: 0.3,
    affordability: 0.2,
    walkability: 0.2,
    nightlife: 0.1,
    schools: 0.2
  }

  return neighborhoods.map(n => {
    let score = 0
    for (let key in preferences) {
      const diff = Math.abs(preferences[key] - n[key])
      score += (1 - diff) * (weights[key] || 0)
    }
    return { ...n._doc, matchScore: score.toFixed(2) }
  }).sort((a, b) => b.matchScore - a.matchScore)
}

export default matchAlgorithm
