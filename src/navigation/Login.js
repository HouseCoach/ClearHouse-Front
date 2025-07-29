import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '../screens/LoginPage';
import HomePage from '../screens/HomePage';
import MyPage from '../screens/MyPage/MyPage';
import FavoriteHouseListPage from '../screens/MyPage/FavoriteHouseListPage';

const Tab = createBottomTabNavigator();

export default function LoginScreen() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { display: 'none' }, headerShown: false }}
    >
      <Tab.Screen name="LoginTab" component={LoginPage} />
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="MyPageTab" component={MyPage} />
      <Tab.Screen name="FavoriteHouseList" component={FavoriteHouseListPage} />
    </Tab.Navigator>
  );
}
