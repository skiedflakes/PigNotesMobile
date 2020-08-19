import React, { useState, useEffect,Alert} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
const Stack = createStackNavigator(); 

function App() {
      useEffect(() => {
      // global.global_url = 'https://mobile.wdysolutions.com/notes_verifier/main/';
      global.global_url = 'http://192.168.254.185/PigNotesMobile/';
    });
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}  />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default App;
