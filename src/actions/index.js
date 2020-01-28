import * as types from '../constants/ActionTypes'

let nextDS13318Id = 0
let nextKep13318Id = 0

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

export const Authenticate = (user) => ({
  type: types.AUTHENTICATE,
  email: user.email,
  password: user.password
})


export const LogoutSaga = () => ({
  type: types.LOGOUT_SAGA
})


export const setServices = (services) => ({
  type: types.SET_SERVICES,
  services: services
})



// NO REDUCER NEEDED
// NO REDUCER NEEDED
export const SignUp = (user) => ({
  type: types.SIGNUP,
  email: user.email,
  password: user.password
})


/* add from UI is obviously not needed but is for testing */
export const addKep13318 = (text) => ({
  type: types.ADD_KEP13318,
  id: nextKep13318Id++,
  text
})
export const rcvKep13318 = (text) => ({
  type: types.RCV_KEP13318,
  id: nextKep13318Id++,
  text
})

export const rcvDS13318 = (records) => ({
  type: types.RCV_DS13318,
  records
})

export const isAuthenticated = (isAuthenticated) => ({
  type: types.IS_AUTHENTICATED,
  isAuthenticated
})

export const isAdmin = (isAdmin) => ({
  type: types.IS_ADMIN,
  isAdmin
})

export const updateFirstName = (firstName) => ({
  type: types.UPDATE_FIRSTNAME,
  firstName
})
