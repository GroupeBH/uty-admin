import mongoose from 'mongoose'

const enquirySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories',
    },
    productName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
    },

    priceRange: {
      type: Array,
    },

    media: {
      type: String,
    },

    condition: {
      type: String,
    },

    description: {
      type: String,
    },

    expireAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Enquiries', enquirySchema)
