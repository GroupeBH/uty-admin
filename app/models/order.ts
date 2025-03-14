import mongoose from 'mongoose'
import GeoSchema from './geo_schema.js'

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Announcements',
        },
        offer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Proposals',
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity can not be less then 1.'],
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
    dropOffLocation: {
      type: GeoSchema,
    },
    pickUpLocation: {
      type: GeoSchema,
    },
    status: {
      type: String,
      required: true,
      enum: [
        'pending',
        'refused',
        'accepted',
        'awaiting delivery',
        'in pickup',
        'in delivery',
        'delivered',
      ],
    },

    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Carts',
    },
    payed: {
      type: Boolean,
      default: false,
    },
    acceptedAt: {
      type: Date,
    },
    pickedUpAt: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Orders', orderSchema)
