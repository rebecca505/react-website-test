import React from 'react'
import './AboutMeMain.css';
import { Link } from 'react-router-dom';

function AboutMeMain() {
  return (
    <div className='about-main'>
      <h1>Rebecca Frey</h1>
      <div className='about-intro'>
        <div className='about-text'>
          <p> 
            Rebecca Frey is a sophomore at Barnard College, Columbia University, pursuing a Bachelor of Arts in Computer Science and Mathematics. 
            She has extensive experience in data engineering and audiovisual support, having interned at Blassa, 
            where she helped scale address verification and automated geocoding processes across Africa and the Middle East.
            At Barnard, she supports AV technology for classrooms and events, ensuring smooth operations. 
            Rebecca's leadership includes roles such as Head Outreach Chair for the Singapore Student Association, 
            Internal Bonding Chair for the Taiwanese American Student Association, and Media Outreach Committee member for Girls Who Code. 
            She has also excelled in her projects, winning ‘Best Beginner Hack’ at DivHacks and building a personal website. 
            Skilled in Java, Python, and JavaScript, Rebecca combines her technical knowledge with a passion for community building and outreach.
          </p>
        </div>
        <img className='about-img1' src='/images/rebecca.png' alt='Profile photo'/>
      </div>

      <h2>Why New Day New Me?</h2>
      <div className='about-info'>
        <p>
          &nbsp; I chose to base my Catalyst project around the topic of a New Year's resolution as my 2021 New Year's resolution was very similar: try something new every week.
          I learned how to slowly come out of my comfort zone and experienced many new things.
          <br></br><br></br>
          &nbsp; I made these cards so people can do their New Year's resolution in bite-sized chunks.
          They can go through their own journey and learn more about themselves through an activity that improves their life.
          Statistics show that most people give up on their New Year's resolutions within the first couple of months.
          By having a new resolution every week, if you do as much of the deck as you can, you technically still completed your New Year's resolution.
          <br></br><br></br>
          &nbsp; To check out all of the activities in the card deck, check out my <a href="javascript:window.open('https://www.canva.com/design/DAEuEnxe4y4/V1hb9I0EiE5i-_mVuqVZAw/edit?utm_content=DAEuEnxe4y4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')">Canva</a>.
          If you would like to print out your own cards, please check out the <Link to='/Cards'>"Cards"</Link> tab. 
        </p>
      </div>
    </div>
  )
}

export default AboutMeMain;