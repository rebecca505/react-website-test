import React from 'react'
import './InstructMain.css';
import { Link } from 'react-router-dom';

function InstructMain() {
  return (
    <div className='instruct-main'>
      <div className='objective'>
      <h1> OBJECTIVE </h1>
      <p1> Finish all 52 of the activities and complete one per week! </p1>
      </div>
      <br></br><br></br><br></br><br></br>
      
      <div className='instruct-list'>
        <h1a> INSTRUCTIONS </h1a>
        <p> Recommended: Ages 14 - 20 <br></br>
            2 - 4 players
            <br></br><br></br>

            1. Shuffle the deck of cards<br></br>
            2. Pick a random card from the deck<br></br>
            3. Read and set aside the card<br></br>
            4. Complete the activity on the card within a week<br></br>
            5. Once you complete Step 4, choose a journaling option:<br></br>
            <h3>
              <div id="HASH" class="blue-msg">
                <span id="time-HASH" class="smalltext">  <Link to= '/journal'> Print out a physical page</Link>  </span>
                <span class="ios-circle">  <Link to= '/journal'>Use a google form</Link>  </span>
              </div>
              <img className='instruct-pic1' src={'/images/journal.png'} alt="Journal Activity Page" />
              <img className='instruct-pic2' src={'/images/journal-form.png'} alt="Google Forms Journal" />
            </h3>

              {/* <div id="HASH" class="blue-msg">
                <span id="time-HASH" class="smalltext">  <Link to= '/journal'> Print out a physical page</Link>  </span>
                <span class="ios-circle">  <Link to= '/journal'>Use a google form</Link>  </span>
              </div> */}
              {/* <img className='instruct-pic2' style={{ width: "50%", height: "50%" }} src={'/images/journal-form.png'} alt="Google Forms Journal" /> */}

            {/* <Link to='/instructions'>How it works</Link> */}
            {/* <a href="javascript:window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');"> Terms of Service </a> */}
            {/* <figure className='instruct-img'>
            <img src='/images/img-3.jpg'/> <p3>. .</p3> <img src='/images/img-4.jpg'/>
            </figure> */}
            {/* <img src='/images/img-3.jpg'/> <p3>. .</p3> <img src='/images/img-4.jpg'/> */}
            {/*<img style={{ width: 500, height: 600 }} src={Logo} alt="React Logo" /> */}
            8. <Link to= '/journal'>Fill out the page</Link><br></br>
            9. Fill in the activity box**<br></br>
            10. Repeat
            {/* https://rb.gy/1m5wy and https://forms.gle/R4Ctx1d3Nio2oiTaA */}
        </p>
      </div>

      <br></br><br></br><br></br><br></br>

      <div className='instruct-info'>
      <h1b> <i class='fas fa-info'/> </h1b><br></br><br></br>
        <h1a> TIPS AND TRICKS </h1a>
        <p>
        Choose a specific day to start and end your activity every week (e.g. every Sunday @ 11:59 PM)<br></br>
        Have a momento for each activity you complete<br></br>
        Try to complete all of the activities with your friends<br></br>
        Refer to the other pages of this website if you have any questions<br></br>
        Most importantly, have fun!
        </p>
      </div>
    </div>
  )
}

export default InstructMain
