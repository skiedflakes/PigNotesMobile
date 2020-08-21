import React, { useState, useEffect,Alert} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';

//modules
import AbortScreen from './src/screen/AbortScreen';
import AdoptScreen from './src/screen/AdoptScreen';
import AI_BreedingScreen from './src/screen/AI_BreedingScreen';
import ConfirmPregnantScreen from './src/screen/Confirm_PregnantScreen';
import FarrowScreen from './src/screen/FarrowScreen';
import Natural_BreedingScreen from './src/screen/Natural_BreedingScreen';
import Not_In_PigScreen from './src/screen/Not_In_PigScreen';
import RebredScreen from './src/screen/RebredScreen';
import UltrasoundScreen from './src/screen/UltrasoundScreen';
import WeanScreen from './src/screen/WeanScreen';

const Stack = createStackNavigator(); 

function App() {
    useEffect(() => {
      // global.global_url = 'https://mobile.wdysolutions.com/notes_verifier/main/';
      //global.global_url = 'http://192.168.254.185/PigNotesMobile/';
      global.global_url = 'http://192.168.8.106/PigNotesMobile_php/';
    });
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* main */}
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}  />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>

          {/* //modules */}
            <Stack.Screen name="Abort" component={AbortScreen} />
            <Stack.Screen name="Adopt" component={AdoptScreen}/>
            <Stack.Screen name="AI Breeding" component={AI_BreedingScreen}/>
            <Stack.Screen name="Confirm Pregnant" component={ConfirmPregnantScreen} />
            <Stack.Screen name="Farrow" component={FarrowScreen}/>
            <Stack.Screen name="Natural Breeding" component={Natural_BreedingScreen}/>
            <Stack.Screen name="Not in Pig" component={Not_In_PigScreen} />
            <Stack.Screen name="Rebred" component={RebredScreen}/>
            <Stack.Screen name="Ultrasound" component={UltrasoundScreen} />
            <Stack.Screen name="Wean" component={WeanScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default App;
