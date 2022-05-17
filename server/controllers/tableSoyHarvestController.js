const {TableSoyHarvest} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require('sequelize')

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableSoyHarvest.findAll(
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
        let checkTable = await TableSoyHarvest.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableSoyHarvest.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
                value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
            } = req.body
            let result23, result56, result89, result1112, result1415, result1718, result2021 = null
            result23 = ((value3*10)/value2).toFixed(2)
            result56 = ((value6*10)/value5).toFixed(2)
            result89 = ((value9*10)/value8).toFixed(2)
            result1112 = ((value12*10)/value11).toFixed(2)
            result1415 = ((value15*10)/value14).toFixed(2)
            result1718 = ((value18*10)/value17).toFixed(2)
            result2021 = ((value21*10)/value20).toFixed(2)
            var name = await TableSoyHarvest.update({
                row_owner: row_owner,
                value1: value1,
                value2: value2,
                result23: result23,
                value3: value3,
                value4: value4,
                value5: value5,
                result56: result56,
                value6: value6,
                value7: value7,
                value8: value8,
                result89: result89,
                value9: value9,
                value10: value10,
                value11: value11,
                result1112: result1112,
                value12: value12,
                value13: value13,
                value14: value14,
                result1415: result1415,
                value15: value15,
                value16: value16,
                value17: value17,
                result1718: result1718,
                value18: value18,
                value19: value19,
                value20: value20,
                result2021: result2021,
                value21: value21,
            }, {where: {row_owner, date}})
                return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()