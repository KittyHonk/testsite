import React, {useRef, useState, useEffect, useContext, useImperativeHandle} from 'react';
import InputField from "../InputField";
import {Button} from "react-bootstrap";
import {checkCornSilage, createCornSilage, getAllCornSilage} from "../../http/TableApi";
import {Context} from "../../index";


const TableBody = React.forwardRef((props, ref) => {
    const {user} = useContext(Context)
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: [0]}])
    let date = new Date(Date.now())
    date = date.toISOString().slice(0, 10)

    const refList = {
        ref0: useRef(),
        ref1: useRef(),
        ref2: useRef(),
        ref3: useRef(),
    }

    useImperativeHandle(ref, () => ({
        newRow () {
            createCornSilage(
                row_owner,
                refList.ref0.current.value || (value[0].value1 || "0"),
                refList.ref1.current.value || (value[0].value2 || "0"),
                refList.ref2.current.value || (value[0].value3 || "0"),
                refList.ref3.current.value || (value[0].value4 || "0"),
            ).then(() => {
                }
            ).finally(() => {
                getAllCornSilage(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        }
    }))

    useEffect(() => {
        checkCornSilage(row_owner, date).then()
        getAllCornSilage(row_owner, date).then(data => {
            setValue(data)
        }).finally()
    }, [])

    if (value.length !== 0){
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField user={user.role} start={value[0].value1} ref={refList.ref0}></InputField></td>
                <td><InputField start={value[0].value2} ref={refList.ref1}></InputField></td>
                <td><InputField user={user.role} start={value[0].value3} ref={refList.ref2}></InputField></td>
                <td><InputField start={value[0].value4} ref={refList.ref3}></InputField></td>
                {/*<td><Button onClick={newRow}>Отправить</Button></td>*/}
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField user={user.role} ref={refList.ref0}></InputField></td>
                <td><InputField ref={refList.ref1}></InputField></td>
                <td><InputField user={user.role} ref={refList.ref2}></InputField></td>
                <td><InputField ref={refList.ref3}></InputField></td>
                {/*<td><Button onClick={newRow}>Отправить</Button></td>*/}
            </tr>
        );
    }
});

export default TableBody;