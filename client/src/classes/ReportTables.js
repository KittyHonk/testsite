import {makeAutoObservable} from "mobx";

export default class ReportTables {
    constructor() {
        this._reportTables = [{}]
        makeAutoObservable(this)
    }

    setReportTables(reportTables) {
        this._reportTables = reportTables
    }

    get reportTables() {
        return this._reportTables
    }
}