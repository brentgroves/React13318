import * as types from '../constants/ActionTypes'




const bpgservices = (state = {app:null,isAdmin:false,isAuthenticated:false,userName:''}, action) => {
  switch (action.type) {
    case 'ADD_APP':
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         app: action.app
       })
    }
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
    case 'UPDATE_USERNAME':
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         userName: action.userName
       })

    }
    default:
      return state
  }
}

export default bpgservices
