import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import CompleteList from '../components/CompleteList'



const CompleteListScreen = () =>{
    return (
      <ScrollView  style={{marginTop: 70}}>
        <Text style={styles.Medium}>
          The Complete List of Ingredients Added in the Order they were added:
        </Text>
      <Text style={{marginLeft:12}}>obs: to delete, clik on the button only once than update</Text>
        <Text style={styles.Medium}>Name</Text>
        <Text style={styles.Small}>category, place, confection, brand, best before/ripeness: </Text>
        <CompleteList/>
    </ScrollView>
  
    )
  }

  export default CompleteListScreen;

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
  });
