const {TableBeetHarvesters} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require('sequelize')

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableBeetHarvesters.findAll(
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
        let checkTable = await TableBeetHarvesters.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableBeetHarvesters.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
                value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
                value22, value23, value24, value25, value26, value27, value28,
            } = req.body
            var name = await TableBeetHarvesters.update({
                row_owner: row_owner,
                value1: value1,
                value2: value2,
                value3: value3,
                value4: value4,
                value5: value5,
                value6: value6,
                value7: value7,
                value8: value8,
                value9: value9,
                value10: value10,
                value11: value11,
                value12: value12,
                value13: value13,
                value14: value14,
                value15: value15,
                value16: value16,
                value17: value17,
                value18: value18,
                value19: value19,
                value20: value20,
                value21: value21,
                value22: value22,
                value23: value23,
                value24: value24,
                value25: value25,
                value26: value26,
                value27: value27,
                value28: value28,
            }, {where: {row_owner, date}})
                return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async collectDate(req, res, next) {
        try {
            let data = await TableBeetHarvesters.findAll({
                order: [['date', 'DESC']],
                attributes: [Sequelize.fn('DISTINCT', Sequelize.col('date')), 'date'],
                limit: 4
            })
            return res.json(data)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()