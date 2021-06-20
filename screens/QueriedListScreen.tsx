import React from 'react';
import { Text, StyleSheet, ScrollView} from 'react-native';
import QueriedList from '../components/QueriedList'



const QueriedListScreen = () =>{
    return (
      <ScrollView  style={{marginTop: 70}}>
        <Text style={styles.Medium}>The List of Foods Filtered By Criteria:</Text>
        <QueriedList param1={"place.place"} arrayOptions={placeOptions} headline={"Filter by Place"}/>
        <QueriedList param1={"confection.confection"} arrayOptions={confectionOptions} headline={"Filter by Confection"}/>
        <QueriedList param1={"category.category"} arrayOptions={categoryOptions} headline={"Filter by Category"}/>
    </ScrollView>
    )
  }
        const placeOptions = [
            {value: "Select an Option", label: "Select an Option"},
            {value: "Fridge", label: "Fridge" },
            {value: "Freezer", label: "Freezer" },
            {value: "Pantry", label: "Pantry" },
            {value: "Drawer", label: "Drawer" },
            {value: "Cabinet", label: "Cabinet" },
        ];

        const confectionOptions = [
            {value: "Select an Option", label: "Select an Option"},
            {value: "Bottle", label: "Bottle"},
            {value: "Cured", label: "Cured" },
            {value: "Plastic", label: "Plastic" },
            {value: "Paperbag", label: "Paperbag" },
            {value: "Canned", label: "Canned" }
        ];

        
        const categoryOptions = [
            {value: "Select an Option", label: "Select an Option"},
            {value: "Cereal", label: "Cereal"},
            {value: "Fresh", label: "Fresh" },
            {value: "Liquid", label: "Liquid" },
            {value: "Frozen", label: "Frozen" },
            {value: "Sugary", label: "Sugary" },
            {value: "Longterm", label: "Longterm" },
            {value: "Fet", label: "Fet" },
            {value: "Spices", label: "Spices" },
        
        ]; 


  export default QueriedListScreen;



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


