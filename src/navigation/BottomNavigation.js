import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import COLORS from '../utils/colors';
import DashboardScreen from '../screens/DashboardScreen';
import SearchScreen from '../screens/SearchScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#F9813A",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ],
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/home.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
          headerShown: false,
        }}
      />

       <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/more.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Image
                source={require('../assets/setting.png')}
                style={{ tintColor: COLORS.primary, width: 28, height: 28 }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/active.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/more.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
