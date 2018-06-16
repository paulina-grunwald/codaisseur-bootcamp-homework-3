import * as React from 'react'
import { Link } from 'react-router-dom'


class GamePage extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/hangman/`}><h1>Go to hangman</h1></Link>) 
      </div>
    );
  }
}

export default GamePage;