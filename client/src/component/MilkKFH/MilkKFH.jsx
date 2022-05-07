import React, {useRef, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateMilkKfh} from "../../http/TableApi";
import SelectDate from "../SelectDate";
import '../../styles/Component.css';
import TableExport from 'tableexport';


const MilkKfh = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    let date = new Date(Date.now())
    date = date.toISOString().slice(0, 10)
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
                ref.current.newRow(date)
            } catch (e) {

            }
        })
    }

    const setAllChildDate = () => {
        try {
            childRef.forEach(ref => {
                ref.current.setNewDate(date)
            })
        } catch (e) {

        }
    }

    const getDate = (newDate) => {
        date = newDate
        setAllChildDate()
    }

    const tableRef = useRef()
    const exportFile = () => {
        const fileToExport = TableExport(tableRef.current, {
            headers: true,
            footers: false,
            formats: ["xlsx"],
            filename: "Молоко КФХ",
            boostrap: true,
            exportButtons: true,
            trimWhitespace: false,
            sheetname: `${date}`,
        })
        return fileToExport
    }

    return (
        <div style={{overflow: "auto"}}>
            <div>
                <SelectDate getDate={getDate} startDate={date} key="Молоко КФХ" label="Молоко КФХ" func={collectDateMilkKfh} types="days"></SelectDate>
            </div>
            <Table
                striped bordered hover
                style={{textAlign: "center", marginTop: "2%"}}
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
                </tbody>
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-center">
                <Button style={{padding: "10px", margin: "20px auto 0 auto", position: "fixed"}} type="submit" onClick={submitAll}>Отправить</Button>
                <Button style={{padding: "10px", margin: "20px 200px 0 auto", position: "fixed"}}type="submit" onClick={exportFile}>Экспорт</Button>
            </div>
        </div>
    );
});

export default MilkKfh;