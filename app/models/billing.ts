import mongoose from 'mongoose'

const billingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

export default mongoose.model('billings', billingSchema)
