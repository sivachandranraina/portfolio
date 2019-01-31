import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import WorkTraces from './WorkTraces/WorkTraces';
import About from './About/About';
import TimeLine from './TimeLine/TimeLine';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div style={{paddingBottom: '51%'}}></div>
        <TimeLine />
        <About />
        <WorkTraces />
      </div>
    );
  }
}

export default App;
