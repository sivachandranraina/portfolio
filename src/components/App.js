import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
