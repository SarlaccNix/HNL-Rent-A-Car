import { combineReducers } from 'redux'

const user = localStorage.getItem("displayname");

const initialValue = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null};

const authreducer = (state = initialValue, action) =>{
    return state
}

const rootReducer = combineReducers({
    authreducer
});



export default rootReducer;