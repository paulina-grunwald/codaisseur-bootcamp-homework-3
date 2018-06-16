import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GamePage from './components/GamePage'
import { Route } from 'react-router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Route exact path="/hangman" component={GamePage} />
        </div>
      </div>
    );
  }
}

export default App;
