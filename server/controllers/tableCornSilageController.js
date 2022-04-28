const {TableCornSilage} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require('sequelize')

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableCornSilage.findAll(
                {
                    where: {row_owner, date},
                });
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async check(req, res) {
        let {row_owner, date} = req.body
        let checkTable = await TableCornSilage.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableCornSilage.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, value1, value2, value3, value4} = req.body
            let date = new Date(Date.now())
            date = date.toISOString().slice(0, 10)
            var name = await TableCornSilage.update({
                row_owner: row_owner,
                value1: value1,
                value2: value2,
                value3: value3,
                value4: value4,
            }, {where: {row_owner, date}})
            return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async collectDate(req, res, next) {
        try {
            let data = await TableCornSilage.findAll({
                order: [['date', 'DESC']],
                attributes: [Sequelize.fn('DISTINCT', Sequelize.col('date')), 'date'],
                limit: 7
            })
            return res.json(data)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()