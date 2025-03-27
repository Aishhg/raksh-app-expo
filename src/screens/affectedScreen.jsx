import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Import Firestore instance

const AffectedScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    financialStatus: '',
    requirements: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.address ||
      !formData.phone ||
      !formData.email ||
      !formData.financialStatus ||
      !formData.requirements
    ) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Add data to Firestore under "Affected" collection
      await addDoc(collection(db, 'Affected'), formData);
      Alert.alert('Success', 'Form submitted successfully!');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        address: '',
        phone: '',
        email: '',
        financialStatus: '',
        requirements: '',
      });

    } catch (error) {
      console.error('Error adding document: ', error);
      Alert.alert('Error', 'Failed to submit form.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Affected Person Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={formData.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Financial Status (e.g., Poor, Middle Class)"
        value={formData.financialStatus}
        onChangeText={(value) => handleInputChange('financialStatus', value)}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Basic Requirements (e.g., Food, Water, Shelter)"
        value={formData.requirements}
        onChangeText={(value) => handleInputChange('requirements', value)}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} color="#2c3e50" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default AffectedScreen;
