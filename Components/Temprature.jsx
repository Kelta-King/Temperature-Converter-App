import { View, Text } from "react-native";
import tempratureStyle from "../Styles/tempratureStyle.js";

export default Temprature = ({
    tempratureValue,
    unit
}) => {
    return (
        <View style={tempratureStyle.container}>
            <Text style={tempratureStyle.value}>
                {tempratureValue} °{unit}
            </Text>
        </View>
    );
}