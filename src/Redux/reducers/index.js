import { combineReducers } from "redux";
import { doctorReducer } from './doctor-reducer'
import { userReducer } from './user-reducer'

const reducers = combineReducers({
    doctorReducer: doctorReducer,
    userReducer: userReducer,
})

export default reducers; 