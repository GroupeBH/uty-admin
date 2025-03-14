import mongoose from 'mongoose'

const announcementSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sellers',
    },
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shops',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories',
      required: true,
    },

    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductTypes',
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductBrands',
    },

    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subcategories',
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
      default: 0,
      // required: true,
    },

    quantity: {
      type: Number,
      default: 0,
    },

    priceRange: {
      minimun: Number,
      maximum: Number,
    },

    rentPrice: {
      type: Number,
    },

    currency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Currencies',
      // required: true,
    },
    images: {
      type: Array,
      // required: true,
    },
    location: {
      type: Array,
    },

    seen: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
        // required: true,
      },
    ],

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
      },
    ],

    characteristics: {
      weightRange: String,

      size: String,
      color: String,

      kilometer: String,
      made_year: String,
      transmission: String,
      fuel: String,
      places: String,

      live_area: String,
      total_area: String,
      rooms: String,
      floors: String,
      rent: String,

      isNew: Boolean,
    },

    weightRange: {
      valueMin: {
        type: Number,
        default: 0,
      },
      valueMax: {
        type: Number,
        default: 0,
      },
    },

    offer_type: {
      type: String,
    },

    rent: {
      type: String,
    },
    condition: {
      type: String,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Announcements', announcementSchema)
