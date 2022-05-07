import React, {useRef, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateMilkShp} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css'
import Export from '../Export';


const MilkShp = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    let tableRef = useRef()
    let date = useRef(new Date(Date.now()).toISOString().slice(0, 10))
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
                    key="Молоко СХП" 
                    label="Молоко СХП" 
                    func={collectDateMilkShp} 
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
                    <th rowSpan={3}>Наименование района</th>
                    <th colSpan={6}>Валовый надой молока, тонн</th>
                    <th colSpan={3}>Суточный надой молоко на корову, кг</th>
                    <th>Реализовано в зачете, т</th>
                    <th>Реализовано в физ. весе, т</th>
                    <th>% товарности</th>
                </tr>
                <tr>
                    <th colSpan={3}>С начала года</th>
                    <th colSpan={3}>В т.ч. за день</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>2021</th>
                    <th>2022</th>
                    <th>Разница</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>Разница</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>Разница</th>
                    <th></th>
                    <th></th>
                    <th></th>                  
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
                <Export fileName={"Молоко СХП"} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default MilkShp;