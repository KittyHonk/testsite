import React, {useContext} from 'react';
import {Redirect, Route, Router, Switch, useHistory} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
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
});

export default AppRouter;