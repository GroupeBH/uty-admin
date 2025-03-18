import type { HttpContext } from '@adonisjs/core/http'
import category from '../../models/category.js'
import Subcategory from '#models/subcategory'

const Category = category

export default class ViewsController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const categories = await Category.find()

    const data = {
      categories: categories,
    }
    return inertia.render('categories/index', data)
  }

  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    const subcategories = await Subcategory.find()

    const data = {
      subcategories: subcategories,
    }

    return inertia.render('categories/create', data)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    console.log(request)
  }

  /**
   * Show individual record
   */
  async show({ params, inertia }: HttpContext) {
    const thiscategory = await Category.findOne({ _id: params.id }).populate('subcategories')
    const subcategories = await Subcategory.find()

    return inertia.render('categories/show', {
      category: thiscategory,
      subcategories: subcategories,
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    console.log(params)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    console.log(params)
    console.log(request.body())
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    console.log(params)
  }
}
