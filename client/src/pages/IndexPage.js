import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import {Context} from "../index";

const IndexPage = observer(() => {
    const {user} = useContext(Context)
    const {datecls} = useContext(Context)
    const date = datecls.date
    const dayList = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    let prefDate = new Date(datecls.findDay(4))


    if (true) {
        return (
            <Container> 
                <div>
                    {`Добрый день, регион - ${user.region}`}
                </div>
                <div>
                    {`Сегодня: ${dayList[datecls.day]}`}
                </div>
                <div>
                    {`Дата: ${date}`}
                </div>
                <div>
                    {`Тест: ${prefDate}`}
                </div>
            </Container>
        );
    }
});

export default IndexPage;