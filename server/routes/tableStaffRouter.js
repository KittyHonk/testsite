const Router = require('express')
const router = new Router()
const tableController = require('../controllers/tableStaffController')


router.get('/:row_owner', tableController.getAll)
router.post('/', tableController.create)
router.post('/check', tableController.check)

module.exports = router