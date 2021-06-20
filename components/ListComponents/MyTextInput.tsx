import React from 'react';
import { Text, View, TextInput} from 'react-native';




const MyTextInput = ({name, title, onChangeText}:{name:string, title:string, onChangeText:(value:string)=>void}) =>{
    return (
        <View>
            <Text style={{marginBottom:3}}>{title}</Text>  
            <TextInput
            value={name}
            style={{borderWidth: 1,height: 25}}
            onChangeText={onChangeText}
            />
        </View>
    )
}

    export default MyTextInput;