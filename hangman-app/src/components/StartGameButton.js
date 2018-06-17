import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newGame} from '../actions/game'
import './StartGameButton.css'

class StartGameButton extends Component {
  handleStartGame = () => {
    this.props.newGame()
  }  
  render() {

    return (
      <button className="Button btn btn-warning" onClick={() => {this.handleStartGame()}}>
        > New Game
      </button>
    )
  }
}

export default connect(null, {newGame})(StartGameButton)