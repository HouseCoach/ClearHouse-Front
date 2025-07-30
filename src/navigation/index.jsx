import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import LoginPage from '../screens/LoginPage';
import AppTabs from './AppTabs';
import FavoriteHouseListPage from '../screens/MyPage/FavoriteHouseListPage';
import InquiredHousePage from '../screens/MyPage/InquiredHousePage';
import MyInfoPage from '../screens/MyPage/MyInfoPage';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: { display: 'none' },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={AppTabs} />
        <Stack.Screen name="MyInfo" component={MyInfoPage} />
        <Stack.Screen
          name="FavoriteHouseList"
          component={FavoriteHouseListPage}
        />
        <Stack.Screen name="InquiredHouse" component={InquiredHousePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
