import * as types from '../constants/ActionTypes'
import { messageReceived, populateUsersList } from '../actions'
const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
/*
const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8989')
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }

  return socket
}
*/
const setupSocket = (dispatch, username) => {
  //const socket = new WebSocket('ws://localhost:8989')
  const socket = io('http://localhost:3030');
  const client = feathers();
  client.configure(socketio(socket));
console.log('connecting to Kep13318');
  const Kep13318Service = client.service('Kep13318');
  Kep13318Service.on('created', message => {
    console.log('Received a Kep13318 message', message);
    dispatch(messageReceived(message.text, 'Kep13313'));
  });
  const Sproc13318Service = client.service('Sproc13318');
  Sproc13318Service.on('created', message => {
    console.log('Received a Sproc13318 message', message);
    dispatch(messageReceived(message.text, 'Sproc13313'));
  });

  /*
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }
  */

  return socket
}

export default setupSocket
