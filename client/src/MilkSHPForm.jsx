import React, { useState } from 'react';
import "../src/styles/App.css"
import InputField from "./component/InputField";
import ButtonUI from "./component/UI/button/ButtonUI";
/*Будем вызывать форму формируя список в зависимости от передаваемого массива (он в свою очередь зависит от доступов пользователя)*/

const MilkShpForm = (props) => {
    const [child, setChild] = useState([
        {id: 0, field: 0},
        {id: 1, field: 0},
        {id: 2, field: 0},
        {id: 3, field: 0},
        {id: 4, field: 0},
        {id: 5, field: 0},
        {id: 6, field: 0},
        {id: 7, field: 0},
        {id: 8, field: 0}
    ])

    const getChildVal = (callback) => {
        const newChild = [...child];
        newChild[callback.id] = {id: callback.id, field: callback.field}
        setChild(newChild);
    }

    const Submit = (e) => {
        e.preventDefault()
        console.log("Submit")
    }

    const region = [{id: 1, name: "Анна"}];
    const listRegion = region.map((region) =>
        <tr key={region.id.toString()}>
            <td>{region.name.toString()}</td>
            <td><InputField getChildVal={getChildVal} id={1} placeholder={2021}></InputField></td>
            <td><InputField getChildVal={getChildVal} id={2} placeholder={2022}></InputField></td>
            <td>{parseInt(child[2].field) - parseInt(child[1].field)}</td>
            <td><InputField getChildVal={getChildVal} id={3} placeholder={2021}></InputField></td>
            <td><InputField getChildVal={getChildVal} id={4} placeholder={2022}></InputField></td>
            <td>{parseInt(child[4].field) - parseInt(child[3].field)}</td>
            <td><InputField getChildVal={getChildVal} id={5} placeholder={2021}></InputField></td>
            <td><InputField getChildVal={getChildVal} id={6} placeholder={2022}></InputField></td>
            <td>{parseInt(child[6].field) - parseInt(child[5].field)}</td>
            <td><InputField getChildVal={getChildVal} id={7} placeholder={2021}></InputField></td>
            <td><InputField getChildVal={getChildVal} id={8} placeholder={2021}></InputField></td>
            <td>{((parseInt(child[8].field) / parseInt(child[4].field))*100).toFixed(2)}%</td>
        </tr>
    )

    return (
        <form onSubmit={Submit}>
        <div>
            <h1 style={{textAlign: "center", color: "teal", boxSizing: "border-box"}}>Молоко СХП, Анна</h1>
            <table>
                <thead>
                <tr>
                    <th rowSpan={3}>Наименование района</th>
                    <th colSpan={6}>Валовый надой молка, тонн</th>
                    <th colSpan={3}>Суточный надой молока на корову, кг</th>
                    <th rowSpan={3}>Реализовано в зачете, т</th>
                    <th rowSpan={3}>Реализовано в физ. весе, т</th>
                    <th rowSpan={3}>% товарности</th>
                </tr>
                <tr>
                    <td colSpan={3}>С начала года</td>
                    <td colSpan={3}>В т.ч. за день</td>
                    <td rowSpan={2}>2021</td>
                    <td rowSpan={2}>2022</td>
                    <td rowSpan={2}>Разница</td>
                </tr>
                <tr>
                    <td>2021</td>
                    <td>2022</td>
                    <td>Разница</td>
                    <td>2021</td>
                    <td>2022</td>
                    <td>Разница</td>
                </tr>
                </thead>
                <tbody>
                {listRegion}
                </tbody>
            </table>
            <ButtonUI type="submit">Отправить</ButtonUI>
        </div>
        </form>
    );
};

export default MilkShpForm;