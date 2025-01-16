import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/loginScreen'; 
import HomeScreen from './src/screens/homeScreen';
import AffectedScreen from './src/screens/affectedScreen';
import VolunteerScreen from './src/screens/volunteerScreen';
import MissingScreen from './src/screens/missingScreen';
import PersonDetails from './src/screens/personScreen';
import FoundScreen from './src/screens/foundScreen';
import UpdateScreen from './src/screens/updateScreen';
import AddPersonForm from './src/screens/addScreen';
import AdminSignIn from './src/screens/adminSignin';
import AdminPage from './src/screens/adminPage';
import AdminmissingPersonsList from './src/screens/adminMissingpersons';
import AdminfoundPersonsList from './src/screens/adminFoundpersons';
import AdminDonations from './src/screens/adminDonations';
import FoodDetails from './src/screens/foodDetails'; 
import ClothDetails from './src/screens/clothDetails';
import OtherDetails from './src/screens/otherDetails';

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
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: true }}
        />
        <Stack.Screen
          name="AffectedScreen"
          component={AffectedScreen}
          options={{ title: 'Affected', headerShown: true }}
        />
        <Stack.Screen
          name="VolunteerScreen"
          component={VolunteerScreen}
          options={{ title: 'Volunteer', headerShown: true }}
        />
        <Stack.Screen
          name="MissingScreen"
          component={MissingScreen}
          options={{ title: 'Missing Person', headerShown: true }}
        />
        <Stack.Screen
          name="PersonDetails"
          component={PersonDetails}
          options={{ title: 'Missing Person Details', headerShown: true }}
        />
        <Stack.Screen
          name="FoundScreen"
          component={FoundScreen}
          options={{ title: 'Found Person Details', headerShown: true }}
        />
        <Stack.Screen
          name="UpdateScreen"
          component={UpdateScreen}
          options={{ title: 'Update Person Details', headerShown: true }}
        />
        <Stack.Screen
          name="AddPersonForm"
          component={AddPersonForm}
          options={{ title: 'Add Missing Person Details', headerShown: true }}
        />
        <Stack.Screen
          name="AdminSignIn"
          component={AdminSignIn}
          options={{ title: 'Admin Sign In', headerShown: true }}
        />
        <Stack.Screen
          name="AdminPage"
          component={AdminPage}
          options={{ title: 'Admin Page', headerShown: true }}
        />
        <Stack.Screen
          name="AdminmissingPersonsList"
          component={AdminmissingPersonsList}
          options={{ title: 'Missing Persons', headerShown: true }}
        />
        <Stack.Screen
          name="AdminfoundPersonsList"
          component={AdminfoundPersonsList}
          options={{ title: 'Found Persons', headerShown: true }}
        />
        <Stack.Screen
          name="AdminDonations"
          component={AdminDonations}
          options={{ title: 'Donations', headerShown: true }}
        />
        <Stack.Screen
          name="FoodDetails"
          component={FoodDetails}
          options={{ title: 'Food Details', headerShown: true }}
        />
        <Stack.Screen
          name="ClothDetails"
          component={ClothDetails}
          options={{ title: 'Cloth Details', headerShown: true }}
        />
        <Stack.Screen
          name="OtherDetails"
          component={OtherDetails}
          options={{ title: 'Other Details', headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
