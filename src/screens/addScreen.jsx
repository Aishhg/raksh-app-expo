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
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebaseConfig'; // Ensure correct import of Firebase configuration

const db = getFirestore(app);

const AddPersonForm = ({ navigation }) => {
  const [newPerson, setNewPerson] = useState({
    name: '',
    age: '',
    gender: '',
    physicalDescription: '',
    height: '',
    lastSeen: '',
    image: null, // Image URI
  });

  const handleInputChange = (field, value) => {
    setNewPerson({ ...newPerson, [field]: value });
  };

  const handleImagePick = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'We need camera roll permissions to proceed.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setNewPerson({ ...newPerson, image: result.assets[0].uri });
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Something went wrong while selecting the image.');
    }
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'Missing'), {
        name: newPerson.name,
        age: newPerson.age,
        gender: newPerson.gender,
        physicalDescription: newPerson.physicalDescription,
        height: newPerson.height,
        lastSeen: newPerson.lastSeen,
        image: newPerson.image || '', // Store empty string if no image
        valid: 0, // Admin validation required
        timestamp: new Date(),
      });
      Alert.alert('Success', 'Person added successfully!');
      navigation.goBack();
    } catch (error) {
      console.error('Error adding person:', error);
      Alert.alert('Error', 'Failed to add person.');
    }
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

      {['name', 'age', 'gender', 'physicalDescription', 'height', 'lastSeen'].map((field) => (
        <View style={styles.formGroup} key={field}>
          <Text style={styles.label}>{field.replace(/([A-Z])/g, ' $1').trim()}</Text>
          <TextInput
            style={styles.input}
            value={newPerson[field]}
            onChangeText={(value) => handleInputChange(field, value)}
            placeholder={`Enter ${field}`}
            keyboardType={field === 'age' ? 'numeric' : 'default'}
          />
        </View>
      ))}

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
