import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner";

type Props={

    guestss: number;
    onSelectSpin: (guests: number) => void;
    minGuests: number;
    colorMax: string;
    colorMin: string;
    max: number;
    step: number;
};

const InputSpin = ({guestss,onSelectSpin,minGuests,colorMax,colorMin,step,max}: Props) =>{
    const {width, height} = Dimensions.get("window")
    return(   
        <InputSpinner
        value={guestss}
        onChange={onSelectSpin}
        max={max}
        min={minGuests}
        step={step}
        colorMax={colorMax}
        colorMin={colorMin}
        />
    );
}

export default InputSpin;