import { useAuth } from "@/contexts/AuthContext";
import RenderLogin from "../../components/login";
import { Redirect } from "expo-router";

/* Login */
const Login = () => {

    const { token, isLoading } = useAuth();

    if(isLoading) return null;

    if (token) {
        return <Redirect href="/(tabs)/explorer" />
    }

    return( 
        <RenderLogin />
    );
}

export default Login;