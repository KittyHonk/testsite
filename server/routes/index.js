const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const reportsRouter = require('./reportsRouter')
const reportsTableRouter = require('./reportsTableRouter')
const tableMilkShpRouter = require('./tableMilkShpRouter')


router.use('/user', userRouter)
router.use('/report', reportsRouter)
router.use('/reports_table', reportsTableRouter)
router.use('/milk_shp', tableMilkShpRouter)


module.exports = router