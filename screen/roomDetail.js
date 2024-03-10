import { Link, router} from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView, Button } from 'react-native';
import { colors} from '../component/colors';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

export default function RoomDetailPage({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Room Booking</Text>
      </View>
      <View style={styles.bottomBorder}>
          <View style={styles.Box}>
          </View>
          <View style={styles.container_smallbox}>
          <View style={styles.Samll_Box}><Text style = {styles.text_small}>82%</Text></View>
          </View>
          <Text style={styles.text_gary}>Date :</Text>
          <Text style={styles.text_gary}>Time :</Text>
      </View>
      <View style={styles.Flex}>
        <Calendar/>
        
        <View style={styles.Select_Time}>
            <Text style={styles.Select_Time_text}>Select Time</Text>
            </View>
        <View style = {styles.Button_confrim}>
          <Text style={styles.Text_Button} >Confirm</Text>
          
        </View>
        
      </View>
      
      </SafeAreaView>
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
    marginLeft:20,
    marginRight:20,
    marginTop:100,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  bottomBorder: {
    height: 235, // ส่วนสูงของกรอบสีเหลี่ยม
    marginTop:20,
    marginLeft:45,
    marginRight:45,
    borderColor: 'black',
    borderWidth:1,
    backgroundColor: 'white', // สีของกรอบสีเหลี่ยม
    padding:20,
    borderRadius:10,

  },
  Box: {
    height: 100, // ส่วนสูงของกรอบสีเหลี่ยม
    
    borderColor: 'black',
    borderWidth:1,
    backgroundColor: 'gray', // สีของกรอบสีเหลี่ยม
    borderRadius:10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.dark,

    
},
Samll_Box: {
  height: 30, // ส่วนสูงของกรอบสีเหลี่ยม
  width:50,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  borderColor: 'black',
  borderWidth:1,
  backgroundColor: 'black', // สีของกรอบสีเหลี่ยม
  alignSelf: 'flex-end',
  display: 'flex',
  justifyContent: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนตั้ง
  alignItems: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนนอน
},
text_small: {
  fontSize: 12,
  fontWeight: "bold",
  color:'white',
},
text_gary: {
  fontSize: 13,
  color:'gray',
  marginBottom:10,
},
Button: {
  marginTop:30,
  height:80,
  width:170,
  borderRadius: 10, // ตั้งความโค้งของมุมเป็น 20
  overflow: 'hidden', // เพื่อให้มุมมีการคอนเทนต์ตรงมุม
},
Text_Button: {
  fontSize: 20,
  color:'white',

 
},

Button_confrim: {
  marginTop:25,
  
  height:40,
  width:140,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderColor: 'black',
  borderWidth:1,
  backgroundColor: 'green', // สีของกรอบสีเหลี่ยม,
  display: 'flex',
  justifyContent: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนตั้ง
  alignItems: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนนอน  
  
},
Flex: {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  
},
container: {
  backgroundColor:'white',
  width:'100%',
  height:'100%',
},
container_smallbox: {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:10,
  marginBottom:10
},
Select_Time:{
    marginTop:25,
    backgroundColor:'#f5f5f5',
    height:50,
    width:270,
    borderRadius:10,
    justifyContent: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนตั้ง
    alignItems: 'left', // จัดเรียงข้อความตรงกลางตามแนวแกนนอน  
},
Select_Time_text:{
    color:'gray',
    margin:10,

},
});