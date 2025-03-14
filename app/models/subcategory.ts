import mongoose from 'mongoose'

const SubCategorieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    description: {
      type: String,
    },
    characteristics: {
      weightRange: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Tranche de poids' },
      },

      size: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Taille' },
      },
      color: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Couleur' },
      },

      kilometer: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Kilometrage' },
      },
      made_year: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Année de fabrication' },
      },
      transmission: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Type de transmission' },
      },
      fuel: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Type de carburant' },
      },
      places: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Nombre de places' },
      },

      live_area: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Surface habitable' },
      },
      total_area: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Surface totale' },
      },
      rooms: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Nombre de pièces' },
      },
      floors: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: "Nombre d'étages" },
      },
      rent: {
        type: { type: Boolean, default: false },
        fr: { type: String, default: 'Loyer mensuel' },
      },
    },

    isParticular: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Subcategory = mongoose.model('Subcategories', SubCategorieSchema)

export default Subcategory
