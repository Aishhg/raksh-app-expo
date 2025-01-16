import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FoundScreen = ({ route, navigation }) => {
  const { person } = route.params;

  const [locationFound, setLocationFound] = useState('');
  const [foundBy, setFoundBy] = useState('');
  const [physicalCondition, setPhysicalCondition] = useState('alive_healthy'); // Default dropdown value
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here, e.g., API call or saving data
    console.log({
      name: person.name,
      age: person.age,
      gender: person.gender,
      locationFound,
      foundBy,
      physicalCondition,
      additionalInfo,
    });

    // Navigate back to MissingScreen
    navigation.navigate('MissingScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Found Person Form</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image and Fixed Details */}
        <Image source={person.image} style={styles.personImage} />
        <View style={styles.detailsContainer}>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{person.name}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>{person.age}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.value}>{person.gender}</Text>
          </View>
        </View>

        {/* Fillable Form */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Location Found:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter location"
              value={locationFound}
              onChangeText={setLocationFound}
            />
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Found By:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter name"
              value={foundBy}
              onChangeText={setFoundBy}
            />
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Physical Condition:</Text>
            <Picker
              selectedValue={physicalCondition}
              style={styles.picker}
              onValueChange={(itemValue) => setPhysicalCondition(itemValue)}
            >
              <Picker.Item label="Alive (Healthy)" value="alive_healthy" />
              <Picker.Item label="Alive (Injured)" value="alive_injured" />
              <Picker.Item label="Dead" value="dead" />
            </Picker>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Additional Information:</Text>
            <TextInput
              style={[styles.textInput, { height: 80 }]}
              placeholder="Optional details"
              value={additionalInfo}
              onChangeText={setAdditionalInfo}
              multiline
            />
          </View>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2c3e50',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Extra padding to avoid overlap with button
  },
  personImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 15,
  },
  detailBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: '#34495e',
    flex: 2,
    textAlign: 'right',
  },
  textInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: '#34495e',
    backgroundColor: '#ffffff',
  },
  picker: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
