import React, {useState, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Table} from "react-bootstrap";
import TableBody from "./TableBody";


const MilkShp = observer((props) => {
    const regionList = props.rowName.map(region => (
        <TableBody key={region.name} rowName={region.name}></TableBody>
    ))

    return (
        <Table
            striped bordered hover
            style={{textAlign: "center"}}
        >
            <thead>
            <tr>
                <th rowSpan={3}>Наименование района</th>
                <th colSpan={6}>Валовый надой молока, тонн</th>
                <th colSpan={3}>Суточный надой молоко на корову, кг</th>
                <th rowSpan={3}>Реализовано в зачете, т</th>
                <th rowSpan={3}>Реализовано в физ. весе, т</th>
                <th rowSpan={3}>% товарности</th>
                <th rowSpan={3}></th>
            </tr>
            <tr>
                <th colSpan={3}>С начала года</th>
                <th colSpan={3}>В т.ч. за день</th>
                <th rowSpan={2}>2021</th>
                <th rowSpan={2}>2022</th>
                <th rowSpan={2}>Разница</th>
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
            {/*<tfoot>
                <tr>
                    <td colSpan={13}><Button style={{padding: "2px", margin: "10px"}} type="submit">Отправить</Button></td>
                </tr>
            </tfoot>*/}
        </Table>
    );
});

export default MilkShp;