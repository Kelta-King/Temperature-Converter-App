import { Text, View } from "react-native";
import { workSpaceStyle } from "../Styles/workSpace.style.js";
import Input from "./Input.jsx";
import Temprature from "./Temprature.jsx";
import ButtonToggle from "./ButtonToggle.jsx";
import { useEffect, useState } from "react";
import { getOppositeUnit, convertTemperature, isColdTemp } from "../Utils/utils.js";

export default WorkSpace = ({
    isCold,
    setIsCold
}) => {
    const defaultValue = 0;
    const [temprature, setTemprature] = useState(defaultValue);
    const [unit, setUnit] = useState("C");

    function getOppositeTemprature(temprature) {
        if (isNaN(temprature)) return "";
        return convertTemperature(temprature, getOppositeUnit(unit)).toFixed(2);;
    }

    useEffect(() => {
        setIsCold(isColdTemp(temprature, unit));
    }, [temprature, unit]);

    return (
        <View style={workSpaceStyle.container}>
            <Temprature tempratureValue={getOppositeTemprature(temprature)} unit={getOppositeUnit(unit)} />
            <Input defaultValue={defaultValue} unit={unit} setTemprature={setTemprature} />
            <ButtonToggle unit={getOppositeUnit(unit)} onPress={() => setUnit(getOppositeUnit(unit))} />
        </View>
    );
}