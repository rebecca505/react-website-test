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
            <Link to='/instructions'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <a href="javascript:window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');"> Terms of Service </a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/signup'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Pages</h2>
            <Link to='/'>Home</Link>
            <Link to='/about-me'>About Me</Link>
            <Link to='/instructions'>Instructions</Link>
            <Link to='/cards'>Cards</Link>
            <Link to='/journal'>Journal</Link>
            <Link to='/background'>Background</Link>
            <Link to='/sign-up'>Sign Up</Link>
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
          <a href="javascript:window.open('https://www.snapchat.com/add/becca44153');">
            <i class='fab fa-snapchat' /> 
          </a>
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