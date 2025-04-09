import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // adjust path if needed

const AdminfoundPersonsList = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const fetchPersons = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "Found"));
      const fetchedPersons = [];
      querySnapshot.forEach((document) => {
        fetchedPersons.push({ id: document.id, ...document.data() });
      });
      setPersons(fetchedPersons);
    } catch (error) {
      console.error("Error fetching Found collection:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleUpdateStatus = async (personId, status) => {
    try {
      const personDocRef = doc(db, "Found", personId);
      await updateDoc(personDocRef, {
        valid: status,
      });
      alert(status === 1 ? "Marked as Found!" : "Marked as Not Found!");
      setSelectedPerson(null);
      fetchPersons(); // refresh list after update
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");
    }
  };

  const renderPerson = ({ item }) => (
    <View style={styles.personContainer}>
      <TouchableOpacity onPress={() => setSelectedPerson(selectedPerson === item.id ? null : item.id)} style={styles.personRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name ? item.name[0] : "?"}</Text>
        </View>
        <Text style={styles.personName}>{item.name || "Unnamed"}</Text>
        <Text style={styles.arrow}>{selectedPerson === item.id ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {selectedPerson === item.id && (
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={() => handleUpdateStatus(item.id, 1)} style={styles.actionButton}>
            <Text style={styles.actionText}>Found</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleUpdateStatus(item.id, 0)} style={styles.actionButton}>
            <Text style={styles.actionText}>Not Found</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f8fafc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Found Persons</Text>
      {persons.length === 0 ? (
        <Text style={styles.noDataText}>No persons found!</Text>
      ) : (
        <FlatList
          data={persons}
          keyExtractor={(item) => item.id}
          renderItem={renderPerson}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: "#f8fafc",
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
  },
  noDataText: {
    color: "#f8fafc",
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  personContainer: {
    marginBottom: 20,
  },
  personRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#334155",
    padding: 15,
    borderRadius: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#64748b",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 18,
  },
  personName: {
    color: "#f8fafc",
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    color: "#f8fafc",
    fontSize: 18,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#475569",
    padding: 10,
    borderRadius: 10,
  },
  actionButton: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#64748b",
    marginHorizontal: 5,
  },
  actionText: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AdminfoundPersonsList;