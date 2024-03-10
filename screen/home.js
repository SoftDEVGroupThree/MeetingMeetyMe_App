import { Link, useLocalSearchParams} from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../component/colors";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import { Image } from "react-native";

export default function MainMenu({ navigation, route }) {
    const { paramKey_Email } = route.params; // Corrected to access params.email
    console.log('Email:', paramKey_Email);

    const onClick_Booked = () => {
        navigation.navigate('login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topNavbar}>
                <Text style={styles.logo}>Meeting Meety Me</Text>
            </View>

            <SafeAreaView style={ styles.RoomContainer }>
                <View style={styles.RoomList}>
                <TouchableOpacity style={styles.RoomItem}
                onPress={() => navigation.navigate('RoomDetail', { roomId: 1 })}
                >
                            <Image style={styles.RoomImage}
                                source={require("../assets/splash.png")}
                            />
                            <Text style={styles.RoomText}>Room 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.RoomItem}>
                        <Text style={styles.RoomText}>Room 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.RoomItem}>
                        <Text style={styles.RoomText}>Room 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.RoomItem}>
                        <Text style={styles.RoomText}>Room 4</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
                        

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
        backgroundColor: colors.dark,
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
        bottom: 30,
        left: 10,
        right: 10,
        backgroundColor: colors.dark,
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
        color: colors.white,
    },

    RoomContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    RoomTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    RoomList: {
        flexDirection: 'row', // arrange items in rows
        flexWrap: 'wrap', // allow items to wrap onto multiple lines
        justifyContent: 'space-between', // add space between items
        margin: 20,
    },
    RoomItem: {
        width: '45%', // set a fixed width
        height: '45%', // set a fixed height
        backgroundColor: colors.light,
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000', // shadow color
        shadowOffset: { width: 0, height: 2 }, // shadow offset
        shadowOpacity: 0.25, // shadow opacity
        shadowRadius: 3.84, // shadow radius
        elevation: 5, // shadow for Android
        margin: 5,
    },
    RoomText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    RoomImage: {
        width: '100%', // take up the full width of its container
        height: '70%', // take up 70% of the height of its container
        resizeMode: 'cover', // scale the image to cover its container
    },

});