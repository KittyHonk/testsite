const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const reportsRouter = require('./reportsRouter')
const reportsTableRouter = require('./reportsTableRouter')
const tableMilkShpRouter = require('./tableMilkShpRouter')
const tableMilkKfhRouter = require('./tableMilkKfhRouter')
const tableForageHarvestRouter = require('./tableForageHarvestRouter')
const tableCornSilageRouter = require('./tableCornSilageRouter')
const tableGsmRouter = require('./tableGsmRouter')


router.use('/user', userRouter)
router.use('/report', reportsRouter)
router.use('/reports_table', reportsTableRouter)
router.use('/milk_shp', tableMilkShpRouter)
router.use('/milk_kfh', tableMilkKfhRouter)
router.use('/forage_harvest', tableForageHarvestRouter)
router.use('/corn_silage', tableCornSilageRouter)
router.use('/gsm', tableGsmRouter)


module.exports = router