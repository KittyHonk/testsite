import React, {useRef, useState, useEffect, useImperativeHandle, useContext} from 'react';
import InputField from "../InputField";
import {checkReadyShTech, createReadyShTech, getAllReadyShTech} from "../../http/TableApi";
import {Context} from "../../index";


const TableBody = React.forwardRef((props, ref) => {
    const {datecls} = useContext(Context)
    let date = new Date()
    date = datecls.findDay(props.day).toISOString().slice(0,10)
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: [0]}])

    const refList = {
        ref0: useRef(), ref1: useRef(), ref2: useRef(), ref3: useRef(), ref4: useRef(), 
        ref5: useRef(), ref6: useRef(), ref7: useRef(), ref8: useRef(), ref9: useRef(),
        ref10: useRef(), ref11: useRef(), ref12: useRef(), ref13: useRef(), ref14: useRef(), 
        ref15: useRef(), ref16: useRef(), ref17: useRef(), ref18: useRef(), ref19: useRef(),
    }

    useEffect(() => {
        checkReadyShTech(row_owner, date).then(data => {
            getAllReadyShTech(row_owner, date).then(data => {
                setValue(data)
            })
        })
    }, [])

    useEffect(() => {
        refList.ref0.current.value = ''
        refList.ref1.current.value = ''
        refList.ref2.current.value = ''
        refList.ref3.current.value = ''
        refList.ref4.current.value = ''
        refList.ref5.current.value = ''
        refList.ref6.current.value = ''
        refList.ref7.current.value = ''
        refList.ref8.current.value = ''
        refList.ref9.current.value = ''
        refList.ref10.current.value = ''
        refList.ref11.current.value = ''
        refList.ref12.current.value = ''
        refList.ref13.current.value = ''
        refList.ref14.current.value = ''
        refList.ref15.current.value = ''
        refList.ref16.current.value = ''
        refList.ref17.current.value = ''
        refList.ref18.current.value = ''
        refList.ref19.current.value = ''
    }, [refList])

    useImperativeHandle(ref, () => ({
        newRow (date) {
            createReadyShTech(
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
                refList.ref10.current.value || (value[0].value11 || "0"),
                refList.ref11.current.value || (value[0].value12 || "0"),
                refList.ref12.current.value || (value[0].value13 || "0"),
                refList.ref13.current.value || (value[0].value14 || "0"),
                refList.ref14.current.value || (value[0].value15 || "0"),
                refList.ref15.current.value || (value[0].value16 || "0"),
                refList.ref16.current.value || (value[0].value17 || "0"),
                refList.ref17.current.value || (value[0].value18 || "0"),
                refList.ref18.current.value || (value[0].value19 || "0"),
                refList.ref19.current.value || (value[0].value20 || "0"),
            ).then(() => {
                getAllReadyShTech(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date = newDate
            getAllReadyShTech(row_owner, date).then(data => {
                setValue(data)
            })
        },
    }))

    if (value.length !== 0){
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField start={value[0].value1} ref={refList.ref0}></InputField></td>
                <td><InputField start={value[0].value2} ref={refList.ref1}></InputField></td>
                <td><InputField start={value[0].value3} ref={refList.ref2}></InputField></td>
                <td><InputField start={value[0].value4} ref={refList.ref3}></InputField></td>
                <td><InputField start={value[0].value5} ref={refList.ref4}></InputField></td>
                <td><InputField start={value[0].value6} ref={refList.ref5}></InputField></td>
                <td><InputField start={value[0].value7} ref={refList.ref6}></InputField></td>
                <td><InputField start={value[0].value8} ref={refList.ref7}></InputField></td>
                <td><InputField start={value[0].value9} ref={refList.ref8}></InputField></td>
                <td><InputField start={value[0].value10} ref={refList.ref9}></InputField></td>
                <td><InputField start={value[0].value11} ref={refList.ref10}></InputField></td>
                <td><InputField start={value[0].value12} ref={refList.ref11}></InputField></td>
                <td><InputField start={value[0].value13} ref={refList.ref12}></InputField></td>
                <td><InputField start={value[0].value14} ref={refList.ref13}></InputField></td>
                <td><InputField start={value[0].value15} ref={refList.ref14}></InputField></td>
                <td><InputField start={value[0].value16} ref={refList.ref15}></InputField></td>
                <td><InputField start={value[0].value17} ref={refList.ref16}></InputField></td>
                <td><InputField start={value[0].value18} ref={refList.ref17}></InputField></td>
                <td><InputField start={value[0].value19} ref={refList.ref18}></InputField></td>
                <td><InputField start={value[0].value20} ref={refList.ref19}></InputField></td>
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
                <td><InputField ref={refList.ref10}></InputField></td>
                <td><InputField ref={refList.ref11}></InputField></td>
                <td><InputField ref={refList.ref12}></InputField></td>
                <td><InputField ref={refList.ref13}></InputField></td>
                <td><InputField ref={refList.ref14}></InputField></td>
                <td><InputField ref={refList.ref15}></InputField></td>
                <td><InputField ref={refList.ref16}></InputField></td>
                <td><InputField ref={refList.ref17}></InputField></td>
                <td><InputField ref={refList.ref18}></InputField></td>
                <td><InputField ref={refList.ref19}></InputField></td>
            </tr>
        );
    }
});

export default TableBody;