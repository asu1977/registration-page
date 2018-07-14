import { combineReducers } from 'redux'
import firstName from './firstNameReduser'
import lastName from './lastNameRedusers'
import email from './emailRedusers'
import phone from './phoneRedusers'
import userIsLogin from './userReduser'

export default combineReducers({
  firstName,
  lastName,
  email,
  phone,
  userIsLogin
})
