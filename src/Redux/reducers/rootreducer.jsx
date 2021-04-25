import { combineReducers } from 'redux'
import { getCars } from '../../service/database'

const user = localStorage.getItem("displayname");
const cars = localStorage.getItem("cars");

const authInitialValue = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null};
const dbInitialValue = cars ? {isLoading: false, cars} : {isLoading: true, cars: null};



const authreducer = (state = authInitialValue, action) =>{
    return state
}

const databaseReducer = (state = dbInitialValue, action) =>{
    return state
}

const rootReducer = combineReducers({
    authreducer,
    databaseReducer
});



export default rootReducer;