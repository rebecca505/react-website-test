import React from 'react'
import './AboutMeMain.css';
import { Link } from 'react-router-dom';

function AboutMeMain() {
  return (
    <div className='about-main'>
      <h1>Rebecca Frey</h1>
      <div class='about-intro'>
        <p> The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.
            The 20 meter pacer test will begin in 30 seconds.
            Line up at the start.
            The running speed starts slowly, but gets faster each minute after you hear this signal.
            The test will begin on the word start.
            On your mark, get ready, start. </p>
        <img className='about-img1' src='/images/rebecca.png' alt='Profile photo'/>
      </div>
      <br></br><br></br><br></br>

      <h2>Why New Day New Me?</h2>
      <div class='about-info'>
        <p> &nbsp; I chose to base my Catalyst project around the topic of a New Year's resolution as my 2021 New Year's resolution was very similar: try something new every week.
            I learned how to slowly come out of my comfort zone and experienced many new things.
            <br></br><br></br>
            &nbsp; I made these cards so people can do their New Year's resolution in bite-sized chunks.
            They can go through their own journey and learn more about themselves through an activity that improves their life.
            Statistics show that most people give up on their New Year's resolutions within the first couple of months.
            By having a new resolution every week, if you do as much of the deck as you can, you technically still completed your New Year's resolution.
            <br></br><br></br>
            &nbsp; To check out all of the activities in the card deck, check out my <a href="javascript:window.open('https://rb.gy/u7ruq')">Canva</a>.
            If you would like to print out your own cards, please check out the <Link to='/Cards'>"Cards"</Link> tab. </p>
      </div>
    </div>
  )
}

export default AboutMeMain
