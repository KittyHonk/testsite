import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllLeftoverGrain} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css';
import Export from '../Export';
import moment from "moment";


const LeftoverGrain = observer((props) => {
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
                await getAllLeftoverGrain(props.rowName[i].name, date.current).then(data => {
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
        let sumList = new Array(34).fill(0)
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
                sumList[20] += valueList[i].value21
                sumList[21] += valueList[i].value22
                sumList[22] += valueList[i].value23
                sumList[23] += valueList[i].value24
                sumList[24] += valueList[i].value25
                sumList[25] += valueList[i].value26
                sumList[26] += valueList[i].value27
                sumList[27] += valueList[i].value28
                sumList[28] += valueList[i].value29
                sumList[29] += valueList[i].value30
                sumList[30] += valueList[i].value31
                sumList[31] += valueList[i].value32
                sumList[32] += valueList[i].value33
                sumList[33] += valueList[i].value34
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
                key="Остатки зерна"
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
                    <th colSpan={2}>Пщеница прод., тыс. тонн</th>
                    <th colSpan={2}>Пшеница фураж, тыс. тонн</th>
                    <th colSpan={2}>Рожь продовол, тыс. тонн</th>
                    <th colSpan={2}>Ячмень фуражный, тыс. тонн</th>
                    <th colSpan={2}>Подсолнечник, тыс. тонн</th>
                    <th colSpan={2}>Кукуруза, тыс. тонн</th>
                    <th colSpan={2}>Соевые бобы</th>
                    <th colSpan={2}>Картофель</th>
                    <th colSpan={2}>Капуста</th>
                    <th colSpan={2}>Лук, чеснок</th>
                    <th colSpan={2}>Морковь</th>
                    <th colSpan={2}>Огурцы</th>
                    <th colSpan={2}>Помидоры</th>
                    <th colSpan={2}>Свекла столовая</th>
                    <th colSpan={2}>Рапс</th>
                    <th colSpan={2}>Прочее</th>
                    <th colSpan={2}>Гречиха</th>
                </tr>
                <tr>
                    <th>Наименование района</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
                    <th>урожай 2021</th>
                    <th>урожай 2022</th>
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
                </tr>
                </tbody>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={"Остатки зерна"} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default LeftoverGrain;