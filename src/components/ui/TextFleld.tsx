import { FontAwesome6 } from "@expo/vector-icons";
import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { View, Text } from "react-native";

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof FontAwesome6.glyphMap; 
}

export default function TextField( {label, errorText, icon } : Props) {
    return (
    <View>
        <Text>Teste de label</Text>
        <View>
            {!! icon && (
                <View>
                    <FontAwesome6 name={icon} size={18} color="purple" />
                </View>
            )}
            <TextInput 
                value="Isso é um teste"
            />
            </View>
        </View>
    )
}