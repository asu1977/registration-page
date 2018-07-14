import {
  ADD_FIRST_NAME,
  ADD_LAST_NAME,
  ADD_EMAIL,
  ADD_PHONE,
  LOGIN_USER,
  LOGOUT_USER } from './types'

export const addFirstNane = data => dispatch => {
  dispatch({
    type: ADD_FIRST_NAME,
    payload: data
  })
}

export const addLastName = data => dispatch => {
  dispatch({
    type: ADD_LAST_NAME,
    payload: data
  })
}

export const addEmail = data => dispatch => {
  dispatch({
    type: ADD_EMAIL,
    payload: data
  })
}

export const addPhone = data => dispatch => {
  dispatch({
    type: ADD_PHONE,
    payload: data
  })
}

export const loginUser = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: LOGIN_USER,
      payload: true
    })
  }, 2000)
}

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
    payload: null
  })
}