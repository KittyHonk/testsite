import React, {useRef, useContext, useState, useEffect, version, useCallback} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateGsm, getAllGsm} from "../../http/TableApi";
import SelectDate from "../SelectDate";


const Gsm = observer((props) => {
    const {user} = useContext(Context)
    const {datecls} = useContext(Context)
    const regionList = []
    let valueList = []
    const [result, setResult] = useState([])
    let date = useRef(new Date(datecls.findDay(4).toISOString().slice(0, 10)))

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

    useEffect(() => {
        sum.current = result
    }, []) 

    const measuredRef = useCallback(() => {
        console.log("Ref change")
    }, []);

    let sum = measuredRef()

    const submitAll = () => {
        childRef.map(ref => {
            try {
                ref.current.newRow(date.current)
            } catch (e) {}
        })
        getValue().then(data => {
            sum.current = calcField(data)
        })
    }

    const setAllChildDate = () => {
        try {
            childRef.map(ref => {
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
                await getAllGsm(props.rowName[i].name, date.current).then(data => {
                    valueList.push(...data)
                })
            }
        }
        return valueList
    }

    const getDate = (newDate) => {
        date.current = newDate
        setAllChildDate()
    }

    const calcField = (valueList) => {
        let sumList = new Array(10).fill(0)
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
        setResult(sumList)
    }

    return (
        <div>
            <Table
                striped bordered hover
                style={{textAlign: "center"}}
            >
                <thead>
                <tr>
                    <th><SelectDate getDate={getDate} startDate={date.current} day={4} key="ГСМ" label="ГСМ" func={collectDateGsm} types="weeks"></SelectDate></th>
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
                        <td colSpan={13}><Button style={{padding: "2px", margin: "10px"}} type="submit" onClick={submitAll}>Отправить</Button></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
});

export default Gsm;