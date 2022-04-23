import {
    ADMIN_ROUTE,
    INDEX_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    REPORT_LIST_ROUTE,
    TABLE_ROUTE,
    REPORT_TABLES,
} from "./utils/consts";
import Admin from "./pages/Admin";
import ReportList from "./pages/ReportList";
import Tables from "./pages/Tables";
import Auth from "./pages/Auth";
import IndexPage from "./pages/IndexPage";
import ReportsTable from "./pages/ReportsTable";
import ExportToCSV from "./component/ExportToCSV"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: TABLE_ROUTE + "/:table_name",
        Component: Tables
    },
    {
        path: REPORT_LIST_ROUTE,
        Component: ReportList
    },
    {
        path: REPORT_TABLES + "/:report_name",
        Component: ReportsTable
    },
]

export const publicRoutes = [
    {
        path: INDEX_ROUTE,
        Component: IndexPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]
