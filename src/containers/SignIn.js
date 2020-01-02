import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import { updateUserName,isAuthenticated,isAdmin } from '../actions'
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
  updateUserName: (name) => dispatch(updateUserName(name)),
  isAuthenticated: (authenticated) => dispatch(isAuthenticated(authenticated)),
  isAdmin: (admin) => dispatch(isAdmin(admin))
  }
}

function mapStateToProps(state) {
  const { bpgservices } = state
  return { 
  	userName: bpgservices.userName,
  	srv: bpgservices.app 
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
