import React from 'react'
import './InstructMain.css';
import { Link } from 'react-router-dom';

function InstructMain() {
  return (
    <div className='instruct-main'>
  <div className='objective'>
    <h1>OBJECTIVE</h1>
    <p1>Finish all 52 of the activities and complete one per week!</p1>
  </div>

  <div className='instruct-list'>
    <h1a>INSTRUCTIONS</h1a>
    <p>
      Recommended: Ages 14 - 20 <br />
      2 - 4 players <br /><br />
      1. Shuffle the deck of cards<br />
      2. Pick a random card from the deck<br />
      3. Read and set aside the card<br />
      4. Complete the activity on the card within a week<br />
      5. Once you complete Step 4, choose a journaling option:
    </p>

    <h3>
      <div id="HASH" className="blue-msg">
        <span id="time-HASH" className="smalltext">
          <Link to='/journal' className='link-button'>Print out a physical page</Link>
        </span>
        <span className="ios-circle">
          <Link to='/journal' className='link-button'>Use a Google form</Link>
        </span>
      </div>
      <img className='instruct-pic1' src={'/images/journal.png'} alt="Journal Activity Page" />
      <img className='instruct-pic2' src={'/images/journal-form.png'} alt="Google Forms Journal" />
    </h3>

    <p>
      8. <Link to='/journal' className='link-button'>Fill out the page</Link><br />
      9. Fill in the activity box<br />
      10. Repeat
    </p>
  </div>

  <div className='instruct-info'>
  <div className='tips-header'>
    <h1b><i className='fas fa-info' /></h1b>
    <h1a>TIPS AND TRICKS</h1a>
  </div>
  <p>
    Choose a specific day to start and end your activity every week (e.g. every Sunday @ 11:59 PM).<br />
    Have a momento for each activity you complete.<br />
    Try to complete all of the activities with your friends.<br />
    Refer to the other pages of this website if you have any questions.<br />
    Most importantly, have fun!
  </p>
</div>
</div>
  )
}

export default InstructMain
