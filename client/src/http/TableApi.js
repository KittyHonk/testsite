import {$authHost, $host} from "./index";

export const getAllMilkShp = async (row_owner, date) => {
    const {data} = await $host.get("api/milk_shp/" + row_owner + `?date=${date}`)
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

export const getAllLeftoverGrain = async (row_owner, date) => {
    const {data} = await $host.get("api/leftover_grain/" + row_owner + `?date=${date}`)
    return data
}

export const checkLeftoverGrain = async (row_owner, date) => {
    const {data} = await $authHost.post("api/leftover_grain/check/", {row_owner, date})
    return data
}

export const createLeftoverGrain = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
    value22, value23, value24, value25, value26, value27, value28, value29, value30, value31, value32,
    value33, value34
    ) => {
    const {data} = await $authHost.post("api/leftover_grain/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
        value22, value23, value24, value25, value26, value27, value28, value29, value30, value31, value32,
        value33, value34
    })
    return data
}

export const getAllTopDressing = async (row_owner, date) => {
    const {data} = await $host.get("api/top_dressing/" + row_owner + `?date=${date}`)
    return data
}

export const checkTopDressing = async (row_owner, date) => {
    const {data} = await $authHost.post("api/top_dressing/check/", {row_owner, date})
    return data
}

export const createTopDressing = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8,
) => {
    const {data} = await $authHost.post("api/top_dressing/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8,
    })
    return data
}

export const getAllCropCondition = async (row_owner, date) => {
    const {data} = await $host.get("api/crop_condition/" + row_owner + `?date=${date}`)
    return data
}

export const checkCropCondition = async (row_owner, date) => {
    const {data} = await $authHost.post("api/crop_condition/check/", {row_owner, date})
    return data
}

export const createCropCondition = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7,
) => {
    const {data} = await $authHost.post("api/crop_condition/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7,
    })
    return data
}

export const getAllFertilizerSpring = async (row_owner, date) => {
    const {data} = await $host.get("api/fertilizer_spring/" + row_owner + `?date=${date}`)
    return data
}

export const checkFertilizerSpring = async (row_owner, date) => {
    const {data} = await $authHost.post("api/fertilizer_spring/check/", {row_owner, date})
    return data
}

export const createFertilizerSpring = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11,
) => {
    const {data} = await $authHost.post("api/fertilizer_spring/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11,
    })
    return data
}

export const getAllFertilizerAutumn = async (row_owner, date) => {
    const {data} = await $host.get("api/fertilizer_autumn/" + row_owner + `?date=${date}`)
    return data
}

export const checkFertilizerAutumn = async (row_owner, date) => {
    const {data} = await $authHost.post("api/fertilizer_autumn/check/", {row_owner, date})
    return data
}

export const createFertilizerAutumn = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11,
) => {
    const {data} = await $authHost.post("api/fertilizer_autumn/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11,
    })
    return data
}

export const getAllHarrowing = async (row_owner, date) => {
    const {data} = await $host.get("api/harrowing/" + row_owner + `?date=${date}`)
    return data
}

export const checkHarrowing = async (row_owner, date) => {
    const {data} = await $authHost.post("api/harrowing/check/", {row_owner, date})
    return data
}

export const createHarrowing = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7,
) => {
    const {data} = await $authHost.post("api/harrowing/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7,
    })
    return data
}

export const getAllSowSpringCrop = async (row_owner, date) => {
    const {data} = await $host.get("api/sow_spring_crop/" + row_owner + `?date=${date}`)
    return data
}

export const checkSowSpringCrop = async (row_owner, date) => {
    const {data} = await $authHost.post("api/sow_spring_crop/check/", {row_owner, date})
    return data
}

export const createSowSpringCrop = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
    value22, value23, value24, value25, value26, value27, value28, value29, value30,
) => {
    const {data} = await $authHost.post("api/sow_spring_crop/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
        value22, value23, value24, value25, value26, value27, value28, value29, value30,
    })
    return data
}

export const getAllSowPotato = async (row_owner, date) => {
    const {data} = await $host.get("api/sow_potato/" + row_owner + `?date=${date}`)
    return data
}

export const checkSowPotato = async (row_owner, date) => {
    const {data} = await $authHost.post("api/sow_potato/check/", {row_owner, date})
    return data
}

export const createSowPotato = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8,
) => {
    const {data} = await $authHost.post("api/sow_potato/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8,
    })
    return data
}

export const getAllSowVegetableAndGourd = async (row_owner, date) => {
    const {data} = await $host.get("api/sow_vegetable_and_gourd/" + row_owner + `?date=${date}`)
    return data
}

export const checkSowVegetableAndGourd = async (row_owner, date) => {
    const {data} = await $authHost.post("api/sow_vegetable_and_gourd/check/", {row_owner, date})
    return data
}

export const createSowVegetableAndGourd = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11, value12, value13,
) => {
    const {data} = await $authHost.post("api/sow_vegetable_and_gourd/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11, value12, value13,
    })
    return data
}

export const getAllSowPerennialPlanting = async (row_owner, date) => {
    const {data} = await $host.get("api/sow_perennial_planting/" + row_owner + `?date=${date}`)
    return data
}

export const checkSowPerennialPlanting = async (row_owner, date) => {
    const {data} = await $authHost.post("api/sow_perennial_planting/check/", {row_owner, date})
    return data
}

export const createSowPerennialPlanting = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11,
) => {
    const {data} = await $authHost.post("api/sow_perennial_planting/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11,
    })
    return data
}

export const getAllFruitBerryHarvest = async (row_owner, date) => {
    const {data} = await $host.get("api/fruit_berry_harvest/" + row_owner + `?date=${date}`)
    return data
}

export const checkFruitBerryHarvest = async (row_owner, date) => {
    const {data} = await $authHost.post("api/fruit_berry_harvest/check/", {row_owner, date})
    return data
}

export const createFruitBerryHarvest = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
    value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
    value22, value23, value24,
) => {
    const {data} = await $authHost.post("api/fruit_berry_harvest/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
        value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21,
        value22, value23, value24,
    })
    return data
}

export const getAllVegetableHarvest = async (row_owner, date) => {
    const {data} = await $host.get("api/vegetable_harvest/" + row_owner + `?date=${date}`)
    return data
}

export const checkVegetableHarvest = async (row_owner, date) => {
    const {data} = await $authHost.post("api/vegetable_harvest/check/", {row_owner, date})
    return data
}

export const createVegetableHarvest = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
    value10, value11, value12, value13, value14, value15, value16, value17, value18, value19,
    value20, value21, value22, value23, value24, value25, value26, value27, value28, value29,
    value30, value31, value32, value33, value34, value35, value36, value37, value38, value39,
    value40, value41, value42, value43, value44, value45, value46, value47, value48, value49,
    value50, value51, value52, value53, value54, value55, value56, value57, value58, value59,
    value60, value61, value62, value63, value64, value65, value66,
) => {
    const {data} = await $authHost.post("api/vegetable_harvest/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
        value10, value11, value12, value13, value14, value15, value16, value17, value18, value19,
        value20, value21, value22, value23, value24, value25, value26, value27, value28, value29,
        value30, value31, value32, value33, value34, value35, value36, value37, value38, value39,
        value40, value41, value42, value43, value44, value45, value46, value47, value48, value49,
        value50, value51, value52, value53, value54, value55, value56, value57, value58, value59,
        value60, value61, value62, value63, value64, value65, value66,
    })
    return data
}

export const getAllSoilPreparation = async (row_owner, date) => {
    const {data} = await $host.get("api/soil_preparation/" + row_owner + `?date=${date}`)
    return data
}

export const checkSoilPreparation = async (row_owner, date) => {
    const {data} = await $authHost.post("api/soil_preparation/check/", {row_owner, date})
    return data
}

export const createSoilPreparation = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
    value10,
) => {
    const {data} = await $authHost.post("api/soil_preparation/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
        value10,
    })
    return data
}

export const getAllSoyHarvest = async (row_owner, date) => {
    const {data} = await $host.get("api/soy_harvest/" + row_owner + `?date=${date}`)
    return data
}

export const checkSoyHarvest = async (row_owner, date) => {
    const {data} = await $authHost.post("api/soy_harvest/check/", {row_owner, date})
    return data
}

export const createSoyHarvest = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
    value10, value11, value12, value13, value14, value15, value16, value17, value18, value19,
    value20, value21,
) => {
    const {data} = await $authHost.post("api/soy_harvest/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
        value10, value11, value12, value13, value14, value15, value16, value17, value18, value19,
        value20, value21,
    })
    return data
}

export const getAllSunflowerHarvest = async (row_owner, date) => {
    const {data} = await $host.get("api/sunflower_harvest/" + row_owner + `?date=${date}`)
    return data
}

export const checkSunflowerHarvest = async (row_owner, date) => {
    const {data} = await $authHost.post("api/sunflower_harvest/check/", {row_owner, date})
    return data
}

export const createSunflowerHarvest = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8,
) => {
    const {data} = await $authHost.post("api/sunflower_harvest/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8,
    })
    return data
}

export const getAllBeetHarvest = async (row_owner, date) => {
    const {data} = await $host.get("api/beet_harvest/" + row_owner + `?date=${date}`)
    return data
}

export const checkBeetHarvest = async (row_owner, date) => {
    const {data} = await $authHost.post("api/beet_harvest/check/", {row_owner, date})
    return data
}

export const createBeetHarvest = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
) => {
    const {data} = await $authHost.post("api/beet_harvest/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
    })
    return data
}

export const getAllSowWinterCrop = async (row_owner, date) => {
    const {data} = await $host.get("api/sow_winter_crop/" + row_owner + `?date=${date}`)
    return data
}

export const checkSowWinterCrop = async (row_owner, date) => {
    const {data} = await $authHost.post("api/sow_winter_crop/check/", {row_owner, date})
    return data
}

export const createSowWinterCrop = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
    value10, value11,
) => {
    const {data} = await $authHost.post("api/sow_winter_crop/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7, value8, value9,
        value10, value11,
    })
    return data
}

export const getAllStaff = async (row_owner, date) => {
    const {data} = await $host.get("api/staff/" + row_owner + `?date=${date}`)
    return data
}

export const checkStaff = async (row_owner, date) => {
    const {data} = await $authHost.post("api/staff/check/", {row_owner, date})
    return data
}

export const createStaff = async (
    row_owner, date, value1, value2, value3, value4, value5, value6, value7,
) => {
    const {data} = await $authHost.post("api/staff/", {
        row_owner, date, value1, value2, value3, value4, value5, value6, value7,
    })
    return data
}

export const getAllGrainForageBalance = async (row_owner, date, culture, category) => {
    const {data} = await $host.get("api/grain_forage_balance/" + row_owner + `?date=${date}&culture=${culture}&category=${category}`)
    return data
}

export const checkGrainForageBalance = async (row_owner, date, culture, category) => {
    const {data} = await $authHost.post("api/grain_forage_balance/check/", {row_owner, date, culture, category})
    return data
}

export const createGrainForageBalance = async (
    row_owner, date, culture, category, value1, value2, value3, value4, value5, value6, value7, value8, value9,
    value10, value11, value12, value13, value14, value15, value16, value17, value18, value19,
) => {
    const {data} = await $authHost.post("api/grain_forage_balance/", {
        row_owner, date, culture, category, value1, value2, value3, value4, value5, value6, value7, value8, value9,
        value10, value11, value12, value13, value14, value15, value16, value17, value18, value19,
    })
    return data
}







