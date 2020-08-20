import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Natural_Breeding_mainScreen from './Natural_Breeding/Natural_Breeding_main';

const Stack = createStackNavigator();
export default function Natural_BreedingScreen() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Natural Breeding Main"
        component={Natural_Breeding_mainScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
    
  );
}