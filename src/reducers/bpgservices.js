import * as types from '../constants/ActionTypes'
const bpgservices = (state = {app:null,isAuthenticated:true}, action) => {
  switch (action.type) {
    case 'ADD_APP':
    {
      state.app = action.app;
      return state;
    }
    default:
      return state
  }
}

export default bpgservices
