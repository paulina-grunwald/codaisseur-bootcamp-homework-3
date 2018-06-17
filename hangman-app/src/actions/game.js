import {randomWord} from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export const newGame = () => {
  return {
    type: NEW_GAME,
    payload: {
      word: randomWord(),
    },
  }
}
  
export const makeGuess = letter => {
  return {
    type: MAKE_GUESS,
    payload: {
      guessedLetter: letter,
    },
  }
}