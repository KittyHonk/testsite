const {Table} = require('../models/models')
const ApiError = require('../error/ApiError')

class tableController {
    async load(req, res) {

    }

    async create(req, res) {
        const {table_name} = req.body
        const {value_id} = req.body
        const {result_id} = req.body
        const name = await Table.create({table_name, value_id, result_id})
        return res.json(name)
    }
}


module.exports = new tableController()