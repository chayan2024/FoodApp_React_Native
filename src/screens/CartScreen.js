import { StyleSheet, Text,View } from "react-native";
import COLORS from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen=()=>{
    return (<SafeAreaView style={cartStyle.container}>
        <Text style={{ color: COLORS.black ,fontWeight:'600',fontSize:22}}>Cart</Text>
    </SafeAreaView>)
}

export default CartScreen;

const cartStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    }
});