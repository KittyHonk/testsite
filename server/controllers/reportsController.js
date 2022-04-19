const {Reports} = require('../models/models')
const ApiError = require('../error/ApiError')

class reportsController {
    async getAll(req, res) {
        let report = await Reports.findAll();
        return res.json(report)
    }

    async create(req, res, next) {
        try {
            const {reports_name} = req.body
            const name = await Reports.create({reports_name})
            return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new reportsController()