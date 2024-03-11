import { Link, router} from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-neat-date-picker'
import { StatusBar } from 'expo-status-bar';
import { colors} from '../component/colors';
import { Calendar } from 'react-native-calendars';

export default function RoomDetailPage({ navigation, route }) {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(true)
  const { paramKey_Email } = route.params;
  console.log('Email:', paramKey_Email);

  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');

  
  const openDatePickerSingle = () => setShowDatePickerSingle(true)
  const onCancelSingle = () => {
    // You should close the modal in here
    setShowDatePickerSingle(false)
  }

  const onConfirmSingle = (output) => {
    // You should close the modal in here
    setShowDatePickerSingle(false)

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output)
    setDate(output.dateString)
  }

  const onConfirm = ({ date, dateString }) => {
    console.log(date.getTime())
    console.log(dateString)
  }

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  const [endDate, setEndDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
          <Text style={styles.logo}>Meeting Meety Me</Text>
      </View>
      <View style={styles.bottomBorder}>
    <View style={styles.Box}>
    </View>
    <View style={styles.container_smallbox}>
        <Text style={styles.text}>ECC 809</Text> 
        <View style={styles.Small_Box}><Text style = {styles.text_small}>82%</Text></View>
    </View>
    <View>
        <Text style={styles.text_gary}>Date :</Text>
        <Text style={styles.text_gary}>Time :</Text>
    </View>
    </View>
    
    <Calendar
        onDayPress={(day) => {
          handleDateSelect(day);
          console.log('selected day', day);
        }}
        style={{
          absulute: 0,
          width: 'auto',
          height: 'auto',
          borderRadius: 5,
          margin: 10,
          elevation: 5,
        }}
      />

      <Picker
      style={{
        borderRadius: 5,
        margin: -35,
      }}

        selectedValue={startDate}
        onValueChange={(itemValue) => setStartDate(itemValue)}
      >
        <Picker.Item label="Select Time" value="" />
        <Picker.Item label="9:00 AM - 10:00 AM" value="9:00" />
        <Picker.Item label="10:00 AM - 11:00 AM" value="10:00" />
        <Picker.Item label="11:00 AM - 12:00 PM" value="11:00" />
        <Picker.Item label="12:00 PM - 1:00 PM" value="12:00" />
        <Picker.Item label="1:00 PM - 2:00 PM" value="13:00" />
        <Picker.Item label="2:00 PM - 3:00 PM" value="14:00" />
        <Picker.Item label="3:00 PM - 4:00 PM" value="15:00" />
        <Picker.Item label="4:00 PM - 5:00 PM" value="16:00" />
        <Picker.Item label="5:00 PM - 6:00 PM" value="17:00" />
        <Picker.Item label="6:00 PM - 7:00 PM" value="18:00" />
        <Picker.Item label="7:00 PM - 8:00 PM" value="19:00" />
        <Picker.Item label="8:00 PM - 9:00 PM" value="20:00" />
        <Picker.Item label="9:00 PM - 10:00 PM" value="21:00" />
        <Picker.Item label="10:00 PM - 11:00 PM" value="22:00" />
        <Picker.Item label="11:00 PM - 12:00 AM" value="23:00" />
      </Picker>


      <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate('RoomBooking', { paramKey_Email: paramKey_Email })}
       >
             <Text style={styles.buttonText}>Book!</Text>
       </TouchableOpacity>
      </View>
       
  );
}

const styles = StyleSheet.create({
  container_Calendar: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  // root:{backgroundColor:'white'},
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
  paddingTop:20,
  height:500,
  borderWidth:1,
},
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
    borderWidth:1,
    borderColor:'blue '
},
Select_Time_text:{
    color:'gray',
    margin:10,
    

},
Calendar:{
  Flex:'auto',
  borderWidth:1,
  borderColor:'red',
  height:350,
  
},
button: {
  backgroundColor: '#16ac1d',
  paddingHorizontal: 10,
  paddingVertical: 10,
  borderRadius: 5,
  marginTop: 0,
  left: '35%',
  right: 0,
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  width: '30%',
  alignSelf: 'center',
  position: 'absolute',
  bottom: 15,

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});