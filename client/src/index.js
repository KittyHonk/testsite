import React, {createContext} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import UserReports from "./reports/UserReports";
import TableReports from "./reports/TableReports";

export const Context = createContext(null)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Context.Provider value={{
        user: new UserReports(),
        table: new TableReports(),
    }}>
        <App/>
    </Context.Provider>
);


