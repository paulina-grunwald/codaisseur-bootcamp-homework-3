import {randomWord} from '../lib/game'

import {NEW_GAME} from '../actions/game.js'


export default function(state = randomWord(), action) {
  switch (action.type) {
  case NEW_GAME:
    return action.payload.word
  default:
    return state
  }
}
