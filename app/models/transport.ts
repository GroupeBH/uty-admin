import mongoose from 'mongoose'

const TransportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Transports', TransportSchema)
