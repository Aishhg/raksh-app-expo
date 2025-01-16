import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";

const AdminmissingPersonsList = () => {
  const [selectedPerson, setSelectedPerson] = useState(null); // State to track which person is selected for verification

  const data = [
    { id: "1", name: "Aarav Sharma" },
    { id: "2", name: "Ananya Rao" },
    { id: "3", name: "Ishaan Patel" },
    { id: "4", name: "Maya Menon" },
    { id: "5", name: "Riya Das" },
    { id: "6", name: "Aditya Verma" },
    { id: "7", name: "Neha Gupta" },
    { id: "8", name: "Kavya Singh" },
  ];

  const handleSelectPerson = (id) => {
    setSelectedPerson(selectedPerson === id ? null : id); // Toggle selection
  };

  const handleVerify = () => {
    alert("Verified successfully!");
    setSelectedPerson(null);
  };

  const handleReject = () => {
    alert("Rejected!");
    setSelectedPerson(null);
  };

  const renderPerson = ({ item }) => (
    <View style={styles.personContainer}>
      <TouchableOpacity onPress={() => handleSelectPerson(item.id)} style={styles.personRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name[0]}</Text>
        </View>
        <Text style={styles.personName}>{item.name}</Text>
        <Text style={styles.arrow}>{selectedPerson === item.id ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {selectedPerson === item.id && (
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={handleVerify} style={styles.actionButton}>
            <Text style={styles.actionText}>✔</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleReject} style={styles.actionButton}>
            <Text style={styles.actionText}>✖</Text>
          </TouchableOpacity>
          <Button title="Update" onPress={() => alert("Update pressed!")} />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Missing Persons</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderPerson}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b", // Classy dark blue
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: "#f8fafc", // Light text color
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  personContainer: {
    marginBottom: 20,
  },
  personRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#334155", // Slightly lighter dark blue
    padding: 15,
    borderRadius: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6366f1", // Vibrant blue for contrast
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#f8fafc", // Light text color
    fontWeight: "bold",
    fontSize: 18,
  },
  personName: {
    color: "#f8fafc", // Light text color
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    color: "#f8fafc", // Light text color
    fontSize: 18,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#475569", // Medium blue
    padding: 10,
    borderRadius: 10,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#64748b", // Muted dark blue
    marginHorizontal: 10,
  },
  actionText: {
    color: "#f8fafc", // Light text color
    fontSize: 24,
    fontWeight: "bold",
  },
});


export default AdminmissingPersonsList;