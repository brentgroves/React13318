import { combineReducers } from 'redux'
import User from './User'
import DS13318 from './DS13318'
import Kep13313 from './Kep13313'

const Services = combineReducers({
  User,
  DS13318,
  Kep13313
})

export default Services
