import React, {useRef, useState, useEffect, useImperativeHandle, useContext} from 'react';
import InputField from "../InputField";
import {checkVegetableHarvest, createVegetableHarvest, getAllVegetableHarvest} from "../../http/TableApi";
import {Context} from "../../index";
import moment from "moment";


const TableBody = React.forwardRef((props, ref) => {
    const {datecls} = useContext(Context)
    const {user} = useContext(Context)
    let date = useRef(moment(new Date(datecls.findDay(props.day))).format('YYYY-MM-DD'))
    const row_owner = props.rowName
    const [value, setValue] = useState([{value: [0]}])

    const refList = {
        ref0: useRef(), ref1: useRef(), ref2: useRef(), ref3: useRef(), ref4: useRef(), 
        ref5: useRef(), ref6: useRef(), ref7: useRef(), ref8: useRef(), ref9: useRef(),
        ref10: useRef(), ref11: useRef(), ref12: useRef(), ref13: useRef(), ref14: useRef(),
        ref15: useRef(), ref16: useRef(), ref17: useRef(), ref18: useRef(), ref19: useRef(),
        ref20: useRef(), ref21: useRef(), ref22: useRef(), ref23: useRef(), ref24: useRef(),
        ref25: useRef(), ref26: useRef(), ref27: useRef(), ref28: useRef(), ref29: useRef(),
        ref30: useRef(), ref31: useRef(), ref32: useRef(), ref33: useRef(), ref34: useRef(),
        ref35: useRef(), ref36: useRef(), ref37: useRef(), ref38: useRef(), ref39: useRef(),
        ref40: useRef(), ref41: useRef(), ref42: useRef(), ref43: useRef(), ref44: useRef(),
        ref45: useRef(), ref46: useRef(), ref47: useRef(), ref48: useRef(), ref49: useRef(),
        ref50: useRef(), ref51: useRef(), ref52: useRef(), ref53: useRef(), ref54: useRef(),
        ref55: useRef(), ref56: useRef(), ref57: useRef(), ref58: useRef(), ref59: useRef(),
        ref60: useRef(), ref61: useRef(), ref62: useRef(), ref63: useRef(), ref64: useRef(),
        ref65: useRef(),
    } 

    useEffect(() => {
        checkVegetableHarvest(row_owner, date.current).then(data => {
            getAllVegetableHarvest(row_owner, date.current).then(data => {
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
            createVegetableHarvest(
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
                refList.ref30.current.value || (value[0].value31 || "0"),
                refList.ref31.current.value || (value[0].value32 || "0"),
                refList.ref32.current.value || (value[0].value33 || "0"),
                refList.ref33.current.value || (value[0].value34 || "0"),
                refList.ref34.current.value || (value[0].value35 || "0"),
                refList.ref35.current.value || (value[0].value36 || "0"),
                refList.ref36.current.value || (value[0].value37 || "0"),
                refList.ref37.current.value || (value[0].value38 || "0"),
                refList.ref38.current.value || (value[0].value39 || "0"),
                refList.ref39.current.value || (value[0].value40 || "0"),
                refList.ref40.current.value || (value[0].value41 || "0"),
                refList.ref41.current.value || (value[0].value42 || "0"),
                refList.ref42.current.value || (value[0].value43 || "0"),
                refList.ref43.current.value || (value[0].value44 || "0"),
                refList.ref44.current.value || (value[0].value45 || "0"),
                refList.ref45.current.value || (value[0].value46 || "0"),
                refList.ref46.current.value || (value[0].value47 || "0"),
                refList.ref47.current.value || (value[0].value48 || "0"),
                refList.ref48.current.value || (value[0].value49 || "0"),
                refList.ref49.current.value || (value[0].value50 || "0"),
                refList.ref50.current.value || (value[0].value51 || "0"),
                refList.ref51.current.value || (value[0].value52 || "0"),
                refList.ref52.current.value || (value[0].value53 || "0"),
                refList.ref53.current.value || (value[0].value54 || "0"),
                refList.ref54.current.value || (value[0].value55 || "0"),
                refList.ref55.current.value || (value[0].value56 || "0"),
                refList.ref56.current.value || (value[0].value57 || "0"),
                refList.ref57.current.value || (value[0].value58 || "0"),
                refList.ref58.current.value || (value[0].value59 || "0"),
                refList.ref59.current.value || (value[0].value60 || "0"),
                refList.ref60.current.value || (value[0].value61 || "0"),
                refList.ref61.current.value || (value[0].value62 || "0"),
                refList.ref62.current.value || (value[0].value63 || "0"),
                refList.ref63.current.value || (value[0].value64 || "0"),
                refList.ref64.current.value || (value[0].value65 || "0"),
                refList.ref65.current.value || (value[0].value66 || "0"),

            ).then(() => {
                getAllVegetableHarvest(row_owner, date).then(data => {
                    setValue(data)
                })
            })
        },
        setNewDate (newDate) {
            date.current = newDate
            getAllVegetableHarvest(row_owner, date.current).then(data => {
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
                <td><InputField start={value[0].value11} ref={refList.ref10}>{value[0].value11}</InputField></td>
                <td><InputField start={value[0].value12} ref={refList.ref11}>{value[0].value12}</InputField></td>
                <td><InputField start={value[0].value13} ref={refList.ref12}>{value[0].value13}</InputField></td>
                <td><InputField start={value[0].value14} ref={refList.ref13}>{value[0].value14}</InputField></td>
                <td><InputField start={value[0].value15} ref={refList.ref14}>{value[0].value15}</InputField></td>
                <td><InputField start={value[0].value16} ref={refList.ref15}>{value[0].value16}</InputField></td>
                <td><InputField start={value[0].value17} ref={refList.ref16}>{value[0].value17}</InputField></td>
                <td><InputField start={value[0].value18} ref={refList.ref17}>{value[0].value18}</InputField></td>
                <td><InputField start={value[0].value19} ref={refList.ref18}>{value[0].value19}</InputField></td>
                <td><InputField start={value[0].value20} ref={refList.ref19}>{value[0].value20}</InputField></td>
                <td><InputField start={value[0].value21} ref={refList.ref20}>{value[0].value21}</InputField></td>
                <td><InputField start={value[0].value22} ref={refList.ref21}>{value[0].value22}</InputField></td>
                <td><InputField start={value[0].value23} ref={refList.ref22}>{value[0].value23}</InputField></td>
                <td><InputField start={value[0].value24} ref={refList.ref23}>{value[0].value24}</InputField></td>
                <td><InputField start={value[0].value25} ref={refList.ref24}>{value[0].value25}</InputField></td>
                <td><InputField start={value[0].value26} ref={refList.ref25}>{value[0].value26}</InputField></td>
                <td><InputField start={value[0].value27} ref={refList.ref26}>{value[0].value27}</InputField></td>
                <td><InputField start={value[0].value28} ref={refList.ref27}>{value[0].value28}</InputField></td>
                <td><InputField start={value[0].value29} ref={refList.ref28}>{value[0].value29}</InputField></td>
                <td><InputField start={value[0].value30} ref={refList.ref29}>{value[0].value30}</InputField></td>
                <td><InputField start={value[0].value31} ref={refList.ref30}>{value[0].value31}</InputField></td>
                <td><InputField start={value[0].value32} ref={refList.ref31}>{value[0].value32}</InputField></td>
                <td><InputField start={value[0].value33} ref={refList.ref32}>{value[0].value33}</InputField></td>
                <td><InputField start={value[0].value34} ref={refList.ref33}>{value[0].value34}</InputField></td>
                <td><InputField start={value[0].value35} ref={refList.ref34}>{value[0].value35}</InputField></td>
                <td><InputField start={value[0].value36} ref={refList.ref35}>{value[0].value36}</InputField></td>
                <td><InputField start={value[0].value37} ref={refList.ref36}>{value[0].value37}</InputField></td>
                <td><InputField start={value[0].value38} ref={refList.ref37}>{value[0].value38}</InputField></td>
                <td><InputField start={value[0].value39} ref={refList.ref38}>{value[0].value39}</InputField></td>
                <td><InputField start={value[0].value40} ref={refList.ref39}>{value[0].value40}</InputField></td>
                <td><InputField start={value[0].value41} ref={refList.ref40}>{value[0].value41}</InputField></td>
                <td><InputField start={value[0].value42} ref={refList.ref41}>{value[0].value42}</InputField></td>
                <td><InputField start={value[0].value43} ref={refList.ref42}>{value[0].value43}</InputField></td>
                <td><InputField start={value[0].value44} ref={refList.ref43}>{value[0].value44}</InputField></td>
                <td><InputField start={value[0].value45} ref={refList.ref44}>{value[0].value45}</InputField></td>
                <td><InputField start={value[0].value46} ref={refList.ref45}>{value[0].value46}</InputField></td>
                <td><InputField start={value[0].value47} ref={refList.ref46}>{value[0].value47}</InputField></td>
                <td><InputField start={value[0].value48} ref={refList.ref47}>{value[0].value48}</InputField></td>
                <td><InputField start={value[0].value49} ref={refList.ref48}>{value[0].value49}</InputField></td>
                <td><InputField start={value[0].value50} ref={refList.ref49}>{value[0].value50}</InputField></td>
                <td><InputField start={value[0].value51} ref={refList.ref50}>{value[0].value51}</InputField></td>
                <td><InputField start={value[0].value52} ref={refList.ref51}>{value[0].value52}</InputField></td>
                <td><InputField start={value[0].value53} ref={refList.ref52}>{value[0].value53}</InputField></td>
                <td><InputField start={value[0].value54} ref={refList.ref53}>{value[0].value54}</InputField></td>
                <td><InputField start={value[0].value55} ref={refList.ref54}>{value[0].value55}</InputField></td>
                <td><InputField start={value[0].value56} ref={refList.ref55}>{value[0].value56}</InputField></td>
                <td><InputField start={value[0].value57} ref={refList.ref56}>{value[0].value57}</InputField></td>
                <td><InputField start={value[0].value58} ref={refList.ref57}>{value[0].value58}</InputField></td>
                <td><InputField start={value[0].value59} ref={refList.ref58}>{value[0].value59}</InputField></td>
                <td><InputField start={value[0].value60} ref={refList.ref59}>{value[0].value60}</InputField></td>
                <td><InputField start={value[0].value61} ref={refList.ref60}>{value[0].value61}</InputField></td>
                <td><InputField start={value[0].value62} ref={refList.ref61}>{value[0].value62}</InputField></td>
                <td><InputField start={value[0].value63} ref={refList.ref62}>{value[0].value63}</InputField></td>
                <td><InputField start={value[0].value64} ref={refList.ref63}>{value[0].value64}</InputField></td>
                <td><InputField start={value[0].value65} ref={refList.ref64}>{value[0].value65}</InputField></td>
                <td><InputField start={value[0].value66} ref={refList.ref65}>{value[0].value66}</InputField></td>

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
                <td><InputField ref={refList.ref20}></InputField></td>
                <td><InputField ref={refList.ref21}></InputField></td>
                <td><InputField ref={refList.ref22}></InputField></td>
                <td><InputField ref={refList.ref23}></InputField></td>
                <td><InputField ref={refList.ref24}></InputField></td>
                <td><InputField ref={refList.ref25}></InputField></td>
                <td><InputField ref={refList.ref26}></InputField></td>
                <td><InputField ref={refList.ref27}></InputField></td>
                <td><InputField ref={refList.ref28}></InputField></td>
                <td><InputField ref={refList.ref29}></InputField></td>
                <td><InputField ref={refList.ref30}></InputField></td>
                <td><InputField ref={refList.ref31}></InputField></td>
                <td><InputField ref={refList.ref32}></InputField></td>
                <td><InputField ref={refList.ref33}></InputField></td>
                <td><InputField ref={refList.ref34}></InputField></td>
                <td><InputField ref={refList.ref35}></InputField></td>
                <td><InputField ref={refList.ref36}></InputField></td>
                <td><InputField ref={refList.ref37}></InputField></td>
                <td><InputField ref={refList.ref38}></InputField></td>
                <td><InputField ref={refList.ref39}></InputField></td>
                <td><InputField ref={refList.ref40}></InputField></td>
                <td><InputField ref={refList.ref41}></InputField></td>
                <td><InputField ref={refList.ref42}></InputField></td>
                <td><InputField ref={refList.ref43}></InputField></td>
                <td><InputField ref={refList.ref44}></InputField></td>
                <td><InputField ref={refList.ref45}></InputField></td>
                <td><InputField ref={refList.ref46}></InputField></td>
                <td><InputField ref={refList.ref47}></InputField></td>
                <td><InputField ref={refList.ref48}></InputField></td>
                <td><InputField ref={refList.ref49}></InputField></td>
                <td><InputField ref={refList.ref50}></InputField></td>
                <td><InputField ref={refList.ref51}></InputField></td>
                <td><InputField ref={refList.ref52}></InputField></td>
                <td><InputField ref={refList.ref53}></InputField></td>
                <td><InputField ref={refList.ref54}></InputField></td>
                <td><InputField ref={refList.ref55}></InputField></td>
                <td><InputField ref={refList.ref56}></InputField></td>
                <td><InputField ref={refList.ref57}></InputField></td>
                <td><InputField ref={refList.ref58}></InputField></td>
                <td><InputField ref={refList.ref59}></InputField></td>
                <td><InputField ref={refList.ref60}></InputField></td>
                <td><InputField ref={refList.ref61}></InputField></td>
                <td><InputField ref={refList.ref62}></InputField></td>
                <td><InputField ref={refList.ref63}></InputField></td>
                <td><InputField ref={refList.ref64}></InputField></td>
                <td><InputField ref={refList.ref65}></InputField></td>
            </tr>
        );
    }
});

export default TableBody;