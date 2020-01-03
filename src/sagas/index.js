import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import { rcvDS13318, rcvKep13318, isAuthenticated,isAdmin,updateFirstName } from '../actions'


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
