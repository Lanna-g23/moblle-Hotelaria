import AuthProvider from "@/contexts/AuthContext";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
   return(
    <AuthProvider>
        <Stack screenOptions={{ headerShown: false}}>
            
        </Stack>
    </AuthProvider>
   );
}