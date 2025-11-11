import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";

type Props = {
    title: string;
    subtitle?: string;
    icon?: keyof typeof FontAwesome6.glyphMap;
    //children: React.ReactNode;
}


export default function AuthContainer({ title, subtitle, icon, /*children*/}: Props){
    return (
    <SafeAreaView style={global.safeArea}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={global.conteiner}>
                <View style={global.header}>
                    {!!icon && <FontAwesome6 name={icon} size={30} color="blue" />}
                    <Text style={global.title}>{title}</Text>
                    {!!subtitle && <Text style={global.subtitle}>{subtitle}</Text>}
                    </View>
                    <View style={global.content}>
                        {/*children*/}
                        <Text>Oi</Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
    );
}