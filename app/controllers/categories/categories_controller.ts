import type { HttpContext } from '@adonisjs/core/http'
import Category from '../../models/category.js'
import { ObjectId } from 'mongodb'
import Subcategory from '../../models/subcategory.js'

export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, inertia }: HttpContext) {
    const { name, description, subcategories } = request.body()

    const category = await Category.create({
      name: name,
      description: description,
      subcategories: subcategories,
    })

    const subCategories = await Subcategory.find()

    const thisCategory = await Category.findOne({ _id: category?._id }).populate('subcategories')

    const data = {
      category: thisCategory,
      subcategories: subCategories,
    }

    return inertia.render('categories/show', data)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, inertia }: HttpContext) {
    const { name, description, subcategories } = request.body()

    const category = await Category.findOneAndUpdate(
      { _id: params.id },
      { $set: { name: name, description: description, subcategories: subcategories } },
      { new: true }
    ).populate('subcategories')

    const subCategories = await Subcategory.find()

    const data = {
      category: category,
      subcategories: subCategories,
    }

    return inertia.render('categories/show', data)
  }

  /**
   * Delete record
   */
  async destroy({ params, inertia }: HttpContext) {
    await Category.deleteOne({ _id: params.id })

    const categories = await Category.find().populate('subcategories')

    return inertia.render('categories/index', { categories: categories })
  }
}
