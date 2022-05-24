import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {loginFunc} from "../http/UserApi";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import {INDEX_ROUTE, REPORT_LIST_ROUTE} from "../utils/consts";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const logIn = async () => {
        try {
            let data;
            data = await loginFunc(login, password)
            user.setUser(user)
            user.setIsAuth(true)
            user.setRole(data.role)
            user.setRegion(data.region)
            history.push(REPORT_LIST_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 200}}
        >
            <Card style={{width: 600, border: "1px solid #212529"}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control value={login} onChange={e => setLogin(e.target.value)} className="mt-3" placeholder="Логин"/>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" className="mt-3" placeholder="Пароль"/>
                    <Button onClick={logIn} className="mt-3">Войти</Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;