import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const global =StyleSheet.create({
    //fundo
    safeArea: {
        flex: 1,
        backgroundColor: "#b5ceeaff"
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
        /*Para atribuir cor: color:*/
    },
    //Subtitulo a Baixo do titulo
    subtitle: {
        fontSize: 17,
        color: "#0502c3ff",
        marginTop: height * 0.01
    },
    content: {
        backgroundColor: "#c7dcffff",
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
    //as letras que o orienta(Ex: e-mail, senha)
    label: {
        fontSize: 15,
        fontWeight: "600",
        color: "#0427b4ff",
        marginBottom: height * 0.01
    },
    //espaços do iconis
    inputIcon:{
        backgroundColor: "#a9b9f7ff",
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#d1d6f8ff",
        borderRadius: 10
    },
    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "rgba(255, 6, 6, 1)",
    },
    //Espaço do texto
    input: {
        backgroundColor: "#dae4f6ff",
        flex: 1,
        fontSize: 17,
        color: "#0a1ed1ff",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },
    eyeIcon: {
        position: "absolute",
        right: 12,
        top: 42
    },
    inerrorText: {
        color: "red",
        fontWeight: "600",
        fontSize: 15,
        marginTop: height * 0.01
    },
    primeryButton: {
        backgroundColor: "#0206ffff",
        borderRadius: 10,
        padding: width * 0.025,
        marginTop: width * 0.02,
        alignItems: "center"
    },
    primeryButtonDisabled: {
        backgroundColor: "#b4c9eeff",
        borderRadius: 10,
    },
    primeryButtonText: {
        color: "#b7bdecff"
    }

})