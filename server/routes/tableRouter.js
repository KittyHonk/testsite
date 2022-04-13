const Router = require('express')
const router = new Router()
const tableController = require('../controllers/tableController')


router.get('/', tableController.load)
router.get('/:value_id', tableController.getValueId)
router.post('/:value', tableController.setValue)
router.get('/:result_id', tableController.getResultId)
router.post('/:result', tableController.setResult)


module.exports = router