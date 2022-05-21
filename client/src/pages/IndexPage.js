import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import {Context} from "../index";

const IndexPage = observer((props) => {
    const {user} = useContext(Context)
    const {datecls} = useContext(Context)
    const date = new Date()
    // const dayList = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    if (true) {
        return (
            <Container>
                <div>
                    {`Добрый день, регион - ${user.region}`}
                </div>
                <div>
                    {`Сегодня: ${datecls.date}`}
                </div>
            </Container>
        );
    }
});

export default IndexPage;