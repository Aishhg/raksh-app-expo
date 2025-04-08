import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust path if needed

const AdminVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Volunteers'), (querySnapshot) => {
      const fetchedVolunteers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVolunteers(fetchedVolunteers);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const volunteerRef = doc(db, 'Volunteers', id);
      await updateDoc(volunteerRef, { verified: status });
      Alert.alert('Status Updated', status === 1 ? 'Marked as Verified' : 'Marked as Unverified');
      setSelectedVolunteer(null);
    } catch (error) {
      console.error('Error updating volunteer status:', error);
      Alert.alert('Error', 'Failed to update volunteer status');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => setSelectedVolunteer(item)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemSubText}>Status: {item.verified === 1 ? 'Verified' : 'Unverified'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteers</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={volunteers}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}

      {selectedVolunteer && (
        <Modal
          visible={true}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setSelectedVolunteer(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedVolunteer.name}</Text>

              <TouchableOpacity
                style={[styles.modalButton, styles.verifyButton]}
                onPress={() => updateStatus(selectedVolunteer.id, 1)}
              >
                <Text style={styles.buttonText}>Mark as Verified</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.unverifyButton]}
                onPress={() => updateStatus(selectedVolunteer.id, 0)}
              >
                <Text style={styles.buttonText}>Mark as Unverified</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.closeButton]}
                onPress={() => setSelectedVolunteer(null)}
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
  verifyButton: {
    backgroundColor: '#2ecc71', // Green
  },
  unverifyButton: {
    backgroundColor: '#e67e22', // Orange
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

export default AdminVolunteers;
