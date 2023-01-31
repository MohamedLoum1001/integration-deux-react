import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import twitter from '../Assets/twitter.png';

const Footer = () => {
  return (
    <section id='contact' className='footer'>
      <div className='container'>
        <div className='row g-5 py-3'>
          <div className='col-md-3 col-lg-3'>
            <div className="footer-text text-start mt-5">
              <div className="text">
                <h1 className='text-start'>Get In Touch</h1>
                <p className='text-start mt-4'>The quck fox jumps over the <br />
                  lazy dog</p>
              </div>
              <div className="icon">
                <img src={facebook} alt="facebook" className='img-fluid' />
                <img src={instagram} alt="instagram" className='img-fluid ml-5' />
                <img src={twitter} alt="twitter" className='img-fluid ml-5' />
              </div>
            </div>

          </div>

          <div className='col-md-3 col-lg-3'>
            <div className="footer-text text-start mt-5">
              <div className="text">
                <h1 className='text-start'>Company info</h1>
                <h2 className='text-start mt-4'>About Us</h2>
                <h2 className='text-start'>Carrier</h2>
                <h2 className='text-start'>We are hiring</h2>
                <h2 className='text-start'>Blog</h2>
              </div>
            </div>

          </div>

          <div className='col-md-3 col-lg-3'>
            <div className="footer-text text-start mt-5">
              <div className="text">
                <h1 className='text-start'>Features</h1>
                <h2 className='text-start mt-4'>Business Marketing</h2>
                <h2 className='text-start'>User Analytic</h2>
                <h2 className='text-start'>Live Chat</h2>
                <h2 className='text-start'>Unlimited</h2>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-lg-3'>
            <div className="footer-text text-start mt-5">
              <div className="text">
                <h1 className='text-start'>Ressources</h1>
                <h2 className='text-start mt-4'>IOS & Android</h2>
                <h2 className='text-start'>Watcha Demo</h2>
                <h2 className='text-start'>Customers</h2>
                <h2 className='text-start'>API</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer
