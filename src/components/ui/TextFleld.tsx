import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap };

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: NameIcon; 
}

const TextField = ({label, errorText, icon, style, ...restInputProps } : Props) => {
    return (
        <View style={global.inputGroup}>

            <Text style={global.label}>{label}</Text>
            
            <View style={[global.inputBox, global.inputBorder, errorText ? global.inpError : null]}>
                {!! icon && (
                    <View>
                        {icon.lib === "MaterialIcons" && (
                        <MaterialIcons style={global.icon} name={icon.name} size={23} color="#0846ffff" />
                    )}
                </View>
                )}
                
                <TextInput
                    keyboardAppearance="dark"
                    placeholderTextColor="#a0b2cfff"
                    style={[global.input, style]}
                    /* const TextField = (props: Props) => {
                        const label = props.label;
                        const errorText = props.errorText;
                        const style = props.style;
                        const value = props.value;
                        const onChangeText = props.onChangeText;
                        const placeholder = props.placeholder;
                        const autoCapitalize = props.autoCapitalize;
                        const keyboardType = props.keyboardType;
                    } */
                    {...restInputProps}
                />
            </View>
            {!! errorText && 
                <Text style={global.errotext}>{errorText}</Text>
            }
        </View>
    )
};

export default TextField;
