import {$authHost, $host} from "./index";

export const getAllReport = async () => {
    const {data} = await $authHost.get("api/report")
    return data
}

