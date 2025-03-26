import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Logged in successfully!");
      navigation.navigate('HomeScreen'); // Navigate to Home after successful login
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="shield-outline" size={64} color="#f8fafc" />
        <Text style={styles.title}>RAKSHA</Text>
        <Text style={styles.subtitle}>A DISASTER RELIEF AND RESCUE COMMUNICATION SYSTEM</Text>
      </View>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#cbd5e1"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#cbd5e1"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Buttons Section */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Ionicons name="log-in-outline" size={20} color="#f8fafc" />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdminSignIn')}>
        <Ionicons name="key-outline" size={20} color="#f8fafc" />
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Your Organization</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#f8fafc',
    letterSpacing: 3,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#cbd5e1',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#334155',
    color: '#f8fafc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#64748b',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginLeft: 10,
  },
  linkText: {
    textAlign: 'center',
    color: '#f8fafc',
    fontSize: 14,
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#94a3b8',
  },
});

export default LoginScreen;
