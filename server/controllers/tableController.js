const {Table} = require('../models/models')
const ApiError = require('../error/ApiError')

class tableController {
    async load(req, res) {
        const tables = await Table.findAll({
            attributes: ['value_id', 'value', 'result_id', 'result'],
            where: {
                table_name: "Молоко СХП"
            }
        })
        return res.json(tables)
    }

    async create(req, res) {
        const {table_name, value_id, value, result_id, result} = req.body
        const name = await Table.create({table_name, value_id, value, result_id, result})
        return res.json(name)
    }
}


module.exports = new tableController()