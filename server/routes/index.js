const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const reportsRouter = require('./reportsRouter')
const tableRouter = require('./tableRouter')


router.use('/user', userRouter)
router.use('/report', reportsRouter)
router.use('/table', tableRouter)


module.exports = router