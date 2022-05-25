import React, {useRef, useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllGrainForageBalance} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css';
import Export from '../Export';
import moment from "moment";
import Select from "react-select";
import {CategorySelect, CultureSelect} from "./Data";


const SowPotato = observer((props) => {
    const {user} = useContext(Context)
    const {datecls} = useContext(Context)
    const {store} = useContext(Context)
    const [result, setResult] = useState([])
    const regionList = []
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
                ref.current.newRow(date.current, store.getCulture.value, store.getCategory.value)
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
                await getAllGrainForageBalance(props.rowName[i].name, date.current, store.getCulture.value, store.getCategory.value).then(data => {
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
        let sumList = new Array(22).fill(0)
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
                sumList[19] = ((sumList[1]-sumList[0]) || 0)
                sumList[20] = ((sumList[4]*10)/sumList[3]).toFixed(2)
                sumList[21] = ((sumList[5]*10)/sumList[3]).toFixed(2)
            }
        }
        setResult(sumList)
    }

    useEffect(() => {
        getValue().then(data => {
            calcField(data)
        })
    }, [store.getCategory, store.getCulture])

    return (
        <div classTable="divMain">
            <div className="d-flex align-content-center divSelect">
                <div>
                    <SelectDate
                        getDate={getDate}
                        key="Зернофуражный баланс"
                        types="days">
                    </SelectDate>
                </div>
                <div>
                    <Select
                        className="divSelectOption"
                        closeMenuOnSelect={true}
                        options={CategorySelect}
                        value={store.getCategory}
                        onChange={(e) => {store.setCategory(e)}}>
                    </Select>
                </div>
                <div>
                    <Select
                        className="divSelectOption"
                        closeMenuOnSelect={true}
                        options={CultureSelect}
                        value={store.getCulture}
                        onChange={(e) => {store.setCulture(e)}}>
                    </Select>
                </div>
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
                    <th>Посевная площадь по 4-СХ, га</th>
                    <th>Погибло посевов, га</th>
                    <th>Площадь к уборке, га</th>
                    <th>Скошено, га</th>
                    <th>Обмолочено, га</th>
                    <th>Урожайность в пер. оприх. весе, ц/га</th>
                    <th>Урожайность в весе после дороботки, ц/га</th>
                    <th colSpan={2}>Валовый сбор</th>
                    <th colSpan={3}>Расход</th>
                    <th>Остаток товарного зерна, тонн</th>
                    <th colSpan={8}>Реализовано</th>
                    <th>Остаток нериализован. зерна, тонн</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>В пер. оприх. весе, тонн</th>
                    <th>За мин. рефакции, тонн</th>
                    <th>На семена, тонн</th>
                    <th>На корм скоту, тонн</th>
                    <th>Работникам хоз., тонн</th>
                    <th></th>
                    <th colSpan={2}>Предприятиями переработки и ком. струк.</th>
                    <th colSpan={2}>Арендная плата за землю</th>
                    <th colSpan={2}>Перер. в хоз весе</th>
                    <th colSpan={2}>Всего реализованно</th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Тонн</th>
                    <th>Тыс. руб</th>
                    <th>Тонн</th>
                    <th>Тыс. руб</th>
                    <th>Тонн</th>
                    <th>Тыс. руб</th>
                    <th>Тонн</th>
                    <th>Тыс. руб</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="bodyTable">
                {regionList}
                <tr>
                    <td>Сумма</td>
                    <td>{result[0]}</td>
                    <td>{result[1]}</td>
                    <td>{result[19]}</td>
                    <td>{result[2]}</td>
                    <td>{result[3]}</td>
                    <td>{result[20]}</td>
                    <td>{result[21]}</td>
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
                </tr>
                </tbody>
            </Table>
            </div>
            <div className="bottomBar">
                <Button className="submitButton" type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={`Зернофуражный баланс ${date.current}`} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default SowPotato;