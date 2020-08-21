import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Ultrasound_mainScreen from './Ultrasound/Ultrasound_main';

const Stack = createStackNavigator();
export default function UltrasoundScreen() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Rebred Main"
        component={Ultrasound_mainScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
    
  );
}