import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigator from './navigation'; // Assuming navigation.js path

export default function App() {
  return (
    <NavigationContainer>
      <MyNavigator/>
    </NavigationContainer>
  );
}
