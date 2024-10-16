import React from 'react';
import './CardsMain.css';

function CardsMain() {
  return (
    <div className='cards-main'>
      
      <h1 className='section-title'>Activity Page</h1>
      <div className='cards-section cards-activity-page'>
        <img className='cards-img' src='/images/activity-boxes.png' alt='Activity boxes card' />
        <p className='cards-description'>
          There are two double-sided activity cards, which make up four activity pages. 
          With one side per person, these pages allow you to reflect on all of your activities simultaneously. 
          Further instructions are provided below.
        </p>
      </div>

      <h1 className='section-title'>Instructions</h1>
      <div className='cards-section cards-instructions'>
        <p className='cards-description'>
          Each box corresponds to the number at the top left of each card. 
          01-06 represents the first six activities in the card deck and the first row of boxes. The number in front of each row represents the left-most box.<br/><br/>
          
          1. Decide how you'd like to fill out your box (color, letter, etc.).<br/>
          2. <i>Color:</i> Choose a color to represent a word (e.g., Red for Courage). 
          Fill in the box with that color when an activity makes you more courageous.<br/>
          3. <i>Letter:</i> Use the first letter of the word (e.g., 'C' for Courage). 
          Write 'C' in the box when you complete a courageous activity.
        </p>
      </div>

      <h1 className='section-title'>Card Activities</h1>
      <div className='cards-section cards-activities'>
        <p className='cards-description'>
          If you don't have a physical copy of the cards, you can order a deck by clicking the <a href="javascript:window.open('https://rb.gy/h5kwo')">Google Doc</a>. 
          For printed versions, visit <a href="javascript:window.open('https://www.makeplayingcards.com/design/custom-blank-card.html')">makeplayingcards.com</a>.
        </p>
        <img className='cards-img' src='/images/card-activities.png' alt='Card activities'/>
      </div>
    </div>
  );
}

export default CardsMain;