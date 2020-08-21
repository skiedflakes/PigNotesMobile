import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Confirm_Pregnant_mainScreen from './Confirm_Pregnant/Confirm_Pregnant_main';
const Stack = createStackNavigator();
export default function Confirm_PregnantScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Confirm Pregnant Main"
        component={Confirm_Pregnant_mainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}