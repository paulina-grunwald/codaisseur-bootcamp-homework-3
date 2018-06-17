import {NEW_GAME, MAKE_GUESS} from '../actions/game.js'

export default function(state = [], action) {
  switch (action.type) {
  case NEW_GAME:
    return state
  case MAKE_GUESS:
    return [...state, action.payload.guessedLetter]
  default:
    return state
  }
}