import {$authHost, $host} from "./index";

export const getAllReport = async () => {
    const {data} = await $authHost.get("api/report")
    return data
}

export const getAllReportWhere = async (report_name) => {
    const {data} = await $authHost.get("/api/reports_table/" + report_name)
    return data
}

