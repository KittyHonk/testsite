const Router = require('express')
const router = new Router()
const reportsTableController = require('../controllers/reportsTableController')


router.get('/', reportsTableController.getAll)
router.get('/:report_name', reportsTableController.getAllWhere)
router.post('/', reportsTableController.create)


module.exports = router