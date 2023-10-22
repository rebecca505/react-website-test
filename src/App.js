import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/tabs/Home';
import Instructions from './components/tabs/Instructions';
import Journal from './components/tabs/Journal';
import SignUp from './components/tabs/SignUp';
import Cards from './components/tabs/Cards';
import AboutMe from './components/tabs/AboutMe';
import Background from './components/footer-items/Background';
import Mentors from './components/footer-items/Mentors';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-me' exact component={AboutMe} />
          <Route path='/instructions' exact component={Instructions} />
          <Route path='/journal' exact component={Journal} />
          <Route path='/cards' exact component={Cards} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/background' exact component={Background} />
          <Route path='/mentors' exact component={Mentors} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
