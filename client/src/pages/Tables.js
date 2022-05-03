import React from 'react';
import {observer} from "mobx-react-lite";
import MilkSHP from "../component/MilkSHP/MilkSHP";
import {useParams} from "react-router-dom";
import MilkKFH from "../component/MilkKFH/MilkKFH";
import ForageHarvest from "../component/ForageHarvest/ForageHarvest";
import CornSilage from "../component/CornSilage/CornSilage";
import Gsm from "../component/Gsm/Gsm";

const Tables = observer(() => {

    const params = useParams()
    const regionList = [
        {name: "Анна"},
        {name: "Бобров"},
        {name: "Борисоглебск"},
        {name: "Воронеж"},
        {name: "Бутурлиновка"}
    ]

    switch(params.table_name) {
        case "Молоко СХП": {
            return <MilkSHP rowName={regionList}/>
        }
        case "Молоко КФХ" : {
            return <MilkKFH rowName={regionList}/>
        }
        case "Заготовка кормов" : {
            return <ForageHarvest rowName={regionList}/>
        }
        case "Кукуруза на силос": {
            return <CornSilage rowName={regionList}/>
        }
        case "ГСМ": {
            return <Gsm rowName={regionList}/>
        }
        default: {
            console.log(params.table_name)
        }
    }
});

export default Tables;