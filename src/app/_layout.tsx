import AuthProvider from "@/contexts/AuthContext";
import { Slot } from "expo-router";
import React from "react";

const RootLayout = () => {
   return(
    <AuthProvider>
        
    </AuthProvider>
   );
}

export default RootLayout;