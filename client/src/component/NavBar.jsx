import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {INDEX_ROUTE, LOGIN_ROUTE, REPORT_LIST_ROUTE, TABLE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={INDEX_ROUTE}>На главную</NavLink>
                    {user.isAuth
                        ?
                        <Nav className="ml-auto">
                            <Button>Список отчетов</Button>
                            <Button className="mx-md-3" onClick={() => user.setIsAuth(false)}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button className="mx-md-3" onClick={() => user.setIsAuth(true)}>Войти</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;