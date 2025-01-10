import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const UpdateScreen = ({ route, navigation }) => {
  const { person } = route.params;

  // Define state to store updated data
  const [updatedPerson, setUpdatedPerson] = useState({
    name: person.name,
    age: person.age,
    gender: person.gender,
    physicalDescription: person.physicalDescription,
    height: person.height,
    lastSeen: person.lastSeen,
  });

  const handleInputChange = (field, value) => {
    setUpdatedPerson({ ...updatedPerson, [field]: value });
  };

  const handleSubmit = () => {
    // Submit logic (e.g., send to server, etc.)
    console.log("Updated Person Data:", updatedPerson);
    navigation.goBack(); // Navigate back to the missing screen after submitting
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={person.image} style={styles.personImage} />
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={updatedPerson.name}
          onChangeText={(value) => handleInputChange('name', value)}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={updatedPerson.age}
          onChangeText={(value) => handleInputChange('age', value)}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          value={updatedPerson.gender}
          onChangeText={(value) => handleInputChange('gender', value)}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Physical Description</Text>
        <TextInput
          style={styles.input}
          value={updatedPerson.physicalDescription}
          onChangeText={(value) => handleInputChange('physicalDescription', value)}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          value={updatedPerson.height}
          onChangeText={(value) => handleInputChange('height', value)}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Last Seen</Text>
        <TextInput
          style={styles.input}
          value={updatedPerson.lastSeen}
          onChangeText={(value) => handleInputChange('lastSeen', value)}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allows the content to grow and fill the screen
    backgroundColor: '#f4f4f4',
    padding: 20,
    paddingBottom: 100, // Ensures there's enough space at the bottom for the button
  },
  personImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#2c3e50',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20, // Ensures there’s space between the button and bottom of the screen
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpdateScreen;