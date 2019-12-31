import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import { addUserName } from '../actions'
const mapDispatchToProps = dispatch => ({
  dispatch: (name) => dispatch(addUserName('test'))
});

/*
const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset())
});
*/
export const SignIn = connect(() => ({}), mapDispatchToProps)(SignInComponent)
