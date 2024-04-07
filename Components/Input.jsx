import { Text, TextInput, View } from "react-native";
import { inputStyle } from "../Styles/input.style.js";

export default Input = ({
    defaultValue,
    unit,
    setTemprature
}) => {
    return (
        <View style={inputStyle.container}>
            <TextInput
                placeholder="Type here..."
                maxLength={3}
                defaultValue={defaultValue.toString()}
                style={inputStyle.input}
                onChangeText={(text) => {
                    setTemprature(text);
                }}
            />
            <Text
                style={inputStyle.unit}
            >°{unit}</Text>
        </View>
    );
}