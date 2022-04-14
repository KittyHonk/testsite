require('dotenv').config()
const express = require('express')
const sequilize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
    try {
        await sequilize.authenticate()
        await sequilize.sync()
        app.listen(PORT, () => console.log('Server started on port ${5000}'))
    } catch (e) {
        console.log(e)
    }
}


start()