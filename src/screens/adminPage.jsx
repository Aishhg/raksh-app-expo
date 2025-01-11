import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function AdminPage() {
  const navigation = useNavigation(); // Access navigation

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <Ionicons name="menu" size={24} color="black" />
        <Text style={styles.title}>RAKSHA</Text>
        <Ionicons name="person-circle" size={24} color="black" />
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdminmissingPersonsList')} // Navigate to MissingPersonsList
        >
          <Text style={styles.buttonText}>Missing Persons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        >
          <Text style={styles.buttonText}>Donations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('AdminfoundPersonsList')}
        >
          <Text style={styles.buttonText}>Found</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center', // Ensure text is centered
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', // Ensure bold text
    textAlign: 'center', // Ensure text is centered
  },
});