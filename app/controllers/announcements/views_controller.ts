import type { HttpContext } from '@adonisjs/core/http'
import Announcement from '../../models/announcement.js'
import Currency from '../../models/currency.js'
import Category from '../../models/category.js'
import Shop from '../../models/shop.js'
import User from '../../models/user.js'

export default class ViewsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const announcements = await Announcement.find()
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

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
