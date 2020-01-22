import * as types from '../constants/ActionTypes'




const User = (state = {isAdmin:false,isAuthenticated:false,firstName:''}, action) => {
  switch (action.type) {
    case 'IS_AUTHENTICATED':
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         isAuthenticated: action.isAuthenticated
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
