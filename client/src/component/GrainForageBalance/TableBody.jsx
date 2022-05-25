import React, {useRef, useState, useEffect, useImperativeHandle, useContext} from 'react';
import InputField from "../InputField";
import {checkGrainForageBalance, createGrainForageBalance, getAllGrainForageBalance} from "../../http/TableApi";
import {Context} from "../../index";
import moment from "moment";

const TableBody = React.forwardRef((props, ref) => {
    const {datecls} = useContext(Context)
    const {store} = useContext(Context)
    let date = useRef(moment(new Date (Date.now())).format('YYYY-MM-DD'))
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: [0]}])

    const refList = {
        ref0: useRef(), ref1: useRef(), ref2: useRef(), ref3: useRef(), ref4: useRef(), 
        ref5: useRef(), ref6: useRef(), ref7: useRef(), ref8: useRef(), ref9: useRef(),
        ref10: useRef(), ref11: useRef(), ref12: useRef(), ref13: useRef(), ref14: useRef(), 
        ref15: useRef(), ref16: useRef(), ref17: useRef(), ref18: useRef(),
    } 

    useEffect(() => {
        checkGrainForageBalance(row_owner, date.current, store.getCulture.value, store.getCategory.value).then(data => {
            getAllGrainForageBalance(row_owner, date.current, store.getCulture.value, store.getCategory.value).then(data => {
                setValue(data)
            })
        })
    }, [date.current, store.getCulture, store.getCategory])

    useEffect(() => {
        for (let key in refList) {
            refList[key].current.value = ''
        }
    }, [refList])

    useImperativeHandle(ref, () => ({
        newRow (date) {
            createGrainForageBalance(
                row_owner,
                date,
                store.getCulture.value,
                store.getCategory.value,
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
            ).then(() => {
                getAllGrainForageBalance(row_owner, date, store.getCulture.value, store.getCategory.value).then(data => {
                    setValue(data)
                })
            })
        },

        setNewDate (newDate) {
            date.current = newDate
            getAllGrainForageBalance(row_owner, date.current, store.getCulture.value, store.getCategory.value).then(data => {
                setValue(data)
            })
        },
    }))

    if ((store.getCategory.value === "По всем категориям хозяйства") || (store.getCulture.value === "По всем зерновым")) {
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField readonly={true} start={value[0].value1} ref={refList.ref0}>{value[0].value1}</InputField></td>
                <td><InputField readonly={true} start={value[0].value2} ref={refList.ref1}>{value[0].value2}</InputField></td>
                <td>{value[0].result12}</td>
                <td><InputField readonly={true} start={value[0].value3} ref={refList.ref2}>{value[0].value3}</InputField></td>
                <td><InputField readonly={true} start={value[0].value4} ref={refList.ref3}>{value[0].value4}</InputField></td>
                <td>{value[0].result45}</td>
                <td>{value[0].result46}</td>
                <td><InputField readonly={true} start={value[0].value5} ref={refList.ref4}>{value[0].value5}</InputField></td>
                <td><InputField readonly={true} start={value[0].value6} ref={refList.ref5}>{value[0].value6}</InputField></td>
                <td><InputField readonly={true} start={value[0].value7} ref={refList.ref6}>{value[0].value7}</InputField></td>
                <td><InputField readonly={true} start={value[0].value8} ref={refList.ref7}>{value[0].value8}</InputField></td>
                <td><InputField readonly={true} start={value[0].value9} ref={refList.ref8}>{value[0].value9}</InputField></td>
                <td><InputField readonly={true} start={value[0].value10} ref={refList.ref9}>{value[0].value10}</InputField></td>
                <td><InputField readonly={true} start={value[0].value11} ref={refList.ref10}>{value[0].value11}</InputField></td>
                <td><InputField readonly={true} start={value[0].value12} ref={refList.ref11}>{value[0].value12}</InputField></td>
                <td><InputField readonly={true} start={value[0].value13} ref={refList.ref12}>{value[0].value13}</InputField></td>
                <td><InputField readonly={true} start={value[0].value14} ref={refList.ref13}>{value[0].value14}</InputField></td>
                <td><InputField readonly={true} start={value[0].value15} ref={refList.ref14}>{value[0].value15}</InputField></td>
                <td><InputField readonly={true} start={value[0].value16} ref={refList.ref15}>{value[0].value16}</InputField></td>
                <td><InputField readonly={true} start={value[0].value17} ref={refList.ref16}>{value[0].value17}</InputField></td>
                <td><InputField readonly={true} start={value[0].value18} ref={refList.ref17}>{value[0].value18}</InputField></td>
                <td><InputField readonly={true} start={value[0].value19} ref={refList.ref18}>{value[0].value19}</InputField></td>
            </tr>
        );
    } else {
        if (value.length !== 0){
            return (
                <tr>
                    <td>{row_owner}</td>
                    <td><InputField start={value[0].value1} ref={refList.ref0}>{value[0].value1}</InputField></td>
                    <td><InputField start={value[0].value2} ref={refList.ref1}>{value[0].value2}</InputField></td>
                    <td>{value[0].result12}</td>
                    <td><InputField start={value[0].value3} ref={refList.ref2}>{value[0].value3}</InputField></td>
                    <td><InputField start={value[0].value4} ref={refList.ref3}>{value[0].value4}</InputField></td>
                    <td>{value[0].result45}</td>
                    <td>{value[0].result46}</td>
                    <td><InputField start={value[0].value5} ref={refList.ref4}>{value[0].value5}</InputField></td>
                    <td><InputField start={value[0].value6} ref={refList.ref5}>{value[0].value6}</InputField></td>
                    <td><InputField start={value[0].value7} ref={refList.ref6}>{value[0].value7}</InputField></td>
                    <td><InputField start={value[0].value8} ref={refList.ref7}>{value[0].value8}</InputField></td>
                    <td><InputField start={value[0].value9} ref={refList.ref8}>{value[0].value9}</InputField></td>
                    <td><InputField start={value[0].value10} ref={refList.ref9}>{value[0].value10}</InputField></td>
                    <td><InputField start={value[0].value11} ref={refList.ref10}>{value[0].value11}</InputField></td>
                    <td><InputField start={value[0].value12} ref={refList.ref11}>{value[0].value12}</InputField></td>
                    <td><InputField start={value[0].value13} ref={refList.ref12}>{value[0].value13}</InputField></td>
                    <td><InputField start={value[0].value14} ref={refList.ref13}>{value[0].value14}</InputField></td>
                    <td><InputField start={value[0].value15} ref={refList.ref14}>{value[0].value15}</InputField></td>
                    <td><InputField start={value[0].value16} ref={refList.ref15}>{value[0].value16}</InputField></td>
                    <td><InputField start={value[0].value17} ref={refList.ref16}>{value[0].value17}</InputField></td>
                    <td><InputField start={value[0].value18} ref={refList.ref17}>{value[0].value18}</InputField></td>
                    <td><InputField start={value[0].value19} ref={refList.ref18}>{value[0].value19}</InputField></td>
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
                    <td></td>
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
                </tr>
            );
        }
    }
});

export default TableBody;