import { Label } from "@react-navigation/elements";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const global =StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f9f9f9ff"
    },
    keyboardAvoiding: {
        flex: 1
    },
    conteiner: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.07
    },
    header: {
        alignItems: "center",
        marginBottom: height * 0.03
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
    },
    subtitle: {
        fontSize: 17,
        color: "purple",
        marginTop: height * 0.01
    },
    content: {
        backgroundColor: "hsla(217, 100%, 89%, 1.00)",
        borderRadius: 10,
        padding: width * 0.02,
        shadowColor: "#000000ff",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    //Inputs
    inputGroup: {
        marginBottom: height * 0.02,
    },
    label: {
        fontSize: 15,
        fontWeight: "600",
        color: "#061e7bff"
    },
    inputIcon:{
        backgroundColor: "#acbbf9ff",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#b7bff4ff",
        borderRadius: 10
    },
    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "rgba(139, 0, 0, 1)",
    },
    input: {
        backgroundColor: "#dae4f6ff",
        flex: 1,
        fontSize: 17,
        color: "#000",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },
    inerrorText: {
        color: "red",
        fontSize: 13,

    }
})