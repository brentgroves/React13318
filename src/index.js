import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import { App } from "./containers/App";
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'
import handleNewMessage from './sagas'
import setupSocket from './sockets'
import username from './utils/name'

async function main(){

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(
      applyMiddleware(sagaMiddleware)
  )
);

const socket = await setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

}

main()
