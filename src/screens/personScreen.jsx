import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PersonDetails = ({ route }) => {
  const { person } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Person Details</Text>
      <View style={styles.detailsContainer}>
        <Image source={person.image} style={styles.personImage} />
        <View style={styles.detailsText}>
          <Text style={styles.detail}>Name: {person.name}</Text>
          <Text style={styles.detail}>Age: {person.age}</Text>
          <Text style={styles.detail}>Gender: {person.gender}</Text>
          <Text style={styles.detail}>
            Physical Description: {person.physicalDescription}
          </Text>
          <Text style={styles.detail}>Height: {person.height}</Text>
          <Text style={styles.detail}>Last Seen: {person.lastSeen}</Text>
        </View>
      </View>
    </View>
  );
};

export default PersonDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  detailsContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  detailsText: {
    flex: 1,
    justifyContent: 'center',
  },
  detail: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 10,
  },
});
