import { useState, useEffect } from "react";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/BrandName.png';
import vecteur from '../Assets/Vector.png';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-center align-items-md-center">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#product" className={activeLink === 'product' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('product')}>Product</Nav.Link>
              <Nav.Link href="#pricing" className={activeLink === 'pricing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pricing')}>Pricing</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-center align-items-md-center">
              <div className="social-icon">
                <a href="#">Login</a>
              </div>
              <div className="btn">
                <button className="vvd flex-row justify-content-arounded"><span>JOIN</span> <img src={ vecteur } alt="vecteur" className="img-flui mt-2 ml-2" /></button>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar
