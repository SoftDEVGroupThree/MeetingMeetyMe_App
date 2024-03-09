import { createStackNavigator } from '@react-navigation/stack';

import MainMenu from './screen/home';
import { HomePage } from './screen/index';
import LoginScreen from './screen/login';

const Stack = createStackNavigator();

const MyNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={MainMenu} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="index" component={HomePage} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="login" component={LoginScreen} screenOptions={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default MyNavigator;