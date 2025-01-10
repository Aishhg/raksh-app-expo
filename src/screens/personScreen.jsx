import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PersonDetails = ({ route, navigation }) => {
  const { person } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Person Details</Text>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image at the Top */}
        <Image source={person.image} style={styles.personImage} />

        {/* Form-like Details */}
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
          <View style={styles.detailBox}>
            <Text style={styles.label}>Physical Description:</Text>
            <Text style={styles.value}>{person.physicalDescription}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Height:</Text>
            <Text style={styles.value}>{person.height}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.label}>Last Seen:</Text>
            <Text style={styles.value}>{person.lastSeen}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Buttons at the Bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => navigation.navigate('UpdateScreen', { person })}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.foundButton}
          onPress={() => navigation.navigate('FoundScreen', { person })}
        >
          <Text style={styles.buttonText}>Found</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonDetails;

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
    paddingBottom: 100, // Extra padding to avoid overlap with buttons
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#f4f4f4',
  },
  updateButton: {
    flex: 1,
    backgroundColor: '#3498db',
    paddingVertical: 15,
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  foundButton: {
    flex: 1,
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    marginLeft: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
