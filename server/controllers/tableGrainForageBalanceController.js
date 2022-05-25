const {TableGrainForageBalance} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require("sequelize");

class tableController {
    async getAll(req, res, next) {
        try {
            const {row_owner} = req.params
            const {date, culture, category} = req.query
            let table = await TableGrainForageBalance.findAll(
                {
                    where: {row_owner, date, culture, category},
                });
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async check(req, res) {
        let {row_owner, date, culture, category} = req.body
        let checkTable = await TableGrainForageBalance.findAll({where: {row_owner, date, culture, category}});
        if (checkTable.length == 0) {
            var name = await TableGrainForageBalance.create({row_owner, date, culture, category})
        }
        if (culture === "По всем зерновым" && category !== "По всем категориям хозяйства") {
            let cultureAll = await TableGrainForageBalance.sequelize.query(
                "SELECT SUM(value1) as sum1, SUM(value2) as sum2, SUM(value3) as sum3, SUM(value4) as sum4, SUM(value5) as sum5, " +
                "SUM(value6) as sum6, SUM(value7) as sum7, SUM(value8) as sum8, SUM(value9) as sum9, SUM(value10) as sum10, " +
                "SUM(value11) as sum11, SUM(value12) as sum12, SUM(value13) as sum13, SUM(value14) as sum14, SUM(value15) as sum15, " +
                "SUM(value16) as sum16, SUM(value17) as sum17, SUM(value18) as sum18, SUM(value19) as sum19, " +
                "SUM(result12) as result12, SUM(result45) as result45, SUM(result46) as result46" +
                " FROM table_grain_forage_balances WHERE culture != 'По всем зерновым' AND category = :category",
                {
                    replacements: {category: `${category}`},
                })
            let name = await TableGrainForageBalance.update({
                value1: cultureAll[0][0].sum1,
                value2: cultureAll[0][0].sum2,
                result12: cultureAll[0][0].result12,
                value3: cultureAll[0][0].sum3,
                value4: cultureAll[0][0].sum4,
                result45: cultureAll[0][0].result45,
                result46: cultureAll[0][0].result46,
                value5: cultureAll[0][0].sum5,
                value6: cultureAll[0][0].sum6,
                value7: cultureAll[0][0].sum7,
                value8: cultureAll[0][0].sum8,
                value9: cultureAll[0][0].sum9,
                value10: cultureAll[0][0].sum10,
                value11: cultureAll[0][0].sum11,
                value12: cultureAll[0][0].sum12,
                value13: cultureAll[0][0].sum13,
                value14: cultureAll[0][0].sum14,
                value15: cultureAll[0][0].sum15,
                value16: cultureAll[0][0].sum16,
                value17: cultureAll[0][0].sum17,
                value18: cultureAll[0][0].sum18,
                value19: cultureAll[0][0].sum19,
            }, {where: {row_owner, date, culture, category}}
        )}
        if (category === "По всем категориям хозяйства" && culture !== "По всем зерновым") {
            let cultureAll = await TableGrainForageBalance.sequelize.query(
                "SELECT SUM(value1) as sum1, SUM(value2) as sum2, SUM(value3) as sum3, SUM(value4) as sum4, SUM(value5) as sum5, " +
                "SUM(value6) as sum6, SUM(value7) as sum7, SUM(value8) as sum8, SUM(value9) as sum9, SUM(value10) as sum10, " +
                "SUM(value11) as sum11, SUM(value12) as sum12, SUM(value13) as sum13, SUM(value14) as sum14, SUM(value15) as sum15, " +
                "SUM(value16) as sum16, SUM(value17) as sum17, SUM(value18) as sum18, SUM(value19) as sum19, " +
                "SUM(result12) as result12, SUM(result45) as result45, SUM(result46) as result46" +
                " FROM table_grain_forage_balances WHERE culture = :culture AND category != 'По всем категориям хозяйства'",
                {
                    replacements: {culture: `${culture}`},
                })
            let name = await TableGrainForageBalance.update({
                    value1: cultureAll[0][0].sum1,
                    value2: cultureAll[0][0].sum2,
                    result12: cultureAll[0][0].result12,
                    value3: cultureAll[0][0].sum3,
                    value4: cultureAll[0][0].sum4,
                    result45: cultureAll[0][0].result45,
                    result46: cultureAll[0][0].result46,
                    value5: cultureAll[0][0].sum5,
                    value6: cultureAll[0][0].sum6,
                    value7: cultureAll[0][0].sum7,
                    value8: cultureAll[0][0].sum8,
                    value9: cultureAll[0][0].sum9,
                    value10: cultureAll[0][0].sum10,
                    value11: cultureAll[0][0].sum11,
                    value12: cultureAll[0][0].sum12,
                    value13: cultureAll[0][0].sum13,
                    value14: cultureAll[0][0].sum14,
                    value15: cultureAll[0][0].sum15,
                    value16: cultureAll[0][0].sum16,
                    value17: cultureAll[0][0].sum17,
                    value18: cultureAll[0][0].sum18,
                    value19: cultureAll[0][0].sum19,
                }, {where: {row_owner, date, culture, category}}
            )}
        if ((category === "По всем категориям хозяйства") && (culture === "По всем зерновым")) {
            let cultureAll = await TableGrainForageBalance.sequelize.query(
                "SELECT SUM(value1) as sum1, SUM(value2) as sum2, SUM(value3) as sum3, SUM(value4) as sum4, SUM(value5) as sum5, " +
                "SUM(value6) as sum6, SUM(value7) as sum7, SUM(value8) as sum8, SUM(value9) as sum9, SUM(value10) as sum10, " +
                "SUM(value11) as sum11, SUM(value12) as sum12, SUM(value13) as sum13, SUM(value14) as sum14, SUM(value15) as sum15, " +
                "SUM(value16) as sum16, SUM(value17) as sum17, SUM(value18) as sum18, SUM(value19) as sum19, " +
                "SUM(result12) as result12, SUM(result45) as result45, SUM(result46) as result46" +
                " FROM table_grain_forage_balances WHERE culture != :culture AND category != :category",
                {
                    replacements: {culture: `${culture}`, category: `${category}`},
                })
            let name = await TableGrainForageBalance.update({
                value1: cultureAll[0][0].sum1,
                value2: cultureAll[0][0].sum2,
                result12: cultureAll[0][0].result12,
                value3: cultureAll[0][0].sum3,
                value4: cultureAll[0][0].sum4,
                result45: cultureAll[0][0].result45,
                result46: cultureAll[0][0].result46,
                value5: cultureAll[0][0].sum5,
                value6: cultureAll[0][0].sum6,
                value7: cultureAll[0][0].sum7,
                value8: cultureAll[0][0].sum8,
                value9: cultureAll[0][0].sum9,
                value10: cultureAll[0][0].sum10,
                value11: cultureAll[0][0].sum11,
                value12: cultureAll[0][0].sum12,
                value13: cultureAll[0][0].sum13,
                value14: cultureAll[0][0].sum14,
                value15: cultureAll[0][0].sum15,
                value16: cultureAll[0][0].sum16,
                value17: cultureAll[0][0].sum17,
                value18: cultureAll[0][0].sum18,
                value19: cultureAll[0][0].sum19,
            }, {where: {row_owner, date, culture, category}}
            )}
        return res.json(name)
    }

    async create(req, res, next) {
        try {
            let {row_owner, date, culture, category,
                value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
                value11, value12, value13, value14, value15, value16, value17, value18, value19} = req.body
            let result12, result45, result46 = null
            result12 = (value2-value1)
            result45 = ((value5*10)/value4).toFixed(2)
            result46 = ((value6*10)/value4).toFixed(2)
            var name = await TableGrainForageBalance.update({
                row_owner: row_owner,
                value1: value1,
                value2: value2,
                result12: result12,
                value3: value3,
                value4: value4,
                result45: result45,
                result46: result46,
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
            }, {where: {row_owner, date, culture, category}})
            return res.json(name)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new tableController()