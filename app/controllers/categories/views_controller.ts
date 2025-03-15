import type { HttpContext } from '@adonisjs/core/http'
import Category from '../../models/category.js'

export default class ViewsController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const categories = await Category.find()

    const data = {
      categories: categories,
      columns: [{ name: 'ID' }, { name: 'Name' }, { name: 'Description' }, { name: 'Actions' }],
    }
    return inertia.render('categories/index', { data })
  }

  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('categories/create')
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
  async show({ params }: HttpContext) {
    console.log(params)
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
