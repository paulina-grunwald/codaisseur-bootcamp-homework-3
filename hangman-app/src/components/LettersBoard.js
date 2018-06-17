import * as React from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'
import './LettersBoard.css'

class LettersBoard extends React.Component {
  render(){
    const letters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65).toLowerCase());
    return(
      <div className="Board">{ letters.map( letter => 
        <button className="btn btn-secondary" key={ letter } onClick={ () => this.props.makeGuess(letter)}>
          { letter }
        </button>) }</div>
    )
    
  }
}

export default connect({ makeGuess })(LettersBoard)
