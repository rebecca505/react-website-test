import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/background'> Background </Link>
            <a href="javascript:window.open('https://docs.google.com/document/d/1pYcMgkySuSa2_3q9oNKI0E0zgcINkMM0qwEvGcZllbE/edit');">Rules</a>
            {/*<Link to='/mentors'>Mentors</Link>*/}
            <a href="javascript:window.open('https://docs.google.com/document/d/1ywr4QFK_GwdajKua2bZbIQeP7DWD2CNBCX6EXN4rWYs/edit');"> Annotated Bibliography </a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href="javascript:window.open('https://mail.google.com/mail/?view=cm&source=mailto&to=rlaurelfrey@gmail.com');">Gmail</a>
            <a href="javascript:window.open('https://www.facebook.com/rebecca.frey.1257');">Facebook</a>
            <a href="javascript:window.open('https://www.instagram.com/beccaxfrey/');">Instagram</a>
            <a href="javascript:window.open('https://www.linkedin.com/in/beccafrey/');">LinkedIn</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Resources</h2>
            <a href="javascript:window.open('https://wheelofnames.com/a46-84h');">Spin the Wheel</a>
            <a href="javascript:window.open('https://map.proxi.co/r/Dsu0efkT7hzpqujBhsuf');">Map of my Activities</a>
            {/* <a href="javascript:window.open('');">x</a> */}
            <a href="javascript:window.open('https://pcn.nparks.gov.sg/our-pcn/c2c/');">Coast to Coast Trail</a>
          </div>
          <div class='footer-link-items'>
            <h2>Pages</h2>
            <Link to='/'>Home</Link>
            <Link to='/about-me'>About Me</Link>
            <Link to='/instructions'>Instructions</Link>
            <Link to='/cards'>Cards</Link>
            <Link to='/journal'>Journal</Link>
            {/* <Link to='/background'>Background</Link> */}
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              NDNM
            </Link>
          </div>
          <small class='website-rights'>NDNM © 2023</small>
          <div class='social-icons'>
          <a href="javascript:window.open('https://www.facebook.com/rebecca.frey.1257');">
            <i class='fab fa-facebook-f' />
          </a>
          <a href="javascript:window.open('https://www.instagram.com/beccaxfrey/');">
            <i class='fab fa-instagram' /> 
          </a>
          {/* <a href="javascript:window.open('https://youtube.com');">
            <font color="white">
            <i class='fab fa-youtube' /> 
            </font>
          </a> */}
          {/* <a href="javascript:window.open('https://twitter.com');">
            <font color="white">
            <i class='fab fa-twitter' /> 
            </font>
          </a> */}
          {/* <a href="javascript:window.open('https://www.snapchat.com/add/becca44153');">
            <i class='fab fa-snapchat' /> 
          </a> */}
          <a href="javascript:window.open('https://www.linkedin.com/in/beccafrey/');">
            <i class='fab fa-linkedin' /> 
          </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Footer;