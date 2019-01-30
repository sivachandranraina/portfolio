import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import WorkTraces from './WorkTraces/WorkTraces';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <WorkTraces />
      </div>
    );
  }
}

export default App;
