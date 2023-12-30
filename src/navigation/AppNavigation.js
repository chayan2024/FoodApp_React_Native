import React from 'react';
import Splash from '../screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Splash" component={Splash} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default AppNavigation;
