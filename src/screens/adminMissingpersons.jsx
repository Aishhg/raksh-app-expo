import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust path if needed

const MissingPersonsList = () => {
  const [missingPersons, setMissingPersons] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Missing'), (querySnapshot) => {
      const persons = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMissingPersons(persons);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const personRef = doc(db, 'Missing', id);
      await updateDoc(personRef, { valid: status });
      Alert.alert('Status Updated', status === 1 ? 'Marked as Missing' : 'Marked as Not Missing');
      setSelectedPerson(null);
    } catch (error) {
      console.error('Error updating status:', error);
      Alert.alert('Error', 'Failed to update status');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => setSelectedPerson(item)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemSubText}>Status: {item.valid === 1 ? 'Missing' : 'Not Missing'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missing Persons</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={missingPersons}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}

      {selectedPerson && (
        <Modal
          visible={true}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setSelectedPerson(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedPerson.name}</Text>

              <TouchableOpacity
                style={[styles.modalButton, styles.missingButton]}
                onPress={() => updateStatus(selectedPerson.id, 1)}
              >
                <Text style={styles.buttonText}>Mark as Missing</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.notMissingButton]}
                onPress={() => updateStatus(selectedPerson.id, 0)}
              >
                <Text style={styles.buttonText}>Mark as Not Missing</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.closeButton]}
                onPress={() => setSelectedPerson(null)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    marginBottom: 12,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemSubText: {
    fontSize: 14,
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    margin: 32,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    width: '100%',
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  missingButton: {
    backgroundColor: '#3498db', // Blue
  },
  notMissingButton: {
    backgroundColor: '#e74c3c', // Red
  },
  closeButton: {
    backgroundColor: '#95a5a6', // Gray
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MissingPersonsList;
