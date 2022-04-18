import {makeAutoObservable} from "mobx";

export default class TableReports {
    constructor() {
        this._tableName = [
            {table_name: "Молоко ГХП", value_id: 1, result_id: 1},
            {table_name: "Молоко ГХП", value_id: 1, result_id: 1}
        ]
        makeAutoObservable(this)
    }

    setTableName(table) {
        this._table = table
    }

    get TableName() {
        return this._table
    }
}