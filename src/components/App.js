import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import WorkTraces from './WorkTraces/WorkTraces';
import About from './About/About';
import TimeLine from './TimeLine/TimeLine';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <TimeLine />
        <About />
        <WorkTraces />
        <Footer />
      </div>
    );
  }
}

export default App;
