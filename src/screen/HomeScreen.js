import React, { useState, useEffect } from 'react';
import { Text, View,Alert,StyleSheet,TouchableOpacity,ScrollView,FlatList,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const mydata = [
  {
    id:"1",
    name:"Abort",
  },
  {
    id:"2",
    name:"Adopt",
  },
  {
    id:"3",
    name:"AI Breeding",
  },
  {
    id:"4",
    name:"Confirm Pregnant",
  },
  {
    id:"5",
    name:"Farrow",
  },
  {
    id:"6",
    name:"Natural Breeding",
  },
  {
    id:"7",
    name:"Not in Pig",
  },
  {
    id:"8",
    name:"Rebred",
  },
  {
    id:"9",
    name:"Ultrasound",
  },
  {
    id:"10",
    name:"Wean",
  }

];


const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

export default function HomeScreen ({navigation:{goBack},navigation}) {
  const [menu_list, setMenu_list] = React.useState(null);
  var [content, setcontent] = React.useState(null);

  const logout = () =>{
    goBack();
    AsyncStorage.clear();
    Alert.alert('offline storage cleared');
  }

  useFocusEffect(
    React.useCallback(() => {
        setMenu_list(mydata);
      return () => {
      };
    }, [])
  );

  return (
    <View style={styles.main}>
    <View style={styles.header} >

    <View style={{ flex:6,  flexDirection: 'row', padding:2,}} >
      <Text style={{color:'#ffff',alignSelf:'center',marginLeft:20,fontSize:20}}>PigNotes Mobile</Text>
      <TouchableOpacity style={{flex:5.5,flexDirection:'row-reverse',}} onPress={() =>logout()}>
      <MaterialCommunityIcons  name="logout" size={25} color={"#ffff"} style={{alignContent:'center',alignSelf:'center', color:'#ffff',padding:10}}/>
      <Text style={{alignContent:'center',alignSelf:'center', color:'#ffff'}} onPress={() =>logout()}>Logout</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={styles.body}>
    <View style={{  flexDirection: 'row',alignContent:"center",alignItems:"center"}} >
        {/* <Text>{user}</Text> */}
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{alignContent:"center",margin:2}}
            data={menu_list}
            renderItem={
              ({ item }) => 
              <RowItem
                navigation={navigation}
                title={item.name} 
                id={item.id} />
              }
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent = { FlatListItemSeparator }
        />
    </View>     
      {/* {content} */}

    </View>
    </View>
  );
}


function RowItem ({navigation,title,id}) {
  return (
      <TouchableOpacity onPress={() => getContent(navigation,title,id)}>
          <View style={styles.item}>
            <View style={{flex:3,flexDirection:'row',alignItems:"center"}}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <MaterialIcons style={{alignSelf:'center'}} name="keyboard-arrow-right" size={25} color={"#393737"}/>
          </View>
      </TouchableOpacity>
  );
}

function getContent(navigation,name,id){
    if(id==1){ // load Category
            // navigation.navigate("Category");+
        Alert.alert("Go to Abort Navigation");
    }else if(id==2){ // load items
        // navigation.navigate("Product Entry");
        Alert.alert("Go to Adopt Navigation");
    }else if(id==3){ // load sides
        // navigation.navigate("Sides");
    }else if(id==4){ // load sides
      // navigation.navigate("Size");
  }
}


const styles = StyleSheet.create({
    main:{
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center",
        flex:6,
        backgroundColor: '#ffff',
        alignContent:"center",
        flexDirection:'column'
    },

    header:{
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center",
        flexDirection:'row-reverse',
        padding:2,
        flex:0.6,
        backgroundColor: '#3490DD',
        alignContent:"center",
    },
    body:{
        flex:5.4,
        backgroundColor: '#DADCDC',
        alignContent:"center",
        alignItems:"center",
        
    },
    container: {
        flex: 1,
        marginTop:5,
      },
      item: {
        flexDirection:'row',
        paddingLeft:10,
        backgroundColor:'#ffff',
        padding:5,
        alignContent:"center",
        alignItems:"center"
      },
      title: {
        color:'#4A4A4A',
        padding:15,
        fontSize: 20,
      },
})
