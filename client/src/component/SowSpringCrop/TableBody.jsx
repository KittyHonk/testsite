import React, {useRef, useState, useEffect, useImperativeHandle, useContext} from 'react';
import InputField from "../InputField";
import {checkSowSpringCrop, createSowSpringCrop, getAllSowSpringCrop} from "../../http/TableApi";
import moment from "moment";
import {Context} from "../../index";


const TableBody = React.forwardRef((props, ref) => {
    const {user} = useContext(Context)
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: []}])
    let date = useRef(moment(new Date (Date.now())).format('YYYY-MM-DD'))

    const refList = {
        ref0: useRef(), ref1: useRef(), ref2: useRef(), ref3: useRef(), ref4: useRef(),
        ref5: useRef(), ref6: useRef(), ref7: useRef(), ref8: useRef(), ref9: useRef(),
        ref10: useRef(), ref11: useRef(), ref12: useRef(), ref13: useRef(), ref14: useRef(),
        ref15: useRef(), ref16: useRef(), ref17: useRef(), ref18: useRef(), ref19: useRef(),
        ref20: useRef(), ref21: useRef(), ref22: useRef(), ref23: useRef(), ref24: useRef(),
        ref25: useRef(), ref26: useRef(), ref27: useRef(), ref28: useRef(), ref29: useRef(),
    } 

    useEffect(() => {
        for (let key in refList) {
            refList[key].current.value = ''
        }
    }, [refList])

    useEffect(() => {
        checkSowSpringCrop(row_owner, date.current).then(data => {
            getAllSowSpringCrop(row_owner, date.current).then(data => {
                setValue(data)
            })
        })
    }, [date.current])

    useImperativeHandle(ref, () => ({
        newRow (date) {
            createSowSpringCrop(
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
                refList.ref20.current.value || (value[0].value21 || "0"),
                refList.ref21.current.value || (value[0].value22 || "0"),
                refList.ref22.current.value || (value[0].value23 || "0"),
                refList.ref23.current.value || (value[0].value24 || "0"),
                refList.ref24.current.value || (value[0].value25 || "0"),
                refList.ref25.current.value || (value[0].value26 || "0"),
                refList.ref26.current.value || (value[0].value27 || "0"),
                refList.ref27.current.value || (value[0].value28 || "0"),
                refList.ref28.current.value || (value[0].value29 || "0"),
                refList.ref29.current.value || (value[0].value30 || "0"),
            ).then(data => {
                getAllSowSpringCrop(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date.current = newDate
            getAllSowSpringCrop(row_owner, date.current).then(data => {
                setValue(data)
            })
        },
    }))

    if (value.length !== 0){
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField user={user.role} start={value[0].value1} ref={refList.ref0}>{value[0].value1}</InputField></td>
                <td>{value[0].sum1}</td>
                <td>{value[0].result1}</td>
                <td><InputField user={user.role} start={value[0].value2} ref={refList.ref1}>{value[0].value2}</InputField></td>
                <td>{value[0].sum2}</td>
                <td>{value[0].result2}</td>
                <td><InputField start={value[0].value3} ref={refList.ref2}>{value[0].value3}</InputField></td>
                <td><InputField start={value[0].value4} ref={refList.ref3}>{value[0].value4}</InputField></td>
                <td><InputField start={value[0].value5} ref={refList.ref4}>{value[0].value5}</InputField></td>
                <td><InputField start={value[0].value6} ref={refList.ref5}>{value[0].value6}</InputField></td>
                <td><InputField start={value[0].value7} ref={refList.ref6}>{value[0].value7}</InputField></td>
                <td><InputField start={value[0].value8} ref={refList.ref7}>{value[0].value8}</InputField></td>
                <td><InputField start={value[0].value9} ref={refList.ref8}>{value[0].value9}</InputField></td>
                <td><InputField start={value[0].value10} ref={refList.ref9}>{value[0].value10}</InputField></td>
                <td>{value[0].result910}</td>
                <td><InputField start={value[0].value11} ref={refList.ref10}>{value[0].value11}</InputField></td>
                <td><InputField start={value[0].value12} ref={refList.ref11}>{value[0].value12}</InputField></td>
                <td>{value[0].result1112}</td>
                <td><InputField start={value[0].value13} ref={refList.ref12}>{value[0].value13}</InputField></td>
                <td><InputField start={value[0].value14} ref={refList.ref13}>{value[0].value14}</InputField></td>
                <td>{value[0].result1314}</td>
                <td><InputField start={value[0].value15} ref={refList.ref14}>{value[0].value15}</InputField></td>
                <td><InputField start={value[0].value16} ref={refList.ref15}>{value[0].value16}</InputField></td>
                <td>{value[0].result1516}</td>
                <td><InputField start={value[0].value17} ref={refList.ref16}>{value[0].value17}</InputField></td>
                <td><InputField start={value[0].value18} ref={refList.ref17}>{value[0].value18}</InputField></td>
                <td>{value[0].result1718}</td>
                <td><InputField start={value[0].value19} ref={refList.ref18}>{value[0].value19}</InputField></td>
                <td><InputField start={value[0].value20} ref={refList.ref19}>{value[0].value20}</InputField></td>
                <td>{value[0].result1920}</td>
                <td><InputField start={value[0].value21} ref={refList.ref20}>{value[0].value21}</InputField></td>
                <td><InputField start={value[0].value22} ref={refList.ref21}>{value[0].value22}</InputField></td>
                <td>{value[0].result2122}</td>
                <td><InputField start={value[0].value23} ref={refList.ref22}>{value[0].value23}</InputField></td>
                <td><InputField start={value[0].value24} ref={refList.ref23}>{value[0].value24}</InputField></td>
                <td>{value[0].result2324}</td>
                <td><InputField start={value[0].value25} ref={refList.ref24}>{value[0].value25}</InputField></td>
                <td><InputField start={value[0].value26} ref={refList.ref25}>{value[0].value26}</InputField></td>
                <td><InputField start={value[0].value27} ref={refList.ref26}>{value[0].value27}</InputField></td>
                <td><InputField start={value[0].value28} ref={refList.ref27}>{value[0].value28}</InputField></td>
                <td><InputField start={value[0].value29} ref={refList.ref28}>{value[0].value29}</InputField></td>
                <td><InputField start={value[0].value30} ref={refList.ref29}>{value[0].value30}</InputField></td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{row_owner}</td>
                <td><InputField user={user.role} ref={refList.ref0}></InputField></td>
                <td></td>
                <td></td>
                <td><InputField user={user.role} ref={refList.ref1}></InputField></td>
                <td></td>
                <td></td>
                <td><InputField ref={refList.ref2}></InputField></td>
                <td><InputField ref={refList.ref3}></InputField></td>
                <td><InputField ref={refList.ref4}></InputField></td>
                <td><InputField ref={refList.ref5}></InputField></td>
                <td><InputField ref={refList.ref6}></InputField></td>
                <td><InputField ref={refList.ref7}></InputField></td>
                <td><InputField ref={refList.ref8}></InputField></td>
                <td><InputField ref={refList.ref9}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref10}></InputField></td>
                <td><InputField ref={refList.ref11}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref12}></InputField></td>
                <td><InputField ref={refList.ref13}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref14}></InputField></td>
                <td><InputField ref={refList.ref15}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref16}></InputField></td>
                <td><InputField ref={refList.ref17}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref18}></InputField></td>
                <td><InputField ref={refList.ref19}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref20}></InputField></td>
                <td><InputField ref={refList.ref21}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref22}></InputField></td>
                <td><InputField ref={refList.ref23}></InputField></td>
                <td></td>
                <td><InputField ref={refList.ref24}></InputField></td>
                <td><InputField ref={refList.ref25}></InputField></td>
                <td><InputField ref={refList.ref26}></InputField></td>
                <td><InputField ref={refList.ref27}></InputField></td>
                <td><InputField ref={refList.ref28}></InputField></td>
                <td><InputField ref={refList.ref29}></InputField></td>
            </tr>
        );
    }
});

export default TableBody;