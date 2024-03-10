import { createStackNavigator } from '@react-navigation/stack';

import MainMenu from './screen/home';
import { HomePage } from './screen/index';
import LoginScreen from './screen/login';
import RegisterScreen from './screen/register';
import RoomDetail from './screen/roomDetail';
import RoomBooked from './screen/roomBooked';
import RoomBooking from './screen/roomBooking';

const Stack = createStackNavigator();

const MyNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={MainMenu} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="index" component={HomePage} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="login" component={LoginScreen} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="register" component={RegisterScreen} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="RoomDetail" component={RoomDetail} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="RoomBooked" component={RoomBooked} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="RoomBooking" component={RoomBooking} screenOptions={{ headerShown: false }}/>

    </Stack.Navigator>
  );
};

export default MyNavigator;