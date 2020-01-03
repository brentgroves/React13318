import * as types from '../constants/ActionTypes'

let nextDS13318Id = 0
let nextKep13318Id = 0
// NO REDUCER NEEDED
export const Authenticate = (user) => ({
  type: type.AUTHENTICATE,
  email: signin.email,
  password: signin.password
})
// NO REDUCER NEEDED
export const SignUp = (signup) => ({
  type: type.SIGNUP,
  email: signin.email,
  password: signin.password
})

export const rcvDS13318 = (text) => ({
  type: type.RCV_DS13318,
  id: nextKep13318Id++,
  text
})

/* add from UI is obviously not needed but is for testing */
export const addKep13318 = (text) => ({
  type: type.ADD_KEP13318,
  id: nextKep13318Id++,
  text
})
export const rcvKep13318 = (text) => ({
  type: type.RCV_KEP13318,
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
