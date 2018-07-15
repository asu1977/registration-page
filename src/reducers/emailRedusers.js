import { ADD_EMAIL } from '../actions/types'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL:
      return action.payload
    default:
      return state;
  }
}