import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logonav from "../image/vot.svg"

// import Button from 'react-bootstrap/Button';

export const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#0077AE' }}>
        <Container>
          <Navbar.Brand href="#home" className="logonav">
            <img src={logonav} alt="logo" width="170" height="170" className="d-inline-block align-top" />{'   '}
            
          </Navbar.Brand>
          <Navbar.Brand className="namenya text-white">
            Kita-kita
            
          </Navbar.Brand>

         
          
          
        </Container>
      </Navbar>
  )
}

