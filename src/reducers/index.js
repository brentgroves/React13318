import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import ds13318 from './ds13318'

const chat = combineReducers({
  messages,
  users,
  ds13318
})

export default chat
