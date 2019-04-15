import React, { Component } from 'react';
import './reset.css';
import './App.css';
import NavBar from './components/NavBar';
import IntroBar from './components/IntroBar';
import AboutMe from './components/AboutMe'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <IntroBar />
        <AboutMe />
      </div>
    );
  }
}

export default App;
