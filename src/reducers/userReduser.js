import { LOGIN_USER, LOGOUT_USER } from '../actions/types'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    return (
      action.payload
    );
    // case LOGOUT_USER:
    // console.log(state)
    // return (
    //   action.payload
    // );
    default:
      return state;
  }
}