import * as types from '../constants/ActionTypes'

let nextMessageId = 0
const nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export const addDS13318 = (records) => ({
  type: types.ADD_DS13318,
  records
})


export const addApp = (app) => ({
  type: types.ADD_APP,
  app
})
