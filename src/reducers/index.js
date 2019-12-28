import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import ds13318 from './ds13318'
import bpgservices from './bpgservices'

const chat = combineReducers({
  messages,
  users,
  ds13318,
  bpgservices
})

export default chat
