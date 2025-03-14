import mongoose from 'mongoose'

const ProductBrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('ProductBrands', ProductBrandSchema)
