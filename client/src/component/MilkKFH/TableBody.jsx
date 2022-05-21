import React, {useRef, useState, useEffect, useImperativeHandle} from 'react';
import InputField from "../InputField";
import {checkMilkKfh, createMilkKfh, getAllMilkKfh} from "../../http/TableApi";
import moment from "moment";


const TableBody = React.forwardRef((props, ref) => {
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: []}])
    let date = useRef(moment(new Date (Date.now())).format('YYYY-MM-DD'))

    const refList = {
        ref0: useRef(),
        ref1: useRef(),
        ref2: useRef(),
        ref3: useRef(),
    }

    useEffect(() => {
        for (let key in refList) {
            refList[key].current.value = ''
        }
    }, [refList])

    useEffect(() => {
        checkMilkKfh(row_owner, date.current).then(data => {
            getAllMilkKfh(row_owner, date.current).then(data => {
                setValue(data)
            })
        })
    }, [date.current])

    useImperativeHandle(ref, () => ({
        newRow (date) {
            createMilkKfh(
                row_owner,
                date,
                refList.ref0.current.value || (value[0].value1 || "0"),
                refList.ref1.current.value || (value[0].value2 || "0"),
                refList.ref2.current.value || (value[0].value3 || "0"),
                refList.ref3.current.value || (value[0].value4 || "0"),
            ).then(() => {
                getAllMilkKfh(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date.current = newDate
            getAllMilkKfh(row_owner, date.current).then(data => {
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
                <td>{value[0].result12}</td>
                <td><InputField start={value[0].value3} ref={refList.ref2}>{value[0].value3}</InputField></td>
                <td><InputField start={value[0].value4} ref={refList.ref3}>{value[0].value4}</InputField></td>
                <td>{value[0].result34}</td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField ref={refList.ref0}></InputField></td>
                <td><InputField ref={refList.ref1}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref2}></InputField></td>
                <td><InputField ref={refList.ref3}></InputField></td>
                <td></td>
            </tr>
        );
    }
});

export default TableBody;