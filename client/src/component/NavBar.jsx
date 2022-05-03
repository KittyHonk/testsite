import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {INDEX_ROUTE, LOGIN_ROUTE, REPORT_LIST_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex">
                <Button onClick={() => history.push(INDEX_ROUTE)}>На главную</Button>
                    {user.isAuth
                        ?
                        <Nav className="ml-auto">
                            <Button onClick={() => history.push(REPORT_LIST_ROUTE)}>Список отчетов</Button>
                            <Button onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;