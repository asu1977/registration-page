import { ADD_PHONE } from '../actions/types'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE:
      return action.payload
    default:
      return state;
  }
}