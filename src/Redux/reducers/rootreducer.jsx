import { combineReducers } from 'redux'

const user = localStorage.getItem("displayname");
const avatar = localStorage.getItem("photo")
const cars = localStorage.getItem("cars");

const authInitialValue = user ? { isLoggedIn: true, user, avatar } : { isLoggedIn: false, user: null, avatar: null};
const dbInitialValue = cars ? {isLoading: false, cars} : {isLoading: true, cars: null};



const authreducer = (state = authInitialValue, action) =>{
    return state
}

const databaseReducer = (state = dbInitialValue, action) =>{
    if (action.type ==='SEND_RENTAL_ID'){
        let sendRental = state.cars.filter(car =>{
            return action.id !== car.id
            });
            return{
                ...state,
                cars: sendRental
            }
    }
    return state
}

const rootReducer = combineReducers({
    authreducer,
    databaseReducer
});



export default rootReducer;