import mongoose from 'mongoose'
import GeoSchema from './geo_schema.js'

const shopSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    logo: {
      type: String,
      // required: true,
    },

    pricing: {
      type: String,
      // required: true,
    },

    ratings: {
      type: Array,
    },

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],

    location: {
      type: GeoSchema,
    },

    idnat: {
      type: String,
    },

    rccm: {
      type: String,
    },

    nif: {
      type: String,
    },

    isCorporate: {
      type: Boolean,
    },
  },

  {
    timestamps: true,
  }
)

export default mongoose.model('Shops', shopSchema)
