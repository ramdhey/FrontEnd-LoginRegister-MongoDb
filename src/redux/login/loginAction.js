import ServerAPI from "../../API/server";
import sweetalert from 'sweetalert2'

import {USER_SET_EMAIL,USER_SET_PASSWORD} from '../ActionType'
// import { Navigate } from "react-router-dom";
import userBerandaAction from './../beranda/berandaAction';


const setEmail = (email)=>{
    return{
        type: USER_SET_EMAIL,
        payload:{
            email:email,
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


const Login = (email,password,navigate)=>async (dispatch) =>{
    try {
        
        

        // if(postLoginData.data.message==="Login Sukses"){
        //     sweetalert.fire({
        //         title:"Login Anda Sukses",
        //         icon: "success",
        //         timer: 2000,
        //     })
        // }try {
            const loginData = {
                email:email,
                password:password,
            }
            
            
    
            const postLoginData = await ServerAPI({
                method:"POST",
                mode:"cors",
                url:"/register/login",
                data: loginData,
            })
  
            let token= postLoginData.data.token
            localStorage.setItem("token",token)
  
      if (postLoginData.data.message === "login sukses") {
        sweetalert.fire({
          title: "Login Success",
          icon: "success",
          timer: 2000,
        });
  
        const getDetailUser = await ServerAPI({
          method: "GET",
          url: "/register/notFound",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        
        
        dispatch(userBerandaAction.setBerandaData(getDetailUser.data.user));
        localStorage.setItem("user", JSON.stringify(getDetailUser));
  
        navigate("/beranda");
        
        window.location.reload();
      } else if (postLoginData.data === "password salah") {
        sweetalert.fire({
          title: "Password Salah",
          icon: "error",
          timer: 2000,
        });
      }
    } catch (error) {
      console.log("Error...", error);
    }
  };



const userLoginAction = {
    setEmail,
    setPassword,
    Login,
}


export default userLoginAction