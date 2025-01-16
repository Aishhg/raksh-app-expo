import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AdminDonations = ({ navigation }) => {
  const donationCategories = [
    { title: 'Food', count: 45 },
    { title: 'Cloth', count: 50 },
    { title: 'Other', count: 27 },
  ];

  const handlePress = (category) => {
    // Handle the click for each category
    console.log(`${category} clicked`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Donations</Text>
      </View>
      <View style={styles.content}>
        {donationCategories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => handlePress(category.title)}
          >
            <Text style={styles.categoryText}>{category.title}</Text>
            <Text style={styles.countText}>{category.count}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#555', // Gray background
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  categoryText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  countText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default AdminDonations;
