import AuthContainer from "@/components/ui/AuthContainer";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import PassField from "../ui/PasswordField";
import TextField from "../ui/TextFleld";
import { Button } from "./Button";
import { style } from "./style";


const RenderLogin = () => {
    return(
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu login"
            icon="hotel"
            >
                       
            <TextField
                label="E-mail"
                icon={{lib: "MaterialIcons", name: "email"}}
                placeholder="Digite seu E-mail"
            >
            </TextField>

            <PassField
                label="Senha"
                icon={{lib: "MaterialIcons", name: "key"}}
                placeholder="Digite sua senha"
            >
            </PassField>

            <Button
                title="Login"
                onPress={()=> router.push("/(tabs)/explorer")}
            />
            
            
            <TouchableOpacity onPress={()=> router.push("/(auth)/resetPass")}>
                <Text style={style.changePassTxt}>Redefina a sua senha!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> router.push("/(auth)/register")}>
                <Text style={style.changePassTxt}>Cadastre-se!</Text>
            </TouchableOpacity>
        </AuthContainer>
    )
}
export default RenderLogin;