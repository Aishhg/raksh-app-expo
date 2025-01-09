import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';

const CustomCheckbox = ({ checked, onChange, label }) => (
  <TouchableOpacity onPress={() => onChange(!checked)} style={styles.checkboxContainer}>
    <View style={[styles.checkbox, checked && styles.checked]} />
    {label && <Text style={styles.checkboxLabel}>{label}</Text>}
  </TouchableOpacity>
);

const VolunteerScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    donateFood: false,
    donateClothes: false,
    donateOthers: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.address || !formData.phone || !formData.email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!formData.donateFood && !formData.donateClothes && !formData.donateOthers) {
      Alert.alert('Error', 'Please select at least one donation type.');
      return;
    }

    // Submit form data (replace with API call or other actions)
    Alert.alert('Success', 'Thank you for volunteering!', [
      { text: 'OK', onPress: () => console.log(formData) },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Volunteer Registration</Text>

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

      <Text style={styles.subtitle}>What would you like to donate?</Text>
      <CustomCheckbox
        label="Food"
        checked={formData.donateFood}
        onChange={(value) => handleInputChange('donateFood', value)}
      />
      <CustomCheckbox
        label="Clothes"
        checked={formData.donateClothes}
        onChange={(value) => handleInputChange('donateClothes', value)}
      />
      <CustomCheckbox
        label="Others"
        checked={formData.donateOthers}
        onChange={(value) => handleInputChange('donateOthers', value)}
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
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#2c3e50',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#2c3e50',
  },
});

export default VolunteerScreen;
