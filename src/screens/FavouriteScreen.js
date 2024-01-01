import { StyleSheet, View ,Text} from "react-native";
import COLORS from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const FavouriteScreen=()=>{

    return (
    <SafeAreaView style={favStyle.container}>
        <Text style={{ color: COLORS.black ,fontWeight:'600',fontSize:22}}>Favourite</Text>
    </SafeAreaView>)
}

export default FavouriteScreen;

const favStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    }
});