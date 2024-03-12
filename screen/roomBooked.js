import { Link, router} from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView, Butto,ScrollView } from 'react-native';
import { colors} from '../component/colors';
import { useNavigation } from '@react-navigation/native';
import { Image } from "react-native";



export default function RoomBookedPage({ navigation, route }) {
    const { paramKey_Email } = route.params;
    const { selectedTime } = route.params;
    const { selectedDate } = route.params;
    const { roomName } = route.params;
    const { image } = route.params;
    const { room } = route.params;


    console.log('Email:', paramKey_Email);

    return (
        <View style={styles.container}>
          <View style={styles.topNavbar}>
              <Text style={styles.logo}>Meeting Meety Me</Text>
          </View>
          <ScrollView >
            { Array.isArray(room) && room.length >= 0 ? (
              room.map((room, index) => (
                <View key={index} style={styles.RoomItem}>
                  <View style={styles.RoomItem2}>
                    <View style={styles.pic}>
                      <Image style={styles.RoomImage} source={room[3]} />
                    </View>
                    <View style={styles.flex_2}>
                      <View style={styles.detail_edifice}>
                        <Text style={styles.text}>{room[2]}</Text>
                      </View>
                      <View style={styles.detail_date}>
                        <Text style={styles.text}>{room[1]} {room[0]}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.confirm}>
                    <Text style={styles.confrim_text}>Confirmed ID:</Text>
                    <Text style={styles.text}> 65010{Math.floor(Math.random() * 1000)}</Text>
                  </View>
                </View>
              ))
            ) : (
              <Text style={{ textAlign: 'center', paddingTop: 40, fontSize: 20 }}>
                There's no booked room yet
              </Text>
            )}
            </ScrollView>

            <SafeAreaView style={styles.bottomNavbar}>
                <TouchableOpacity style={styles.menuItem}
                onPress={() => navigation.navigate('home', { paramKey_Email, roomName, image, selectedDate, selectedTime, room})}
                >
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuItem} 
                    onPress={() => navigation.navigate('RoomBooked', { paramKey_Email, roomName, image, selectedDate, selectedTime })}
                >
                    <Text style={styles.menuText_Focus}>RoomBooked</Text>
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
    Flex1: {
        display:'flex',
        flexDirection:'row',
        height:150,
        padding:30,
        marginLeft:10,
        marginRight:10,
      },
    pic: {
        flex:'40%',
        
        height:110,
        borderRadius:20,
        backgroundColor:'gray'
      },
      flex_2: {
        flex:'60%',
        display:"flex",
        height:120,
        paddingLeft:25,
        paddingTop:20,
        

      },
      detail_edifice: {
        
        flex:'auto',
      },
      detail_room: {
        
        flex:'auto',

      },
      detail_date: {
        
        flex:'auto',
        
      },
      text:{
        fontSize:17,
      },
      confirm:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        paddingRight:20,
        marginTop:-20,
        paddingBottom:10,
      },
      confrim_text:{
        fontSize:17,
        color:'green',
        textAlign:'right',
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
      RoomItem: {
        backgroundColor: colors.light,
        borderRadius: 10,
        shadowColor: '#000', // shadow color
        shadowOffset: { width: 0, height: 2 }, // shadow offset
        shadowOpacity: 0.25, // shadow opacity
        shadowRadius: 3.84, // shadow radius
        elevation: 5, // shadow for Android
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    RoomItem2: {
      display:'flex',
      flexDirection:'row',
      height:150,
      alignItems: 'center',
      paddingLeft:20,
  },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
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
      color:'white'
  },
  menuText_Focus: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.secondary,
},
  menuText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
  },
  RoomImage: {
    width: 150,
    height: 110,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25,
    shadowRadius: 3.84, 
  },
    });
