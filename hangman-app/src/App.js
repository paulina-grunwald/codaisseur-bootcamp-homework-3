import React, { Component } from 'react';
import logohang from './logo-hang.png';
import './App.css';
import WelcomePage from './components/WelcomePage'
import GamePage from './components/GamePage'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logohang} className="App-logo" alt="logohang" />
          <h1 className="App-title">Created with React&Redux</h1>
        </header>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/hangman" component={GamePage} />
      </div>
    );
  }
}

export default App;
