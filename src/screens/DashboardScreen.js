import { StyleSheet, Text, View } from "react-native";
import COLORS from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const DashboardScreen=()=>{

    return (<SafeAreaView style={dashboardStyle.container}>
        <Text style={{ color: COLORS.black ,fontWeight:'600',fontSize:22}}>Dashboard</Text>
    </SafeAreaView>)
}

export default DashboardScreen;

const dashboardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    }
});