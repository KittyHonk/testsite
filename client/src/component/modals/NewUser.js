import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const NewUser = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Новый пользователь
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control className="m-2 p-2"placeholder={"Логин пользователя"}></Form.Control>
                    <Form.Control className="m-2 p-2" placeholder={"Пароль пользователя"}></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="m-2 p-2" variant={"outline-dark"} onClick={onHide}>Добавить</Button>
                <Button className="m-2 p-2" variant={"outline-dark"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewUser;