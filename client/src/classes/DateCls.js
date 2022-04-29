import {makeAutoObservable} from "mobx";

export default class DateCls {
    constructor() {
        this._date = new Date(Date.now())
        this._day = new Date(Date.now()).getDay()
        makeAutoObservable(this)
    }

    get date() {
        return this._date
    }

    get day() {
        return this._day
    }
}