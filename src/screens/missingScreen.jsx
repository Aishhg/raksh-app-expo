import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Make sure your firebase config is properly imported

const MissingScreen = ({ navigation }) => {
  const [missingPersons, setMissingPersons] = useState([]);

  useEffect(() => {
    const fetchMissingPersons = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Missing'));
        const persons = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMissingPersons(persons);
      } catch (error) {
        console.error('Error fetching missing persons:', error);
      }
    };

    fetchMissingPersons();
  }, []);

  const renderPerson = ({ item }) => (
    <TouchableOpacity
      style={styles.personContainer}
      onPress={() => navigation.navigate('PersonDetails', { person: item })}
    >
      {item.imageUrl ? (
        <Image source={{ uri: item.imageUrl }} style={styles.personImage} />
      ) : (
        <Image source={require('../../assets/default.png')} style={styles.personImage} />
      )}
      <Text style={styles.personName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missing Persons</Text>
      <FlatList
        data={missingPersons}
        keyExtractor={(item) => item.id}
        renderItem={renderPerson}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddPersonForm')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MissingScreen;

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
  listContainer: {
    paddingHorizontal: 10,
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  personImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  personName: {
    fontSize: 18,
    color: '#2c3e50',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
