import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";


const AuthLayout = () => {

    const {token, isLoading} = useAuth();

    if (isLoading) return null;

    if(!token) {
        return <Redirect href="/(auth)" />
    }

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#020766', headerShown: false, tabBarStyle: 
        {justifyContent: 'center', alignItems: "center", height: 60, backgroundColor:'#0059ff'}}} >

            <Tabs.Screen  name="explorer"  options={{  title: 'explorer',  tabBarIcon: ({ color }) =>
                <MaterialCommunityIcons size={28} name="map" color={color} />}}/>

            <Tabs.Screen name="reserve" options={{ title: 'reserve', tabBarIcon: ({ color }) => 
                <MaterialCommunityIcons size={28} name="airplane" color={color} /> }}/>

            <Tabs.Screen name="account" options={{ title: 'account', tabBarIcon: ({ color }) => 
                <MaterialCommunityIcons size={28} name="account" color={color} /> }}/>

        </Tabs>
  );
}
export default AuthLayout;

/*
#020766
#0d03ca
#0059ff
*/