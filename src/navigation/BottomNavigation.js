import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Checkout from '../screens/Checkout';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const BottomNavigation=() =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Checkout} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;