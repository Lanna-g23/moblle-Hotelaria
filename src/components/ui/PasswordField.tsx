import React, { useState } from "react";
import TextField from "./TextFleld";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { global } from "./styles";

type Props = React.ComponentProps<typeof TextField>;

const PassField = (props: Props) => {
    //React.useState
    const [show, setShow] = useState(false);
    return (
        <View>
            <TextField 
            {...props}
            //icon={props.icon ?? "lock"}
            secureTextEntry={!show}
            //autoCapitalize="none"
            autoCorrect={false}
            />

            <TouchableOpacity style={global.eyeIcon} onPress={() => setShow((showTrue) => !showTrue)}>
                <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={23}
                color="#040680ff"/>
            </TouchableOpacity>
        </View>
    );
};

export default PassField;