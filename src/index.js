import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import { App } from "./containers/App";
//import App from "./App";
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'
import {handleKep13318,handleSignIn,handleDS13318} from './sagas'
import setupServices from './services'
import username from './utils/name'

async function main(){

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(
      applyMiddleware(sagaMiddleware)
  )
);


const services = await setupServices(store.dispatch)

//sagaMiddleware.run(handleNewMessage, { services, username })
sagaMiddleware.run(handleKep13318, { services,store.dispatch })

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
