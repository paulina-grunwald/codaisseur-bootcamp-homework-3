import * as React from 'react'
import { Link } from 'react-router-dom'

class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/hangman/`}><h1>Start playing</h1></Link>
      </div>
    );
  }
}

export default WelcomePage;