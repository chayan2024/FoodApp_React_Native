import { TouchableOpacity,StyleSheet, View, Text } from "react-native"
import COLORS from "../utils/colors";
import { BUTTON_WIDTH, BUTTON_MAX_WIDTH, BUTTON_HEIGHT, BUTTON_BORDER_RADIUS, BUTTON_VERTICAL_MARGIN } from './Dimensions';

const PrimaryButton =({title,onPress=()=>{}})=>{
return (<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={ButtonStyle.buttonContainer}>
     <Text style={ButtonStyle.title}>{title}</Text>
    </View>
</TouchableOpacity>)
}
export default PrimaryButton;

const ButtonStyle = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontWeight: '500',
        fontSize: 16
    },

    buttonContainer: {
        height: BUTTON_HEIGHT,
        alignSelf: 'center',
        borderRadius: BUTTON_BORDER_RADIUS,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: BUTTON_WIDTH,
        maxWidth: BUTTON_MAX_WIDTH,
        marginVertical: BUTTON_VERTICAL_MARGIN
    },
});