import { ADD_PHONE } from '../actions/types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE:
      if (state.length > 0)
        state.shift()
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}