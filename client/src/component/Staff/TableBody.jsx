import React, {useRef, useState, useEffect, useImperativeHandle, useContext} from 'react';
import InputField from "../InputField";
import {checkStaff, createStaff, getAllStaff} from "../../http/TableApi";
import {Context} from "../../index";
import moment from "moment";


const TableBody = React.forwardRef((props, ref) => {
    const {datecls} = useContext(Context)
    const {user} = useContext(Context)
    let date = useRef(moment(new Date(datecls.findMonthDay(props.day))).format('YYYY-MM-DD'))
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: [0]}])

    const refList = {
        ref0: useRef(), ref1: useRef(), ref2: useRef(), ref3: useRef(), ref4: useRef(), 
        ref5: useRef(), ref6: useRef(),
    } 

    useEffect(() => {
        checkStaff(row_owner, date.current).then(data => {
            getAllStaff(row_owner, date.current).then(data => {
                setValue(data)
            })
        })
    }, [date.current])

    useEffect(() => {
        for (let key in refList) {
            refList[key].current.value = ''
        }
    }, [refList])

    useImperativeHandle(ref, () => ({
        newRow (date) {
            createStaff(
                row_owner,
                date,
                refList.ref0.current.value || (value[0].value1 || "0"),
                refList.ref1.current.value || (value[0].value2 || "0"),
                refList.ref2.current.value || (value[0].value3 || "0"),
                refList.ref3.current.value || (value[0].value4 || "0"),
                refList.ref4.current.value || (value[0].value5 || "0"),
                refList.ref5.current.value || (value[0].value6 || "0"),
                refList.ref6.current.value || (value[0].value7 || "0"),
            ).then(() => {
                getAllStaff(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date.current = newDate
            getAllStaff(row_owner, date.current).then(data => {
                setValue(data)
            })
        },
    }))

    if (value.length !== 0){
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField start={value[0].value1} ref={refList.ref0}>{value[0].value1}</InputField></td>
                <td><InputField start={value[0].value2} ref={refList.ref1}>{value[0].value2}</InputField></td>
                <td><InputField start={value[0].value3} ref={refList.ref2}>{value[0].value3}</InputField></td>
                <td><InputField start={value[0].value4} ref={refList.ref3}>{value[0].value4}</InputField></td>
                <td><InputField start={value[0].value5} ref={refList.ref4}>{value[0].value5}</InputField></td>
                <td><InputField start={value[0].value6} ref={refList.ref5}>{value[0].value6}</InputField></td>
                <td><InputField start={value[0].value7} ref={refList.ref6}>{value[0].value7}</InputField></td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField ref={refList.ref0}></InputField></td>
                <td><InputField ref={refList.ref1}></InputField></td>
                <td><InputField ref={refList.ref2}></InputField></td>
                <td><InputField ref={refList.ref3}></InputField></td>
                <td><InputField ref={refList.ref4}></InputField></td>
                <td><InputField ref={refList.ref5}></InputField></td>
                <td><InputField ref={refList.ref6}></InputField></td>
            </tr>
        );
    }
});

export default TableBody;