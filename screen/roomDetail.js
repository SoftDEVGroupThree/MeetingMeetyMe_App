import { Link, router} from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,SafeAreaView, Button,Picker } from 'react-native';
import { colors} from '../component/colors';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { StatusBar } from 'expo-status-bar';

export default function RoomDetailPage({ navigation, route }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateSelect = (day) => {
      setSelectedDate(day.dateString);
    };
    const [selectedTime, setSelectedTime] = useState('');
    const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ECC 809 </Text>
        <View style={styles.searchBox}>
        <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
        />
        </View>
      </View>
      <View style={styles.bottomBorder}>
          <View style={styles.Box}>
          </View>
          <View style={styles.container_smallbox}>
            <Text style={styles.text}>รอดึง</Text> <View style={styles.Samll_Box}><text style = {styles.text_small}>82%</text></View>
          </View>
          <Text style={styles.text_gary}>Date :</Text>
          <Text style={styles.text_gary}>Time :</Text>
      </View>
      <View style={styles.Flex}>
      <Calendar
        onDayPress={(day) => {handleDateSelect(day)
            console.log('selected day', day);
            // ทำสิ่งที่คุณต้องการกับวันที่ที่ถูกเลือกได้ที่นี่
        }}
  
    />
    <StatusBar style="auto" />

        <View style={styles.Select_Time}>
            <Picker
            style={{ width: 270, height: 50 }}
            selectedValue={selectedTime}
            onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
            >
            <Picker.Item label="8:00 AM" value="8:00 AM" />
            <Picker.Item label="9:00 AM" value="9:00 AM" />
            <Picker.Item label="10:00 AM" value="10:00 AM" />
            <Picker.Item label="11:00 AM" value="11:00 AM" />
            <Picker.Item label="12:00 AM" value="12:00 AM" />
            <Picker.Item label="1:00 pM" value="1:00 pM" />
            <Picker.Item label="2:00 PM" value="2:00 PM" />
            <Picker.Item label="3:00 PM" value="3:00 PM" />
            <Picker.Item label="4:00 PM" value="4:00 PM" />
            <Picker.Item label="5:00 PM" value="5:00 PM" />
            <Picker.Item label="6:00 PM" value="6:00 PM" />
            <Picker.Item label="7:00 PM" value="7:00 PM" />
            <Picker.Item label="8:00 PM" value="8:00 PM" />
            <Picker.Item label="9:00 PM" value="9:00 PM" />
            <Picker.Item label="10:00 PM" value="10:00 PM" />
            </Picker>
            </View>
        <View style = {styles.Button_confrim}>
            <Button 
                title= "Confirm"
                color = 'green'

                />
          
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
    display:'flex',
    flexDirection:'row',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    flex:'50%'
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
searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    flex:'50%',
    backgroundColor:'#f5f5f5',
  },
  input: {
    flex: 1,
    height: 20,
    paddingHorizontal: 10,
  },

});