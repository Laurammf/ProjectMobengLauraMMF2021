import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import {addFood } from '../api/FoodsApi'

import MyReusableForm from './MyReusableForm';


  const FoodList = () => {

    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('Select an Option');
    const [brand, setBrand] = useState<string>('Insert Brand');
    const [place, setPlace] = useState<string>('Select an Option');
    const [confection, setConfection] = useState<string>('Select an Option');
    const [date, setDate] = useState<string>('DD-MM-YYYY');
    const [ripeness, setRipeness] = useState<string>('Select an Option');


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
       
return (

  <MyReusableForm
      name={name} brand={brand} category={category} place={place} confection={confection} ripeness={ripeness} date={date} 
      setName={setName} setBrand={setBrand} setCategory={setCategory} setPlace={setPlace} setConfection={setConfection} 
      setRipeness={setRipeness} setDate={setDate} action={mySubmitFunction}
  />

        )
  }
               

      export default FoodList;
