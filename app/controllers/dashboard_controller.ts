/* eslint-disable prettier/prettier */
import type { HttpContext } from '@adonisjs/core/http'
import announcement from '../models/announcement.js';
import user from '../models/user.js';
import shop from '../models/shop.js';

const Announcement = announcement;
const User = user;
const Shop = shop;

export default class DashboardController {
    async index({ inertia }: HttpContext) {
       const announcements = await Announcement.find();
       const users = await User.find();
       const shops = await Shop.find();

        const data = {
          announcements: announcements,
          users: users,
          shops: shops,
          stats: {},
        };
        return inertia.render('dashboard/index', data);
      }
}