import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigator from './navigation';
import {View, StyleSheet, Button, Alert} from 'react-native';

export default function App() {


  return (
    <NavigationContainer>
      <MyNavigator/>
    </NavigationContainer>
  );
}
