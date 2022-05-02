import React, {useContext, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {Context} from "../index";

const SelectDate = ({getDate, ...props}) => {
    const {datecls} = useContext(Context)
    const [dateList, setDateList] = useState([])
    const optionList = []

    useEffect(() => {
        props.func().then(data => {
            setDateList(data)
        })
    }, [])

    const fillOptionList = () => {
        if (props.types === "days") {
            for (let i = 0; i < dateList.length; i++) {
                if ((i === 0) && (props.startDate !== dateList[i].date)) {
                    optionList.push(<option key="Select correct date">Select correct date</option>)
                    optionList.push(<option key={props.startDate + ' ' + props.label} value={props.startDate}>{props.startDate}</option>)
                }
                optionList.push(<option key={dateList[i].date + ' ' + props.label} value={dateList[i].date}>{dateList[i].date}</option>)
            }
        }
        if (props.types === "weeks") {
            optionList.push(<option key="Select correct date">Select correct date</option>)
            for (let i = 0; i < dateList.length; i++) {
                let tempDate = datecls.findDay(props.day).toISOString().slice(0, 10)
                if ((i === 0) && (tempDate !== dateList[i].date)) {
                    optionList.push(<option key={tempDate + ' ' + props.label} value={tempDate}>{tempDate}</option>)
                }
                optionList.push(<option key={dateList[i].date + ' ' + props.label} value={dateList[i].date}>{dateList[i].date}</option>)
            }

        }
    }

    const changeHandler = (e) => {
        getDate(e.target.value)
    }

    if (true) {
        fillOptionList()
        return (
            <Form.Select onChange={changeHandler} aria-label={props.label}>
                {optionList}
            </Form.Select>
        );
    } else {
        return (
            <div>
                Ошибка при выборе даты
            </div>
        );
    }
};

export default SelectDate;