import mongoose from 'mongoose'
import GeoSchema from './geo_schema.js'

const deliverSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    paymentMethod: {
      name: String,
      phoneMobileMoney: {
        type: String,
      },
      card: {
        cardId: String,
        expirationDate: String,
        cvs: String,
      },
    },

    identity: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    location: {
      type: GeoSchema,
    },
    inValidating: {
      type: Boolean,
    },
    isDeliver: {
      type: Boolean,
      default: false,
    },
    isDecline: {
      type: Boolean,
      default: false,
    },
    transport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transports',
    },
    rating: {
      type: Array,
    },
    comments: [
      {
        text: String,
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Users',
        },
        rating: {
          type: Number,
        },
      },
    ],
    decline: {
      type: Array,
      default: [],
      required: false,
    },
  },

  {
    timestamps: true,
  }
)

export default mongoose.model('Delivers', deliverSchema)
