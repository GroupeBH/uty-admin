import mongoose from 'mongoose'

const shipmentSchema = new mongoose.Schema(
  {
    deliver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Delivers',
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orders',
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'refused', 'accepted', 'in pickup', 'in delivery', 'delivered'],
    },
    comment: {
      type: String,
    },
    // isEntrust: {
    //   type: Boolean,
    // },
    isCollect: {
      type: Boolean,
      default: false,
    },
    isDropOff: {
      type: Boolean,
      default: false,
    },
    // isCollected: {
    //   type: Boolean,
    //   default: false,
    // },
    isAcceptedAt: {
      type: Date,
    },
    isPickUpAt: {
      type: Date,
    },
    isRated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Shipments', shipmentSchema)
