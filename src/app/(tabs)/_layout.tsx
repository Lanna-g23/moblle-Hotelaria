import React from "react";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


const AuthLayout = () => {
    return (
        <Tabs
        screenOptions={{ tabBarActiveTintColor: "#020766", tabBarInactiveTintColor: "#0d03ca",
        headerShown: false, tabBarStyle: { backgroundColor: "rgb(0, 89, 255)" } }}>

            <Tabs.Screen
        name="explorer"
        options={{ title: "Explorar", tabBarIcon: ({ color }) => 
          (<FontAwesome size={26} name="search" color={color} />) }} />

     <Tabs.Screen
        name="reserve"
        options={{ title: "Reservar", tabBarIcon: ({ color }) => 
          (<MaterialCommunityIcons size={26} name="bag-suitcase" color={color} />) }} />

     <Tabs.Screen
        name="account"
        options={{ title: "Minha conta", tabBarIcon: ({ color }) => 
          (<MaterialCommunityIcons size={26} name="account" color={color} />) }} />

    </Tabs>
    );
};

export default AuthLayout;