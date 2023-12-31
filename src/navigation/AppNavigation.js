import React from 'react';
import Splash from '../screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import BottomNavigation from './BottomNavigation';
import Payment from '../screens/Payment';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>

          <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnBoarding" component={Onboarding} />
            <Stack.Screen name="Navigation" component={BottomNavigation} />
            <Stack.Screen name="Payment" component={Payment} />

          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default AppNavigation;
