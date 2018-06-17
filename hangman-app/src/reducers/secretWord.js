import {randomWord} from '../lib/game'

export const NEW_GAME = 'NEW_GAME'


export default function(state = randomWord(), action) {
  switch (action.type) {
  case NEW_GAME:
    return action.payload.word
  default:
    return state
  }
}
