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

export const createMilkShp = async (row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8) => {
    const {data} = await $authHost.post("api/milk_shp",{row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8})
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

export const createMilkKfh = async (row_owner, date, value1, value2, value3, value4) => {
    const {data} = await $authHost.post("api/milk_kfh",{row_owner, date, value1, value2, value3, value4})
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

export const createForageHarvest = async (row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8) => {
    const {data} = await $authHost.post("api/forage_harvest/",{row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8})
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

export const createCornSilage = async (row_owner, date, value1, value2, value3, value4) => {
    const {data} = await $authHost.post("api/corn_silage/", {row_owner, date, value1, value2, value3, value4})
    return data
}

export const getAllGsm = async (row_owner, date) => {
    const {data} = await $host.get("api/gsm/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateGsm = async () => {
    const {data} = await $authHost.get("api/gsm/")
    return data
}

export const checkGsm = async (row_owner, date) => {
    const {data} = await $authHost.post("api/gsm/check/", {row_owner, date})
    return data
}

export const createGsm = async (row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10) => {
    const {data} = await $authHost.post("api/gsm/", {row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10})
    return data
}

export const getAllAvalibleShTech = async (row_owner, date) => {
    const {data} = await $host.get("api/avalible_sh_tech/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateAvalibleShTech = async () => {
    const {data} = await $authHost.get("api/avalible_sh_tech/")
    return data
}

export const checkAvalibleShTech = async (row_owner, date) => {
    const {data} = await $authHost.post("api/avalible_sh_tech/check/", {row_owner, date})
    return data
}

export const createAvalibleShTech = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11, value12, value13, value14, value15, value16, value17, value18, value19, value20,
    ) => {
    const {data} = await $authHost.post("api/avalible_sh_tech/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11, value12, value13, value14, value15, value16, value17, value18, value19, value20,
    })
    return data
}

export const getAllReadyShTech = async (row_owner, date) => {
    const {data} = await $host.get("api/ready_sh_tech/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateReadyShTech = async () => {
    const {data} = await $authHost.get("api/ready_sh_tech/")
    return data
}

export const checkReadyShTech = async (row_owner, date) => {
    const {data} = await $authHost.post("api/ready_sh_tech/check/", {row_owner, date})
    return data
}

export const createReadyShTech = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11, value12, value13, value14, value15, value16, value17, value18, value19, value20,
    ) => {
    const {data} = await $authHost.post("api/ready_sh_tech/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11, value12, value13, value14, value15, value16, value17, value18, value19, value20,
    })
    return data
}

export const getAllBeetHarvesters = async (row_owner, date) => {
    const {data} = await $host.get("api/beet_harvesters/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateBeetHarvesters = async () => {
    const {data} = await $authHost.get("api/beet_harvesters/")
    return data
}

export const checkBeetHarvesters = async (row_owner, date) => {
    const {data} = await $authHost.post("api/beet_harvesters/check/", {row_owner, date})
    return data
}

export const createBeetHarvesters = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
    value22, value23, value24, value25, value26, value27, value28,
    ) => {
    const {data} = await $authHost.post("api/beet_harvesters/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
        value22, value23, value24, value25, value26, value27, value28,
    })
    return data
}

export const getAllHarvesters = async (row_owner, date) => {
    const {data} = await $host.get("api/harvesters/" + row_owner + `?date=${date}`)
    return data
}

export const collectDateHarvesters = async () => {
    const {data} = await $authHost.get("api/harvesters/")
    return data
}

export const checkHarvesters = async (row_owner, date) => {
    const {data} = await $authHost.post("api/harvesters/check/", {row_owner, date})
    return data
}

export const createHarvesters = async (
    row_owner, date, value1, value2, value3, value4, value5, 
    value6, value7, value8, value9, value10, value11,) => {
    const {data} = await $authHost.post("api/harvesters/", {
        row_owner, date, value1, value2, value3, value4, value5, 
        value6, value7, value8, value9, value10, value11,
    })
    return data
}


