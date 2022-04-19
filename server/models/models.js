const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
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

const Table = sequelize.define('table_value', {
    row_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    table_name: {type: DataTypes.STRING, allowNull: false},
    value_id: {type: DataTypes.INTEGER, allowNull: false},
    value: {type: DataTypes.INTEGER},
    result_id: {type: DataTypes.INTEGER, allowNull: false},
    result: {type: DataTypes.INTEGER}
})

User.hasOne(Reports)
Reports.belongsTo(User)

Reports.hasMany(ReportsTable)
ReportsTable.belongsTo(Reports)

Table.hasMany(ReportsTable)
ReportsTable.belongsTo(Table)

module.exports = {
    User,
    Reports,
    ReportsTable,
    Table
}