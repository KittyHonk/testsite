const {TableFertilizerAutumn} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require('sequelize')

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableFertilizerAutumn.findAll(
                {
                    where: {row_owner, date},
                    order: [['date', 'DESC']],
                });
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async check(req, res) {
        let {row_owner, date} = req.body
        let checkTable = await TableFertilizerAutumn.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableFertilizerAutumn.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, date, value1, value2, value3, value4, value5, value6,
                value7, value8, value9, value10, value11,
            } = req.body
            let result12 = null
            result12 = ((value2/value1)*100).toFixed(2)
            var name = await TableFertilizerAutumn.update({
                row_owner: row_owner,
                value1: value1,
                value2: value2,
                result12: result12,
                value3: value3,
                value4: value4,
                value5: value5,
                value6: value6,
                value7: value7,
                value8: value8,
                value9: value9,
                value10: value10,
                value11: value11,
            }, {where: {row_owner, date}})
                return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()