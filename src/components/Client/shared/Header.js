import { Language } from '@mui/icons-material';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
      <Navbar  expand="lg" className=''>
        <Container><Navbar.Brand to='/home' className='text-light'>IB ARTS AI</Navbar.Brand></Container>
      </Navbar>
      <div className='d-flex icons'>
        <i className='d-block fa fa-user'></i>
        <i className=" d-block fa fa-bars nav--btn"> </i>
      </div>
    </>
  )
}

export default Header

