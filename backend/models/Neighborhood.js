import mongoose from 'mongoose'

const neighborhoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  safety: { type: Number, required: true },
  affordability: { type: Number, required: true },
  walkability: { type: Number, required: true },
  nightlife: { type: Number, required: true },
  schools: { type: Number, required: true }
})

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema)

export default Neighborhood
