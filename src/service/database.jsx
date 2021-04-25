// Database fetch services

import firebase from '../config/firebaseconfig'

export function getCars(){
    const cars = [];
    firebase
    .firestore()
    .collection("RentalCars")
    .onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {  
            cars.push(doc.data());
            localStorage.setItem("cars", JSON.stringify(cars))
        })
    });

    return cars;
}