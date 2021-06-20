import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import {ListItem } from 'react-native-elements';
import { deleteFood } from '../../api/FoodsApi';


const MyListItem = ({index, item, buttonBoolean}:{index:string, item:object, buttonBoolean:boolean}) =>{
    return ( 
      <View>
        <ListItem key={index}>
          <ListItem.Content>
            <ListItem.Title style={styles.Medium}>
              {item.name.name}  {"  "}
              {buttonBoolean ? (
              <Button color="lightcoral"
                  title="DELETE"
                  style={styles.Button}
                  onPress={() => { deleteFood(item.name.name); } }
                />)
              : null}
            </ListItem.Title>
            <ListItem.Title style={styles.Small}>
              {item.category.category} {", "} {item.place.place} {", "} {item.confection.confection} {", "} {item.brand.brand} {", "} 
              {(item.category.category === "Fresh")? (
                  item.ripeness.ripeness
              ) : item.date.date
              } 
            </ListItem.Title>
          </ListItem.Content>
      </ListItem>
      </View>
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
      height: 10, 
    }
    });
    export default MyListItem;


