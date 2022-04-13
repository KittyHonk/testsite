const Router = require('express')
const router = new Router()
const reportsController = require('../controllers/reportsController')


router.post('/', reportsController.open)
router.get('/', reportsController.getAll)


module.exports = router