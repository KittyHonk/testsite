import React, {useRef, useState, useEffect, useImperativeHandle, useContext} from 'react';
import InputField from "../InputField";
import {checkGsm, createGsm, getAllGsm} from "../../http/TableApi";
import {Context} from "../../index";
import moment from "moment";


const TableBody = React.forwardRef((props, ref) => {
    const {datecls} = useContext(Context)
    let date = useRef(new Date(moment(datecls.findDay(props.day)).format('YYYY-MM-DD')))
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
        ref8: useRef(),
        ref9: useRef(),
    }

    useEffect(() => {
        checkGsm(row_owner, date.current).then(data => {
            getAllGsm(row_owner, date.current).then(data => {
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
            createGsm(
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
                refList.ref8.current.value || (value[0].value9 || "0"),
                refList.ref9.current.value || (value[0].value10 || "0"),
            ).then(() => {
                getAllGsm(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date.current = newDate
            getAllGsm(row_owner, date.current).then(data => {
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
                <td><InputField start={value[0].value8} ref={refList.ref7}>{value[0].value8}</InputField></td>
                <td><InputField start={value[0].value9} ref={refList.ref8}>{value[0].value9}</InputField></td>
                <td><InputField start={value[0].value10} ref={refList.ref9}>{value[0].value10}</InputField></td>
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
                <td><InputField ref={refList.ref7}></InputField></td>
                <td><InputField ref={refList.ref8}></InputField></td>
                <td><InputField ref={refList.ref9}></InputField></td>
            </tr>
        );
    }
});

export default TableBody;