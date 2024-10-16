import React from 'react';
import './JournalMain.css';

function JournalMain() {
  return (
    <div className='journal-main'>
      <h1> JOURNAL </h1>
      <div className='journal-paper'>
        <p> This journal allows you to reflect on the activity that you complete every week.
          Feel free to open the <a href="javascript:window.open('https://rb.gy/1m5wy')">journal</a> and work on the paper copy.
          You can print it out at the end of the week and fill in the quick one-sentence responses.
          Further instructions on how to complete the journal are listed below.
          At the bottom of this website, you have the choice to fill out an online version of the journal. </p>
        <img className='journal-img1' src='/images/journal.png' alt='Journal Activity Page' />
      </div>
      <br /><br /><br />
      <div className='journal-middle'>
        <h1> INSTRUCTIONS </h1>
        <div className='journal-instructions'>
          <p> 1. Write the activity on the card in the <i>Activity</i> segment<br />
            2. Fill in the <i>Date</i> segment with today’s day and month<br />
            3. In the box next to <i>Circle</i>, choose and circle one of the five words that represents how the activity changed you<br />
            &nbsp; 1. E.g. you became more courageous after <i>#28: Eat a meal alone once this week</i> since you’ve never done it before<br />
            &nbsp; 2. If you are unable to complete a card that week, don’t worry. Set the card aside and cross out the box.<br />
            4. Talk about why you chose that word in <i>Reason for circle choice</i><br />
            5. (OPTIONAL) Insert a photo of your activity in the <i>Picture box</i><br />
            6. (OPTIONAL) Go more in-depth with how you felt about your activity in the <i>Reflection space</i> </p>
        </div>
      </div>
      <br /><br /><br />
      <h1> ONLINE JOURNAL </h1>
      <div className='journal-online'>
      <img className='journal-img2' src='/images/journal-form.png' alt='Google Forms Journal' />
        <p> If you don't have a physical copy of the cards, please reference my 
          <a href="javascript:window.open('https://www.canva.com/design/DAEuEnxe4y4/V1hb9I0EiE5i-_mVuqVZAw/edit?utm_content=DAEuEnxe4y4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')"> Canva project </a> 
          where you can order your own deck of cards.
          The website I used to print out my cards is <a href="javascript:window.open('https://www.makeplayingcards.com/design/custom-blank-card.html')">makeplayingcards.com</a> (based in China).
          If you prefer to print out the cards on paper, you can open this <a href="javascript:window.open('https://rb.gy/h5kwo')">Google Doc</a>.</p>
      </div>
    </div>
  );
}

export default JournalMain;