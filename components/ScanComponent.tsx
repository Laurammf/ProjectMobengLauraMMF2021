import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import MyReusableForm from './MyReusableForm';
import { addFood } from '../api/FoodsApi';


const converttoJson = (response:Response):Promise<any>=>{
    if(!response.ok) {
        throw new Error ('error: ' + response.status);   
    } else {
        return response.json()}
}


const ScanComponent = ()=> {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanName, setScanName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>('Select an Option');
  const [place, setPlace] = useState<string>('Select an Option');
  const [confection, setConfection] = useState<string>('Select an Option');
  const [date, setDate] = useState<string>('DD-MM-YYYY');
  const [ripeness, setRipeness] = useState<string>('Select an Option');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const mySubmitFunction = ({name, brand, category, place, confection, date, ripeness}:{name:string, brand:string, category:string, place:string, confection:string, date:string, ripeness:string}) =>{
    if (!name.trim()) {
      alert('Please Enter Name!');
      return;
    }
     else {
    {(category === "Fresh")
    ?addFood(
      {             
        name: {name},
        category: {category},
        place: {place},
        confection: {confection},
        date: "null",
        ripeness:{ripeness}, 
        brand: {brand}
      })
    :addFood(
      {             
        name: {name},
        category: {category},
        place: {place},
        confection: {confection},
        date: {date},
        ripeness:"null", 
        brand: {brand}
      })
    }
}
}


const handleBarCodeScanned = async ({data}:any)=>{
    setScanned(false);
    try{
        const returnedFoodFacts = await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
        const jsonOutput = await converttoJson(returnedFoodFacts)
        const scanName = jsonOutput.product.category_properties["ciqual_food_name:en"];
        const brand = jsonOutput.product.brands;
        fetchMyData({scanName, brand});
    } catch(error){
        console.log(error)
    }
}


const fetchMyData = ({scanName, brand}:{scanName:string, brand:string}) => {
  console.log("fetchMyData executed")
  console.log("products name: ")
  console.log(scanName)
  console.log("products brand: ")
  console.log(brand)
  setBrand(brand);
  setScanName(scanName);
}

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <MyReusableForm
      name={scanName} brand={brand} 
      category={category} place={place} confection={confection} ripeness={ripeness} date={date} 
      setName={setScanName} setBrand={setBrand} setCategory={setCategory} setPlace={setPlace} setConfection={setConfection} 
      setRipeness={setRipeness} setDate={setDate} 
      action={mySubmitFunction}
    />

    </SafeAreaView>
  );
  }

export default ScanComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  viewStyle: {
    marginTop: 6,
    backgroundColor: "beige",
    borderWidth: 3,
  },
});