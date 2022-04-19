import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import NewUser from "../component/modals/NewUser";

const Admin = observer(() => {
    const [newUserVisible, setNewUserVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} onClick={() => setNewUserVisible(true)} className="mt-2 p-2">
                Добавить нового пользователя
            </Button>post
            <Button variant={"outline-dark"} onClick={() => setNewUserVisible(true)} className="mt-2">
                Изменить старого пользователя
            </Button>
            <NewUser show={newUserVisible} onHide={() => setNewUserVisible(false)}/>
        </Container>
    );
});

export default Admin;