import ServerAPI from "../../API/server";
import sweetalert from 'sweetalert2'

import {USER_REGISTER_RESET_FORM,USER_SET_EMAIL,USER_SET_NAME,USER_SET_PASSWORD} from '../ActionType'
// import { Navigate } from "react-router-dom";


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

const setNama = (nama)=>{
    return{
        type: USER_SET_NAME,
        payload:{
            nama:nama,
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




const register = (email,nama,password,navigate)=>async(dispatch)=>{
    try {

        const registerData = {
            email:email,
            nama:nama,
            password:password,
        }
        
        

        const postRegisData = await ServerAPI({
            method:"POST",
            mode:"cors",
            url:"/register/",
            data: registerData,
        })
        console.log(postRegisData)

        

        if (postRegisData.status===200){
            sweetalert.fire({
                title: "Selamat Registrasi Anda Berhasil ",
                icon:"success",
                timer:2000,
            })
            navigate("/login")

        }
        
    } catch (error) {
        sweetalert.fire({
            title: "Gagal Registrasi ",
            icon:"error",
            timer:1700,
        })
        console.log(error.response.data)
        
    }
}

const userRegisterAction = {
    resetForm,
    setEmail,
    setNama,
    setPassword,
    register,
}

export default userRegisterAction