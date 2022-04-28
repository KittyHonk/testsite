const Router = require('express')
const router = new Router()
const tableController = require('../controllers/tableMilkShpController')


router.get('/:row_owner', tableController.getAll)
router.get('/', tableController.collectDate)
router.post('/', tableController.create)
router.post('/check', tableController.check)

module.exports = router