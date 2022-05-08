import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateHarvesters, getAllHarvesters} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css';
import Export from '../Export';


const Harvesters = observer((props) => {
    const {user} = useContext(Context)
    const {datecls} = useContext(Context)
    const [result, setResult] = useState([])
    const regionList = []
    let valueList = []
    let sum = useRef()
    let tableRef = useRef()
    let date = useRef(new Date(datecls.findDay(4)).toISOString().slice(0, 10))
    
    const childRef = [
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
    ]
    for (let i = 0; i < props.rowName.length; i++) {
        if ((props.rowName[i].name === user.region) || (user.role === "ADMIN")) {
            regionList.push(<TableBody day={4} ref={childRef[i]} key={props.rowName[i].name} rowName={props.rowName[i].name}/>)
        }
    }
    
    const submitAll = () => {
        childRef.forEach(ref => {
            try {
                ref.current.newRow(date.current)
            } catch (e) {}
        })
        setTimeout(() => getValue().then(data => {
            sum.current = calcField(data)
        }), 100)
    }

    const setAllChildDate = () => {
        try {
            childRef.forEach(ref => {
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
                await getAllHarvesters(props.rowName[i].name, date.current).then(data => {
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
            sum.current = calcField(data)
        })
    }

    const calcField = (valueList) => {
        let sumList = new Array(28).fill(0)
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
        <div style={{overflow: "auto"}}>
            <div>
            <SelectDate 
                getDate={getDate} 
                startDate={date.current} 
                key="Комбайны" 
                label="Комбайны" 
                func={collectDateHarvesters} 
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
                    <th colSpan={6}>Собственные</th>
                    <th colSpan={3}>Привлеченные</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th colSpan={2}>Всего</th>
                    <th colSpan={2}>В т.ч. отечественные</th>
                    <th colSpan={2}>В т.ч. импортные</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Название района</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Наличие</th>
                    <th>Исправно</th>
                    <th>Всего</th>
                    <th>В т.ч. отечественные</th>
                    <th>В т.ч. импортные</th>
                    <th>Принимают участие в обмолоте</th>
                    <th>Дневная выработка на 1 ком. в день на обмолоте</th>
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
                    <td>{result[10]}</td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-center">
                <Button style={{margin: "23px 45% 0 55%", position: "fixed"}} type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={"Комбайны"} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default Harvesters;