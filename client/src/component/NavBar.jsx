import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {INDEX_ROUTE, LOGIN_ROUTE, REPORT_LIST_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import '../../src/styles/Component.css'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.logOut();
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Button className="buttonIndexPage" onClick={() => history.push(INDEX_ROUTE)}>На главную</Button>
                    {user.isAuth
                        ?
                        <Nav>
                            <Button className="buttonReportList" onClick={() => history.push(REPORT_LIST_ROUTE)}>Список отчетов</Button>
                            <Button className="buttonLogin" onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                        :
                        <Nav>
                            <Button className="buttonLogin" onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;