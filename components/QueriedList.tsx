import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import {getFoodsByCriteria} from '../api/FoodsApi'
import { Divider} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import MyListItem from './ListComponents/MyListItem';


  const QueriedList = ({param1, arrayOptions, headline}:{param1:string, arrayOptions:string[], headline:string}) => {
  const [criteria, setCriteria] = useState<string>('Select an Option');
  const [foodList, setFoodList] = useState<string[]>([]);

  useEffect(() => { 
  getFoodsByCriteria(onFoodsReceived, param1, criteria);
  }, [criteria]);


  const onFoodsReceived = (foodList: string[]) => { 
  setFoodList(foodList);
  }


  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.container}>
  <Text style={styles.Medium}>{headline}</Text>             
  <Text style={{marginBottom:3}}>Choose Criteria:</Text> 
      <Picker selectedValue={criteria}  
          onValueChange={(itemValue) => setCriteria(itemValue)} >
          {arrayOptions.map(list => <Picker.Item label={list.label} value={list.label} />)}
      </Picker>
  </View>  
  <View>
  <FlatList
        data={foodList}
        ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
        keyExtractor={(item, index) => index.toString()}
        renderItem = {({ item, index }) => {
          return (
            <MyListItem index={index} item={item} buttonBoolean={false}/>
          );
        }
      }
      />
  </View>
  </SafeAreaView> 
  )
  }

  export default QueriedList;

  const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginTop:9,
    marginLeft: 12
  },
  Medium: {
    marginTop: 13,
    marginLeft:10,
    fontSize : 20
  },
  Small:{
    marginTop: 8,
    marginLeft:12,
    fontSize : 12 
  }
  });


