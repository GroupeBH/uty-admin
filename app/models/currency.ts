import mongoose from 'mongoose'

const CurrencySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    shortName: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Currencies', CurrencySchema)
