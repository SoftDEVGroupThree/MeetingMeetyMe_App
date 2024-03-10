import { Link, router} from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView, Button } from 'react-native';
import { colors} from '../component/colors';
import { useNavigation } from '@react-navigation/native';

export default function RoomBookedPage({ navigation, route }) {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>View Booked Room</Text>
          </View>
          <View style={styles.Flex1}>
                <View style={styles.pic}></View>
                <View style={styles.flex_2}>
                    <View style={styles.detail_edifice}>
                        <Text style={styles.text}>ECC</Text>
                    </View>
                    <View style={styles.detail_room}>
                        <Text style={styles.text}>809</Text>
                    </View>
                    <View style={styles.detail_date}>
                        <Text style={styles.text}>Sun, 07 Jan at 07:00 PM</Text>
                    </View>
                </View>
                
          </View>
          <View style={styles.confirm}>
                <Text style={styles.confrim_text}>Confirm</Text>
                <Text style={styles.text}> ID 173826</Text>
          </View>
          </View>
      );
    }
    
    const styles = StyleSheet.create({
      // root:{backgroundColor:'white'},
      header: {
        backgroundColor: 'black',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom:10,

        marginTop:100,
        alignItems: 'center',
      },
      headerText: {
        fontSize: 20,
        color: 'white',
      },
    container: {
      backgroundColor:'white',
      width:'100%',
      height:'100%',
      padding:20,
      flex:1,
    },
    Flex1: {
        display:'flex',
        flexDirection:'row',
        height:150,
        padding:10,
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
        
      },
      confrim_text:{
        fontSize:17,
        color:'green',
        textAlign:'right'
      },
    });
