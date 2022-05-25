import {makeAutoObservable} from "mobx";
import {CultureSelect, CategorySelect} from "../component/GrainForageBalance/Data";

export default class GrainForageBalanceStore {
    constructor() {
        this._culture = CultureSelect[0];
        this._category = CategorySelect[0];
        makeAutoObservable(this)
    }

    setCulture (culture) {
        this._culture = culture
    }

    setCategory (category) {
        this._category = category
    }

    get getCulture() {
        return this._culture
    }

    get getCategory() {
        return this._category
    }
}