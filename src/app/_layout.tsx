import AuthProvider from "@/contexts/AuthContext";
import { Slot, Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
   return(
    <AuthProvider>
        <Stack screenOptions={{ headerShown: false}}>
            
        </Stack>
    </AuthProvider>
   );
}

export default RootLayout;