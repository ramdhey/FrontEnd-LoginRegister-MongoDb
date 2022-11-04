import ServerAPI from "../../../API/server";
import sweetalert from 'sweetalert2'

import {USER_SET_EMAIL,USER_SET_PASSWORD,USER_SET_FULLNAME,USER_REGISTER_RESET_FORM} from '../ActionType'
import { Navigate } from "react-router-dom";


const resetForm = () =>{
    return{
        type: USER_REGISTER_RESET_FORM
    }
}

const setEmail = (email)=>{
    return{
        type: USER_SET_EMAIL,
        payload:{
            email:email,
        }
    }
}

const setFullname = (fullname)=>{
    return{
        type: USER_SET_FULLNAME,
        payload:{
            fullname:fullname,
        }
    }
}

const setPassword = (password)=>{
    return{
        type: USER_SET_PASSWORD,
        payload:{
            password:password,
        }
    }
}




const register = (email,fullname,password,navigate)=>async(dispatch)=>{
    try {

        const registerData = {
            email:email,
            name:fullname,
            password:password,
        }

        const postRegisData = await ServerAPI({
            method:"POST",
            mode:"cors",
            url:"/register/",
            data: registerData,
        })

        if (postRegisData.status===200){
            sweetalert.fire({
                title: "Selamat Registrasi Anda Berhasil ",
                icon:"success",
                timer:1700,
            })
            navigate("/login")

        }
        
    } catch (error) {
        console.log(error.response.data)
        
    }
}

const userRegisterAction = {
    resetForm,
    setEmail,
    setFullname,
    setPassword,
    register,
}