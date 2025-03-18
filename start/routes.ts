/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')

router.get('/admin', '#controllers/dashboard_controller.index')
router.get('/admin/customers', '#controllers/customers/views_controller.index')
router.get('/admin/categories', '#controllers/categories/views_controller.index')
router.get('/admin/categories/create', '#controllers/categories/views_controller.create')
router.get('/admin/categories/:id', '#controllers/categories/views_controller.show')
router.get('/admin/currencies', '#controllers/currencies/views_controller.index')

router.get('/users', '#controllers/users_controller.index')
router.post('/users', '#controllers/users_controller.store')
router.get('/users/:id', '#controllers/users_controller.show')
router.put('/users/:id', '#controllers/users_controller.update')
router.delete('/users/:id', '#controllers/users_controller.destroy')

router.get('/categories', '#controllers/categories/categories_controller.index')
router.post('/categories', '#controllers/categories/categories_controller.store')
router.get('/categories/:id', '#controllers/categories/categories_controller.show')
router.put('/categories/:id', '#controllers/categories/categories_controller.update')
router.delete('/categories/:id', '#controllers/categories/categories_controller.destroy')

router.get('/currencies', '#controllers/currencies/currencies_controller.index')
router.post('/currencies', '#controllers/currencies/currencies_controller.store')
router.get('/currencies/:id', '#controllers/currencies/currencies_controller.show')
router.put('/currencies/:id', '#controllers/currencies/currencies_controller.update')
router.delete('/currencies/:id', '#controllers/currencies/currencies_controller.destroy')

router.get('/announcements', '#controllers/announcements/announcements_controller.index')
router.post('/announcements', '#controllers/announcements/announcements_controller.store')
router.get('/announcements/:id', '#controllers/announcements/announcements_controller.show')
router.put('/announcements/:id', '#controllers/announcements/announcements_controller.update')
router.delete('/announcements/:id', '#controllers/announcements/announcements_controller.destroy')
