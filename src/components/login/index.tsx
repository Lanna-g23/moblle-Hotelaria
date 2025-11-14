import { TouchableOpacity } from "react-native";
import AuthContainer  from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField  from "../ui/TextFleld";
import { global } from "../ui/styles";
import { Text } from "@react-navigation/elements";

const RenderLogin = () => {
    return (
        <AuthContainer
            title="Bem-vindo"
            subtitle="Faça seu login para continuar!"
            icon="hotel">
           
           {/* children */}
            <TextField
                label="E-mail"
                icon="email"
                placeholder="Digite seu E-mail"
                keyboardType="email-address"
            />

            <PasswordField
                label="Senha"
                icon="lock"
                placeholder="Digite sua senha"
            />

            <TouchableOpacity style={[global.primeryButton]}>
                <Text style={global.primeryButtonText}>Entrar</Text>
            </TouchableOpacity>

        </AuthContainer>
    )
};

export default RenderLogin;