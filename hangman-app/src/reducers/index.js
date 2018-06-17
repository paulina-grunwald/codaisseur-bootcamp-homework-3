import { combineReducers } from 'redux'
import secretWord from './secretWord'
import guesses from './guesses'

export default combineReducers({
  secretWord,
  guesses
})
