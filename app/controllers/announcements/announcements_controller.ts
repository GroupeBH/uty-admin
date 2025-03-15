import type { HttpContext } from '@adonisjs/core/http'
import Announcement from '../../models/announcement.js'

export default class AnnouncementsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const announcements = await Announcement.find()
      .populate('user')
      .populate('category')
      .populate('currency')

    return announcements
  }

  /**
   * Display form to create a new record
   */
  async create({ request }: HttpContext) {
    const data = request.body()

    const announcement = await Announcement.create(data)

    return announcement
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
    console.log(params, request)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    console.log(params)
  }
}
