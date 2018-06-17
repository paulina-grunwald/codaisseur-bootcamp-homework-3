import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class LettersBoard extends Component {
  render(){
    const letters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return(
      <div>{ letters.map( letter => 
        <button className="Letter" key={ letter } onClick={ () => this.props.makeGuess(letter) }>
          { letter }
        </button>) }</div>
    )
    
  }
}

export default connect(null, { makeGuess })(LettersBoard)
