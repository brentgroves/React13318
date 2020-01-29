import * as types from '../constants/ActionTypes'

let nextDS13318Id = 0
let nextKep13318Id = 0

export const AuthenticateIsSubmitting = (authenticateIsSubmitting) => ({
  type: types.AUTHENTICATE_IS_SUBMITTING,
  authenticateIsSubmitting
})
export const AuthenticateSaga = (user) => ({
  type: types.AUTHENTICATE_SAGA,
  email: user.email,
  password: user.password
})

export const SetAuthenticateError = (error) => ({
  type: types.SET_AUTHENTICATE_ERROR,
  error: error
})
export const ClearAuthenticateError = () => ({
  type: types.CLEAR_AUTHENTICATE_ERROR
})

export const SetIsAuthenticated = (isAuthenticated) => ({
  type: types.SET_IS_AUTHENTICATED,
  isAuthenticated
})

export const SetIsAdmin = (isAdmin) => ({
  type: types.SET_IS_ADMIN,
  isAdmin
})

export const SetRoles = (roles) => ({
    type: types.SET_ROLES,
    roles
})
export const SetEmail = (email) => ({
  type: types.SET_EMAIL,
  email
})

export const SetUserName = (userName) => ({
  type: types.SET_USERNAME,
  userName
})

export const SetFirstName = (firstName) => ({
  type: types.SET_FIRSTNAME,
  firstName
})
export const SetLastName = (lastName) => ({
  type: types.SET_LASTNAME,
  lastName
})

export const LogoutSaga = () => ({
  type: types.LOGOUT_SAGA
})


/* add from UI is obviously not needed but is for testing */
export const AddKep13318 = (text) => ({
  type: types.ADD_KEP13318,
  id: nextKep13318Id++,
  text
})
export const RcvKep13318 = (text) => ({
  type: types.RCV_KEP13318,
  id: nextKep13318Id++,
  text
})

export const RcvDS13318 = (records) => ({
  type: types.RCV_DS13318,
  records
})
