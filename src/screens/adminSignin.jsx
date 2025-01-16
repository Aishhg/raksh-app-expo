import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AdminSignIn = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Perform any authentication checks here (optional)
    navigation.navigate("AdminPage"); // Navigates to AdminPage
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Portal</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username/E-Mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#B0B0B0"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b", // Classy dark blue
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f8fafc", // Light text color
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#f8fafc", // Light text color
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#1e293b", // Classy dark blue
    borderRadius: 8,
    padding: 12,
    color: "#f8fafc", // Light text color
    fontSize: 16,
    borderColor: "#64748b", // Subtle gray-blue
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#64748b", // Gray-blue button background
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f8fafc", // Light text color
  },
});


export default AdminSignIn;