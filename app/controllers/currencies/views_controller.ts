import type { HttpContext } from '@adonisjs/core/http'
import Currency from '../../models/currency.js'

export default class ViewsController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const currencies = await Currency.find()

    const data = {
      currencies: currencies,
      columns: [{ name: 'ID' }, { name: 'Name' }, { name: 'Code' }],
    }

    return inertia.render('currencies/index', { data })
  }

  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('currencies/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

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
  async update({ params, request }: HttpContext) {
    console.log(params)
    console.log(request.body())
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
