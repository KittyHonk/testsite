import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllReadyShTech} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css'
import Export from '../Export';
import moment from "moment";


const ReadyShTech = observer((props) => {
    const {user} = useContext(Context)
    const {datecls} = useContext(Context)
    const [result, setResult] = useState([])
    const regionList = []
    const day = 4
    let valueList = []
    let tableRef = useRef()
    let date = useRef(moment(new Date(datecls.findDay(day))).format("YYYY-MM-DD"))

    const childRef = [
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
    ]
    for (let i = 0; i < props.rowName.length; i++) {
        if ((props.rowName[i].name === user.region) || (user.role === "ADMIN")) {
            regionList.push(<TableBody day={day} ref={childRef[i]} key={props.rowName[i].name} rowName={props.rowName[i].name}/>)
        }
    }
    
    const submitAll = () => {
        childRef.forEach(ref => {
            try {
                ref.current.newRow(date.current)
            } catch (e) {}
        })
        setTimeout(() => getValue().then(data => {
            calcField(data)
        }), 100)
    }

    const setAllChildDate = () => {
        try {
            childRef.forEach(ref => {
                if (ref.current === undefined) {
                    return
                }
                ref.current.setNewDate(date.current)
            })
        } catch (e) {}
    }

    const getValue = async () => {
        while (valueList.length > 0) {
            valueList.pop()
        }
        for (let i = 0; i < props.rowName.length; i++) {
            if ((props.rowName[i].name === user.region) || (user.role === "ADMIN")) {
                await getAllReadyShTech(props.rowName[i].name, date.current).then(data => {
                    valueList.push(...data)
                })
            }
        }
        return valueList
    }

    const getDate = (newDate) => {
        date.current = newDate
        setAllChildDate()
        getValue().then(data => {
            calcField(data)
        })
    }

    const calcField = (valueList) => {
        let sumList = new Array(20).fill(0)
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
                sumList[10] += valueList[i].value11
                sumList[11] += valueList[i].value12
                sumList[12] += valueList[i].value13
                sumList[13] += valueList[i].value14
                sumList[14] += valueList[i].value15
                sumList[15] += valueList[i].value16
                sumList[16] += valueList[i].value17
                sumList[17] += valueList[i].value18
                sumList[18] += valueList[i].value19
                sumList[19] += valueList[i].value20
            }
        }
        setResult(sumList)
    }

    return (
        <div classTable="divMain">
            <div className="divSelect">
                <SelectDate
                    getDate={getDate}
                    day={day}
                    key="Готовность сх тех"
                    types="weeks">
                </SelectDate>
            </div>
            <div className="mainBlock">
            <Table
                className="mainTable"
                striped bordered hover
                ref={tableRef}
            >
                <thead>
                <tr>
                    <th></th>
                    <th colSpan={6}>Кормоуборочные комбайны</th>
                    <th colSpan={4}>Косилки</th>
                    <th colSpan={2}>Грабли тракторные</th>
                    <th colSpan={2}>Пресс-подборщики</th>
                    <th colSpan={2}>Опрыскиватели</th>
                    <th colSpan={2}>Жатки валковые</th>
                    <th colSpan={2}>Грузовые автомобили</th>
                </tr>
                <tr>
                    <th></th>
                    <th colSpan={2}>Всего</th>
                    <th colSpan={2}>В т.ч. отечеств.</th>
                    <th colSpan={2}>В т.ч. импортные</th>
                    <th colSpan={2}>Всего</th>
                    <th colSpan={2}>В т.ч. самоходные</th>
                    <th colSpan={2}></th>
                    <th colSpan={2}></th>
                    <th colSpan={2}></th>
                    <th colSpan={2}></th>
                    <th colSpan={2}></th>
                </tr>
                <tr>
                    <th>Наименование района</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                </tr>
                </thead>
                <tbody className="bodyTable">
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
                    <td>{result[10]}</td>
                    <td>{result[11]}</td>
                    <td>{result[12]}</td>
                    <td>{result[13]}</td>
                    <td>{result[14]}</td>
                    <td>{result[15]}</td>
                    <td>{result[16]}</td>
                    <td>{result[17]}</td>
                    <td>{result[18]}</td>
                    <td>{result[19]}</td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={"Готовность сх тех"} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default ReadyShTech;