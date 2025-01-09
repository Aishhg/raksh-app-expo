import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/rescueworkers.jpg")}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});

export default LoginScreen;
