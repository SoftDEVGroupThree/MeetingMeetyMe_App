import { Link, router} from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView, Button } from 'react-native';
import { colors} from '../component/colors';
import { useNavigation } from '@react-navigation/native';
import { Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RoomBookingPage({ navigation, route }) {
  const { paramKey_Email } = route.params;
  const { selectedTime } = route.params;
  const { selectedDate } = route.params;
  const { roomName } = route.params;
  const { image } = route.params;
  console.log('Selected Time:', selectedTime);
  console.log('Email:', paramKey_Email);



  const [addRoom, setAddRoom] = useState([]);

  useEffect(() => {
    // Load stored rooms from AsyncStorage when component mounts
    loadRoomsFromStorage();
  }, []); // Empty dependency array ensures the effect runs only once, when the component mounts

  const loadRoomsFromStorage = async () => {
    try {
      const storedRoomsJSON = await AsyncStorage.getItem('storedRooms');
      const storedRooms = storedRoomsJSON ? JSON.parse(storedRoomsJSON) : [];
      setAddRoom(storedRooms);
    } catch (error) {
      console.error('Error loading rooms from AsyncStorage:', error);
    }
  };

  const saveRoomsToStorage = async (rooms) => {
    try {
      const roomsJSON = JSON.stringify(rooms);
      await AsyncStorage.setItem('storedRooms', roomsJSON);
    } catch (error) {
      console.error('Error saving rooms to AsyncStorage:', error);
    }
  };

  const handleAddroom = () => {
    let roomArray = [selectedTime, selectedDate, roomName, image];
    let newRooms = [...addRoom, roomArray];

    // Save updated rooms to AsyncStorage
    saveRoomsToStorage(newRooms);

    // Update state with the new rooms
    setAddRoom(newRooms);

    // Navigate to 'RoomBooked' screen with the updated addRoom array
    navigation.navigate('RoomBooked', { paramKey_Email, room: newRooms });
    console.log('Room:', newRooms);
  };



  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
          <Text style={styles.logo}>Meeting Meety Me</Text>
      </View>
      <View style={styles.bottomBorder}>
      <View style={styles.Box}>
        <Image style={styles.RoomImage}source={image}/>
    </View>
          <View style={styles.container_smallbox}>
              <Text style={styles.text}>{roomName}</Text> 
              <View style={styles.Small_Box}><Text style = {styles.text_small}>82%</Text></View>
          </View>
          <Text style={styles.text_gary}>Date : { selectedDate }</Text>
          <Text style={styles.text_gary}>Time : { selectedTime }</Text>
      </View>
      <View style={styles.Flex}>
        <View style={styles.flex_button2}>
          <TouchableOpacity style={styles.button2}
            onPress={() => navigation.navigate('RoomDetail', { paramKey_Email: paramKey_Email, selectedTime: selectedTime, selectedDate: selectedDate, roomName: roomName, image: image})}
            ><Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.flex_button}>
          <TouchableOpacity style={styles.button}
          onPress={() => handleAddroom()}
          >
          <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>

      </View>
      <SafeAreaView style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.menuItem}
        onPress={() => navigation.navigate('home', { paramKey_Email: paramKey_Email })}
        >
          
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem} 
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
  // root:{backgroundColor:'white'},
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
  fontSize: 14,
  color:'black',
  marginBottom:10,
  fontWeight: "bold",

  
 
},
button: {
  backgroundColor: '#16ac1d',
  paddingHorizontal: 10,
  paddingVertical: 10,
  borderRadius: 5,
  marginTop: 10,
  left: 0,
  right: 0,
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  width: '90%',
  
  

  },
  flex_button:{
    flex:'1'
  },
  flex_button2:{
    flex:'1'
  },
  button2: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '90%',
    
    
  
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
  paddingLeft:50,
  paddingRight:50,
  justifyContent:'space-between',
  marginTop:20,
  
},
container: {
  top: 0,
  flex: 1,
},
container_smallbox: {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:10,
  marginBottom:10,
  
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
Small_Box: {
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
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
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
RoomImage: {
  width: 300,
  height: 100,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 }, 
  shadowOpacity: 0.25,
  shadowRadius: 3.84, 
},
});