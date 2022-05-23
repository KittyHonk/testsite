import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllSowSpringCrop} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css'
import Export from '../Export';
import moment from "moment";


const SowSpringCrop = observer((props) => {
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
                await getAllSowSpringCrop(props.rowName[i].name, date.current).then(data => {
                    valueList.push(...data)
                })
            }
        }
        return valueList
    }

    const calcField = (valueList) => {
        let sumList = new Array(42).fill(0)
        for (let i = 0; i < valueList.length; i++) {
            if (valueList[i] !== undefined) {
                sumList[0] += valueList[i].value1
                sumList[1] += valueList[i].sum1
                sumList[2] = ((sumList[1]/sumList[0])*100).toFixed(2)
                sumList[3] += valueList[i].value2
                sumList[4] += valueList[i].sum2
                sumList[5] = ((sumList[4]/sumList[3])*100).toFixed(2)
                sumList[6] += valueList[i].value3
                sumList[7] += valueList[i].value4
                sumList[8] += valueList[i].value5
                sumList[9] += valueList[i].value6
                sumList[10] += valueList[i].value7
                sumList[11] += valueList[i].value8
                sumList[12] += valueList[i].value9
                sumList[13] += valueList[i].value10
                sumList[14] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[15] += valueList[i].value11
                sumList[16] += valueList[i].value12
                sumList[17] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[18] += valueList[i].value13
                sumList[19] += valueList[i].value14
                sumList[20] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[21] += valueList[i].value15
                sumList[22] += valueList[i].value16
                sumList[23] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[24] += valueList[i].value17
                sumList[25] += valueList[i].value18
                sumList[26] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[27] += valueList[i].value19
                sumList[28] += valueList[i].value20
                sumList[29] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[30] += valueList[i].value21
                sumList[31] += valueList[i].value22
                sumList[32] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[33] += valueList[i].value23
                sumList[34] += valueList[i].value24
                sumList[35] = ((sumList[13]/sumList[12])*100).toFixed(2)
                sumList[36] += valueList[i].value25
                sumList[37] += valueList[i].value26
                sumList[38] += valueList[i].value27
                sumList[39] += valueList[i].value28
                sumList[40] += valueList[i].value29
                sumList[41] += valueList[i].value30
            }
        }
        setResult(sumList)
    }

    return (
        <div classTable="divMain">
            <div className="divSelect">
                <SelectDate
                    getDate={getDate}
                    key="Сев яровых"
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
                    <th colSpan={3}>Яровых сев всего тыс. га</th>
                    <th colSpan={8}>Ранние яровые зерновые и зернобобовые тыс. га</th>
                    <th>В т.ч. по ресу тыс. га</th>
                    <th colSpan={3}>Сев однолетних трав тыс. га</th>
                    <th colSpan={3}>Сев многолетних трав тыс. га</th>
                    <th colSpan={3}>Сахарная свекла тыс. га</th>
                    <th colSpan={3}>Сев подсолнечника трав тыс. га</th>
                    <th colSpan={3}>Сев кукурузы на зерно тыс. га</th>
                    <th colSpan={3}>Сев кукурузы на силос и з/к тыс. га</th>
                    <th colSpan={3}>Сев проса тыс. га</th>
                    <th colSpan={3}>Сев гречихи тыс. га</th>
                    <th>Сев рапса</th>
                    <th>Сев горчицы</th>
                    <th>Сев сои</th>
                    <th>Сев нута</th>
                    <th>Сев льна</th>
                    <th>Сев люпина</th>
                </tr>
                <tr>
                    <th></th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>Яровая пщеница</th>
                    <th>Ячмень</th>
                    <th>Горох</th>
                    <th>Овес</th>
                    <th>Прочие</th>
                    <th></th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>План</th>
                    <th>Посеяно</th>
                    <th>%</th>
                    <th>Факт тыс. га</th>
                    <th>Факт тыс. га</th>
                    <th>Факт тыс. га</th>
                    <th>Факт тыс. га</th>
                    <th>Факт тыс. га</th>
                    <th>Факт тыс. га</th>
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
                    <td>{result[20]}</td>
                    <td>{result[21]}</td>
                    <td>{result[22]}</td>
                    <td>{result[23]}</td>
                    <td>{result[24]}</td>
                    <td>{result[25]}</td>
                    <td>{result[26]}</td>
                    <td>{result[27]}</td>
                    <td>{result[28]}</td>
                    <td>{result[29]}</td>
                    <td>{result[30]}</td>
                    <td>{result[31]}</td>
                    <td>{result[32]}</td>
                    <td>{result[33]}</td>
                    <td>{result[34]}</td>
                    <td>{result[35]}</td>
                    <td>{result[36]}</td>
                    <td>{result[37]}</td>
                    <td>{result[38]}</td>
                    <td>{result[39]}</td>
                    <td>{result[40]}</td>
                    <td>{result[41]}</td>
                </tr>
                </tbody>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={`Сев яровых ${date.current}`} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default SowSpringCrop;