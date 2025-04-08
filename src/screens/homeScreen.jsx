import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const auth = getAuth(); // Firebase Auth instance

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setModalVisible(false);
        Alert.alert("Signed Out", "You have been signed out successfully.");
        navigation.replace("LoginScreen"); // Navigate to Login Screen & remove HomeScreen from stack
      })
      .catch((error) => {
        console.error("Sign Out Error:", error);
        Alert.alert("Error", "Failed to sign out.");
      });
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#f8fafc" onPress={() => console.log('Menu pressed')} />
        <Text style={styles.title}>RAKSHA</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="person-circle-outline" size={28} color="#f8fafc" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AffectedScreen')}>
          <Ionicons name="alert-circle-outline" size={20} color="#f8fafc" />
          <Text style={styles.buttonText}>Affected</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VolunteerScreen')}>
          <Ionicons name="heart-outline" size={20} color="#f8fafc" />
          <Text style={styles.buttonText}>Volunteer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MissingScreen')}>
          <Ionicons name="search-outline" size={20} color="#f8fafc" />
          <Text style={styles.buttonText}>Missing</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')}>
          <Text style={styles.footerText}>About Us</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>User Options</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleSignOut}>
              <Text style={styles.modalButtonText}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonCancel} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#64748b',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#94a3b8',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonCancel: {
    backgroundColor: '#757575',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeScreen;
