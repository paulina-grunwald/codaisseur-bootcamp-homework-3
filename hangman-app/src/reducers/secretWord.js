export const NEW_GAME = 'NEW_GAME'

export default function(state = '', action) {
  switch (action.type) {
  case NEW_GAME:
    return action.payload
  default:
    return state
  }
}
