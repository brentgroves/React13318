import * as types from '../constants/ActionTypes'




const Services = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SERVICES':
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         services: action.services
       })
    }
    default:
      return state
  }
}

export default Services
