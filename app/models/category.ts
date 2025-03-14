/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const CategorieSchema = new mongoose.Schema({
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
    subcategories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subcategories',
        },
    ],
    characteristics: {
        weigth: { type: Boolean, default: false },
        size: { type: Boolean, default: false },
        color: { type: Boolean, default: false },

        kilometer: { type: Boolean, default: false },
        made_year: { type: Boolean, default: false },
        transmission: { type: Boolean, default: false },
        fuel: { type: Boolean, default: false },
        places: { type: Boolean, default: false },

        brand: { type: Boolean, default: false },

        area: { type: Boolean, default: false },
        rooms: { type: Boolean, default: false },
    },
},
    {
        timestamps: true,
    })
const Category = mongoose.model('Categories', CategorieSchema)

export default Category
