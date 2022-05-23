import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllSowPerennialPlanting} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css';
import Export from '../Export';
import moment from "moment";


const SowPerennialPlanting = observer((props) => {
    const {user} = useContext(Context)
    const {datecls} = useContext(Context)
    const [result, setResult] = useState([])
    const regionList = []
    const day = 1
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
        console.log(day)
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
                await getAllSowPerennialPlanting(props.rowName[i].name, date.current).then(data => {
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
        let sumList = new Array(11).fill(0)
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
                    key="Закладка мн. насаждений"
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
                    <th>Наименование района</th>
                    <th>Закладка многолетных насаждений всего, га</th>
                    <th colSpan={4}>В том числе</th>
                    <th>Уход за многолетними насаждениями всего, га</th>
                    <th colSpan={4}>В том числе</th>
                    <th>Раскарчевка старых, вышедших из эксплуатации садов, га </th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Многолетних плодовых, ягодных, кустарник. и орехоплодовых насаждений, га</th>
                    <th>Сады интенсивного типа, га</th>
                    <th colSpan={2}>Плодовых и ягодных питомников, га</th>
                    <th></th>
                    <th>Многолетних плодовых, ягодных, кустарник. и орехоплодовых насаждений, га</th>
                    <th>Сады интенсивного типа, га</th>
                    <th colSpan={2}>Плодовых и ягодных питомников, га</th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Всего</th>
                    <th>Из них плодовых</th>
                    <th></th>
                    <th></th>
                    <th>Всего</th>
                    <th>Из них плодовых</th>
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
                    <td>{result[10]}</td>
                </tr>
                </tbody>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={`Закладка мн. насаждений ${date.current}`} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default SowPerennialPlanting;