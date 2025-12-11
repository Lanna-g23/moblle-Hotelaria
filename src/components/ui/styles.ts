import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const global =StyleSheet.create({
    textWhite:{
        color: "#000000ff"
    },
    
    //fundo
    safeArea: {
        flex: 1,
        backgroundColor: "#b4c9faff"
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
        marginBottom: height * 0.03,
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

    title: {
        fontSize: 25,
        fontWeight: "800",
        color: "#050184ff"
        /*Para atribuir cor: color:*/
    },

    //Subtitulo a Baixo do titulo
    subtitle: {
        fontSize: 19,
        fontWeight: "400",
        color: "#0704b8ff",
        marginTop: height * 0.01,
        marginBottom: height * 0.01,
    },

    inputBorder: {
        elevation: 9,
        shadowColor: "#0000ffff",
        shadowOpacity: 6,
    },

    inputBox: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#7faefbff",
        paddingLeft: 9,
        paddingRight: width * 0.11,
        maxWidth: width * 0.9,
        minWidth: width * 0.8
    },

    icon: {
        marginRight: 10,
    },

    inpError:{
        elevation: 8,
        shadowColor: "#000000ff",
    },

    errotext:{
        color: "red",
        fontSize: 13,
        marginTop: height * 0.05
    },

    eyeIcon: {
        position: "absolute",
        right: 10,
        top: 40
    },

    modalView:{
        margin: 20,
        backgroundColor: "#91a5e5ff",
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems:"center",
        shadowColor:'#0000ffff',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5
    },

    centerView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    /*button: {
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
    },*/

    closeButton: {
        backgroundColor: '#5785f9ff',
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

    inputGroup: {
        marginBottom: height * 0.05,
    },

    //as letras que o orienta(Ex: e-mail, senha)
    label2: {
        fontSize: 15,
        fontWeight: "600",
        color: "#001d91ff",
        marginBottom: height * 0.01
    },

    iconContainer: {
        marginBottom: 5,
    },

    titleCard: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 9,
        color: '#0029f4ff',
    },

    priceContainer: {
        marginLeft: 10,
    },

    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f7a0fff',
    },

    touchableFixed: {
        borderRadius: 20,
        padding: width * 0.04,
        height: '100%',
    },

    cardContentFixed: {
        padding: width * 0.03,
        height: height * 0.18,
        justifyContent: 'space-between',
    },

    textFixed: {
        color: '#0107a3ff',
        fontSize: 15,
        maxHeight: 40,
    },

    descriptionContainerFixed: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 8,
    },

    cardContainer: {
        width: width * 0.9,
        height: height * 0.4,
        maxWidth: 340,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#99b4fdff',
    },


    /*touchable: {
        borderRadius: 20,
        padding: width * 0.03,
        height: '100%',
    },

    image: {
        borderRadius: 10,
        height: height * 0.20,
        width: '100%',
    },

    cardContent: {
        padding: width * 0.04,
        height: height * 0.20,
        justifyContent: 'space-between',
    },

    text2: {
        color: '#000000ff',
        fontSize: 14,
        maxHeight: 40,
    },*/

    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 8,
    },

    //espaços do iconis
    /*inputIcon:{
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
    },*/


    //Espaço do texto
    input: {
        backgroundColor: "#dae4f6ff",
        flex: 1,
        fontSize: 17,
        color: "#001affff",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },

    inerrorText: {
        color: "#ff0000ff",
        fontWeight: "600",
        fontSize: 15,
        marginTop: height * 0.01
    },

    imageFixed: {
        borderRadius: 12,
        height: height * 0.17,
        width: '99%',
    },
    
});
