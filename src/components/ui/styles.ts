import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const global =StyleSheet.create({
    textWhite:{
        color: "#000000ff"
    },
    
    //fundo
    safeArea: {
        flex: 1,
        backgroundColor: "#bccdf5ff"
    },

    keyboardAvoiding: {
        flex: 1
    },

    conteiner:{
        paddingHorizontal: width * 0.04,
        paddingTop: height * 0.02,
        paddingBottom: height * 0.05,

    },

    header: {
        alignItems: "center",
        marginBottom: height * 0.03
    },

    title: {
        fontSize: 25,
        fontWeight: "800",
        color: "#050184ff"
        /*Para atribuir cor: color:*/
    },

    //Subtitulo a Baixo do titulo
    subtitle: {
        fontSize: 19,
        color: "#0704b8ff",
        marginTop: height * 0.01,
        marginBottom: height * 0.01,
    },

    inputBorder: {
        elevation: 9,
        shadowColor: "#000000ff",
        shadowOpacity: 1,
    },

    content: {
        alignItems: "center",
        backgroundColor: "#c7dcffff",
        borderRadius: 10,
        padding: width * 0.01, //mais consistente

        //Sombra Ios
        shadowColor: "#000000ff",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        //mover a sombra para baixo da tela
        shadowOffset: { width: 0, height: 3 },

        //Sombra Android
        elevation: 4,

        paddingBottom: width * 0.07,
        marginBottom: 20,
    },

    inputBox: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#9ec1f8ff",
        paddingLeft: 10,
        paddingRight: width * 0.1,
        maxWidth: width * 0.7,
        minWidth: width * 0.8
    },

    icon: {
        marginRight: 10,
    },

    inpError:{
        elevation: 8,
        shadowColor: "#ff0000ff",
    },

    errotext:{
        color: "red",
        fontSize: 13,
        marginTop: height * 0.05

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
        display: "flex",
        backgroundColor: "#a9b9f7ff",
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#d1d6f8ff",
        borderRadius: 10,
        maxWidth: width * 0.7,
        minWidth: width * 0.7
    },

   /* inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "rgba(156, 83, 83, 1)",
    },*/

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
        right: 8,
        top: 40
    },

    inerrorText: {
        color: "red",
        fontWeight: "600",
        fontSize: 15,
        marginTop: height * 0.01
    },

    modalView:{
        margin:20,
        backgroundColor: "#91a5e5ff",
        borderRadius:20,
        width:'90%',
        padding:35,
        alignItems:"center",
        shadowColor:'#ff0000ff',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },

    centerView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    
    button: {
        backgroundColor: '#000477ff',
        padding: 10,
        borderRadius: 5,
        height: height * 0.08
    },

    buttonText: {
        color: '#a6bbf5ff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    dateText: {
        color: '#ced4f5ff',
        fontSize: 14,
    },

    modelOverlay: {
        flex: 1,
        backgroundColor: 'rgba(143, 155, 219, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: '#9dc6eeff',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: '#9bc3f4ff',
    },
    
    iosPicker: {
        backgroundColor: '#9cb3f6ff',
        borderRadius: 15,
    },

    closeButton: {
        backgroundColor: '#94adf7ff',
        padding: 12,
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center',
    },
    
    closeButtonText: {
        color: '#ffffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
 
});
