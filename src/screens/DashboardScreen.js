import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import COLORS from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import categories from "../utils/categories";

const DashboardScreen = () => {

    const [selectedCategoryIndex, setselectedCategoryIndex,] = React.useState(0)

    const ListOfCategories = () => {

        return (
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={dashboardStyle.categoryListContainer} >
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8}>
                        <View style={dashboardStyle.categorybtn}>
                            <Text>
                                {category.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>)

    }

    return (<SafeAreaView style={dashboardStyle.container}>

        <View style={dashboardStyle.header}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20 }}>Hello,</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>Chayan</Text>
                </View>
                <Text style={{ marginTop: 2, fontSize: 12, color: COLORS.primary }}>Are you Looking for Awesome Foods</Text>
            </View>
            <Image
                style={dashboardStyle.image}
                source={require('../assets/images.png')}
            />
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', paddingHorizontal: 10 }}>
            <View style={dashboardStyle.inputContainer}>
                <Image
                    source={require('../assets/glass.png')}
                    style={{ width: 20, height: 20, marginRight: 8 }}
                />
                <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="Search For Food"></TextInput>
            </View>

            <View style={dashboardStyle.sortBtn}>
                <Image
                    source={require('../assets/sort.png')}
                    style={{ width: 20, height: 20, marginRight: 8, alignItems: 'center', justifyContent: 'center', tintColor: 'white' }}
                />
            </View>
        </View>
        <View>
            <ListOfCategories />
        </View>

    </SafeAreaView>)
}

export default DashboardScreen;

const dashboardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    inputContainer: {

        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    sortBtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    categorybtn: {
        height: 40,
        width: 145,
        marginRight: 5,
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 30,
        flexDirection: 'row'

    }
});