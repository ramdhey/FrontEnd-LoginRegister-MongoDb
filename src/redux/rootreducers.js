import { combineReducers } from 'redux'
import userRegisterReducers from './register/registerReducers';



import React from 'react';

const rootreducers = combineReducers({
    userRegister:userRegisterReducers,
    
})

export default rootreducers;