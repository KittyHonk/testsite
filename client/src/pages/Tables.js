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
import FertilizerSpring from "../component/FertilizerSpring/FertilizerSpring";
import FertilizerAutumn from "../component/FertilizerAutumn/FertilizerAutumn";
import Harrowing from "../component/Harrowing/Harrowing";
import SowSpringCrop from "../component/SowSpringCrop/SowSpringCrop";
import SowPotato from "../component/SowPotato/SowPotato";
import SowVegetableAndGourd from "../component/SowVegetableAndGourd/SowVegetableAndGourd";
import SowPerennialPlanting from "../component/SowPerennialPlanting/SowPerennialPlanting";
import FruitBerryHarvest from "../component/FruitBerryHarvest/FruitBerryHarvest";
import VegetableHarvest from "../component/VegetableHarvest/VegetableHarvest";
import SoilPreparation from "../component/SoilPreparation/SoilPreparation";
import SoyHarvest from "../component/SoyHarvest/SoyHarvest";
import SunflowerHarvest from "../component/SunflowerHarvest/SunflowerHarvest";
import BeetHarvest from "../component/BeetHarvest/BeetHarvest";
import SowWinterCrop from "../component/SowWinterCrop/SowWinterCrop";

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
        case "Удобрение весна": {
            return <FertilizerSpring rowName={regionList}/>
        }
        case "Удобрение осень": {
            return <FertilizerAutumn rowName={regionList}/>
        }
        case "Боронование": {
            return <Harrowing rowName={regionList}/>
        }
        case "Сев яровых": {
            return <SowSpringCrop rowName={regionList}/>
        }
        case "Сев картофеля": {
            return <SowPotato rowName={regionList}/>
        }
        case "Сев овощебахчевых": {
            return <SowVegetableAndGourd rowName={regionList}/>
        }
        case "Закладка мн. насаждений": {
            return <SowPerennialPlanting rowName={regionList}/>
        }
        case "Уборка плод-ягод": {
            return <FruitBerryHarvest rowName={regionList}/>
        }
        case "Уборка овощей": {
            return <VegetableHarvest rowName={regionList}/>
        }
        case "Подготовка почвы": {
            return <SoilPreparation rowName={regionList}/>
        }
        case "Уборка сои": {
            return <SoyHarvest rowName={regionList}/>
        }
        case "Уборка подсолнечника": {
            return <SunflowerHarvest rowName={regionList}/>
        }
        case "Уборка свеклы": {
            return <BeetHarvest rowName={regionList}/>
        }
        case "Сев озимых": {
            return <SowWinterCrop rowName={regionList}/>
        }
        default: {
            console.log(params.table_name)
        }
    }
});

export default Tables;