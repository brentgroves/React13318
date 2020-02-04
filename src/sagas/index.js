import { put, takeEvery, all } from 'redux-saga/effects'
//import { put, call } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import { push } from 'connected-react-router'
//import { rcvDS13318, rcvKep13318, isAuthenticated,isAdmin,updateFirstName,SetAuthenticateError,Authen } from '../actions'
var g_test = 'Global test'
var g_services
var g_dispatch
/*
export const handleReAuthenticate = function* handleReAuthenticate({services,dispatch}) {
  yield takeEvery(types.REAUTHENTICATE, (action) => {
    await services.reAuthenticate().then(() => {
      dispatch(isAuthenticated(true));
    }).catch(() => {
      dispatch(isAuthenticated(false));
    });
    //send(JSON.stringify(action))
  })
}

*/

/*
export const handleSignUp = function* handleSignUp({services,dispatch}) {
  yield takeEvery(types.SIGNUP, (action) => {
    action.author = params.username
    await services.service('users')
      .create({
        "email": "user4@buschegroup.com",
        "password": "JesusLives1!",
        "userName": "Brent",
        "isAdmin": true,
        "roles": [ "Admin", "Manager", "Quality"]
    }).then(async (res) => {
      // Logged in
      //const { user } = await srv.get('authentication');
    console.log('created user!')
    //    console.log(res.user.isAdmin);
    //  console.log(res.user.userName);
      // Gets the authenticated accessToken (JWT)
      //const { accessToken } = await app.get('authentication');
    //  dispatch(addUserName(res.user.userName))
    //  dispatch(isAdmin(true));
    //  dispatch(isAuthenticated(true));
    }).catch(e => {
      // Show login page (potentially with `e.message`)
      console.error('Authentication error', e);
    });
    //send(JSON.stringify(action))
  })
}
*/

/*
// Testing only.
export const handleKep13318 = function* handleKep13318({services,dispatch}) {
  yield takeEvery(types.ADD_KEP13318, (action) => {
//    params.servicesocket.send(JSON.stringify(action))
    await services.service('Kep13318').create({
    text: "test",
    }).catch((e) => {
    // Show login page (potentially with `e.message`)
    //updateUserName('logged out')

    alert('Authentication error');
    });
  })
}
*/

/*
export const handleAuthenticate = function* handleAuthenticate({services,dispatch}) {
  yield takeEvery(types.AUTHENTICATE, (action) => {
    await services.authenticate({
    "strategy": "local",
    "email": "user4@buschegroup.com",
    "password": "JesusLives1!"
    }).then(async (res) => {
      // Logged in
      //const { user } = await srv.get('authentication');

      console.log(res.user.isAdmin);
      console.log(res.user.firstName);
      // Gets the authenticated accessToken (JWT)
      //const { accessToken } = await app.get('authentication');
    //  dispatch(addUserName(res.user.userName))
      dispatch(isAdmin(res.user.isAdmin));
      dispatch(updateFirstName(res.user.firstName))
      dispatch(isAuthenticated(true));
    }).catch(e => {
      // Show login page (potentially with `e.message`)
      console.error('Authentication error', e);
    });
    //send(JSON.stringify(action))
  })
}
*/
function* handleAuthenticate(action) {
  console.log(action);
  try{
    g_dispatch(actions.AuthenticateIsSubmitting(true));
    var res = yield g_services.authenticate({
    "strategy": "local",
    "email": action.email,
    "password": action.password
    })
    console.log(res.user.isAdmin);
    g_dispatch(actions.SetIsAuthenticated(true));
    g_dispatch(actions.SetIsAdmin(res.user.isAdmin));
    g_dispatch(actions.SetUserName(res.user.userName));
    g_dispatch(actions.SetFirstName(res.user.firstName));
    g_dispatch(actions.SetLastName(res.user.lastName));
    g_dispatch(actions.SetEmail(res.user.email));
    g_dispatch(actions.SetRoles(res.user.roles));
    g_dispatch(actions.AuthenticateIsSubmitting(false));
    yield put(push('/dashboard'))
  } catch(err) {
    g_dispatch(actions.SetAuthenticateError(err.message))
    console.log(err);
    g_dispatch(actions.AuthenticateIsSubmitting(false));
  }
/*
  yield g_services.authenticate({
  "strategy": "local",
  "email": "user4@buschegroup.com",
  "password": "JesusLives1!"
  }).then(async (res) => {
    // Logged in
    //const { user } = await srv.get('authentication');

    console.log(res.user.isAdmin);
    console.log(g_test);
    g_dispatch(isAdmin(res.user.isAdmin))
    //g_dispatch(updateFirstName(res.user.userName))

    //console.log(res.user.firstName);
    // Gets the authenticated accessToken (JWT)
    //const { accessToken } = await app.get('authentication');
    //g_dispatch(addUserName(res.user.userName))
    //yield put(isAdmin(res.user.isAdmin));
    //dispatch(updateFirstName(res.user.firstName))
    //dispatch(isAuthenticated(true));
  }).catch(e => {
    // Show login page (potentially with `e.message`)
    console.error('Authentication error', e);
  });
  */
}

  function* handleLogout(action) {
    yield g_services.logout();
  }

function* watchAuthenticate() {
  yield takeEvery(types.AUTHENTICATE_SAGA, handleAuthenticate)
}

function* watchLogout() {
  yield takeEvery(types.LOGOUT_SAGA, handleLogout)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
//    handleKep13318(),
//    handleSignUp(),
    watchAuthenticate(),
    watchLogout()
//    handleReAuthenticate()
  ])
}
export function setSAGA(services,dispatch) {
  g_services = services
  g_dispatch = dispatch
}
/*
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}

*/


/*
Kep13318Service.on('created', message => {
  console.log('Received a Kep13318 message', message);
  dispatch(messageReceived(message.text, 'Kep13313'));

});

srv.service('Kep13318').create({
text: "test",
}).catch((e) => {
// Show login page (potentially with `e.message`)
updateUserName('logged out')

alert('Authentication error');
});
*/
