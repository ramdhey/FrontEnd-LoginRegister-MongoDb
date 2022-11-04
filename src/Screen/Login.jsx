
import React, {useEffect} from 'react'
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import userLoginAction from '../redux/login/loginAction';





export const Login = () => {

  const loginData= useSelector((state)=>state.userLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    let token = localStorage.getItem("token")

    if (token && token !== "undefined"){
      navigate()
    }
    // esLint-disable-next-line
  },[])


  const LoginHandler = (e)=>{
    e.preventDefault()
    dispatch(
      userLoginAction.Login(loginData.email,loginData.password,navigate)
    )
  }


  return (
    <div>
      <div className='pusatadduser' style={{marginLeft:'440px',marginTop:'60px'}}>
        <h1 className="mb-5 titlelogin">Login</h1>
      <Form onSubmit={LoginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-550px'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>dispatch(userLoginAction.setEmail(e.target.value))} />
        
      </Form.Group>  
      
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-570px'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>dispatch(userLoginAction.setPassword(e.target.value))} />
      </Form.Group>


      
      <span>
        <Button type='submit' className='createdata'>Login</Button>

        </span>
        <div className='akuntanya'>
          
      <p>Belum Punya Akun? <span>{'   '}<Link to="/">Register</Link></span></p>
      
      

      </div>
    </Form>


      

      </div>
      
    </div>
  )
}




