import { combineReducers } from 'redux'
import userRegisterReducers from './register/registerReducers';
import userLoginReducer from './login/loginReducer'
import userBerandaReducer from './beranda/berandaReducer'



import React from 'react';
import userBeradaReducer from './beranda/berandaReducer';

const rootreducers = combineReducers({
    userRegister:userRegisterReducers,
    userLogin:userLoginReducer,
    userBeranda:userBerandaReducer,
    
})

export default rootreducers;