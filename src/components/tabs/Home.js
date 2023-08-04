import React from 'react';
import '../../App.css';
import MainScreen from '../MainScreen';
import Pages from '../Pages';
import Footer from "../Footer";

function Home() {
  return (
    <>
      <MainScreen />
      <Pages />
      <Footer />
    </>
  );
}

export default Home;