import { StyleSheet, View } from "react-native";
import COLORS from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart=()=>{

    return (<SafeAreaView style={dashboardStyle.container}>
           
    </SafeAreaView>)
}

export default Cart;

const dashboardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    }
});