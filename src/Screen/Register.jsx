
import React,{useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import userRegisterAction from '../redux/register/registerAction'
import Button from 'react-bootstrap/Button';


import {useSelector,useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'






const Register = () => {
  const registerData = useSelector((state)=>state.userRegister)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(userRegisterAction.resetForm())

    let token = localStorage.getItem("token")
    if(token && token !== "undefined"){
      navigate()
    }

    // esLint-disable-next-line
  },[])

  const hanldeRegister = (e) =>{
    e.preventDefault()
    dispatch(
      userRegisterAction.register(
        registerData.email,
        registerData.nama,
        registerData.password,
        navigate
      )
    )

  }



  return (
    <div>
      <div className='pusatadduser' style={{marginLeft:'400px',marginTop:'60px'}}>
        <h1 className="mb-5 titlelogin">Registrasi</h1>
      <Form onSubmit={hanldeRegister}>
      

      <Form.Group className="mb-3" controlId="validationCustomUsername" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-570px'}}>FullName</Form.Label>
        <Form.Control type="text" placeholder="Enter FullName" onChange={(e)=>dispatch(userRegisterAction.setNama(e.target.value))} />
        
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-550px'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>dispatch(userRegisterAction.setEmail(e.target.value))} />
        
      </Form.Group>

      
      
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-570px'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>dispatch(userRegisterAction.setPassword(e.target.value))}/>
      </Form.Group>

      
      


      
      <span>
        <Button type='submit' className='createdata'>Register</Button>

        </span>
    </Form>

    <div className='akuntanyaregis'>
      <p>Sudah Punya Akun? <span>{'   '}<Link to="/login">Login</Link></span></p>
      
      

    </div>

  

      

      </div>
      
    </div>
  )
}
export default Register




