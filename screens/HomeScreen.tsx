import React from 'react';
import { Text, View, StyleSheet, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodScreen from '../screens/FoodScreen';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import {} from '@expo/vector-icons'
import CompleteListScreen from './CompleteListScreen';
import QueriedListScreen from './QueriedListScreen';
import firebase from 'firebase';
import EditScreen from './EditScreen';
import ScanScreen from './ScanScreen';


const firebaseConfig = {
  apiKey: "AIzaSyAX5-G-4NpqelfXMZ5ETNL-i5z_kEAk8uU",
  authDomain: "foodapp-laurafonseca.firebaseapp.com",
  projectId: "foodapp-laurafonseca",
  storageBucket: "foodapp-laurafonseca.appspot.com",
  messagingSenderId: "876368040928",
  appId: "1:876368040928:web:7da342f1cb93f6d1f59185",
  measurementId: "G-1GBN84GKQX"
};
if (!firebase.apps.length) {
  // firebase.initializeApp({});
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}


const Home= () =>{
  return (
    <View  style={styles.Container}>
      <Text style={styles.Title}>Welcome to Shramba!</Text>
      <Text style={styles.Small}>Shramba (from slovenian: storage room) is an 
      application to manage the food you have home and avoid waste. Come share your Shramba with us!</Text>     

    </View>
  );
}


const MyTabs = () => {
  const Tab = createBottomTabNavigator();

  const FirstIcon = <AntDesign name="home" size={24} color="black" />
  const SecondIcon = <AntDesign name="plus" size={24} color="black" />
  const ThirdIcon = <Feather name="list" size={24} color="black" />
  const FourthIcon = <AntDesign name="scan1" size={24} color="black" />;
  const FifthIcon = <Feather name="search" size={24} color="black" />
  const SexthIcon = <AntDesign name="edit" size={24} color="black" />




  return(
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title:"Home"
          , tabBarIcon: () => FirstIcon
        }}
        />
        <Tab.Screen
          name="FoodScreen"
          component={FoodScreen}
          options={{title:"Add"   
          , tabBarIcon: () => SecondIcon
        }}
        />
        <Tab.Screen
          name="CompleteListScreen"
          component={CompleteListScreen}
          options={{title:"CompleteListScreen"
          , tabBarIcon: () => ThirdIcon
    }}
        />
        <Tab.Screen
          name="QueriedListScreen"
          component={QueriedListScreen}
          options={{title:"SelectByCriteria"
          , tabBarIcon: () => FifthIcon
    }}
        />
        <Tab.Screen
          name="EditScreen"
          component={EditScreen}
          options={{title:"Edit"
          , tabBarIcon: () => SexthIcon
    }}
        />
       <Tab.Screen
          name="ScanScreen"
          component={ScanScreen}
          options={{title:"ScanScreen"
          , tabBarIcon: () => FourthIcon
    }}
        />
      </Tab.Navigator>
  )
}

  
export default function HomeScreen() {

  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}


    const styles = StyleSheet.create({
    Medium: {
      marginTop: 13,
      marginLeft:10,
      fontSize : 20
    },
    Small:{
      marginTop: 8,
      marginLeft:12,
      fontSize : 12 
    },
    Button: {
      height: 30, 
    }, 
    Container: {
      marginTop: 100, 
      width: 380, 
      height: 50, 
      marginLeft: 12, 
      backgroundColor: 'powderblue'
    }, 
    Title:{
      width: 380,
      fontSize: 30,
    }
    });



