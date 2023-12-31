import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import COLORS from '../utils/colors';
import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import Favourite from '../screens/Favourite';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/home.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/portfolio.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
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
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/active.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/more.png')}
              style={{ tintColor: color, width: 28, height: 28 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
