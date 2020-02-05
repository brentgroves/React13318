import * as types from '../constants/ActionTypes'


const initState = {
  startId: 1,
  records:[]
}


const User = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_HOURLY_OEE_VALUE:
    {
      return {
        ...state,
        records: [...state.records, action.record]
      }
    }
    /*
    TWO Options to add item to array
    case ADD_ITEM :
    return {
        ...state,
        arr: [...state.arr, action.newItem]
    }
    case ADD_ITEM :
    return {
        ...state,
        arr: state.arr.concat(action.newItem)
    }
    */
    case types.SET_HOURLY_OEE_VALUES_STARTID:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         startId: action.startId
       })
    }
    default:
      return state
  }
}

export default User
