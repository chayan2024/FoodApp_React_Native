import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Payment from '../screens/Payment';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>

          <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
            <Stack.Screen name="Navigation" component={BottomNavigation} />
            <Stack.Screen name="Payment" component={Payment} />

          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default AppNavigation;
