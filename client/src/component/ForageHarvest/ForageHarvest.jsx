import React, {useRef, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import SelectDate from "../SelectDate";
import {collectDateForageHarvest} from "../../http/TableApi";
import '../../styles/Component.css'


const ForageHarvest = observer((props) => {
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
                    <th>
                        <SelectDate getDate={getDate} startDate={date} key="Заготовка кормов" label="Заготовка кормов" func={collectDateForageHarvest} types="days"></SelectDate>
                    </th>
                </tr>
                <tr>
                    <th rowSpan={3}>Наименование района</th>
                    <th colSpan={3} rowSpan={2}>Скошено естестес. и сеяных трав на сено, сенаж, зел. корм и трав. муку, тыс. га</th>
                    <th colSpan={3} rowSpan={2}>Заготовлено сена, тыс. тонн</th>
                    <th colSpan={3} rowSpan={2}>Заготовлено сенажа, тыс. тонн</th>
                    <th rowSpan={3}>Заготовлено травяной муки, тыс. тонн</th>
                    <th rowSpan={3}>Заготовлено соломы, тыс. тонн</th>
                </tr>
                <tr>
                </tr>
                <tr>
                    <th>План</th>
                    <th>Факт</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Факт</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Факт</th>
                    <th>%</th>
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

export default ForageHarvest;