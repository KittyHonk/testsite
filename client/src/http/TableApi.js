import {$authHost, $host} from "./index";

export const getAllMilkShp = async (row_owner, date) => {
    const {data} = await $host.get("api/milk_shp/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateMilkShp = async () => {
    const {data} = await $authHost.get("api/milk_shp/")
    return data
}

export const checkMilkShp = async (row_owner, date) => {
    const {data} = await $authHost.post("api/milk_shp/check/", {row_owner, date})
    return data
}

export const createMilkShp = async (row_owner, value1, value2, value3, value4, value5, value6, value7, value8) => {
    const {data} = await $authHost.post("api/milk_shp",{row_owner, value1, value2, value3, value4, value5, value6, value7, value8})
    return data
}

export const getAllMilkKfh = async (row_owner, date) => {
    const {data} = await $host.get("api/milk_kfh/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateMilkKfh = async () => {
    const {data} = await $authHost.get("api/milk_kfh/")
    return data
}

export const checkMilkKfh = async (row_owner, date) => {
    const {data} = await $authHost.post("api/milk_kfh/check/", {row_owner, date})
    return data
}

export const createMilkKfh = async (row_owner, value1, value2, value3, value4) => {
    const {data} = await $authHost.post("api/milk_kfh",{row_owner, value1, value2, value3, value4})
    return data
}

export const getAllForageHarvest = async (row_owner, date) => {
    const {data} = await $host.get("api/forage_harvest/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateForageHarvest = async () => {
    const {data} = await $authHost.get("api/forage_harvest/")
    return data
}

export const checkForageHarvest = async (row_owner, date) => {
    const {data} = await $authHost.post("api/forage_harvest/check/", {row_owner, date})
    return data
}

export const createForageHarvest = async (row_owner, value1, value2, value3, value4, value5, value6, value7, value8) => {
    const {data} = await $authHost.post("api/forage_harvest/",{row_owner, value1, value2, value3, value4, value5, value6, value7, value8})
    return data
}

export const getAllCornSilage = async (row_owner, date) => {
    const {data} = await $host.get("api/corn_silage/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateCornSilage = async () => {
    const {data} = await $authHost.get("api/corn_silage/")
    return data
}

export const checkCornSilage = async (row_owner, date) => {
    const {data} = await $authHost.post("api/corn_silage/check/", {row_owner, date})
    return data
}

export const createCornSilage = async (row_owner, value1, value2, value3, value4) => {
    const {data} = await $authHost.post("api/corn_silage/",{row_owner, value1, value2, value3, value4})
    return data
}


