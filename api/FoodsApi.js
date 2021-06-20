import firebase from 'firebase'



export function addFood (food, addComplete){
    firebase.firestore()
    .collection('Foods')
    .add({
        name: food.name,
        brand: food.brand,
        category: food.category,
        place: food.place,
        confection: food.confection,
        date: food.date,
        ripeness: food.ripeness,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((snapshot)=>snapshot.get())
        .then((foodData)=>addComplete(foodData.data()))
        .catch((error)=> console.log(error));
}


export function deleteFood (item){
    firebase.firestore()
    .collection('Foods').where('name.name', '==', item).get()
    .then(querySnapshot => {
        querySnapshot.docs[0].ref.delete();
    });
}

// send back listem of food items
export async function getFoods(foodsRetrieved){
    var foodList = [];
    var snapshot = await firebase.firestore()
    .collection('Foods')
    .orderBy('createdAt')
    .get()
    snapshot.forEach((doc)=> {
        foodList.push(doc.data());
    });
    console.log(foodList);
    foodsRetrieved(foodList);
}

// Logical OR queries. In this case, you should create a separate query for 
// each OR condition and merge the query results in your app. https://rnfirebase.io/firestore/usage
export async function getFoodsByCriteria(foodsRetrieved3, param1, param2){
    var foodList = [];
    var snapshot = await firebase.firestore()
    .collection('Foods')
    .where(param1, '==',param2)
    .get()
    snapshot.forEach((doc)=> {
        const foodUnit = doc.data();
        foodUnit.id = doc.id;
        foodList.push(foodUnit);
    });
    foodsRetrieved3(foodList);
}


export async function editFood({oldName, newName, newBrand, newCategory, newPlace, newConfection, newDate, newRipeness}){
    var snapshot = await firebase.firestore()
    .collection('Foods')
    .where('name.name', '==', oldName["oldName"])
    .get() 
    snapshot.forEach((doc)=> {
        const sendFood = firebase.firestore().collection('Foods').doc(doc.id).update({
                    name: {name: newName["name"]},
                    brand: {brand: newBrand["brand"]},
                    category: {category: newCategory["category"]},
                    place: {place: newPlace["place"]},
                    confection: {confection: newConfection["confection"]},
                    date: {date: newDate["date"]},
                    ripeness: {ripeness: newRipeness["ripeness"]}
                })
                .then(res => {
                    console.log('res: ', res);
                    return
                })
                .catch(error => {
                    console.log('error: ', error);
                })
    });
}