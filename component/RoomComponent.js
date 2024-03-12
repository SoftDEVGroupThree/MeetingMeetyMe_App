
import React from 'react';
import { View, Image, Text } from 'react-native';

const RoomComponent = ({ room }) => (
  <View style={styles.RoomItem}>
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
);

export default RoomComponent;
