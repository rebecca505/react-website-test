import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>MAIN TEXT</h1>
      <p>Subtitle text</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          START
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--baseline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CLICK HERE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
