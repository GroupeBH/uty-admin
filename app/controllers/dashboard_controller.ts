/* eslint-disable prettier/prettier */
import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
    async index({ inertia }: HttpContext) {
        const data = {
          recentOrders: [], // Récupérer depuis la base de données
          statistics: {}    // Calculer les stats
        };
        return inertia.render('dashboard/index', data);
      }
}