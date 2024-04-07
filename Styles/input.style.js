import { StyleSheet } from "react-native"

export const inputStyle = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 15,
        paddingLeft: 16
    },
    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        fontSize: 18,
        paddingRight: 16
    }
})