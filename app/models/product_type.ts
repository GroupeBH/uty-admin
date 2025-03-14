import mongoose from 'mongoose'

const ProductTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategories',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('ProductTypes', ProductTypeSchema)
