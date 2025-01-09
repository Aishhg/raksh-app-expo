import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen'; 
import AdminScreen from './src/screens/adminScreen';
import HomeScreen from './src/screens/homeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen} // You can define the AdminScreen as needed
          options={{ title: 'Admin', headerShown: true }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} // You can define the HomeScreen as needed
          options={{ title: 'Home', headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;