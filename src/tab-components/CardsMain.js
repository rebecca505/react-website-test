import React from 'react'
import './CardsMain.css';

function CardsMain() {
  return (
    <div className='cards-main'>
      
    <h1> ACTIVITY PAGE </h1>
    <div class='cards-activity-page'>
      <img className='cards-img1' src='/images/activity-boxes.png' alt='Activity boxes card'/>
      <p> There are two, double-sided activity cards— these make up four activity pages.
        With one side per person, the pages allow you to see your reflection (found in the box on the journal page) on all of your activities at the same time.
        Further instructions below. </p>
    </div>
    <br></br><br></br><br></br>

    <h1> INSTRUCTIONS </h1>
    <div class='cards-instructions'>
      <p> Each box corresponds to the number at the top left of each card. 01-06 represents the first six activities in the card deck and the first row of boxes. The number in front of each row represents the number of the left-most box per row.<br></br><br></br>
        1. Decide how you would like to fill out your box. You can use a color, letter, or any other option.<br></br>
        2. <i>Color</i> : Choose a color to correspond with one of the words <br></br>
        &nbsp; 1. E.g. Red represents Courage<br></br>
        &nbsp; 2. Every time you do an activity that makes you more courageous, fill in the activity’s box with red.<br></br>
        3. <i>Letter</i> : Have the first letter of the word (or any other letter) represent the word<br></br>
        &nbsp; 1. E.g. C represents Courage<br></br>
        &nbsp; 2. When you complete an activity that makes you more courageous, write the letter C in that activity’s box. </p>
    </div>
    <br></br><br></br><br></br>

    <h1> CARD ACTIVITIES </h1>
    <div class='cards-activities'>
      <p> If you don't have a physical copy of the cards, please click on the "Canva" button below and it will take you to my Canva project where you can order your own deck of cards.
        The website I used to print out my cards is <a href="javascript:window.open('https://www.makeplayingcards.com/design/custom-blank-card.html')">makeplayingcards.com</a> (based in China).
        If you prefer to print out the cards on paper, you can open this <a href="javascript:window.open('https://rb.gy/h5kwo')">Google Doc</a>.</p>
      <img className='cards-img2' src='/images/card-activities.png' alt='Casd back side'/>
    </div>

    {/* <div class='arrowButtonContainer'>
      <a onclick='start()'>
        <button id='titleButton' type="button" class="btn btn-lg btn-outline-info mt-1 texth4">Click to Start</button>
      </a>
    </div> */}

    {/* <div class='arrowButtonContainer'>
      <a onclick="document.getElementById('gallery-container').scrollIntoView();">
        <svg class='arrowButton' width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-chevron-compact-down" fill="#F0EBD8" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
        </svg>
      </a>
    </div> */}

    {/* <div class='arrowButtonContainer'>
            <a onclick="document.getElementById('donate').scrollIntoView();">
                <svg class='arrowButton' width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-compact-down" fill="#F0EBD8" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>
            </a>
        </div> */}

    </div>
  )
}

export default CardsMain
