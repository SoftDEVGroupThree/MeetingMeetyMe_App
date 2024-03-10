import { Link, router} from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView, Button } from 'react-native';
import { colors} from '../component/colors';
import { useNavigation } from '@react-navigation/native';

export default function RoomBookingPage({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Room Booking</Text>
      </View>
      <View style={styles.bottomBorder}>
          <View style={styles.Box}>
          </View>
          <View style={styles.container_smallbox}>
          <Text><Text style={styles.text}>รอดึง</Text> <View style={styles.Samll_Box}><Text style = {styles.text_small}>82%</Text></View></Text>
          </View>
          <Text style={styles.text_gary}>Date :</Text>
          <Text style={styles.text_gary}>Time :</Text>
      </View>
      <View style={styles.Flex}>
        <View style = {styles.Button_cancle}>
          <Text style={styles.Text_Button} >Cancle</Text>
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
Button_cancle: {
  marginTop:25,
  marginRight:20,
  height:40,
  width:140,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderColor: 'black',
  borderWidth:1,
  backgroundColor: 'red', // สีของกรอบสีเหลี่ยม
  alignSelf: 'flex-start',
  display: 'flex',
  justifyContent: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนตั้ง
  alignItems: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนนอน
  marginLeft:50,
  
},
Button_confrim: {
  marginTop:25,
  marginRight:20,
  height:40,
  width:140,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderColor: 'black',
  borderWidth:1,
  backgroundColor: 'green', // สีของกรอบสีเหลี่ยม
  alignSelf: 'flex-start',
  display: 'flex',
  justifyContent: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนตั้ง
  alignItems: 'center', // จัดเรียงข้อความตรงกลางตามแนวแกนนอน
  marginLeft:15,
  
},
Flex: {
  display:'flex',
  flexDirection:'row',
  
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
});