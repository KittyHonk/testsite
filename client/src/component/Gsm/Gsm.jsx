import React, {useRef, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Form, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateMilkKfh} from "../../http/TableApi";
import SelectDate from "../SelectDate";


const MilkKfh = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    let date = new Date(Date.now())
    date = date.toISOString().slice(0, 10)
    const childRef = [
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
    ]
    for (let i = 0; i < props.rowName.length; i++) {
        if ((props.rowName[i].name == user.region) || (user.role == "ADMIN")) {
            regionList.push(<TableBody ref={childRef[i]} key={props.rowName[i].name} rowName={props.rowName[i].name}/>)
        }
    }

    const submitAll = () => {
        childRef.map(ref => {
            try {
                ref.current.newRow(date)
            } catch (e) {

            }
        })
    }

    const setAllChildDate = () => {
        try {
            childRef.map(ref => {
                ref.current.setNewDate(date)
            })
        } catch (e) {

        }
    }

    const getDate = (newDate) => {
        date = newDate
        setAllChildDate()
    }

    return (
        <div>
            <Table
                striped bordered hover
                style={{textAlign: "center"}}
            >
                <thead>
                <tr>
                    <th><SelectDate getDate={getDate} startDate={date} key="Молоко КФХ" label="Молоко КФХ" func={collectDateMilkKfh} types="days"></SelectDate></th>
                </tr>
                <tr>
                    <th rowSpan={2}>Наименование района</th>
                    <th colSpan={2}>Наличие тонн</th>
                    <th colSpan={2}>Пост. с начала года</th>
                    <th colSpan={4}>В т.ч. получ. от ООО Врннефтепрод.</th>
                    <th colSpan={4}>В т.ч. получ от ООО Пред. Управ. Ком.</th>
                    <th colSpan={2}>Прочие</th>
                </tr>
                <tr>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                    <th colSpan={2}>Бензин</th>
                    <th colSpan={2}>Дизтоп</th>
                    <th colSpan={2}>Бензин</th>
                    <th colSpan={2}>Дизтоп</th>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                </tr>
                </thead>
                <tbody>
                {/*{regionList}*/}
                <tr>
                    <th>1</th>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={13}><Button style={{padding: "2px", margin: "10px"}} type="submit" onClick={submitAll}>Отправить</Button></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
});

export default MilkKfh;