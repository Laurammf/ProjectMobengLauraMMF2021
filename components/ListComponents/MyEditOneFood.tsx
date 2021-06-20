import React, { useState} from 'react';
import { editFood} from '../../api/FoodsApi';
import MyReusableForm from '../MyReusableForm';


const MyEditOneFood = ({food}) => {

    const [name, setName] = useState<string>(food.name.name);
    const [brand, setBrand] = useState<string>(food.brand.brand);
    const [oldName, setOldName] = useState<string>(food.name.name);
    const [category, setCategory] = useState<string>(food.category.category);
    const [place, setPlace] = useState<string>(food.place.place);
    const [confection, setConfection] = useState<string>(food.confection.confection);
    const [date, setDate] = useState<string>(food.date.date);
    const [ripeness, setRipeness] = useState<string>(food.ripeness.ripeness);




    const callEditFood = () =>{
      editFood({
        oldName: {oldName},
        newName: {name},
        newBrand: {brand},
        newCategory: {category},
        newPlace: {place},
        newConfection: {confection},
        newDate: {date},
        newRipeness: {ripeness}
      });
    }

    return (
      <MyReusableForm
        name={name} brand={brand} category={category} place={place} confection={confection} ripeness={ripeness} date={date} 
        setName={setName} setBrand={setBrand} setCategory={setCategory} setPlace={setPlace} setConfection={setConfection} 
        setRipeness={setRipeness} setDate={setDate} action={callEditFood}
    />
    )
}


export default MyEditOneFood;
