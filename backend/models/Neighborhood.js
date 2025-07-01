import mongoose from "mongoose";

const neighborhoodSchema = new mongoose.Schema({
  name: String,
  city: String,
  safety: Number,
  affordability: Number,
  walkability: Number,
  nightlife: Number,
  schools: Number,
})
export default mongoose.model('Neighborhood', neighborhoodSchema)
