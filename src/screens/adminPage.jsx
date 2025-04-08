import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

export default function AdminPage() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [adminId, setAdminId] = useState(null);

  useEffect(() => {
    const getAdminId = async () => {
      try {
        const storedAdminId = await AsyncStorage.getItem("adminId");
        if (storedAdminId) {
          setAdminId(storedAdminId);
          console.log("Admin ID retrieved:", storedAdminId);
        } else {
          console.log("No admin ID found in storage.");
        }
      } catch (error) {
        console.error("Error retrieving admin ID:", error);
      }
    };

    getAdminId();
  }, []);

  const handleSignOut = async () => {
    try {
      if (!adminId) {
        throw new Error("Admin ID not found!");
      }

      const db = getFirestore(getApp());
      const adminDocRef = doc(db, "Admins", adminId);

      await updateDoc(adminDocRef, { isLoggedIn: false });

      await AsyncStorage.removeItem("adminId"); // Clear stored admin ID

      setModalVisible(false);
      Alert.alert("Signed Out", "You have been signed out successfully.");
      navigation.replace("AdminSignIn"); // Redirect to AdminSignIn page
    } catch (error) {
      console.error("Sign Out Error:", error);
      Alert.alert("Error", "Failed to sign out.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Ionicons name="menu" size={24} color="#f8fafc" />
        <Text style={styles.title}>RAKSHA</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="person-circle" size={30} color="#f8fafc" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdminmissingPersonsList")}>
          <Text style={styles.buttonText}>Missing Persons</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdminDonations")}>
          <Text style={styles.buttonText}>Donations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdminfoundPersonsList")}>
          <Text style={styles.buttonText}>Found</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Admin Options</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleSignOut}>
              <Text style={styles.modalButtonText}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonCancel} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#64748b',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: '#64748b',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
