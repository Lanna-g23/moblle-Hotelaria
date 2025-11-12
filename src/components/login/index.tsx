import  AuthContainer  from "../ui/AuthContainer";
import  TextField  from "../ui/TextFleld";

const RenderLogin = () => {
    return (
        <AuthContainer
            title="Bem-vindo"
            subtitle="Faça seu login para continuar!"
            icon="hotel">
           
           {/* children */}
            <TextField
                label="E-mail"
                icon="email">
            </TextField>
        </AuthContainer>
    )
};

export default RenderLogin;