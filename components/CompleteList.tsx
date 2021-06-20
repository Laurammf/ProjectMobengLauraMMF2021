import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {getFoods} from '../api/FoodsApi'
import { Divider} from 'react-native-elements';
import MyListItem from './ListComponents/MyListItem';


  const CompleteList = () => {

    const [foodList, setFoodList] = useState<string[]>([]);
    useEffect(() => {
      getFoods(onFoodsReceived);
    }, []);

    const onFoodsReceived = (foodList: string[]) => {
      console.log(foodList);
      setFoodList(foodList);
    }

    return ( 
    <FlatList
              data={foodList}
              ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
              keyExtractor={(item, index) => index.toString()}
              renderItem = {({ item, index }) => {
                return (
                    <MyListItem index={index} item={item} buttonBoolean={true}/>
                );
              }
            }
    />
            )
  }


  export default CompleteList;

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
