import { Text, View } from "react-native";
import { workSpaceStyle } from "../Styles/workSpace.style.js";
import Input from "./Input.jsx";
import Temprature from "./Temprature.jsx";
import { useState } from "react";

export default WorkSpace = () => {
    const defaultValue = 0;
    const [temprature, setTemprature] = useState(defaultValue);
    const [unit, setUnit] = useState("C");

    return (
        <View style={workSpaceStyle.container}>
            <Temprature tempratureValue={temprature} unit={unit == "C" ? "F" : "C"} />
            <Input defaultValue={defaultValue} unit={unit} setTemprature={setTemprature} />
            <Text>Button</Text>
        </View>
    );
}