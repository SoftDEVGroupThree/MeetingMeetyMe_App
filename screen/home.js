
import React, {useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet, animatedValue } from "react-native";
import { colors } from "../component/colors";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function MainMenu({ navigation, route }) {

    const imageSource = require("../assets/ECC.jpeg");
    const imageSource2 = require("../assets/ECC1.jpeg");
    const imageSource3 = require("../assets/ECC2.jpeg");
    const imageSource4 = require("../assets/ECC3.jpeg");

   
    const { roomName } = route.params;
    const { image } = route.params;
    const { selectedDate } = route.params;
    const { selectedTime } = route.params;
    const { paramKey_Email } = route.params;
    const { room} = route.params;
    
    
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
                onPress={() => navigation.navigate('RoomDetail', { roomId: 809, roomName:"ECC 809", paramKey_Email: paramKey_Email, image: imageSource })}
                >
                            <Image style={styles.RoomImage} 
                                source={imageSource}
                            />
                            <Text style={styles.RoomText}>ECC 809</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RoomItem}
                onPress={() => navigation.navigate('RoomDetail', { roomId: 810, roomName:"ECC 810", paramKey_Email: paramKey_Email, image: imageSource2 })}
                >
                            <Image style={styles.RoomImage} 
                                source={imageSource2}
                            />
                            <Text style={styles.RoomText}>ECC 810</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RoomItem}
                onPress={() => navigation.navigate('RoomDetail', { roomId: 811, roomName:"ECC 811", paramKey_Email: paramKey_Email, image: imageSource3 })}
                >
                            <Image style={styles.RoomImage} 
                                source={imageSource3}
                            />
                            <Text style={styles.RoomText}>ECC 811</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RoomItem}
                onPress={() => navigation.navigate('RoomDetail', { roomId: 812, roomName:"ECC 812", paramKey_Email: paramKey_Email, image: imageSource4 })}
                >
                            <Image style={styles.RoomImage} 
                                source={imageSource4}
                            />
                            <Text style={styles.RoomText}>ECC 812</Text>
                </TouchableOpacity>

                </View>
            </SafeAreaView>
            

            <SafeAreaView style={styles.bottomNavbar}>
                <TouchableOpacity style={styles.menuItem}
                >
                    <Text style={styles.menuText_Focus}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuItem} 
                    onPress={() => navigation.navigate('RoomBooked', { paramKey_Email, roomName, image, selectedDate, selectedTime, room })}
                >
                    <Text style={styles.menuText}>RoomBooked</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Profile</Text>
                </TouchableOpacity>
            </SafeAreaView>            

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
        borderRadius: 10,
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
        padding: 10, // some padding
    },
    menuText: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white,
    },
    menuText_Focus: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.secondary,
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