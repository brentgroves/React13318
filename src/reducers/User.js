import * as types from '../constants/ActionTypes'


const initState = {
  isAdmin:false,
  isAuthenticated:false,
  firstName:'',
  authenticateError:''
}


const User = (state = initState, action) => {
  switch (action.type) {
    case 'IS_AUTHENTICATED':
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         isAuthenticated: action.isAuthenticated
       })
    }
    case types.SET_AUTHENTICATE_ERROR:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         authenticateError: action.error
       })
    }
    case types.CLEAR_AUTHENTICATE_ERROR:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         authenticateError: ''
       })
    }
    case 'IS_ADMIN':
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         isAdmin: action.isAdmin
       })
    }
    case 'UPDATE_FIRSTNAME':
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         firstName: action.firstName
       })

    }
    default:
      return state
  }
}

export default User
