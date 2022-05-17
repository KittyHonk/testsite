const {TableVegetableHarvest} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require('sequelize')

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date} = req.query
            let table = await TableVegetableHarvest.findAll(
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
        let checkTable = await TableVegetableHarvest.findAll({where: {row_owner, date}});
        if (checkTable.length == 0) {
            var name = await TableVegetableHarvest.create({row_owner, date})
        }
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
                value11, value12, value13, value14, value15, value16, value17, value18, value19, value20,
                value21, value22, value23, value24, value25, value26, value27, value28, value29, value30,
                value31, value32, value33, value34, value35, value36, value37, value38, value39, value40,
                value41, value42, value43, value44, value45, value46, value47, value48, value49, value50,
                value51, value52, value53, value54, value55, value56, value57, value58, value59, value60,
                value61, value62, value63, value64, value65, value66,
            } = req.body
            var name = await TableVegetableHarvest.update({
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
                value29: value29,
                value30: value30,
                value31: value31,
                value32: value32,
                value33: value33,
                value34: value34,
                value35: value35,
                value36: value36,
                value37: value37,
                value38: value38,
                value39: value39,
                value40: value40,
                value41: value41,
                value42: value42,
                value43: value43,
                value44: value44,
                value45: value45,
                value46: value46,
                value47: value47,
                value48: value48,
                value49: value49,
                value50: value50,
                value51: value51,
                value52: value52,
                value53: value53,
                value54: value54,
                value55: value55,
                value56: value56,
                value57: value57,
                value58: value58,
                value59: value59,
                value60: value60,
                value61: value61,
                value62: value62,
                value63: value63,
                value64: value64,
                value65: value65,
                value66: value66,
            }, {where: {row_owner, date}})
                return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()