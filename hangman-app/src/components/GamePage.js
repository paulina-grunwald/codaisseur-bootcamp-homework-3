import * as React from 'react'
import LettersBoard from './LettersBoard';
import StartGameButton from './StartGameButton';
import SecretWord from './SecretWord';
import Title from './Title';

export default class GamePage extends React.Component {

  render() {
    return (
      <div>
        <Title />
        <div>
          <SecretWord /> 
          <StartGameButton />
        </div>        
        <LettersBoard />
      </div>
    );
  }
}
