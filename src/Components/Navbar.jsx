import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Import react-bootstrap's Navbar with an alias
import { CustomButton } from './Button';

import logo from '../imgs/oodi.png'
import search from '../imgs/search.png'
import bag from '../imgs/bag.png'
import fIcon from '../imgs/F.png'

export const CustomNavbar = () => {
  return (
    <>
    <BootstrapNavbar collapseOnSelect expand="lg" className="bg-body-light nav">
      <Container>
        <div className='logo'>
          <div className='f-icon'><img src={fIcon}/></div>
          <img src={logo}/>
        </div>
        
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto m-auto fw-semibold">
            <Nav.Link href="#features" className='mx-4 text-success home'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='mx-4 text-dark'>Menu</Nav.Link>
            <Nav.Link href="#pricing" className='mx-4 text-dark'>Services</Nav.Link>
            <Nav.Link href="#pricing" className='mx-4 text-dark'>Offers</Nav.Link>
          </Nav> 
          <Nav>
            <Nav.Link href="#"><img src={search} className='nav-imgs'/></Nav.Link>
            <Nav.Link eventKey={2} href="#"><img src={bag} className='nav-imgs'/></Nav.Link>
            {/* <Button className='rounded-pill px-4 contact-btn success'><img src={phone}/>Contact</Button> */}
            <CustomButton text='Contact' className='Responsive-nav-btn'/>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>    
    </>
  );
};
