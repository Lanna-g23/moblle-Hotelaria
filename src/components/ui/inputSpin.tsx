import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner";

type Props={
    onSelectSpin: (guests: string) => void;
};

const InputSpin = ({onSelectSpin}: Props) =>{



    const {width, height} = Dimensions.get("window")
    return(   
        <InputSpinner
        max={10}
        min={1}
        step={1}
        colorMax={"#03109dc8"}
        colorMin={"#000d9ba1"}

        />
    );
}


export default InputSpin;