// Database fetch services

import firebase from '../config/firebaseconfig'

const ref = firebase.firestore().collection("RentalCars")

export async function getCars(){
    const cars = [];
    await ref
    .onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {  
            cars.push(doc.data());
            localStorage.setItem("cars", JSON.stringify(cars))
        })
    });
    return cars;
}

export async function updateQty(req, id){
    let calc = null;
    let value = null;

    console.log(id)

    const retrieveData = 
    await ref
    .doc(id)
    .get()
    .then((doc)=>{
        return doc.data()
    })

    value = retrieveData.Qty
    calc = req + value

 
    
    await ref
    .doc(id)
    .update({
        Qty: calc
    })

   

   

    
}

export function sendOrder(userdata, carid){
    
    console.log(userdata, carid)
    
    // firebase
    // .collection("orders")
    // .set(data)
}