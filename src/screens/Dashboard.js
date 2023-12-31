import { StyleSheet, View } from "react-native";
import COLORS from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard=()=>{

    return (<SafeAreaView style={dashboardStyle.container}>
           
    </SafeAreaView>)
}

export default Dashboard;

const dashboardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    }
});