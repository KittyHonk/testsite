import React, {useContext, useState} from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru'
import {Context} from "../index";
import moment from "moment";
registerLocale('ru', ru)

const SelectDate = ({getDate, ...props}) => {
    const {datecls} = useContext(Context)

    if (props.day === undefined) {
        var tempDate = new Date()
    } else if (props.types === "weeks") {
        var tempDate = new Date(datecls.findDay(props.day))
    } else if (props.types === "months") {
        var tempDate = new Date(datecls.findMonthDay(props.day))
    }
    const [date, setDate] = useState(tempDate)

    const setDateDailyHandler = (date) => {
        setDate(date)
        getDate(moment(date).format('YYYY-MM-DD'))
    }

    const setDateWeeklyHandler = (date, day) => {
        const dayWeek = date.getDay()
        if ((dayWeek !== day)) {
            alert("Выберете другую дату")
        } else {
            setDate(date)
            getDate(moment(date).format('YYYY-MM-DD'))
        }
    }

    const setDateMonthlyHandler = (date, day) => {
        const dayMonth = date.getDate()
        if ((dayMonth !== day)) {
            alert("Выберете другую дату")
        } else {
            setDate(date)
            getDate(moment(date).format('YYYY-MM-DD'))
        }
    }

    if (props.types === "days") {
        return (
            <DatePicker className="datePicker" selected={date} onChange={(date) => setDateDailyHandler(date)} locale="ru"></DatePicker>
        );
    } else if (props.types === "weeks") {
        return (
            <DatePicker className="datePicker" selected={date} onChange={(date) => setDateWeeklyHandler(date, props.day)} locale="ru"></DatePicker>
        );
    } else if (props.types === "months") {
        return (
            <DatePicker className="datePicker" selected={date} onChange={(date) => setDateMonthlyHandler(date, props.day)} locale="ru"></DatePicker>
        )
    } else {
        return (
            <div>
                Ошибка при инициализации модуля даты
            </div>
        );
    }
};

export default SelectDate;