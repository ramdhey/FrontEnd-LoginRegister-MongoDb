import {USER_SET_EMAIL,USER_SET_PASSWORD} from '../ActionType'


const initialState = {
    email:"",
    password:"",
    
}


const userLoginReducer =  (state=initialState,action)=>{
    switch (action.type) {
        case USER_SET_EMAIL:
            return{
                ...state,
                email:action.payload.email,
            }
        
        case USER_SET_PASSWORD:
            return{
                ...state,
                password:action.payload.password,
                }
    
        default:
            return state
    }
}

export default userLoginReducer