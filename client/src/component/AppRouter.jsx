import React, {useContext} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {createBrowserHistory} from "history";

const AppRouter = () => {
    const {user} = useContext(Context)
    const history = createBrowserHistory()

    console.log(user)
    return (
        <Router history={history}>
            <Switch>
                {user.isAuth && authRoutes.map(({path, Component}) =>
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