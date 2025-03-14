import mongoose from 'mongoose'
// const GeoSchema = require("./GeoSchema");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
    status: {
      type: String,
      enum: ['in progress', 'ordered'],
    },

    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Announcements',
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity can not be less then 1.'],
        },
        status: {
          type: String,
          default: 'not payed',
          enum: ['not payed', 'ordered', 'payed'],
        },
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model('Carts', CartSchema)
