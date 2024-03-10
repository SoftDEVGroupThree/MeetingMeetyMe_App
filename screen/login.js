import { Link, router} from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors} from '../component/colors';
import { useNavigation } from '@react-navigation/native';



export default function LoginScreen() {


const [email, setEmail] = useState('admin@gg.com');
const [password, setPassword] = useState('1234');

const [loginError, setLoginError] = useState(null);

const navigation = useNavigation();

const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear previous errors
    setLoginError(null);

    // Check if email is empty
    if (email.trim() === '') {
        setLoginError('Email is required');
        return;
    }

    // Check if password is empty
    if (password.trim() === '') {
        setLoginError(console.log('Password is required'));
        return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setLoginError(console.log('Please enter a valid email'));
        return;
    }

    if (email === 'admin@gg.com' && password === '1234') {
        console.log('Login success');
        // navigation.navigate('home', { email: email });
        navigation.navigate('home', { paramKey_Email: email });
    } else {
        console.log('Login failed');
    }
};


return (
    <View style={styles.container}>
    <Text style={styles.title}>Meety Meeting Me</Text>
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
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('register')}>
        <Text style={styles.registerText}>Register</Text>
    </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    top: 80,
    flex: 1,
    paddingHorizontal: 30,
    },
    title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    input: {
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    },
    button: {
    backgroundColor: colors.dark,
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
    registerButton: {
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    },
    registerText: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});