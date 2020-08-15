import React,{useState,useRef} from 'react';
import {StyleSheet,View,Text,Button,Image,TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default function LoginScreen ({navigation:{goBack},navigation}) {

  const login = async () => {
    navigation.navigate("Home");
    Alert.alert('go to login');
  }
return (
  <View style={styles.container}>
    <Text>LOGIN SCREEN</Text>
    <TouchableOpacity  onPress={() =>login()}>
    <Text style={{
    backgroundColor:"#ffff",
    color:"#14B6D6",
    margin:20,
    padding:15,
    borderWidth: 1.5,
    borderColor:"#14B6D6",
    borderRadius:30,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
    }}>Login</Text>     
    </TouchableOpacity> 
  </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain'
},
  container: {
    flex: 6,

  },
  welcome: {
    fontSize: 18,
    color: '#222',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#34a853',
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginVertical: 8,
  },
  direct: {
    backgroundColor: '#db7d35',
  },
  stripe: {
    backgroundColor: '#556cd6',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
})