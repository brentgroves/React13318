import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import { updateFirstName,isAuthenticated,isAdmin,AuthenticateSaga,LogoutSaga } from '../actions'
/*
const mapDispatchToProps = dispatch => ({
  updateUserName: (name) => dispatch(updateUserName(name)),
  isAuthenticated: (authenticated) => dispatch(isAuthenticated(authenticated)),
  isAdmin: (isAdmin) => dispatch(isAdmin(isAdmin))

});
*/
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  updateFirstName: (name) => dispatch(updateFirstName(name)),
  isAuthenticated: (authenticated) => dispatch(isAuthenticated(authenticated)),
  isAdmin: (admin) => dispatch(isAdmin(admin)),
  AuthenticateSaga: (user) => dispatch(AuthenticateSaga(user)),
  LogoutSaga: () => dispatch(LogoutSaga())
  }
}

function mapStateToProps(state) {
  const { User } = state
  return {
  	firstName: User.firstName,
    authenticateError: User.authenticateError
  }
}

/*
const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset())
});
*/
//export const SignIn = connect(() => (state => {srv:state.bpgservices.app}), mapDispatchToProps)(SignInComponent)
export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent)
