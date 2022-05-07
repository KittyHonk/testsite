const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    region: {type: DataTypes.STRING}
})

const Reports = sequelize.define('reports', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    reports_name: {type: DataTypes.STRING, unique: true},
})

const ReportsTable = sequelize.define('reports_table', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    report_name: {type: DataTypes.STRING},
    table_name: {type: DataTypes.STRING, unique: true},
})

const TableMilkShp = sequelize.define('table_milk_shp', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    result12: {type: DataTypes.FLOAT},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
    result34: {type: DataTypes.FLOAT},
    value5: {type: DataTypes.FLOAT, defaultValue: "0"},
    value6: {type: DataTypes.FLOAT, defaultValue: "0"},
    result56: {type: DataTypes.FLOAT},
    value7: {type: DataTypes.FLOAT, defaultValue: "0"},
    value8: {type: DataTypes.FLOAT, defaultValue: "0"},
    result48: {type: DataTypes.FLOAT},
})

const TableMilkKfh = sequelize.define('table_milk_kfh', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    result12: {type: DataTypes.FLOAT},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
    result34: {type: DataTypes.FLOAT},
})

const TableForageHarvest = sequelize.define('table_forage_harvest', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    result12: {type: DataTypes.FLOAT},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
    result34: {type: DataTypes.FLOAT},
    value5: {type: DataTypes.FLOAT, defaultValue: "0"},
    value6: {type: DataTypes.FLOAT, defaultValue: "0"},
    result56: {type: DataTypes.FLOAT},
    value7: {type: DataTypes.FLOAT, defaultValue: "0"},
    value8: {type: DataTypes.FLOAT, defaultValue: "0"},
})

const TableCornSilage = sequelize.define('table_corn_silage', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
})

const TableGsm = sequelize.define('table_gsm', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
    value5: {type: DataTypes.FLOAT, defaultValue: "0"},
    value6: {type: DataTypes.FLOAT, defaultValue: "0"},
    value7: {type: DataTypes.FLOAT, defaultValue: "0"},
    value8: {type: DataTypes.FLOAT, defaultValue: "0"},
    value9: {type: DataTypes.FLOAT, defaultValue: "0"},
    value10: {type: DataTypes.FLOAT, defaultValue: "0"},
})

const TableAvalibleShTech = sequelize.define('table_avalible_sh_tech', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
    value5: {type: DataTypes.FLOAT, defaultValue: "0"},
    value6: {type: DataTypes.FLOAT, defaultValue: "0"},
    value7: {type: DataTypes.FLOAT, defaultValue: "0"},
    value8: {type: DataTypes.FLOAT, defaultValue: "0"},
    value9: {type: DataTypes.FLOAT, defaultValue: "0"},
    value10: {type: DataTypes.FLOAT, defaultValue: "0"},
    value11: {type: DataTypes.FLOAT, defaultValue: "0"},
    value12: {type: DataTypes.FLOAT, defaultValue: "0"},
    value13: {type: DataTypes.FLOAT, defaultValue: "0"},
    value14: {type: DataTypes.FLOAT, defaultValue: "0"},
    value15: {type: DataTypes.FLOAT, defaultValue: "0"},
    value16: {type: DataTypes.FLOAT, defaultValue: "0"},
    value17: {type: DataTypes.FLOAT, defaultValue: "0"},
    value18: {type: DataTypes.FLOAT, defaultValue: "0"},
    value19: {type: DataTypes.FLOAT, defaultValue: "0"},
    value20: {type: DataTypes.FLOAT, defaultValue: "0"},
})

const TableReadyShTech = sequelize.define('table_ready_sh_tech', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
    value5: {type: DataTypes.FLOAT, defaultValue: "0"},
    value6: {type: DataTypes.FLOAT, defaultValue: "0"},
    value7: {type: DataTypes.FLOAT, defaultValue: "0"},
    value8: {type: DataTypes.FLOAT, defaultValue: "0"},
    value9: {type: DataTypes.FLOAT, defaultValue: "0"},
    value10: {type: DataTypes.FLOAT, defaultValue: "0"},
    value11: {type: DataTypes.FLOAT, defaultValue: "0"},
    value12: {type: DataTypes.FLOAT, defaultValue: "0"},
    value13: {type: DataTypes.FLOAT, defaultValue: "0"},
    value14: {type: DataTypes.FLOAT, defaultValue: "0"},
    value15: {type: DataTypes.FLOAT, defaultValue: "0"},
    value16: {type: DataTypes.FLOAT, defaultValue: "0"},
    value17: {type: DataTypes.FLOAT, defaultValue: "0"},
    value18: {type: DataTypes.FLOAT, defaultValue: "0"},
    value19: {type: DataTypes.FLOAT, defaultValue: "0"},
    value20: {type: DataTypes.FLOAT, defaultValue: "0"},
})

const TableBeetHarvesters = sequelize.define('table_beet_harvesters', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT, defaultValue: "0"},
    value2: {type: DataTypes.FLOAT, defaultValue: "0"},
    value3: {type: DataTypes.FLOAT, defaultValue: "0"},
    value4: {type: DataTypes.FLOAT, defaultValue: "0"},
    value5: {type: DataTypes.FLOAT, defaultValue: "0"},
    value6: {type: DataTypes.FLOAT, defaultValue: "0"},
    value7: {type: DataTypes.FLOAT, defaultValue: "0"},
    value8: {type: DataTypes.FLOAT, defaultValue: "0"},
    value9: {type: DataTypes.FLOAT, defaultValue: "0"},
    value10: {type: DataTypes.FLOAT, defaultValue: "0"},
    value11: {type: DataTypes.FLOAT, defaultValue: "0"},
    value12: {type: DataTypes.FLOAT, defaultValue: "0"},
    value13: {type: DataTypes.FLOAT, defaultValue: "0"},
    value14: {type: DataTypes.FLOAT, defaultValue: "0"},
    value15: {type: DataTypes.FLOAT, defaultValue: "0"},
    value16: {type: DataTypes.FLOAT, defaultValue: "0"},
    value17: {type: DataTypes.FLOAT, defaultValue: "0"},
    value18: {type: DataTypes.FLOAT, defaultValue: "0"},
    value19: {type: DataTypes.FLOAT, defaultValue: "0"},
    value20: {type: DataTypes.FLOAT, defaultValue: "0"},
    value21: {type: DataTypes.FLOAT, defaultValue: "0"},
    value22: {type: DataTypes.FLOAT, defaultValue: "0"},
    value23: {type: DataTypes.FLOAT, defaultValue: "0"},
    value24: {type: DataTypes.FLOAT, defaultValue: "0"},
    value25: {type: DataTypes.FLOAT, defaultValue: "0"},
    value26: {type: DataTypes.FLOAT, defaultValue: "0"},
    value27: {type: DataTypes.FLOAT, defaultValue: "0"},
    value28: {type: DataTypes.FLOAT, defaultValue: "0"},
})


User.hasOne(Reports)
Reports.belongsTo(User)

Reports.hasMany(ReportsTable)
ReportsTable.belongsTo(Reports)

module.exports = {
    User,
    Reports,
    ReportsTable,
    TableMilkShp,
    TableMilkKfh,
    TableCornSilage,
    TableForageHarvest,
    TableGsm,
    TableAvalibleShTech,
    TableReadyShTech,
    TableBeetHarvesters,
}