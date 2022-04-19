const {Table} = require('../models/models')
const ApiError = require('../error/ApiError')

class tableController {
    async load(req, res) {
        let table = await Table.findAll();
        return res.json(table)
    }

    async create(req, res, next) {
        try {
            const {table_name, value_id, value, result_id, result} = req.body
            const name = await Table.create({table_name, value_id, value, result_id, result})
            return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()