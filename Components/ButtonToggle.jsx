import { Touchable, TouchableOpacity, Text } from "react-native";
import { buttonToggleStyle } from "../Styles/buttonToggle.style";

export default ButtonToggle = ({
    unit,
    onPress
}) => {
    return (
        <TouchableOpacity style={buttonToggleStyle.button} onPress={onPress}>
            <Text style={buttonToggleStyle.buttonText}>
                Change To °{unit}
            </Text>
        </TouchableOpacity>
    );
}