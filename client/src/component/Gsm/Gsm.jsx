import React, {useRef, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateGsm} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import {sum} from "react-table/src/aggregations";
import InputField from "../InputField";


const Gsm = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    const [result, setResult] = useState(new Array(10))
    let valueList = []
    let sumList = new Array(10)
    sumList.fill(0)
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
        sumList = new Array(10)
        sumList.fill(0)
        valueList = []
        childRef.map(ref => {
            try {
                ref.current.newRow(date)
                valueList.push(ref.current.getValue())
            } catch (e) {

            }
        })
        calcField()
    }

    const calcField = () => {
        for (let i = 0; i < valueList.length; i++) {
            if (valueList[i] !== undefined) {
                sumList[0] += valueList[i].value1
                sumList[1] += valueList[i].value2
                sumList[2] += valueList[i].value3
                sumList[3] += valueList[i].value4
                sumList[4] += valueList[i].value5
                sumList[5] += valueList[i].value6
                sumList[6] += valueList[i].value7
                sumList[7] += valueList[i].value8
                sumList[8] += valueList[i].value9
                sumList[9] += valueList[i].value10
            }
        }
        setResult([sumList[0], sumList[1], sumList[2], sumList[3], sumList[4], sumList[5], sumList[6], sumList[7], sumList[8], sumList[9], date])
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
                    <th><SelectDate getDate={getDate} startDate={date} key="ГСМ" label="ГСМ" func={collectDateGsm} types="weeks"></SelectDate></th>
                </tr>
                <tr>
                    <th rowSpan={2}>Наименование района</th>
                    <th colSpan={2}>Наличие, тонн</th>
                    <th colSpan={2}>Пост. с начала года</th>
                    <th colSpan={2}>В т.ч. получ. от ООО Врннефтепрод.</th>
                    <th colSpan={2}>В т.ч. получ. от ООО Пред. Управ. Ком.</th>
                    <th colSpan={2}>Прочие</th>
                </tr>
                <tr>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                    <th>Бензин</th>
                    <th>Дизтоп</th>
                </tr>
                </thead>
                <tbody>
                {regionList}
                <tr>
                    <td>Сумма</td>
                    <td>{result[0]}</td>
                    <td>{result[1]}</td>
                    <td>{result[2]}</td>
                    <td>{result[3]}</td>
                    <td>{result[4]}</td>
                    <td>{result[5]}</td>
                    <td>{result[6]}</td>
                    <td>{result[7]}</td>
                    <td>{result[8]}</td>
                    <td>{result[9]}</td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={13}><Button style={{minWidth: "15%", padding: "2px", margin: "10px"}} type="submit" onClick={submitAll}>Отправить</Button></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
});

export default Gsm;