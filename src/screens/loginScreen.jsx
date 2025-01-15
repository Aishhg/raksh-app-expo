import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RAKSHA</Text>

      <Button
        title="Sign-in with Google"
        color="gray"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button
        title="Sign-up with Google"
        color="gray"
        onPress={() => {}}
      />
      <Button
        title="Admin"
        color="gray"
        onPress={() => navigation.navigate('AdminScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Plain black background
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
    marginBottom: 20, // Added some spacing
  },
});

export default LoginScreen;