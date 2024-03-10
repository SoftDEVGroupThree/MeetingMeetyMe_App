import { Link, useLocalSearchParams} from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../component/colors";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";

export default function MainMenu({ navigation, route }) {
    const { paramKey_Email } = route.params; // Corrected to access params.email
    console.log('Email:', paramKey_Email);
    return (
        <View style={styles.container}>
            <View style={styles.topNavbar}>
                <Text style={styles.logo}>Meeting Meety Me</Text>
            </View>
            <SafeAreaView style={styles.bottomNavbar}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Booked</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Profile</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <Text>Hello {paramKey_Email} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        flex: 1,
    },
    topNavbar: {
        height: 90,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        top: 25,
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomNavbar: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: 'grey',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    padding: 10, 
    paddingBottom: SafeAreaView + 10, // add safe area padding to existing padding
    elevation: 10, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    },
    menuItem: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        padding: 8, // some padding
    },
    menuText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});