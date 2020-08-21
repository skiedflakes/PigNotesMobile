import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Rebred_mainScreen from './Rebred/Rebred_main';

const Stack = createStackNavigator();
export default function Not_In_PigScreen() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Rebred Main"
        component={Rebred_mainScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
    
  );
}