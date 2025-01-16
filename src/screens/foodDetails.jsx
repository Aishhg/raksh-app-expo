import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";

const FoodDetails = () => {
  const [selectedDonation, setSelectedDonation] = useState(null); // State to track the selected donation

  const donationData = [
    {
      id: "1",
      category: "Food",
      donor: "Aryan Choudhary",
      details: "10 boxes of non-perishable food items",
    },
    {
      id: "2",
      category: "Food",
      donor: "Rahul Batra",
      details: "10 boxes of non-perishable food items",
    },
    {
      id: "3",
      category: "Food",
      donor: "Aditi Sen",
      details: "5 boxes of non-perishable food items",
    },
  ];

  const handleSelectDonation = (id) => {
    setSelectedDonation(selectedDonation === id ? null : id); // Toggle selection
  };

  const handleVerify = () => {
    alert("Donation verified successfully!");
    setSelectedDonation(null);
  };

  const handleReject = () => {
    alert("Donation rejected!");
    setSelectedDonation(null);
  };

  const renderDonation = ({ item }) => (
    <View style={styles.donationContainer}>
      <TouchableOpacity
        onPress={() => handleSelectDonation(item.id)}
        style={styles.donationRow}
      >
        <View style={styles.categoryTag}>
          <Text style={styles.categoryText}>{item.category[0]}</Text>
        </View>
        <Text style={styles.donationCategory}>{item.category}</Text>
        <Text style={styles.arrow}>
          {selectedDonation === item.id ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {selectedDonation === item.id && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Donor: {item.donor}</Text>
          <Text style={styles.detailText}>Details: {item.details}</Text>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={handleVerify}
              style={styles.actionButton}
            >
              <Text style={styles.actionText}>✔</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleReject}
              style={styles.actionButton}
            >
              <Text style={styles.actionText}>✖</Text>
            </TouchableOpacity>
            <Button title="Update" onPress={() => alert("Update pressed!")} />
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Donation Details</Text>
      <FlatList
        data={donationData}
        keyExtractor={(item) => item.id}
        renderItem={renderDonation}
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
  donationContainer: {
    marginBottom: 20,
  },
  donationRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
  },
  categoryTag: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6a5acd",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  categoryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  donationCategory: {
    color: "#fff",
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    color: "#fff",
    fontSize: 18,
  },
  detailsContainer: {
    marginTop: 10,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
  },
  detailText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
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

export default FoodDetails;