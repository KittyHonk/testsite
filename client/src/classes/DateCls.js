import {makeAutoObservable} from "mobx";
import moment from "moment";

export default class DateCls {
    constructor() {
        // this._date = new Date('April 27, 2022 03:24:00')
        // this._day = new Date(this._date).getDay()
        // this._monthDay = new Date(this._date).getDate()
        this._date = new Date(Date.now())
        this._day = new Date(Date.now()).getDay()
        this._monthDay = new Date(Date.now()).getDate()
        makeAutoObservable(this)
    }

    get date() {
        return this._date
    }

    get day() {
        return this._day
    }

    get monthDay () {
        return this._monthDay
    }

    findDay (day) {
        let dateCopy = new Date(this._date)
        let getMonthDay = dateCopy.getMonth()
        for (let i = this.monthDay;i > -31;i--) {
            let setMonth = dateCopy.setMonth(getMonthDay, i)
            let newDate = new Date(setMonth)
            let getDayTemp = newDate.getDay()
            if (getDayTemp === day) {
                newDate = moment(newDate).format("YYYY-MM-DD")
                return newDate;
            }
        }
    }
}