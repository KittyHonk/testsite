import React, {useRef, useState, useEffect, useContext, useImperativeHandle} from 'react';
import InputField from "../InputField";
import {checkForageHarvest, createForageHarvest, getAllForageHarvest} from "../../http/TableApi";
import {Context} from "../../index";


const TableBody = React.forwardRef((props, ref) => {
    const {user} = useContext(Context)
    let date = new Date(Date.now())
    date = date.toISOString().slice(0, 10)
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: [0]}])

    const refList = {
        ref0: useRef(),
        ref1: useRef(),
        ref2: useRef(),
        ref3: useRef(),
        ref4: useRef(),
        ref5: useRef(),
        ref6: useRef(),
        ref7: useRef(),
    }

    useEffect(() => {
        checkForageHarvest(row_owner, date).then(data => {
            getAllForageHarvest(row_owner, date).then(data => {
                setValue(data)
            })
        })
    }, [])


    useImperativeHandle(ref, () => ({
        newRow (date) {
            createForageHarvest(
                row_owner,
                date,
                refList.ref0.current.value || (value[0].value1 || "0"),
                refList.ref1.current.value || (value[0].value2 || "0"),
                refList.ref2.current.value || (value[0].value3 || "0"),
                refList.ref3.current.value || (value[0].value4 || "0"),
                refList.ref4.current.value || (value[0].value5 || "0"),
                refList.ref5.current.value || (value[0].value6 || "0"),
                refList.ref6.current.value || (value[0].value7 || "0"),
                refList.ref7.current.value || (value[0].value8 || "0"),
            ).then(() => {
                getAllForageHarvest(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date = newDate
            getAllForageHarvest(row_owner, date).then(data => {
                setValue(data)
            })
        },
    }))


    if (value.length !== 0){
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField user={user.role} start={value[0].value1} ref={refList.ref0}></InputField></td>
                <td><InputField start={value[0].value2} ref={refList.ref1}></InputField></td>
                <td>{value[0].result12}</td>
                <td><InputField user={user.role} start={value[0].value3} ref={refList.ref2}></InputField></td>
                <td><InputField start={value[0].value4} ref={refList.ref3}></InputField></td>
                <td>{value[0].result34}</td>
                <td><InputField user={user.role} start={value[0].value5} ref={refList.ref4}></InputField></td>
                <td><InputField start={value[0].value6} ref={refList.ref5}></InputField></td>
                <td>{value[0].result56}</td>
                <td><InputField start={value[0].value7} ref={refList.ref6}></InputField></td>
                <td><InputField start={value[0].value8} ref={refList.ref7}></InputField></td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField user={user.role} ref={refList.ref0}></InputField></td>
                <td><InputField ref={refList.ref1}></InputField></td>
                <td></td>
                <td><InputField user={user.role} ref={refList.ref2}></InputField></td>
                <td><InputField ref={refList.ref3}></InputField></td>
                <td></td>
                <td><InputField user={user.role} ref={refList.ref4}></InputField></td>
                <td><InputField ref={refList.ref5}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref6}></InputField></td>
                <td><InputField ref={refList.ref7}></InputField></td>
            </tr>
        );
    }
});

export default TableBody;