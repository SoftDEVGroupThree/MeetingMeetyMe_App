import { Link, useLocalSearchParams} from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../component/colors";
import { useNavigation } from '@react-navigation/native';

export default function MainMenu({ navigation, route }) {
    const { paramKey_Email } = route.params; // Corrected to access params.email
    console.log('Email:', paramKey_Email);
    return (
        <View style={styles.container}>
            <View style={styles.topNavbar}>
                <Text style={styles.logo}>Meeting Meety Me</Text>
            </View>
            <View style={styles.bottomNavbar}>
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
            </View>

            <Text>Hello {paramKey_Email} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topNavbar: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomNavbar: {
        height: 50,
        backgroundColor: colors.lightGray,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    menuItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    menuText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});