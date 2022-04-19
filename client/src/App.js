import React, {useContext, useEffect, useState} from 'react';
import AppRouter from "./component/AppRouter";
import {BrowserRouter, Route, Router} from "react-router-dom";
import NavBar from "./component/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {checkFunc} from "./http/UserApi";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkFunc().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    })

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

  return (
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
      </BrowserRouter>
  );
});

export default App;
