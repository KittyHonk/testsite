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
    value1: {type: DataTypes.FLOAT},
    value2: {type: DataTypes.FLOAT},
    result12: {type: DataTypes.FLOAT},
    value3: {type: DataTypes.FLOAT},
    value4: {type: DataTypes.FLOAT},
    result34: {type: DataTypes.FLOAT},
    value5: {type: DataTypes.FLOAT},
    value6: {type: DataTypes.FLOAT},
    result56: {type: DataTypes.FLOAT},
    value7: {type: DataTypes.FLOAT},
    value8: {type: DataTypes.FLOAT},
    result48: {type: DataTypes.FLOAT},
})

const TableMilkKfh = sequelize.define('table_milk_kfh', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT},
    value2: {type: DataTypes.FLOAT},
    result12: {type: DataTypes.FLOAT},
    value3: {type: DataTypes.FLOAT},
    value4: {type: DataTypes.FLOAT},
    result34: {type: DataTypes.FLOAT},
})

const TableForageHarvest = sequelize.define('table_forage_harvest', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT},
    value2: {type: DataTypes.FLOAT},
    result12: {type: DataTypes.FLOAT},
    value3: {type: DataTypes.FLOAT},
    value4: {type: DataTypes.FLOAT},
    result34: {type: DataTypes.FLOAT},
    value5: {type: DataTypes.FLOAT},
    value6: {type: DataTypes.FLOAT},
    result56: {type: DataTypes.FLOAT},
    value7: {type: DataTypes.FLOAT},
    value8: {type: DataTypes.FLOAT},
})

const TableCornSilage = sequelize.define('table_corn_silage', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row_owner: {type: DataTypes.STRING, defaultValue: "autoCreated"},
    date: {type: DataTypes.STRING, require: true},
    value1: {type: DataTypes.FLOAT},
    value2: {type: DataTypes.FLOAT},
    value3: {type: DataTypes.FLOAT},
    value4: {type: DataTypes.FLOAT},
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
}