import AuthProvider from "@/contexts/AuthContext";
import { ReserveProvider } from "@/contexts/ReserveContext";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <AuthProvider>
      <ReserveProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ReserveProvider>
    </AuthProvider>
  );
};

export default RootLayout;