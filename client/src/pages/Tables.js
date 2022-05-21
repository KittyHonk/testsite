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
import LeftoverGrain from "../component/LeftoverGrain/LeftoverGrain";
import TopDressing from "../component/TopDressing/TopDressing";
import CropCondition from "../component/CropCondition/CropCondition";

const Tables = observer(() => {

    const params = useParams()
    const regionList = [
        {name: "Анна"},
        {name: "Бобров"},
        {name: "Богучар"},
        {name: "Борисоглебск"},
        {name: "Бутурлиновка"},
        {name: "В. Мамом"},
        {name: "В. Хава"},
        {name: "Воробьевка"},
        {name: "Грибановка"},
        {name: "Калач"},
        {name: "Каменка"},
        {name: "Кантемировка"},
        {name: "Кашира"},
        {name: "Лиски"},
        {name: "Н. Девицк"},
        {name: "Н. Усмань"},
        {name: "Новохоперск"},
        {name: "Ольховатка"},
        {name: "Острогоржск"},
        {name: "Павловский"},
        {name: "Панино"},
        {name: "Петропавловка"},
        {name: "Поворино"},
        {name: "Подгорное"},
        {name: "Рамонь"},
        {name: "Репьёвка"},
        {name: "Россошь"},
        {name: "Семилуки"},
        {name: "Таловая"},
        {name: "Терновка"},
        {name: "Хохол"},
        {name: "Эртиль"},
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
        case "Остатки зерна": {
            return <LeftoverGrain rowName={regionList}/>
        }
        case "Подкормка": {
            return <TopDressing rowName={regionList}/>
        }
        case "Состояние посевов": {
            return <CropCondition rowName={regionList}/>
        }
        default: {
            console.log(params.table_name)
        }
    }
});

export default Tables;