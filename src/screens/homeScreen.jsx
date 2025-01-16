import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#f8fafc" onPress={() => console.log('Menu pressed')} />
        <Text style={styles.title}>RAKSHA</Text>
        <Ionicons name="person-circle-outline" size={28} color="#f8fafc" onPress={() => console.log('Profile pressed')} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AffectedScreen')}
        >
          <Ionicons name="alert-circle-outline" size={20} color="#f8fafc" />
          <Text style={styles.buttonText}>Affected</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VolunteerScreen')}
        >
          <Ionicons name="heart-outline" size={20} color="#f8fafc" />
          <Text style={styles.buttonText}>Volunteer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MissingScreen')}
        >
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b', // Classy dark blue
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
});

export default HomeScreen;