import mongoose from 'mongoose'

const shopSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    motif: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Shops', shopSchema)
