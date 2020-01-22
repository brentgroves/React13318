import { connect } from 'react-redux'
import SignUpComponent from '../components/SignUp'
import { updateFirstName } from '../actions'

//export const SignUp = connect(state => ({isAdmin:state.bpgservices.isAdmin,isAuthenticated:state.bpgservices.isAuthenticated}), {})(SignUpComponent)


const mapDispatchToProps = dispatch => ({
  updateUserName: (name) => dispatch(updateFirstName(name))
});

/*
const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset())
});
*/
//export const SignIn = connect(() => (state => {srv:state.bpgservices.app}), mapDispatchToProps)(SignInComponent)
export const SignUp = connect(state => ({userName:state.bpgservices.userName,srv:state.bpgservices.app}), mapDispatchToProps)(SignUpComponent)
