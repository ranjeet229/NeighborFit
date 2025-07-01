
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import Neighborhood from './models/Neighborhood.js'

dotenv.config()

const seedNeighborhoods = async () => {
  try {
    await connectDB()
    await Neighborhood.deleteMany()
    const neighborhoods = [
      {
        name: 'Greenwood',
        city: 'Seattle',
        safety: 0.9,
        affordability: 0.7,
        walkability: 0.8,
        nightlife: 0.5,
        schools: 0.85
      },
      {
        name: 'Mission District',
        city: 'San Francisco',
        safety: 0.6,
        affordability: 0.4,
        walkability: 0.9,
        nightlife: 0.8,
        schools: 0.7
      },
      {
        name: 'Lincoln Park',
        city: 'Chicago',
        safety: 0.85,
        affordability: 0.6,
        walkability: 0.7,
        nightlife: 0.4,
        schools: 0.9
      },
      {
        name: 'Williamsburg',
        city: 'New York',
        safety: 0.7,
        affordability: 0.5,
        walkability: 0.95,
        nightlife: 0.9,
        schools: 0.6
      }
    ]

    await Neighborhood.insertMany(neighborhoods)
    console.log('Neighborhoods seeded successfully')
    process.exit()
  } catch (error) {
    console.error('Failed to seed neighborhoods:', error)
    process.exit(1)
  }
}

seedNeighborhoods()
