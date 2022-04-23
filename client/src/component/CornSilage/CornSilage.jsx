import React, {useContext, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {Table, Form, Button} from "react-bootstrap";
import TableBody from "./TableBody";
import {Context} from "../../index";


const CornSilage = observer((props) => {
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
            <Form.Select aria-label="Default select example">
                <option value="1">2022.02</option>
                <option value="2">2022.03</option>
                <option value="3">2022.04</option>
            </Form.Select>
            <Table
                striped bordered hover
                style={{textAlign: "center"}}
            >
                <thead>
                <tr>
                    <th rowSpan={3}>Наименование района</th>
                    <th colSpan={4}>Уборка кукурузы на силос и зел. корм</th>
                    <th rowSpan={3}></th>
                </tr>
                <tr>
                    <th colSpan={2}>Площадь к уборке</th>
                    <th colSpan={2}>Заложено сил. массы</th>
                </tr>
                <tr>
                    <th>План тыс. га</th>
                    <th>Факт тыс. га</th>
                    <th>План тыс. тонн</th>
                    <th>Факт тыс. тонн</th>
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

export default CornSilage;