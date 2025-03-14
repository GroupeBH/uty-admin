import type { HttpContext } from '@adonisjs/core/http'
import user from '../../models/user.js'

const User = user

export default class ViewsController {
  async index({ inertia }: HttpContext) {
    const users = await User.find()
    const data = {
      users: users,
    }

    return inertia.render('customers/index', data)
  }
}
