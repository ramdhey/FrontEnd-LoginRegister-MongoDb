
import React from 'react'
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';





export const Register = () => {
  return (
    <div>
      <div className='pusatadduser' style={{marginLeft:'400px',marginTop:'60px'}}>
        <h1 className="mb-5 titlelogin">Registrasi</h1>
      <form >
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-550px'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formFullname" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-570px'}}>FullName</Form.Label>
        <Form.Control type='text' placeholder="Enter FullName" />
        
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formNoHp" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-530px'}}>Phone Number</Form.Label>
        <Form.Control type='text' placeholder="Enter Phone Number" />
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:'650px'}}>
        <Form.Label style={{marginLeft:'-570px'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>


      
      <span>
        <Button type='submit' className='createdata'>Register</Button>

        </span>
    </form>

  

      

      </div>
      
    </div>
  )
}




