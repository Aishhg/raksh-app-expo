import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Import Firestore config

const AdminSignIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }
  
    try {
      // Ensure Firebase Authentication is enabled
      const adminRef = collection(db, "Admins");
      const q = query(adminRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        Alert.alert("Error", "Admin not found!");
        return;
      }
  
      let isValidAdmin = false;
  
      querySnapshot.forEach((doc) => {
        const adminData = doc.data();
        if (adminData.password === password) {
          isValidAdmin = true;
        }
      });
  
      if (isValidAdmin) {
        Alert.alert("Success", "Login successful!");
        // Navigate to Admin Page only after successful login
        navigation.navigate("AdminPage");
      } else {
        Alert.alert("Error", "Incorrect password!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert("Login Failed", "An error occurred. Check permissions and try again.");
    }
  };  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Portal</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#B0B0B0"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1e293b", justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#f8fafc", marginBottom: 30 },
  inputContainer: { width: "100%", marginBottom: 20 },
  label: { fontSize: 16, color: "#f8fafc", marginBottom: 5 },
  input: { backgroundColor: "#1e293b", borderRadius: 8, padding: 12, color: "#f8fafc", fontSize: 16, borderColor: "#64748b", borderWidth: 1 },
  button: { backgroundColor: "#64748b", borderRadius: 8, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center", width: "100%" },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#f8fafc" },
});

export default AdminSignIn;
