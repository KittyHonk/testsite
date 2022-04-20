const Router = require('express')
const router = new Router()
const tableController = require('../controllers/tableMilkShpController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.get('/:row_owner', tableController.getAll)
/*router.get('/:table_name', tableController.getAllWhereCreated)*/
router.post('/', tableController.create)


module.exports = router