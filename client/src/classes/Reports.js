import {makeAutoObservable} from "mobx";

export default class Reports {
    constructor() {
        this._report = []
        makeAutoObservable(this)
    }

    setReport(report) {
        this._report = report
    }

    get reports() {
        return this._report
    }
}