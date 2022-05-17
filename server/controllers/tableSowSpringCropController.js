const {TableSowSpringCrop} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require('sequelize')

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableSowSpringCrop.findAll(
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
        let checkTable = await TableSowSpringCrop.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableSowSpringCrop.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
                value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
                value22, value23, value24, value25, value26, value27, value28, value29, value30,
            } = req.body
            let sum1, sum2 = null
            let result1, result2, result910, result1112, result1314, result1516, result1718, result1920, result2122, result2324 = null
            sum2 = value3 + value4 + value5 + value6 + value7
            sum1 = value30 + value29 + value28 + value27 + value26 + value25 + value24 + value22 + value20 + value18 +
                value16 + value14 + value12 + value10 + sum2
            result1 = ((sum1/value1)*100).toFixed(2)
            result2 = ((sum2/value2)*100).toFixed(2)
            result910 = ((value10/value9)*100).toFixed(2)
            result1112 = ((value12/value11)*100).toFixed(2)
            result1314 = ((value13/value12)*100).toFixed(2)
            result1516 = ((value16/value15)*100).toFixed(2)
            result1718 = ((value18/value17)*100).toFixed(2)
            result1920 = ((value20/value19)*100).toFixed(2)
            result2122 = ((value22/value21)*100).toFixed(2)
            result2324 = ((value24/value23)*100).toFixed(2)
            var name = await TableSowSpringCrop.update({
                row_owner: row_owner,
                value1: value1,
                sum1: sum1,
                result1: result1,
                value2: value2,
                sum2: sum2,
                result2: result2,
                value3: value3,
                value4: value4,
                value5: value5,
                value6: value6,
                value7: value7,
                value8: value8,
                value9: value9,
                value10: value10,
                result910: result910,
                value11: value11,
                value12: value12,
                result1112: result1112,
                value13: value13,
                value14: value14,
                result1314: result1314,
                value15: value15,
                value16: value16,
                result1516: result1516,
                value17: value17,
                value18: value18,
                result1718: result1718,
                value19: value19,
                value20: value20,
                result1920: result1920,
                value21: value21,
                value22: value22,
                result2122: result2122,
                value23: value23,
                value24: value24,
                result2324: result2324,
                value25: value25,
                value26: value26,
                value27: value27,
                value28: value28,
                value29: value29,
                value30: value30,
            }, {where: {row_owner, date}})
                return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()