import { combineReducers } from 'redux'
import firstName from './firstNameReduser'
import lastName from './lastNameRedusers'
import email from './emailRedusers'
import phone from './phoneRedusers'
import userIsLogin from './userReduser'

const appReducer = combineReducers({
  firstName,
  lastName,
  email,
  phone,
  userIsLogin
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer