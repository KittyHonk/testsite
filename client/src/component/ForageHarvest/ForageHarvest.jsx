import React, {useRef, useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table, Form} from "react-bootstrap";
import './styles.css'
import TableBody from "./TableBody";
import {Context} from "../../index";
import SelectDate from "../SelectDate";
import {collectDateForageHarvest} from "../../http/TableApi";


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
                    <th rowSpan={3}></th>
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
                        <td colSpan={13}><Button style={{padding: "2px", margin: "10px"}} type="submit" onClick={submitAll}>Отправить</Button></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
});

export default ForageHarvest;