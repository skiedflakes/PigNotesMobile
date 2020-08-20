import * as React from 'react';
import { StyleSheet,Button, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Wean_mainScreen from './Wean/Wean_main';

const Stack = createStackNavigator();
export default function WeanScreen() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Wean Main"
        component={Wean_mainScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
    
  );
}