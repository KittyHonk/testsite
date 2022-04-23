const {TableForageHarvest} = require('../models/models')
const ApiError = require('../error/ApiError')

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableForageHarvest.findAll(
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
        let checkTable = await TableForageHarvest.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableForageHarvest.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, value1, value2, value3, value4, value5, value6, value7, value8} = req.body
            let result12, result34, result56 = null
            value1 = Number(value1)
            value2 = Number(value2)
            value3 = Number(value3)
            value4 = Number(value4)
            value5 = Number(value5)
            value6 = Number(value6)
            value7 = Number(value7)
            value8 = Number(value8)
            let date = new Date(Date.now())
            date = date.toISOString().slice(0, 10)
            result12 = ((value2/value1)*100).toFixed(2)
            result34 = ((value4/value3)*100).toFixed(2)
            result56 = ((value6/value5)*100).toFixed(2)
            var name = await TableForageHarvest.update({
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
            }, {where: {row_owner, date}})
            return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()