const Router = require('express')
const router = new Router()
const reportsController = require('../controllers/reportsController')


router.get('/', reportsController.getAll)
router.post('/', reportsController.create)


module.exports = router