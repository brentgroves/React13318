import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import { addUserName } from '../actions'
const mapDispatchToProps = dispatch => ({
  dispatch: (name) => dispatch(addUserName(name))
});

/*
const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset())
});
*/
//export const SignIn = connect(() => (state => {srv:state.bpgservices.app}), mapDispatchToProps)(SignInComponent)
export const SignIn = connect(state => ({userName:state.bpgservices.userName,srv:state.bpgservices.app}), mapDispatchToProps)(SignInComponent)
