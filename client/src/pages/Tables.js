import React from 'react';
import {observer} from "mobx-react-lite";
import MilkSHP from "../component/MilkSHP/MilkSHP";

const Tables = observer(() => {
    const regionList = [{name: "Анна"}, {name: "Бобров"}, {name: "Борисоглебск"}]

    return (
        <MilkSHP rowName={regionList}/>
    );
});

export default Tables;