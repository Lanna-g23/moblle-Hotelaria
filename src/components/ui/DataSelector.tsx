import { Dimensions, TouchableOpacity, Text, View } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { global } from "./styles";

type Props = {
    onSelectDate: (date: string) => void;
    onClose?: () => void;
}

const DateSelector = ({ onSelectDate, onClose }: Props) => {
    const { width, height } = Dimensions.get("window");
    
    const today = new Date();
    const startDate = `${today.getFullYear()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}`;

    const handleDateSelect = (date: string) => { 
        const formattedDate = formatDateToBR(date); 
        onSelectDate(formattedDate);
    };

    const formatDateToBR = (dateString: string): string => {
        try {
            const parts = dateString.split('/');
            if (parts.length === 3) {
                const [year, month, day] = parts;
                return `${day}/${month}/${year}`;
            }
            return dateString;
        } catch (error) {
            return dateString;
        }
    };

    return (
        <View style={global.centerView}>
            <View style={[global.modalView, { width: width * 0.9 }]}>
                
                <DatePicker
                    mode="calendar"
                    options={{
                        mainColor: "#000cb6ff",
                        textHeaderColor: "#0113b5ff",
                        textDefaultColor: "#000cb3ff",
                        textSecondaryColor: "#0011ffff",
                        textFontSize: 15,
                        textHeaderFontSize: 16,
                        defaultFont: "System",
                        headerFont: "System"
                    }}
                    style={{ 
                        borderRadius: 14, 
                        width: width * 0.8, 
                        height: height * 0.35,
                    }}
                    isGregorian={true}
                    minimumDate={startDate}
                    selected={startDate}
                    onSelectedChange={handleDateSelect}
                    onDateChange={() => {}}
                />

                <TouchableOpacity
                style={global.closeButton}
                onPress={onClose}
                >
                    <Text style={global.closeButtonText}>Fechar</Text>

                </TouchableOpacity>

            </View>
        </View>
    );
};

export default DateSelector;