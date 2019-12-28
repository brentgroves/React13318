
import * as types from '../constants/ActionTypes'
import { messageReceived, populateUsersList,addDS13318,addApp } from '../actions'
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client')
const io = require('socket.io-client');
const auth = require('@feathersjs/authentication-client');


//const io = require('socket.io-client');
//const feathers = require('@feathersjs/feathers');
//const socketio = require('@feathersjs/socketio-client');
//import feathers from '@feathersjs/client';
//import client from '../feathers';
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

/*
const socket = io(config.BPGServicesURI);
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication({
  storage: window.localStorage
}));
*/

const setupSocket = async (dispatch, username) => {
  //const socket = new WebSocket('ws://localhost:8989')

  const socket = io('http://localhost:3030');
  const srv = feathers();

  // Setup the transport (Rest, Socket, etc.) here
  srv.configure(socketio(socket));

  // Available options are listed in the "Options" section
  srv.configure(auth({
    storageKey: 'auth'
  }))


await srv.authenticate({
"strategy": "local",
"email": "user@someone.com",
"password": "JesusLives1!"
}).catch(error => console.log(error));

  dispatch(addApp(srv));

console.log('connecting to Kep13318');
  const Kep13318Service = srv.service('Kep13318');
  Kep13318Service.on('created', message => {
    console.log('Received a Kep13318 message', message);
    dispatch(messageReceived(message.text, 'Kep13313'));
  });
  const Sproc13318Service = srv.service('Sproc13318');
  Sproc13318Service.on('created', message => {
    console.log('Received a Sproc13318 message');
    console.log(`message=> ${message.text[0].TransDate}`)
      dispatch(addDS13318(message.text));

  //  const p = JSON.parse(message.text.toString()); // payload is a buffer
//    dispatch(messageReceived(message.text, 'Sproc13313'));
//    dispatch(addDS13318(message.text));
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
