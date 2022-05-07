import React, {useRef, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import SelectDate from "../SelectDate";
import {collectDateForageHarvest} from "../../http/TableApi";
import '../../styles/Component.css';
import Export from '../Export';


const ForageHarvest = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    let date = useRef(new Date(Date.now()).toISOString().slice(0, 10))
    let tableRef = useRef()
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
                ref.current.newRow(date.current)
            } catch (e) {

            }
        })
    }

    const setAllChildDate = () => {
        try {
            childRef.forEach(ref => {
                ref.current.setNewDate(date.current)
            })
        } catch (e) {

        }
    }

    const getDate = (newDate) => {
        date.current = newDate
        setAllChildDate()
    }

    return (
        <div style={{overflow: "auto"}}>
            <div>
                <SelectDate 
                    getDate={getDate} 
                    startDate={date.current} 
                    key="Заготовка кормов" 
                    label="Заготовка кормов" 
                    func={collectDateForageHarvest} 
                    types="days">
                </SelectDate>
            </div>
            <Table
                striped bordered hover
                style={{textAlign: "center", marginTop: "2%"}}
                ref={tableRef}
            >
                <thead>
                <tr>
                    <th></th>
                    <th colSpan={3}>Скошено естестес. и сеяных трав на сено, сенаж, зел. корм и трав. муку, тыс. га</th>
                    <th colSpan={3}>Заготовлено сена, тыс. тонн</th>
                    <th colSpan={3}>Заготовлено сенажа, тыс. тонн</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Наименование района</th>
                    <th>План</th>
                    <th>Факт</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Факт</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Факт</th>
                    <th>%</th>
                    <th>Заготовлено травяной муки, тыс. тонн</th>
                    <th>Заготовлено соломы, тыс. тонн</th>
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
                <Button style={{margin: "23px 45% 0 55%", position: "fixed"}} type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={"Заготовка кормов"} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default ForageHarvest;