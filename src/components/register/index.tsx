import AuthContainer from "@/components/ui/AuthContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import PassField from "../ui/PasswordField";
import TextField from "../ui/TextFleld";
import { Button } from "./Button";
import { style } from "./style";


const RenderRegister = () => {
    return(
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu cadastro"
            icon="hotel"
            >
            <View style={style.leftArrow}> 
                <TouchableOpacity onPress={() => router.push("/(auth)")}> 
                    <MaterialCommunityIcons name="arrow-left" size={25} color="#000958ff" />
                </TouchableOpacity>
            </View> 
    
            <TextField
                label="E-mail"
                icon={{lib: "MaterialIcons", name: "email"}}
                placeholder="Digite seu E-mail:"
            >
            </TextField>

            <TextField
                label="CPF"
                icon={{lib: "MaterialIcons", name: "email"}}
                placeholder="Digite seu CPF:"
            >
            </TextField>

            <TextField
                label="Telefone"
                icon={{lib: "MaterialIcons", name: "phone"}}
                placeholder="Digite seu Telefone:"
            > 
            </TextField>

            <PassField
                label="Senha"
                icon={{lib: "MaterialIcons", name: "key"}}
                placeholder="Digite a Senha "
            >
            </PassField>

            <PassField
                label="Senha"
                icon={{lib: "MaterialIcons", name: "key"}}
                placeholder="Confirma a Senha"
            >
            </PassField>

            <Button
                title="Registre-se"
                onPress={() => console.log('Login')}
            />
        </AuthContainer>

    )
}
export default RenderRegister;