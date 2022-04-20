import {makeAutoObservable} from "mobx";

export default class Table {
    constructor() {
        this._table = []
        makeAutoObservable(this)
    }

    setTable(table) {
        this._table = table
    }

    get table() {
        return this._table
    }
}