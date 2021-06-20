import React from 'react';
import { Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';





const MyPicker = ({name, title, options, action}:{name:string, title:string, options:string[], action:(value:string)=>void}) =>{
    return (
  <View>
  <Text style={{marginBottom:3}}>{title}</Text> 
      <Picker 
          selectedValue={name}  onValueChange={(itemValue) => action(itemValue)} >
          {options.map(list => <Picker.Item label={list.label} value={list.label} />)}
  </Picker>
  </View>
  )
}

export default MyPicker;