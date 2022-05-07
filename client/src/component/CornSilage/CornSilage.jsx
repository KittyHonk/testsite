import React, {useContext, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import SelectDate from "../SelectDate";
import {collectDateCornSilage} from "../../http/TableApi";
import '../../styles/Component.css';
import Export from '../Export';


const CornSilage = observer((props) => {
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
                    key="Кукуруза на силос" 
                    label="Кукуруза на силос" 
                    func={collectDateCornSilage} 
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
                    <th colSpan={4}>Уборка кукурузы на силос и зел. корм</th>
                </tr>
                <tr>
                    <th></th>
                    <th colSpan={2}>Площадь к уборке</th>
                    <th colSpan={2}>Заложено сил. массы</th>
                </tr>
                <tr>
                    <th>Наименование района</th>
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
                <Button style={{margin: "23px 45% 0 55%", position: "fixed"}} type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={"Кукуруза на силос"} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default CornSilage;