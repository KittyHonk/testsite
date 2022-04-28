import React, {useRef, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Form, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";
import {collectDateMilkKfh} from "../../http/TableApi";
import SelectDate from "../SelectDate";


const MilkKfh = observer((props) => {
    const {user} = useContext(Context)
    const regionList = []
    const childRef = [
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),
    ]
    for (let i = 0; i < props.rowName.length; i++) {
        if ((props.rowName[i].name == user.region) || (user.role == "ADMIN")) {
            regionList.push(<TableBody ref={childRef[i]} key={props.rowName[i].name} rowName={props.rowName[i].name}/>)
        }
    }

    const submitAll = () => {
        childRef.map(ref => {
            try {
                ref.current.newRow()
            } catch (e) {

            }
        })
    }

    return (
        <div>
            <SelectDate key="Молоко КФХ" label="Молоко КФХ" func={collectDateMilkKfh} types="days"></SelectDate>
            <Table
                striped bordered hover
                style={{textAlign: "center"}}
            >
                <thead>
                <tr>
                    <th rowSpan={3}>Наименование района</th>
                    <th colSpan={6}>Валовый надой молока, тонн</th>
                    <th rowSpan={3}></th>
                </tr>
                <tr>
                    <th colSpan={3}>С начала года</th>
                    <th colSpan={3}>В т.ч. за день</th>
                </tr>
                <tr>
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
                        <td colSpan={13}><Button style={{padding: "2px", margin: "10px"}} type="submit" onClick={submitAll}>Отправить</Button></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
});

export default MilkKfh;