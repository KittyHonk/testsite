import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";

const SelectDate = ({getDate, ...props}) => {
    const [dateList, setDateList] = useState([])
    const optionList = []

    useEffect(() => {
        props.func().then(data => {
            setDateList(data)
        })
    }, [])

    const fillOptionList = () => {
        for (let i = 0; i < dateList.length; i++) {
            if ((i === 0) && (props.startDate !== dateList[i].date)) {
                optionList.push(<option key={props.startDate + ' ' + props.label} value={props.startDate}>{props.startDate}</option>)
            }
            optionList.push(<option key={dateList[i].date + ' ' + props.label} value={dateList[i].date}>{dateList[i].date}</option>)
        }
    }

    const changeHandler = (e) => {
        getDate(e.target.value)
    }

    if (props.types === "days") {
        fillOptionList()
        return (
            <Form.Select onChange={changeHandler} aria-label={props.label}>
                {optionList}
            </Form.Select>
        );
    } else {
        return (
            <div>
                Ошибка
            </div>
        );
    }
};

export default SelectDate;