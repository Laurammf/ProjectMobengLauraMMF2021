
import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import MyPicker from './ListComponents/MyPicker'
import MyTextInput from './ListComponents/MyTextInput';



const placeOptions = [
    {value: "Select an Option", label: "Select an Option"},
    {value: "Fridge", label: "Fridge" },
    {value: "Freezer", label: "Freezer" },
    {value: "Pantry", label: "Pantry" },
    {value: "Drawer", label: "Drawer" },
    {value: "Cabinet", label: "Cabinet" },
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
  
  const confectionOptions = [
    {value: "Select an Option", label: "Select an Option"},
    {value: "Bottle", label: "Bottle"},
    {value: "Cured", label: "Cured" },
    {value: "Plastic", label: "Plastic" },
    {value: "Paperbag", label: "Paperbag" },
    {value: "Canned", label: "Canned" }
  ];
  
  
  const ripenessOptions = [
    {value: "Select an Option", label: "Select an Option"},
    {value: "Green", label: "Green"},
    {value: "Ripe", label: "Ripe" },
    {value: "Advanced", label: "Advanced" },
    {value: "Too Ripe", label: "Too Ripe" },
    {value: "Canned", label: "Canned" }
  ];


const MyReusableForm = ({name, brand, category, place, confection, ripeness, date, setName, setBrand, setCategory, setPlace, setConfection, setRipeness, setDate, action}:{name:string, brand:string, category:string, place:string, confection:string, ripeness:string, date:string, setName:(value: string) => void, setBrand:(value: string) => void, setCategory:(value: string) => void, setPlace:(value: string) => void, setConfection:(value: string) => void, setRipeness:(value: string) => void, setDate:(value: string) => void, action:Function} ) => { 
    return ( 
            <View style={styles.container}>
            <MyTextInput name={name} title={"Food name (mandatory): "} onChangeText={setName} />
            <MyTextInput name={brand} title={"Brand (optional): "} onChangeText={setBrand}/>
            <MyPicker name={category} title={"Choose Category"} action={setCategory} options={categoryOptions} />
            <MyPicker name={place} title={"Choose Place"} action={setPlace} options={placeOptions} />
            <MyPicker name={confection} title={"Choose Confection"} action={setConfection} options={confectionOptions} />
            {(category === "Fresh")
            ?<MyPicker name={ripeness}  title={"Choose Ripeness"} action={setRipeness} options={ripenessOptions}/> 
            :<MyTextInput name={date} title={"Date : "} onChangeText={setDate}/>}
            <Button color="lightcoral"
                title="SAVE"
                style={styles.Button}
                onPress={()=> action({name, brand, category, place, confection, date, ripeness})} 
                />
            </View>
            )
}



export default MyReusableForm;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginTop:9,
     marginLeft: 12, 
   },
  Button: {
    height: 10, 
    width: 20
  }
})
