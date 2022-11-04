import {USER_REGISTER_RESET_FORM,USER_SET_EMAIL,USER_SET_NAME,USER_SET_PASSWORD} from '../ActionType'


const initialState = {
    email:"",
    nama:"",
    password:"",
    
}

const userRegisterReducers = (state=initialState,action) =>{
    switch (action.type) {
        case USER_REGISTER_RESET_FORM:
            return{
                ...state,
            }
        case USER_SET_EMAIL:
            return{
                ...state,
                email:action.payload.email,
            }
        case USER_SET_NAME:
                return{
                    ...state,
                    nama:action.payload.nama,
                }
        
        case USER_SET_PASSWORD:
            return{
                ...state,
                password:action.payload.password,
            }
        
        default:
            return state;
    }

}

export default userRegisterReducers