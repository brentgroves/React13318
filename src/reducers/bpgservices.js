import * as types from '../constants/ActionTypes'




const bpgservices = (state = {app:null,isAdmin:false,authUser:''}, action) => {
  switch (action.type) {
    case 'ADD_APP':
    {
      // Keep a reference to the service object created in sockets initialization code.

      state.app = action.app;
      return state;
    }
    case 'IS_ADMIN':
    {
      // Keep a reference to the service object created in sockets initialization code.

      state.isAdmin = action.isAdmin;
      return state;
    }
    case 'AUTH_USER':
    {
      // Keep a reference to the service object created in sockets initialization code.

      state.authUser = action.authUser;
      return state;
    }
    default:
      return state
  }
}

export default bpgservices
