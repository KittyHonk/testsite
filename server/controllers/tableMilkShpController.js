const {TableMilkShp} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require("sequelize");

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableMilkShp.findAll(
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
        let checkTable = await TableMilkShp.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableMilkShp.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, value1, value2, value3, value4, value5, value6, value7, value8} = req.body
            let result12, result34, result56, result48 = null
            let date = new Date(Date.now())
            date = date.toISOString().slice(0, 10)
            result12 = (value2 - value1)
            result34 = (value4 - value3)
            result56 = (value6 - value5)
            result48 = ((value8/value4)*100).toFixed(2)
            var name = await TableMilkShp.update({
                row_owner: row_owner,
                value1: value1,
                value2: value2,
                result12: result12,
                value3: value3,
                value4: value4,
                result34: result34,
                value5: value5,
                value6: value6,
                result56: result56,
                value7: value7,
                value8: value8,
                result48: result48,
            }, {where: {row_owner, date}})
            return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async collectDate(req, res, next) {
        try {
            let data = await TableMilkShp.findAll({
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