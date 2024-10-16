import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainScreen.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>FIND YOURSELF</h1>
      <p>Learn about the new you</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/instructions'
        >
          START
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--baseline'
          buttonSize='btn--large'
          onClick={() => console.log('hey')} // Wrapped in a function to avoid executing immediately
          to='/sign-up' // Link to /sign-up
        >
          CLICK HERE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
