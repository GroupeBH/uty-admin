import mongoose from 'mongoose'
import GeoSchema from './geo_schema.js'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    googleId: {
      type: String,
    },
    facebookId: {
      type: String,
    },
    email: {
      type: String,
      max: 50,
    },
    phone: {
      type: String,
      max: 30,
    },
    verified_phone: {
      type: String,
      max: 30,
    },
    password: {
      type: String,
      min: 8,
    },
    image: {
      type: String,
    },
    tokenFirebase: {
      type: String,
    },

    token: {
      type: String,
      default: null,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    location: {
      type: GeoSchema,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Users', userSchema)
