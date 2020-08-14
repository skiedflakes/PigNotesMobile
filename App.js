import React, { useState, useEffect,Alert} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createStackNavigator(); 
// import AsyncStorage from '@react-native-community/async-storage';
function App() {
    useEffect(() => {
      // global.global_url = 'https://mobile.wdysolutions.com/notes_verifier/main/';
      // global.global_url = 'http://192.168.2.104/NotesVerifier_2020/';
    });
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default App;
