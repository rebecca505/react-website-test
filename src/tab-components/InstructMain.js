import React from 'react';
import './InstructMain.css';
import { Link } from 'react-router-dom';

function InstructMain() {
  return (
    <div className='instruct-main'>
      <div className='objective'>
        <h1>OBJECTIVE</h1>
        <p>Finish all 52 activities and complete one per week!</p>
      </div>

      <div className='instruct-list'>
        <h2>INSTRUCTIONS</h2>
        <p>
          Recommended: Ages 14 - 20 <br />
          2 - 4 players <br /><br />
          1. Shuffle the deck of cards<br />
          2. Pick a random card from the deck<br />
          3. Read and set aside the card<br />
          4. Complete the activity on the card within a week<br />
          5. Once you complete Step 4, choose a journaling option:
        </p>

        <div id="HASH" className="journal-options">
          <span>
            <Link to='/journal' className='link-button'>Print out a physical page</Link>
          </span>
          <span>
            <Link to='/journal' className='link-button'>Use a Google form</Link>
          </span>
        </div>

        <div className='image-container'>
          <img className='instruct-pic' src='/images/journal.png' alt="Journal Activity Page" />
          <img className='instruct-pic' src='/images/journal-form.png' alt="Google Forms Journal" />
        </div>

        <p>
          8. <Link to='/journal' className='link-button'>Fill out the page</Link><br />
          9. Fill in the activity box<br />
          10. Repeat
        </p>
      </div>

      <div className='instruct-info'>
        <div className='tips-header'>
          <i className='fas fa-info-circle info-icon'></i>  {/* "I" Icon added */}
          <h2>TIPS AND TRICKS</h2>
        </div>
        <p>
          Choose a specific day to start and end your activity each week (e.g., every Sunday @ 11:59 PM).<br />
          Have a memento for each activity you complete.<br />
          Try to complete all the activities with your friends.<br />
          Refer to other pages of this website if you have any questions.<br />
          Most importantly, have fun!
        </p>
      </div>
    </div>
  );
}

export default InstructMain;