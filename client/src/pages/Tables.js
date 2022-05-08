import React from 'react';
import {observer} from "mobx-react-lite";
import MilkSHP from "../component/MilkSHP/MilkSHP";
import {useParams} from "react-router-dom";
import MilkKFH from "../component/MilkKFH/MilkKFH";
import ForageHarvest from "../component/ForageHarvest/ForageHarvest";
import CornSilage from "../component/CornSilage/CornSilage";
import Gsm from "../component/Gsm/Gsm";
import AvalibleShTech from '../component/AvalibleShTech/AvalibleShTech';
import ReadyShTech from '../component/ReadyShTech/ReadyShTech';
import BeetHarvesters from '../component/BeetHarvesters/BeetHarvesters';
import Harvesters from '../component/Harvesters/Harvesters';

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
        case "Наличие сх тех": {
            return <AvalibleShTech rowName={regionList}/>
        }
        case "Готовность сх тех": {
            return <ReadyShTech rowName={regionList}/>
        }
        case "Свеклоуборочные комбайны": {
            return <BeetHarvesters rowName={regionList}/>
        }
        case "Комбайны": {
            return <Harvesters rowName={regionList}/>
        }
        default: {
            console.log(params.table_name)
        }
    }
});

export default Tables;