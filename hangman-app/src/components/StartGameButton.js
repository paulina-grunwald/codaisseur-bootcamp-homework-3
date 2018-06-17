import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {newGame} from '../actions/game'


class StartGameButton extends PureComponent {
  handleStartGame = () => {
    this.props.newGame()
  }  
  render() {

    return (
      <button onClick={() => {this.handleStartGame()}}>
        > New Game
      </button>
    )
  }
}

export default connect(null, {newGame})(StartGameButton)