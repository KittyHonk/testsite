import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {collectDateCornSilage} from "../http/TableApi";

const SelectDate = (props) => {
    const [dateList, setDateList] = useState([])
    const [optionList, setOptionList] = useState([])

    useEffect(() => {
        props.func().then(data => {
            setDateList(data)
        })

        window.removeEventListener('mouseleave', () => {})
    }, [])

    const fillOptionList = () => {
        console.log("Call")
        for (let i = 0; i < dateList.length; i++) {
            optionList.push(<option key={dateList[i].date + ' ' + props.label} value={dateList[i].date}>{dateList[i].date}</option>)
        }
    }

    const changeHandler = (e) => {
        console.log(e.target.value)
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