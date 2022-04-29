import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import {Context} from "../index";

const IndexPage = observer(() => {
    const {user} = useContext(Context)
    let date = new Date(Date.now())
    const day = date.getDay()
    const dayList = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    return (
        <Container>
            <div>
                {`Добрый день, регион - ${user.region}`}
            </div>
            <div>
                {`Сегодня: ${dayList[day]}`}
            </div>
        </Container>
    );
});

export default IndexPage;