import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Abort_MainScreen from './Abort/Abort_main';
const Stack = createStackNavigator();
export default function AbortScreen() {

   
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Abort Main"
        component={Abort_MainScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
    
  );
}