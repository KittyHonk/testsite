import React, {useRef, useState, useEffect} from 'react';
import InputField from "../InputField";
import {createMilkShp, getAllMilkShp} from "../../http/TableApi";
import {Button} from "react-bootstrap";


const TableBody = (props) => {
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: []}])

    const refList = [
        {id: 0, ref0: useRef()},
        {id: 1, ref1: useRef()},
        {id: 2, ref2: useRef()},
        {id: 3, ref3: useRef()},
        {id: 4, ref4: useRef()},
        {id: 5, ref5: useRef()},
        {id: 6, ref6: useRef()},
        {id: 7, ref7: useRef()},
    ]

    useEffect(() => {
        getAllMilkShp(row_owner).then(data => {
            setValue(data)
        })
    }, [])

    const newRow = () => {
        createMilkShp(
            row_owner,
            refList[0].ref0.current.value,
            refList[1].ref1.current.value,
            refList[2].ref2.current.value,
            refList[3].ref3.current.value,
            refList[4].ref4.current.value,
            refList[5].ref5.current.value,
            refList[6].ref6.current.value,
            refList[7].ref7.current.value,
        ).then(() => {
            refList[0].ref0.current.value = null
            refList[1].ref1.current.value = null
            refList[2].ref2.current.value = null
            refList[3].ref3.current.value = null
            refList[4].ref4.current.value = null
            refList[5].ref5.current.value = null
            refList[6].ref6.current.value = null
            refList[7].ref7.current.value = null
            }
        ).finally(() => {
            getAllMilkShp(row_owner).then(data => {
                setValue(data)
            })
        })
    }

    if (value.length !== 0){
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField start={value[0].value1} ref={refList[0].ref0}></InputField></td>
                <td><InputField start={value[0].value2} ref={refList[1].ref1}></InputField></td>
                <td>{value[0].result12}</td>
                <td><InputField start={value[0].value3} ref={refList[2].ref2}></InputField></td>
                <td><InputField start={value[0].value4} ref={refList[3].ref3}></InputField></td>
                <td>{value[0].result34}</td>
                <td><InputField start={value[0].value5} ref={refList[4].ref4}></InputField></td>
                <td><InputField start={value[0].value6} ref={refList[5].ref5}></InputField></td>
                <td>{value[0].result56}</td>
                <td><InputField start={value[0].value7} ref={refList[6].ref6}></InputField></td>
                <td><InputField start={value[0].value8} ref={refList[7].ref7}></InputField></td>
                <td>{value[0].result48}</td>
                <td><Button onClick={newRow}>Отправить</Button></td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField ref={refList[0].ref0}></InputField></td>
                <td><InputField ref={refList[1].ref1}></InputField></td>
                <td></td>
                <td><InputField ref={refList[2].ref2}></InputField></td>
                <td><InputField ref={refList[3].ref3}></InputField></td>
                <td></td>
                <td><InputField ref={refList[4].ref4}></InputField></td>
                <td><InputField ref={refList[5].ref5}></InputField></td>
                <td></td>
                <td><InputField ref={refList[6].ref6}></InputField></td>
                <td><InputField ref={refList[7].ref7}></InputField></td>
                <td></td>
                <td><Button onClick={newRow}>Отправить</Button></td>
            </tr>
        );
    }
};

export default TableBody;