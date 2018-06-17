import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'
import {showGuess} from '../lib/game'

export class  SecretWord extends Component {

  render() {
    const matchGuessesToWord = showGuess(this.props.word.toUpperCase(),this.props.guesses)
    console.log(this.props.guesses)

    return (
      <p className="ShowGame">The Secret Word is: {matchGuessesToWord}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    word: state.secretWord,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps, { newGame })(SecretWord)