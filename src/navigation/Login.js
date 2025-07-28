import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '../screens/LoginPage';
import HomePage from '../screens/HomePage';
import MyPage from '../screens/MyPage';

const Tab = createBottomTabNavigator();

export default function LoginScreen() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { display: 'none' }, headerShown: false }}
    >
      <Tab.Screen name="LoginTab" component={LoginPage} />
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="MyPageTab" component={MyPage} />
    </Tab.Navigator>
  );
}
