import { ADD_FIRST_NAME } from '../actions/types'

const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIRST_NAME:
      return action.payload
    default:
      return state;
  }
}