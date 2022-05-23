import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllVegetableHarvest} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css';
import Export from '../Export';
import moment from "moment";


const VegetableHarvest = observer((props) => {
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
                await getAllVegetableHarvest(props.rowName[i].name, date.current).then(data => {
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
        let sumList = new Array(66).fill(0)
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
                sumList[34] += valueList[i].value35
                sumList[35] += valueList[i].value36
                sumList[36] += valueList[i].value37
                sumList[37] += valueList[i].value38
                sumList[38] += valueList[i].value39
                sumList[39] += valueList[i].value40
                sumList[40] += valueList[i].value41
                sumList[41] += valueList[i].value42
                sumList[42] += valueList[i].value43
                sumList[43] += valueList[i].value44
                sumList[44] += valueList[i].value45
                sumList[45] += valueList[i].value46
                sumList[46] += valueList[i].value47
                sumList[47] += valueList[i].value48
                sumList[48] += valueList[i].value49
                sumList[49] += valueList[i].value50
                sumList[50] += valueList[i].value51
                sumList[51] += valueList[i].value52
                sumList[52] += valueList[i].value53
                sumList[53] += valueList[i].value54
                sumList[54] += valueList[i].value55
                sumList[55] += valueList[i].value56
                sumList[56] += valueList[i].value57
                sumList[57] += valueList[i].value58
                sumList[58] += valueList[i].value59
                sumList[59] += valueList[i].value60
                sumList[60] += valueList[i].value61
                sumList[61] += valueList[i].value62
                sumList[62] += valueList[i].value63
                sumList[63] += valueList[i].value64
                sumList[64] += valueList[i].value65
                sumList[65] += valueList[i].value66
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
                    key="Уборка овощей"
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
                    <th colSpan={6}>Картофель</th>
                    <th colSpan={6}>Капуста</th>
                    <th colSpan={6}>Столовая свекла</th>
                    <th colSpan={6}>Морковь столовая</th>
                    <th colSpan={6}>Лук-репка</th>
                    <th colSpan={6}>Чеснок</th>
                    <th colSpan={5}>Овощной горох</th>
                    <th colSpan={5}>Тыква</th>
                    <th colSpan={5}>Томаты</th>
                    <th colSpan={5}>Огурцы</th>
                    <th colSpan={5}>Кабачки</th>
                    <th colSpan={5}>Прочие</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Заложено, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Заложено, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Заложено, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Заложено, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Заложено, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Заложено, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
                    <th>Посевная площадь, га</th>
                    <th>Убрано, га</th>
                    <th>Собрано, тонн</th>
                    <th>Реализов, га</th>
                    <th>Ожидаемый ВС, тонн</th>
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
                    <td>{result[42]}</td>
                    <td>{result[43]}</td>
                    <td>{result[44]}</td>
                    <td>{result[45]}</td>
                    <td>{result[46]}</td>
                    <td>{result[47]}</td>
                    <td>{result[48]}</td>
                    <td>{result[49]}</td>
                    <td>{result[50]}</td>
                    <td>{result[51]}</td>
                    <td>{result[52]}</td>
                    <td>{result[53]}</td>
                    <td>{result[54]}</td>
                    <td>{result[55]}</td>
                    <td>{result[56]}</td>
                    <td>{result[57]}</td>
                    <td>{result[58]}</td>
                    <td>{result[59]}</td>
                    <td>{result[60]}</td>
                    <td>{result[61]}</td>
                    <td>{result[62]}</td>
                    <td>{result[63]}</td>
                    <td>{result[64]}</td>
                    <td>{result[65]}</td>
                </tr>
                </tbody>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={`Уборка овощей ${date.current}`} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default VegetableHarvest;