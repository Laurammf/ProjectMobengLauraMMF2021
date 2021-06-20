import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import Edit from '../components/Edit';
  
const EditScreen = () => {

    return (
        <ScrollView  style={{marginTop: 70}}>
            <Text style={styles.Medium}>In this page you can edit the foods already inserted, to cancel it click on any other tab.</Text>
            <Edit/>
        </ScrollView> 
        )
}

      export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    margin: 10
  },
  Medium: {
    marginTop: 13,
    marginLeft:10,
    fontSize : 20
  }

});

