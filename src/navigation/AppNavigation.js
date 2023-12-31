import React from 'react';
import Splash from '../screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import Dashboard from '../screens/Dashboard';
import Checkout from '../screens/Checkout';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>

            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnBoarding" component={Onboarding} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Cart" component={Cart} />

          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default AppNavigation;
