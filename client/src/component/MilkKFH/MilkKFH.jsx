import React, {useRef, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {getAllMilkKfh} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css';
import Export from '../Export';
import moment from "moment";


const MilkKfh = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    let date = useRef(new Date(moment(Date.now()).format('YYYY-MM-DD')))
    const [result, setResult] = useState([])
    let valueList = []
    let tableRef = useRef()
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
                await getAllMilkKfh(props.rowName[i].name, date.current).then(data => {
                    valueList.push(...data)
                })
            }
        }
        return valueList
    }

    const calcField = (valueList) => {
        let sumList = new Array(6).fill(0)
        for (let i = 0; i < valueList.length; i++) {
            if (valueList[i] !== undefined) {
                sumList[0] += valueList[i].value1
                sumList[1] += valueList[i].value2
                sumList[2] += valueList[i].result12
                sumList[3] += valueList[i].value3
                sumList[4] += valueList[i].value4
                sumList[5] += valueList[i].result34
            }
        }
        setResult(sumList)
    }

    return (
        <div style={{overflow: "auto"}}>
            <div style={{margin: "10px"}}>
                <SelectDate 
                    getDate={getDate}
                    key="Молоко КФХ"
                    types="days">
                </SelectDate>
            </div>
            <Table
                striped bordered hover
                style={{textAlign: "center"}}
                ref={tableRef}
            >
                <thead>
                <tr>
                    <th></th>
                    <th colSpan={6}>Валовый надой молока, тонн</th>
                </tr>
                <tr>
                    <th></th>
                    <th colSpan={3}>С начала года</th>
                    <th colSpan={3}>В т.ч. за день</th>
                </tr>
                <tr>
                    <th>Наименование района</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>Разница</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>Разница</th>
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
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-center">
                <Button style={{margin: "23px 45% 0 55%", position: "fixed"}} type="submit" onClick={submitAll}>Отправить</Button>
                <Export fileName={"Молоко КФХ"} tableRef={tableRef}/>
            </div>
        </div>
    );
});

export default MilkKfh;