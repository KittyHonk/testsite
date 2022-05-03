import {makeAutoObservable} from "mobx";

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
            let dateTemp = (new Date(setMonth)).getTimezoneOffset() * 60000
            let dateOffset = (new Date((setMonth - dateTemp)))
            let getDayTemp = dateOffset.getDay()
            if (getDayTemp === day) {
                // console.log(setMonth)
                // console.log(dateTemp)
                // console.log(dateOffset)
                return dateOffset
            }
        }
    }
}