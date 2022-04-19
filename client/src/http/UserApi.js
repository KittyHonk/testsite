import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const loginFunc = async (login, password) => {
    const {data} = await $host.post("api/user/login", {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const checkFunc = async () => {
    const {data} = await $authHost.post("api/user/auth")
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
