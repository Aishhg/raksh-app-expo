import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>RAKSHA</Text>
        <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <Ionicons name="person-circle-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Button
          title="Affected"
          color="gray"
          onPress={() => navigation.navigate('AffectedScreen')}
        />
        <Button
          title="Volunteer"
          color="gray"
          onPress={() => navigation.navigate('VolunteerScreen')}
        />
        <Button
          title="Missing"
          color="gray"
          onPress={() => navigation.navigate('MissingScreen')}
        />
      </View>

      {/* Footer Section */}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate('AboutUsScreen')}
      >
        <Text style={styles.footerText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#34495e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#34495e',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;