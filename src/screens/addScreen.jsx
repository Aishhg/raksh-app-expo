import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddPersonForm = ({ navigation }) => {
  const [newPerson, setNewPerson] = useState({
    name: '',
    age: '',
    gender: '',
    physicalDescription: '',
    height: '',
    lastSeen: '',
    image: null, // State for the selected image
  });

  const handleInputChange = (field, value) => {
    setNewPerson({ ...newPerson, [field]: value });
  };

  const handleImagePick = async () => {
    try {
      // Request permission to access media library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'We need camera roll permissions to proceed.');
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Correct media type for images
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setNewPerson({ ...newPerson, image: result.assets[0].uri }); // Update image URI
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Something went wrong while selecting the image.');
    }
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    console.log('New Person Data:', newPerson);
    navigation.goBack(); // Navigate back to the missing screen after submission
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.imageUploadContainer} onPress={handleImagePick}>
        {newPerson.image ? (
          <Image source={{ uri: newPerson.image }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imageUploadText}>Upload Image</Text>
        )}
      </TouchableOpacity>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={newPerson.name}
          onChangeText={(value) => handleInputChange('name', value)}
          placeholder="Enter name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={newPerson.age}
          onChangeText={(value) => handleInputChange('age', value)}
          placeholder="Enter age"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          value={newPerson.gender}
          onChangeText={(value) => handleInputChange('gender', value)}
          placeholder="Enter gender"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Physical Description</Text>
        <TextInput
          style={styles.input}
          value={newPerson.physicalDescription}
          onChangeText={(value) => handleInputChange('physicalDescription', value)}
          placeholder="Enter physical description"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          value={newPerson.height}
          onChangeText={(value) => handleInputChange('height', value)}
          placeholder="Enter height"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Last Seen</Text>
        <TextInput
          style={styles.input}
          value={newPerson.lastSeen}
          onChangeText={(value) => handleInputChange('lastSeen', value)}
          placeholder="Enter last seen location"
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    paddingBottom: 50,
  },
  imageUploadContainer: {
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  imageUploadText: {
    fontSize: 18,
    color: '#7f8c8d',
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
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddPersonForm;
