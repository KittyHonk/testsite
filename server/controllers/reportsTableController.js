const {ReportsTable} = require('../models/models')
const ApiError = require('../error/ApiError')

class reportsTableController {
    async getAll(req, res) {
        let report = await ReportsTable.findAll();
        return res.json(report)
    }

    async create(req, res, next) {
        try {
            const {table_name, report_name} = req.body
            const name = await ReportsTable.create({table_name, report_name})
            return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new reportsTableController()
