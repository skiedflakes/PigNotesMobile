import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Natural_Breeding_mainScreen from './Not_In_Pig/Not_In_Pig_main';

const Stack = createStackNavigator();
export default function Not_In_PigScreen() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Not In Pig Main"
        component={Natural_Breeding_mainScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
    
  );
}