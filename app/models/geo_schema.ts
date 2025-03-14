import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Création du schéma GeoJSON pour l'adresse
const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
  },
})

export default GeoSchema
