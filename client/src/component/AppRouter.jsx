import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {createBrowserHistory} from "history";


const AppRouter = (...props) => {
    const history = createBrowserHistory()
    const isAuth = true;
    return (
        <Router history={history}>
            <Switch>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;