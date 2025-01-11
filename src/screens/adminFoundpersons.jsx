import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";

const AdminfoundPersonsList = () => {
  const [selectedPerson, setSelectedPerson] = useState(null); // State to track which person is selected for verification

  const data = [
    { id: "1", name: "Cfg" },
    { id: "2", name: "Dnh" },
    { id: "3", name: "Hnj" },
    { id: "4", name: "Sbg" },
    { id: "5", name: "Mki" },
    { id: "6", name: "Njm" },
    { id: "7", name: "Sed" },
    { id: "8", name: "Vdr" },
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
      <Text style={styles.header}>Found Persons</Text>
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
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: "#fff",
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
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6a5acd",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  personName: {
    color: "#fff",
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    color: "#fff",
    fontSize: 18,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    marginHorizontal: 10,
  },
  actionText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AdminfoundPersonsList;