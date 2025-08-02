import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomePage';
import PropertyMapPage from '../screens/Property/PropertyMapPage';
import MyPage from '../screens/MyPage/MyPage';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { display: 'none' }, headerShown: false }}
    >
      <Tab.Screen name="HomeMain" component={HomePage} />
      <Tab.Screen name="PropertyMapTab" component={PropertyMapPage} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
}
