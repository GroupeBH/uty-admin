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

router.get('/users', '#controllers/users_controller.index')
router.post('/users', '#controllers/users_controller.store')
router.get('/users/:id', '#controllers/users_controller.show')
router.put('/users/:id', '#controllers/users_controller.update')
router.delete('/users/:id', '#controllers/users_controller.destroy')

router.get('/admin', '#controllers/dashboard_controller.index')
router.get('/admin/customers', '#controllers/customers/views_controller.index')
