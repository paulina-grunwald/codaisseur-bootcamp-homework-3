import * as React from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'
import {showGuess, wrongGuessCount, isWinner, gameFinished} from '../lib/game'
import './SecretWord.css'

export class  SecretWord extends React.Component {

  render() {
    const matchGuessesToWord = showGuess(this.props.word,this.props.guesses)
    const wrongGuesses = wrongGuessCount(this.props.word, this.props.guesses)
    const gameWon = isWinner(this.props.word, this.props.guesses)
    const gameDone = gameFinished(this.props.word, this.props.guesses)

    return (
      <div className="jumbotrone">
        <div className="Secret-word">The Secret Word is: {matchGuessesToWord}</div>
        <div className="WrongGuesses">The Count of wrong guesses is: {wrongGuesses}</div>
        <div className="GameWon">{gameWon && gameDone && <p>You have won the game! Congrats!</p>}</div>
        <div className="GameOver">{gameDone && !!isWinner && <p>You have lost the game! Try again!</p>}</div>
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    word: state.secretWord,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(SecretWord)