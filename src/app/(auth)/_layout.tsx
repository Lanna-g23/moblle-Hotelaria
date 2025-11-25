/* Função: definir o fluxo de navegação 
entre as telas de autenticação: Login, register, resetPassword

Empilhamento de tela: Stack Navigator, 3 funções para manipular o empilhamento:
push(): empilha um tela atua sobre a anterior
back(): remove a tela atual e retorna à tela anterior empilhada
replace(): subtitui um tela atual pela próxima
*/ 
import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{ title: "login" }}/>
            <Stack.Screen name="register" options={{ title: "register" }}/>
            <Stack.Screen name="resetPass" options={{ title: "resetPass" }}/>
        </Stack>
    )
}

export default AuthLayout;
