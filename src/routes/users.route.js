const router = require('express').Router()
const controller = require('../controllers/user.controller')
const authz = require('../middlewares/authz.middleware')

router.post('/', controller.save)

router.get('/', authz, controller.getAll)

router.get('/:id', authz, controller.getById)

router.put('/:id', authz, controller.update)

router.delete('/:id', authz, controller.remove)

router.post('/authenticate', controller.authenticate)

module.exports = router