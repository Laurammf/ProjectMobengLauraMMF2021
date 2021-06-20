import React from 'react';
import {StyleSheet, SafeAreaView, Text } from 'react-native';
import FoodList from '../components/FoodList'


  
const FoodScreen = () => {

        return (
            <SafeAreaView style={styles.container}>
              <Text>Add Ingredients to your Schramba!</Text>
              <FoodList/>
            </SafeAreaView> 
        )
}
               

      export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    margin: 10
  },
  title: {
    marginTop: 8,
    fontSize:18
  }
});






