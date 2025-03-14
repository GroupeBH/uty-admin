import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const users = await User.find()
    console.log(users)
    response.json(users)
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    console.log(request.body())
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    console.log(params.id)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    console.log(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    console.log(params.id)
    console.log(request.body())
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    console.log(params.id)
  }
}
