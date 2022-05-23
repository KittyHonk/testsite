import React, {useRef, useState, useEffect, useImperativeHandle, useContext} from 'react';
import InputField from "../InputField";
import {checkBeetHarvest, createBeetHarvest, getAllBeetHarvest} from "../../http/TableApi";
import moment from "moment";
import {Context} from "../../index";


const TableBody = React.forwardRef((props, ref) => {
    const {user} = useContext(Context)
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: []}])
    let date = useRef(moment(new Date (Date.now())).format('YYYY-MM-DD'))

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
    } 

    useEffect(() => {
        for (let key in refList) {
            refList[key].current.value = ''
        }
    }, [refList])

    useEffect(() => {
        checkBeetHarvest(row_owner, date.current).then(data => {
            getAllBeetHarvest(row_owner, date.current).then(data => {
                setValue(data)
            })
        })
    }, [date.current])

    useImperativeHandle(ref, () => ({
        newRow (date) {
            createBeetHarvest(
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
            ).then(data => {
                getAllBeetHarvest(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date.current = newDate
            getAllBeetHarvest(row_owner, date.current).then(data => {
                setValue(data)
            })
        },
    }))

    if (value.length !== 0){
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField user={user.role} start={value[0].value1} ref={refList.ref0}>{value[0].value1}</InputField></td>
                <td><InputField start={value[0].value2} ref={refList.ref1}>{value[0].value2}</InputField></td>
                <td>{value[0].result12}</td>
                <td><InputField start={value[0].value3} ref={refList.ref2}>{value[0].value3}</InputField></td>
                <td>{value[0].result24}</td>
                <td>{value[0].result25}</td>
                <td><InputField start={value[0].value4} ref={refList.ref3}>{value[0].value4}</InputField></td>
                <td><InputField start={value[0].value5} ref={refList.ref4}>{value[0].value5}</InputField></td>
                <td><InputField start={value[0].value6} ref={refList.ref5}>{value[0].value6}</InputField></td>
                <td><InputField start={value[0].value7} ref={refList.ref6}>{value[0].value7}</InputField></td>
                <td><InputField start={value[0].value8} ref={refList.ref7}>{value[0].value8}</InputField></td>
                <td><InputField start={value[0].value9} ref={refList.ref8}>{value[0].value9}</InputField></td>
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
                <td></td>
                <td></td>
                <td><InputField ref={refList.ref3}></InputField></td>
                <td><InputField ref={refList.ref4}></InputField></td>
                <td><InputField ref={refList.ref5}></InputField></td>
                <td><InputField ref={refList.ref6}></InputField></td>
                <td><InputField ref={refList.ref7}></InputField></td>
                <td><InputField ref={refList.ref8}></InputField></td>
            </tr>
        );
    }
});

export default TableBody;