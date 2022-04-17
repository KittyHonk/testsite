const {Table} = require('../models/models')
const ApiError = require('../error/ApiError')

class tableController {
    async load(req, res) {
        const {table_name, createAt} = req.query
        let table = await Table.findAll({where: {table_name}});
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