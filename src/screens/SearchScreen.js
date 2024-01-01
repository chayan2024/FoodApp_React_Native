import { StyleSheet, Text,View } from "react-native";
import COLORS from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen=()=>{
    return (<SafeAreaView style={searchStyle.container}>
        <Text style={{ color: COLORS.black ,fontWeight:'600',fontSize:22}}>Search</Text>
    </SafeAreaView>)
}

export default SearchScreen;

const searchStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white
    }
});