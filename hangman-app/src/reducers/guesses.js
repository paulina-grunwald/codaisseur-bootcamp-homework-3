export const MAKE_GUESS = 'MAKE_GUESS'
export const NEW_GAME = 'NEW_GAME'

export default function(state = [], action) {
  switch (action.type) {
  case NEW_GAME:
    return state = []
  case MAKE_GUESS:
    return [...state, action.payload.guessedLetter]
  default:
    return state
  }
}