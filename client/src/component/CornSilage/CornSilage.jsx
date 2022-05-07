import React, {useContext, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import SelectDate from "../SelectDate";
import {collectDateCornSilage} from "../../http/TableApi";


const CornSilage = observer((props) => {
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
                style={{textAlign: "center", marginTop: "2%"}}
            >
                <thead>
                <tr>
                    <th><SelectDate getDate={getDate} startDate={date} key="Кукуруза на силос" label="Кукуруза на силос" func={collectDateCornSilage} types="days"></SelectDate></th>
                </tr>
                <tr>
                    <th rowSpan={3}>Наименование района</th>
                    <th colSpan={4}>Уборка кукурузы на силос и зел. корм</th>
                </tr>
                <tr>
                    <th colSpan={2}>Площадь к уборке</th>
                    <th colSpan={2}>Заложено сил. массы</th>
                </tr>
                <tr>
                    <th>План тыс. га</th>
                    <th>Факт тыс. га</th>
                    <th>План тыс. тонн</th>
                    <th>Факт тыс. тонн</th>
                </tr>
                </thead>
                <tbody>
                {regionList}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={13}></td>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-center">
                <Button style={{padding: "10px", margin: "20px auto 0 auto", position: "fixed"}} type="submit" onClick={submitAll}>Отправить</Button>
            </div>
        </div>
    );
});

export default CornSilage;