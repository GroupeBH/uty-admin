import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orders',
    },
    message: { type: String },
    phone: { type: String },
    code: { type: String },
    reference: { type: String },
    orderNumber: {
      type: String,
    },
    amount: {
      type: String,
    },
    amountCustomer: { type: String },
    currency: {
      type: String,
    },
    status: {
      type: String,
    },
    createdAt: { type: String },
    channel: { type: String },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Payments', paymentSchema)
