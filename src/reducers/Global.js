import * as types from '../constants/ActionTypes'


const initState = {
  isSubmitting: false,
}


const Global = (state = initState, action) => {
  switch (action.type) {
    case types.IS_SUBMITTING:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         isSubmitting: action.isSubmitting
       })
    }
    default:
      return state
  }
}

export default Global
