import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { getFoods } from '../api/FoodsApi';
import MyEditOneFood from './ListComponents/MyEditOneFood'


const Edit = () => {
    const [foodList, setFoodList] = useState<string[]>([]);

    useEffect(() => {
     getFoods(onFoodsReceived);
    }, []);

    const onFoodsReceived = (foodList: string[]) => {
      console.log(foodList);
      setFoodList(foodList);
    }

    return (
        <View style={styles.container}>
        {foodList.map(f=>
            <MyEditOneFood food={f}/> 
        )}
        </View>
    )
}


export default Edit;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginTop:9,
     marginLeft: 12
   },
  Button: {
    height: 10, 
    width: 20
  }
   });


