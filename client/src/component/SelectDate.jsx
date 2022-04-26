import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {collectDateCornSilage} from "../http/TableApi";
import {observer} from "mobx-react-lite";

const SelectDate = observer((props) => {
    const [dateList, setDateList] = useState([])
    let optionList = []

    useEffect(() => {
        collectDateCornSilage().then(data => {
            setDateList(data)
        }).finally()
    }, [])

    dateList.map(data => {
        optionList.push(<option value={data.date}>{data.date}</option>)
    })

    if (props.types == "days") {
        return (
            <Form.Select aria-label="Select Date">
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
});

export default SelectDate;