const Router = require('express')
const router = new Router()
const tableController = require('../controllers/tableController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.get('/', tableController.load)
router.post('/', checkRole('USER'), tableController.create)


module.exports = router