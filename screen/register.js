
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors} from '../component/colors';
import React, { useState } from 'react';
import { Link } from 'expo-router';


export default function RegisterScreen ({ navigation }){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegistration = () => {
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Email:', email);

        if (password !== confirmPassword) {
            console.log('Password and Confirm Password do not match');
            return; // Exit the function if passwords don't match
        } else {
            navigation.navigate('login');
        }

        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.infoText}>Please fill your information</Text>
        <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        />
        <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
        keyboardType="phone-pad"
        />
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        />
        <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        />
        <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
    </View>
    )
};


const styles = StyleSheet.create({
    container: {
        top: 80,
        flex: 1,
        paddingHorizontal: 30,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});