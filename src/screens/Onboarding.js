import COLORS from "../utils/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Swiper from 'react-native-swiper';
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {

    const navigation = useNavigation();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwiperIndexChanged = (index) => {
        setCurrentIndex(index);
        if(index==2){ 
            console.warn("index",index)
            navigation.navigate('Dashboard');
        }
    };

    const renderIndicator = () => {
        const indicators = Array.from({ length: 3 }, (_, i) => (
            <TouchableOpacity
                key={i}
                style={[OnboardingStyle.indicator, i === currentIndex && OnboardingStyle.activeIndicator]}
            />
        ));

        return <View style={OnboardingStyle.indicatorContainer}>{indicators}</View>;
    };

    return (<SafeAreaView style={OnboardingStyle.container}>

        <Swiper
            loop={false}
            showsPagination={false}
            onIndexChanged={handleSwiperIndexChanged}
        >
            <View style={OnboardingStyle.slide}>
                <Image style={{ width: '100%', resizeMode: 'contain', top: 50 }} source={require('../assets/healthy-food.png')}></Image>
                <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: 'center', top: 60, color: COLORS.black }}>Welcome to Food Lover App</Text>
            </View>

            <View style={OnboardingStyle.slide}>
                <Image style={{ width: '100%', resizeMode: 'contain', top: 50 }} source={require('../assets/pizza.png')}></Image>
                <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: 'center', top: 60, color: COLORS.black }}>Explore Exciting Food</Text>
            </View>

            <View style={OnboardingStyle.slide}>
                <Image style={{ width: '100%', resizeMode: 'contain', top: 50 }} source={require('../assets/noodles.png')}></Image>
                <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: 'center', top: 60, color: COLORS.black }}>Get Started Now</Text>
            </View>

        </Swiper>
        {renderIndicator()}
    </SafeAreaView >)
}


export default Onboarding;

const OnboardingStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '60%',
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        marginTop: 20,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: COLORS.secondary,
    },
});