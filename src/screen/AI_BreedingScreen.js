import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import AI_Breeding_mainScreen from './AI_Breeding/AI_Breeding_main';
const Stack = createStackNavigator();
export default function AbortScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Adopt Main"
        component={AI_Breeding_mainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}