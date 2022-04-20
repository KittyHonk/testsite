import {$authHost, $host} from "./index";

export const getAllMilkShp = async (row_owner) => {
    const {data} = await $host.get("api/milk_shp/" + row_owner)
    return data
}

export const createMilkShp = async (row_owner, value1, value2, value3, value4, value5, value6, value7, value8) => {
    const {data} = await $authHost.post("api/milk_shp",{row_owner, value1, value2, value3, value4, value5, value6, value7, value8})
    return data
}
