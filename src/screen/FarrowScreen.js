import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Farrow_mainScreen from './Farrow/Farrow_main';
const Stack = createStackNavigator();
export default function FarrowScreen() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Farrow Main"
        component={Farrow_mainScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
    
  );
}