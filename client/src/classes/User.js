import {makeAutoObservable} from "mobx";

export default class User {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._role = ""
        this._region = ""
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setRole(role) {
        this._role = role
    }

    setRegion(region) {
        this._region = region
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get role() {
        return this._role
    }

    get region() {
        return this._region
    }

    logOut() {
        this._isAuth = false
        this._user = {}
        this._role = ""
        this._region = ""
    }
}