import React, {useRef, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateMilkShp} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css'


const MilkShp = observer((props) => {
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
        if ((props.rowName[i].name === user.region) || (user.role === "ADMIN")) {
            regionList.push(<TableBody ref={childRef[i]} key={props.rowName[i].name} rowName={props.rowName[i].name}/>)
        }
    }

    const submitAll = () => {
        childRef.forEach(ref => {
            try {
                ref.current.newRow(date)
            } catch (e) {

            }
        })
    }

    const setAllChildDate = () => {
        try {
            childRef.forEach(ref => {
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
        <div style={{overflow: "auto"}}>
            <Table
                striped bordered hover
                style={{textAlign: "center"}}
            >
                <thead>
                <tr>
                    <th><SelectDate getDate={getDate} startDate={date} key="Молоко СХП" label="Молоко СХП" func={collectDateMilkShp} types="days"></SelectDate></th>
                </tr>
                <tr>
                    <th rowSpan={3}>Наименование района</th>
                    <th colSpan={6}>Валовый надой молока, тонн</th>
                    <th colSpan={3}>Суточный надой молоко на корову, кг</th>
                    <th rowSpan={3}>Реализовано в зачете, т</th>
                    <th rowSpan={3}>Реализовано в физ. весе, т</th>
                    <th rowSpan={3}>% товарности</th>
                </tr>
                <tr>
                    <th colSpan={3}>С начала года</th>
                    <th colSpan={3}>В т.ч. за день</th>
                    <th rowSpan={2}>2021</th>
                    <th rowSpan={2}>2022</th>
                    <th rowSpan={2}>Разница</th>
                </tr>
                <tr>
                    <th>2021</th>
                    <th>2022</th>
                    <th>Разница</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>Разница</th>
                </tr>
                </thead>
                <tbody>
                {regionList}
                </tbody>
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-center">
                <Button style={{padding: "10px", margin: "20px auto 0 auto", position: "fixed"}} type="submit" onClick={submitAll}>Отправить</Button>
            </div>
        </div>
    );
});

export default MilkShp;