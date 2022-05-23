import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllSoyHarvest} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css'
import Export from '../Export';
import moment from "moment";


const SoyHarvest = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    const [result, setResult] = useState([])
    let valueList = []
    let tableRef = useRef()
    let date = useRef(moment(new Date (Date.now())).format('YYYY-MM-DD'))
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

    const getDate = (newDate) => {
        date.current = newDate
        setAllChildDate()
        getValue().then(data => {
            calcField(data)
        })
    }

    const getValue = async () => {
        while (valueList.length > 0) {
            valueList.pop()
        }
        for (let i = 0; i < props.rowName.length; i++) {
            if ((props.rowName[i].name === user.region) || (user.role === "ADMIN")) {
                await getAllSoyHarvest(props.rowName[i].name, date.current).then(data => {
                    valueList.push(...data)
                })
            }
        }
        return valueList
    }

    const calcField = (valueList) => {
        let sumList = new Array(28).fill(0)
        for (let i = 0; i < valueList.length; i++) {
            if (valueList[i] !== undefined) {
                sumList[0] += valueList[i].value1
                sumList[1] += valueList[i].value2
                sumList[2] += valueList[i].value3
                sumList[3] = ((sumList[2]*10)/sumList[1]).toFixed(2)
                sumList[4] += valueList[i].value4
                sumList[5] += valueList[i].value5
                sumList[6] += valueList[i].value6
                sumList[7] = ((sumList[6]*10)/sumList[5]).toFixed(2)
                sumList[8] += valueList[i].value7
                sumList[9] += valueList[i].value8
                sumList[10] += valueList[i].value9
                sumList[11] = ((sumList[10]*10)/sumList[9]).toFixed(2)
                sumList[12] += valueList[i].value10
                sumList[13] += valueList[i].value11
                sumList[14] += valueList[i].value12
                sumList[15] = ((sumList[14]*10)/sumList[13]).toFixed(2)
                sumList[16] += valueList[i].value13
                sumList[17] += valueList[i].value14
                sumList[18] += valueList[i].value15
                sumList[19] = ((sumList[18]*10)/sumList[17]).toFixed(2)
                sumList[20] += valueList[i].value16
                sumList[21] += valueList[i].value17
                sumList[22] += valueList[i].value18
                sumList[23] = ((sumList[22]*10)/sumList[21]).toFixed(2)
                sumList[24] += valueList[i].value19
                sumList[25] += valueList[i].value20
                sumList[26] += valueList[i].value21
                sumList[27] = ((sumList[26]*10)/sumList[25]).toFixed(2)
            }
        }
        setResult(sumList)
    }

    return (
        <div classTable="divMain">
            <div className="divSelect">
                <SelectDate
                    getDate={getDate}
                    key="Уборка сои"
                    types="days">
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
                    <th>Наименование района</th>
                    <th colSpan={4}>Соя</th>
                    <th colSpan={4}>Лен</th>
                    <th colSpan={4}>Люпин</th>
                    <th colSpan={4}>Нут</th>
                    <th colSpan={4}>Рапс</th>
                    <th colSpan={4}>Горчица</th>
                    <th colSpan={4}>Рыжик</th>
                </tr>
                <tr>
                    <th></th>
                    <th>План, га</th>
                    <th>Обмолочено</th>
                    <th>Урожайность ц/га</th>
                    <th>Валовый сбор, т</th>
                    <th>План, га</th>
                    <th>Обмолочено</th>
                    <th>Урожайность ц/га</th>
                    <th>Валовый сбор, т</th>
                    <th>План, га</th>
                    <th>Обмолочено</th>
                    <th>Урожайность ц/га</th>
                    <th>Валовый сбор, т</th>
                    <th>План, га</th>
                    <th>Обмолочено</th>
                    <th>Урожайность ц/га</th>
                    <th>Валовый сбор, т</th>
                    <th>План, га</th>
                    <th>Обмолочено</th>
                    <th>Урожайность ц/га</th>
                    <th>Валовый сбор, т</th>
                    <th>План, га</th>
                    <th>Обмолочено</th>
                    <th>Урожайность ц/га</th>
                    <th>Валовый сбор, т</th>
                    <th>План, га</th>
                    <th>Обмолочено</th>
                    <th>Урожайность ц/га</th>
                    <th>Валовый сбор, т</th>
                </tr>
                </thead>
                <tbody className="bodyTable">
                {regionList}
                <tr>
                    <td>Сумма</td>
                    <td>{result[0]}</td>
                    <td>{result[1]}</td>
                    <td>{result[3]}</td>
                    <td>{result[2]}</td>
                    <td>{result[4]}</td>
                    <td>{result[5]}</td>
                    <td>{result[7]}</td>
                    <td>{result[6]}</td>
                    <td>{result[8]}</td>
                    <td>{result[9]}</td>
                    <td>{result[11]}</td>
                    <td>{result[10]}</td>
                    <td>{result[12]}</td>
                    <td>{result[13]}</td>
                    <td>{result[15]}</td>
                    <td>{result[14]}</td>
                    <td>{result[16]}</td>
                    <td>{result[17]}</td>
                    <td>{result[19]}</td>
                    <td>{result[18]}</td>
                    <td>{result[20]}</td>
                    <td>{result[21]}</td>
                    <td>{result[23]}</td>
                    <td>{result[22]}</td>
                    <td>{result[24]}</td>
                    <td>{result[25]}</td>
                    <td>{result[27]}</td>
                    <td>{result[26]}</td>
                </tr>
                </tbody>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={`Уборка сои ${date.current}`} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default SoyHarvest;