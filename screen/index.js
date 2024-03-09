
import React from "react";
import {StyleSheet, View, Text, TextInput} from "react-native";
import { colors } from "../component/colors";
import { Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export const HomePage = ({ navigation }) => {
    const onLogin = () => {
        navigation.navigate('login');
    };

    return (
        <View style={style.container}>
            <View style = {{padding: 30}}>
                <Text style = {style.text}>     Meety</Text>
                <Text style = {style.text}>
                    Meeting Me
                </Text>
            </View>
            <View style = {[style.box]}></View>
            <View style = {{padding: 30}}>
            <Button 
                title= "Let's get started!"
                color = {colors.dark}
                onPress={onLogin}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.secondary,
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            fontSize: 32,
            fontWeight: "bold",
            color: colors.dark,
        },
        box: {
            width: 200,
            height: 200,
            backgroundColor: colors.box,
            borderRadius: 20
        },
    })