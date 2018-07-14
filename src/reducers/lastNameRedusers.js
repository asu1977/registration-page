import { ADD_LAST_NAME } from '../actions/types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LAST_NAME:
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