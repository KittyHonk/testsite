import React, {createContext} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import User from "./classes/User";
import Reports from "./classes/Reports";
import ReportTables from "./classes/ReportTables";
import Table from "./classes/Table";

export const Context = createContext(null)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Context.Provider value={{
        user: new User(),
        table: new Table(),
        reportList: new Reports(),
        reportTable: new ReportTables(),
    }}>
        <App/>
    </Context.Provider>
);


