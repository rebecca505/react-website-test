import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/tabs/Home';
import Instructions from './components/tabs/Instructions';
import Journal from './components/tabs/Journal';
import SignUp from './components/tabs/SignUp';
import Cards from './components/tabs/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/instructions' exact component={Instructions} />
          <Route path='/journal' exact component={Journal} />
          <Route path='/cards' exact component={Cards} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
