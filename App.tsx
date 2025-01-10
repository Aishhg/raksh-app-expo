import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen'; 
import AdminScreen from './src/screens/adminScreen';
import HomeScreen from './src/screens/homeScreen';
import AffectedScreen from './src/screens/affectedScreen';
import VolunteerScreen from './src/screens/volunteerScreen';
import MissingScreen from './src/screens/missingScreen';
import PersonDetails from './src/screens/personScreen';

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
        <Stack.Screen
          name="AffectedScreen"
          component={AffectedScreen} // You can define the AdminScreen as needed
          options={{ title: 'Affected', headerShown: true }}
        />
        <Stack.Screen
          name="VolunteerScreen"
          component={VolunteerScreen} // You can define the AdminScreen as needed
          options={{ title: 'Volunteer', headerShown: true }}
        />
        <Stack.Screen
          name="MissingScreen"
          component={MissingScreen} // You can define the AdminScreen as needed
          options={{ title: 'Missing Person', headerShown: true }}
        />
        <Stack.Screen
          name="PersonDetails"
          component={PersonDetails} // You can define the AdminScreen as needed
          options={{ title: 'Missing Person Details', headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;