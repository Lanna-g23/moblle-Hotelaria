import { Dimensions, View } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";

type Props = {
    onSelectDate: (date : string) => void
}

const DateSelector = ({onSelectDate} : Props) => {

    const { width, height } = Dimensions.get("window");
    const startDate = getToday();

    return (
        <View>
            <DatePicker
                mode="calendar"
                options={{
                mainColor: "#01168bff",
                textHeaderColor: "#000f7fff",
                textDefaultColor: "#0122dcff",
                textSecondaryColor: "#0019a4ff",
                textFontSize: 14,
                textHeaderFontSize: 16
                }}
                style={{borderRadius: 15, width: width * 0.62, height: height * 0.35}}
                isGregorian={true}
                minimumDate={startDate}
                onSelectedChange={(date) => {
                    onSelectDate(date);
                }}
            />

        </View>
    )

};

export default DateSelector;