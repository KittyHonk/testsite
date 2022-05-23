import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllSunflowerHarvest} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css'
import Export from '../Export';
import moment from "moment";


const SunflowerHarvest = observer((props) => {
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
                await getAllSunflowerHarvest(props.rowName[i].name, date.current).then(data => {
                    valueList.push(...data)
                })
            }
        }
        return valueList
    }

    const calcField = (valueList) => {
        let sumList = new Array(10).fill(0)
        for (let i = 0; i < valueList.length; i++) {
            if (valueList[i] !== undefined) {
                sumList[0] += valueList[i].value1
                sumList[1] += valueList[i].value2
                sumList[2] = ((sumList[1]/sumList[0])*100).toFixed(2)
                sumList[3] += valueList[i].value3
                sumList[4] = (((sumList[3]*10000))/(sumList[1]*1000)).toFixed(2)
                sumList[5] += valueList[i].value4
                sumList[6] += valueList[i].value5
                sumList[7] += valueList[i].value6
                sumList[8] += valueList[i].value7
                sumList[9] += valueList[i].value8
            }
        }
        setResult(sumList)
    }

    return (
        <div classTable="divMain">
            <div className="divSelect">
                <SelectDate
                    getDate={getDate}
                    key="Уборка подсолнечника"
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
                    <th>Посевная площадь (план), тыс га</th>
                    <th>Убрана тыс. га</th>
                    <th>%</th>
                    <th>Валовый сбор тыс. тонн</th>
                    <th>Урожайность ц/га</th>
                    <th colSpan={4}>Из них участки гибридизации</th>
                    <th>Десикация тыс. га</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>План га</th>
                    <th>Факт га</th>
                    <th>ВС тонн</th>
                    <th>Урожайность</th>
                    <th></th>
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
                </tr>
                </tbody>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={`Уборка подсолнечника ${date.current}`} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default SunflowerHarvest;