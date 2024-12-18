import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../imgs/oodi.png'
import fIcon from '../imgs/F.png'
import facebook from '../imgs/facebook.png'
import instagram from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import youtube from '../imgs/youtube.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row className='footer-row'>
                <Col  className='col-sm-12 col-md-6 col-lg-3 col-12'>
                <div className='logo'>
                    <div className='f-icon'><img src={fIcon}/></div>
                    <img src={logo}/>
                </div>
                <p>Savor the artistry where every dish is a culinary masterpiece</p>
                <div className='icons'>
                    <div className='p-2 rounded-pill'><img src={facebook}/></div>
                    <div className='p-2 rounded-pill'><img src={instagram}/></div>
                    <div className='p-2 rounded-pill'><img src={twitter}/></div>
                    <div className='p-2 rounded-pill'><img src={youtube}/></div>
                </div>
                </Col>
                <Col className='col-sm-12 col-md-6 col-lg-3 col-12 cols'>
                    <h5>Useful Links</h5>
                        <p>About us</p>
                        <p>Events</p>
                        <p>Blogs</p>
                        <p>FAQ</p>
                </Col>
                <Col className='col-sm-12 col-md-6 col-lg-3 col-12 cols'>
                <h5>Main Menu</h5>
                        <p>Home</p>
                        <p>Offers</p>
                        <p>Menus</p>
                        <p>Reservation</p>
                </Col>
                <Col className='col-sm-12 col-md-6 col-lg-3 col-12 cols'>
                <h5>Contact Us</h5>
                        <p>example@email.com</p>
                        <p>+64 958 248 966</p>
                        <p>MeSocial media</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
