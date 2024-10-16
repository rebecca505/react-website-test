import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './MainScreen.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>FIND YOURSELF</h1>
      <p>Learn about the new you</p>
      <div className='main-btns'>
        <Link to='/instructions'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            START
          </Button>
        </Link>
        <Link to='/sign-up'>
          <Button
            className='btns'
            buttonStyle='btn--baseline'
            buttonSize='btn--large'
          >
            CLICK HERE <i className='far fa-play-circle' />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainSection;